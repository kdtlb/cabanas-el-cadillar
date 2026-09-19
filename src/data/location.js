/**
 * Ubicación, distancias y cómo llegar.
 *
 * - Coordenadas y distancia al centro de Tarija (7 km): indicadas por el propietario.
 * - Comunidad, municipio y camino de acceso: OpenStreetMap para esas coordenadas.
 * - Distancias por carretera: calculadas con OpenStreetMap + OSRM (septiembre 2026),
 *   redondeadas al kilómetro. Son orientativas.
 * - Datos de viaje a Tarija: Wikipedia, UNESCO y prensa boliviana (septiembre 2026).
 *
 * Los textos llevan los cuatro idiomas del sitio (es, en, fr, pt).
 */
export const place = {
  community: 'Cadillar',
  municipality: 'San Lorenzo',
  region: 'Tarija',
  access: {
    es: 'Sobre el camino a La Victoria y Coimata, pasando Tomatitas.',
    en: 'On the road to La Victoria and Coimata, just past Tomatitas.',
    fr: 'Sur la route de La Victoria et Coimata, après Tomatitas.',
    pt: 'Na estrada para La Victoria e Coimata, passando Tomatitas.',
  },
};

// `group`: 'llegada' = puntos de arribo · 'cerca' = paseos cercanos · 'excursion' = salidas de día
export const distances = [
  {
    id: 'centro',
    group: 'llegada',
    icon: 'city',
    km: 7,
    name: { es: 'Centro de Tarija', en: 'Central Tarija', fr: 'Centre de Tarija', pt: 'Centro de Tarija' },
    detail: {
      es: 'Plaza Luis de Fuentes y Vargas',
      en: 'Plaza Luis de Fuentes y Vargas',
      fr: 'Place Luis de Fuentes y Vargas',
      pt: 'Praça Luis de Fuentes y Vargas',
    },
  },
  {
    id: 'aeropuerto',
    group: 'llegada',
    icon: 'plane',
    km: 10,
    name: { es: 'Aeropuerto de Tarija', en: 'Tarija airport', fr: 'Aéroport de Tarija', pt: 'Aeroporto de Tarija' },
    detail: {
      es: 'Capitán Oriel Lea Plaza',
      en: 'Capitán Oriel Lea Plaza',
      fr: 'Capitán Oriel Lea Plaza',
      pt: 'Capitán Oriel Lea Plaza',
    },
  },
  {
    id: 'terminal',
    group: 'llegada',
    icon: 'bus',
    km: 14,
    name: { es: 'Terminal de buses', en: 'Bus terminal', fr: 'Gare routière', pt: 'Rodoviária' },
    detail: { es: 'Av. Panamericana', en: 'Av. Panamericana', fr: 'Av. Panamericana', pt: 'Av. Panamericana' },
  },
  {
    id: 'tomatitas',
    group: 'cerca',
    icon: 'river',
    km: 2,
    name: { es: 'Tomatitas', en: 'Tomatitas', fr: 'Tomatitas', pt: 'Tomatitas' },
    detail: {
      es: 'Playas de río y puente colgante',
      en: 'River beaches and a suspension bridge',
      fr: 'Plages de rivière et pont suspendu',
      pt: 'Prainhas de rio e ponte pênsil',
    },
  },
  {
    id: 'coimata',
    group: 'cerca',
    icon: 'waterfall',
    km: 3,
    name: { es: 'Coimata', en: 'Coimata', fr: 'Coimata', pt: 'Coimata' },
    detail: {
      es: 'Cascadas y pozas',
      en: 'Waterfalls and natural pools',
      fr: 'Cascades et bassins naturels',
      pt: 'Cachoeiras e poços naturais',
    },
  },
  {
    id: 'san-lorenzo',
    group: 'cerca',
    icon: 'church',
    km: 11,
    name: { es: 'San Lorenzo', en: 'San Lorenzo', fr: 'San Lorenzo', pt: 'San Lorenzo' },
    detail: {
      es: 'Casa del Moto Méndez',
      en: 'House of Moto Méndez',
      fr: 'Maison de Moto Méndez',
      pt: 'Casa do Moto Méndez',
    },
  },
  {
    id: 'san-jacinto',
    group: 'cerca',
    icon: 'lake',
    km: 15,
    name: { es: 'Lago San Jacinto', en: 'San Jacinto lake', fr: 'Lac San Jacinto', pt: 'Lago San Jacinto' },
    detail: {
      es: 'Represa rodeada de cerros',
      en: 'A reservoir ringed by hills',
      fr: 'Un barrage entouré de collines',
      pt: 'Represa cercada de morros',
    },
  },
  {
    id: 'jurina',
    group: 'excursion',
    icon: 'waterfall',
    km: 19,
    name: { es: 'Chorros de Jurina', en: 'Jurina waterfalls', fr: 'Cascades de Jurina', pt: 'Cachoeiras de Jurina' },
    detail: {
      es: 'Caídas de agua y pozas naturales',
      en: 'Waterfalls and natural pools',
      fr: 'Chutes d’eau et bassins naturels',
      pt: 'Quedas d’água e poços naturais',
    },
  },
  {
    id: 'concepcion',
    group: 'excursion',
    icon: 'grape',
    km: 33,
    name: {
      es: 'Valle de la Concepción',
      en: 'Valle de la Concepción',
      fr: 'Valle de la Concepción',
      pt: 'Valle de la Concepción',
    },
    detail: {
      es: 'Ruta del Vino y Singani de Altura',
      en: 'High-altitude wine and singani route',
      fr: 'Route du vin et du singani d’altitude',
      pt: 'Rota do vinho e do singani de altitude',
    },
  },
  {
    id: 'pilaya',
    group: 'excursion',
    icon: 'mountain',
    km: 55,
    name: { es: 'Cañón del Pilaya', en: 'Pilaya Canyon', fr: 'Canyon du Pilaya', pt: 'Cânion do Pilaya' },
    detail: {
      es: 'Acceso por la comunidad de Yumasa',
      en: 'Reached through the community of Yumasa',
      fr: 'Accès par la communauté de Yumasa',
      pt: 'Acesso pela comunidade de Yumasa',
    },
  },
  {
    id: 'tajzara',
    group: 'excursion',
    icon: 'mountain',
    km: 97,
    name: { es: 'Lagunas de Tajzara', en: 'Tajzara lagoons', fr: 'Lagunes de Tajzara', pt: 'Lagoas de Tajzara' },
    detail: {
      es: 'Reserva Biológica Cordillera de Sama',
      en: 'Cordillera de Sama Biological Reserve',
      fr: 'Réserve biologique Cordillera de Sama',
      pt: 'Reserva Biológica Cordillera de Sama',
    },
  },
];

