/**
 * Compila el sitio estático en dist/.
 *
 * 1. Sincroniza public/ (fotos optimizadas, logos e íconos) con dist/.
 * 2. Une y minifica los estilos (src/styles) y el JavaScript (src/scripts).
 * 3. Genera cada página (src/pages) con su SEO: título, descripción, canonical,
 *    Open Graph, Twitter Cards y datos estructurados de Schema.org.
 * 4. Escribe sitemap.xml, robots.txt y site.webmanifest.
 * 5. Verifica enlaces internos, un único <h1> por página, textos alternativos
 *    y títulos o descripciones repetidos. Si algo falla, la compilación termina con error.
 *
 * Uso: npm run build
 */
import { copyFile, mkdir, readdir, readFile, rm, stat, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { site } from '../src/config/site.js';
import { createContext } from '../src/lib/context.js';
import { renderDocument } from '../src/components/layout.js';
import { buildPages } from '../src/pages/index.js';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = path.join(ROOT, 'public');
const DIST = path.join(ROOT, 'dist');
const STYLES = ['tokens', 'base', 'layout', 'components', 'sections', 'pages'].map((name) =>
  path.join(ROOT, 'src', 'styles', `${name}.css`),
);
const SCRIPTS = [path.join(ROOT, 'src', 'scripts', 'main.js')];

const started = Date.now();
const written = new Set(); // rutas relativas (con "/") de todo lo que debe existir en dist
const problems = [];

const toPosix = (value) => value.split(path.sep).join('/');
const fingerprint = (content) => createHash('sha1').update(content).digest('hex').slice(0, 10);
const kb = (bytes) => `${(bytes / 1024).toFixed(1)} KB`;

async function listFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true }).catch(() => []);
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await listFiles(full)));
    else files.push(full);
  }
  return files;
}

async function emit(relative, content) {
  const target = path.join(DIST, relative);
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(target, content);
  written.add(toPosix(relative));
  return Buffer.byteLength(content);
}

async function syncPublic() {
  let copied = 0;
  for (const source of await listFiles(PUBLIC)) {
    const relative = path.relative(PUBLIC, source);
    const target = path.join(DIST, relative);
    const [from, to] = await Promise.all([stat(source), stat(target).catch(() => null)]);
    if (!to || to.size !== from.size || to.mtimeMs < from.mtimeMs) {
      await mkdir(path.dirname(target), { recursive: true });
      await copyFile(source, target);
      copied += 1;
    }
    written.add(toPosix(relative));
  }
  return copied;
}

function minifyCss(css) {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\s+/g, ' ')
    .replace(/\s*([{};,>])\s*/g, '$1')
    .replace(/;}/g, '}')
    .trim();
}

function minifyJs(js) {
  return js
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/^\s*\/\/.*$/gm, '')
    .replace(/\n\s*\n/g, '\n')
    .trim();
}

async function bundle(files, name, extension, minify) {
  const source = (await Promise.all(files.map((file) => readFile(file, 'utf8')))).join('\n');
  const output = minify(source);
  const relative = `assets/${name}.${fingerprint(output)}.${extension}`;
  const bytes = await emit(relative, output);
  return { url: `/${relative}`, bytes };
}

const pageFile = (urlPath) => (urlPath.endsWith('.html') ? urlPath.slice(1) : `${urlPath.slice(1)}index.html`);

function inspect(page, html) {
  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) problems.push(`${page.path}: debe tener un único <h1> (tiene ${h1}).`);
  for (const tag of html.match(/<img\b[^>]*>/g) || []) {
    if (!/\salt="/.test(tag)) problems.push(`${page.path}: imagen sin atributo alt → ${tag.slice(0, 100)}`);
  }
  const refs = new Set();
  for (const match of html.matchAll(/\s(?:href|src|action)="(\/(?!\/)[^"]*)"/g)) refs.add(match[1]);
  for (const match of html.matchAll(/\s(?:srcset|imagesrcset)="([^"]+)"/g)) {
    for (const candidate of match[1].split(',')) {
      const url = candidate.trim().split(/\s+/)[0];
      if (url.startsWith('/') && !url.startsWith('//')) refs.add(url);
    }
  }
  return refs;
}

