/**
 * Piezas básicas de interfaz: botones, encabezados de sección con el estilo
 * numerado del manual de marca, fotos responsivas y enlaces de reserva.
 */
import { attrs, cx, html } from '../lib/html.js';
import { icon } from './icons.js';

export function button({ href, label, variant = 'primary', size = null, iconName = null, external = false, track = null, className = '' }) {
  return html`<a class="${cx('btn', `btn--${variant}`, size && `btn--${size}`, className)}" href="${href}"${attrs({
    target: external ? '_blank' : null,
    rel: external ? 'noopener' : null,
    'data-track': track,
  })}>${iconName ? icon(iconName, { size: 20 }) : ''}<span>${label}</span></a>`;
}

export function eyebrow(text, number = null) {
  return html`<p class="eyebrow">${number ? html`<span class="eyebrow__num" aria-hidden="true">${String(number).padStart(2, '0')}</span>` : ''}<span>${text}</span></p>`;
}

export function sectionHead({ eyebrow: label, number = null, title, lead = null, level = 2, align = 'start', id = null, className = '' }) {
  const heading = level === 1 ? html`<h1${attrs({ id })}>${title}</h1>` : html`<h2${attrs({ id })}>${title}</h2>`;
  return html`<header class="${cx('section-head', align === 'center' && 'section-head--center', className)}">
    ${label ? eyebrow(label, number) : ''}
    ${heading}
    ${lead ? html`<p class="section-head__lead">${lead}</p>` : ''}
  </header>`;
}

export function picture(ctx, id, { sizes = '100vw', priority = false, className = '', alt = null } = {}) {
  const photo = ctx.images.get(id);
  return html`<picture class="${cx('photo', className)}"><source type="image/avif" srcset="${ctx.images.srcset(photo, 'avif')}" sizes="${sizes}"><img src="${ctx.images.url(photo, 800)}" srcset="${ctx.images.srcset(photo, 'webp')}" sizes="${sizes}" width="${photo.width}" height="${photo.height}" alt="${alt ?? ctx.pick(photo.alt)}"${attrs({
    loading: priority ? 'eager' : 'lazy',
    decoding: priority ? null : 'async',
    fetchpriority: priority ? 'high' : null,
  })} style="object-position:${photo.focus ?? '50% 50%'};background-color:${photo.color}"></picture>`;
}

// Enlace que abre la foto en el visor (con AVIF y WebP en tamaño grande)
export function lightboxLink(ctx, id, { group, content, className = '' }) {
  const photo = ctx.images.get(id);
  const caption = ctx.pick(photo.alt);
  return html`<a class="${cx('lightbox-link', className)}" href="${ctx.images.largest(photo)}" data-lightbox="${group}" data-avif="${ctx.images.largest(photo, 'avif')}" data-caption="${caption}" data-width="${photo.width}" data-height="${photo.height}" aria-label="${ctx.t('gallery.open', { alt: caption })}">${content}</a>`;
}

export function bookingHref(ctx, cabin = null) {
  if (cabin?.bookingUrl) return cabin.bookingUrl;
  if (ctx.site.booking.engineUrl) return ctx.site.booking.engineUrl;
  return cabin ? `${ctx.url('booking')}?cabana=${cabin.id}` : ctx.url('booking');
}

export const isExternal = (href) => /^https?:\/\//.test(href);

// "a, b y c"
export function joinList(items, locale = 'es') {
  return new Intl.ListFormat(locale, { style: 'long', type: 'conjunction' }).format(items);
}

export function bedsText(ctx, cabin) {
  return joinList(
    cabin.beds.map((bed) => ctx.t(`cabin.beds.${bed.type}`, { n: bed.count })),
    ctx.locale,
  );
}
