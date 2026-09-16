/**
 * Página de cabañas (listado, filtro y comparación) y una ficha por cabaña.
 */
import {
  cabinCard,
  cabinCarousel,
  cabinEquipment,
  cabinFacts,
  cabinGallery,
  cabinHighlights,
  cabinPager,
  compareTable,
} from '../components/cabins.js';
import { icon } from '../components/icons.js';
import { breadcrumbs, ctaBand, faqList, filterBar, pageHero, section } from '../components/sections.js';
import { accommodation, breadcrumbList, cabinItemList } from '../components/seo.js';
import { bookingHref, button, eyebrow, isExternal, sectionHead } from '../components/ui.js';
import { sharedSpaces } from '../data/amenities.js';
import { cabins } from '../data/cabins.js';
import { publishedFaq } from '../data/faq.js';
import { html } from '../lib/html.js';

const sharedList = (ctx) =>
  html`<ul class="shared-list">${Object.values(sharedSpaces).map((space) => html`<li>${icon(space.icon, { size: 26 })}<span>${ctx.pick(space.label)}</span></li>`)}</ul>`;

const band = (ctx, cabin = null) =>
  ctaBand(ctx, { label: ctx.content.ctaBand.eyebrow, title: ctx.content.ctaBand.title, lead: ctx.content.ctaBand.lead, cabin });

export function cabinsPage(ctx) {
  const { t, content } = ctx;
  const c = content.cabins;
  const crumbs = [
    { label: t('nav.home'), href: ctx.url('home') },
    { label: t('nav.cabins'), href: ctx.url('cabins') },
  ];
  const guestOptions = [...new Set(cabins.map((cabin) => cabin.guests))].sort((a, b) => a - b);
  const heroPhoto = 'exterior-cabana-dia-de-sol';
  const heroSizes = '(min-width: 1000px) 46vw, 100vw';

  const list = section({
    id: 'lista',
    labelledby: 'lista-titulo',
    content: html`<div class="section-row">
  <h2 class="section-title" id="lista-titulo">${c.listTitle}</h2>
  ${filterBar({
    targetId: 'grilla-cabanas',
    label: t('cabin.filterLabel'),
    options: [{ value: 'all', label: t('cabin.filterAll') }, ...guestOptions.map((n) => ({ value: `guests-${n}`, label: t('cabin.filterGuests', { n }) }))],
  })}
</div>
<div class="cabin-grid" id="grilla-cabanas">${cabins.map((cabin) => cabinCard(ctx, cabin, { sizes: '(min-width: 1180px) 370px, (min-width: 700px) 46vw, 100vw' }))}</div>`,
  });

  const compare = section({
    id: 'comparar',
    tone: 'white',
    labelledby: 'comparar-titulo',
    content: html`${sectionHead({ eyebrow: c.compare.eyebrow, title: c.compare.title, id: 'comparar-titulo' })}
${compareTable(ctx)}`,
  });

  const shared = section({
    id: 'espacios',
    tone: 'salvia',
    labelledby: 'espacios-titulo',
    content: html`<div class="shared">
  ${sectionHead({ eyebrow: c.shared.eyebrow, title: c.shared.title, lead: c.shared.lead, id: 'espacios-titulo' })}
  ${sharedList(ctx)}
  <p><a class="link-arrow" href="${ctx.url('experience')}"><span>${c.shared.link}</span>${icon('arrow-right', { size: 20 })}</a></p>
</div>`,
  });

  const faqItems = publishedFaq(ctx.locale).filter((item) => ['capacidad', 'cocina', 'espacios', 'reservar'].includes(item.id));
  const faq = section({
    id: 'preguntas',
    labelledby: 'preguntas-titulo',
    content: html`<div class="faq-layout">
  <div>${sectionHead({ eyebrow: content.home.faq.eyebrow, title: content.home.faq.title, id: 'preguntas-titulo' })}</div>
  ${faqList(ctx, faqItems)}
</div>`,
  });

  return {
    path: ctx.url('cabins'),
    nav: 'cabins',
    alternateKey: 'cabins',
    title: content.seo.cabins.title,
    description: content.seo.cabins.description,
    image: 'cabana-1-living-hogar',
    preload: { photo: heroPhoto, sizes: heroSizes },
    jsonLd: [cabinItemList(ctx), breadcrumbList(ctx, crumbs)],
    sitemapImages: cabins.map((cabin) => ctx.images.largest(ctx.images.get(cabin.photos[0]))),
    body: html`${pageHero(ctx, { label: c.eyebrow, title: c.title, lead: c.lead, photo: heroPhoto, crumbs: breadcrumbs(ctx, crumbs) })}
${list}
${compare}
${shared}
${faq}
${band(ctx)}`,
  };
}

