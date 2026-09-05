/* Render reutilizable de tarjetas de cabaña (home = adelanto, cabanas.html = todas) */
(function () {
  'use strict';

  /* Ruta al isotipo: las fichas de cabaña viven en /cabanas/ */
  function base() {
    return /\/cabanas\//.test(location.pathname) ? '../' : '';
  }

  /* El color de la banda dice la capacidad, no es decoración al azar:
     mismo color = mismo grupo de personas. */
  const COLOR_POR_PAX = { 2: 'salvia', 4: 'cielo', 5: 'madera' };

  function card(c, i) {
    const el = document.createElement('article');
    el.className = 'cabin-card cabin-card--' + (COLOR_POR_PAX[c.pax] || 'salvia') + ' reveal';
    el.setAttribute('data-delay', String((i % 3) + 1));
    el.dataset.pax = c.pax;
    el.dataset.camas = c.bedCount;
    const n = String(c.dir).padStart(2, '0');
    el.innerHTML = `
      <div class="cabin-card__top">
        <span class="cabin-card__num">${n}</span>
        <span class="cabin-card__tag">${c.tag}</span>
      </div>
      <div class="cabin-card__body">
        <h3><a href="${c.url}">${c.name}</a></h3>
        <dl class="cabin-card__specs">
          <div><dt>Personas</dt><dd>${c.pax}</dd></div>
          <div><dt>Camas</dt><dd>${c.bedCount}</dd></div>
          <div><dt>Baños</dt><dd>${c.baths}</dd></div>
        </dl>
        <p class="cabin-card__det">${c.beds}</p>
        <span class="cabin-card__cta">Ver la cabaña <span class="ico" data-icon="arrow"></span></span>
      </div>`;
    return el;
  }

  /* Nombres de los grupos por capacidad */
  const EN_LETRAS = { 2: 'dos', 3: 'tres', 4: 'cuatro', 5: 'cinco', 6: 'seis' };

  function grupo(pax, cabanas) {
    const sec = document.createElement('section');
    sec.className = 'cabin-group';
    sec.dataset.pax = pax;
    const cuenta = cabanas.length === 1 ? '1 cabaña' : cabanas.length + ' cabañas';
    const head = document.createElement('div');
    head.className = 'cabin-group__head reveal';
    head.innerHTML =
      '<h3>Hasta ' + (EN_LETRAS[pax] || pax) + ' personas</h3>' +
      '<span class="cabin-group__count">' + cuenta + '</span>';
    const grid = document.createElement('div');
    grid.className = 'cabins__grid';
    cabanas.forEach((c, i) => grid.appendChild(card(c, i)));
    sec.appendChild(head);
    sec.appendChild(grid);
    return sec;
  }

  function observe(grid) {
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((es) => es.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      }), { threshold: 0.1 });
      grid.querySelectorAll('.reveal').forEach(el => io.observe(el));
    } else {
      grid.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
    }
  }

  /* Adelanto suelto (portada): sin agrupar */
  window.renderCabinCards = function (grid, limit) {
    if (!window.CABINS || !grid) return;
    const list = limit ? window.CABINS.slice(0, limit) : window.CABINS;
    list.forEach((c, i) => grid.appendChild(card(c, i)));
    if (window.applyIcons) window.applyIcons(grid);
    observe(grid);
  };

  /* Listado completo agrupado por capacidad, de menor a mayor */
  window.renderCabinGroups = function (cont) {
    if (!window.CABINS || !cont) return;
    const porPax = new Map();
    window.CABINS.forEach(c => {
      if (!porPax.has(c.pax)) porPax.set(c.pax, []);
      porPax.get(c.pax).push(c);
    });
    Array.from(porPax.keys()).sort((a, b) => a - b)
      .forEach(pax => cont.appendChild(grupo(pax, porPax.get(pax))));
    if (window.applyIcons) window.applyIcons(cont);
    observe(cont);
  };

  /* Tabla comparativa (cabanas.html) */
  window.renderCabinTable = function (tbody) {
    if (!window.CABINS || !tbody) return;
    window.CABINS.forEach(c => {
      const tr = document.createElement('tr');
      tr.dataset.pax = c.pax;
      tr.dataset.camas = c.bedCount;
      tr.innerHTML =
        '<th scope="row"><a href="' + c.url + '">' + c.name + '</a></th>' +
        '<td data-th="Personas"><b>' + c.pax + '</b></td>' +
        '<td data-th="Camas"><b>' + c.bedCount + '</b> <span class="tabla-comp__det">' + c.beds + '</span></td>' +
        '<td data-th="Baños">' + c.baths + '</td>' +
        '<td data-th="Distintivo">' + c.tag + '</td>' +
        '<td class="tabla-comp__ir"><a class="arrow-link" href="' + c.url + '">Ver <span class="ico" data-icon="arrow"></span></a></td>';
      tbody.appendChild(tr);
    });
    if (window.applyIcons) window.applyIcons(tbody);
  };

  /* Filtro por capacidad y por número de camas.
     Los dos criterios son "de ese número para arriba": quien viaja de a
     cuatro también quiere ver las de cinco. */
  window.initCabinFilter = function () {
    const form = document.getElementById('filtros');
    const cont = document.getElementById('cabins-grouped') || document.getElementById('cabins-grid');
    if (!form || !cont) return;

    const cuenta = document.getElementById('filtros-cuenta');
    const vacio = document.getElementById('filtros-vacio');
    const limpiar = document.getElementById('filtros-limpiar');
    const filas = document.querySelectorAll('#tabla-cabanas tbody tr');
    const tarjetas = cont.querySelectorAll('.cabin-card');
    const grupos = cont.querySelectorAll('.cabin-group');
    const estado = { pax: 0, camas: 0 };

    function aplicar() {
      let n = 0;
      tarjetas.forEach(el => {
        const ok = +el.dataset.pax >= estado.pax && +el.dataset.camas >= estado.camas;
        el.hidden = !ok;
        if (ok) n++;
      });
      // Un grupo sin ninguna cabaña visible se esconde entero, para que no
      // quede el título "Para dos personas" encabezando un hueco
      grupos.forEach(g => {
        g.hidden = !Array.prototype.some.call(
          g.querySelectorAll('.cabin-card'), el => !el.hidden);
      });
      filas.forEach(tr => {
        tr.hidden = !(+tr.dataset.pax >= estado.pax && +tr.dataset.camas >= estado.camas);
      });

      const filtrando = estado.pax > 0 || estado.camas > 0;
      if (cuenta) {
        cuenta.textContent = !filtrando
          ? 'Las diez cabañas'
          : n === 0 ? 'Ninguna cabaña coincide'
          : n === 1 ? '1 cabaña coincide'
          : n + ' cabañas coinciden';
      }
      if (vacio) vacio.hidden = n > 0;
      if (limpiar) limpiar.hidden = !filtrando;
    }

    form.querySelectorAll('.filtros__ops').forEach(grupo => {
      const clave = grupo.dataset.filtro;
      grupo.addEventListener('click', e => {
        const b = e.target.closest('.chip');
        if (!b) return;
        grupo.querySelectorAll('.chip').forEach(o => {
          const on = o === b;
          o.classList.toggle('is-on', on);
          o.setAttribute('aria-pressed', on ? 'true' : 'false');
        });
        estado[clave] = +b.dataset.v;
        aplicar();
      });
    });

    if (limpiar) limpiar.addEventListener('click', () => {
      estado.pax = 0; estado.camas = 0;
      form.querySelectorAll('.filtros__ops').forEach(g => {
        g.querySelectorAll('.chip').forEach(o => {
          const on = o.dataset.v === '0';
          o.classList.toggle('is-on', on);
          o.setAttribute('aria-pressed', on ? 'true' : 'false');
        });
      });
      aplicar();
    });

    aplicar();
  };

  window.renderFooterCabins = function (ul) {
    if (!window.CABINS || !ul) return;
    window.CABINS.forEach(c => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="${c.url}">${c.name}</a>`;
      ul.appendChild(li);
    });
  };
})();
