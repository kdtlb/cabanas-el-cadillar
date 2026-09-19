/**
 * Rutas del sitio por idioma.
 *
 * URLs amigables en cada idioma. El español va en la raíz; inglés, francés y
 * portugués cuelgan de /en/, /fr/ y /pt/.
 */
export const routes = {
  home: { es: '/', en: '/en/', fr: '/fr/', pt: '/pt/' },
  cabins: { es: '/cabanas/', en: '/en/cabins/', fr: '/fr/chalets/', pt: '/pt/cabanas/' },
  experience: { es: '/experiencia/', en: '/en/experience/', fr: '/fr/experience/', pt: '/pt/experiencia/' },
  business: { es: '/salon-empresarial/', en: '/en/meetings/', fr: '/fr/salle-entreprises/', pt: '/pt/sala-empresas/' },
  tarija: { es: '/tarija/', en: '/en/tarija/', fr: '/fr/tarija/', pt: '/pt/tarija/' },
  gallery: { es: '/galeria/', en: '/en/gallery/', fr: '/fr/galerie/', pt: '/pt/galeria/' },
  location: { es: '/ubicacion/', en: '/en/location/', fr: '/fr/acces/', pt: '/pt/como-chegar/' },
  contact: { es: '/contacto/', en: '/en/contact/', fr: '/fr/contact/', pt: '/pt/contato/' },
  booking: { es: '/reservar/', en: '/en/book/', fr: '/fr/reserver/', pt: '/pt/reservar/' },
};

export const pathFor = (key, locale = 'es') => routes[key]?.[locale] ?? routes[key]?.es;

export const cabinPath = (cabin, locale = 'es') => `${pathFor('cabins', locale)}${cabin.slug?.[locale] ?? cabin.id}/`;

// Navegación principal (el botón "Reservar" se agrega aparte).
export const mainNav = ['home', 'cabins', 'experience', 'business', 'tarija', 'gallery', 'location', 'contact'];
