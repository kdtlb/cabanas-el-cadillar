/**
 * La experiencia El Cadillar: momentos de una estadía, espacios del predio y
 * beneficios. Todo se apoya en fotografías reales (ids de src/data/photos.json).
 * Los textos llevan los cuatro idiomas del sitio (es, en, fr, pt).
 *
 * PENDIENTE: el brief menciona una zona de hamacas, pero ninguna foto ni video
 * del material la muestra. Cuando exista material, completar el momento
 * `hamacas`, cargar su foto en photos.json y poner `enabled: true`.
 */
export const moments = [
  {
    id: 'llegar',
    photo: 'exterior-cabana-dia-de-sol',
    title: {
      es: 'Llegar y bajar el ritmo',
      en: 'Arrive and slow down',
      fr: 'Arriver et ralentir',
      pt: 'Chegar e desacelerar',
    },
    text: {
      es: 'A 7 km del centro de Tarija el paisaje cambia: árboles, jardines, cielo abierto y los cerros de fondo.',
      en: 'Seven kilometres from central Tarija the landscape changes: trees, gardens, open sky and the hills behind.',
      fr: "À 7 km du centre de Tarija, le paysage change : des arbres, des jardins, le ciel ouvert et les collines en fond.",
      pt: 'A 7 km do centro de Tarija a paisagem muda: árvores, jardins, céu aberto e os morros ao fundo.',
    },
  },
  {
    id: 'cabana',
    photo: 'cabana-1-galeria',
    title: {
      es: 'Instalarte en tu cabaña',
      en: 'Settle into your cabin',
      fr: "S'installer dans son chalet",
      pt: 'Se instalar na sua cabana',
    },
    text: {
      es: 'Cada cabaña es independiente y tiene su carácter: una galería con reposeras, un hogar a leña, una parrilla propia o un balcón.',
      en: 'Every cabin stands on its own and has its own character: a porch with loungers, a wood-burning fireplace, a private grill or a balcony.',
      fr: "Chaque chalet est indépendant et a son caractère : une galerie avec chaises longues, une cheminée à bois, un gril privé ou un balcon.",
      pt: 'Cada cabana é independente e tem seu jeito: uma varanda com espreguiçadeiras, uma lareira a lenha, uma churrasqueira própria ou uma sacada.',
    },
  },
  {
    id: 'piscina',
    photo: 'piscina-valle',
    title: {
      es: 'Una tarde en la piscina',
      en: 'An afternoon by the pool',
      fr: 'Un après-midi à la piscine',
      pt: 'Uma tarde na piscina',
    },
    text: {
      es: 'Sol, agua y jardines: la piscina al aire libre, con el valle y los cerros de Tarija en el horizonte.',
      en: 'Sun, water and gardens: the outdoor pool, with the valley and the hills of Tarija on the horizon.',
      fr: "Soleil, eau et jardins : la piscine en plein air, avec la vallée et les collines de Tarija à l'horizon.",
      pt: 'Sol, água e jardins: a piscina ao ar livre, com o vale e os morros de Tarija no horizonte.',
    },
  },
  {
    id: 'rincones',
    photo: 'terraza-cactus-mural',
    title: {
      es: 'Rincones para no hacer nada',
      en: 'Corners for doing nothing',
      fr: 'Des coins pour ne rien faire',
      pt: 'Cantinhos para não fazer nada',
    },
    text: {
      es: 'La terraza del mural, el patio bajo la pérgola o un sendero entre cactus: lugares para leer, conversar o mirar el cielo.',
      en: 'The mural terrace, the courtyard under the pergola or a path among cacti: places to read, talk or watch the sky.',
      fr: "La terrasse au mural, la cour sous la pergola ou un sentier entre les cactus : de quoi lire, discuter ou regarder le ciel.",
      pt: 'O terraço do mural, o pátio sob a pérgola ou uma trilha entre cactos: lugares para ler, conversar ou olhar o céu.',
    },
  },
  {
    id: 'quincho',
    photo: 'quincho-mesa-larga',
    title: {
      es: 'Compartir en el quincho',
      en: 'Share a meal at the barbecue house',
      fr: "Partager à l'espace barbecue",
      pt: 'Compartilhar na área de churrasco',
    },
    text: {
      es: 'Mesa larga, parrilla y techo de caña: el lugar para los asados, las comidas en grupo y las sobremesas.',
      en: 'A long table, a grill and a cane ceiling: the place for barbecues, group meals and long conversations afterwards.',
      fr: "Grande table, gril et plafond en roseau : l'endroit des grillades, des repas en groupe et des longues discussions.",
      pt: 'Mesa comprida, churrasqueira e teto de bambu: o lugar dos churrascos, das refeições em grupo e das boas conversas.',
    },
  },
  {
    id: 'hamacas',
    enabled: false,
    photo: null,
    title: { es: 'Una siesta en la hamaca', en: 'A nap in the hammock', fr: 'Une sieste dans le hamac', pt: 'Uma soneca na rede' },
    text: { es: '', en: '', fr: '', pt: '' },
  },
  {
    id: 'tarija',
    photo: 'tarija-coimata',
    title: {
      es: 'Salir a descubrir Tarija',
      en: 'Head out to discover Tarija',
      fr: 'Partir à la découverte de Tarija',
      pt: 'Sair para descobrir Tarija',
    },
    text: {
      es: 'Tomatitas y Coimata están a 2 y 3 km; San Lorenzo, a 11; el Valle de la Concepción y sus bodegas, a 33.',
      en: 'Tomatitas and Coimata are 2 and 3 km away; San Lorenzo, 11; and Valle de la Concepción with its wineries, 33.',
      fr: "Tomatitas et Coimata sont à 2 et 3 km ; San Lorenzo à 11 ; le Valle de la Concepción et ses caves à 33.",
      pt: 'Tomatitas e Coimata ficam a 2 e 3 km; San Lorenzo, a 11; o Valle de la Concepción e suas vinícolas, a 33.',
    },
  },
  {
    id: 'volver',
    photo: 'cabana-10-dormitorio',
    title: {
      es: 'Volver y descansar',
      en: 'Come back and rest',
      fr: 'Revenir et se reposer',
      pt: 'Voltar e descansar',
    },
    text: {
      es: 'De regreso, la luz cálida de tu cabaña y la tranquilidad del campo para cerrar el día.',
      en: 'Back again, the warm light of your cabin and the quiet of the countryside to close the day.',
      fr: "Au retour, la lumière chaude de votre chalet et le calme de la campagne pour finir la journée.",
      pt: 'Na volta, a luz quente da sua cabana e a tranquilidade do campo para fechar o dia.',
    },
  },
].filter((moment) => moment.enabled !== false);

