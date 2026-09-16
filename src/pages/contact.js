/**
 * Contacto: canales oficiales (WhatsApp, redes, Airbnb), ubicación y todas
 * las preguntas frecuentes publicadas. Teléfono, correo y horarios aparecen
 * solo cuando se completan en src/config/site.js.
 */
import { icon } from '../components/icons.js';
import { addressBlock, breadcrumbs, ctaBand, faqList, pageHero, section } from '../components/sections.js';
import { breadcrumbList, faqPage, lodgingBusiness } from '../components/seo.js';
import { button, sectionHead } from '../components/ui.js';
import { meetingRoom } from '../data/business.js';
import { publishedFaq } from '../data/faq.js';
import { place } from '../data/location.js';
import { html } from '../lib/html.js';

export function contactPage(ctx) {
  const { t, pick, content, site } = ctx;
  const c = content.contact;
  const { contact, stay } = site;
  const crumbs = [
    { label: t('nav.home'), href: ctx.url('home') },
    { label: t('nav.contact'), href: ctx.url('contact') },
  ];
  const faqItems = publishedFaq(ctx.locale);

  const card = (iconName, title, body) => html`<li class="contact-card" data-reveal>
  <span class="contact-card__icon">${icon(iconName, { size: 28 })}</span>
  <h2 class="contact-card__title">${title}</h2>
  ${body}
</li>`;

  const cards = [
    card(
      'whatsapp',
      c.whatsappTitle,
      html`<p>${c.whatsappText}</p>
  <p class="contact-card__value"><a href="${ctx.whatsapp(t('whatsappDefault'))}" target="_blank" rel="noopener" data-track="whatsapp_contacto">${contact.whatsapp.display}</a></p>
  ${button({ href: ctx.whatsapp(t('whatsappDefault')), label: t('actions.whatsapp'), variant: 'primary', size: 'sm', iconName: 'whatsapp', external: true, track: 'whatsapp_contacto_boton' })}`,
    ),
    contact.phone
      ? card('phone', c.phoneTitle, html`<p class="contact-card__value"><a href="tel:${contact.phone.replace(/\s+/g, '')}">${contact.phone}</a></p>`)
      : '',
    contact.email
      ? card('mail', c.emailTitle, html`<p class="contact-card__value"><a href="mailto:${contact.email}">${contact.email}</a></p>`)
      : '',
    card(
      'pin',
      c.locationTitle,
      html`${addressBlock(ctx)}
  <p>${pick(place.access)}</p>
  ${button({ href: ctx.url('location'), label: t('actions.directions'), variant: 'ghost', size: 'sm', iconName: 'route' })}`,
    ),
    stay.checkIn || stay.checkOut
      ? card(
          'clock',
          c.hoursTitle,
          html`<ul class="plain-list">${stay.checkIn ? html`<li>${t('contact.checkIn', { time: stay.checkIn })}</li>` : ''}${stay.checkOut ? html`<li>${t('contact.checkOut', { time: stay.checkOut })}</li>` : ''}</ul>`,
        )
      : '',
    card(
      'instagram',
      c.socialTitle,
      html`<p>${c.socialText}</p>
  <ul class="social-links">${site.social.map((network) => html`<li><a href="${network.url}" target="_blank" rel="noopener">${icon(network.id, { size: 20 })}<span>${network.label}</span></a></li>`)}</ul>`,
    ),
  ];

  const channels = section({
    id: 'canales',
    content: html`<ul class="contact-cards">${cards}</ul>
<p class="contact-business">${icon(meetingRoom.icon, { size: 22 })}<span>${pick(meetingRoom.text)} <a href="${ctx.url('business')}">${content.business.link}</a></span></p>`,
  });

  const faq = section({
    id: 'preguntas',
    tone: 'white',
    labelledby: 'preguntas-titulo',
    content: html`<div class="faq-layout">
  <div>
    ${sectionHead({ eyebrow: c.faqEyebrow, title: c.faqTitle, id: 'preguntas-titulo' })}
    <p class="note">${c.faqMore}</p>
    ${button({ href: ctx.whatsapp(t('whatsappDefault')), label: t('actions.whatsapp'), variant: 'ghost', size: 'sm', iconName: 'whatsapp', external: true, track: 'whatsapp_preguntas' })}
  </div>
  ${faqList(ctx, faqItems)}
</div>`,
  });

  return {
    path: ctx.url('contact'),
    nav: 'contact',
    alternateKey: 'contact',
    title: content.seo.contact.title,
    description: content.seo.contact.description,
    image: 'terraza-cactus-mural',
    jsonLd: [lodgingBusiness(ctx), faqPage(ctx, faqItems), breadcrumbList(ctx, crumbs)],
    body: html`${pageHero(ctx, { label: c.eyebrow, title: c.title, lead: c.lead, crumbs: breadcrumbs(ctx, crumbs), className: 'page-hero--compact' })}
${channels}
${faq}
${ctaBand(ctx, { label: content.ctaBand.eyebrow, title: content.ctaBand.title, lead: content.ctaBand.lead })}`,
  };
}
