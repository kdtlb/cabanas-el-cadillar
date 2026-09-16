/**
 * Salón para reuniones empresariales.
 *
 * Confirmado por el propietario: el salón es de uso exclusivo para empresas
 * (no se ofrece para eventos sociales) y, junto con el salón, se ofrece
 * hospedaje para los participantes en las cabañas del predio, aperitivos y
 * comidas.
 *
 * PENDIENTE: todo lo que figura como "XX" (capacidad, superficie, formatos,
 * equipamiento, internet, estacionamiento, horarios, tarifas, aperitivos y
 * menús). Reemplazar cada XX por el dato real, o quitar la línea si no
 * corresponde. También faltan fotos del interior del salón.
 */
import { cabins } from './cabins.js';

// Plazas de hospedaje: suma de la capacidad de las cabañas (src/data/cabins.js)
export const lodgingCapacity = cabins.reduce((total, cabin) => total + cabin.guests, 0);

export const meetingRoom = {
  photo: 'salon-eventos-entrada',
  icon: 'building',
  title: { es: '¿Viajas por trabajo?' },
  text: {
    es: 'El Cadillar cuenta con un salón de uso exclusivo para reuniones empresariales, con hospedaje para tu equipo en las cabañas del mismo predio, aperitivos y comidas.',
  },
  whatsappMessage: {
    es: 'Hola, quisiera cotizar el salón para reuniones empresariales de El Cadillar.\nFecha: \nCantidad de personas: \nServicios: salón / hospedaje / aperitivos / comidas',
  },
};

export const roomFacts = [
  { value: { es: 'XX' }, label: { es: 'personas de capacidad en el salón' } },
  { value: { es: 'XX m²' }, label: { es: 'de superficie' } },
  { value: { es: String(lodgingCapacity) }, label: { es: 'plazas de hospedaje en 10 cabañas' } },
  { value: { es: '7 km' }, label: { es: 'del centro de Tarija' } },
];

export const roomBenefits = [
  {
    icon: 'building',
    title: { es: 'Solo para empresas' },
    text: { es: 'El salón se usa únicamente para reuniones de trabajo, no para eventos sociales.' },
  },
  {
    icon: 'leaf',
    title: { es: 'Calma para concentrarse' },
    text: { es: 'Al pie de los cerros y lejos del ruido de la ciudad, en un entorno que invita a pensar.' },
  },
  {
    icon: 'bed',
    title: { es: 'Tu equipo se queda aquí' },
    text: { es: `Hospedaje en las 10 cabañas del mismo predio, con ${lodgingCapacity} plazas en total.` },
  },
  {
    icon: 'coffee',
    title: { es: 'Aperitivos y comidas' },
    text: { es: 'Recibimos al grupo con aperitivos y resolvemos las comidas de la jornada.' },
  },
  {
    icon: 'tree',
    title: { es: 'Pausas al aire libre' },
    text: { es: 'Jardines, terraza y pérgola para despejarse entre una sesión y otra.' },
  },
  {
    icon: 'plane',
    title: { es: 'Fácil de llegar' },
    text: { es: 'A 7 km del centro de Tarija y a 10 km del aeropuerto.' },
  },
];

export const roomSpecs = [
  { icon: 'users', label: { es: 'Capacidad máxima' }, value: { es: 'XX personas' } },
  { icon: 'area', label: { es: 'Superficie' }, value: { es: 'XX m²' } },
  { icon: 'building', label: { es: 'Formatos de armado' }, value: { es: 'Auditorio: XX · Escuela: XX · Mesa en U: XX · Directorio: XX personas' } },
  { icon: 'presentation', label: { es: 'Equipamiento' }, value: { es: 'XX' } },
  { icon: 'wifi', label: { es: 'Internet' }, value: { es: 'XX' } },
  { icon: 'parking', label: { es: 'Estacionamiento' }, value: { es: 'XX' } },
  { icon: 'clock', label: { es: 'Horarios' }, value: { es: 'XX' } },
  { icon: 'tag', label: { es: 'Tarifas' }, value: { es: 'XX' } },
];

export const roomServices = [
  {
    id: 'hospedaje',
    icon: 'bed',
    title: { es: 'Hospedaje para los participantes' },
    text: { es: `Tu equipo puede alojarse en las 10 cabañas independientes del predio, todas con baño privado: ${lodgingCapacity} plazas en total.` },
  },
  {
    id: 'aperitivos',
    icon: 'coffee',
    title: { es: 'Aperitivos' },
    text: { es: 'Para recibir al grupo y para las pausas de la reunión. Opciones: XX.' },
  },
  {
    id: 'comidas',
    icon: 'utensils',
    title: { es: 'Comidas' },
    text: { es: 'Las comidas de la jornada, sin salir del lugar. Menús: XX.' },
  },
  {
    id: 'a-medida',
    icon: 'check',
    title: { es: 'A la medida de tu grupo' },
    text: { es: 'Combina el salón, el hospedaje, los aperitivos y las comidas según tu reunión, y te enviamos una sola cotización.' },
  },
];
