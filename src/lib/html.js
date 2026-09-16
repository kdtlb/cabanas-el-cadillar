// Utilidades para escribir HTML de forma segura desde JavaScript.
//
// `html` es una plantilla etiquetada: todo valor interpolado se escapa salvo
// que ya sea HTML generado por otra plantilla (o marcado con `raw`). Así los
// textos de los datos (nombres, descripciones, textos alternativos) nunca
// rompen el marcado.

const ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

export function escape(value) {
  return String(value).replace(/[&<>"']/g, (char) => ESCAPES[char]);
}

class SafeHtml {
  constructor(value) {
    this.value = value;
  }

  toString() {
    return this.value;
  }
}

export const raw = (value) => new SafeHtml(String(value));

function renderValue(value) {
  if (value === null || value === undefined || value === false) return '';
  if (value instanceof SafeHtml) return value.value;
  if (Array.isArray(value)) return value.map(renderValue).join('');
  return escape(value);
}

export function html(strings, ...values) {
  let out = strings[0];
  for (let i = 0; i < values.length; i += 1) {
    out += renderValue(values[i]) + strings[i + 1];
  }
  return new SafeHtml(out);
}

// Atributos a partir de un objeto: omite null/undefined/false y escribe
// solo el nombre cuando el valor es `true`.
export function attrs(object) {
  return raw(
    Object.entries(object)
      .filter(([, value]) => value !== null && value !== undefined && value !== false)
      .map(([name, value]) => (value === true ? ` ${name}` : ` ${name}="${escape(value)}"`))
      .join(''),
  );
}

// Une clases CSS ignorando valores vacíos.
export const cx = (...classes) => classes.flat().filter(Boolean).join(' ');
