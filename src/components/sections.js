/**
 * Bloques de sección reutilizables: cabeceras de página, llamados a la
 * reserva, preguntas frecuentes, galerías, relatos de la experiencia,
 * beneficios, distancias, mapa, destinos, créditos y testimonios.
 */
import { distances } from '../data/location.js';
import { attrs, cx, html, raw } from '../lib/html.js';
import { icon } from './icons.js';
import { bookingHref, button, eyebrow, isExternal, lightboxLink, picture } from './ui.js';

const pad = (value) => String(value).padStart(2, '0');

export function section({ id = null, tone = 'paper', className = '', labelledby = null, content }) {
  return html`<section class="${cx('section', `section--${tone}`, className)}"${attrs({ id, 'aria-labelledby': labelledby })}>
  <div class="section__inner">${content}</div>
</section>`;
}

export function breadcrumbs(ctx, items) {
  const last = items.length - 1;
  return html`<nav class="breadcrumbs" aria-label="${ctx.t('nav.breadcrumb')}"><ol>${items.map((item, index) =>
    index === last
      ? html`<li><span aria-current="page">${item.label}</span></li>`
      : html`<li><a href="${item.href}">${item.label}</a></li>`,
  )}</ol></nav>`;
}

export function pageHero(ctx, { label, title, lead = null, photo = null, crumbs = null, actions = null, className = '' }) {
  return html`<section class="${cx('page-hero', photo && 'page-hero--photo', className)}">
  <div class="page-hero__inner">
    <div class="page-hero__text">
      ${crumbs ?? ''}
      ${label ? eyebrow(label) : ''}
      <h1>${title}</h1>
      ${lead ? html`<p class="page-hero__lead">${lead}</p>` : ''}
      ${actions ? html`<div class="page-hero__actions">${actions}</div>` : ''}
    </div>
    ${photo ? html`<div class="page-hero__media">${picture(ctx, photo, { priority: true, sizes: '(min-width: 1000px) 46vw, 100vw' })}</div>` : ''}
  </div>
</section>`;
}

// Línea de cerros, tomada del lenguaje del isotipo, como detalle decorativo
export const hillsLine = (className = 'hills-line') =>
  raw(
    `<svg class="${className}" viewBox="0 0 1200 140" preserveAspectRatio="none" aria-hidden="true" focusable="false"><path d="M0 122C120 114 196 86 300 78S466 94 560 72 704 30 804 38 962 80 1044 64 1150 30 1200 36"/></svg>`,
  );

export function ctaBand(ctx, { label, title, lead, cabin = null, id = 'reserva', actions = null }) {
  const { t } = ctx;
  const booking = bookingHref(ctx, cabin);
  const message = cabin ? t('cabin.whatsappMessage', { name: ctx.pick(cabin.name) }) : t('whatsappDefault');
  return html`<section class="cta-band" aria-labelledby="${id}-titulo">
  ${hillsLine('cta-band__hills')}
  <div class="cta-band__inner">
    <div class="cta-band__text">
      ${eyebrow(label)}
      <h2 id="${id}-titulo">${title}</h2>
      <p>${lead}</p>
    </div>
    <div class="cta-band__actions">
      ${actions ?? html`${button({ href: booking, label: t('actions.checkAvailability'), variant: 'primary', size: 'lg', iconName: 'calendar', external: isExternal(booking), track: 'reservar_cta' })}
      ${button({ href: ctx.whatsapp(message), label: t('actions.whatsapp'), variant: 'ghost', size: 'lg', iconName: 'whatsapp', external: true, track: 'whatsapp_cta' })}`}
    </div>
  </div>
</section>`;
}

export function faqList(ctx, items) {
  return html`<div class="faq">${items.map(
    (item) => html`<details class="faq__item">
  <summary><span>${ctx.pick(item.q)}</span>${icon('chevron-down', { size: 20, className: 'icon faq__chevron' })}</summary>
  <div class="faq__answer"><p>${ctx.pick(item.a)}</p></div>
</details>`,
  )}</div>`;
}

export function filterBar({ targetId, label, options }) {
  return html`<div class="filter-bar" role="group" aria-label="${label}" data-filter-bar="${targetId}">
  ${options.map(
    (option, index) =>
      html`<button class="chip" type="button" aria-pressed="${index === 0 ? 'true' : 'false'}" data-filter-value="${option.value}">${option.label}</button>`,
  )}
</div>`;
}

