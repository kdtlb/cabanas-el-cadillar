#!/usr/bin/env python3
"""
Genera los archivos de marca para la web a partir del original de Illustrator.

Fuente: DISEÑO/Logos/ElCadillarApartHotel.ai, cuya mesa de trabajo contiene
las versiones oficiales del logotipo. El logotipo es una pieza fija de arte
(manual de marca): este script solo convierte sus formas vectoriales a SVG,
sin redibujarlas ni cambiar sus colores.

Salida:
  public/marca/logo-horizontal.svg          composición horizontal a color
  public/marca/logo-horizontal-blanco.svg   versión de línea en blanco
  public/marca/logo-vertical.svg            composición principal a color
  public/marca/logo-vertical-blanco.svg     versión de línea en blanco (la oficial sobre marrón)
  public/marca/isotipo.svg                  símbolo a color
  public/favicon.svg, favicon.ico, apple-touch-icon.png, icon-192.png, icon-512.png

Uso: npm run brand   (requiere: pip install pymupdf pillow)
"""
from __future__ import annotations

import sys
from pathlib import Path

import pymupdf
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
SOURCE = ROOT / "DISEÑO" / "Logos" / "ElCadillarApartHotel.ai"
BRAND_DIR = ROOT / "public" / "marca"
PUBLIC = ROOT / "public"

BROWN = "#61483a"
WHITE = "#ffffff"
PAPER = (253, 252, 247)  # blanco cálido de las páginas del manual (#FDFCF7)
ILLUSTRATION_FILLS = {"#c8dae7", "#bdc497", "#faedaf", "#cbaf99"}  # cielo, ladera, sol y madera
SCALE = 10  # coordenadas enteras con precisión de 0,1 pt
LABEL = "El Cadillar Apart Hotel"

# Zonas de la mesa de trabajo (en puntos) donde está cada versión del logotipo
VERTICAL = pymupdf.Rect(200, 60, 375, 270)
HORIZONTAL = pymupdf.Rect(150, 360, 460, 495)
BAND_BROWN = pymupdf.Rect(0, 560, 160, 792)


def hex_color(color) -> str:
    return "#{:02x}{:02x}{:02x}".format(*(round(c * 255) for c in color))


def inside(rect, zone) -> bool:
    x, y = (rect.x0 + rect.x1) / 2, (rect.y0 + rect.y1) / 2
    return zone.x0 <= x <= zone.x1 and zone.y0 <= y <= zone.y1


def path_data(items, ox: float, oy: float) -> str:
    def point(p) -> str:
        return f"{round((p.x - ox) * SCALE)} {round((p.y - oy) * SCALE)}"

    parts, current = [], None
    for item in items:
        kind = item[0]
        if kind in ("l", "c"):
            start = item[1]
            if current is None or abs(current.x - start.x) > 1e-3 or abs(current.y - start.y) > 1e-3:
                if parts:
                    parts.append("Z")
                parts.append("M" + point(start))
            if kind == "l":
                parts.append("L" + point(item[2]))
                current = item[2]
            else:
                parts.append("C" + " ".join(point(p) for p in item[2:5]))
                current = item[4]
        elif kind == "re":
            rect = item[1]
            if parts:
                parts.append("Z")
            parts.append(f"M{point(rect.tl)}L{point(rect.tr)}L{point(rect.br)}L{point(rect.bl)}")
            current = None
        elif kind == "qu":
            quad = item[1]
            if parts:
                parts.append("Z")
            parts.append(f"M{point(quad.ul)}L{point(quad.ur)}L{point(quad.lr)}L{point(quad.ll)}")
            current = None
    parts.append("Z")
    return "".join(parts)


def to_svg(shapes: list[tuple[dict, str]]) -> tuple[str, float]:
    """shapes: lista de (dibujo, color de relleno) en el orden original de pintado."""
    bounds = pymupdf.Rect()
    for drawing, _ in shapes:
        bounds.include_rect(drawing["rect"])
    pad = 0.6
    ox, oy = bounds.x0 - pad, bounds.y0 - pad
    width = round((bounds.width + 2 * pad) * SCALE)
    height = round((bounds.height + 2 * pad) * SCALE)

    groups: list[tuple[str, list[str]]] = []
    for drawing, fill in shapes:  # agrupa rellenos consecutivos del mismo color
        rule = ' fill-rule="evenodd"' if drawing.get("even_odd") else ""
        element = f'<path{rule} d="{path_data(drawing["items"], ox, oy)}"/>'
        if groups and groups[-1][0] == fill:
            groups[-1][1].append(element)
        else:
            groups.append((fill, [element]))
    body = "".join(f'<g fill="{fill}">{"".join(elements)}</g>' for fill, elements in groups)

    svg = (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}" role="img" aria-label="{LABEL}">'
        f"<title>{LABEL}</title>{body}</svg>\n"
    )
    return svg, width / height


