/**
 * Ubicación, distancias y cómo llegar.
 *
 * - Coordenadas y distancia al centro de Tarija (7 km): indicadas por el propietario.
 * - Comunidad, municipio y camino de acceso: OpenStreetMap para esas coordenadas.
 * - Distancias por carretera: calculadas con OpenStreetMap + OSRM (septiembre 2026),
 *   redondeadas al kilómetro. Son orientativas.
 * - Datos de viaje a Tarija: Wikipedia, UNESCO y prensa boliviana (septiembre 2026).
 */
export const place = {
  community: 'Cadillar',
  municipality: 'San Lorenzo',
  region: 'Tarija',
  access: { es: 'Sobre el camino a La Victoria y Coimata, pasando Tomatitas.' },
};

// `group`: 'llegada' = puntos de arribo · 'cerca' = paseos cercanos · 'excursion' = salidas de día
export const distances = [
  { id: 'centro', group: 'llegada', icon: 'city', km: 7, name: { es: 'Centro de Tarija' }, detail: { es: 'Plaza Luis de Fuentes y Vargas' } },
  { id: 'aeropuerto', group: 'llegada', icon: 'plane', km: 10, name: { es: 'Aeropuerto de Tarija' }, detail: { es: 'Capitán Oriel Lea Plaza' } },
  { id: 'terminal', group: 'llegada', icon: 'bus', km: 14, name: { es: 'Terminal de buses' }, detail: { es: 'Av. Panamericana' } },
  { id: 'tomatitas', group: 'cerca', icon: 'river', km: 2, name: { es: 'Tomatitas' }, detail: { es: 'Playas de río y puente colgante' } },
  { id: 'coimata', group: 'cerca', icon: 'waterfall', km: 3, name: { es: 'Coimata' }, detail: { es: 'Cascadas y pozas' } },
  { id: 'san-lorenzo', group: 'cerca', icon: 'church', km: 11, name: { es: 'San Lorenzo' }, detail: { es: 'Casa del Moto Méndez' } },
  { id: 'san-jacinto', group: 'cerca', icon: 'lake', km: 15, name: { es: 'Lago San Jacinto' }, detail: { es: 'Represa rodeada de cerros' } },
  { id: 'jurina', group: 'excursion', icon: 'waterfall', km: 19, name: { es: 'Chorros de Jurina' }, detail: { es: 'Caídas de agua y pozas naturales' } },
  { id: 'concepcion', group: 'excursion', icon: 'grape', km: 33, name: { es: 'Valle de la Concepción' }, detail: { es: 'Ruta del Vino y Singani de Altura' } },
  { id: 'pilaya', group: 'excursion', icon: 'mountain', km: 55, name: { es: 'Cañón del Pilaya' }, detail: { es: 'Acceso por la comunidad de Yumasa' } },
  { id: 'tajzara', group: 'excursion', icon: 'mountain', km: 97, name: { es: 'Lagunas de Tajzara' }, detail: { es: 'Reserva Biológica Cordillera de Sama' } },
];

export const gettingThere = [
  {
    id: 'avion',
    icon: 'plane',
    title: { es: 'En avión' },
    text: {
      es: 'Boliviana de Aviación (BoA) tiene vuelos a Tarija desde La Paz, Santa Cruz y Cochabamba. El aeropuerto Capitán Oriel Lea Plaza está a unos 10 km de El Cadillar.',
    },
  },
  {
    id: 'bus',
    icon: 'bus',
    title: { es: 'En bus' },
    text: {
      es: 'Hay buses desde las principales ciudades de Bolivia: unas 8 horas desde Potosí, 11 desde Sucre, 12 desde Santa Cruz y 16 desde La Paz. La terminal de Tarija está a 14 km.',
    },
  },
  {
    id: 'argentina',
    icon: 'car',
    title: { es: 'Desde Argentina' },
    text: {
      es: 'Por tierra, los pasos más usados hacia Tarija son La Quiaca–Villazón y Aguas Blancas–Bermejo, a unos 190–210 km de la ciudad.',
    },
  },
  {
    id: 'cadillar',
    icon: 'pin',
    title: { es: 'Hasta El Cadillar' },
    text: {
      es: 'Desde el centro de Tarija son 7 km: se sale hacia Tomatitas y se sigue por el camino a La Victoria y Coimata. El botón "Cómo llegar" abre la ruta en Google Maps.',
    },
  },
];
