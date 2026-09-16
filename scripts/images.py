#!/usr/bin/env python3
"""
Optimiza las fotografías del catálogo para la web.

Lee src/data/photos.json y, para cada foto:
  - genera versiones AVIF y WebP en varios anchos en public/img/fotos/
  - si tiene "og": true, genera una imagen de 1200x630 (JPEG) para compartir
    en redes en public/img/og/
Escribe src/data/images.json con dimensiones, anchos generados y el color
promedio de cada foto (se usa de fondo mientras la imagen carga).

Solo procesa lo que cambió (caché en .cache/images.json):
  npm run images              # incremental
  npm run images -- --force   # regenera todo

Requiere Python 3 y Pillow 11.3 o superior (con soporte AVIF):
  pip install -U pillow
"""
from __future__ import annotations

import hashlib
import io
import json
import os
import sys
from concurrent.futures import ProcessPoolExecutor, as_completed
from pathlib import Path

from PIL import Image, ImageCms, ImageOps, features

ROOT = Path(__file__).resolve().parent.parent
CATALOG = ROOT / "src" / "data" / "photos.json"
MANIFEST = ROOT / "src" / "data" / "images.json"
PHOTOS_DIR = ROOT / "public" / "img" / "fotos"
OG_DIR = ROOT / "public" / "img" / "og"
CACHE_FILE = ROOT / ".cache" / "images.json"

PIPELINE_VERSION = 1
HERO_WIDTHS = [640, 960, 1280, 1920, 2560]
PORTRAIT_MAX_WIDTH = 1200
OG_SIZE = (1200, 630)


def load_catalog() -> dict:
    data = json.loads(CATALOG.read_text(encoding="utf-8"))
    seen = set()
    for photo in data["photos"]:
        if photo["id"] in seen:
            sys.exit(f"Id repetido en photos.json: {photo['id']}")
        seen.add(photo["id"])
        if not (ROOT / photo["src"]).is_file():
            sys.exit(f"No existe la foto de origen de '{photo['id']}': {photo['src']}")
    return data


def target_widths(photo: dict, width: int, height: int, defaults: dict) -> list[int]:
    base = HERO_WIDTHS if photo.get("hero") else list(defaults["widths"])
    if height > width:
        base = [w for w in base if w <= PORTRAIT_MAX_WIDTH] or base[:1]
    largest = min(width, base[-1])
    widths = [w for w in base if w <= largest * 0.9]
    widths.append(largest)
    return sorted(set(widths))


def focus_point(value: str | None) -> tuple[float, float]:
    try:
        x, y = (float(part.strip().rstrip("%")) / 100 for part in (value or "50% 50%").split())
        return (min(max(x, 0.0), 1.0), min(max(y, 0.0), 1.0))
    except ValueError:
        return (0.5, 0.5)


def to_srgb(image: Image.Image) -> Image.Image:
    icc = image.info.get("icc_profile")
    if icc:
        try:
            source = ImageCms.ImageCmsProfile(io.BytesIO(icc))
            target = ImageCms.createProfile("sRGB")
            return ImageCms.profileToProfile(image, source, target, outputMode="RGB")
        except (ImageCms.PyCMSError, OSError):
            pass
    return image.convert("RGB")


def fingerprint(photo: dict, defaults: dict) -> str:
    stat = (ROOT / photo["src"]).stat()
    payload = json.dumps(
        {
            "version": PIPELINE_VERSION,
            "size": stat.st_size,
            "mtime": int(stat.st_mtime),
            "photo": {key: photo.get(key) for key in ("src", "hero", "og", "focus", "quality")},
            "defaults": defaults,
        },
        sort_keys=True,
    )
    return hashlib.sha1(payload.encode("utf-8")).hexdigest()


def expected_files(photo_id: str, widths: list[int], og: str | None) -> list[Path]:
    files = [PHOTOS_DIR / f"{photo_id}-{w}.{ext}" for w in widths for ext in ("avif", "webp")]
    if og:
        files.append(OG_DIR / f"{photo_id}.jpg")
    return files


