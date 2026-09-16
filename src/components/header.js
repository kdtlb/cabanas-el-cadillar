/**
 * Encabezado: logotipo horizontal (alto mínimo digital del manual: 72 px),
 * navegación principal, botón destacado "Reservar" y menú móvil.
 *
 * Con `page.headerOverlay` (portada) el encabezado empieza transparente sobre
 * la foto, con la versión de línea blanca del logotipo, y vuelve a su fondo
 * crema con el logotipo a color al hacer scroll o abrir el menú. Solo una de
 * las dos versiones se muestra a la vez, por eso ambas llevan texto alternativo.
 */
import { mainNav } from '../config/routes.js';
import { attrs, cx, html } from '../lib/html.js';
import { icon } from './icons.js';
import { bookingHref, isExternal } from './ui.js';

export function siteHeader(ctx, page) {
  const { t, site } = ctx;
  const booking = bookingHref(ctx);
  const whatsapp = ctx.whatsapp(t('whatsappDefault'));
  const external = isExternal(booking);

  const links = mainNav.map(
    (key) => html`<li><a href="${ctx.url(key)}"${attrs({ 'aria-current': page.nav === key ? 'page' : null })}>${t(`nav.${key}`)}</a></li>`,
  );

  return html`<header class="${cx('site-header', page.headerOverlay && 'site-header--overlay')}" data-header>
  <div class="site-header__inner">
    <a class="site-header__brand" href="${ctx.url('home')}">
      <img class="site-header__logo site-header__logo--dark" src="/marca/logo-horizontal.svg" alt="${site.name}" width="185" height="72">
      ${page.headerOverlay ? html`<img class="site-header__logo site-header__logo--light" src="/marca/logo-horizontal-blanco.svg" alt="${site.name}" width="185" height="72">` : ''}
    </a>
    <nav class="site-nav" id="menu" aria-label="${t('nav.label')}" data-nav>
      <ul class="site-nav__list">${links}</ul>
      <div class="site-nav__extra">
        <a class="btn btn--primary" href="${booking}" data-track="reservar_menu"${attrs({ target: external ? '_blank' : null, rel: external ? 'noopener' : null })}>${icon('calendar', { size: 20 })}<span>${t('actions.checkAvailability')}</span></a>
        <a class="btn btn--ghost" href="${whatsapp}" target="_blank" rel="noopener" data-track="whatsapp_menu">${icon('whatsapp', { size: 20 })}<span>${t('actions.whatsapp')}</span></a>
      </div>
    </nav>
    <a class="btn btn--primary site-header__cta" href="${booking}" data-track="reservar_header"${attrs({ target: external ? '_blank' : null, rel: external ? 'noopener' : null })}><span>${t('actions.book')}</span></a>
    <button class="site-header__toggle" type="button" aria-controls="menu" aria-expanded="false" data-nav-toggle data-label-open="${t('nav.open')}" data-label-close="${t('nav.close')}">
      <span class="sr-only" data-nav-toggle-label>${t('nav.open')}</span>
      <span class="site-header__toggle-icon site-header__toggle-icon--open">${icon('menu')}</span>
      <span class="site-header__toggle-icon site-header__toggle-icon--close">${icon('close')}</span>
    </button>
  </div>
</header>`;
}
