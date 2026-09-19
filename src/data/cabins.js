/**
 * Las 10 cabañas de El Cadillar.
 *
 * Origen de los datos:
 * - Capacidad, camas y baños: confirmados por el propietario (agosto 2026).
 *   Las cabañas chicas (3, 5, 6, 7 y 8) reciben hasta 3 personas (septiembre 2026).
 * - Superficie en m²: informada por el propietario (septiembre 2026).
 * - Equipamiento y descripciones: solo lo que se ve en las fotografías oficiales.
 *
 * Cómo editar: cambiar los valores y ejecutar `npm run build`.
 * - `photos` usa los ids de src/data/photos.json; la primera es la foto principal.
 * - `equipment` y `highlights` usan las claves de src/data/amenities.js.
 * - Tipos de cama válidos: 'doble', 'simple', 'triple', 'sofa-cama'.
 * - Los textos y el `slug` llevan los cuatro idiomas del sitio (es, en, fr, pt).
 *
 * Preparado para el futuro (hoy en null):
 * - `price`: { currency: 'BOB', amount: 350, unit: 'noche' }
 * - `availability`: URL o identificador del calendario (iCal / motor de reservas)
 * - `bookingUrl`: enlace directo para reservar esta cabaña en un motor externo
 *
 * `pending` reúne dudas a confirmar con el propietario. No se publica.
 */
