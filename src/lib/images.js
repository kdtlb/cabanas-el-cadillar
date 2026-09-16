/**
 * Acceso a las fotos optimizadas.
 *
 * Combina el catálogo (src/data/photos.json: textos alternativos, etiquetas,
 * créditos) con el manifiesto que genera `npm run images`
 * (src/data/images.json: dimensiones y anchos disponibles).
 */
export function createImageStore(catalog, manifest) {
  const photos = new Map(catalog.photos.map((photo) => [photo.id, photo]));

  const get = (id) => {
    const photo = photos.get(id);
    if (!photo) throw new Error(`No existe la foto "${id}" en src/data/photos.json.`);
    const meta = manifest[id];
    if (!meta) throw new Error(`La foto "${id}" no está optimizada. Ejecutar: npm run images`);
    return { ...photo, ...meta };
  };

  const file = (photo, width, extension) => `/img/fotos/${photo.id}-${width}.${extension}`;
  const closest = (photo, target) =>
    photo.widths.reduce((best, width) => (Math.abs(width - target) < Math.abs(best - target) ? width : best), photo.widths[0]);

  return {
    get,
    srcset: (photo, extension) => photo.widths.map((width) => `${file(photo, width, extension)} ${width}w`).join(', '),
    url: (photo, target = 800, extension = 'webp') => file(photo, closest(photo, target), extension),
    largest: (photo, extension = 'webp') => file(photo, photo.widths.at(-1), extension),
    gallery: () => catalog.photos.filter((photo) => photo.gallery).map((photo) => get(photo.id)),
    credited: () => catalog.photos.filter((photo) => photo.credit).map((photo) => get(photo.id)),
  };
}