function resolves(ref) {
  const clean = decodeURI(ref.split('#')[0].split('?')[0]);
  const relative = clean.slice(1);
  if (clean === '/') return written.has('index.html');
  if (clean.endsWith('/')) return written.has(`${relative}index.html`);
  return written.has(relative) || written.has(`${relative}/index.html`);
}

async function main() {
  await mkdir(DIST, { recursive: true });
  const copied = await syncPublic();
  const css = await bundle(STYLES, 'site', 'css', minifyCss);
  const js = await bundle(SCRIPTS, 'main', 'js', minifyJs);

  const pages = [];
  for (const [locale, config] of Object.entries(site.locales)) {
    if (!config.enabled) continue;
    const ctx = createContext({ locale, assets: { css: css.url, js: js.url } });
    for (const page of buildPages(ctx)) pages.push({ ...page, ctx });
  }

  // Versiones del mismo contenido en otros idiomas (hreflang)
  const groups = new Map();
  for (const page of pages) {
    const key = page.alternateKey ?? page.path;
    groups.set(key, [...(groups.get(key) || []), page]);
  }
  for (const page of pages) {
    const siblings = groups.get(page.alternateKey ?? page.path);
    page.alternates = siblings.length > 1 ? siblings.map((p) => ({ lang: p.ctx.lang, path: p.path })) : [];
  }

  const titles = new Map();
  const descriptions = new Map();
  const references = new Map();
  let htmlBytes = 0;
  for (const page of pages) {
    const html = renderDocument(page.ctx, page);
    htmlBytes += await emit(pageFile(page.path), html);
    for (const ref of inspect(page, html)) references.set(ref, page.path);
    if (!page.noindex) {
      if (titles.has(page.title)) problems.push(`Título repetido en ${titles.get(page.title)} y ${page.path}: "${page.title}"`);
      if (descriptions.has(page.description)) problems.push(`Descripción repetida en ${descriptions.get(page.description)} y ${page.path}`);
      titles.set(page.title, page.path);
      descriptions.set(page.description, page.path);
    }
  }

  const today = new Date().toISOString().slice(0, 10);
  const xml = (value) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const urls = pages
    .filter((page) => !page.noindex)
    .map((page) => {
      const images = (page.sitemapImages || [])
        .map((src) => `<image:image><image:loc>${xml(new URL(src, site.url).href)}</image:loc></image:image>`)
        .join('');
      return `  <url><loc>${xml(new URL(page.path, site.url).href)}</loc><lastmod>${today}</lastmod>${images}</url>`;
    });
  await emit(
    'sitemap.xml',
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urls.join('\n')}\n</urlset>\n`,
  );
  await emit('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap.xml', site.url).href}\n`);
  await emit(
    'site.webmanifest',
    `${JSON.stringify(
      {
        name: site.name,
        short_name: site.shortName,
        lang: site.locales[site.defaultLocale].lang,
        start_url: '/',
        display: 'minimal-ui',
        background_color: '#FDFCF7',
        theme_color: '#61483A',
        icons: [
          { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
        ],
      },
      null,
      2,
    )}\n`,
  );

  for (const [ref, from] of references) {
    if (!resolves(ref)) problems.push(`${from}: enlace o recurso interno inexistente → ${ref}`);
  }

  // Elimina de dist lo que ya no corresponde a ninguna página o archivo público
  let removed = 0;
  for (const file of await listFiles(DIST)) {
    if (!written.has(toPosix(path.relative(DIST, file)))) {
      await rm(file);
      removed += 1;
    }
  }

  console.log(
    [
      `El Cadillar · ${pages.length} páginas en ${Date.now() - started} ms`,
      `  HTML ${kb(htmlBytes)} · CSS ${kb(css.bytes)} · JS ${kb(js.bytes)}`,
      `  public/: ${copied} archivos copiados${removed ? ` · ${removed} archivos obsoletos eliminados` : ''}`,
    ].join('\n'),
  );

  if (problems.length) {
    console.error(`\n${problems.length} problema(s) encontrados:\n- ${problems.join('\n- ')}`);
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
