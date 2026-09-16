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
    name: { es: 'Cabaña 1' },
    tagline: { es: 'Hogar a leña, living amplio y galería' },
    summary: {
      es: 'La más amplia del predio: 83 m² con living-comedor, hogar a leña de piedra y una galería con reposeras.',
    },
    description: {
      es: [
        'La Cabaña 1 es una casa con galería al frente. Adentro, el living-comedor se organiza alrededor de un hogar a leña de piedra, con mesa para compartir y techo de caña.',
        'Recibe hasta cinco personas, con una cama doble y cuatro camas simples. Afuera, en la galería, dos reposeras de madera invitan a quedarse un rato más.',
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
    name: { es: 'Cabaña 2' },
    tagline: { es: 'Parrilla propia y cocina equipada' },
    summary: {
      es: '64 m² para hasta cinco personas, con parrilla propia, cocina con mesa de comedor y dormitorios separados.',
    },
    description: {
      es: [
        'La Cabaña 2 combina muros de piedra y colores tierra. Tiene su propia parrilla y un espacio de cocina con hornillas a gas, microondas y frigobar, junto a una mesa de madera para comer todos juntos.',
        'Las camas se reparten entre los dormitorios y el ambiente principal: una cama doble, tres camas simples y un sofá cama.',
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
    name: { es: 'Cabaña 3' },
    tagline: { es: 'Galería entre lavandas' },
    summary: {
      es: 'Una galería rodeada de lavandas, dormitorio con vigas de madera y escritorio, para hasta tres personas.',
    },
    description: {
      es: [
        'La Cabaña 3 se reconoce por su galería: una mesa con dos sillas, plantas y lavandas en flor junto a la puerta, perfecta para el café de la mañana.',
        'Adentro hay un dormitorio con vigas de madera, una cama triple, una cama simple y un escritorio, además de baño privado con ducha.',
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
    name: { es: 'Cabaña 4' },
    tagline: { es: 'Dos plantas, dos baños y muros de piedra' },
    summary: {
      es: 'La única cabaña con dos baños: cama doble y kitchenette en la planta baja, y tres camas simples arriba.',
    },
    description: {
      es: [
        'En la planta baja, la Cabaña 4 reúne una cama doble, una kitchenette con microondas y frigobar, mesa para comer y televisor, entre muros de piedra.',
        'En la planta alta, bajo vigas de madera, hay tres camas simples y un ropero. Sus dos baños la hacen muy práctica para familias o grupos de cuatro.',
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
    name: { es: 'Cabaña 5' },
    tagline: { es: 'Kitchenette de azulejos y techo de caña' },
    summary: {
      es: 'Cama doble y cama simple bajo un techo de caña, con kitchenette propia, televisor y mesa con dos sillas.',
    },
    description: {
      es: [
        'La Cabaña 5 combina paredes en rojo y crema con un techo de caña y vigas de madera. Tiene una cama doble, una cama simple, cómoda y televisor.',
        'La kitchenette, revestida con azulejos azules, suma microondas, frigobar y hervidor. Completan la cabaña una mesa con dos sillas y un baño con ducha.',
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
    name: { es: 'Cabaña 6' },
    tagline: { es: 'Cálida y sencilla, con kitchenette' },
    summary: {
      es: 'Cama doble, mesa con dos sillas, televisor y kitchenette con microondas, en un ambiente cálido y sencillo.',
    },
    description: {
      es: [
        'La Cabaña 6 es sencilla y cálida: una cama doble, una mesa con dos sillas, una cómoda con televisor y cortinas en tonos dorados.',
        'La kitchenette tiene lavaplatos, microondas y hervidor, y el baño es privado.',
      ],
    },
    guests: 3,
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
    pending: ['Confirmar la cama para la tercera persona: solo figura una cama doble.'],
  },
  {
    id: 'cabana-7',
    number: 7,
    name: { es: 'Cabaña 7' },
    tagline: { es: 'Living amplio con balcón' },
    summary: {
      es: '55 m² para hasta tres personas: dormitorio con cama doble, living-comedor con sillones de mimbre, cocina y balcón.',
    },
    description: {
      es: [
        'La Cabaña 7 tiene un living-comedor amplio con techo de caña, mesa redonda, sillones de mimbre, televisor y un sofá cama.',
        'El dormitorio, con cama doble, está separado del living. La cocina, con microondas, tiene salida a un balcón.',
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
    name: { es: 'Cabaña 8' },
    tagline: { es: 'Cama doble, sofá cama y kitchenette' },
    summary: {
      es: 'Cama doble con cabecero tapizado, sofá cama de madera, kitchenette con microondas y mesa con dos sillas.',
    },
    description: {
      es: [
        'La Cabaña 8 reúne lo necesario para una estadía cómoda: una cama doble con cabecero tapizado, ropero, televisor y un sofá cama de madera.',
        'La kitchenette tiene microondas y hervidor, junto a una mesa con dos sillas y una estufa.',
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
    name: { es: 'Cabaña 9' },
    tagline: { es: 'Nichos de cerámica y escalera caracol' },
    summary: {
      es: 'Dos plantas unidas por una escalera caracol: estar, kitchenette y cama doble abajo; tres camas simples arriba.',
    },
    description: {
      es: [
        'La Cabaña 9 tiene carácter artesanal: paredes rústicas en tonos ocre, nichos con cerámicas y techo de caña.',
        'En la planta baja hay un estar con sofá, una kitchenette con microondas y frigobar, televisor y una cama doble. Una escalera caracol lleva a la planta alta, con tres camas simples.',
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
    name: { es: 'Cabaña 10' },
    tagline: { es: 'Dos plantas en colores cálidos' },
    summary: {
      es: 'Cama doble, sofá cama y kitchenette en la planta baja, y tres camas simples arriba, en tonos naranjas y ocres.',
    },
    description: {
      es: [
        'La Cabaña 10 está pintada en naranjas y ocres, con detalles de piedra. La planta baja integra una cama doble, un sofá cama, mesa para comer, televisor y kitchenette con microondas y frigobar.',
        'Una escalera caracol de hierro sube a la planta alta, con tres camas simples bajo el techo de caña. El baño tiene ducha.',
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
