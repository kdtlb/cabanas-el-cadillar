/**
 * Salón para reuniones empresariales.
 *
 * Confirmado por el propietario: el salón es de uso exclusivo para empresas
 * (no se ofrece para eventos sociales) y, junto con el salón, se ofrece
 * hospedaje para los participantes en las cabañas, aperitivos y comidas.
 *
 * Datos del propietario: 90 m², capacidad para 45 personas, internet y
 * estacionamiento disponibles. Los menús se definen con cada grupo.
 *
 * PENDIENTE: las opciones de aperitivos figuran como "XX" hasta tener el
 * dato. También faltan fotos del interior del salón.
 *
 * Los textos llevan los cuatro idiomas del sitio (es, en, fr, pt).
 */
import { cabins } from './cabins.js';

// Plazas de hospedaje: suma de la capacidad de las cabañas (src/data/cabins.js)
export const lodgingCapacity = cabins.reduce((total, cabin) => total + cabin.guests, 0);

export const meetingRoom = {
  photo: 'salon-eventos-entrada',
  icon: 'building',
  title: {
    es: '¿Viajas por trabajo?',
    en: 'Travelling for work?',
    fr: 'Vous voyagez pour le travail ?',
    pt: 'Viajando a trabalho?',
  },
  text: {
    es: 'El Cadillar cuenta con un salón de uso exclusivo para reuniones empresariales, con hospedaje para tu equipo en las cabañas del mismo predio, aperitivos y comidas.',
    en: 'El Cadillar has a room used only for company meetings, with lodging for your team in the cabins on the same grounds, refreshments and meals.',
    fr: "El Cadillar dispose d'une salle réservée aux réunions d'entreprise, avec hébergement de votre équipe dans les chalets du domaine, apéritifs et repas.",
    pt: 'O El Cadillar tem uma sala de uso exclusivo para reuniões de empresas, com hospedagem para a equipe nas cabanas do mesmo terreno, aperitivos e refeições.',
  },
  whatsappMessage: {
    es: 'Hola, quisiera cotizar el salón para reuniones empresariales de El Cadillar.\nFecha: \nCantidad de personas: \nServicios: salón / hospedaje / aperitivos / comidas',
    en: 'Hello! I would like a quote for the company meeting room at El Cadillar.\nDate: \nNumber of people: \nServices: room / lodging / refreshments / meals',
    fr: "Bonjour, je souhaiterais un devis pour la salle de réunion d'entreprise d'El Cadillar.\nDate : \nNombre de personnes : \nServices : salle / hébergement / apéritifs / repas",
    pt: 'Olá! Gostaria de um orçamento da sala para reuniões de empresas do El Cadillar.\nData: \nQuantidade de pessoas: \nServiços: sala / hospedagem / aperitivos / refeições',
  },
};

export const roomFacts = [
  {
    value: { es: '45', en: '45', fr: '45', pt: '45' },
    label: {
      es: 'personas de capacidad en el salón',
      en: 'people fit in the meeting room',
      fr: 'personnes dans la salle',
      pt: 'pessoas de capacidade na sala',
    },
  },
  {
    value: { es: '90 m²', en: '90 m²', fr: '90 m²', pt: '90 m²' },
    label: { es: 'de superficie', en: 'of floor space', fr: 'de surface', pt: 'de área' },
  },
  {
    value: { es: String(lodgingCapacity), en: String(lodgingCapacity), fr: String(lodgingCapacity), pt: String(lodgingCapacity) },
    label: {
      es: 'plazas de hospedaje en 10 cabañas',
      en: 'beds available across 10 cabins',
      fr: 'places d’hébergement dans 10 chalets',
      pt: 'vagas de hospedagem em 10 cabanas',
    },
  },
  {
    value: { es: '7 km', en: '7 km', fr: '7 km', pt: '7 km' },
    label: {
      es: 'del centro de Tarija',
      en: 'from the centre of Tarija',
      fr: 'du centre de Tarija',
      pt: 'do centro de Tarija',
    },
  },
];

