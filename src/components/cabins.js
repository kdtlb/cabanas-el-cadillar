/**
 * Componentes de las cabañas: tarjeta, datos clave, destacados, equipamiento,
 * galería de la ficha, carrusel, tabla comparativa y navegación entre fichas.
 */
import { amenities } from '../data/amenities.js';
import { cabins } from '../data/cabins.js';
import { html } from '../lib/html.js';
import { icon } from './icons.js';
import { bedsText, bookingHref, button, isExternal, joinList, lightboxLink, picture } from './ui.js';

const CARD_SIZES = '(min-width: 1180px) 360px, (min-width: 700px) 46vw, 84vw';

function amenity(key) {
  const entry = amenities[key];
  if (!entry) throw new Error(`La característica "${key}" no existe en src/data/amenities.js.`);
  return entry;
}

export function highlightsText(ctx, cabin) {
  const text = joinList(cabin.highlights.map((key) => ctx.pick(amenity(key).label).toLowerCase()), ctx.locale);
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function cabinFacts(ctx, cabin) {
  const { t } = ctx;
  const labels = ctx.content.cabin.labels;
  const item = (name, label, value) =>
    html`<li class="facts__item">${icon(name, { size: 22 })}<span><span class="sr-only">${label}: </span>${value}</span></li>`;
  return html`<ul class="facts">
    ${item('users', labels.guests, t('cabin.guests', { n: cabin.guests }))}
    ${item('bed', labels.beds, bedsText(ctx, cabin))}
    ${item('bath', labels.bathrooms, t('cabin.bathrooms', { n: cabin.bathrooms }))}
    ${item('area', labels.area, t('cabin.area', { n: cabin.area }))}
    ${cabin.levels > 1 ? item('stairs', labels.levels, t('cabin.levels', { n: cabin.levels })) : ''}
  </ul>`;
}

export function cabinCard(ctx, cabin, { level = 3, sizes = CARD_SIZES } = {}) {
  const { t, pick } = ctx;
  const url = ctx.cabinUrl(cabin);
  const name = pick(cabin.name);
  const booking = bookingHref(ctx, cabin);
  const title = html`<a href="${url}">${name}</a>`;
  const meta = [bedsText(ctx, cabin), t('cabin.area', { n: cabin.area })];
  if (cabin.bathrooms > 1) meta.push(t('cabin.bathrooms', { n: cabin.bathrooms }));

  return html`<article class="cabin-card" data-filter-item data-filter="guests-${cabin.guests}">
  <a class="cabin-card__media" href="${url}" tabindex="-1" aria-hidden="true">
    ${picture(ctx, cabin.photos[0], { sizes, alt: '' })}
    <span class="cabin-card__badge">${icon('users', { size: 18 })}<span>${t('cabin.guests', { n: cabin.guests })}</span></span>
  </a>
  <div class="cabin-card__body">
    ${level === 2 ? html`<h2 class="cabin-card__title">${title}</h2>` : html`<h3 class="cabin-card__title">${title}</h3>`}
    <p class="cabin-card__tagline">${pick(cabin.tagline)}</p>
    <p class="cabin-card__meta">${meta.join(' · ')}</p>
    <div class="cabin-card__actions">
      ${button({ href: url, label: t('actions.seeCabin'), variant: 'primary', size: 'sm' })}
      ${button({ href: booking, label: t('actions.book'), variant: 'ghost', size: 'sm', external: isExternal(booking), track: 'reservar_tarjeta' })}
    </div>
  </div>
</article>`;
}

export function cabinCarousel(ctx, list, { id, level = 3 }) {
  const { t } = ctx;
  return html`<div class="carousel" data-carousel>
  <div class="carousel__track" id="${id}" data-carousel-track>${list.map((cabin) => cabinCard(ctx, cabin, { level }))}</div>
  <div class="carousel__controls">
    <button class="carousel__btn" type="button" aria-controls="${id}" data-carousel-prev>${icon('arrow-left')}<span class="sr-only">${t('actions.previous')}</span></button>
    <button class="carousel__btn" type="button" aria-controls="${id}" data-carousel-next>${icon('arrow-right')}<span class="sr-only">${t('actions.next')}</span></button>
  </div>
</div>`;
}

export function cabinHighlights(ctx, cabin) {
  return html`<ul class="highlights">${cabin.highlights.map((key) => {
    const entry = amenity(key);
    return html`<li class="highlight">${entry.icon ? html`<span class="highlight__icon">${icon(entry.icon, { size: 28 })}</span>` : ''}<span>${ctx.pick(entry.label)}</span></li>`;
  })}</ul>`;
}

export function cabinEquipment(ctx, cabin) {
  return html`<ul class="checklist">${cabin.equipment.map(
    (key) => html`<li>${icon('check', { size: 18 })}<span>${ctx.pick(amenity(key).label)}</span></li>`,
  )}</ul>`;
}

export function cabinGallery(ctx, cabin) {
  const { t, pick } = ctx;
  const group = `fotos-${cabin.id}`;
  const [main, ...rest] = cabin.photos;
  const shown = rest.slice(0, 4);
  const total = cabin.photos.length;

  return html`<div class="cabin-gallery cabin-gallery--${Math.min(total, 5)}" role="group" aria-label="${t('cabinPage.galleryLabel', { name: pick(cabin.name) })}">
  ${lightboxLink(ctx, main, { group, className: 'cabin-gallery__item cabin-gallery__item--main', content: picture(ctx, main, { priority: true, sizes: '(min-width: 1100px) 720px, 100vw' }) })}
  ${shown.map((id) => lightboxLink(ctx, id, { group, className: 'cabin-gallery__item', content: picture(ctx, id, { sizes: '(min-width: 1100px) 340px, 50vw' }) }))}
  ${rest.slice(4).map((id) => lightboxLink(ctx, id, { group, className: 'cabin-gallery__hidden', content: '' }))}
  ${total > 1 ? html`<button class="btn btn--light btn--sm cabin-gallery__all" type="button" data-lightbox-open="${group}">${icon('camera', { size: 18 })}<span>${t('actions.seeAllPhotos', { n: total })}</span></button>` : ''}
</div>`;
}

export function compareTable(ctx) {
  const { t, pick } = ctx;
  const copy = ctx.content.cabins.compare;
  const columns = ['cabin', 'guests', 'beds', 'bathrooms', 'area', 'highlight'];
  return html`<div class="table-scroll" role="region" aria-label="${copy.caption}" tabindex="0">
  <table class="compare">
    <caption class="sr-only">${copy.caption}</caption>
    <thead><tr>${columns.map((key) => html`<th scope="col">${copy.columns[key]}</th>`)}</tr></thead>
    <tbody>${cabins.map((cabin) => html`<tr data-filter-item data-filter="guests-${cabin.guests}">
      <th scope="row"><a href="${ctx.cabinUrl(cabin)}">${pick(cabin.name)}</a></th>
      <td>${cabin.guests}</td>
      <td>${bedsText(ctx, cabin)}</td>
      <td>${cabin.bathrooms}</td>
      <td>${t('cabin.area', { n: cabin.area })}</td>
      <td>${highlightsText(ctx, cabin)}</td>
    </tr>`)}</tbody>
  </table>
</div>`;
}

export function cabinPager(ctx, cabin) {
  const { pick } = ctx;
  const copy = ctx.content.cabinPage;
  const index = cabins.findIndex((item) => item.id === cabin.id);
  const previous = cabins[(index - 1 + cabins.length) % cabins.length];
  const next = cabins[(index + 1) % cabins.length];
  return html`<nav class="pager" aria-label="${copy.othersTitle}">
  <a class="pager__link" href="${ctx.cabinUrl(previous)}" rel="prev">${icon('arrow-left')}<span><small>${copy.previous}</small>${pick(previous.name)}</span></a>
  <a class="pager__link pager__link--next" href="${ctx.cabinUrl(next)}" rel="next"><span><small>${copy.next}</small>${pick(next.name)}</span>${icon('arrow-right')}</a>
</nav>`;
}
