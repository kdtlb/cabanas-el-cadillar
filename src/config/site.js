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
  tagline: { es: 'Naturaleza y descanso' },

  // PENDIENTE: confirmar el dominio definitivo. Es el que figura en la
  // papelería del manual de marca (www.elcadillaraparthotel.com).
  url: 'https://www.elcadillaraparthotel.com',

  defaultLocale: 'es',
  locales: {
    es: { enabled: true, lang: 'es', ogLocale: 'es_BO', label: 'Español' },
    // Activar solo cuando exista una traducción revisada (no automática).
    en: { enabled: false, lang: 'en', ogLocale: 'en_US', label: 'English' },
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
    countryName: { es: 'Bolivia' },
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
  return {
    place: `https://www.google.com/maps/search/?api=1&query=${point}`,
    directions: `https://www.google.com/maps/dir/?api=1&destination=${point}`,
    embed: `https://www.google.com/maps?q=${point}&z=14&hl=es&output=embed`,
  };
})();
