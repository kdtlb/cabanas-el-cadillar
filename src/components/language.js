/**
 * Selector de idioma.
 *
 * Usa `page.alternates` (las versiones de la misma página en cada idioma, que
 * arma el compilador), así que siempre lleva a la página equivalente y no al
 * inicio. En el encabezado es un desplegable nativo; en el menú móvil y en el
 * pie, una lista de enlaces.
 */
import { attrs, cx, html } from '../lib/html.js';
import { icon } from './icons.js';

function idiomas(ctx, page) {
  return (page.alternates || []).map((alternate) => ({
    locale: alternate.lang,
    label: ctx.site.locales[alternate.lang]?.label ?? alternate.lang,
    path: alternate.path,
    current: alternate.lang === ctx.locale,
  }));
}

export function languageLinks(ctx, page, className = '') {
  const items = idiomas(ctx, page);
  if (items.length < 2) return '';
  return html`<ul class="${cx('lang-links', className)}">${items.map(
    (item) => html`<li><a href="${item.path}" lang="${item.locale}"${attrs({ 'aria-current': item.current ? 'true' : null })}>${item.label}</a></li>`,
  )}</ul>`;
}

export function languageMenu(ctx, page) {
  const items = idiomas(ctx, page);
  if (items.length < 2) return '';
  const actual = items.find((item) => item.current);
  return html`<details class="lang">
  <summary title="${ctx.t('nav.language')}"><span class="sr-only">${ctx.t('nav.language')}: </span><span aria-hidden="true">${actual.locale.toUpperCase()}</span>${icon('chevron-down', { size: 16 })}</summary>
  ${languageLinks(ctx, page, 'lang__list')}
</details>`;
}
