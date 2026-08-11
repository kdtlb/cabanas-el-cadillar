# Las Cabañas el Cadillar

Sitio web estático de **Las Cabañas el Cadillar** — 10 cabañas + piscina, quincho y salón de eventos, en los valles de Tarija, Bolivia. Hecho con HTML, CSS y JavaScript puro (sin dependencias ni backend). Contacto por WhatsApp.

## Estructura

```
index.html            Inicio (hero con video)
cabanas.html          Listado de las 10 cabañas
eventos.html          Eventos y celebraciones
tarija.html           Qué hacer en Tarija
mapa.html             Geoportal (Leaflet)
reservas.html         Contacto (formulario a WhatsApp)
404.html              Página no encontrada
cabanas/              Páginas de cada cabaña (generadas: cabana-1 … cabana-10)
assets/
  css/style.css       Estilos
  js/                 icons.js · cabins-data.js · cabins-render.js · main.js
  img/cabanas/<n>/    Fotos reales de cada cabaña
  video/hero.mp4      Video del hero
scripts/gen-cabins.js Generador de las páginas de cabaña
```

## Vista previa local

Cualquier servidor estático sirve. Por ejemplo, con Python:

```bash
python -m http.server 8123
```

Luego abrir http://localhost:8123

## Editar las cabañas

Los datos de las 10 cabañas están **solo** en `assets/js/cabins-data.js`
(fotos, nombre, capacidad, camas, amenities, descripción). Tras editarlos,
regenerar las páginas de cada cabaña:

```bash
node scripts/gen-cabins.js
```

## Publicar en GitHub Pages

1. Crear un repositorio en GitHub y subir estos archivos a la rama `main`.
2. En el repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   rama `main`, carpeta `/ (root)`, y **Save**.
3. En unos minutos el sitio queda en `https://<usuario>.github.io/<repo>/`.

El archivo `.nojekyll` desactiva el procesamiento Jekyll (se sirve tal cual).

## Pendientes (reemplazar por datos reales)

- **WhatsApp:** el número `59170000000` (placeholder) en todo el sitio.
- **Dominio:** las etiquetas Open Graph usan `https://www.cabanasdelcadillar.bo/` (placeholder).
- **Redes:** los enlaces de Instagram/Facebook/TikTok/Airbnb/Booking son `#` (placeholder).
- **Cabañas:** la capacidad y las camas de cada cabaña son **estimadas** de las fotos; confirmar.
- **Idiomas:** el selector ES/EN/FR/PT está solo como interfaz; falta traducir.