def render(svg: str, size_px: int) -> Image.Image:
    """Renderiza un SVG a RGBA con el lado mayor igual a size_px."""
    page = pymupdf.open(stream=svg.encode("utf-8"), filetype="svg")[0]
    zoom = size_px / max(page.rect.width, page.rect.height)
    pix = page.get_pixmap(matrix=pymupdf.Matrix(zoom, zoom), alpha=True)
    return Image.frombytes("RGBA", (pix.width, pix.height), pix.samples)


def square_icon(symbol: Image.Image, size: int, padding: float, background=None) -> Image.Image:
    canvas = Image.new("RGBA", (size, size), (*background, 255) if background else (0, 0, 0, 0))
    inner = round(size * (1 - 2 * padding))
    icon = symbol.copy()
    icon.thumbnail((inner, inner), Image.Resampling.LANCZOS)
    canvas.alpha_composite(icon, ((size - icon.width) // 2, (size - icon.height) // 2))
    return canvas


def main() -> None:
    if not SOURCE.is_file():
        sys.exit(f"No se encontró el archivo de marca: {SOURCE}")
    BRAND_DIR.mkdir(parents=True, exist_ok=True)

    page = pymupdf.open(SOURCE, filetype="pdf")[0]
    drawings = [d for d in page.get_drawings() if d.get("fill") is not None]

    vertical = [(d, hex_color(d["fill"])) for d in drawings if inside(d["rect"], VERTICAL)]
    horizontal = [(d, hex_color(d["fill"])) for d in drawings if inside(d["rect"], HORIZONTAL)]
    vertical_white = [(d, WHITE) for d in drawings if inside(d["rect"], BAND_BROWN) and hex_color(d["fill"]) == WHITE]
    # Versión de línea: las mismas formas marrones del logotipo, sin los rellenos de la ilustración
    horizontal_white = [(d, WHITE) for d, fill in horizontal if fill not in ILLUSTRATION_FILLS]

    # El isotipo es todo lo que está dentro del marco redondeado (la forma marrón de mayor superficie)
    frame = max((d for d, fill in vertical if fill == BROWN), key=lambda d: d["rect"].width * d["rect"].height)["rect"]
    frame_zone = pymupdf.Rect(frame.x0 - 1, frame.y0 - 1, frame.x1 + 1, frame.y1 + 1)
    isotipo = [(d, fill) for d, fill in vertical if inside(d["rect"], frame_zone)]

    outputs = {
        "logo-vertical.svg": vertical,
        "logo-vertical-blanco.svg": vertical_white,
        "logo-horizontal.svg": horizontal,
        "logo-horizontal-blanco.svg": horizontal_white,
        "isotipo.svg": isotipo,
    }
    svgs = {}
    for name, shapes in outputs.items():
        if not shapes:
            sys.exit(f"No se encontraron formas para {name}: revisar las zonas de la mesa de trabajo.")
        svg, ratio = to_svg(shapes)
        (BRAND_DIR / name).write_text(svg, encoding="utf-8")
        svgs[name] = svg
        print(f"  public/marca/{name}: {len(shapes)} formas · {len(svg.encode()) / 1024:.1f} KB · proporción {ratio:.4f}")

    (PUBLIC / "favicon.svg").write_text(svgs["isotipo.svg"], encoding="utf-8")
    symbol = render(svgs["isotipo.svg"], 1024)
    square_icon(symbol, 180, 0.12, PAPER).convert("RGB").save(PUBLIC / "apple-touch-icon.png", optimize=True)
    square_icon(symbol, 192, 0.10, PAPER).save(PUBLIC / "icon-192.png", optimize=True)
    square_icon(symbol, 512, 0.10, PAPER).save(PUBLIC / "icon-512.png", optimize=True)
    square_icon(symbol, 64, 0.02).save(PUBLIC / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])
    print("  public/favicon.svg · favicon.ico · apple-touch-icon.png · icon-192.png · icon-512.png")


if __name__ == "__main__":
    main()
