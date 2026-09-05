/* Render reutilizable de tarjetas de cabaña (home = adelanto, cabanas.html = todas) */
(function () {
  'use strict';

  function card(c, i) {
    const el = document.createElement('article');
    el.className = 'cabin-card reveal';
    el.setAttribute('data-delay', String((i % 3) + 1));
    el.dataset.pax = c.pax;
    el.dataset.camas = c.bedCount;
    const n = String(i + 1).padStart(2, '0');
    el.innerHTML = `
      <a href="${c.url}" class="cabin-card__media">
        <img src="${c.img()}" alt="${c.name}" loading="lazy">
        <span class="cabin-card__num">${n}</span>
        <span class="cabin-card__tag">${c.tag}</span>
        <div class="cabin-card__overlay">
          <h3>${c.name}</h3>
          <div class="cabin-card__meta">
            <span>${c.capacity}</span>
            <span>${c.beds}</span>
            <span>${c.spec3}</span>
          </div>
        </div>
      </a>
      <div class="cabin-card__foot">
        <a href="${c.url}" class="arrow-link">Ver la cabaña <span class="ico" data-icon="arrow"></span></a>
      </div>`;
    return el;
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

  window.renderCabinCards = function (grid, limit) {
    if (!window.CABINS || !grid) return;
    const list = limit ? window.CABINS.slice(0, limit) : window.CABINS;
    list.forEach((c, i) => grid.appendChild(card(c, i)));
    if (window.applyIcons) window.applyIcons(grid);
    observe(grid);
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
    const grid = document.getElementById('cabins-grid');
    if (!form || !grid) return;

    const cuenta = document.getElementById('filtros-cuenta');
    const vacio = document.getElementById('filtros-vacio');
    const limpiar = document.getElementById('filtros-limpiar');
    const filas = document.querySelectorAll('#tabla-cabanas tbody tr');
    const tarjetas = grid.querySelectorAll('.cabin-card');
    const estado = { pax: 0, camas: 0 };

    function aplicar() {
      let n = 0;
      tarjetas.forEach(el => {
        const ok = +el.dataset.pax >= estado.pax && +el.dataset.camas >= estado.camas;
        el.hidden = !ok;
        if (ok) n++;
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
