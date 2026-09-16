/**
 * Documento HTML completo: <head> con SEO (título, descripción, canonical,
 * hreflang, Open Graph, Twitter Cards, datos estructurados) y la estructura
 * común de todas las páginas (encabezado, contenido, pie y barra móvil).
 */
import { attrs, html, raw } from '../lib/html.js';
import { siteFooter } from './footer.js';
import { siteHeader } from './header.js';
import { mobileBar } from './mobile-bar.js';

// Charis SIL: versión libre de la tipografía Charter del manual de marca.
// En equipos que tienen Charter instalada (macOS, iOS) se usa la original.
const FONTS = 'https://fonts.googleapis.com/css2?family=Charis+SIL:ital,wght@0,400;0,700;1,400&display=swap';
const DEFAULT_IMAGE = 'exterior-cabanas-arbol-florido';

const jsonLd = (data) =>
  raw(`<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`);

function analytics(site) {
  const { ga4, gtm, metaPixel } = site.analytics;
  const tags = [];
  if (gtm) {
    tags.push(
      `<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtm}');</script>`,
    );
  }
  if (ga4) {
    tags.push(
      `<script async src="https://www.googletagmanager.com/gtag/js?id=${ga4}"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${ga4}');</script>`,
    );
  }
  if (metaPixel) {
    tags.push(
      `<script>!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${metaPixel}');fbq('track','PageView');</script>`,
    );
  }
  return raw(tags.join(''));
}

export function renderDocument(ctx, page) {
  const { site } = ctx;
  const canonical = ctx.abs(page.path);
  const photo = ctx.images.get(page.image ?? DEFAULT_IMAGE);
  const shareImage = photo.og ?? ctx.images.url(photo, 1200, 'webp');
  const shareAlt = ctx.pick(photo.alt);
  const title = page.title;
  const socialTitle = page.socialTitle ?? title;

  const preload = page.preload
    ? (() => {
        const hero = ctx.images.get(page.preload.photo);
        return html`<link rel="preload" as="image" type="image/avif" imagesrcset="${ctx.images.srcset(hero, 'avif')}" imagesizes="${page.preload.sizes}" fetchpriority="high">`;
      })()
    : '';

  const document = html`<html lang="${ctx.lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script>document.documentElement.classList.add('js')</script>
<title>${title}</title>
<meta name="description" content="${page.description}">
<link rel="canonical" href="${canonical}">
${page.noindex ? html`<meta name="robots" content="noindex, follow">` : ''}
${(page.alternates || []).map((alt) => html`<link rel="alternate" hreflang="${alt.lang}" href="${ctx.abs(alt.path)}">`)}
<meta name="theme-color" content="#FDFCF7">
<meta property="og:type" content="${page.ogType ?? 'website'}">
<meta property="og:site_name" content="${site.name}">
<meta property="og:locale" content="${site.locales[ctx.locale].ogLocale}">
<meta property="og:title" content="${socialTitle}">
<meta property="og:description" content="${page.description}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${ctx.abs(shareImage)}">
${photo.og ? html`<meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">` : ''}
<meta property="og:image:alt" content="${shareAlt}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${socialTitle}">
<meta name="twitter:description" content="${page.description}">
<meta name="twitter:image" content="${ctx.abs(shareImage)}">
<meta name="twitter:image:alt" content="${shareAlt}">
${site.analytics.googleSiteVerification ? html`<meta name="google-site-verification" content="${site.analytics.googleSiteVerification}">` : ''}
<link rel="icon" href="/favicon.ico" sizes="48x48">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="style" href="${FONTS}">
<link rel="stylesheet" href="${FONTS}" media="print" onload="this.media='all'">
<noscript><link rel="stylesheet" href="${FONTS}"></noscript>
<link rel="stylesheet" href="${ctx.assets.css}">
${preload}
${(page.jsonLd || []).map(jsonLd)}
${analytics(site)}
</head>
<body${attrs({
    class: page.bodyClass ?? null,
    'data-label-viewer': ctx.t('lightbox.label'),
    'data-label-counter': ctx.t('lightbox.counter'),
    'data-label-close': ctx.t('actions.close'),
    'data-label-previous': ctx.t('actions.previous'),
    'data-label-next': ctx.t('actions.next'),
  })}>
<a class="skip-link" href="#contenido">${ctx.t('skip')}</a>
${siteHeader(ctx, page)}
<main id="contenido" tabindex="-1">
${page.body}
</main>
${siteFooter(ctx, page)}
${page.hideMobileBar ? '' : mobileBar(ctx, page)}
<script src="${ctx.assets.js}" defer></script>
</body>
</html>
`;

  return `<!doctype html>\n${document}`;
}
