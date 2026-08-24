const fs = require('fs');
const path = require('path');

const OUT = path.resolve(__dirname, '..', 'cabanas');
fs.mkdirSync(OUT, { recursive: true });

const U = (id, w) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

// Fuente única de datos: se cargan directamente desde cabins-data.js
const DATA_FILE = path.resolve(__dirname, '..', 'assets', 'js', 'cabins-data.js');
const window = {};
eval(fs.readFileSync(DATA_FILE, 'utf8'));
const CABINS = window.CABINS;

// Croquis (plano orientativo) generado a partir de los datos de la cabaña
const croquis = (c) => {
  const beds = c.beds.toLowerCase();
  const cap = parseInt(c.capacity, 10) || 2;
  const twoBed = /2\s*(camas|individuales)/.test(beds) || /\+\s*2/.test(beds) || cap >= 4;
  const twoBath = c.amenities.some(a => /2\s*ba/i.test(a));
  const j = (c.amenities.join(' ') + ' ' + c.highlight).toLowerCase();
  const outdoor = /terraza/.test(j) ? 'Terraza' : /galería|galeria/.test(j) ? 'Galería' : /jardín|jardin/.test(j) ? 'Jardín' : 'Deck';
  const W = '#171612';
  const room = (x, y, w, h, name, sub) =>
    `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="none" stroke="${W}" stroke-width="1.4"/>` +
    `<text x="${x + w / 2}" y="${y + h / 2 + (sub ? -3 : 4)}" font-family="Inter,sans-serif" font-size="12" letter-spacing="1.5" fill="#6f6a60" text-anchor="middle">${name.toUpperCase()}</text>` +
    (sub ? `<text x="${x + w / 2}" y="${y + h / 2 + 14}" font-family="Inter,sans-serif" font-size="9" fill="#a8a196" text-anchor="middle">${sub}</text>` : '');
  let inner = '';
  if (twoBed) {
    inner += room(30, 30, 150, 120, 'Dormitorio', 'Principal');
    inner += room(30, 150, 150, 120, 'Dormitorio', cap >= 5 ? '2 camas' : 'Segundo');
    inner += room(180, 30, 182, 150, 'Estar · Cocina', '');
    if (twoBath) { inner += room(180, 180, 91, 90, 'Baño', ''); inner += room(271, 180, 91, 90, 'Baño', ''); }
    else inner += room(180, 180, 182, 90, 'Baño', '');
  } else {
    inner += room(30, 30, 150, 140, 'Dormitorio', '');
    inner += room(30, 170, 150, 100, 'Baño', '');
    inner += room(180, 30, 182, 240, 'Estar · Cocina', '');
  }
  const deck =
    `<rect x="382" y="30" width="78" height="240" fill="none" stroke="${W}" stroke-width="1.4" stroke-dasharray="5 5"/>` +
    `<text x="421" y="150" font-family="Inter,sans-serif" font-size="12" letter-spacing="1.5" fill="#6f6a60" text-anchor="middle" transform="rotate(90 421 150)">${outdoor.toUpperCase()}</text>`;
  return `<svg viewBox="0 0 490 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Croquis de ${c.name}">` +
    `<rect x="28" y="28" width="334" height="244" fill="none" stroke="${W}" stroke-width="3"/>` +
    inner + deck +
    `<g transform="translate(452,44)"><circle r="11" fill="none" stroke="${W}" stroke-width="1.2"/><path d="M0 -8 L3.5 4 L0 1.5 L-3.5 4 Z" fill="${W}"/><text x="0" y="-15" font-family="Inter,sans-serif" font-size="8" fill="#6f6a60" text-anchor="middle">N</text></g>` +
    `</svg>`;
};

