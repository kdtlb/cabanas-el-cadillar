/**
 * Textos del sitio en español.
 *
 * Para sumar otro idioma: copiar la carpeta es/ (y este archivo) con el código
 * del idioma, traducir los textos, registrarlo en src/content/index.js y
 * activarlo en src/config/site.js. Los datos (cabañas, fotos, preguntas,
 * destinos) se traducen agregando la clave del idioma junto a `es`.
 */
import ui from './es/ui.js';
import seo from './es/seo.js';
import home from './es/home.js';
import pages from './es/pages.js';

export default { ...ui, seo, home, ...pages };
