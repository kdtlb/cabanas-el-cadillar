/**
 * Descubre Tarija: el destino, qué hacer (con distancias desde El Cadillar),
 * cómo llegar y créditos de las fotografías de terceros.
 */
import { breadcrumbs, ctaBand, destinationCard, infoCards, pageHero, photoCredits, section } from '../components/sections.js';
import { breadcrumbList, touristDestination } from '../components/seo.js';
import { bookingHref, button, isExternal, picture, sectionHead } from '../components/ui.js';
import { gettingThere } from '../data/location.js';
import { destinations, tarijaFacts } from '../data/tarija.js';
import { html } from '../lib/html.js';

export function tarijaPage(ctx) {
  const { t, pick, content } = ctx;
  const c = content.tarija;
  const crumbs = [
    { label: t('nav.home'), href: ctx.url('home') },
    { label: t('nav.tarija'), href: ctx.url('tarija') },
  ];
  const heroPhoto = 'tarija-valle-san-lorenzo';
  const heroSizes = '(min-width: 1000px) 46vw, 100vw';
  const booking = bookingHref(ctx);

  const intro = section({
    id: 'por-que-tarija',
    labelledby: 'por-que-tarija-titulo',
    content: html`<div class="split">
  <div class="split__text" data-reveal>
    ${sectionHead({ eyebrow: c.intro.eyebrow, title: c.intro.title, id: 'por-que-tarija-titulo' })}
    ${c.intro.paragraphs.map((paragraph) => html`<p>${paragraph}</p>`)}
  </div>
  <ul class="stats stats--light" data-reveal>${tarijaFacts.map((fact) => html`<li><strong>${pick(fact.value)}</strong><span>${pick(fact.label)}</span></li>`)}</ul>
</div>`,
  });

  const whatToDo = section({
    id: 'que-hacer',
    tone: 'white',
    labelledby: 'que-hacer-titulo',
    content: html`${sectionHead({ eyebrow: c.destinationsEyebrow, title: c.destinationsTitle, lead: c.destinationsLead, id: 'que-hacer-titulo' })}
<div class="destinations destinations--all">${destinations.map((destination) => destinationCard(ctx, destination))}</div>`,
  });

  const arrival = section({
    id: 'como-llegar',
    tone: 'cielo',
    labelledby: 'como-llegar-titulo',
    content: html`${sectionHead({ eyebrow: c.gettingEyebrow, title: c.gettingTitle, id: 'como-llegar-titulo' })}
${infoCards(ctx, gettingThere)}`,
  });

  const base = section({
    id: 'tu-base',
    labelledby: 'tu-base-titulo',
    content: html`<div class="feature-split" data-reveal>
  <div class="feature-split__media">${picture(ctx, 'piscina-valle', { sizes: '(min-width: 900px) 40vw, 100vw' })}</div>
  <div class="feature-split__text">
    ${sectionHead({ eyebrow: c.base.eyebrow, title: c.base.title, lead: c.base.text, id: 'tu-base-titulo' })}
    <div class="button-row">
      ${button({ href: ctx.url('cabins'), label: t('actions.seeCabins'), variant: 'primary', iconName: 'house' })}
      ${button({ href: booking, label: t('actions.checkAvailability'), variant: 'ghost', iconName: 'calendar', external: isExternal(booking), track: 'reservar_tarija' })}
    </div>
  </div>
</div>`,
  });

  const credits = section({
    id: 'creditos',
    tone: 'white',
    className: 'section--compact',
    labelledby: 'creditos-titulo',
    content: html`<div class="credits-block">
  <h2 class="credits-block__title" id="creditos-titulo">${c.creditsTitle}</h2>
  <p>${c.creditsText}</p>
  ${photoCredits(ctx)}
  <p class="note">${c.sources}</p>
</div>`,
  });

  return {
    path: ctx.url('tarija'),
    nav: 'tarija',
    alternateKey: 'tarija',
    title: content.seo.tarija.title,
    description: content.seo.tarija.description,
    image: 'tarija-coimata',
    preload: { photo: heroPhoto, sizes: heroSizes },
    jsonLd: [touristDestination(ctx, destinations), breadcrumbList(ctx, crumbs)],
    sitemapImages: destinations.filter((item) => item.photo).map((item) => ctx.images.largest(ctx.images.get(item.photo))),
    body: html`${pageHero(ctx, { label: c.eyebrow, title: c.title, lead: c.lead, photo: heroPhoto, crumbs: breadcrumbs(ctx, crumbs) })}
${intro}
${whatToDo}
${arrival}
${base}
${ctaBand(ctx, { label: content.ctaBand.eyebrow, title: content.ctaBand.title, lead: content.ctaBand.lead })}
${credits}`,
  };
}
