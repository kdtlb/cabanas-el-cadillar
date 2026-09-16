/**
 * Contenido de "Descubre Tarija".
 *
 * Fuentes consultadas en septiembre de 2026: Wikipedia (Tarija, Vino de Bolivia,
 * Saice, Tomatitas, Casa del Moto Méndez, Reserva Biológica Cordillera de Sama,
 * Cañón del Pilaya), UNESCO (La Fiesta Grande de Tarija), La Región (Ruta del Vino
 * y Singani de Altura), iBolivia (Chorros de Jurina), El País de Tarija (Tajzara),
 * Gobernación de Tarija, Ruta del Vino Bolivia, Los Tiempos y Mongabay (Cañón del
 * Pilaya) y sitios de turismo de Tarija (gastronomía y bodegas).
 * Cañón del Pilaya: la profundidad (3.030 o 3.280 m según la fuente) y el puesto
 * de "sexto más profundo del mundo" no tienen respaldo técnico; por eso el texto
 * solo dice que "es considerado" uno de los más profundos.
 * Distancias por carretera desde El Cadillar: src/data/location.js.
 */
export const tarijaFacts = [
  { value: { es: '1.850 m' }, label: { es: 'de altitud, con clima templado' } },
  { value: { es: '18 °C' }, label: { es: 'de temperatura media anual' } },
  { value: { es: '≈ 80 %' }, label: { es: 'de la industria del vino de Bolivia' } },
  { value: { es: '2021' }, label: { es: 'la UNESCO declara Patrimonio a la Fiesta Grande' } },
];

// `distance`: id de src/data/location.js · `photo`: id de src/data/photos.json
export const destinations = [
  {
    id: 'tomatitas-coimata',
    kicker: { es: 'Naturaleza a minutos' },
    title: { es: 'Tomatitas y Coimata' },
    text: {
      es: 'Río, pozas y cascadas a un paso de tu cabaña. Tomatitas tiene playas de río, un puente colgante y un pequeño bosque; Coimata es conocida por sus cascadas y pozas de agua cristalina.',
    },
    photo: 'tarija-coimata',
    distance: ['tomatitas', 'coimata'],
    featured: true,
  },
  {
    id: 'vino',
    kicker: { es: 'Vino y singani' },
    title: { es: 'Ruta del Vino y Singani de Altura' },
    text: {
      es: 'Tarija reúne cerca del 80 % de la industria del vino de Bolivia, con viñedos entre 1.600 y 2.200 metros. La ruta pasa por bodegas como Campos de Solana y Casa Real, en el valle de Santa Ana, y Aranjuez, en la ciudad, hasta el Valle de la Concepción. Varias reciben visitas guiadas.',
    },
    photo: 'tarija-vinedos',
    distance: ['concepcion'],
    featured: true,
  },
  {
    id: 'san-lorenzo',
    kicker: { es: 'Historia' },
    title: { es: 'San Lorenzo' },
    text: {
      es: 'Aquí está la casa del héroe de la independencia Eustaquio “Moto” Méndez, hoy museo y Monumento Histórico Nacional, frente a la plaza del pueblo.',
    },
    photo: 'tarija-san-lorenzo',
    distance: ['san-lorenzo'],
    featured: true,
  },
  {
    id: 'fiesta-grande',
    kicker: { es: 'Cultura viva' },
    title: { es: 'Fiesta Grande de Tarija' },
    text: {
      es: 'La fiesta de San Roque, con sus chunchos de trajes de colores, recorre la ciudad entre agosto y septiembre. En 2021 la UNESCO la inscribió como Patrimonio Cultural Inmaterial de la Humanidad.',
    },
    photo: 'tarija-fiesta-san-roque',
    distance: [],
    featured: true,
  },
  {
    id: 'ciudad',
    kicker: { es: 'La ciudad' },
    title: { es: 'Centro de Tarija' },
    text: {
      es: 'La plaza Luis de Fuentes, la Casa Dorada, la catedral, el Museo Nacional Paleontológico y Arqueológico y el mirador de la Loma de San Juan.',
    },
    photo: 'tarija-casa-dorada',
    distance: ['centro'],
  },
  {
    id: 'gastronomia',
    kicker: { es: 'Sabores' },
    title: { es: 'Cocina chapaca' },
    text: {
      es: 'El saice, plato bandera de Tarija, y la ranga encabezan una cocina que también ofrece chancho a la cruz, rosquetes y empanadas blanqueadas.',
    },
    photo: 'tarija-saice',
    distance: [],
  },
  {
    id: 'san-jacinto',
    kicker: { es: 'Paseo de tarde' },
    title: { es: 'Lago San Jacinto' },
    text: { es: 'La represa de San Jacinto forma un lago rodeado de cerros, un buen plan para ver caer la tarde.' },
    photo: 'tarija-lago-san-jacinto',
    distance: ['san-jacinto'],
  },
  {
    id: 'jurina',
    kicker: { es: 'Excursión' },
    title: { es: 'Chorros de Jurina' },
    text: { es: 'Caídas de agua de hasta 40 metros con pozas naturales, en medio de los cerros.' },
    photo: 'tarija-chorros-jurina',
    distance: ['jurina'],
  },
  {
    id: 'pilaya',
    kicker: { es: 'Aventura' },
    title: { es: 'Cañón del Pilaya' },
    text: {
      es: 'En el límite entre Tarija y Chuquisaca, es considerado uno de los cañones más profundos del mundo. Se llega por la comunidad de Yumasa, con un último tramo de tierra, y luego se camina hasta el mirador, donde se pueden ver cóndores. Conviene ir con guía local.',
    },
    photo: 'tarija-canon-pilaya',
    distance: ['pilaya'],
  },
  {
    id: 'sama',
    kicker: { es: 'Salida de día completo' },
    title: { es: 'Reserva de Sama y Tajzara' },
    text: {
      es: 'Las lagunas de Tajzara, un humedal de importancia internacional (sitio Ramsar), están dentro de la Reserva Biológica Cordillera de Sama: paisaje de altura para un día entero.',
    },
    photo: 'tarija-sama-tajzara',
    distance: ['tajzara'],
  },
];