const page = (c, i) => {
  const prev = CABINS[(i - 1 + CABINS.length) % CABINS.length];
  const next = CABINS[(i + 1) % CABINS.length];
  const amenities = c.amenities.map(a => `<div class="amenity"><span class="ico" data-icon="check"></span>${a}</div>`).join('\n          ');
  const gallery = c.galleryPaths().map(p => `<a href="../${p}" target="_blank" rel="noopener"><img src="../${p}" alt="${c.name}" loading="lazy"></a>`).join('\n        ');

  return `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${c.name} — Las Cabañas el Cadillar</title>
<meta name="description" content="${c.short}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Las Cabañas el Cadillar">
<meta property="og:locale" content="es_BO">
<meta property="og:title" content="${c.name} — Las Cabañas el Cadillar">
<meta property="og:description" content="${c.short}">
<meta property="og:image" content="https://www.cabanasdelcadillar.bo/${c.img()}">
<meta property="og:url" content="https://www.cabanasdelcadillar.bo/cabanas/${c.slug}.html">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="https://www.cabanasdelcadillar.bo/${c.img()}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../assets/css/style.css">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%23171612'/><text x='50' y='72' font-size='60' text-anchor='middle' fill='%23f1efe9' font-family='Georgia'>C</text></svg>">
</head>
<body>

<nav class="nav nav--solid">
  <div class="nav__inner">
    <a href="../index.html" class="nav__brand">
      <div class="nav__logo">C</div>
      <div class="nav__name">Cadillar<span>Cabañas de Tarija</span></div>
    </a>
    <ul class="nav__links">
      <li><a href="../index.html">Inicio</a></li>
      <li><a href="../cabanas.html">Cabañas</a></li>
      <li><a href="../eventos.html">Eventos</a></li>
      <li><a href="../tarija.html">Descubra Tarija</a></li>
      <li><a href="../mapa.html">El mapa</a></li>
      <li><a href="../reservas.html">Contacto</a></li>
    </ul>
    <a href="../reservas.html" class="btn btn--gold nav__cta">Reservar</a>
    <button class="nav__toggle" aria-label="Abrir menú"><span></span><span></span><span></span></button>
  </div>
</nav>
<div class="nav__mobile">
  <a href="../index.html">Inicio</a>
  <a href="../cabanas.html">Cabañas</a>
  <a href="../eventos.html">Eventos</a>
  <a href="../tarija.html">Descubra Tarija</a>
  <a href="../mapa.html">El mapa</a>
  <a href="../reservas.html">Contacto</a>
  <a href="../reservas.html" class="btn btn--gold">Reservar</a>
</div>

<!-- HERO -->
<header class="cabin-hero">
  <div class="cabin-hero__bg"><img src="../${c.img()}" alt="${c.name}"></div>
  <div class="container cabin-hero__content">
    <div class="breadcrumb"><a href="../index.html">Inicio</a> · <a href="../cabanas.html">Cabañas</a> · ${c.name}</div>
    <span class="eyebrow eyebrow--light">${c.tag}</span>
    <h1>${c.name}</h1>
    <div class="greca greca--light"></div>
    <div class="cabin-hero__meta">
      <span><span class="ico" data-icon="users"></span> ${c.capacity}</span>
      <span><span class="ico" data-icon="bed"></span> ${c.beds}</span>
      <span><span class="ico" data-icon="check"></span> ${c.spec3}</span>
    </div>
  </div>
</header>

<!-- CONTENIDO -->
<section class="section">
  <div class="container cabin-content">
    <!-- Intro -->
    <div class="reveal">
      <span class="eyebrow">Sobre la cabaña</span>
      <p class="cabin-intro__lead">${c.short}</p>
    </div>

    <!-- El diseño -->
    <div class="cabin-section reveal">
      <div class="split">
        <div class="split__media"><img src="../${c.designImg()}" alt="${c.name}"></div>
        <div>
          <span class="eyebrow">El diseño</span>
          <h2>Pensada para disfrutar</h2>
          <p>${c.long}</p>
          <div class="highlight-box"><span class="label">Lo que la hace especial</span>${c.highlight}</div>
        </div>
      </div>
    </div>

    <!-- Características -->
    <div class="cabin-section reveal">
      <span class="eyebrow">Características</span>
      <h2>Todo lo que incluye</h2>
      <div class="cabin-specs">
        <div class="cabin-spec"><span class="ico" data-icon="users"></span><b>${c.capacity}</b><span>Capacidad</span></div>
        <div class="cabin-spec"><span class="ico" data-icon="bed"></span><b>${c.beds}</b><span>Camas</span></div>
        <div class="cabin-spec"><span class="ico" data-icon="check"></span><b>${c.spec3}</b><span>Destacado</span></div>
      </div>
      <div class="amenities">
      ${amenities}
      </div>
    </div>

    <!-- Galería -->
    <div class="cabin-section reveal">
      <span class="eyebrow">Galería</span>
      <h2>Un vistazo</h2>
      <div class="cabin-gallery">
    ${gallery}
      </div>
    </div>

    <!-- Contacto (apartado) -->
    <div class="cabin-contact reveal">
      <div class="cabin-contact__text">
        <span class="eyebrow eyebrow--light">¿Le gustó?</span>
        <h2>Consulte por la ${c.name}</h2>
        <p>Le contamos disponibilidad, servicios y todos los detalles, sin compromiso y sin paquetes cerrados. Le respondemos dentro de las 24 horas.</p>
      </div>
      <div class="cabin-contact__actions">
        <a href="../reservas.html?cabana=${c.slug}" class="btn btn--gold btn--lg">Pedir más información</a>
        <a href="https://wa.me/59170000000?text=Hola,%20quiero%20consultar%20por%20la%20${encodeURIComponent(c.name)}" class="btn btn--ghost-light btn--lg" target="_blank" rel="noopener">Consultar por WhatsApp</a>
      </div>
    </div>

    <!-- Navegación prev/next -->
    <div class="cabin-nav">
      <a href="${prev.slug}.html" class="cabin-nav__link cabin-nav__link--prev">
        <span class="ico cabin-nav__arrow" data-icon="arrow-left"></span>
        <span class="cabin-nav__text"><span class="cabin-nav__label">Cabaña anterior</span><b>${prev.name}</b></span>
      </a>
      <a href="${next.slug}.html" class="cabin-nav__link cabin-nav__link--next">
        <span class="cabin-nav__text"><span class="cabin-nav__label">Cabaña siguiente</span><b>${next.name}</b></span>
        <span class="ico cabin-nav__arrow" data-icon="arrow"></span>
      </a>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta">
  <div class="cta__bg"><img src="../assets/img/predio/predio-vista.jpg" alt="Valle de Tarija"></div>
  <div class="container reveal">
    <span class="eyebrow eyebrow--light eyebrow--center">¿Todavía decidiendo?</span>
    <h2>Conozca las otras cabañas</h2>
    <p class="lead mx-auto">Diez refugios distintos, un mismo valle. Encuentre el suyo.</p>
    <div class="cta__actions">
      <a href="../cabanas.html" class="btn btn--gold btn--lg">Ver todas las cabañas</a>
      <a href="../tarija.html" class="btn btn--ghost-light btn--lg">Qué hacer en Tarija</a>
    </div>
  </div>
</section>

<footer class="footer">
  <div class="container">
    <div class="footer__grid">
      <div class="footer__brand">
        <div class="nav__brand"><div class="nav__logo">C</div><div class="nav__name">Cadillar<span>Cabañas de Tarija</span></div></div>
        <p>Diez cabañas entre cerros y montañas, en el corazón de los valles de Tarija, Bolivia.</p>
        <div class="footer__social"><a href="#" aria-label="Instagram"><span class="ico" data-icon="instagram"></span></a><a href="#" aria-label="Facebook"><span class="ico" data-icon="facebook"></span></a><a href="https://wa.me/59170000000" aria-label="WhatsApp"><span class="ico" data-icon="whatsapp"></span></a></div>
      </div>
      <div><h4>Explorar</h4><ul><li><a href="../cabanas.html">Las cabañas</a></li><li><a href="../eventos.html">Eventos</a></li><li><a href="../tarija.html">Descubra Tarija</a></li>
      <li><a href="../mapa.html">El mapa</a></li><li><a href="../reservas.html">Reservas</a></li></ul></div>
      <div><h4>Contacto</h4><ul class="footer__contact"><li><span class="label">Dirección</span>Camino al Cadillar · a 25 min de Tarija</li><li><span class="label">WhatsApp</span><a href="https://wa.me/59170000000" target="_blank" rel="noopener">+591 700 00000</a></li></ul></div>
    </div>
    <div class="footer__bottom">
      <span>&copy; <span data-year></span> Las Cabañas el Cadillar. Todos los derechos reservados.</span>
      <span class="footer__credit">Desarrollado por <strong>BUCKDI</strong></span>
    </div>
  </div>
</footer>

<script src="../assets/js/icons.js"></script>
<script src="../assets/js/main.js"></script>
</body>
</html>
`;
};

CABINS.forEach((c, i) => {
  fs.writeFileSync(path.join(OUT, `${c.slug}.html`), page(c, i), 'utf8');
  console.log('creado', c.slug + '.html');
});
console.log('LISTO:', CABINS.length, 'cabañas');