export const spaces = [
  {
    id: 'piscina',
    icon: 'pool',
    photos: ['piscina-valle', 'vista-piscina-cerros', 'piscina-cabanas'],
    title: { es: 'Piscina al aire libre', en: 'Outdoor pool', fr: 'Piscine en plein air', pt: 'Piscina ao ar livre' },
    text: {
      es: 'Rodeada de jardines y árboles, con el valle y los cerros de Tarija de fondo. A su alrededor hay reposeras y juegos infantiles.',
      en: 'Surrounded by gardens and trees, with the valley and the hills of Tarija behind. Around it there are loungers and a playground.',
      fr: "Entourée de jardins et d'arbres, avec la vallée et les collines de Tarija en fond. Tout autour, des chaises longues et des jeux pour enfants.",
      pt: 'Cercada de jardins e árvores, com o vale e os morros de Tarija ao fundo. Em volta há espreguiçadeiras e parquinho.',
    },
  },
  {
    id: 'quincho',
    icon: 'grill',
    photos: ['quincho-mesa-larga', 'quincho-parrilla', 'quincho-salon'],
    title: { es: 'Quincho con parrilla', en: 'Barbecue house', fr: 'Espace barbecue', pt: 'Área de churrasco' },
    text: {
      es: 'Techo de caña, parrilla, cocina y mesas para compartir: un espacio pensado para reunirse alrededor de la comida.',
      en: 'A cane ceiling, a grill, a kitchen and tables to share: a space made for gathering around food.',
      fr: "Plafond en roseau, gril, cuisine et tables à partager : un espace pensé pour se réunir autour d'un repas.",
      pt: 'Teto de bambu, churrasqueira, cozinha e mesas para dividir: um espaço pensado para reunir gente em volta da comida.',
    },
  },
  {
    id: 'areas-sociales',
    icon: 'pergola',
    photos: ['terraza-cactus-mural', 'pergola-patio', 'terraza-mesas'],
    title: {
      es: 'Terraza y patio con pérgola',
      en: 'Terrace and pergola courtyard',
      fr: 'Terrasse et cour sous pergola',
      pt: 'Terraço e pátio com pérgola',
    },
    text: {
      es: 'Baldosas al sol, cactus y un mural en la terraza; mesas de hierro a la sombra de la pérgola en el patio.',
      en: 'Sunlit tiles, cacti and a mural on the terrace; iron tables in the shade of the pergola in the courtyard.',
      fr: "Carrelage au soleil, cactus et une fresque sur la terrasse ; tables en fer à l'ombre de la pergola dans la cour.",
      pt: 'Ladrilhos ao sol, cactos e um mural no terraço; mesas de ferro à sombra da pérgola no pátio.',
    },
  },
  {
    id: 'jardines',
    icon: 'tree',
    photos: ['jardin-pergola-cabanas', 'cabana-3-galeria-lavandas', 'sendero-muro-piedra'],
    title: { es: 'Jardines y senderos', en: 'Gardens and paths', fr: 'Jardins et sentiers', pt: 'Jardins e trilhas' },
    text: {
      es: 'Árboles, lavandas, cactus y muros de piedra entre las cabañas, para recorrer sin apuro.',
      en: 'Trees, lavender, cacti and stone walls between the cabins, to wander through slowly.',
      fr: "Arbres, lavandes, cactus et murs en pierre entre les chalets, à parcourir sans se presser.",
      pt: 'Árvores, lavandas, cactos e paredes de pedra entre as cabanas, para percorrer sem pressa.',
    },
  },
  {
    id: 'detalles',
    icon: 'leaf',
    photos: ['detalle-ceramicas', 'detalle-cocina-antigua', 'detalle-rueda-carreta'],
    title: { es: 'Detalles con historia', en: 'Details with a story', fr: 'Des détails qui racontent', pt: 'Detalhes com história' },
    text: {
      es: 'Cerámicas, una antigua cocina de hierro, una rueda de carreta y cuadros bordados: cada rincón guarda algo para descubrir.',
      en: 'Ceramics, an old iron stove, a cart wheel and embroidered pictures: every corner holds something to discover.',
      fr: "Céramiques, un vieux fourneau en fonte, une roue de charrette et des tableaux brodés : chaque recoin cache quelque chose.",
      pt: 'Cerâmicas, um antigo fogão de ferro, uma roda de carroça e quadros bordados: cada canto guarda algo para descobrir.',
    },
  },
];

