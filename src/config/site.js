/**
 * Configuración general del sitio.
 *
 * Los datos de contacto y ubicación provienen del material oficial del
 * proyecto: el manual de marca y los datos que el propietario validó en la
 * versión anterior del sitio (WhatsApp, redes, coordenadas y distancias).
 *
 * Lo que todavía no está confirmado queda en `null`. El sitio oculta
 * automáticamente cualquier dato en `null`, así que completar un valor aquí
 * y volver a compilar (`npm run build`) basta para que aparezca.
 */
export const site = {
  name: 'El Cadillar Apart Hotel',
  shortName: 'El Cadillar',
  // Nombre con el que figura en redes (instagram.com/cabanasdelcadillar).
  alternateName: 'Cabañas del Cadillar',
  // Frase de la tarjeta de presentación del manual de marca.
  tagline: { es: 'Naturaleza y descanso', en: 'Nature and rest', fr: 'Nature et repos', pt: 'Natureza e descanso' },

  // Dirección pública y carpeta de publicación. Al compilar se pueden cambiar con
  // las variables SITE_URL y BASE_PATH: el flujo de GitHub Actions publica en
  // https://kdtlb.github.io/cabanas-el-cadillar/.
  // PENDIENTE: dominio definitivo. El de la papelería del manual de marca
  // (www.elcadillaraparthotel.com) todavía no está registrado.
  url: process.env.SITE_URL || 'https://www.elcadillaraparthotel.com',
  // Nombre de la carpeta, con o sin barras: "cabanas-el-cadillar" → "/cabanas-el-cadillar"
  basePath: (process.env.BASE_PATH || '').replace(/^\/+|\/+$/g, '').replace(/^(?=.)/, '/'),

  defaultLocale: 'es',
  // El español es el idioma principal; los demás cuelgan de /en/, /fr/ y /pt/.
  locales: {
    es: { enabled: true, lang: 'es', ogLocale: 'es_BO', label: 'Español' },
    en: { enabled: true, lang: 'en', ogLocale: 'en_US', label: 'English' },
    fr: { enabled: true, lang: 'fr', ogLocale: 'fr_FR', label: 'Français' },
    pt: { enabled: true, lang: 'pt', ogLocale: 'pt_BR', label: 'Português' },
  },

  contact: {
    whatsapp: { number: '59175600149', display: '+591 756 00149' },
    // PENDIENTE: teléfono para llamadas (si el número de WhatsApp también las recibe, repetirlo aquí).
    phone: null,
    // PENDIENTE: la papelería del manual usa el formato nombre@elcadillaraparthotel.com.
    email: null,
  },

  social: [
    { id: 'instagram', label: 'Instagram', url: 'https://www.instagram.com/cabanasdelcadillar/' },
    { id: 'facebook', label: 'Facebook', url: 'https://www.facebook.com/TarijaHospedaje/' },
    { id: 'tiktok', label: 'TikTok', url: 'https://www.tiktok.com/@cabanaselcadillar' },
    { id: 'airbnb', label: 'Airbnb', url: 'https://www.airbnb.com.bo/rooms/985653335549550155' },
  ],

  location: {
    // PENDIENTE: dirección postal exacta, si existe (calle o referencia).
    streetAddress: null,
    // Comunidad y municipio según OpenStreetMap para las coordenadas del predio
    // (detalle y distancias en src/data/location.js).
    community: 'Cadillar',
    municipality: 'San Lorenzo',
    region: 'Tarija',
    country: 'BO',
    countryName: { es: 'Bolivia', en: 'Bolivia', fr: 'Bolivie', pt: 'Bolívia' },
    geo: { lat: -21.499031775530792, lng: -64.77102580573317 },
  },

  stay: {
    checkIn: null, // PENDIENTE: horario de ingreso, p. ej. '14:00'
    checkOut: null, // PENDIENTE: horario de salida
  },

  booking: {
    // Si en el futuro se integra un motor de reservas, poner aquí su URL:
    // los botones "Reservar" apuntarán a él en lugar de la página de reserva por WhatsApp.
    engineUrl: null,
  },

  analytics: {
    ga4: null, // 'G-XXXXXXXXXX' (Google Analytics 4)
    gtm: null, // 'GTM-XXXXXXX' (Google Tag Manager)
    metaPixel: null, // ID del píxel de Meta para campañas
    googleSiteVerification: null, // código de verificación de Google Search Console
  },

  credit: { label: 'BUCKDI', url: 'https://buck-di.com' },
};

export const whatsappUrl = (message) =>
  `https://wa.me/${site.contact.whatsapp.number}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

export const mapsUrls = (() => {
  const { lat, lng } = site.location.geo;
  const point = `${lat},${lng}`;
  // El mapa incrustado busca la ficha del lugar en Google ("Cabañas del Cadillar"),
  // porque así muestra la marca con el nombre; con las coordenadas solas no aparece
  // ninguna marca. Los enlaces para llegar sí usan las coordenadas, que son exactas.
  const ficha = encodeURIComponent(`${site.alternateName} ${site.location.region}`);
  return {
    place: `https://www.google.com/maps/search/?api=1&query=${point}`,
    directions: `https://www.google.com/maps/dir/?api=1&destination=${point}`,
    embed: `https://www.google.com/maps?q=${ficha}&z=15&hl=es&output=embed`,
  };
})();
