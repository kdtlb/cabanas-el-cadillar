/**
 * Catálogo de características y equipamiento de las cabañas.
 *
 * Cada cabaña (src/data/cabins.js) referencia estas claves. Para agregar un
 * servicio nuevo (por ejemplo WiFi, cuando esté confirmado), sumarlo aquí y
 * luego a la lista `equipment` de las cabañas que lo tengan.
 *
 * `icon` es opcional: solo lo usan las características que se destacan.
 * Cada etiqueta lleva los cuatro idiomas del sitio.
 */
export const amenities = {
  'hogar-a-lena': {
    icon: 'fireplace',
    label: { es: 'Hogar a leña', en: 'Wood-burning fireplace', fr: 'Cheminée à bois', pt: 'Lareira a lenha' },
  },
  parrilla: { icon: 'grill', label: { es: 'Parrilla propia', en: 'Private grill', fr: 'Gril privé', pt: 'Churrasqueira própria' } },
  cocina: { icon: 'kitchen', label: { es: 'Cocina', en: 'Kitchen', fr: 'Cuisine', pt: 'Cozinha' } },
  kitchenette: { icon: 'kitchen', label: { es: 'Kitchenette', en: 'Kitchenette', fr: 'Kitchenette', pt: 'Cozinha compacta' } },
  microondas: { icon: null, label: { es: 'Microondas', en: 'Microwave', fr: 'Micro-ondes', pt: 'Micro-ondas' } },
  frigobar: { icon: null, label: { es: 'Frigobar', en: 'Mini fridge', fr: 'Mini-réfrigérateur', pt: 'Frigobar' } },
  hervidor: { icon: null, label: { es: 'Hervidor', en: 'Kettle', fr: 'Bouilloire', pt: 'Chaleira elétrica' } },
  'mesa-comedor': { icon: null, label: { es: 'Mesa de comedor', en: 'Dining table', fr: 'Table à manger', pt: 'Mesa de jantar' } },
  living: { icon: 'sofa', label: { es: 'Estar con sofá', en: 'Sitting area with sofa', fr: 'Coin salon avec canapé', pt: 'Sala com sofá' } },
  'living-comedor': { icon: 'sofa', label: { es: 'Living-comedor', en: 'Living-dining room', fr: 'Salon-salle à manger', pt: 'Sala e jantar' } },
  'sofa-cama': { icon: 'sofa', label: { es: 'Sofá cama', en: 'Sofa bed', fr: 'Canapé-lit', pt: 'Sofá-cama' } },
  tv: { icon: null, label: { es: 'Televisor', en: 'TV', fr: 'Télévision', pt: 'Televisão' } },
  estufa: { icon: null, label: { es: 'Estufa', en: 'Heater', fr: 'Chauffage d’appoint', pt: 'Aquecedor' } },
  galeria: { icon: 'porch', label: { es: 'Galería propia', en: 'Private porch', fr: 'Galerie privée', pt: 'Varanda própria' } },
  reposeras: { icon: null, label: { es: 'Reposeras de madera', en: 'Wooden loungers', fr: 'Chaises longues en bois', pt: 'Espreguiçadeiras de madeira' } },
  balcon: { icon: 'balcony', label: { es: 'Balcón', en: 'Balcony', fr: 'Balcon', pt: 'Sacada' } },
  'dos-plantas': { icon: 'stairs', label: { es: 'Dos plantas', en: 'Two floors', fr: 'Deux niveaux', pt: 'Dois pisos' } },
  'escalera-caracol': { icon: 'stairs', label: { es: 'Escalera caracol', en: 'Spiral staircase', fr: 'Escalier en colimaçon', pt: 'Escada caracol' } },
  'bano-privado': { icon: 'bath', label: { es: 'Baño privado', en: 'Private bathroom', fr: 'Salle de bain privée', pt: 'Banheiro privativo' } },
  'dos-banos': { icon: 'bath', label: { es: 'Dos baños', en: 'Two bathrooms', fr: 'Deux salles de bain', pt: 'Dois banheiros' } },
  ducha: { icon: null, label: { es: 'Ducha', en: 'Shower', fr: 'Douche', pt: 'Chuveiro' } },
  escritorio: { icon: null, label: { es: 'Escritorio', en: 'Desk', fr: 'Bureau', pt: 'Escrivaninha' } },
  ropero: { icon: null, label: { es: 'Ropero', en: 'Wardrobe', fr: 'Armoire', pt: 'Guarda-roupa' } },
  'muros-piedra': { icon: 'wall', label: { es: 'Muros de piedra', en: 'Stone walls', fr: 'Murs en pierre', pt: 'Paredes de pedra' } },
  nichos: { icon: 'niche', label: { es: 'Nichos con cerámicas', en: 'Alcoves with ceramics', fr: 'Niches avec céramiques', pt: 'Nichos com cerâmicas' } },
  'techo-cana': { icon: 'roof', label: { es: 'Techo de caña', en: 'Cane ceiling', fr: 'Plafond en roseau', pt: 'Teto de bambu' } },
  lavandas: { icon: 'flower', label: { es: 'Rodeada de lavandas', en: 'Surrounded by lavender', fr: 'Entourée de lavandes', pt: 'Cercada de lavandas' } },
};

// Espacios compartidos del predio, visibles en las fotografías oficiales.
export const sharedSpaces = {
  piscina: { icon: 'pool', label: { es: 'Piscina al aire libre', en: 'Outdoor pool', fr: 'Piscine en plein air', pt: 'Piscina ao ar livre' } },
  quincho: { icon: 'grill', label: { es: 'Quincho con parrilla', en: 'Barbecue house', fr: 'Espace barbecue', pt: 'Área de churrasco' } },
  terraza: { icon: 'sun', label: { es: 'Terraza', en: 'Terrace', fr: 'Terrasse', pt: 'Terraço' } },
  pergola: { icon: 'pergola', label: { es: 'Patio con pérgola', en: 'Pergola courtyard', fr: 'Cour sous pergola', pt: 'Pátio com pérgola' } },
  jardines: { icon: 'tree', label: { es: 'Jardines y senderos', en: 'Gardens and paths', fr: 'Jardins et sentiers', pt: 'Jardins e trilhas' } },
  juegos: { icon: 'playground', label: { es: 'Juegos infantiles', en: 'Playground', fr: 'Jeux pour enfants', pt: 'Parquinho' } },
};
