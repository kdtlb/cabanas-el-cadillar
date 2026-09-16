# El Cadillar Apart Hotel · Sitio web oficial

Sitio web de **El Cadillar Apart Hotel**: diez cabañas independientes con piscina, quincho y jardines,
al pie de los cerros y a 7 km del centro de Tarija, Bolivia.

Es un sitio estático, rápido y sin dependencias: se genera con Node.js a partir de datos y
componentes, y se puede publicar en cualquier alojamiento estático (GitHub Pages, Netlify,
Cloudflare Pages o un hosting tradicional).

---

## Uso rápido

Requisitos: **Node.js 20 o superior**. Para optimizar fotos o regenerar logos, además
**Python 3** con `pip install pillow pymupdf`.

| Comando | Qué hace |
| --- | --- |
| `npm run dev` | Compila, abre la vista previa en http://localhost:4321 y recompila al guardar cambios |
| `npm run build` | Genera el sitio final en `dist/` y verifica enlaces, `<h1>`, textos alternativos y títulos |
| `npm run serve` | Sirve `dist/` sin recompilar |
| `npm run images` | Optimiza las fotos del catálogo (AVIF + WebP en varios tamaños) |
| `npm run brand` | Regenera logos SVG y favicons desde el archivo original de Illustrator |

---

## Estructura

```
src/
  config/
    site.js         Nombre, dominio, contacto, redes, ubicación, reservas y analítica
    routes.js       URLs por idioma y menú principal
  content/
    es.js           Punto de entrada de los textos en español
    es/ui.js        Textos de interfaz (botones, menú, etiquetas)
    es/seo.js       Títulos y descripciones para buscadores
    es/home.js      Textos de la portada
    es/pages.js     Textos de las páginas interiores
  data/
    cabins.js       Las 10 cabañas (capacidad, camas, m², equipamiento, fotos)
    amenities.js    Catálogo de características y espacios compartidos
    photos.json     Catálogo de fotos: origen, texto alternativo, etiquetas y créditos
    images.json     Generado por `npm run images` (no editar a mano)
    experiences.js  Momentos de la estadía, espacios del predio y beneficios
    location.js     Distancias por carretera y cómo llegar
    tarija.js       Destinos y datos de Tarija (con fuentes)
    faq.js          Preguntas frecuentes (las que no tienen respuesta no se publican)
    gallery.js      Orden y categorías de la galería
    testimonials.js Opiniones de huéspedes (vacío hasta tener testimonios reales)
  components/       Piezas de HTML reutilizables (encabezado, tarjetas, SEO, etc.)
  pages/            Una función por página
  styles/           Estilos: tokens de marca, base, estructura, componentes y páginas
  scripts/main.js   Interacción: menú, filtros, carruseles, visor de fotos y reservas
public/             Se copia tal cual: fotos optimizadas, logos y favicons
assets-src/         Fotos de terceros con licencia (Tarija, Wikimedia Commons)
scripts/            Compilador, servidor local y herramientas de imágenes y marca
dist/               Resultado final para publicar (se genera, no se edita)
```

Las carpetas originales `Imagenes/` y `DISEÑO/` se conservan en local y no se suben al repositorio.

---

## Cómo editar

**Datos de contacto, dominio o analítica** → `src/config/site.js`.
Todo lo que está en `null` se oculta solo: al completar un valor (por ejemplo el correo o el horario
de check-in) y volver a compilar, aparece en el sitio y en los datos estructurados.

**Una cabaña** → `src/data/cabins.js`. Capacidad, camas, baños, m², equipamiento y fotos.
Ya existen campos preparados para `price`, `availability` y `bookingUrl`.

**Una pregunta frecuente** → `src/data/faq.js`. Completar `a` (la respuesta) la publica.

**Textos** → `src/content/es/`. **Títulos y descripciones para Google** → `src/content/es/seo.js`.

**Agregar o cambiar fotos**
1. Copiar la foto original dentro de `Imagenes/`.
2. Sumarla a `src/data/photos.json` con un `id`, su ruta y un texto alternativo descriptivo.
3. Usar el `id` donde corresponda (por ejemplo en `photos` de una cabaña).
4. Ejecutar `npm run images` y luego `npm run build`.

**Testimonios** → `src/data/testimonials.js`. Solo reales y con autorización; la sección aparece
sola en la portada cuando hay al menos uno.

---

## Marca

