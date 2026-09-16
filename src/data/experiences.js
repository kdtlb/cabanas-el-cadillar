/**
 * La experiencia El Cadillar: momentos de una estadía, espacios del predio y
 * beneficios. Todo se apoya en fotografías reales (ids de src/data/photos.json).
 *
 * PENDIENTE: el brief menciona una zona de hamacas, pero ninguna foto ni video
 * del material la muestra. Cuando exista material, completar el momento
 * `hamacas`, cargar su foto en photos.json y poner `enabled: true`.
 */
export const moments = [
  {
    id: 'llegar',
    photo: 'exterior-cabana-dia-de-sol',
    title: { es: 'Llegar y bajar el ritmo' },
    text: {
      es: 'A 7 km del centro de Tarija el paisaje cambia: árboles, jardines, cielo abierto y los cerros de fondo.',
    },
  },
  {
    id: 'cabana',
    photo: 'cabana-1-galeria',
    title: { es: 'Instalarte en tu cabaña' },
    text: {
      es: 'Cada cabaña es independiente y tiene su carácter: una galería con reposeras, un hogar a leña, una parrilla propia o un balcón.',
    },
  },
  {
    id: 'piscina',
    photo: 'piscina-valle',
    title: { es: 'Una tarde en la piscina' },
    text: { es: 'Sol, agua y jardines: la piscina al aire libre, con el valle y los cerros de Tarija en el horizonte.' },
  },
  {
    id: 'rincones',
    photo: 'terraza-cactus-mural',
    title: { es: 'Rincones para no hacer nada' },
    text: {
      es: 'La terraza del mural, el patio bajo la pérgola o un sendero entre cactus: lugares para leer, conversar o mirar el cielo.',
    },
  },
  {
    id: 'quincho',
    photo: 'quincho-mesa-larga',
    title: { es: 'Compartir en el quincho' },
    text: {
      es: 'Mesa larga, parrilla y techo de caña: el lugar para los asados, las comidas en grupo y las sobremesas.',
    },
  },
  {
    id: 'hamacas',
    enabled: false,
    photo: null,
    title: { es: 'Una siesta en la hamaca' },
    text: { es: '' },
  },
  {
    id: 'tarija',
    photo: 'tarija-coimata',
    title: { es: 'Salir a descubrir Tarija' },
    text: {
      es: 'Tomatitas y Coimata están a 2 y 3 km; San Lorenzo, a 11; el Valle de la Concepción y sus bodegas, a 33.',
    },
  },
  {
    id: 'volver',
    photo: 'cabana-10-dormitorio',
    title: { es: 'Volver y descansar' },
    text: { es: 'De regreso, la luz cálida de tu cabaña y la tranquilidad del campo para cerrar el día.' },
  },
].filter((moment) => moment.enabled !== false);

export const spaces = [
  {
    id: 'piscina',
    icon: 'pool',
    photos: ['piscina-valle', 'vista-piscina-cerros', 'piscina-cabanas'],
    title: { es: 'Piscina al aire libre' },
    text: {
      es: 'Rodeada de jardines y árboles, con el valle y los cerros de Tarija de fondo. A su alrededor hay reposeras y juegos infantiles.',
    },
  },
  {
    id: 'quincho',
    icon: 'grill',
    photos: ['quincho-mesa-larga', 'quincho-parrilla', 'quincho-salon'],
    title: { es: 'Quincho con parrilla' },
    text: {
      es: 'Techo de caña, parrilla, cocina y mesas para compartir: un espacio pensado para reunirse alrededor de la comida.',
    },
  },
  {
    id: 'areas-sociales',
    icon: 'pergola',
    photos: ['terraza-cactus-mural', 'pergola-patio', 'terraza-mesas'],
    title: { es: 'Terraza y patio con pérgola' },
    text: {
      es: 'Baldosas al sol, cactus y un mural en la terraza; mesas de hierro a la sombra de la pérgola en el patio.',
    },
  },
  {
    id: 'jardines',
    icon: 'tree',
    photos: ['jardin-pergola-cabanas', 'cabana-3-galeria-lavandas', 'sendero-muro-piedra'],
    title: { es: 'Jardines y senderos' },
    text: { es: 'Árboles, lavandas, cactus y muros de piedra entre las cabañas, para recorrer sin apuro.' },
  },
  {
    id: 'detalles',
    icon: 'leaf',
    photos: ['detalle-ceramicas', 'detalle-cocina-antigua', 'detalle-rueda-carreta'],
    title: { es: 'Detalles con historia' },
    text: {
      es: 'Cerámicas, una antigua cocina de hierro, una rueda de carreta y cuadros bordados: cada rincón guarda algo para descubrir.',
    },
  },
];

export const benefits = [
  { icon: 'house', title: { es: '10 cabañas independientes' }, text: { es: 'De todo tamaño, todas con baño privado.' } },
  { icon: 'pool', title: { es: 'Piscina al aire libre' }, text: { es: 'Entre jardines, con los cerros de fondo.' } },
  { icon: 'grill', title: { es: 'Quincho con parrilla' }, text: { es: 'Para asados, comidas en grupo y sobremesas.' } },
  { icon: 'pergola', title: { es: 'Áreas sociales' }, text: { es: 'Terraza, patio con pérgola y galerías.' } },
  { icon: 'tree', title: { es: 'Espacios al aire libre' }, text: { es: 'Jardines, senderos, árboles y lavandas.' } },
  { icon: 'kitchen', title: { es: 'Cocina propia' }, text: { es: 'Cocina o kitchenette en la mayoría de las cabañas.' } },
  { icon: 'playground', title: { es: 'Para ir en familia' }, text: { es: 'Juegos infantiles junto a la piscina.' } },
  { icon: 'pin', title: { es: 'Cerca de todo' }, text: { es: 'A 7 km del centro de Tarija y a 2 km de Tomatitas.' } },
];