export const gettingThere = [
  {
    id: 'avion',
    icon: 'plane',
    title: { es: 'En avión', en: 'By plane', fr: 'En avion', pt: 'De avião' },
    text: {
      es: 'Boliviana de Aviación (BoA) tiene vuelos a Tarija desde La Paz, Santa Cruz y Cochabamba. El aeropuerto Capitán Oriel Lea Plaza está a unos 10 km de El Cadillar.',
      en: 'Boliviana de Aviación (BoA) flies to Tarija from La Paz, Santa Cruz and Cochabamba. Capitán Oriel Lea Plaza airport is about 10 km from El Cadillar.',
      fr: "Boliviana de Aviación (BoA) dessert Tarija depuis La Paz, Santa Cruz et Cochabamba. L'aéroport Capitán Oriel Lea Plaza se trouve à environ 10 km d'El Cadillar.",
      pt: 'A Boliviana de Aviación (BoA) tem voos para Tarija de La Paz, Santa Cruz e Cochabamba. O aeroporto Capitán Oriel Lea Plaza fica a cerca de 10 km do El Cadillar.',
    },
  },
  {
    id: 'bus',
    icon: 'bus',
    title: { es: 'En bus', en: 'By bus', fr: 'En bus', pt: 'De ônibus' },
    text: {
      es: 'Hay buses desde las principales ciudades de Bolivia: unas 8 horas desde Potosí, 11 desde Sucre, 12 desde Santa Cruz y 16 desde La Paz. La terminal de Tarija está a 14 km.',
      en: 'There are buses from the main cities in Bolivia: about 8 hours from Potosí, 11 from Sucre, 12 from Santa Cruz and 16 from La Paz. The Tarija terminal is 14 km away.',
      fr: "Des bus relient les principales villes de Bolivie : environ 8 heures depuis Potosí, 11 depuis Sucre, 12 depuis Santa Cruz et 16 depuis La Paz. La gare routière de Tarija est à 14 km.",
      pt: 'Há ônibus das principais cidades da Bolívia: cerca de 8 horas de Potosí, 11 de Sucre, 12 de Santa Cruz e 16 de La Paz. A rodoviária de Tarija fica a 14 km.',
    },
  },
  {
    id: 'argentina',
    icon: 'car',
    title: { es: 'Desde Argentina', en: 'From Argentina', fr: "Depuis l'Argentine", pt: 'Da Argentina' },
    text: {
      es: 'Por tierra, los pasos más usados hacia Tarija son La Quiaca–Villazón y Aguas Blancas–Bermejo, a unos 190–210 km de la ciudad.',
      en: 'By road, the border crossings most used to reach Tarija are La Quiaca–Villazón and Aguas Blancas–Bermejo, some 190–210 km from the city.',
      fr: "Par la route, les postes-frontières les plus utilisés vers Tarija sont La Quiaca–Villazón et Aguas Blancas–Bermejo, à environ 190–210 km de la ville.",
      pt: 'Por terra, as passagens mais usadas para Tarija são La Quiaca–Villazón e Aguas Blancas–Bermejo, a cerca de 190–210 km da cidade.',
    },
  },
  {
    id: 'cadillar',
    icon: 'pin',
    title: { es: 'Hasta El Cadillar', en: 'To El Cadillar', fr: "Jusqu'à El Cadillar", pt: 'Até o El Cadillar' },
    text: {
      es: 'Desde el centro de Tarija son 7 km: se sale hacia Tomatitas y se sigue por el camino a La Victoria y Coimata. El botón "Cómo llegar" abre la ruta en Google Maps.',
      en: 'It is 7 km from the centre of Tarija: head towards Tomatitas and continue on the road to La Victoria and Coimata. The "Get directions" button opens the route in Google Maps.',
      fr: "Depuis le centre de Tarija, comptez 7 km : prenez la direction de Tomatitas puis la route de La Victoria et Coimata. Le bouton « Itinéraire » ouvre le trajet dans Google Maps.",
      pt: 'Do centro de Tarija são 7 km: siga em direção a Tomatitas e continue pela estrada para La Victoria e Coimata. O botão "Como chegar" abre a rota no Google Maps.',
    },
  },
];
