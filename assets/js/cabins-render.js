/* Render reutilizable de tarjetas de cabaña (home = adelanto, cabanas.html = todas) */
(function () {
  'use strict';

  function card(c, i) {
    const el = document.createElement('article');
    el.className = 'cabin-card reveal';
    el.setAttribute('data-delay', String((i % 3) + 1));
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

  window.renderFooterCabins = function (ul) {
    if (!window.CABINS || !ul) return;
    window.CABINS.forEach(c => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="${c.url}">${c.name}</a>`;
      ul.appendChild(li);
    });
  };
})();
