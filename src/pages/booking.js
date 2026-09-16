/**
 * Reserva: formulario que arma la consulta y la abre en WhatsApp.
 *
 * Preparado para el futuro: si se configura un motor de reservas
 * (site.booking.engineUrl), los botones "Reservar" del sitio apuntan a él y
 * esta página puede reemplazar el formulario por el motor o su calendario.
 */
import { icon } from '../components/icons.js';
import { breadcrumbs, pageHero, section } from '../components/sections.js';
import { breadcrumbList } from '../components/seo.js';
import { button } from '../components/ui.js';
import { cabins } from '../data/cabins.js';
import { html, raw } from '../lib/html.js';

export function bookingPage(ctx) {
  const { t, pick, content, site } = ctx;
  const c = content.booking;
  const f = c.form;
  const crumbs = [
    { label: t('nav.home'), href: ctx.url('home') },
    { label: t('nav.booking'), href: ctx.url('booking') },
  ];

  // Textos que usa el script del formulario para armar el mensaje
  const texts = { nights: f.nights, capacityWarning: f.capacityWarning, dateError: f.dateError, message: c.message };
  const textsScript = raw(`<script type="application/json" id="booking-texts">${JSON.stringify(texts).replace(/</g, '\\u003c')}</script>`);

  const form = html`<form class="booking-form" data-booking-form data-whatsapp="${site.contact.whatsapp.number}" aria-labelledby="consulta-titulo">
  <h2 class="booking-form__title" id="consulta-titulo">${f.title}</h2>
  <div class="field">
    <label for="f-cabana">${f.cabin}</label>
    <select id="f-cabana" name="cabana">
      <option value="">${f.cabinAny}</option>
      ${cabins.map((cabin) => html`<option value="${cabin.id}" data-guests="${cabin.guests}" data-name="${pick(cabin.name)}">${t('booking.form.cabinOption', { name: pick(cabin.name), n: cabin.guests })}</option>`)}
    </select>
  </div>
  <div class="field-row">
    <div class="field"><label for="f-llegada">${f.checkIn}</label><input type="date" id="f-llegada" name="llegada"></div>
    <div class="field"><label for="f-salida">${f.checkOut}</label><input type="date" id="f-salida" name="salida"></div>
  </div>
  <p class="form-hint" data-nights aria-live="polite"></p>
  <p class="form-alert" data-date-error role="alert" hidden></p>
  <div class="field-row">
    <div class="field"><label for="f-adultos">${f.adults}</label><input type="number" id="f-adultos" name="adultos" min="1" max="30" value="2" inputmode="numeric"></div>
    <div class="field"><label for="f-ninos">${f.children}</label><input type="number" id="f-ninos" name="ninos" min="0" max="30" value="0" inputmode="numeric"></div>
  </div>
  <p class="form-alert" data-capacity-warning role="status" hidden></p>
  <div class="field"><label for="f-nombre">${f.name}</label><input type="text" id="f-nombre" name="nombre" autocomplete="name"></div>
  <div class="field"><label for="f-origen">${f.origin}</label><input type="text" id="f-origen" name="origen" placeholder="${f.originPlaceholder}"></div>
  <div class="field"><label for="f-mensaje">${f.message}</label><textarea id="f-mensaje" name="mensaje" rows="4" placeholder="${f.messagePlaceholder}"></textarea></div>
  <button class="btn btn--primary btn--lg btn--block" type="submit" data-track="enviar_consulta_whatsapp">${icon('whatsapp', { size: 22 })}<span>${f.submit}</span></button>
  <p class="note">${f.note}</p>
  <noscript><p class="form-alert">${f.noscript}</p></noscript>
</form>`;

  const aside = html`<aside class="booking-aside">
  <ol class="steps">${c.steps.map(
    (step, index) => html`<li class="step"><span class="step__num" aria-hidden="true">${index + 1}</span><div><strong>${step.title}</strong><p>${step.text}</p></div></li>`,
  )}</ol>
  <div class="booking-aside__block">
    <h2 class="booking-aside__title">${c.asideTitle}</h2>
    <ul class="mini-cabins">${cabins.map(
      (cabin) => html`<li><a href="${ctx.cabinUrl(cabin)}"><span>${pick(cabin.name)}</span><span>${t('cabin.guests', { n: cabin.guests })} · ${t('cabin.area', { n: cabin.area })}</span></a></li>`,
    )}</ul>
  </div>
  <div class="booking-aside__block">
    <h2 class="booking-aside__title">${c.directTitle}</h2>
    ${button({ href: ctx.whatsapp(t('whatsappDefault')), label: site.contact.whatsapp.display, variant: 'ghost', iconName: 'whatsapp', external: true, track: 'whatsapp_reserva_directo' })}
  </div>
</aside>`;

  return {
    path: ctx.url('booking'),
    nav: 'booking',
    alternateKey: 'booking',
    title: content.seo.booking.title,
    description: content.seo.booking.description,
    image: 'cabana-3-galeria-lavandas',
    hideMobileBar: true,
    jsonLd: [breadcrumbList(ctx, crumbs)],
    body: html`${pageHero(ctx, { label: c.eyebrow, title: c.title, lead: c.lead, crumbs: breadcrumbs(ctx, crumbs), className: 'page-hero--compact' })}
${section({ id: 'consulta', content: html`<div class="booking-layout">${form}${aside}</div>` })}
${textsScript}`,
  };
}
