/**
 * Pie de página sobre Marrón Corteza, con la versión de línea blanca del
 * logotipo vertical, datos de contacto confirmados y redes oficiales.
 */
import { mainNav } from '../config/routes.js';
import { html } from '../lib/html.js';
import { icon } from './icons.js';

export function siteFooter(ctx) {
  const { t, site, pick } = ctx;
  const { contact, location } = site;

  const explore = [...mainNav.slice(1), 'booking'].map(
    (key) => html`<li><a href="${ctx.url(key)}">${t(`nav.${key}`)}</a></li>`,
  );

  return html`<footer class="site-footer">
  <div class="site-footer__inner">
    <div class="site-footer__brand">
      <a href="${ctx.url('home')}"><img src="/marca/logo-vertical-blanco.svg" alt="${site.name}" width="150" height="180" loading="lazy"></a>
      <p class="site-footer__tagline">${pick(site.tagline)}</p>
    </div>
    <nav class="site-footer__col" aria-label="${t('footer.explore')}">
      <h2 class="site-footer__title">${t('footer.explore')}</h2>
      <ul>${explore}</ul>
    </nav>
    <div class="site-footer__col">
      <h2 class="site-footer__title">${t('footer.contact')}</h2>
      <ul class="site-footer__contact">
        <li><a href="${ctx.whatsapp(t('whatsappDefault'))}" target="_blank" rel="noopener" data-track="whatsapp_footer">${icon('whatsapp', { size: 20 })}<span>${contact.whatsapp.display}</span></a></li>
        ${contact.phone ? html`<li><a href="tel:${contact.phone.replace(/\s+/g, '')}">${icon('phone', { size: 20 })}<span>${contact.phone}</span></a></li>` : ''}
        ${contact.email ? html`<li><a href="mailto:${contact.email}">${icon('mail', { size: 20 })}<span>${contact.email}</span></a></li>` : ''}
        <li><a href="${ctx.url('location')}">${icon('pin', { size: 20 })}<span>${location.community}, ${location.municipality} · ${location.region}, ${pick(location.countryName)}</span></a></li>
      </ul>
    </div>
    <div class="site-footer__col">
      <h2 class="site-footer__title">${t('footer.follow')}</h2>
      <ul class="site-footer__social">
        ${site.social.map((network) => html`<li><a href="${network.url}" target="_blank" rel="noopener">${icon(network.id, { size: 20 })}<span>${network.label}</span></a></li>`)}
      </ul>
    </div>
  </div>
  <div class="site-footer__bottom">
    <p>${t('footer.rights', { year: ctx.year })}</p>
    <p>${t('footer.credit')} <a href="${site.credit.url}" target="_blank" rel="noopener">${site.credit.label}</a></p>
  </div>
</footer>`;
}