export const cabins = [
  {
    id: 'cabana-1',
    number: 1,
    slug: { es: 'cabana-1', en: 'cabin-1', fr: 'chalet-1', pt: 'cabana-1' },
    name: { es: 'Cabaña 1', en: 'Cabin 1', fr: 'Chalet 1', pt: 'Cabana 1' },
    tagline: {
      es: 'Hogar a leña, living amplio y galería',
      en: 'Wood-burning fireplace, large living room and porch',
      fr: 'Cheminée à bois, grand salon et galerie',
      pt: 'Lareira a lenha, sala ampla e varanda',
    },
    summary: {
      es: 'La más amplia del predio: 83 m² con living-comedor, hogar a leña de piedra y una galería con reposeras.',
      en: 'The largest on the grounds: 83 m² with a living-dining room, a stone wood-burning fireplace and a porch with loungers.',
      fr: 'Le plus grand du domaine : 83 m² avec salon-salle à manger, cheminée à bois en pierre et galerie avec chaises longues.',
      pt: 'A maior do terreno: 83 m² com sala de estar e jantar, lareira a lenha de pedra e varanda com espreguiçadeiras.',
    },
    description: {
      es: [
        'La Cabaña 1 es una casa con galería al frente. Adentro, el living-comedor se organiza alrededor de un hogar a leña de piedra, con mesa para compartir y techo de caña.',
        'Recibe hasta cinco personas, con una cama doble y cuatro camas simples. Afuera, en la galería, dos reposeras de madera invitan a quedarse un rato más.',
      ],
      en: [
        'Cabin 1 is a house with a porch at the front. Inside, the living-dining room is arranged around a stone wood-burning fireplace, with a table to share and a cane ceiling.',
        'It sleeps up to five people, with a double bed and four single beds. Outside, on the porch, two wooden loungers invite you to stay a while longer.',
      ],
      fr: [
        "Le Chalet 1 est une maison avec une galerie sur le devant. À l'intérieur, le salon-salle à manger s'organise autour d'une cheminée à bois en pierre, avec une table à partager et un plafond en roseau.",
        "Il accueille jusqu'à cinq personnes, avec un lit double et quatre lits simples. Dehors, sur la galerie, deux chaises longues en bois invitent à s'attarder.",
      ],
      pt: [
        'A Cabana 1 é uma casa com varanda na frente. Dentro, a sala de estar e jantar se organiza em volta de uma lareira a lenha de pedra, com mesa para dividir e teto de bambu.',
        'Recebe até cinco pessoas, com uma cama de casal e quatro camas de solteiro. Fora, na varanda, duas espreguiçadeiras de madeira convidam a ficar mais um pouco.',
      ],
    },
    guests: 5,
    beds: [
      { type: 'doble', count: 1 },
      { type: 'simple', count: 4 },
    ],
    bathrooms: 1,
    area: 83,
    levels: 1,
    highlights: ['hogar-a-lena', 'galeria'],
    equipment: ['hogar-a-lena', 'living-comedor', 'mesa-comedor', 'tv', 'galeria', 'reposeras', 'bano-privado'],
    photos: ['cabana-1-living-hogar', 'cabana-1-galeria', 'cabana-1-estar', 'cabana-1-dormitorio', 'cabana-1-exterior'],
    price: null,
    availability: null,
    bookingUrl: null,
    pending: [
      'Capacidad: las camas indicadas suman 6 plazas y la capacidad es de 5 personas.',
      'Confirmar si tiene cocina o kitchenette (no aparece en las fotos).',
    ],
  },
  {
    id: 'cabana-2',
    number: 2,
    slug: { es: 'cabana-2', en: 'cabin-2', fr: 'chalet-2', pt: 'cabana-2' },
    name: { es: 'Cabaña 2', en: 'Cabin 2', fr: 'Chalet 2', pt: 'Cabana 2' },
    tagline: {
      es: 'Parrilla propia y cocina equipada',
      en: 'Private grill and a fitted kitchen',
      fr: 'Gril privé et cuisine équipée',
      pt: 'Churrasqueira própria e cozinha equipada',
    },
    summary: {
      es: '64 m² para hasta cinco personas, con parrilla propia, cocina con mesa de comedor y dormitorios separados.',
      en: '64 m² for up to five guests, with a private grill, a kitchen with a dining table and separate bedrooms.',
      fr: "64 m² pour cinq personnes, avec gril privé, cuisine avec table à manger et chambres séparées.",
      pt: '64 m² para até cinco pessoas, com churrasqueira própria, cozinha com mesa de jantar e quartos separados.',
    },
    description: {
      es: [
        'La Cabaña 2 combina muros de piedra y colores tierra. Tiene su propia parrilla y un espacio de cocina con hornillas a gas, microondas y frigobar, junto a una mesa de madera para comer todos juntos.',
        'Las camas se reparten entre los dormitorios y el ambiente principal: una cama doble, tres camas simples y un sofá cama.',
      ],
      en: [
        'Cabin 2 combines stone walls with earth tones. It has its own grill and a kitchen area with gas burners, a microwave and a mini fridge, next to a wooden table where everyone can eat together.',
        'The beds are spread between the bedrooms and the main room: a double bed, three single beds and a sofa bed.',
      ],
      fr: [
        "Le Chalet 2 mêle murs en pierre et tons terreux. Il possède son propre gril et un coin cuisine avec plaques à gaz, micro-ondes et mini-réfrigérateur, à côté d'une table en bois pour manger tous ensemble.",
        'Les lits se répartissent entre les chambres et la pièce principale : un lit double, trois lits simples et un canapé-lit.',
      ],
      pt: [
        'A Cabana 2 combina paredes de pedra e tons terrosos. Tem churrasqueira própria e um espaço de cozinha com bocas a gás, micro-ondas e frigobar, ao lado de uma mesa de madeira para comer todos juntos.',
        'As camas se dividem entre os quartos e o ambiente principal: uma cama de casal, três camas de solteiro e um sofá-cama.',
      ],
    },
    guests: 5,
    beds: [
      { type: 'doble', count: 1 },
      { type: 'simple', count: 3 },
      { type: 'sofa-cama', count: 1 },
    ],
    bathrooms: 1,
    area: 64,
    levels: 1,
    highlights: ['parrilla', 'cocina'],
    equipment: ['parrilla', 'cocina', 'microondas', 'frigobar', 'mesa-comedor', 'sofa-cama', 'tv', 'muros-piedra', 'bano-privado'],
    photos: [
      'cabana-2-comedor-cocina',
      'cabana-2-parrilla',
      'cabana-2-living',
      'cabana-2-cocina',
      'cabana-2-mesa',
      'cabana-2-sofa-cama',
      'cabana-2-dormitorio-simples',
      'cabana-2-dormitorio',
      'cabana-2-cama-simple',
      'cabana-2-detalle',
    ],
    price: null,
    availability: null,
    bookingUrl: null,
    pending: [],
  },
  {
    id: 'cabana-3',
    number: 3,
    slug: { es: 'cabana-3', en: 'cabin-3', fr: 'chalet-3', pt: 'cabana-3' },
    name: { es: 'Cabaña 3', en: 'Cabin 3', fr: 'Chalet 3', pt: 'Cabana 3' },
    tagline: {
      es: 'Galería entre lavandas',
      en: 'A porch among lavender',
      fr: 'Une galerie entre les lavandes',
      pt: 'Varanda entre lavandas',
    },
    summary: {
      es: 'Una galería rodeada de lavandas, dormitorio con vigas de madera y escritorio, para hasta tres personas.',
      en: 'A porch surrounded by lavender, a bedroom with wooden beams and a desk, for up to three guests.',
      fr: "Une galerie entourée de lavandes, une chambre avec poutres en bois et un bureau, pour trois personnes.",
      pt: 'Uma varanda cercada de lavandas, quarto com vigas de madeira e escrivaninha, para até três pessoas.',
    },
    description: {
      es: [
        'La Cabaña 3 se reconoce por su galería: una mesa con dos sillas, plantas y lavandas en flor junto a la puerta, perfecta para el café de la mañana.',
        'Adentro hay un dormitorio con vigas de madera, una cama triple, una cama simple y un escritorio, además de baño privado con ducha.',
      ],
      en: [
        'Cabin 3 is known for its porch: a table with two chairs, plants and lavender in bloom by the door, perfect for morning coffee.',
        'Inside there is a bedroom with wooden beams, a triple bed, a single bed and a desk, plus a private bathroom with a shower.',
      ],
      fr: [
        "Le Chalet 3 se reconnaît à sa galerie : une table avec deux chaises, des plantes et des lavandes en fleur près de la porte, parfaite pour le café du matin.",
        "À l'intérieur, une chambre avec poutres en bois, un lit triple, un lit simple et un bureau, ainsi qu'une salle de bain privée avec douche.",
      ],
      pt: [
        'A Cabana 3 se reconhece pela varanda: uma mesa com duas cadeiras, plantas e lavandas floridas ao lado da porta, perfeita para o café da manhã.',
        'Dentro há um quarto com vigas de madeira, uma cama tripla, uma cama de solteiro e uma escrivaninha, além de banheiro privativo com chuveiro.',
      ],
    },
    guests: 3,
    beds: [
      { type: 'triple', count: 1 },
      { type: 'simple', count: 1 },
    ],
    bathrooms: 1,
    area: 29,
    levels: 1,
    highlights: ['lavandas', 'galeria'],
    equipment: ['galeria', 'escritorio', 'bano-privado', 'ducha'],
    photos: ['cabana-3-galeria-lavandas', 'cabana-3-dormitorio', 'cabana-3-bano'],
    price: null,
    availability: null,
    bookingUrl: null,
    pending: [
      'Confirmar el tipo de cama ("triple").',
      'Confirmar si tiene cocina o kitchenette (no aparece en las fotos).',
    ],
  },
  {
    id: 'cabana-4',
    number: 4,
    slug: { es: 'cabana-4', en: 'cabin-4', fr: 'chalet-4', pt: 'cabana-4' },
    name: { es: 'Cabaña 4', en: 'Cabin 4', fr: 'Chalet 4', pt: 'Cabana 4' },
    tagline: {
      es: 'Dos plantas, dos baños y muros de piedra',
      en: 'Two floors, two bathrooms and stone walls',
      fr: 'Deux niveaux, deux salles de bain et murs en pierre',
      pt: 'Dois pisos, dois banheiros e paredes de pedra',
    },
    summary: {
      es: 'La única cabaña con dos baños: cama doble y kitchenette en la planta baja, y tres camas simples arriba.',
      en: 'The only cabin with two bathrooms: a double bed and a kitchenette downstairs, and three single beds upstairs.',
      fr: "Le seul chalet avec deux salles de bain : lit double et kitchenette au rez-de-chaussée, trois lits simples à l'étage.",
      pt: 'A única cabana com dois banheiros: cama de casal e cozinha compacta embaixo, e três camas de solteiro em cima.',
    },
    description: {
      es: [
        'En la planta baja, la Cabaña 4 reúne una cama doble, una kitchenette con microondas y frigobar, mesa para comer y televisor, entre muros de piedra.',
        'En la planta alta, bajo vigas de madera, hay tres camas simples y un ropero. Sus dos baños la hacen muy práctica para familias o grupos de cuatro.',
      ],
      en: [
        'Downstairs, Cabin 4 brings together a double bed, a kitchenette with a microwave and a mini fridge, a dining table and a TV, all among stone walls.',
        'Upstairs, under wooden beams, there are three single beds and a wardrobe. Its two bathrooms make it very practical for families or groups of four.',
      ],
      fr: [
        "Au rez-de-chaussée, le Chalet 4 réunit un lit double, une kitchenette avec micro-ondes et mini-réfrigérateur, une table à manger et une télévision, entre des murs en pierre.",
        "À l'étage, sous les poutres en bois, trois lits simples et une armoire. Ses deux salles de bain le rendent très pratique pour les familles ou les groupes de quatre.",
      ],
      pt: [
        'No piso de baixo, a Cabana 4 reúne uma cama de casal, uma cozinha compacta com micro-ondas e frigobar, mesa para comer e televisão, entre paredes de pedra.',
        'No piso de cima, sob vigas de madeira, há três camas de solteiro e um guarda-roupa. Os dois banheiros deixam tudo mais prático para famílias ou grupos de quatro.',
      ],
    },
    guests: 4,
    beds: [
      { type: 'doble', count: 1 },
      { type: 'simple', count: 3 },
    ],
    bathrooms: 2,
    area: 46,
    levels: 2,
    highlights: ['dos-banos', 'dos-plantas'],
    equipment: ['kitchenette', 'microondas', 'frigobar', 'mesa-comedor', 'tv', 'ropero', 'muros-piedra', 'dos-banos'],
    photos: ['cabana-4-planta-baja', 'cabana-4-planta-alta', 'cabana-4-bano'],
    price: null,
    availability: null,
    bookingUrl: null,
    pending: [],
  },
  {
    id: 'cabana-5',
    number: 5,
    slug: { es: 'cabana-5', en: 'cabin-5', fr: 'chalet-5', pt: 'cabana-5' },
    name: { es: 'Cabaña 5', en: 'Cabin 5', fr: 'Chalet 5', pt: 'Cabana 5' },
    tagline: {
      es: 'Kitchenette de azulejos y techo de caña',
      en: 'Tiled kitchenette and a cane ceiling',
      fr: 'Kitchenette carrelée et plafond en roseau',
      pt: 'Cozinha compacta de azulejos e teto de bambu',
    },
    summary: {
      es: 'Cama doble y cama simple bajo un techo de caña, con kitchenette propia, televisor y mesa con dos sillas.',
      en: 'A double bed and a single bed under a cane ceiling, with its own kitchenette, a TV and a table for two.',
      fr: "Un lit double et un lit simple sous un plafond en roseau, avec kitchenette, télévision et table pour deux.",
      pt: 'Cama de casal e cama de solteiro sob teto de bambu, com cozinha compacta, televisão e mesa para dois.',
    },
    description: {
      es: [
        'La Cabaña 5 combina paredes en rojo y crema con un techo de caña y vigas de madera. Tiene una cama doble, una cama simple, cómoda y televisor.',
        'La kitchenette, revestida con azulejos azules, suma microondas, frigobar y hervidor. Completan la cabaña una mesa con dos sillas y un baño con ducha.',
      ],
      en: [
        'Cabin 5 pairs red and cream walls with a cane ceiling and wooden beams. It has a double bed, a single bed, a chest of drawers and a TV.',
        'The kitchenette, lined with blue tiles, adds a microwave, a mini fridge and a kettle. A table with two chairs and a bathroom with a shower complete it.',
      ],
      fr: [
        "Le Chalet 5 associe des murs rouge et crème à un plafond en roseau et des poutres en bois. Il dispose d'un lit double, d'un lit simple, d'une commode et d'une télévision.",
        "La kitchenette, habillée de carreaux bleus, ajoute un micro-ondes, un mini-réfrigérateur et une bouilloire. Une table avec deux chaises et une salle de bain avec douche complètent le tout.",
      ],
      pt: [
        'A Cabana 5 combina paredes em vermelho e creme com teto de bambu e vigas de madeira. Tem cama de casal, cama de solteiro, cômoda e televisão.',
        'A cozinha compacta, revestida de azulejos azuis, soma micro-ondas, frigobar e chaleira elétrica. Completam a cabana uma mesa com duas cadeiras e um banheiro com chuveiro.',
      ],
    },
    guests: 3,
    beds: [
      { type: 'doble', count: 1 },
      { type: 'simple', count: 1 },
    ],
    bathrooms: 1,
    area: 26,
    levels: 1,
    highlights: ['kitchenette', 'techo-cana'],
    equipment: ['kitchenette', 'microondas', 'frigobar', 'hervidor', 'mesa-comedor', 'tv', 'techo-cana', 'bano-privado', 'ducha'],
    photos: ['cabana-5-dormitorio', 'cabana-5-kitchenette', 'cabana-5-mesa', 'cabana-5-cama-simple', 'cabana-5-bano'],
    price: null,
    availability: null,
    bookingUrl: null,
    pending: [],
  },
  {
    id: 'cabana-6',
    number: 6,
    slug: { es: 'cabana-6', en: 'cabin-6', fr: 'chalet-6', pt: 'cabana-6' },
    name: { es: 'Cabaña 6', en: 'Cabin 6', fr: 'Chalet 6', pt: 'Cabana 6' },
    tagline: {
      es: 'Cálida y sencilla, con kitchenette',
      en: 'Warm and simple, with a kitchenette',
      fr: 'Chaleureux et simple, avec kitchenette',
      pt: 'Aconchegante e simples, com cozinha compacta',
    },
    summary: {
      es: 'Cama doble, mesa con dos sillas, televisor y kitchenette con microondas, en un ambiente cálido y sencillo.',
      en: 'A double bed, a table for two, a TV and a kitchenette with a microwave, in a warm, simple room.',
      fr: "Lit double, table pour deux, télévision et kitchenette avec micro-ondes, dans une ambiance chaleureuse et simple.",
      pt: 'Cama de casal, mesa para dois, televisão e cozinha compacta com micro-ondas, em um ambiente aconchegante e simples.',
    },
    description: {
      es: [
        'La Cabaña 6 es sencilla y cálida: una cama doble, una mesa con dos sillas, una cómoda con televisor y cortinas en tonos dorados.',
        'La kitchenette tiene lavaplatos, microondas y hervidor, y el baño es privado.',
      ],
      en: [
        'Cabin 6 is simple and warm: a double bed, a table with two chairs, a chest of drawers with a TV and curtains in golden tones.',
        'The kitchenette has a sink, a microwave and a kettle, and the bathroom is private.',
      ],
      fr: [
        "Le Chalet 6 est simple et chaleureux : un lit double, une table avec deux chaises, une commode avec télévision et des rideaux aux tons dorés.",
        'La kitchenette dispose d’un évier, d’un micro-ondes et d’une bouilloire, et la salle de bain est privée.',
      ],
      pt: [
        'A Cabana 6 é simples e aconchegante: uma cama de casal, uma mesa com duas cadeiras, uma cômoda com televisão e cortinas em tons dourados.',
        'A cozinha compacta tem pia, micro-ondas e chaleira elétrica, e o banheiro é privativo.',
      ],
    },
    guests: 2,
    beds: [{ type: 'doble', count: 1 }],
    bathrooms: 1,
    area: 21,
    levels: 1,
    highlights: ['kitchenette'],
    equipment: ['kitchenette', 'microondas', 'hervidor', 'mesa-comedor', 'tv', 'bano-privado'],
    photos: ['cabana-6-dormitorio', 'cabana-6-cama', 'cabana-6-kitchenette', 'cabana-6-mesa', 'cabana-6-bano'],
    price: null,
    availability: null,
    bookingUrl: null,
  },
  {
    id: 'cabana-7',
    number: 7,
    slug: { es: 'cabana-7', en: 'cabin-7', fr: 'chalet-7', pt: 'cabana-7' },
    name: { es: 'Cabaña 7', en: 'Cabin 7', fr: 'Chalet 7', pt: 'Cabana 7' },
    tagline: {
      es: 'Living amplio con balcón',
      en: 'Large living room with a balcony',
      fr: 'Grand salon avec balcon',
      pt: 'Sala ampla com sacada',
    },
    summary: {
      es: '55 m² para hasta tres personas: dormitorio con cama doble, living-comedor con sillones de mimbre, cocina y balcón.',
      en: '55 m² for up to three guests: a bedroom with a double bed, a living-dining room with wicker armchairs, a kitchen and a balcony.',
      fr: "55 m² pour trois personnes : chambre avec lit double, salon-salle à manger avec fauteuils en osier, cuisine et balcon.",
      pt: '55 m² para até três pessoas: quarto com cama de casal, sala de estar e jantar com poltronas de vime, cozinha e sacada.',
    },
    description: {
      es: [
        'La Cabaña 7 tiene un living-comedor amplio con techo de caña, mesa redonda, sillones de mimbre, televisor y un sofá cama.',
        'El dormitorio, con cama doble, está separado del living. La cocina, con microondas, tiene salida a un balcón.',
      ],
      en: [
        'Cabin 7 has a large living-dining room with a cane ceiling, a round table, wicker armchairs, a TV and a sofa bed.',
        'The bedroom, with a double bed, is separate from the living room. The kitchen, with a microwave, opens onto a balcony.',
      ],
      fr: [
        "Le Chalet 7 dispose d'un grand salon-salle à manger avec plafond en roseau, table ronde, fauteuils en osier, télévision et canapé-lit.",
        "La chambre, avec lit double, est séparée du salon. La cuisine, avec micro-ondes, donne sur un balcon.",
      ],
      pt: [
        'A Cabana 7 tem uma sala de estar e jantar ampla, com teto de bambu, mesa redonda, poltronas de vime, televisão e um sofá-cama.',
        'O quarto, com cama de casal, fica separado da sala. A cozinha, com micro-ondas, tem saída para uma sacada.',
      ],
    },
    guests: 3,
    beds: [
      { type: 'doble', count: 1 },
      { type: 'sofa-cama', count: 1 },
    ],
    bathrooms: 1,
    area: 55,
    levels: 1,
    highlights: ['balcon', 'living-comedor'],
    equipment: ['living-comedor', 'cocina', 'microondas', 'sofa-cama', 'tv', 'estufa', 'techo-cana', 'balcon', 'bano-privado'],
    photos: [
      'cabana-7-living',
      'cabana-7-cocina-comedor',
      'cabana-7-dormitorio',
      'cabana-7-estar',
      'cabana-7-dormitorio-bano',
      'cabana-7-bano',
    ],
    price: null,
    availability: null,
    bookingUrl: null,
    pending: [],
  },
  {
    id: 'cabana-8',
    number: 8,
    slug: { es: 'cabana-8', en: 'cabin-8', fr: 'chalet-8', pt: 'cabana-8' },
    name: { es: 'Cabaña 8', en: 'Cabin 8', fr: 'Chalet 8', pt: 'Cabana 8' },
    tagline: {
      es: 'Cama doble, sofá cama y kitchenette',
      en: 'Double bed, sofa bed and kitchenette',
      fr: 'Lit double, canapé-lit et kitchenette',
      pt: 'Cama de casal, sofá-cama e cozinha compacta',
    },
    summary: {
      es: 'Cama doble con cabecero tapizado, sofá cama de madera, kitchenette con microondas y mesa con dos sillas.',
      en: 'A double bed with an upholstered headboard, a wooden sofa bed, a kitchenette with a microwave and a table for two.',
      fr: "Lit double avec tête de lit capitonnée, canapé-lit en bois, kitchenette avec micro-ondes et table pour deux.",
      pt: 'Cama de casal com cabeceira estofada, sofá-cama de madeira, cozinha compacta com micro-ondas e mesa para dois.',
    },
    description: {
      es: [
        'La Cabaña 8 reúne lo necesario para una estadía cómoda: una cama doble con cabecero tapizado, ropero, televisor y un sofá cama de madera.',
        'La kitchenette tiene microondas y hervidor, junto a una mesa con dos sillas y una estufa.',
      ],
      en: [
        'Cabin 8 has everything for a comfortable stay: a double bed with an upholstered headboard, a wardrobe, a TV and a wooden sofa bed.',
        'The kitchenette has a microwave and a kettle, next to a table with two chairs and a heater.',
      ],
      fr: [
        "Le Chalet 8 réunit l'essentiel pour un séjour confortable : un lit double avec tête de lit capitonnée, une armoire, une télévision et un canapé-lit en bois.",
        "La kitchenette dispose d'un micro-ondes et d'une bouilloire, à côté d'une table avec deux chaises et d'un chauffage d'appoint.",
      ],
      pt: [
        'A Cabana 8 reúne o necessário para uma estadia confortável: cama de casal com cabeceira estofada, guarda-roupa, televisão e um sofá-cama de madeira.',
        'A cozinha compacta tem micro-ondas e chaleira elétrica, ao lado de uma mesa com duas cadeiras e um aquecedor.',
      ],
    },
    guests: 3,
    beds: [
      { type: 'doble', count: 1 },
      { type: 'sofa-cama', count: 1 },
    ],
    bathrooms: 1,
    area: 27,
    levels: 1,
    highlights: ['kitchenette', 'sofa-cama'],
    equipment: ['kitchenette', 'microondas', 'hervidor', 'mesa-comedor', 'sofa-cama', 'tv', 'ropero', 'estufa', 'bano-privado'],
    photos: ['cabana-8-dormitorio', 'cabana-8-kitchenette', 'cabana-8-sofa-cama', 'cabana-8-dormitorio-tv', 'cabana-8-bano'],
    price: null,
    availability: null,
    bookingUrl: null,
    pending: [],
  },
  {
    id: 'cabana-9',
    number: 9,
    slug: { es: 'cabana-9', en: 'cabin-9', fr: 'chalet-9', pt: 'cabana-9' },
    name: { es: 'Cabaña 9', en: 'Cabin 9', fr: 'Chalet 9', pt: 'Cabana 9' },
    tagline: {
      es: 'Nichos de cerámica y escalera caracol',
      en: 'Ceramic alcoves and a spiral staircase',
      fr: 'Niches en céramique et escalier en colimaçon',
      pt: 'Nichos de cerâmica e escada caracol',
    },
    summary: {
      es: 'Dos plantas unidas por una escalera caracol: estar, kitchenette y cama doble abajo; tres camas simples arriba.',
      en: 'Two floors joined by a spiral staircase: sitting area, kitchenette and a double bed downstairs; three single beds upstairs.',
      fr: "Deux niveaux reliés par un escalier en colimaçon : salon, kitchenette et lit double en bas ; trois lits simples en haut.",
      pt: 'Dois pisos ligados por uma escada caracol: sala, cozinha compacta e cama de casal embaixo; três camas de solteiro em cima.',
    },
    description: {
      es: [
        'La Cabaña 9 tiene carácter artesanal: paredes rústicas en tonos ocre, nichos con cerámicas y techo de caña.',
        'En la planta baja hay un estar con sofá, una kitchenette con microondas y frigobar, televisor y una cama doble. Una escalera caracol lleva a la planta alta, con tres camas simples.',
      ],
      en: [
        'Cabin 9 has a handcrafted feel: rustic walls in ochre tones, alcoves with ceramics and a cane ceiling.',
        'Downstairs there is a sitting area with a sofa, a kitchenette with a microwave and a mini fridge, a TV and a double bed. A spiral staircase leads upstairs, where there are three single beds.',
      ],
      fr: [
        "Le Chalet 9 a un caractère artisanal : murs rustiques aux tons ocre, niches en céramique et plafond en roseau.",
        "Au rez-de-chaussée, un salon avec canapé, une kitchenette avec micro-ondes et mini-réfrigérateur, une télévision et un lit double. Un escalier en colimaçon mène à l'étage, avec trois lits simples.",
      ],
      pt: [
        'A Cabana 9 tem um jeito artesanal: paredes rústicas em tons ocre, nichos com cerâmicas e teto de bambu.',
        'No piso de baixo há uma sala com sofá, cozinha compacta com micro-ondas e frigobar, televisão e uma cama de casal. Uma escada caracol leva ao piso de cima, com três camas de solteiro.',
      ],
    },
    guests: 4,
    beds: [
      { type: 'doble', count: 1 },
      { type: 'simple', count: 3 },
    ],
    bathrooms: 1,
    area: 40,
    levels: 2,
    highlights: ['nichos', 'escalera-caracol'],
    equipment: ['kitchenette', 'microondas', 'frigobar', 'hervidor', 'living', 'tv', 'estufa', 'escalera-caracol', 'nichos', 'bano-privado'],
    photos: [
      'cabana-9-loft',
      'cabana-9-estar-cocina',
      'cabana-9-dormitorio-doble',
      'cabana-9-nicho',
      'cabana-9-camas-simples',
      'cabana-9-cama-nicho',
      'cabana-9-cocina',
      'cabana-9-ambientes',
      'cabana-9-vista-escalera',
    ],
    price: null,
    availability: null,
    bookingUrl: null,
    pending: [],
  },
  {
    id: 'cabana-10',
    number: 10,
    slug: { es: 'cabana-10', en: 'cabin-10', fr: 'chalet-10', pt: 'cabana-10' },
    name: { es: 'Cabaña 10', en: 'Cabin 10', fr: 'Chalet 10', pt: 'Cabana 10' },
    tagline: {
      es: 'Dos plantas en colores cálidos',
      en: 'Two floors in warm colours',
      fr: 'Deux niveaux aux couleurs chaudes',
      pt: 'Dois pisos em cores quentes',
    },
    summary: {
      es: 'Cama doble, sofá cama y kitchenette en la planta baja, y tres camas simples arriba, en tonos naranjas y ocres.',
      en: 'A double bed, a sofa bed and a kitchenette downstairs, and three single beds upstairs, in orange and ochre tones.',
      fr: "Lit double, canapé-lit et kitchenette au rez-de-chaussée, trois lits simples à l'étage, dans des tons orange et ocre.",
      pt: 'Cama de casal, sofá-cama e cozinha compacta embaixo, e três camas de solteiro em cima, em tons de laranja e ocre.',
    },
    description: {
      es: [
        'La Cabaña 10 está pintada en naranjas y ocres, con detalles de piedra. La planta baja integra una cama doble, un sofá cama, mesa para comer, televisor y kitchenette con microondas y frigobar.',
        'Una escalera caracol de hierro sube a la planta alta, con tres camas simples bajo el techo de caña. El baño tiene ducha.',
      ],
      en: [
        'Cabin 10 is painted in oranges and ochres, with stone details. The ground floor holds a double bed, a sofa bed, a dining table, a TV and a kitchenette with a microwave and a mini fridge.',
        'An iron spiral staircase climbs to the upper floor, with three single beds under the cane ceiling. The bathroom has a shower.',
      ],
      fr: [
        "Le Chalet 10 est peint en orange et ocre, avec des détails en pierre. Le rez-de-chaussée réunit un lit double, un canapé-lit, une table à manger, une télévision et une kitchenette avec micro-ondes et mini-réfrigérateur.",
        "Un escalier en colimaçon en fer monte à l'étage, où trois lits simples se glissent sous le plafond en roseau. La salle de bain dispose d'une douche.",
      ],
      pt: [
        'A Cabana 10 é pintada em laranjas e ocres, com detalhes de pedra. O piso de baixo integra cama de casal, sofá-cama, mesa para comer, televisão e cozinha compacta com micro-ondas e frigobar.',
        'Uma escada caracol de ferro sobe ao piso de cima, com três camas de solteiro sob o teto de bambu. O banheiro tem chuveiro.',
      ],
    },
    guests: 4,
    beds: [
      { type: 'doble', count: 1 },
      { type: 'simple', count: 3 },
      { type: 'sofa-cama', count: 1 },
    ],
    bathrooms: 1,
    area: 20,
    levels: 2,
    highlights: ['dos-plantas', 'escalera-caracol'],
    equipment: ['kitchenette', 'microondas', 'frigobar', 'mesa-comedor', 'sofa-cama', 'tv', 'escalera-caracol', 'techo-cana', 'bano-privado', 'ducha'],
    photos: [
      'cabana-10-estar',
      'cabana-10-dormitorio',
      'cabana-10-loft',
      'cabana-10-escalera',
      'cabana-10-kitchenette',
      'cabana-10-ambientes',
      'cabana-10-vista-alta',
      'cabana-10-bano',
    ],
    price: null,
    availability: null,
    bookingUrl: null,
    pending: ['Confirmar la superficie: figura con 20 m² y tiene dos plantas.'],
  },
];