export function mosaic(ctx, ids, { group }) {
  return html`<div class="mosaic">${ids.map((id, index) =>
    lightboxLink(ctx, id, {
      group,
      className: `mosaic__item mosaic__item--${index + 1}`,
      content: picture(ctx, id, { sizes: index === 0 ? '(min-width: 900px) 50vw, 100vw' : '(min-width: 900px) 25vw, 50vw' }),
    }),
  )}</div>`;
}

export function galleryGrid(ctx, photos, { id, group }) {
  return html`<div class="gallery-grid" id="${id}">${photos.map(
    (photo) => html`<div class="gallery-grid__item" data-filter-item data-filter="${photo.tags.join(' ')}">
  ${lightboxLink(ctx, photo.id, { group, content: picture(ctx, photo.id, { sizes: '(min-width: 1100px) 33vw, (min-width: 640px) 50vw, 100vw' }) })}
</div>`,
  )}</div>`;
}

function carouselControls(ctx, id) {
  const { t } = ctx;
  return html`<div class="carousel__controls">
    <button class="carousel__btn" type="button" aria-controls="${id}" data-carousel-prev>${icon('arrow-left')}<span class="sr-only">${t('actions.previous')}</span></button>
    <button class="carousel__btn" type="button" aria-controls="${id}" data-carousel-next>${icon('arrow-right')}<span class="sr-only">${t('actions.next')}</span></button>
  </div>`;
}

export function storyCarousel(ctx, moments, { id }) {
  const { pick } = ctx;
  return html`<div class="carousel carousel--story" data-carousel>
  <ol class="carousel__track story-cards" id="${id}" data-carousel-track>${moments.map(
    (moment, index) => html`<li class="story-card">
    <div class="story-card__media">${picture(ctx, moment.photo, { sizes: '(min-width: 1100px) 400px, 80vw' })}</div>
    <div class="story-card__body">
      <span class="story-card__num" aria-hidden="true">${pad(index + 1)}</span>
      <h3>${pick(moment.title)}</h3>
      <p>${pick(moment.text)}</p>
    </div>
  </li>`,
  )}</ol>
  ${carouselControls(ctx, id)}
</div>`;
}

export function storyTimeline(ctx, moments) {
  const { pick } = ctx;
  return html`<ol class="timeline">${moments.map(
    (moment, index) => html`<li class="timeline__item" data-reveal>
  <div class="timeline__media">${picture(ctx, moment.photo, { sizes: '(min-width: 900px) 50vw, 100vw' })}</div>
  <div class="timeline__text">
    <span class="timeline__num" aria-hidden="true">${pad(index + 1)}</span>
    <h3>${pick(moment.title)}</h3>
    <p>${pick(moment.text)}</p>
  </div>
</li>`,
  )}</ol>`;
}

export function benefitsGrid(ctx, items) {
  return html`<ul class="benefits">${items.map(
    (item) => html`<li class="benefit" data-reveal>
  <span class="benefit__icon">${icon(item.icon, { size: 30 })}</span>
  <h3 class="benefit__title">${ctx.pick(item.title)}</h3>
  <p>${ctx.pick(item.text)}</p>
</li>`,
  )}</ul>`;
}

export function distancesById(ids) {
  return ids.map((id) => {
    const found = distances.find((item) => item.id === id);
    if (!found) throw new Error(`No existe la distancia "${id}" en src/data/location.js.`);
    return found;
  });
}

export function distanceList(ctx, items, { details = true } = {}) {
  return html`<ul class="distances">${items.map(
    (item) => html`<li class="distance">
  <span class="distance__icon">${icon(item.icon, { size: 24 })}</span>
  <span class="distance__name">${ctx.pick(item.name)}${details && item.detail ? html`<small>${ctx.pick(item.detail)}</small>` : ''}</span>
  <span class="distance__km">${ctx.t('map.km', { n: item.km })}</span>
</li>`,
  )}</ul>`;
}

export function addressBlock(ctx) {
  const { location } = ctx.site;
  return html`<address class="address">
  ${icon('pin', { size: 24 })}
  <span><strong>${location.community}, ${location.municipality}</strong><br>${location.region}, ${ctx.pick(location.countryName)}</span>
</address>`;
}

