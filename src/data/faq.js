/**
 * Preguntas frecuentes, pensadas para quien no conoce El Cadillar.
 *
 * Regla: solo se responde con información confirmada.
 * `a: null` = dato pendiente. Esas preguntas NO se publican hasta que se
 * complete la respuesta aquí y se vuelva a compilar el sitio. Al completarlas,
 * escribir la respuesta en los cuatro idiomas (es, en, fr, pt).
 */
import { site } from '../config/site.js';

const whatsapp = site.contact.whatsapp.display;

export const faq = [
  {
    id: 'ubicacion',
    q: {
      es: '¿Dónde está El Cadillar?',
      en: 'Where is El Cadillar?',
      fr: 'Où se trouve El Cadillar ?',
      pt: 'Onde fica o El Cadillar?',
    },
    a: {
      es: 'En la comunidad de Cadillar (municipio de San Lorenzo), a 7 km del centro de Tarija, Bolivia. Queda pasando Tomatitas, sobre el camino a La Victoria y Coimata. En la página de ubicación encontrarás el mapa y la ruta en Google Maps.',
      en: 'In the community of Cadillar (municipality of San Lorenzo), 7 km from the centre of Tarija, Bolivia. It is just past Tomatitas, on the road to La Victoria and Coimata. The location page has the map and the route in Google Maps.',
      fr: "Dans la communauté de Cadillar (commune de San Lorenzo), à 7 km du centre de Tarija, en Bolivie. C'est juste après Tomatitas, sur la route de La Victoria et Coimata. La page d'accès contient la carte et l'itinéraire dans Google Maps.",
      pt: 'Na comunidade de Cadillar (município de San Lorenzo), a 7 km do centro de Tarija, na Bolívia. Fica passando Tomatitas, na estrada para La Victoria e Coimata. Na página de como chegar você encontra o mapa e a rota no Google Maps.',
    },
  },
  {
    id: 'capacidad',
    q: {
      es: '¿Cuántas personas pueden hospedarse en cada cabaña?',
      en: 'How many people can stay in each cabin?',
      fr: 'Combien de personnes peuvent loger dans chaque chalet ?',
      pt: 'Quantas pessoas cabem em cada cabana?',
    },
    a: {
      es: 'Depende de la cabaña: la 3, la 5, la 6, la 7 y la 8 reciben hasta 3 personas; la 4, la 9 y la 10, hasta 4; y la 1 y la 2, hasta 5. En la página de cabañas puedes compararlas lado a lado.',
      en: 'It depends on the cabin: numbers 3, 5, 6, 7 and 8 sleep up to 3 people; numbers 4, 9 and 10, up to 4; and numbers 1 and 2, up to 5. You can compare them side by side on the cabins page.',
      fr: "Cela dépend du chalet : les numéros 3, 5, 6, 7 et 8 accueillent jusqu'à 3 personnes ; les numéros 4, 9 et 10, jusqu'à 4 ; et les numéros 1 et 2, jusqu'à 5. La page des chalets permet de les comparer.",
      pt: 'Depende da cabana: a 3, a 5, a 6, a 7 e a 8 recebem até 3 pessoas; a 4, a 9 e a 10, até 4; e a 1 e a 2, até 5. Na página de cabanas dá para comparar lado a lado.',
    },
  },
  {
    id: 'cocina',
    q: {
      es: '¿Las cabañas tienen cocina?',
      en: 'Do the cabins have a kitchen?',
      fr: 'Les chalets ont-ils une cuisine ?',
      pt: 'As cabanas têm cozinha?',
    },
    a: {
      es: 'La mayoría sí: las cabañas 2, 4, 5, 6, 7, 8, 9 y 10 tienen cocina o kitchenette con microondas, y varias suman frigobar. La ficha de cada cabaña detalla su equipamiento.',
      en: 'Most of them do: cabins 2, 4, 5, 6, 7, 8, 9 and 10 have a kitchen or kitchenette with a microwave, and several also have a mini fridge. Each cabin page lists its equipment.',
      fr: "La plupart oui : les chalets 2, 4, 5, 6, 7, 8, 9 et 10 disposent d'une cuisine ou d'une kitchenette avec micro-ondes, et plusieurs ont aussi un mini-réfrigérateur. La fiche de chaque chalet détaille ses équipements.",
      pt: 'A maioria sim: as cabanas 2, 4, 5, 6, 7, 8, 9 e 10 têm cozinha ou cozinha compacta com micro-ondas, e várias ainda têm frigobar. A página de cada cabana detalha o equipamento.',
    },
  },
  {
    id: 'piscina',
    q: { es: '¿Tiene piscina?', en: 'Is there a pool?', fr: 'Y a-t-il une piscine ?', pt: 'Tem piscina?' },
    a: {
      es: 'Sí. El Cadillar tiene una piscina al aire libre rodeada de jardines, con los cerros de Tarija de fondo.',
      en: 'Yes. El Cadillar has an outdoor pool surrounded by gardens, with the hills of Tarija behind it.',
      fr: 'Oui. El Cadillar dispose d’une piscine en plein air entourée de jardins, avec les collines de Tarija en fond.',
      pt: 'Sim. O El Cadillar tem uma piscina ao ar livre cercada de jardins, com os morros de Tarija ao fundo.',
    },
  },
  {
    id: 'espacios',
    q: {
      es: '¿Qué espacios comunes hay?',
      en: 'What shared spaces are there?',
      fr: 'Quels espaces communs y a-t-il ?',
      pt: 'Quais são os espaços comuns?',
    },
    a: {
      es: 'Además de la piscina, el predio tiene un quincho con parrilla, una terraza, un patio con pérgola, jardines con senderos y juegos infantiles.',
      en: 'Besides the pool, the grounds have a barbecue house, a terrace, a pergola courtyard, gardens with paths and a playground.',
      fr: "En plus de la piscine, le domaine compte un espace barbecue, une terrasse, une cour sous pergola, des jardins avec sentiers et des jeux pour enfants.",
      pt: 'Além da piscina, o terreno tem área de churrasco, terraço, pátio com pérgola, jardins com trilhas e parquinho.',
    },
  },
  {
    id: 'ninos',
    q: {
      es: '¿Es un buen lugar para ir con niños?',
      en: 'Is it a good place to come with children?',
      fr: 'Est-ce un bon endroit pour venir avec des enfants ?',
      pt: 'É um bom lugar para ir com crianças?',
    },
    a: {
      es: 'El predio tiene juegos infantiles junto a la piscina y jardines para recorrer. Si viajas con niños, cuéntanos sus edades al consultar para recomendarte la cabaña más cómoda.',
      en: 'The grounds have a playground next to the pool and gardens to wander through. If you are travelling with children, tell us their ages when you write and we will suggest the most comfortable cabin.',
      fr: "Le domaine dispose de jeux pour enfants près de la piscine et de jardins à parcourir. Si vous voyagez avec des enfants, indiquez-nous leur âge : nous vous conseillerons le chalet le plus confortable.",
      pt: 'O terreno tem parquinho ao lado da piscina e jardins para passear. Se você viaja com crianças, conte as idades ao consultar para indicarmos a cabana mais confortável.',
    },
  },
  {
    id: 'reservar',
    q: {
      es: '¿Cómo puedo reservar?',
      en: 'How can I book?',
      fr: 'Comment réserver ?',
      pt: 'Como faço para reservar?',
    },
    a: {
      es: `Por WhatsApp. En la página de reserva eliges la cabaña, las fechas y la cantidad de personas, y se abre una conversación con el mensaje listo para enviar. También puedes escribirnos directamente al ${whatsapp}.`,
      en: `On WhatsApp. On the booking page you choose the cabin, the dates and the number of guests, and a chat opens with the message ready to send. You can also write to us directly at ${whatsapp}.`,
      fr: `Sur WhatsApp. Sur la page de réservation, vous choisissez le chalet, les dates et le nombre de personnes, et une conversation s'ouvre avec le message prêt à envoyer. Vous pouvez aussi nous écrire directement au ${whatsapp}.`,
      pt: `Pelo WhatsApp. Na página de reserva você escolhe a cabana, as datas e a quantidade de pessoas, e abre uma conversa com a mensagem pronta para enviar. Você também pode falar direto no ${whatsapp}.`,
    },
  },
  {
    id: 'llegar',
    q: {
      es: '¿Cómo llego a El Cadillar?',
      en: 'How do I get to El Cadillar?',
      fr: 'Comment venir à El Cadillar ?',
      pt: 'Como chego ao El Cadillar?',
    },
    a: {
      es: 'Tarija tiene vuelos desde La Paz, Santa Cruz y Cochabamba, y buses desde las principales ciudades de Bolivia. El Cadillar está a unos 10 km del aeropuerto y a 14 km de la terminal de buses; desde el centro de Tarija son 7 km.',
      en: 'Tarija has flights from La Paz, Santa Cruz and Cochabamba, and buses from the main cities in Bolivia. El Cadillar is about 10 km from the airport and 14 km from the bus terminal; from the centre of Tarija it is 7 km.',
      fr: "Tarija est desservie par des vols depuis La Paz, Santa Cruz et Cochabamba, et par des bus depuis les principales villes de Bolivie. El Cadillar se trouve à environ 10 km de l'aéroport et à 14 km de la gare routière ; à 7 km du centre de Tarija.",
      pt: 'Tarija tem voos de La Paz, Santa Cruz e Cochabamba, e ônibus das principais cidades da Bolívia. O El Cadillar fica a cerca de 10 km do aeroporto e a 14 km da rodoviária; do centro de Tarija são 7 km.',
    },
  },
  {
    id: 'empresas',
    q: {
      es: '¿Tienen un salón para empresas?',
      en: 'Do you have a meeting room for companies?',
      fr: "Avez-vous une salle pour les entreprises ?",
      pt: 'Vocês têm sala para empresas?',
    },
    a: {
      es: 'Sí. El Cadillar cuenta con un salón de uso exclusivo para reuniones empresariales, y también ofrece hospedaje para los participantes en las cabañas, aperitivos y comidas. Escríbenos por WhatsApp para cotizar.',
      en: 'Yes. El Cadillar has a room used only for company meetings, and also offers lodging for the participants in the cabins, refreshments and meals. Message us on WhatsApp for a quote.',
      fr: "Oui. El Cadillar dispose d'une salle réservée aux réunions d'entreprise, et propose aussi l'hébergement des participants dans les chalets, des apéritifs et des repas. Écrivez-nous sur WhatsApp pour un devis.",
      pt: 'Sim. O El Cadillar tem uma sala de uso exclusivo para reuniões de empresas e também oferece hospedagem para os participantes nas cabanas, aperitivos e refeições. Fale pelo WhatsApp para orçar.',
    },
  },

  // ——— Pendientes de confirmar (no se publican mientras `a` sea null) ———
  {
    id: 'incluye',
    q: { es: '¿Qué incluye la estadía?', en: 'What does the stay include?', fr: 'Que comprend le séjour ?', pt: 'O que a estadia inclui?' },
    a: null,
  },
  {
    id: 'estacionamiento',
    q: { es: '¿Tiene estacionamiento?', en: 'Is there parking?', fr: 'Y a-t-il un parking ?', pt: 'Tem estacionamento?' },
    a: null,
  },
  {
    id: 'mascotas',
    q: { es: '¿Aceptan mascotas?', en: 'Are pets allowed?', fr: 'Les animaux sont-ils acceptés ?', pt: 'Aceitam animais de estimação?' },
    a: null,
  },
  {
    id: 'checkin',
    q: { es: '¿Cuál es el horario de check-in?', en: 'What time is check-in?', fr: "Quelle est l'heure d'arrivée ?", pt: 'Qual é o horário de check-in?' },
    a: null,
  },
  {
    id: 'checkout',
    q: { es: '¿Cuál es el horario de check-out?', en: 'What time is check-out?', fr: "Quelle est l'heure de départ ?", pt: 'Qual é o horário de check-out?' },
    a: null,
  },
  { id: 'wifi', q: { es: '¿Hay WiFi?', en: 'Is there Wi-Fi?', fr: 'Y a-t-il le Wi-Fi ?', pt: 'Tem Wi-Fi?' }, a: null },
  {
    id: 'precios',
    q: { es: '¿Cuánto cuesta la noche?', en: 'How much does a night cost?', fr: 'Combien coûte la nuit ?', pt: 'Quanto custa a diária?' },
    a: null,
  },
];

export const publishedFaq = (locale = 'es') => faq.filter((item) => item.a && item.a[locale]);
