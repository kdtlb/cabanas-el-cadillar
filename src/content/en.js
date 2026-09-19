/**
 * Site texts in English.
 *
 * The data (cabins, photos, questions, destinations) is translated by adding
 * the `en` key next to `es` in src/data/.
 */
import ui from './en/ui.js';
import seo from './en/seo.js';
import home from './en/home.js';
import pages from './en/pages.js';

export default { ...ui, seo, home, ...pages };