function cabinPage(ctx, cabin) {
  const { t, pick, content } = ctx;
  const c = content.cabinPage;
  const name = pick(cabin.name);
  const url = ctx.cabinUrl(cabin);
  const booking = bookingHref(ctx, cabin);
  const crumbs = [
    { label: t('nav.home'), href: ctx.url('home') },
    { label: t('nav.cabins'), href: ctx.url('cabins') },
    { label: name, href: url },
  ];
  const gallerySizes = '(min-width: 1100px) 720px, 100vw';

  const header = html`<section class="cabin-hero" aria-labelledby="cabana-titulo">
  <div class="cabin-hero__inner">
    ${breadcrumbs(ctx, crumbs)}
    <div class="cabin-hero__head">
      <div class="cabin-hero__title">
        ${eyebrow(c.eyebrow)}
        <h1 id="cabana-titulo">${name}</h1>
        <p class="cabin-hero__tagline">${pick(cabin.tagline)}</p>
      </div>
      ${cabinFacts(ctx, cabin)}
    </div>
    ${cabinGallery(ctx, cabin)}
  </div>
</section>`;

  const detail = section({
    className: 'cabin-detail',
    content: html`<div class="cabin-detail__grid">
  <div class="cabin-detail__content">
    <section class="cabin-block" aria-labelledby="sobre-la-cabana">
      <h2 id="sobre-la-cabana">${c.aboutTitle}</h2>
      ${pick(cabin.description).map((paragraph) => html`<p>${paragraph}</p>`)}
    </section>
    <section class="cabin-block" aria-labelledby="lo-que-la-distingue">
      <h2 id="lo-que-la-distingue">${c.highlightsTitle}</h2>
      ${cabinHighlights(ctx, cabin)}
    </section>
    <section class="cabin-block" aria-labelledby="equipamiento">
      <h2 id="equipamiento">${c.equipmentTitle}</h2>
      ${cabinEquipment(ctx, cabin)}
      <p class="note">${c.equipmentNote}</p>
    </section>
    <section class="cabin-block" aria-labelledby="en-el-predio">
      <h2 id="en-el-predio">${c.sharedTitle}</h2>
      ${sharedList(ctx)}
      <p class="cabin-block__location">${icon('pin', { size: 20 })}<span>${c.locationText} <a href="${ctx.url('location')}">${t('actions.directions')}</a></span></p>
    </section>
  </div>
  <aside class="booking-card" aria-labelledby="consulta-titulo">
    <h2 id="consulta-titulo">${c.bookingTitle}</h2>
    <p class="booking-card__name">${name} · ${t('cabin.guests', { n: cabin.guests })}</p>
    <p>${c.bookingText}</p>
    ${button({ href: booking, label: t('actions.checkAvailability'), variant: 'primary', iconName: 'calendar', external: isExternal(booking), track: 'reservar_ficha', className: 'btn--block' })}
    ${button({ href: ctx.whatsapp(t('cabin.whatsappMessage', { name })), label: t('actions.whatsapp'), variant: 'ghost', iconName: 'whatsapp', external: true, track: 'whatsapp_ficha', className: 'btn--block' })}
  </aside>
</div>`,
  });

  const others = cabins
    .filter((item) => item.id !== cabin.id)
    .sort((a, b) => Math.abs(a.guests - cabin.guests) - Math.abs(b.guests - cabin.guests) || a.number - b.number);

  const more = section({
    tone: 'white',
    labelledby: 'otras-cabanas',
    content: html`${sectionHead({ eyebrow: t('nav.cabins'), title: c.othersTitle, lead: c.othersLead, id: 'otras-cabanas' })}
${cabinCarousel(ctx, others, { id: `carrusel-${cabin.id}` })}
${cabinPager(ctx, cabin)}`,
  });

  return {
    path: url,
    nav: 'cabins',
    alternateKey: cabin.id,
    cabin,
    title: t('seo.cabin.title', { name, guests: cabin.guests }),
    description: t('seo.cabin.description', { summary: pick(cabin.summary) }),
    image: cabin.photos[0],
    preload: { photo: cabin.photos[0], sizes: gallerySizes },
    jsonLd: [accommodation(ctx, cabin), breadcrumbList(ctx, crumbs)],
    sitemapImages: cabin.photos.map((id) => ctx.images.largest(ctx.images.get(id))),
    body: html`${header}
${detail}
${more}
${band(ctx, cabin)}`,
  };
}

export const cabinPages = (ctx) => cabins.map((cabin) => cabinPage(ctx, cabin));
