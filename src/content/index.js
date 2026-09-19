/**
 * Acceso a los textos del sitio por idioma.
 *
 * - `getContent(locale)`: todos los textos de un idioma (src/content/<idioma>.js).
 * - `createTranslator(locale)`: función t('ruta.al.texto', { n, name }) con
 *   reemplazo de marcadores y formas singular/plural ({ one, other }).
 * - `pick(campo, locale)`: elige el idioma en campos de datos del tipo { es: '…' }.
 */
import es from './es.js';
import en from './en.js';
import fr from './fr.js';
import pt from './pt.js';

const catalogs = { es, en, fr, pt };

export const getContent = (locale) => catalogs[locale] ?? catalogs.es;

export function pick(field, locale) {
  if (field === null || field === undefined || typeof field !== 'object' || Array.isArray(field)) return field;
  return field[locale] ?? field.es;
}

export function createTranslator(locale) {
  const content = getContent(locale);
  return function t(key, vars = {}) {
    let value = key.split('.').reduce((node, part) => (node == null ? node : node[part]), content);
    if (value && typeof value === 'object' && 'other' in value) value = vars.n === 1 ? value.one : value.other;
    if (typeof value !== 'string') throw new Error(`Falta el texto "${key}" en el idioma "${locale}".`);
    return value.replace(/\{(\w+)\}/g, (match, name) => (name in vars ? String(vars[name]) : match));
  };
}
