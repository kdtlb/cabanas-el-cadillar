/**
 * Portada: la principal herramienta de conversión.
 * Recorrido: bienvenida (foto a pantalla completa) → descubre El Cadillar →
 * cabañas → experiencia → por qué → Tarija → ubicación → galería →
 * (opiniones) → preguntas → reserva.
 */
import { cabinCarousel } from '../components/cabins.js';
import { icon } from '../components/icons.js';
import {
  addressBlock,
  benefitsGrid,
  ctaBand,
  destinationCard,
  distanceList,
  faqList,
  filterBar,
  mapCard,
  mosaic,
  section,
  storyCarousel,
  testimonialsSection,
} from '../components/sections.js';
import { lodgingBusiness, website } from '../components/seo.js';
import { bookingHref, button, isExternal, picture, sectionHead } from '../components/ui.js';
import { meetingRoom } from '../data/business.js';
import { cabins } from '../data/cabins.js';
import { benefits, moments } from '../data/experiences.js';
import { publishedFaq } from '../data/faq.js';
import { distances } from '../data/location.js';
import { destinations, tarijaFacts } from '../data/tarija.js';
import { testimonials } from '../data/testimonials.js';
import { html } from '../lib/html.js';

const HERO_PHOTO = 'exterior-cabanas-arbol-florido';
const HERO_SIZES = '100vw';
// En celulares la portada va sin foto (fondo negro): ni se precarga ni se descarga
const HERO_PHOTO_MEDIA = '(min-width: 48rem)';
const HERO_NO_PHOTO_MEDIA = '(max-width: 47.99rem)';

const linkArrow = (href, label) => html`<a class="link-arrow" href="${href}"><span>${label}</span>${icon('arrow-right', { size: 20 })}</a>`;

