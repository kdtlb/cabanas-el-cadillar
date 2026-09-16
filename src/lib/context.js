/**
 * Contexto de renderizado por idioma: configuración, textos, fotos y
 * utilidades de URL que reciben todos los componentes y páginas.
 */
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { mapsUrls, site, whatsappUrl } from '../config/site.js';
import { cabinPath, pathFor } from '../config/routes.js';
import { createTranslator, getContent, pick } from '../content/index.js';
import { createImageStore } from './images.js';
import { absoluteUrl } from './paths.js';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const readJson = (relative) => JSON.parse(readFileSync(path.join(ROOT, relative), 'utf8'));

export function createContext({ locale, assets }) {
  const catalog = readJson('src/data/photos.json');
  const manifest = readJson('src/data/images.json');

  return {
    locale,
    lang: site.locales[locale].lang,
    site,
    assets,
    content: getContent(locale),
    t: createTranslator(locale),
    pick: (field) => pick(field, locale),
    images: createImageStore(catalog, manifest),
    url: (key) => pathFor(key, locale),
    cabinUrl: (cabin) => cabinPath(cabin, locale),
    abs: absoluteUrl,
    whatsapp: whatsappUrl,
    maps: mapsUrls,
    year: new Date().getFullYear(),
  };
}
