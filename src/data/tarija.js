/**
 * Contenido de "Descubre Tarija". Los textos llevan los cuatro idiomas del
 * sitio (es, en, fr, pt).
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
  {
    value: { es: '1.850 m', en: '1,850 m', fr: '1 850 m', pt: '1.850 m' },
    label: {
      es: 'de altitud, con clima templado',
      en: 'above sea level, with a mild climate',
      fr: "d'altitude, avec un climat tempéré",
      pt: 'de altitude, com clima ameno',
    },
  },
  {
    value: { es: '18 °C', en: '18 °C', fr: '18 °C', pt: '18 °C' },
    label: {
      es: 'de temperatura media anual',
      en: 'average yearly temperature',
      fr: 'de température moyenne annuelle',
      pt: 'de temperatura média anual',
    },
  },
  {
    value: { es: '≈ 80 %', en: '≈ 80%', fr: '≈ 80 %', pt: '≈ 80 %' },
    label: {
      es: 'de la industria del vino de Bolivia',
      en: 'of Bolivia’s wine industry',
      fr: "de l'industrie viticole bolivienne",
      pt: 'da indústria do vinho da Bolívia',
    },
  },
  {
    value: { es: '2021', en: '2021', fr: '2021', pt: '2021' },
    label: {
      es: 'la UNESCO declara Patrimonio a la Fiesta Grande',
      en: 'UNESCO recognised the Fiesta Grande as heritage',
      fr: "l'UNESCO inscrit la Fiesta Grande au patrimoine",
      pt: 'a UNESCO declara a Fiesta Grande Patrimônio',
    },
  },
];

// `distance`: id de src/data/location.js · `photo`: id de src/data/photos.json
export const destinations = [
  {
    id: 'tomatitas-coimata',
    kicker: {
      es: 'Naturaleza a minutos',
      en: 'Nature minutes away',
      fr: 'La nature à quelques minutes',
      pt: 'Natureza a minutos',
    },
    title: { es: 'Tomatitas y Coimata', en: 'Tomatitas and Coimata', fr: 'Tomatitas et Coimata', pt: 'Tomatitas e Coimata' },
    text: {
      es: 'Río, pozas y cascadas a un paso de tu cabaña. Tomatitas tiene playas de río, un puente colgante y un pequeño bosque; Coimata es conocida por sus cascadas y pozas de agua cristalina.',
      en: 'A river, natural pools and waterfalls a short drive from your cabin. Tomatitas has river beaches, a suspension bridge and a small wood; Coimata is known for its waterfalls and clear pools.',
      fr: "Rivière, bassins et cascades à deux pas de votre chalet. Tomatitas a des plages de rivière, un pont suspendu et un petit bois ; Coimata est connue pour ses cascades et ses bassins d'eau claire.",
      pt: 'Rio, poços e cachoeiras a um passo da sua cabana. Tomatitas tem prainhas de rio, uma ponte pênsil e um pequeno bosque; Coimata é conhecida pelas cachoeiras e poços de água cristalina.',
    },
    photo: 'tarija-coimata',
    distance: ['tomatitas', 'coimata'],
    featured: true,
  },
  {
    id: 'vino',
    kicker: { es: 'Vino y singani', en: 'Wine and singani', fr: 'Vin et singani', pt: 'Vinho e singani' },
    title: {
      es: 'Ruta del Vino y Singani de Altura',
      en: 'High-altitude Wine and Singani Route',
      fr: "Route du vin et du singani d'altitude",
      pt: 'Rota do Vinho e do Singani de Altitude',
    },
    text: {
      es: 'Tarija reúne cerca del 80 % de la industria del vino de Bolivia, con viñedos entre 1.600 y 2.200 metros. La ruta pasa por bodegas como Campos de Solana y Casa Real, en el valle de Santa Ana, y Aranjuez, en la ciudad, hasta el Valle de la Concepción. Varias reciben visitas guiadas.',
      en: 'Tarija accounts for around 80% of Bolivia’s wine industry, with vineyards between 1,600 and 2,200 metres. The route takes in wineries such as Campos de Solana and Casa Real, in the Santa Ana valley, and Aranjuez, in the city, out to Valle de la Concepción. Several offer guided visits.',
      fr: "Tarija concentre près de 80 % de l'industrie viticole bolivienne, avec des vignes entre 1 600 et 2 200 mètres. La route passe par des caves comme Campos de Solana et Casa Real, dans la vallée de Santa Ana, et Aranjuez, en ville, jusqu'au Valle de la Concepción. Plusieurs se visitent.",
      pt: 'Tarija reúne cerca de 80 % da indústria do vinho da Bolívia, com vinhedos entre 1.600 e 2.200 metros. A rota passa por vinícolas como Campos de Solana e Casa Real, no vale de Santa Ana, e Aranjuez, na cidade, até o Valle de la Concepción. Várias recebem visitas guiadas.',
    },
    photo: 'tarija-vinedos',
    distance: ['concepcion'],
    featured: true,
  },
  {
    id: 'san-lorenzo',
    kicker: { es: 'Historia', en: 'History', fr: 'Histoire', pt: 'História' },
    title: { es: 'San Lorenzo', en: 'San Lorenzo', fr: 'San Lorenzo', pt: 'San Lorenzo' },
    text: {
      es: 'Aquí está la casa del héroe de la independencia Eustaquio “Moto” Méndez, hoy museo y Monumento Histórico Nacional, frente a la plaza del pueblo.',
      en: 'This is where the house of independence hero Eustaquio “Moto” Méndez stands, now a museum and National Historic Monument, facing the village square.',
      fr: "C'est ici que se trouve la maison du héros de l'indépendance Eustaquio « Moto » Méndez, aujourd'hui musée et monument historique national, face à la place du village.",
      pt: 'Aqui fica a casa do herói da independência Eustaquio “Moto” Méndez, hoje museu e Monumento Histórico Nacional, em frente à praça do vilarejo.',
    },
    photo: 'tarija-san-lorenzo',
    distance: ['san-lorenzo'],
    featured: true,
  },
  {
    id: 'fiesta-grande',
    kicker: { es: 'Cultura viva', en: 'Living culture', fr: 'Culture vivante', pt: 'Cultura viva' },
    title: {
      es: 'Fiesta Grande de Tarija',
      en: 'Fiesta Grande of Tarija',
      fr: 'Fiesta Grande de Tarija',
      pt: 'Fiesta Grande de Tarija',
    },
    text: {
      es: 'La fiesta de San Roque, con sus chunchos de trajes de colores, recorre la ciudad entre agosto y septiembre. En 2021 la UNESCO la inscribió como Patrimonio Cultural Inmaterial de la Humanidad.',
      en: 'The feast of San Roque, with its chunchos in colourful costumes, fills the city between August and September. In 2021 UNESCO inscribed it as Intangible Cultural Heritage of Humanity.',
      fr: "La fête de San Roque, avec ses chunchos aux costumes colorés, parcourt la ville entre août et septembre. En 2021, l'UNESCO l'a inscrite au patrimoine culturel immatériel de l'humanité.",
      pt: 'A festa de San Roque, com seus chunchos de trajes coloridos, percorre a cidade entre agosto e setembro. Em 2021 a UNESCO a inscreveu como Patrimônio Cultural Imaterial da Humanidade.',
    },
    photo: 'tarija-fiesta-san-roque',
    distance: [],
    featured: true,
  },
  {
    id: 'ciudad',
    kicker: { es: 'La ciudad', en: 'The city', fr: 'La ville', pt: 'A cidade' },
    title: { es: 'Centro de Tarija', en: 'Central Tarija', fr: 'Centre de Tarija', pt: 'Centro de Tarija' },
    text: {
      es: 'La plaza Luis de Fuentes, la Casa Dorada, la catedral, el Museo Nacional Paleontológico y Arqueológico y el mirador de la Loma de San Juan.',
      en: 'Plaza Luis de Fuentes, the Casa Dorada, the cathedral, the National Palaeontological and Archaeological Museum and the Loma de San Juan viewpoint.',
      fr: "La place Luis de Fuentes, la Casa Dorada, la cathédrale, le musée national de paléontologie et d'archéologie et le belvédère de la Loma de San Juan.",
      pt: 'A praça Luis de Fuentes, a Casa Dorada, a catedral, o Museu Nacional Paleontológico e Arqueológico e o mirante da Loma de San Juan.',
    },
    photo: 'tarija-casa-dorada',
    distance: ['centro'],
  },
  {
    id: 'gastronomia',
    kicker: { es: 'Sabores', en: 'Flavours', fr: 'Saveurs', pt: 'Sabores' },
    title: { es: 'Cocina chapaca', en: 'Chapaca cooking', fr: 'Cuisine chapaca', pt: 'Cozinha chapaca' },
    text: {
      es: 'El saice, plato bandera de Tarija, y la ranga encabezan una cocina que también ofrece chancho a la cruz, rosquetes y empanadas blanqueadas.',
      en: 'Saice, the signature dish of Tarija, and ranga lead a cuisine that also offers chancho a la cruz, rosquetes and empanadas blanqueadas.',
      fr: "Le saice, plat emblématique de Tarija, et la ranga mènent une cuisine qui propose aussi le chancho a la cruz, les rosquetes et les empanadas blanqueadas.",
      pt: 'O saice, prato símbolo de Tarija, e a ranga encabeçam uma cozinha que também tem chancho a la cruz, rosquetes e empanadas blanqueadas.',
    },
    photo: 'tarija-saice',
    distance: [],
  },
  {
    id: 'san-jacinto',
    kicker: { es: 'Paseo de tarde', en: 'Afternoon outing', fr: "Sortie d'après-midi", pt: 'Passeio de tarde' },
    title: { es: 'Lago San Jacinto', en: 'San Jacinto lake', fr: 'Lac San Jacinto', pt: 'Lago San Jacinto' },
    text: {
      es: 'La represa de San Jacinto forma un lago rodeado de cerros, un buen plan para ver caer la tarde.',
      en: 'The San Jacinto dam forms a lake ringed by hills, a good place to watch the afternoon fade.',
      fr: "Le barrage de San Jacinto forme un lac entouré de collines, idéal pour voir tomber le soir.",
      pt: 'A represa de San Jacinto forma um lago cercado de morros, um bom programa para ver o fim da tarde.',
    },
    photo: 'tarija-lago-san-jacinto',
    distance: ['san-jacinto'],
  },
  {
    id: 'jurina',
    kicker: { es: 'Excursión', en: 'Excursion', fr: 'Excursion', pt: 'Passeio' },
    title: { es: 'Chorros de Jurina', en: 'Jurina waterfalls', fr: 'Cascades de Jurina', pt: 'Cachoeiras de Jurina' },
    text: {
      es: 'Caídas de agua de hasta 40 metros con pozas naturales, en medio de los cerros.',
      en: 'Waterfalls of up to 40 metres with natural pools, surrounded by hills.',
      fr: "Des chutes d'eau de 40 mètres et des bassins naturels, au milieu des collines.",
      pt: 'Quedas d’água de até 40 metros com poços naturais, no meio dos morros.',
    },
    photo: 'tarija-chorros-jurina',
    distance: ['jurina'],
  },
  {
    id: 'pilaya',
    kicker: { es: 'Aventura', en: 'Adventure', fr: 'Aventure', pt: 'Aventura' },
    title: { es: 'Cañón del Pilaya', en: 'Pilaya Canyon', fr: 'Canyon du Pilaya', pt: 'Cânion do Pilaya' },
    text: {
      es: 'En el límite entre Tarija y Chuquisaca, es considerado uno de los cañones más profundos del mundo. Se llega por la comunidad de Yumasa, con un último tramo de tierra, y luego se camina hasta el mirador, donde se pueden ver cóndores. Conviene ir con guía local.',
      en: 'On the border between Tarija and Chuquisaca, it is considered one of the deepest canyons in the world. You reach it through the community of Yumasa, with a final stretch of dirt road, and then walk up to the viewpoint, where condors can be seen. It is best to go with a local guide.',
      fr: "À la limite entre Tarija et Chuquisaca, il est considéré comme l'un des canyons les plus profonds du monde. On y accède par la communauté de Yumasa, avec une dernière portion en terre, puis à pied jusqu'au belvédère, où l'on peut voir des condors. Mieux vaut y aller avec un guide local.",
      pt: 'Na divisa entre Tarija e Chuquisaca, é considerado um dos cânions mais profundos do mundo. Chega-se pela comunidade de Yumasa, com um trecho final de terra, e depois caminha-se até o mirante, onde dá para ver condores. Vale ir com guia local.',
    },
    photo: 'tarija-canon-pilaya',
    distance: ['pilaya'],
  },
  {
    id: 'sama',
    kicker: {
      es: 'Salida de día completo',
      en: 'Full-day trip',
      fr: 'Sortie à la journée',
      pt: 'Passeio de dia inteiro',
    },
    title: {
      es: 'Reserva de Sama y Tajzara',
      en: 'Sama Reserve and Tajzara',
      fr: 'Réserve de Sama et Tajzara',
      pt: 'Reserva de Sama e Tajzara',
    },
    text: {
      es: 'Las lagunas de Tajzara, un humedal de importancia internacional (sitio Ramsar), están dentro de la Reserva Biológica Cordillera de Sama: paisaje de altura para un día entero.',
      en: 'The Tajzara lagoons, a wetland of international importance (a Ramsar site), lie inside the Cordillera de Sama Biological Reserve: high-altitude scenery for a full day.',
      fr: "Les lagunes de Tajzara, zone humide d'importance internationale (site Ramsar), se trouvent dans la réserve biologique Cordillera de Sama : un paysage d'altitude pour une journée entière.",
      pt: 'As lagoas de Tajzara, uma área úmida de importância internacional (sítio Ramsar), ficam dentro da Reserva Biológica Cordillera de Sama: paisagem de altitude para um dia inteiro.',
    },
    photo: 'tarija-sama-tajzara',
    distance: ['tajzara'],
  },
];
