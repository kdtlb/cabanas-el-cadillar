/**
 * Preguntas frecuentes, pensadas para quien no conoce El Cadillar.
 *
 * Regla: solo se responde con información confirmada.
 * `a: null` = dato pendiente. Esas preguntas NO se publican hasta que se
 * complete la respuesta aquí y se vuelva a compilar el sitio.
 */
import { site } from '../config/site.js';

const whatsapp = site.contact.whatsapp.display;

export const faq = [
  {
    id: 'ubicacion',
    q: { es: '¿Dónde está El Cadillar?' },
    a: {
      es: 'En la comunidad de Cadillar (municipio de San Lorenzo), a 7 km del centro de Tarija, Bolivia. Queda pasando Tomatitas, sobre el camino a La Victoria y Coimata. En la página de ubicación encontrarás el mapa y la ruta en Google Maps.',
    },
  },
  {
    id: 'capacidad',
    q: { es: '¿Cuántas personas pueden hospedarse en cada cabaña?' },
    a: {
      es: 'Depende de la cabaña: la 3, la 5, la 6, la 7 y la 8 reciben hasta 3 personas; la 4, la 9 y la 10, hasta 4; y la 1 y la 2, hasta 5. En la página de cabañas puedes compararlas lado a lado.',
    },
  },
  {
    id: 'cocina',
    q: { es: '¿Las cabañas tienen cocina?' },
    a: {
      es: 'La mayoría sí: las cabañas 2, 4, 5, 6, 7, 8, 9 y 10 tienen cocina o kitchenette con microondas, y varias suman frigobar. La ficha de cada cabaña detalla su equipamiento.',
    },
  },
  {
    id: 'piscina',
    q: { es: '¿Tiene piscina?' },
    a: { es: 'Sí. El Cadillar tiene una piscina al aire libre rodeada de jardines, con los cerros de Tarija de fondo.' },
  },
  {
    id: 'espacios',
    q: { es: '¿Qué espacios comunes hay?' },
    a: {
      es: 'Además de la piscina, el predio tiene un quincho con parrilla, una terraza, un patio con pérgola, jardines con senderos y juegos infantiles.',
    },
  },
  {
    id: 'ninos',
    q: { es: '¿Es un buen lugar para ir con niños?' },
    a: {
      es: 'El predio tiene juegos infantiles junto a la piscina y jardines para recorrer. Si viajas con niños, cuéntanos sus edades al consultar para recomendarte la cabaña más cómoda.',
    },
  },
  {
    id: 'reservar',
    q: { es: '¿Cómo puedo reservar?' },
    a: {
      es: `Por WhatsApp. En la página de reserva eliges la cabaña, las fechas y la cantidad de personas, y se abre una conversación con el mensaje listo para enviar. También puedes escribirnos directamente al ${whatsapp}.`,
    },
  },
  {
    id: 'llegar',
    q: { es: '¿Cómo llego a El Cadillar?' },
    a: {
      es: 'Tarija tiene vuelos desde La Paz, Santa Cruz y Cochabamba, y buses desde las principales ciudades de Bolivia. El Cadillar está a unos 10 km del aeropuerto y a 14 km de la terminal de buses; desde el centro de Tarija son 7 km.',
    },
  },
  {
    id: 'empresas',
    q: { es: '¿Tienen un salón para empresas?' },
    a: {
      es: 'Sí. El Cadillar cuenta con un salón de uso exclusivo para reuniones empresariales, y también ofrece hospedaje para los participantes en las cabañas, aperitivos y comidas. Escríbenos por WhatsApp para cotizar.',
    },
  },

  // ——— Pendientes de confirmar (no se publican mientras `a` sea null) ———
  { id: 'incluye', q: { es: '¿Qué incluye la estadía?' }, a: null },
  { id: 'estacionamiento', q: { es: '¿Tiene estacionamiento?' }, a: null },
  { id: 'mascotas', q: { es: '¿Aceptan mascotas?' }, a: null },
  { id: 'checkin', q: { es: '¿Cuál es el horario de check-in?' }, a: null },
  { id: 'checkout', q: { es: '¿Cuál es el horario de check-out?' }, a: null },
  { id: 'wifi', q: { es: '¿Hay WiFi?' }, a: null },
  { id: 'precios', q: { es: '¿Cuánto cuesta la noche?' }, a: null },
];

export const publishedFaq = (locale = 'es') => faq.filter((item) => item.a && item.a[locale]);