- Paleta y tipografía del **Manual de Identidad** (Lucía López Bertram, agosto 2026):
  Marrón Corteza `#61483A`, Blanco, Verde Salvia `#BDC497`, Celeste Cielo `#C8DAE7`,
  Amarillo Sol `#FAEDAF` y Madera Cálida `#CBAF9A`.
- Tipografía principal **Charter**. En la web se usa Charter si el equipo la tiene y, si no,
  **Charis SIL** (su versión libre, servida por Google Fonts).
- La tipografía secundaria (Eds Market Main Script) no se usa en la web: solo aparece dentro del
  logotipo, que es una pieza fija. Para usarla en textos hace falta una licencia web.
- Los logos de `public/marca/` se extraen del archivo original `.ai` sin redibujarlos
  (`npm run brand`). El logotipo del encabezado mide 72 px de alto, el mínimo digital del manual.

---

## SEO incluido

- Títulos y descripciones únicos por página, URLs amigables y `canonical`.
- Open Graph y Twitter Cards con imágenes de 1200×630.
- Datos estructurados: `LodgingBusiness` (con coordenadas, redes y espacios), `Accommodation` por
  cabaña, `BreadcrumbList`, `FAQPage`, `TouristDestination` y `WebSite`.
- `sitemap.xml` con imágenes, `robots.txt` y `site.webmanifest`.
- Textos alternativos en todas las fotos y un único `<h1>` por página (lo verifica `npm run build`).

---

## Publicación

1. Confirmar el dominio en `src/config/site.js` (`url`).
2. **GitHub Pages:** el flujo `.github/workflows/publicar.yml` compila y publica en cada cambio de
   `main`. Activarlo una vez en *Settings → Pages → Source: GitHub Actions*. Para un dominio propio,
   crear `public/CNAME` con el dominio.
3. **Netlify / Cloudflare Pages:** comando `npm run build`, carpeta de salida `dist`.
4. **Hosting tradicional:** ejecutar `npm run build` y subir el contenido de `dist/`.
5. Dar de alta el sitio en Google Search Console y enviar `sitemap.xml`.

---

## Preparado para crecer

- **Motor de reservas:** completar `booking.engineUrl` en `site.js` (o `bookingUrl` por cabaña) y
  todos los botones "Reservar" apuntan al motor.
- **Analítica y campañas:** IDs de Google Analytics 4, Tag Manager, píxel de Meta y verificación de
  Search Console en `site.js`. Los botones clave ya envían eventos (`data-track`).
- **Inglés:** copiar `src/content/es/` como `en/`, traducir, sumar `en` en los datos y activar
  `locales.en` en `site.js`. Las rutas en inglés ya están definidas en `routes.js`.
- **Precios, disponibilidad, promociones o blog:** los datos y el compilador admiten nuevas páginas
  y campos sin rehacer el sitio.

---

## Datos pendientes de confirmar

Estos datos no estaban en el material y el sitio no los inventa (quedan ocultos hasta completarlos):

- Dominio definitivo (se usa `www.elcadillaraparthotel.com`, tomado de la papelería del manual).
- Teléfono para llamadas, correo electrónico y dirección postal exacta.
- Horarios de check-in y check-out, qué incluye la estadía, mascotas, estacionamiento, WiFi y precios.
- Cabaña 1: las camas suman 6 plazas y la capacidad es de 5 personas; no se ve cocina en las fotos.
- Cabaña 3: confirmar el tipo de cama "triple"; no se ve cocina en las fotos.
- Cabaña 6: recibe hasta 3 personas, pero solo figura una cama doble.
- Cabaña 10: figura con 20 m² y tiene dos plantas.
- Zona de hamacas: no hay fotos ni videos que la muestren, por eso no aparece.
- Salón empresarial (`src/data/business.js`): por pedido del propietario, la página muestra **XX**
  donde falta el dato (capacidad, superficie, formatos de armado, equipamiento, internet,
  estacionamiento, horarios, tarifas, opciones de aperitivos y menús). Faltan fotos del interior.
- Ubicación: el sitio indica "Cadillar, municipio de San Lorenzo" según OpenStreetMap para las
  coordenadas del predio, y 10 km por carretera al aeropuerto (antes figuraba "30 minutos").
- Testimonios reales de huéspedes.

## Créditos

Fotos de Tarija: Wikimedia Commons (licencias Creative Commons; detalle en la página *Tarija*).
Datos de Tarija consultados en septiembre de 2026 (fuentes en `src/data/tarija.js`).
