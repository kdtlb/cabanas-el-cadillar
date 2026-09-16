/**
 * Carpeta de publicación (site.basePath).
 *
 * Las páginas y componentes escriben rutas desde la raíz ("/cabanas/",
 * "/img/..."). Cuando el sitio se publica dentro de una carpeta, como
 * kdtlb.github.io/cabanas-el-cadillar/, la compilación les antepone esa
 * carpeta. Sin carpeta (dominio propio o vista previa local) no cambia nada.
 */
import { site } from '../config/site.js';

const ROOT_PATH = /^\/(?!\/)/;

export const withBase = (urlPath) => (site.basePath && ROOT_PATH.test(urlPath) ? `${site.basePath}${urlPath}` : urlPath);

export const absoluteUrl = (urlPath) => new URL(withBase(urlPath), site.url).href;

// Antepone la carpeta a las rutas desde la raíz en los atributos de un documento HTML
export function applyBasePath(html) {
  if (!site.basePath) return html;
  return html
    .replace(/(\s(?:href|src|action|data-avif)=")(\/(?!\/)[^"]*)"/g, (match, attribute, url) => `${attribute}${withBase(url)}"`)
    .replace(/(\s(?:srcset|imagesrcset)=")([^"]+)"/g, (match, attribute, list) => {
      const candidates = list.split(',').map((candidate) => {
        const [url, ...descriptors] = candidate.trim().split(/\s+/);
        return [withBase(url), ...descriptors].join(' ');
      });
      return `${attribute}${candidates.join(', ')}"`;
    });
}