export function homePage(ctx) {
  const { t, pick, content } = ctx;
  const c = content.home;
  const booking = bookingHref(ctx);
  const guestOptions = [...new Set(cabins.map((cabin) => cabin.guests))].sort((a, b) => a - b);

  const hero = html`<section class="hero" aria-labelledby="hero-titulo">
  <div class="hero__media">${picture(ctx, HERO_PHOTO, { priority: true, sizes: HERO_SIZES, skipMedia: HERO_NO_PHOTO_MEDIA })}</div>
  <div class="hero__backdrop" aria-hidden="true"><svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMax slice" focusable="false"><path class="hero__hill hero__hill--back" d="M0 200V88c44-28 74 10 120-6s70-50 114-42 82 56 166 38v122Z"/><path class="hero__hill hero__hill--front" d="M0 200v-52c50-24 88 18 134 6s74-38 116-28 84 42 150 28v46Z"/></svg></div>
  <div class="hero__inner">
    <div class="hero__content">
      <img class="hero__logo" src="/marca/logo-vertical.svg" alt="${ctx.site.name}" width="1564" height="1871">
      <p class="hero__eyebrow"><span>${c.hero.eyebrow}</span></p>
      <h1 id="hero-titulo">${c.hero.title} <span class="hero__title-accent">${c.hero.titleAccent}</span></h1>
      <div class="hero__actions">
        ${button({ href: booking, label: t('actions.book'), variant: 'sun', size: 'lg', iconName: 'calendar', external: isExternal(booking), track: 'reservar_hero' })}
        ${button({ href: '#cabanas', label: t('actions.seeCabins'), variant: 'outline-light', size: 'lg', iconName: 'house' })}
      </div>
    </div>
  </div>
  <div class="hero-facts">
    <ul class="hero-facts__list">${c.hero.facts.map((fact) => html`<li>${icon(fact.icon, { size: 24 })}<span>${fact.text}</span></li>`)}</ul>
  </div>
</section>`;

  const intro = section({
    id: 'descubre',
    className: 'intro',
    labelledby: 'descubre-titulo',
    content: html`<div class="intro__grid">
  <div class="intro__text" data-reveal>
    ${sectionHead({ eyebrow: c.intro.eyebrow, number: 1, title: c.intro.title, id: 'descubre-titulo' })}
    ${c.intro.paragraphs.map((paragraph) => html`<p>${paragraph}</p>`)}
    <dl class="values">${c.intro.values.map((value) => html`<div class="values__item"><dt>${value.title}</dt><dd>${value.text}</dd></div>`)}</dl>
    ${linkArrow(ctx.url('experience'), c.intro.link)}
  </div>
  <div class="intro__media" data-reveal>
    <div class="intro__photo intro__photo--large">${picture(ctx, 'vista-piscina-cerros', { sizes: '(min-width: 1000px) 42vw, 100vw' })}</div>
    <div class="intro__photo intro__photo--small">${picture(ctx, 'cabana-1-galeria', { sizes: '(min-width: 1000px) 22vw, 55vw' })}</div>
    <div class="intro__photo intro__photo--detail">${picture(ctx, 'detalle-ceramicas', { sizes: '(min-width: 1000px) 18vw, 40vw' })}</div>
  </div>
</div>`,
  });

  const cabinsSection = section({
    id: 'cabanas',
    tone: 'white',
    labelledby: 'cabanas-titulo',
    content: html`<div class="section-row">
  ${sectionHead({ eyebrow: c.cabins.eyebrow, number: 2, title: c.cabins.title, lead: c.cabins.lead, id: 'cabanas-titulo' })}
  ${filterBar({
    targetId: 'carrusel-cabanas',
    label: t('cabin.filterLabel'),
    options: [{ value: 'all', label: t('cabin.filterAll') }, ...guestOptions.map((n) => ({ value: `guests-${n}`, label: t('cabin.filterGuests', { n }) }))],
  })}
</div>
${cabinCarousel(ctx, cabins, { id: 'carrusel-cabanas' })}
<p class="section-foot">${linkArrow(ctx.url('cabins'), t('actions.compareCabins'))}</p>`,
  });

  const experience = section({
    id: 'experiencia',
    tone: 'salvia',
    labelledby: 'experiencia-titulo',
    content: html`${sectionHead({ eyebrow: c.experience.eyebrow, number: 3, title: c.experience.title, lead: c.experience.lead, id: 'experiencia-titulo' })}
${storyCarousel(ctx, moments, { id: 'carrusel-experiencia' })}
<p class="section-foot">${linkArrow(ctx.url('experience'), c.experience.link)}</p>`,
  });

  const why = section({
    id: 'por-que',
    labelledby: 'por-que-titulo',
    content: html`${sectionHead({ eyebrow: c.why.eyebrow, number: 4, title: c.why.title, lead: c.why.lead, id: 'por-que-titulo', align: 'center' })}
${benefitsGrid(ctx, benefits)}`,
  });

  const business = section({
    id: 'empresas',
    tone: 'white',
    labelledby: 'empresas-titulo',
    content: html`<div class="feature-split" data-reveal>
  <div class="feature-split__media">${picture(ctx, meetingRoom.photo, { sizes: '(min-width: 900px) 40vw, 100vw' })}</div>
  <div class="feature-split__text">
    ${sectionHead({ eyebrow: c.business.eyebrow, number: 5, title: c.business.title, lead: c.business.lead, id: 'empresas-titulo' })}
    <ul class="checklist">${c.business.points.map((point) => html`<li>${icon('check', { size: 18 })}<span>${point}</span></li>`)}</ul>
    <div class="button-row">
      ${button({ href: ctx.url('business'), label: c.business.link, variant: 'primary', iconName: 'building' })}
      ${button({ href: ctx.whatsapp(pick(meetingRoom.whatsappMessage)), label: c.business.quote, variant: 'ghost', iconName: 'whatsapp', external: true, track: 'whatsapp_empresas_inicio' })}
    </div>
  </div>
</div>`,
  });

  const tarija = section({
    id: 'tarija',
    tone: 'corteza',
    labelledby: 'tarija-titulo',
    content: html`<div class="section-row">
  ${sectionHead({ eyebrow: c.tarija.eyebrow, number: 6, title: c.tarija.title, lead: c.tarija.lead, id: 'tarija-titulo' })}
  <ul class="stats">${tarijaFacts.map((fact) => html`<li><strong>${pick(fact.value)}</strong><span>${pick(fact.label)}</span></li>`)}</ul>
</div>
<div class="destinations">${destinations.filter((item) => item.featured).map((item) => destinationCard(ctx, item))}</div>
<p class="section-foot">${linkArrow(ctx.url('tarija'), c.tarija.link)}</p>`,
  });

  const nearby = distances.filter((item) => ['centro', 'aeropuerto', 'terminal', 'tomatitas', 'coimata', 'san-lorenzo'].includes(item.id));
  const location = section({
    id: 'ubicacion',
    tone: 'cielo',
    labelledby: 'ubicacion-titulo',
    content: html`<div class="location-grid">
  <div class="location-grid__text">
    ${sectionHead({ eyebrow: c.location.eyebrow, number: 7, title: c.location.title, lead: c.location.lead, id: 'ubicacion-titulo' })}
    ${addressBlock(ctx)}
    ${distanceList(ctx, nearby, { details: false })}
    <p>${linkArrow(ctx.url('location'), c.location.link)}</p>
  </div>
  ${mapCard(ctx)}
</div>`,
  });

  const gallery = section({
    id: 'galeria',
    labelledby: 'galeria-titulo',
    content: html`<div class="section-row">
  ${sectionHead({ eyebrow: c.gallery.eyebrow, number: 8, title: c.gallery.title, lead: c.gallery.lead, id: 'galeria-titulo' })}
  ${button({ href: ctx.url('gallery'), label: c.gallery.link, variant: 'ghost', iconName: 'camera' })}
</div>
${mosaic(ctx, ['piscina-valle', 'quincho-mesa-larga', 'cabana-3-galeria-lavandas', 'terraza-cactus-mural', 'cabana-10-estar', 'detalle-cocina-antigua', 'pergola-patio'], { group: 'galeria-inicio' })}`,
  });

  const faqItems = publishedFaq(ctx.locale).filter((item) => ['ubicacion', 'capacidad', 'cocina', 'piscina', 'reservar', 'llegar'].includes(item.id));
  const faq = section({
    id: 'preguntas',
    tone: 'white',
    labelledby: 'preguntas-titulo',
    content: html`<div class="faq-layout">
  <div>
    ${sectionHead({ eyebrow: c.faq.eyebrow, number: 9, title: c.faq.title, id: 'preguntas-titulo' })}
    <p>${linkArrow(`${ctx.url('contact')}#preguntas`, c.faq.link)}</p>
  </div>
  ${faqList(ctx, faqItems)}
</div>`,
  });

  return {
    path: ctx.url('home'),
    nav: 'home',
    alternateKey: 'home',
    title: content.seo.home.title,
    description: content.seo.home.description,
    image: HERO_PHOTO,
    preload: { photo: HERO_PHOTO, sizes: HERO_SIZES, media: HERO_PHOTO_MEDIA },
    bodyClass: 'page-home',
    headerOverlay: true,
    jsonLd: [website(ctx), lodgingBusiness(ctx)],
    sitemapImages: [HERO_PHOTO, 'vista-piscina-cerros', 'piscina-valle', 'quincho-mesa-larga', 'terraza-cactus-mural'].map((id) =>
      ctx.images.largest(ctx.images.get(id)),
    ),
    body: html`${hero}
${intro}
${cabinsSection}
${experience}
${why}
${business}
${tarija}
${location}
${gallery}
${testimonialsSection(ctx, testimonials, { label: c.testimonials.eyebrow, title: c.testimonials.title })}
${faq}
${ctaBand(ctx, { label: c.cta.eyebrow, title: c.cta.title, lead: c.cta.lead })}`,
  };
}
