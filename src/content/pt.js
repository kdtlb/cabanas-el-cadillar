/**
 * Textos do site em português.
 *
 * Os dados (cabanas, fotos, dúvidas, destinos) são traduzidos adicionando a
 * chave `pt` ao lado de `es` em src/data/.
 */
import ui from './pt/ui.js';
import seo from './pt/seo.js';
import home from './pt/home.js';
import pages from './pt/pages.js';

export default { ...ui, seo, home, ...pages };
