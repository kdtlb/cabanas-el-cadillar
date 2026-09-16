/**
 * Modo desarrollo: compila el sitio, lo sirve en http://localhost:4321 y
 * vuelve a compilar cada vez que se guarda un cambio en src/ o public/.
 *
 * Uso: npm run dev   (recargar el navegador después de cada cambio)
 */
import { spawn } from 'node:child_process';
import { watch } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const port = process.env.PORT || '4321';

let running = false;
let pending = false;
let timer = null;

function build() {
  if (running) {
    pending = true;
    return;
  }
  running = true;
  const child = spawn(process.execPath, ['scripts/build.mjs'], { cwd: ROOT, stdio: 'inherit' });
  child.on('exit', () => {
    running = false;
    if (pending) {
      pending = false;
      build();
    }
  });
}

build();

for (const folder of ['src', 'public']) {
  watch(path.join(ROOT, folder), { recursive: true }, () => {
    clearTimeout(timer);
    timer = setTimeout(build, 200);
  });
}

spawn(process.execPath, ['scripts/serve.mjs', '--port', port], { cwd: ROOT, stdio: 'inherit' });
