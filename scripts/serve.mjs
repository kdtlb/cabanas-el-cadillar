// Servidor estático mínimo para previsualizar el sitio compilado en local.
// Uso: node scripts/serve.mjs [--port 4321] [--root dist]
import http from 'node:http';
import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const PROJECT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function option(name, fallback) {
  const index = process.argv.indexOf(`--${name}`);
  return index > -1 && process.argv[index + 1] ? process.argv[index + 1] : fallback;
}

const port = Number(option('port', process.env.PORT || 4321));
const root = path.resolve(PROJECT, option('root', 'dist'));

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.mp4': 'video/mp4',
};

async function resolve(requestUrl) {
  const pathname = decodeURIComponent(new URL(requestUrl, 'http://localhost').pathname);
  const file = path.normalize(path.join(root, pathname));
  if (!file.startsWith(root)) return { status: 403 };
  try {
    const info = await stat(file);
    if (info.isDirectory()) {
      if (!pathname.endsWith('/')) return { status: 301, location: `${pathname}/` };
      const index = path.join(file, 'index.html');
      await stat(index);
      return { status: 200, file: index };
    }
    return { status: 200, file };
  } catch {
    return { status: 404 };
  }
}

http
  .createServer(async (req, res) => {
    const result = await resolve(req.url);
    if (result.status === 301) {
      res.writeHead(301, { Location: result.location });
      res.end();
      return;
    }
    if (result.status !== 200) {
      res.writeHead(result.status, { 'Content-Type': TYPES['.html'] });
      createReadStream(path.join(root, '404.html'))
        .on('error', () => res.end(String(result.status)))
        .pipe(res);
      return;
    }
    res.writeHead(200, {
      'Content-Type': TYPES[path.extname(result.file).toLowerCase()] || 'application/octet-stream',
      'Cache-Control': 'no-cache',
    });
    createReadStream(result.file).pipe(res);
  })
  .listen(port, () => {
    console.log(`El Cadillar · vista previa en http://localhost:${port} (sirviendo ${path.relative(PROJECT, root) || '.'})`);
  });
