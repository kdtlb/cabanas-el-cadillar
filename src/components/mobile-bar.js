/**
 * Barra inferior fija en celulares: la reserva siempre a un toque.
 * Se oculta en la página de reserva y mientras el menú está abierto.
 */
import { attrs, html } from '../lib/html.js';
import { icon } from './icons.js';
import { bookingHref, isExternal } from './ui.js';

export function mobileBar(ctx, page) {
  const { t } = ctx;
  const booking = bookingHref(ctx, page.cabin ?? null);
  const message = page.cabin ? t('cabin.whatsappMessage', { name: ctx.pick(page.cabin.name) }) : t('whatsappDefault');

  return html`<div class="mobile-bar" role="region" aria-label="${t('mobileBar.label')}" data-mobile-bar>
  <a class="btn btn--primary mobile-bar__book" href="${booking}" data-track="reservar_barra_movil"${attrs({ target: isExternal(booking) ? '_blank' : null, rel: isExternal(booking) ? 'noopener' : null })}>${icon('calendar', { size: 20 })}<span>${t('actions.book')}</span></a>
  <a class="btn btn--ghost mobile-bar__whatsapp" href="${ctx.whatsapp(message)}" target="_blank" rel="noopener" data-track="whatsapp_barra_movil">${icon('whatsapp', { size: 20 })}<span>${t('mobileBar.whatsapp')}</span></a>
</div>`;
}
