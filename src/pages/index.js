/**
 * Todas las páginas del sitio. Cada módulo devuelve uno o más objetos de
 * página: { path, nav, title, description, image, body, jsonLd, ... }.
 */
import { site } from '../config/site.js';
import { bookingPage } from './booking.js';
import { businessPage } from './business.js';
import { cabinPages, cabinsPage } from './cabins.js';
import { contactPage } from './contact.js';
import { experiencePage } from './experience.js';
import { galleryPage } from './gallery.js';
import { homePage } from './home.js';
import { locationPage } from './location.js';
import { notFoundPage } from './not-found.js';
import { tarijaPage } from './tarija.js';

export function buildPages(ctx) {
  return [
    homePage(ctx),
    cabinsPage(ctx),
    ...cabinPages(ctx),
    experiencePage(ctx),
    businessPage(ctx),
    tarijaPage(ctx),
    galleryPage(ctx),
    locationPage(ctx),
    contactPage(ctx),
    bookingPage(ctx),
    // El hosting sirve un solo 404 desde la raíz: se genera en el idioma principal
    ...(ctx.locale === site.defaultLocale ? [notFoundPage(ctx)] : []),
  ];
}
