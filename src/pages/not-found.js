/**
 * Página 404 (no se indexa).
 */
import { icon } from '../components/icons.js';
import { hillsLine } from '../components/sections.js';
import { button, eyebrow } from '../components/ui.js';
import { html } from '../lib/html.js';

export function notFoundPage(ctx) {
  const { t, content } = ctx;
  const c = content.notFound;
  return {
    path: '/404.html',
    nav: null,
    noindex: true,
    title: content.seo.notFound.title,
    description: content.seo.notFound.description,
    body: html`<section class="not-found">
  ${hillsLine('not-found__hills')}
  <div class="not-found__inner">
    <span class="not-found__icon">${icon('house', { size: 56 })}</span>
    ${eyebrow(c.eyebrow)}
    <h1>${c.title}</h1>
    <p>${c.lead}</p>
    <div class="button-row button-row--center">
      ${button({ href: ctx.url('home'), label: t('actions.backHome'), variant: 'primary' })}
      ${button({ href: ctx.url('cabins'), label: t('actions.seeCabins'), variant: 'ghost', iconName: 'house' })}
      ${button({ href: ctx.url('booking'), label: t('actions.checkAvailability'), variant: 'ghost', iconName: 'calendar' })}
    </div>
  </div>
</section>`,
  };
}
