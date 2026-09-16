/**
 * Rutas del sitio por idioma.
 *
 * URLs amigables en español. Las rutas en inglés quedan preparadas para
 * cuando se active ese idioma en src/config/site.js (locales.en.enabled).
 */
export const routes = {
  home: { es: '/', en: '/en/' },
  cabins: { es: '/cabanas/', en: '/en/cabins/' },
  experience: { es: '/experiencia/', en: '/en/experience/' },
  business: { es: '/salon-empresarial/', en: '/en/meetings/' },
  tarija: { es: '/tarija/', en: '/en/tarija/' },
  gallery: { es: '/galeria/', en: '/en/gallery/' },
  location: { es: '/ubicacion/', en: '/en/location/' },
  contact: { es: '/contacto/', en: '/en/contact/' },
  booking: { es: '/reservar/', en: '/en/book/' },
};

export const pathFor = (key, locale = 'es') => routes[key]?.[locale] ?? routes[key]?.es;

export const cabinPath = (cabin, locale = 'es') => `${pathFor('cabins', locale)}${cabin.slug?.[locale] ?? cabin.id}/`;

// Navegación principal (el botón "Reservar" se agrega aparte).
export const mainNav = ['home', 'cabins', 'experience', 'business', 'tarija', 'gallery', 'location', 'contact'];
