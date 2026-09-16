/**
 * Íconos de línea con trazo redondeado, en el mismo lenguaje que la versión
 * de línea del isotipo (manual de marca): simples, cálidos y sin rellenos.
 * Se dibujan con `currentColor`, así que toman el color del texto.
 */
import { escape, raw } from '../lib/html.js';

const WAVE = 'c1.5 0 1.5 1 3 1s1.5-1 3-1 1.5 1 3 1 1.5-1 3-1 1.5 1 3 1 1.5-1 3-1';

const ICONS = {
  // Alojamiento
  house: '<path d="M3.5 11 12 4.5l8.5 6.5"/><path d="M5.5 9.5v10h13v-10"/><path d="M10 19.5v-4a2 2 0 0 1 4 0v4"/>',
  users: '<circle cx="9" cy="8" r="3.2"/><path d="M3.2 19.5a5.8 5.8 0 0 1 11.6 0"/><path d="M15.8 5.2a3 3 0 0 1 0 5.6"/><path d="M17.6 14.1a5.8 5.8 0 0 1 3.2 5.4"/>',
  bed: '<path d="M3.5 5.5v14"/><path d="M3.5 15.5h17v4"/><path d="M20.5 15.5V13a3 3 0 0 0-3-3h-6.5v5.5"/><circle cx="7.2" cy="12.3" r="1.9"/>',
  bath: '<path d="M3.5 12.5h17V14a5 5 0 0 1-5 5h-7a5 5 0 0 1-5-5v-1.5Z"/><path d="M6 12.5V6.2a2.2 2.2 0 0 1 4.1-1.1"/><path d="m7 19-1 1.8M17 19l1 1.8"/>',
  area: '<path d="M4 9V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5"/><path d="m8.5 15.5 7-7"/>',
  stairs: '<path d="M3.5 20.5h4v-4h4v-4h4v-4h5"/>',
  fireplace: '<path d="M3.5 20.5h17"/><path d="M5 20.5V9h14v11.5"/><path d="M3.5 9h17V5.5h-17Z"/><path d="M12 18.5c-1.8 0-3-1.1-3-2.7 0-1.8 1.5-2.4 2-4.3 1.9 1 4 2.6 4 4.4 0 1.5-1.2 2.6-3 2.6Z"/>',
  grill: '<path d="M4 9.5h16a8 8 0 0 1-16 0Z"/><path d="m8 16.8-1.6 3.7M16 16.8l1.6 3.7M12 17.5v3"/><path d="M9 3.5c-.8 1 .8 2 0 3M12 3c-.8 1 .8 2 0 3M15 3.5c-.8 1 .8 2 0 3"/>',
  kitchen: '<rect x="3.5" y="4.5" width="17" height="15" rx="2.5"/><circle cx="8.5" cy="10" r="2.2"/><circle cx="15.5" cy="10" r="2.2"/><path d="M3.5 14.5h17M9 17h6"/>',
  sofa: '<path d="M5.5 11V8.5A2.5 2.5 0 0 1 8 6h8a2.5 2.5 0 0 1 2.5 2.5V11"/><path d="M3.5 12.8a1.6 1.6 0 0 1 3.2 0V14h10.6v-1.2a1.6 1.6 0 0 1 3.2 0V17a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 17Z"/><path d="M6 18.5V20M18 18.5V20"/>',
  porch: '<path d="M2.5 9.5 12 4l9.5 5.5"/><path d="M4.5 9.5h15M6.5 9.5v10M17.5 9.5v10M3.5 19.5h17"/><path d="M10 19.5v-5h4v5"/>',
  balcony: '<path d="M7 11.5V5.5A1.5 1.5 0 0 1 8.5 4h7A1.5 1.5 0 0 1 17 5.5v6"/><path d="M12 4v7.5"/><path d="M4 14.5h16M4 20.5h16M6 14.5v6M10 14.5v6M14 14.5v6M18 14.5v6"/>',
  wall: '<rect x="3.5" y="5" width="17" height="14" rx="1.5"/><path d="M3.5 9.7h17M3.5 14.3h17M9.5 5v4.7M15 5v4.7M6.8 9.7v4.6M12.3 9.7v4.6M17.7 9.7v4.6M9.5 14.3V19M15 14.3V19"/>',
  niche: '<path d="M6 20.5V9.5a6 6 0 0 1 12 0v11"/><path d="M4.5 20.5h15"/><path d="m10.3 20.5-.4-3.2c-.1-.8.5-1.3 1.2-1.3h1.8c.7 0 1.3.5 1.2 1.3l-.4 3.2"/><path d="M12 16v-2.2"/>',
  roof: '<path d="M2.5 11.5 12 5l9.5 6.5"/><path d="M5.5 14h13M5.5 17h13M5.5 20h13"/>',
  building: '<rect x="4.5" y="3.5" width="15" height="17" rx="1.5"/><path d="M8.5 7.5h2M13.5 7.5h2M8.5 11h2M13.5 11h2M8.5 14.5h2M13.5 14.5h2M10.5 20.5v-3h3v3"/>',

  // Predio y naturaleza
  pool: `<path d="M3 18${WAVE}"/><path d="M8.5 15V6a2 2 0 0 1 4 0"/><path d="M14.5 15V6a2 2 0 0 1 4 0"/><path d="M8.5 9.5h6M8.5 13h6"/>`,
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M5.5 18.5l1.7-1.7M16.8 7.2l1.7-1.7"/>',
  hills: '<circle cx="8" cy="7.5" r="2.2"/><path d="M2.5 18.5c2.2-3.6 4.4-6.2 6.6-6.2 1.9 0 2.6 2.2 4.2 2.2 1.5 0 2.6-4.5 4.6-4.5 1.7 0 2.9 3.5 3.6 8.5"/><path d="M2.5 18.5h19"/>',
  tree: '<path d="M12 21v-6.5"/><path d="M12 14.5c-4.3 0-7-2.3-7-5.5C5 5.9 8 3.5 12 3.5s7 2.4 7 5.5c0 3.2-2.7 5.5-7 5.5Z"/><path d="m12 14.5-2.6-2.4M12 12.2l2.4-2"/>',
  flower: '<path d="M12 21v-9"/><path d="M8.2 21 10.4 15M15.8 21l-2.2-6"/><path d="M12 12c-1.2-1-1.2-2.9 0-3.9 1.2 1 1.2 2.9 0 3.9ZM12 7.6c-1.2-1-1.2-2.9 0-3.9 1.2 1 1.2 2.9 0 3.9Z"/><path d="M10.2 14.9c-1.4-.4-2.1-1.9-1.7-3.3 1.4.4 2.1 1.9 1.7 3.3ZM13.8 14.9c1.4-.4 2.1-1.9 1.7-3.3-1.4.4-2.1 1.9-1.7 3.3Z"/>',
  pergola: '<path d="M3 7.5h18M3.5 10.5h17"/><path d="M5.5 7.5v13M18.5 7.5v13"/><path d="M8.5 4.5v3M12 4.5v3M15.5 4.5v3"/><path d="M9.5 20.5V17h5v3.5"/>',
  playground: '<path d="M4 20.5 9 4.5h6l5 16"/><path d="M6.6 12.2h10.8"/><path d="M12 4.5v11"/><path d="M10.3 15.5h3.4"/>',
  hammock: '<path d="M3 5.5v15M21 5.5v15"/><path d="M3 8.5c3.5 6 14.5 6 18 0"/><path d="M5.5 11.3c3 2.6 10 2.6 13 0"/>',
  leaf: '<path d="M5 19c0-8 5.5-13.5 14-14 0 8.5-5.5 14-14 14Z"/><path d="m5 19 8-8"/>',
  key: '<circle cx="8" cy="15.5" r="3.5"/><path d="m10.5 13 8.5-8.5M15.5 8l2.5 2.5M13.2 10.3l1.8 1.8"/>',

  // Tarija y viaje
  pin: '<path d="M12 21s-6.5-6.1-6.5-11.2a6.5 6.5 0 0 1 13 0C18.5 14.9 12 21 12 21Z"/><circle cx="12" cy="9.8" r="2.4"/>',
  plane: '<path d="M21 15.8 13.6 11.2V5.6a1.6 1.6 0 0 0-3.2 0v5.6L3 15.8v1.8l7.4-2.3V19l-2 1.5v1.6L12 21l3.6 1.1v-1.6l-2-1.5v-3.7l7.4 2.3Z"/>',
  bus: '<rect x="4.5" y="3.5" width="15" height="15" rx="2.5"/><path d="M4.5 11.5h15M8.2 6.8h7.6"/><path d="M8 18.5V21M16 18.5V21"/><path d="M8 15h.01M16 15h.01"/>',
  car: '<path d="M5.5 16.5h13"/><path d="M4 16.5V13l2.1-5.1A2 2 0 0 1 8 6.7h8a2 2 0 0 1 1.9 1.2L20 13v3.5"/><path d="M4 13h16"/><circle cx="7.8" cy="16.8" r="1.8"/><circle cx="16.2" cy="16.8" r="1.8"/>',
  city: '<path d="M3.5 20.5h17"/><path d="M5.5 20.5v-10l4-2.5 4 2.5v10"/><path d="M13.5 20.5v-15h5v15"/><path d="M8 13.5h3M8 17h3M15.8 9h.9M15.8 12.5h.9M15.8 16h.9"/>',
  church: '<path d="M12 2.5v4M10.5 4h3"/><path d="M7 20.5V11l5-4.5 5 4.5v9.5"/><path d="M4 20.5h16"/><path d="M10.5 20.5V17a1.5 1.5 0 0 1 3 0v3.5"/>',
  waterfall: `<path d="M4 4.5h16"/><path d="M7.5 4.5v8M12 4.5v10.5M16.5 4.5v8"/><path d="M3 18.5${WAVE}"/>`,
  river: `<path d="M3 8${WAVE}M3 12.5${WAVE}M3 17${WAVE}"/>`,
  lake: `<path d="M3 12.5 7.5 6.5l3.5 4.5 2.5-3 7.5 4.5"/><path d="M3 16.5${WAVE}"/>`,
  mountain: '<path d="M2.5 19.5 9 8.5l3.5 5.5L15 10.5l6.5 9Z"/><path d="m7.3 11.4 1.7 1.3 1.5-1"/>',
  grape: '<circle cx="9" cy="10.5" r="2.2"/><circle cx="13.4" cy="10.5" r="2.2"/><circle cx="11.2" cy="14.4" r="2.2"/><circle cx="15.6" cy="14.4" r="2.2"/><circle cx="13.4" cy="18.3" r="2.2"/><path d="M11.4 8.3c0-2.3 1.4-3.9 3.8-4.6"/><path d="M13.3 6.3c1.4-.8 3.3-.5 4.5.8-1.4.8-3.3.5-4.5-.8Z"/>',
  utensils: '<path d="M7 3.5v5a2 2 0 0 0 4 0v-5M9 3.5v17"/><path d="M16.5 20.5v-17c-2 1-3 3.6-3 6.6 0 1.5.8 2.4 3 2.4"/>',
  coffee: '<path d="M4.5 9.5h12V14a5.5 5.5 0 0 1-5.5 5.5h-1A5.5 5.5 0 0 1 4.5 14Z"/><path d="M16.5 11h1.2a2.8 2.8 0 0 1 0 5.6h-1.6"/><path d="M8.5 3.5c-.8 1 .8 2 0 3M12.5 3.5c-.8 1 .8 2 0 3"/>',
  presentation: '<path d="M3 4.5h18"/><rect x="4.5" y="4.5" width="15" height="10.5" rx="1"/><path d="M12 15v3.5M8.5 21l3.5-2.5 3.5 2.5"/>',
  tag: '<path d="M3.5 12.4V4.5a1 1 0 0 1 1-1h7.9l8.1 8.1a1.5 1.5 0 0 1 0 2.1l-6.3 6.3a1.5 1.5 0 0 1-2.1 0Z"/><circle cx="8" cy="8" r="1.4"/>',
  route: '<path d="M12 3 21 12l-9 9-9-9Z"/><path d="M9.5 14.5v-2A1.5 1.5 0 0 1 11 11h4"/><path d="m13 9 2 2-2 2"/>',
  map: '<path d="M9 4.5 3.5 6.5v13l5.5-2 6 2 5.5-2v-13l-5.5 2Z"/><path d="M9 4.5v13M15 6.5v13"/>',

  // Contacto y redes
  whatsapp: '<path d="M4.4 19.6 5.5 15.8A8.4 8.4 0 1 1 8.4 18.7Z"/><path d="M9.3 8.3c.3-.4.7-.4 1-.1l.9 1.4c.2.3.1.6-.1.9l-.5.5a5.6 5.6 0 0 0 2.6 2.6l.5-.5c.3-.2.6-.3.9-.1l1.4.9c.3.3.3.7-.1 1-.8.9-1.8 1.2-2.8.8a8 8 0 0 1-4.6-4.6c-.4-1 0-2 .8-2.8Z"/>',
  phone: '<path d="M5.2 4.5h3l1.5 4-2 1.3a10.2 10.2 0 0 0 6.5 6.5l1.3-2 4 1.5v3a2 2 0 0 1-2 2A16.5 16.5 0 0 1 3.2 6.5a2 2 0 0 1 2-2Z"/>',
  mail: '<rect x="3.5" y="5.5" width="17" height="13" rx="2"/><path d="m4 7 8 6 8-6"/>',
  instagram: '<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.2 6.8h.01"/>',
  facebook: '<path d="M13.6 21v-7.3h2.5l.4-2.9h-2.9V8.9c0-.8.3-1.4 1.4-1.4H17V4.9c-.3 0-1.1-.1-2.1-.1-2.1 0-3.6 1.3-3.6 3.7v2.3H8.8v2.9h2.5V21Z"/>',
  tiktok: '<path d="M16.4 5.6A4.2 4.2 0 0 1 15.3 3h-3v12.3a2.6 2.6 0 1 1-2.6-2.6c.3 0 .5 0 .8.1V9.7a5.6 5.6 0 1 0 4.8 5.6V9a7.1 7.1 0 0 0 4.2 1.4V7.4a4.2 4.2 0 0 1-3.1-1.8Z"/>',
  airbnb: '<path d="M12 16.3c-1.6-2-2.6-3.8-2.6-5.1a2.6 2.6 0 0 1 5.2 0c0 1.3-1 3.1-2.6 5.1Zm0 0c1.9 2.3 4 3.7 5.5 3.7a3 3 0 0 0 2.8-4.1L15 4.9a3.3 3.3 0 0 0-6 0L3.7 15.9A3 3 0 0 0 6.5 20c1.5 0 3.6-1.4 5.5-3.7Z"/>',

  // Interfaz
  calendar: '<rect x="3.5" y="5" width="17" height="15.5" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
  clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
  check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
  info: '<circle cx="12" cy="12" r="8.5"/><path d="M12 11v5M12 8h.01"/>',
  camera: '<path d="M3.5 8.5a2 2 0 0 1 2-2h2L9 4.5h6l1.5 2h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2Z"/><circle cx="12" cy="13" r="3.5"/>',
  expand: '<path d="M14.5 4H20v5.5M9.5 20H4v-5.5M20 4l-6.5 6.5M4 20l6.5-6.5"/>',
  star: '<path d="m12 3.8 2.5 5.1 5.6.8-4 4 1 5.5-5-2.6-5 2.6 1-5.5-4-4 5.6-.8Z"/>',
  quote: '<path d="M9.5 7c-3 .5-5 3-5 6.5V17h5v-5h-3M19.5 7c-3 .5-5 3-5 6.5V17h5v-5h-3"/>',
  'arrow-right': '<path d="M4.5 12h15M13.5 6l6 6-6 6"/>',
  'arrow-left': '<path d="M19.5 12h-15M10.5 6l-6 6 6 6"/>',
  'chevron-down': '<path d="m6 9 6 6 6-6"/>',
  'chevron-left': '<path d="m15 6-6 6 6 6"/>',
  'chevron-right': '<path d="m9 6 6 6-6 6"/>',
  close: '<path d="M6 6l12 12M18 6 6 18"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  wifi: '<path d="M4 9.5a12 12 0 0 1 16 0M7 12.8a7.5 7.5 0 0 1 10 0M10 16a3 3 0 0 1 4 0M12 19h.01"/>',
  parking: '<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M10 16.5v-9h3a2.8 2.8 0 0 1 0 5.6h-3"/>',
};

// Marcas que se reconocen mejor con relleno
const FILLED = new Set(['facebook', 'tiktok']);

export const hasIcon = (name) => Object.hasOwn(ICONS, name);

export function icon(name, { size = 24, className = 'icon', label = null } = {}) {
  const body = ICONS[name];
  if (!body) throw new Error(`No existe el ícono "${name}".`);
  const paint = FILLED.has(name)
    ? 'fill="currentColor"'
    : 'fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"';
  const a11y = label ? `role="img" aria-label="${escape(label)}"` : 'aria-hidden="true" focusable="false"';
  return raw(`<svg class="${className}" width="${size}" height="${size}" viewBox="0 0 24 24" ${paint} ${a11y}>${body}</svg>`);
}