export function mapCard(ctx) {
  const { t } = ctx;
  return html`<div class="map-card">
  <div class="map-card__frame">
    <iframe title="${t('map.title')}" src="${ctx.maps.embed}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
  </div>
  <div class="map-card__actions">
    ${button({ href: ctx.maps.directions, label: t('actions.directions'), variant: 'primary', iconName: 'route', external: true, track: 'como_llegar' })}
    ${button({ href: ctx.maps.place, label: t('actions.openMap'), variant: 'ghost', iconName: 'map', external: true, track: 'abrir_mapa' })}
  </div>
</div>`;
}

export function destinationCard(ctx, destination, { level = 3 } = {}) {
  const { pick, t } = ctx;
  const near = distancesById(destination.distance || []);
  const title = pick(destination.title);
  const media = destination.photo
    ? picture(ctx, destination.photo, { sizes: '(min-width: 1000px) 30vw, (min-width: 640px) 50vw, 100vw' })
    : html`<span class="destination__art">${icon(destination.icon, { size: 64 })}</span>`;
  return html`<article class="${cx('destination', !destination.photo && 'destination--art')}" data-reveal>
  <div class="destination__media">${media}</div>
  <div class="destination__body">
    <p class="destination__kicker">${pick(destination.kicker)}</p>
    ${level === 2 ? html`<h2>${title}</h2>` : html`<h3>${title}</h3>`}
    <p>${pick(destination.text)}</p>
    ${near.length ? html`<ul class="destination__distances">${near.map((item) => html`<li>${icon('car', { size: 18 })}<span>${pick(item.name)} · ${t('map.km', { n: item.km })}</span></li>`)}</ul>` : ''}
  </div>
</article>`;
}

export function infoCards(ctx, items) {
  return html`<ul class="info-cards">${items.map(
    (item) => html`<li class="info-card" data-reveal>
  <span class="info-card__icon">${icon(item.icon, { size: 28 })}</span>
  <h3>${ctx.pick(item.title)}</h3>
  <p>${ctx.pick(item.text)}</p>
</li>`,
  )}</ul>`;
}

export function photoCredits(ctx) {
  return html`<ul class="credits">${ctx.images.credited().map(
    (photo) => html`<li><a href="${photo.credit.source}" target="_blank" rel="noopener">${ctx.pick(photo.alt)}</a> — ${photo.credit.author}, <a href="${photo.credit.licenseUrl}" target="_blank" rel="noopener license">${photo.credit.license}</a></li>`,
  )}</ul>`;
}

export function testimonialsSection(ctx, items, { label, title }) {
  if (!items.length) return '';
  const { pick } = ctx;
  return section({
    id: 'opiniones',
    labelledby: 'opiniones-titulo',
    content: html`<header class="section-head section-head--center">${eyebrow(label)}<h2 id="opiniones-titulo">${title}</h2></header>
<ul class="testimonials">${items.map(
      (item) => html`<li class="testimonial"><figure>
  ${icon('quote', { size: 32, className: 'icon testimonial__quote' })}
  <blockquote><p>${pick(item.quote)}</p></blockquote>
  <figcaption><strong>${item.author}</strong>${item.origin ? html`<span>${pick(item.origin)}</span>` : ''}${
    item.source ? html`<span>${item.sourceUrl ? html`<a href="${item.sourceUrl}" target="_blank" rel="noopener">${item.source}</a>` : item.source}</span>` : ''
  }</figcaption>
</figure></li>`,
    )}</ul>`,
  });
}

export function spaceFeature(ctx, space, { reverse = false, group }) {
  const { pick } = ctx;
  const [main, ...rest] = space.photos;
  return html`<article class="${cx('space', reverse && 'space--reverse')}" data-reveal>
  <div class="space__media">
    ${lightboxLink(ctx, main, { group, className: 'space__photo space__photo--main', content: picture(ctx, main, { sizes: '(min-width: 900px) 40vw, 100vw' }) })}
    ${rest.map((id) => lightboxLink(ctx, id, { group, className: 'space__photo', content: picture(ctx, id, { sizes: '(min-width: 900px) 20vw, 50vw' }) }))}
  </div>
  <div class="space__text">
    <span class="space__icon">${icon(space.icon, { size: 30 })}</span>
    <h3>${pick(space.title)}</h3>
    <p>${pick(space.text)}</p>
  </div>
</article>`;
}