export const benefits = [
  {
    icon: 'house',
    title: {
      es: '10 cabañas independientes',
      en: '10 independent cabins',
      fr: '10 chalets indépendants',
      pt: '10 cabanas independentes',
    },
    text: {
      es: 'De todo tamaño, todas con baño privado.',
      en: 'Of every size, all with a private bathroom.',
      fr: 'De toutes tailles, toutes avec salle de bain privée.',
      pt: 'De todos os tamanhos, todas com banheiro privativo.',
    },
  },
  {
    icon: 'pool',
    title: { es: 'Piscina al aire libre', en: 'Outdoor pool', fr: 'Piscine en plein air', pt: 'Piscina ao ar livre' },
    text: {
      es: 'Entre jardines, con los cerros de fondo.',
      en: 'Among gardens, with the hills behind.',
      fr: 'Entre les jardins, avec les collines en fond.',
      pt: 'Entre jardins, com os morros ao fundo.',
    },
  },
  {
    icon: 'grill',
    title: { es: 'Quincho con parrilla', en: 'Barbecue house', fr: 'Espace barbecue', pt: 'Área de churrasco' },
    text: {
      es: 'Para asados, comidas en grupo y sobremesas.',
      en: 'For barbecues, group meals and long conversations.',
      fr: 'Pour les grillades, les repas en groupe et les discussions.',
      pt: 'Para churrascos, refeições em grupo e boas conversas.',
    },
  },
  {
    icon: 'pergola',
    title: { es: 'Áreas sociales', en: 'Shared areas', fr: 'Espaces communs', pt: 'Áreas sociais' },
    text: {
      es: 'Terraza, patio con pérgola y galerías.',
      en: 'A terrace, a pergola courtyard and porches.',
      fr: 'Terrasse, cour sous pergola et galeries.',
      pt: 'Terraço, pátio com pérgola e varandas.',
    },
  },
  {
    icon: 'tree',
    title: { es: 'Espacios al aire libre', en: 'Outdoor spaces', fr: 'Espaces en plein air', pt: 'Espaços ao ar livre' },
    text: {
      es: 'Jardines, senderos, árboles y lavandas.',
      en: 'Gardens, paths, trees and lavender.',
      fr: 'Jardins, sentiers, arbres et lavandes.',
      pt: 'Jardins, trilhas, árvores e lavandas.',
    },
  },
  {
    icon: 'kitchen',
    title: { es: 'Cocina propia', en: 'Your own kitchen', fr: 'Cuisine privée', pt: 'Cozinha própria' },
    text: {
      es: 'Cocina o kitchenette en la mayoría de las cabañas.',
      en: 'A kitchen or kitchenette in most of the cabins.',
      fr: 'Cuisine ou kitchenette dans la plupart des chalets.',
      pt: 'Cozinha ou cozinha compacta na maioria das cabanas.',
    },
  },
  {
    icon: 'playground',
    title: { es: 'Para ir en familia', en: 'Good for families', fr: 'Idéal en famille', pt: 'Bom para a família' },
    text: {
      es: 'Juegos infantiles junto a la piscina.',
      en: 'A playground next to the pool.',
      fr: 'Des jeux pour enfants près de la piscine.',
      pt: 'Parquinho ao lado da piscina.',
    },
  },
  {
    icon: 'pin',
    title: { es: 'Cerca de todo', en: 'Close to everything', fr: 'Proche de tout', pt: 'Perto de tudo' },
    text: {
      es: 'A 7 km del centro de Tarija y a 2 km de Tomatitas.',
      en: '7 km from the centre of Tarija and 2 km from Tomatitas.',
      fr: 'À 7 km du centre de Tarija et à 2 km de Tomatitas.',
      pt: 'A 7 km do centro de Tarija e a 2 km de Tomatitas.',
    },
  },
];
