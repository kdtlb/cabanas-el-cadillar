/**
 * Ubicación: mapa, dirección, distancias por carretera y cómo llegar a Tarija.
 */
import {
  addressBlock,
  breadcrumbs,
  ctaBand,
  distanceList,
  faqList,
  infoCards,
  mapCard,
  pageHero,
  section,
} from '../components/sections.js';
import { breadcrumbList, lodgingBusiness } from '../components/seo.js';
import { sectionHead } from '../components/ui.js';
import { publishedFaq } from '../data/faq.js';
import { distances, gettingThere, place } from '../data/location.js';
import { html } from '../lib/html.js';

const GROUPS = ['llegada', 'cerca', 'excursion'];

export function locationPage(ctx) {
  const { t, pick, content } = ctx;
  const c = content.location;
  const { lat, lng } = ctx.site.location.geo;
  const crumbs = [
    { label: t('nav.home'), href: ctx.url('home') },
    { label: t('nav.location'), href: ctx.url('location') },
  ];

  const map = section({
    id: 'mapa',
    labelledby: 'mapa-titulo',
    content: html`<div class="location-grid">
  <div class="location-grid__text">
    <h2 class="section-title" id="mapa-titulo">${c.addressTitle}</h2>
    ${addressBlock(ctx)}
    <p class="address__access">${pick(place.access)}</p>
    <p class="note">${c.coordinatesTitle}: ${lat.toFixed(5)}, ${lng.toFixed(5)}</p>
  </div>
  ${mapCard(ctx)}
</div>`,
  });

  const nearby = section({
    id: 'distancias',
    tone: 'cielo',
    labelledby: 'distancias-titulo',
    content: html`${sectionHead({ eyebrow: c.distancesEyebrow, title: c.distancesTitle, lead: c.distancesNote, id: 'distancias-titulo' })}
<div class="distance-groups">${GROUPS.map(
      (group) => html`<div class="distance-group" data-reveal>
  <h3>${c.groups[group]}</h3>
  ${distanceList(ctx, distances.filter((item) => item.group === group))}
</div>`,
    )}</div>`,
  });

  const travel = section({
    id: 'viajar',
    tone: 'white',
    labelledby: 'viajar-titulo',
    content: html`${sectionHead({ eyebrow: c.gettingEyebrow, title: c.gettingTitle, id: 'viajar-titulo' })}
${infoCards(ctx, gettingThere)}`,
  });

  const faqItems = publishedFaq(ctx.locale).filter((item) => ['ubicacion', 'llegar'].includes(item.id));
  const faq = section({
    id: 'preguntas',
    labelledby: 'preguntas-titulo',
    content: html`<div class="faq-layout">
  <div>${sectionHead({ eyebrow: content.home.faq.eyebrow, title: content.home.faq.title, id: 'preguntas-titulo' })}</div>
  ${faqList(ctx, faqItems)}
</div>`,
  });

  return {
    path: ctx.url('location'),
    nav: 'location',
    alternateKey: 'location',
    title: content.seo.location.title,
    description: content.seo.location.description,
    image: 'vista-piscina-cerros',
    jsonLd: [lodgingBusiness(ctx), breadcrumbList(ctx, crumbs)],
    body: html`${pageHero(ctx, { label: c.eyebrow, title: c.title, lead: c.lead, crumbs: breadcrumbs(ctx, crumbs), className: 'page-hero--compact' })}
${map}
${nearby}
${travel}
${faq}
${ctaBand(ctx, { label: content.ctaBand.eyebrow, title: content.ctaBand.title, lead: content.ctaBand.lead })}`,
  };
}
