/**
 * La experiencia El Cadillar: un día de estadía contado con fotos reales y
 * los espacios del predio (piscina, quincho, áreas sociales, jardines).
 */
import { icon } from '../components/icons.js';
import { breadcrumbs, ctaBand, pageHero, section, spaceFeature, storyTimeline } from '../components/sections.js';
import { breadcrumbList } from '../components/seo.js';
import { bookingHref, button, isExternal, picture, sectionHead } from '../components/ui.js';
import { meetingRoom } from '../data/business.js';
import { moments, spaces } from '../data/experiences.js';
import { html } from '../lib/html.js';

export function experiencePage(ctx) {
  const { t, pick, content } = ctx;
  const c = content.experience;
  const crumbs = [
    { label: t('nav.home'), href: ctx.url('home') },
    { label: t('nav.experience'), href: ctx.url('experience') },
  ];
  const heroPhoto = 'vista-piscina-cerros';
  const heroSizes = '(min-width: 1000px) 46vw, 100vw';
  const booking = bookingHref(ctx);

  const timeline = section({
    id: 'un-dia',
    labelledby: 'un-dia-titulo',
    content: html`${sectionHead({ eyebrow: c.momentsEyebrow, title: c.momentsTitle, id: 'un-dia-titulo', align: 'center' })}
${storyTimeline(ctx, moments)}`,
  });

  const spacesSection = section({
    id: 'espacios',
    tone: 'salvia',
    labelledby: 'espacios-titulo',
    content: html`${sectionHead({ eyebrow: c.spacesEyebrow, title: c.spacesTitle, id: 'espacios-titulo' })}
<div class="spaces">${spaces.map((space, index) => spaceFeature(ctx, space, { reverse: index % 2 === 1, group: `espacio-${space.id}` }))}</div>`,
  });

  const business = section({
    id: 'empresas',
    tone: 'white',
    labelledby: 'empresas-titulo',
    content: html`<div class="business">
  <div class="business__media">${picture(ctx, meetingRoom.photo, { sizes: '(min-width: 900px) 34vw, 100vw' })}</div>
  <div class="business__text">
    <span class="business__icon">${icon(meetingRoom.icon, { size: 30 })}</span>
    <h2 id="empresas-titulo">${pick(meetingRoom.title)}</h2>
    <p>${pick(meetingRoom.text)}</p>
    <div class="button-row">
      ${button({ href: ctx.url('business'), label: c.businessLink, variant: 'primary', iconName: 'building' })}
      ${button({ href: ctx.whatsapp(pick(meetingRoom.whatsappMessage)), label: c.businessCta, variant: 'ghost', iconName: 'whatsapp', external: true, track: 'whatsapp_empresas' })}
    </div>
  </div>
</div>`,
  });

  return {
    path: ctx.url('experience'),
    nav: 'experience',
    alternateKey: 'experience',
    title: content.seo.experience.title,
    description: content.seo.experience.description,
    image: 'piscina-valle',
    preload: { photo: heroPhoto, sizes: heroSizes },
    jsonLd: [breadcrumbList(ctx, crumbs)],
    sitemapImages: [heroPhoto, ...spaces.flatMap((space) => space.photos)].map((id) => ctx.images.largest(ctx.images.get(id))),
    body: html`${pageHero(ctx, {
      label: c.eyebrow,
      title: c.title,
      lead: c.lead,
      photo: heroPhoto,
      crumbs: breadcrumbs(ctx, crumbs),
      actions: html`${button({ href: booking, label: t('actions.book'), variant: 'primary', iconName: 'calendar', external: isExternal(booking), track: 'reservar_experiencia' })}${button({ href: ctx.url('cabins'), label: t('actions.seeCabins'), variant: 'ghost', iconName: 'house' })}`,
    })}
${timeline}
${spacesSection}
${business}
${ctaBand(ctx, { label: content.ctaBand.eyebrow, title: content.ctaBand.title, lead: content.ctaBand.lead })}`,
  };
}