def process(photo: dict, defaults: dict) -> dict:
    image = to_srgb(ImageOps.exif_transpose(Image.open(ROOT / photo["src"])))
    width, height = image.size
    widths = target_widths(photo, width, height, defaults)
    quality = {**defaults["quality"], **photo.get("quality", {})}

    for w in widths:
        resized = image if w == width else image.resize((w, round(height * w / width)), Image.Resampling.LANCZOS)
        resized.save(PHOTOS_DIR / f"{photo['id']}-{w}.avif", "AVIF", quality=quality["avif"], speed=6)
        resized.save(PHOTOS_DIR / f"{photo['id']}-{w}.webp", "WEBP", quality=quality["webp"], method=6)

    og = None
    if photo.get("og"):
        cropped = ImageOps.fit(image, OG_SIZE, Image.Resampling.LANCZOS, centering=focus_point(photo.get("focus")))
        cropped.save(OG_DIR / f"{photo['id']}.jpg", "JPEG", quality=84, optimize=True, progressive=True)
        og = f"/img/og/{photo['id']}.jpg"

    average = image.resize((1, 1), Image.Resampling.BOX).getpixel((0, 0))
    return {
        "width": width,
        "height": height,
        "widths": widths,
        "color": "#{:02x}{:02x}{:02x}".format(*average),
        "og": og,
    }


def main() -> None:
    if not features.check("avif"):
        sys.exit("Esta instalación de Pillow no soporta AVIF. Actualiza con: pip install -U pillow")

    force = "--force" in sys.argv
    catalog = load_catalog()
    defaults = catalog["defaults"]
    for folder in (PHOTOS_DIR, OG_DIR, CACHE_FILE.parent):
        folder.mkdir(parents=True, exist_ok=True)

    cache = {}
    if CACHE_FILE.is_file() and not force:
        cache = json.loads(CACHE_FILE.read_text(encoding="utf-8"))

    manifest, pending = {}, []
    for photo in catalog["photos"]:
        key = fingerprint(photo, defaults)
        cached = cache.get(photo["id"])
        if (
            cached
            and cached["key"] == key
            and all(p.is_file() for p in expected_files(photo["id"], cached["entry"]["widths"], cached["entry"]["og"]))
        ):
            manifest[photo["id"]] = cached["entry"]
        else:
            pending.append((photo, key))

    print(f"{len(catalog['photos'])} fotos en el catálogo · {len(pending)} para procesar")
    if pending:
        with ProcessPoolExecutor(max_workers=max(1, (os.cpu_count() or 2) - 1)) as pool:
            futures = {pool.submit(process, photo, defaults): (photo, key) for photo, key in pending}
            for done, future in enumerate(as_completed(futures), start=1):
                photo, key = futures[future]
                entry = future.result()
                manifest[photo["id"]] = entry
                cache[photo["id"]] = {"key": key, "entry": entry}
                print(f"  [{done}/{len(pending)}] {photo['id']} → {entry['widths']}")

    ordered = {photo["id"]: manifest[photo["id"]] for photo in catalog["photos"]}
    MANIFEST.write_text(json.dumps(ordered, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    CACHE_FILE.write_text(json.dumps({k: v for k, v in cache.items() if k in ordered}, indent=2), encoding="utf-8")

    expected = {p.name for pid, entry in ordered.items() for p in expected_files(pid, entry["widths"], entry["og"])}
    removed = 0
    for folder in (PHOTOS_DIR, OG_DIR):
        for file in folder.iterdir():
            if file.is_file() and file.name not in expected:
                file.unlink()
                removed += 1

    total = sum(f.stat().st_size for folder in (PHOTOS_DIR, OG_DIR) for f in folder.iterdir() if f.is_file())
    note = f" · {removed} archivos obsoletos eliminados" if removed else ""
    print(f"Listo: {len(ordered)} fotos · {total / 1_048_576:.1f} MB en public/img{note}")


if __name__ == "__main__":
    main()
