/**
 * Salón para reuniones empresariales: por qué elegir El Cadillar, la ficha
 * del salón (los datos pendientes figuran como XX en src/data/business.js),
 * los servicios de hospedaje, aperitivos y comidas, y la cotización por WhatsApp.
 */
import { icon } from '../components/icons.js';
import { benefitsGrid, breadcrumbs, ctaBand, infoCards, pageHero, section } from '../components/sections.js';
import { breadcrumbList } from '../components/seo.js';
import { button, picture, sectionHead } from '../components/ui.js';
import { lodgingCapacity, meetingRoom, roomBenefits, roomFacts, roomServices, roomSpecs } from '../data/business.js';
import { html } from '../lib/html.js';

const LODGING_PHOTO = 'jardin-pergola-cabanas';

export function businessPage(ctx) {
  const { t, pick, content } = ctx;
  const c = content.business;
  const crumbs = [
    { label: t('nav.home'), href: ctx.url('home') },
    { label: t('nav.business'), href: ctx.url('business') },
  ];
  const heroSizes = '(min-width: 1000px) 46vw, 100vw';
  const quote = ctx.whatsapp(pick(meetingRoom.whatsappMessage));
  const quoteButton = (track, size = null) =>
    button({ href: quote, label: c.quote, variant: 'primary', size, iconName: 'whatsapp', external: true, track });

  const facts = section({
    id: 'cifras',
    className: 'section--compact',
    content: html`<ul class="stats stats--light" data-reveal>${roomFacts.map((fact) => html`<li><strong>${pick(fact.value)}</strong><span>${pick(fact.label)}</span></li>`)}</ul>`,
  });

  const why = section({
    id: 'por-que',
    tone: 'white',
    labelledby: 'por-que-titulo',
    content: html`${sectionHead({ eyebrow: c.whyEyebrow, title: c.whyTitle, lead: c.whyLead, id: 'por-que-titulo', align: 'center' })}
<div class="benefits-three">${benefitsGrid(ctx, roomBenefits)}</div>`,
  });

  const specs = section({
    id: 'ficha',
    labelledby: 'ficha-titulo',
    content: html`<div class="room-specs">
  <div class="room-specs__intro" data-reveal>
    ${sectionHead({ eyebrow: c.specsEyebrow, title: c.specsTitle, lead: c.specsLead, id: 'ficha-titulo' })}
    <div class="button-row">${quoteButton('whatsapp_salon_ficha')}</div>
  </div>
  <dl class="spec-list" data-reveal>${roomSpecs.map(
    (spec) => html`<div class="spec-list__item"><dt>${icon(spec.icon, { size: 22 })}<span>${pick(spec.label)}</span></dt><dd>${pick(spec.value)}</dd></div>`,
  )}</dl>
</div>`,
  });

  const services = section({
    id: 'servicios',
    tone: 'salvia',
    labelledby: 'servicios-titulo',
    content: html`${sectionHead({ eyebrow: c.servicesEyebrow, title: c.servicesTitle, lead: c.servicesLead, id: 'servicios-titulo' })}
${infoCards(ctx, roomServices)}`,
  });

  const lodging = section({
    id: 'hospedaje',
    tone: 'white',
    labelledby: 'hospedaje-titulo',
    content: html`<div class="feature-split" data-reveal>
  <div class="feature-split__media">${picture(ctx, LODGING_PHOTO, { sizes: '(min-width: 900px) 40vw, 100vw' })}</div>
  <div class="feature-split__text">
    ${sectionHead({ eyebrow: c.lodgingEyebrow, title: c.lodgingTitle, lead: t('business.lodgingLead', { n: lodgingCapacity }), id: 'hospedaje-titulo' })}
    <div class="button-row">
      ${button({ href: ctx.url('cabins'), label: t('actions.seeCabins'), variant: 'primary', iconName: 'house' })}
      ${button({ href: ctx.url('experience'), label: c.lodgingSpaces, variant: 'ghost', iconName: 'pool' })}
    </div>
  </div>
</div>`,
  });

  const steps = section({
    id: 'cotizar',
    labelledby: 'cotizar-titulo',
    content: html`${sectionHead({ eyebrow: c.stepsEyebrow, title: c.stepsTitle, id: 'cotizar-titulo', align: 'center' })}
<ol class="steps steps--row">${c.steps.map(
      (step, index) => html`<li class="step" data-reveal><span class="step__num" aria-hidden="true">${index + 1}</span><div><strong>${step.title}</strong><p>${step.text}</p></div></li>`,
    )}</ol>`,
  });

  return {
    path: ctx.url('business'),
    nav: 'business',
    alternateKey: 'business',
    title: content.seo.business.title,
    description: content.seo.business.description,
    image: meetingRoom.photo,
    preload: { photo: meetingRoom.photo, sizes: heroSizes },
    jsonLd: [breadcrumbList(ctx, crumbs)],
    sitemapImages: [meetingRoom.photo, LODGING_PHOTO].map((id) => ctx.images.largest(ctx.images.get(id))),
    body: html`${pageHero(ctx, {
      label: c.eyebrow,
      title: c.title,
      lead: c.lead,
      photo: meetingRoom.photo,
      crumbs: breadcrumbs(ctx, crumbs),
      actions: html`${quoteButton('whatsapp_salon_hero')}${button({ href: '#ficha', label: c.seeDetails, variant: 'ghost', iconName: 'building' })}`,
    })}
${facts}
${why}
${specs}
${services}
${lodging}
${steps}
${ctaBand(ctx, {
  id: 'cotizacion',
  label: c.ctaEyebrow,
  title: c.ctaTitle,
  lead: c.ctaLead,
  actions: html`${quoteButton('whatsapp_salon_cta', 'lg')}${button({ href: ctx.url('cabins'), label: t('actions.seeCabins'), variant: 'ghost', size: 'lg', iconName: 'house' })}`,
})}`,
  };
}
