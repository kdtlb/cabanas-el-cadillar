/**
 * Galería de fotos con filtros por espacio y visor a pantalla completa.
 */
import { breadcrumbs, ctaBand, filterBar, galleryGrid, pageHero, section } from '../components/sections.js';
import { breadcrumbList } from '../components/seo.js';
import { galleryCategories, galleryOrder } from '../data/gallery.js';
import { html } from '../lib/html.js';

export function galleryPage(ctx) {
  const { t, pick, content } = ctx;
  const c = content.galleryPage;
  const crumbs = [
    { label: t('nav.home'), href: ctx.url('home') },
    { label: t('nav.gallery'), href: ctx.url('gallery') },
  ];

  const available = ctx.images.gallery();
  const byId = new Map(available.map((photo) => [photo.id, photo]));
  for (const id of galleryOrder) {
    if (!byId.has(id)) throw new Error(`La foto "${id}" de src/data/gallery.js no existe o no tiene "gallery": true.`);
  }
  const photos = [...galleryOrder.map((id) => byId.get(id)), ...available.filter((photo) => !galleryOrder.includes(photo.id))];

  const options = galleryCategories
    .filter((category) => category.id === 'todas' || photos.some((photo) => photo.tags.includes(category.id)))
    .map((category) => ({ value: category.id === 'todas' ? 'all' : category.id, label: pick(category.label) }));

  const grid = section({
    id: 'fotos',
    labelledby: 'fotos-titulo',
    content: html`<div class="section-row">
  <h2 class="section-title" id="fotos-titulo">${t('galleryPage.count', { n: photos.length })}</h2>
  ${filterBar({ targetId: 'galeria-fotos', label: t('gallery.filterLabel'), options })}
</div>
${galleryGrid(ctx, photos, { id: 'galeria-fotos', group: 'galeria' })}`,
  });

  return {
    path: ctx.url('gallery'),
    nav: 'gallery',
    alternateKey: 'gallery',
    title: content.seo.gallery.title,
    description: content.seo.gallery.description,
    image: 'vista-piscina-cerros',
    jsonLd: [breadcrumbList(ctx, crumbs)],
    sitemapImages: photos.map((photo) => ctx.images.largest(photo)),
    body: html`${pageHero(ctx, { label: c.eyebrow, title: c.title, lead: c.lead, crumbs: breadcrumbs(ctx, crumbs), className: 'page-hero--compact' })}
${grid}
${ctaBand(ctx, { label: content.ctaBand.eyebrow, title: content.ctaBand.title, lead: content.ctaBand.lead })}`,
  };
}
