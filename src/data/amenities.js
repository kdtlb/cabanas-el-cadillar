/**
 * Catálogo de características y equipamiento de las cabañas.
 *
 * Cada cabaña (src/data/cabins.js) referencia estas claves. Para agregar un
 * servicio nuevo (por ejemplo WiFi, cuando esté confirmado), sumarlo aquí y
 * luego a la lista `equipment` de las cabañas que lo tengan.
 *
 * `icon` es opcional: solo lo usan las características que se destacan.
 */
export const amenities = {
  'hogar-a-lena': { icon: 'fireplace', label: { es: 'Hogar a leña' } },
  parrilla: { icon: 'grill', label: { es: 'Parrilla propia' } },
  cocina: { icon: 'kitchen', label: { es: 'Cocina' } },
  kitchenette: { icon: 'kitchen', label: { es: 'Kitchenette' } },
  microondas: { icon: null, label: { es: 'Microondas' } },
  frigobar: { icon: null, label: { es: 'Frigobar' } },
  hervidor: { icon: null, label: { es: 'Hervidor' } },
  'mesa-comedor': { icon: null, label: { es: 'Mesa de comedor' } },
  living: { icon: 'sofa', label: { es: 'Estar con sofá' } },
  'living-comedor': { icon: 'sofa', label: { es: 'Living-comedor' } },
  'sofa-cama': { icon: 'sofa', label: { es: 'Sofá cama' } },
  tv: { icon: null, label: { es: 'Televisor' } },
  estufa: { icon: null, label: { es: 'Estufa' } },
  galeria: { icon: 'porch', label: { es: 'Galería propia' } },
  reposeras: { icon: null, label: { es: 'Reposeras de madera' } },
  balcon: { icon: 'balcony', label: { es: 'Balcón' } },
  'dos-plantas': { icon: 'stairs', label: { es: 'Dos plantas' } },
  'escalera-caracol': { icon: 'stairs', label: { es: 'Escalera caracol' } },
  'bano-privado': { icon: 'bath', label: { es: 'Baño privado' } },
  'dos-banos': { icon: 'bath', label: { es: 'Dos baños' } },
  ducha: { icon: null, label: { es: 'Ducha' } },
  escritorio: { icon: null, label: { es: 'Escritorio' } },
  ropero: { icon: null, label: { es: 'Ropero' } },
  'muros-piedra': { icon: 'wall', label: { es: 'Muros de piedra' } },
  nichos: { icon: 'niche', label: { es: 'Nichos con cerámicas' } },
  'techo-cana': { icon: 'roof', label: { es: 'Techo de caña' } },
  lavandas: { icon: 'flower', label: { es: 'Rodeada de lavandas' } },
};

// Espacios compartidos del predio, visibles en las fotografías oficiales.
export const sharedSpaces = {
  piscina: { icon: 'pool', label: { es: 'Piscina al aire libre' } },
  quincho: { icon: 'grill', label: { es: 'Quincho con parrilla' } },
  terraza: { icon: 'sun', label: { es: 'Terraza' } },
  pergola: { icon: 'pergola', label: { es: 'Patio con pérgola' } },
  jardines: { icon: 'tree', label: { es: 'Jardines y senderos' } },
  juegos: { icon: 'playground', label: { es: 'Juegos infantiles' } },
};
