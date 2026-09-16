// Ejecuta un script de Python 3 con el intérprete disponible en el equipo
// (py -3 en Windows, python3 en macOS y Linux).
// Uso: node scripts/python.mjs <script.py> [argumentos]
import { spawnSync } from 'node:child_process';

const [script, ...args] = process.argv.slice(2);
if (!script) {
  console.error('Uso: node scripts/python.mjs <script.py> [argumentos]');
  process.exit(1);
}

const candidates = process.platform === 'win32'
  ? [['py', ['-3']], ['python', []], ['python3', []]]
  : [['python3', []], ['python', []]];

for (const [command, prefix] of candidates) {
  const probe = spawnSync(command, [...prefix, '--version'], { encoding: 'utf8' });
  if (probe.status === 0 && /Python 3/.test(`${probe.stdout}${probe.stderr}`)) {
    const run = spawnSync(command, [...prefix, script, ...args], {
      stdio: 'inherit',
      env: { ...process.env, PYTHONIOENCODING: 'utf-8' },
    });
    process.exit(run.status ?? 1);
  }
}

console.error('No se encontró Python 3. Instálalo y agrega las librerías: pip install pillow pymupdf');
process.exit(1);