export const roomBenefits = [
  {
    icon: 'building',
    title: { es: 'Solo para empresas', en: 'Companies only', fr: 'Réservée aux entreprises', pt: 'Exclusiva para empresas' },
    text: {
      es: 'El salón se usa únicamente para reuniones de trabajo, no para eventos sociales.',
      en: 'The room is used only for work meetings, never for social events.',
      fr: "La salle sert uniquement aux réunions de travail, pas aux événements privés.",
      pt: 'A sala é usada apenas para reuniões de trabalho, não para eventos sociais.',
    },
  },
  {
    icon: 'leaf',
    title: { es: 'Calma para concentrarse', en: 'Quiet to focus', fr: 'Le calme pour se concentrer', pt: 'Calma para se concentrar' },
    text: {
      es: 'Al pie de los cerros y lejos del ruido de la ciudad, en un entorno que invita a pensar.',
      en: 'At the foot of the hills and away from city noise, in a setting that invites thinking.',
      fr: "Au pied des collines et loin du bruit de la ville, dans un cadre propice à la réflexion.",
      pt: 'Ao pé dos morros e longe do barulho da cidade, em um ambiente que convida a pensar.',
    },
  },
  {
    icon: 'bed',
    title: { es: 'Tu equipo se queda aquí', en: 'Your team stays here', fr: 'Votre équipe dort sur place', pt: 'Sua equipe fica aqui' },
    text: {
      es: `Hospedaje en las 10 cabañas del mismo predio, con ${lodgingCapacity} plazas en total.`,
      en: `Lodging in the 10 cabins on the same grounds, sleeping ${lodgingCapacity} people in total.`,
      fr: `Hébergement dans les 10 chalets du domaine, ${lodgingCapacity} places au total.`,
      pt: `Hospedagem nas 10 cabanas do mesmo terreno, com ${lodgingCapacity} vagas no total.`,
    },
  },
  {
    icon: 'coffee',
    title: { es: 'Aperitivos y comidas', en: 'Refreshments and meals', fr: 'Apéritifs et repas', pt: 'Aperitivos e refeições' },
    text: {
      es: 'Recibimos al grupo con aperitivos y resolvemos las comidas de la jornada.',
      en: 'We welcome the group with refreshments and take care of the day’s meals.',
      fr: "Nous accueillons le groupe avec des apéritifs et nous occupons des repas de la journée.",
      pt: 'Recebemos o grupo com aperitivos e cuidamos das refeições do dia.',
    },
  },
  {
    icon: 'tree',
    title: { es: 'Pausas al aire libre', en: 'Breaks outdoors', fr: 'Des pauses en plein air', pt: 'Pausas ao ar livre' },
    text: {
      es: 'Jardines, terraza y pérgola para despejarse entre una sesión y otra.',
      en: 'Gardens, a terrace and a pergola to clear your head between sessions.',
      fr: "Jardins, terrasse et pergola pour souffler entre deux sessions.",
      pt: 'Jardins, terraço e pérgola para espairecer entre uma sessão e outra.',
    },
  },
  {
    icon: 'plane',
    title: { es: 'Fácil de llegar', en: 'Easy to reach', fr: 'Facile d’accès', pt: 'Fácil de chegar' },
    text: {
      es: 'A 7 km del centro de Tarija y a 10 km del aeropuerto.',
      en: '7 km from the centre of Tarija and 10 km from the airport.',
      fr: "À 7 km du centre de Tarija et à 10 km de l'aéroport.",
      pt: 'A 7 km do centro de Tarija e a 10 km do aeroporto.',
    },
  },
];

export const roomSpecs = [
  {
    icon: 'users',
    label: { es: 'Capacidad máxima', en: 'Maximum capacity', fr: 'Capacité maximale', pt: 'Capacidade máxima' },
    value: { es: '45 personas', en: '45 people', fr: '45 personnes', pt: '45 pessoas' },
  },
  {
    icon: 'area',
    label: { es: 'Superficie', en: 'Floor space', fr: 'Surface', pt: 'Área' },
    value: { es: '90 m²', en: '90 m²', fr: '90 m²', pt: '90 m²' },
  },
  {
    icon: 'wifi',
    label: { es: 'Internet', en: 'Internet', fr: 'Internet', pt: 'Internet' },
    value: { es: 'Disponible', en: 'Available', fr: 'Disponible', pt: 'Disponível' },
  },
  {
    icon: 'parking',
    label: { es: 'Estacionamiento', en: 'Parking', fr: 'Parking', pt: 'Estacionamento' },
    value: { es: 'Disponible', en: 'Available', fr: 'Disponible', pt: 'Disponível' },
  },
];

export const roomServices = [
  {
    id: 'hospedaje',
    icon: 'bed',
    title: {
      es: 'Hospedaje para los participantes',
      en: 'Lodging for the participants',
      fr: 'Hébergement des participants',
      pt: 'Hospedagem para os participantes',
    },
    text: {
      es: `Tu equipo puede alojarse en las 10 cabañas independientes del predio, todas con baño privado: ${lodgingCapacity} plazas en total.`,
      en: `Your team can stay in the 10 independent cabins on the grounds, all with a private bathroom: ${lodgingCapacity} beds in total.`,
      fr: `Votre équipe peut loger dans les 10 chalets indépendants du domaine, tous avec salle de bain privée : ${lodgingCapacity} places au total.`,
      pt: `Sua equipe pode ficar nas 10 cabanas independentes do terreno, todas com banheiro privativo: ${lodgingCapacity} vagas no total.`,
    },
  },
  {
    id: 'aperitivos',
    icon: 'coffee',
    title: { es: 'Aperitivos', en: 'Refreshments', fr: 'Apéritifs', pt: 'Aperitivos' },
    text: {
      es: 'Para recibir al grupo y para las pausas de la reunión. Opciones: XX.',
      en: 'To welcome the group and for breaks during the meeting. Options: XX.',
      fr: 'Pour accueillir le groupe et pour les pauses de la réunion. Options : XX.',
      pt: 'Para receber o grupo e para as pausas da reunião. Opções: XX.',
    },
  },
  {
    id: 'comidas',
    icon: 'utensils',
    title: { es: 'Comidas', en: 'Meals', fr: 'Repas', pt: 'Refeições' },
    text: {
      es: 'Las comidas de la jornada, sin salir del lugar. El menú se define con cada grupo.',
      en: 'The day’s meals, without leaving the property. The menu is agreed with each group.',
      fr: "Les repas de la journée, sans quitter le domaine. Le menu se définit avec chaque groupe.",
      pt: 'As refeições do dia, sem sair do lugar. O cardápio é definido com cada grupo.',
    },
  },
  {
    id: 'a-medida',
    icon: 'check',
    title: {
      es: 'A la medida de tu grupo',
      en: 'Tailored to your group',
      fr: 'Sur mesure pour votre groupe',
      pt: 'Sob medida para o seu grupo',
    },
    text: {
      es: 'Combina el salón, el hospedaje, los aperitivos y las comidas según tu reunión, y te enviamos una sola cotización.',
      en: 'Combine the room, the lodging, the refreshments and the meals to suit your meeting, and we send you a single quote.',
      fr: "Combinez la salle, l'hébergement, les apéritifs et les repas selon votre réunion : nous vous envoyons un devis unique.",
      pt: 'Combine a sala, a hospedagem, os aperitivos e as refeições conforme a sua reunião, e enviamos um único orçamento.',
    },
  },
];
