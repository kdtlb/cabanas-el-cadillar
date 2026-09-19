/**
 * Textes du site en français.
 *
 * Les données (chalets, photos, questions, destinations) se traduisent en
 * ajoutant la clé `fr` à côté de `es` dans src/data/.
 */
import ui from './fr/ui.js';
import seo from './fr/seo.js';
import home from './fr/home.js';
import pages from './fr/pages.js';

export default { ...ui, seo, home, ...pages };
