/* El Cadillar Apart Hotel — interacciones */
(function () {
  'use strict';

  /* ---- Video del hero: asegurar reproducción (autoplay silenciado) ---- */
  const heroVideo = document.querySelector('.hero__video');
  if (heroVideo) {
    heroVideo.muted = true;
    const hp = heroVideo.play();
    if (hp && hp.catch) hp.catch(() => {});
  }

  /* ---- Navbar: cambio de estilo con scroll ---- */
  const nav = document.querySelector('.nav');
  if (nav && !nav.classList.contains('nav--solid')) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---- Menú móvil (encabezado + enlaces + pie, inyectado) ---- */
  const toggle = document.querySelector('.nav__toggle');
  const mobile = document.querySelector('.nav__mobile');
  if (toggle && mobile) {
    if (!mobile.querySelector('.nav__mobile__links')) {
      const wrap = document.createElement('nav');
      wrap.className = 'nav__mobile__links';
      Array.prototype.slice.call(mobile.children).forEach(l => {
        if (l.classList && l.classList.contains('btn')) l.remove(); // el "Reservar" se reemplaza por el CTA del pie
        else wrap.appendChild(l);
      });
      // Las fichas de cabaña viven en /cabanas/, así que la ruta se resuelve relativa
      const base = /\/cabanas\//.test(location.pathname) ? '../' : '';
      const head = document.createElement('div');
      head.className = 'nav__mobile__head';
      head.innerHTML = '<a href="' + base + 'index.html" class="nav__brand"><img class="nav__logo-img" src="' + base + 'assets/img/marca/logo-horizontal-blanco.png" alt="El Cadillar Apart Hotel" width="460" height="181"></a><button class="nav__mobile__close" aria-label="Cerrar menú"><span></span><span></span></button>';
      const foot = document.createElement('div');
      foot.className = 'nav__mobile__foot';
      foot.innerHTML = '<span class="nav__mobile__foot-label">¿Consultas? Estamos para ayudarle</span><a class="btn btn--gold" href="https://wa.me/59170000000?text=Hola,%20quiero%20consultar%20por%20El%20Cadillar%20Apart%20Hotel" target="_blank" rel="noopener">Escríbanos por WhatsApp</a>';
      mobile.appendChild(head);
      mobile.appendChild(wrap);
      mobile.appendChild(foot);
    }
    const close = () => { mobile.classList.remove('open'); document.body.style.overflow = ''; };
    toggle.addEventListener('click', () => {
      const open = mobile.classList.toggle('open');
      document.body.style.overflow = open ? 'hidden' : '';
    });
    const closeBtn = mobile.querySelector('.nav__mobile__close');
    if (closeBtn) closeBtn.addEventListener('click', close);
    mobile.querySelectorAll('.nav__mobile__links a').forEach(a => a.addEventListener('click', close));
  }

  /* ---- Selector de idioma (solo UI; las traducciones quedan para el futuro) ---- */
  (function () {
    const inner = document.querySelector('.nav__inner');
    const LANGS = [['es', 'Español', 'ES'], ['en', 'English', 'EN'], ['fr', 'Français', 'FR'], ['pt', 'Português', 'PT']];
    const NAMES = { en: 'inglés', fr: 'francés', pt: 'portugués' };
    let toastTimer;
    function toast(code) {
      let t = document.querySelector('.lang-toast');
      if (!t) { t = document.createElement('div'); t.className = 'lang-toast'; document.body.appendChild(t); }
      t.textContent = 'Próximamente disponible en ' + (NAMES[code] || 'este idioma');
      t.classList.add('show');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => t.classList.remove('show'), 2600);
    }
    if (inner && !inner.querySelector('.lang')) {
      const lang = document.createElement('div');
      lang.className = 'lang';
      lang.innerHTML =
        '<button class="lang__btn" type="button" aria-haspopup="true" aria-expanded="false" aria-label="Cambiar idioma">' +
          '<span class="ico" data-icon="globe"></span><span class="lang__cur">ES</span><span class="ico lang__caret" data-icon="chevron"></span>' +
        '</button>' +
        '<div class="lang__menu" role="menu">' +
          LANGS.map(l => '<button class="lang__opt' + (l[0] === 'es' ? ' is-active' : '') + '" type="button" role="menuitem" data-lang="' + l[0] + '">' + l[1] + '<span class="lang__code">' + l[2] + '</span></button>').join('') +
          '<p class="lang__note">Traducciones próximamente</p>' +
        '</div>';
      const cta = inner.querySelector('.nav__cta');
      const tog = inner.querySelector('.nav__toggle');
      inner.insertBefore(lang, cta || tog || null);
      const btn = lang.querySelector('.lang__btn');
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const open = lang.classList.toggle('open');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
      document.addEventListener('click', () => { lang.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); });
      lang.querySelectorAll('.lang__opt').forEach(opt => opt.addEventListener('click', (e) => {
        e.stopPropagation();
        lang.classList.remove('open');
        if (opt.dataset.lang !== 'es') toast(opt.dataset.lang);
      }));
    }
    const mobile = document.querySelector('.nav__mobile');
    if (mobile && !mobile.querySelector('.nav__mobile__lang')) {
      const row = document.createElement('div');
      row.className = 'nav__mobile__lang';
      row.innerHTML = '<span class="nav__mobile__lang-label">Idioma</span><div class="nav__mobile__lang-opts">' +
        LANGS.map(l => '<button class="mlang' + (l[0] === 'es' ? ' is-active' : '') + '" type="button" data-lang="' + l[0] + '">' + l[2] + '</button>').join('') +
        '</div>';
      const foot = mobile.querySelector('.nav__mobile__foot');
      mobile.insertBefore(row, foot || null);
      row.querySelectorAll('.mlang').forEach(b => b.addEventListener('click', () => {
        if (b.dataset.lang !== 'es') toast(b.dataset.lang);
      }));
    }
    if (window.applyIcons) window.applyIcons();
  })();

  /* ---- Animaciones de entrada (reveal) ---- */
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    reveals.forEach(el => io.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('in'));
  }

  /* ---- Fecha mínima en inputs de fecha = hoy ---- */
  const today = new Date().toISOString().split('T')[0];
  document.querySelectorAll('input[type="date"]').forEach(inp => {
    if (!inp.min) inp.min = today;
  });

  /* ---- Manejo de formularios (demo, sin backend) ---- */
  document.querySelectorAll('form[data-demo]').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const success = form.querySelector('.form-success') ||
                      document.querySelector(form.dataset.success);
      if (success) {
        success.classList.add('show');
        success.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      form.reset();
    });
  });

  /* ---- Galerías largas: se muestran unas pocas y el resto bajo demanda ---- */
  (function () {
    const MAX = window.matchMedia('(max-width: 640px)').matches ? 4 : 6;
    document.querySelectorAll('.gallery, .cabin-gallery').forEach(g => {
      const items = Array.prototype.slice.call(g.querySelectorAll('a'));
      if (items.length <= MAX + 1) return;
      const ocultas = items.slice(MAX);
      ocultas.forEach(a => a.classList.add('is-cut'));

      const wrap = document.createElement('div');
      wrap.className = 'gallery-more';
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'btn btn--outline';
      btn.textContent = 'Ver las ' + items.length + ' fotos';
      wrap.appendChild(btn);
      g.parentNode.insertBefore(wrap, g.nextSibling);

      btn.addEventListener('click', () => {
        const abierta = !ocultas[0].classList.contains('is-cut');
        ocultas.forEach(a => a.classList.toggle('is-cut', abierta));
        btn.textContent = abierta ? 'Ver las ' + items.length + ' fotos' : 'Ver menos';
        if (abierta) g.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  })();

  /* ---- Barra de secciones: saltar directo en vez de bajar (celular) ---- */
  (function () {
    const secs = Array.prototype.slice.call(document.querySelectorAll('[data-nav][id]'));
    if (secs.length < 3) return;

    const bar = document.createElement('nav');
    bar.className = 'secnav';
    bar.setAttribute('aria-label', 'Secciones de la página');
    const list = document.createElement('div');
    list.className = 'secnav__list';
    secs.forEach(s => {
      const a = document.createElement('a');
      a.href = '#' + s.id;
      a.textContent = s.getAttribute('data-nav');
      list.appendChild(a);
    });
    bar.appendChild(list);
    const hero = document.querySelector('.hero, .page-header, .tarija-hero');
    if (hero && hero.parentNode) hero.parentNode.insertBefore(bar, hero.nextSibling);
    else document.body.insertBefore(bar, document.body.firstChild);
    // Avisa al CSS: en las páginas con esta barra, los paneles a pantalla
    // completa descuentan su alto para no quedar por debajo
    document.documentElement.classList.add('has-secnav');

    const links = Array.prototype.slice.call(list.children);
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const i = secs.indexOf(e.target);
        links.forEach((l, n) => l.classList.toggle('on', n === i));
        const act = links[i];
        if (act) list.scrollTo({ left: act.offsetLeft - 60, behavior: 'smooth' });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    secs.forEach(s => io.observe(s));
  })();

  /* ---- Detalles colapsados en celular (listas largas dentro de bloques) ---- */
  (function () {
    const movil = window.matchMedia('(max-width: 640px)');
    document.querySelectorAll('.space-feature__list, .split__list').forEach(lista => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'collapse-btn';
      btn.textContent = 'Ver detalles';
      lista.parentNode.insertBefore(btn, lista);

      const aplicar = () => lista.classList.toggle('is-collapsed', movil.matches && !btn.classList.contains('open'));
      btn.addEventListener('click', () => { btn.classList.toggle('open'); btn.textContent = btn.classList.contains('open') ? 'Ocultar detalles' : 'Ver detalles'; aplicar(); });
      movil.addEventListener('change', aplicar);
      aplicar();
    });
  })();

  /* ---- Slider horizontal: flechas en escritorio ---- */
  document.querySelectorAll('.slider-wrap').forEach(wrap => {
    const via = wrap.querySelector('.slider');
    const prev = wrap.querySelector('.slider__nav--prev');
    const next = wrap.querySelector('.slider__nav--next');
    if (!via || !prev || !next) return;

    // Un salto = una diapositiva más su separación
    const paso = () => {
      const s = via.querySelector('.slide');
      if (!s) return via.clientWidth;
      return s.getBoundingClientRect().width + parseFloat(getComputedStyle(via).columnGap || 0);
    };
    const marcar = () => {
      const max = via.scrollWidth - via.clientWidth;
      prev.disabled = via.scrollLeft < 4;
      next.disabled = via.scrollLeft > max - 4;
    };
    prev.addEventListener('click', () => via.scrollBy({ left: -paso(), behavior: 'smooth' }));
    next.addEventListener('click', () => via.scrollBy({ left: paso(), behavior: 'smooth' }));
    via.addEventListener('scroll', marcar, { passive: true });
    window.addEventListener('resize', marcar);
    // Flechas del teclado cuando el carril tiene el foco
    via.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight') { e.preventDefault(); via.scrollBy({ left: paso(), behavior: 'smooth' }); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); via.scrollBy({ left: -paso(), behavior: 'smooth' }); }
    });
    marcar();
  });

  /* ---- Puntos indicadores para los carruseles de celular ---- */
  (function () {
    const esMovil = window.matchMedia('(max-width: 860px)');
    document.querySelectorAll('.exp-grid, .testi-grid, .slider').forEach(car => {
      const items = car.children.length;
      if (items < 2) return;
      const dots = document.createElement('div');
      dots.className = 'swipe-dots';
      for (let i = 0; i < items; i++) dots.appendChild(document.createElement('span'));
      car.parentNode.insertBefore(dots, car.nextSibling);
      const marcar = () => {
        if (!esMovil.matches) return;
        // Se mide contra el ancho real de una tarjeta: dividir el scrollWidth
        // entre el número de tarjetas falla cuando el carril lleva padding
        const primera = car.children[0];
        const paso = primera
          ? primera.getBoundingClientRect().width + parseFloat(getComputedStyle(car).columnGap || 0)
          : car.clientWidth;
        const i = Math.round(car.scrollLeft / paso);
        Array.prototype.forEach.call(dots.children, (d, n) => d.classList.toggle('on', n === Math.max(0, Math.min(i, items - 1))));
      };
      car.addEventListener('scroll', marcar, { passive: true });
      marcar();
    });
  })();

  /* ---- Columna de botones flotantes (la comparten WhatsApp y volver arriba) ---- */
  function floaters() {
    let box = document.querySelector('.floaters');
    if (!box) {
      box = document.createElement('div');
      box.className = 'floaters';
      document.body.appendChild(box);
    }
    return box;
  }

  /* ---- Progreso de lectura y volver arriba ---- */
  (function () {
    const bar = document.createElement('div');
    bar.className = 'progress';
    document.body.appendChild(bar);

    const top = document.createElement('button');
    top.className = 'to-top';
    top.type = 'button';
    top.setAttribute('aria-label', 'Volver arriba');
    top.innerHTML = '<span class="ico" data-icon="arrow"></span>';
    floaters().appendChild(top);
    if (window.applyIcons) window.applyIcons(top);
    top.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    let tick = false;
    function onScroll() {
      if (tick) return;
      tick = true;
      requestAnimationFrame(() => {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        const y = window.scrollY;
        bar.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
        top.classList.toggle('show', y > window.innerHeight * 1.5);
        tick = false;
      });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  })();

  /* ---- Visor de fotos (galerías) ---- */
  (function () {
    const links = Array.prototype.slice.call(document.querySelectorAll('.gallery a, .cabin-gallery a, .slider a'));
    if (!links.length) return;

    const box = document.createElement('div');
    box.className = 'lb';
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-label', 'Visor de fotos');
    box.innerHTML =
      '<span class="lb__count"></span>' +
      '<button class="lb__btn lb__close" aria-label="Cerrar">&times;</button>' +
      '<button class="lb__btn lb__prev" aria-label="Foto anterior"><span class="ico" data-icon="arrow-left"></span></button>' +
      '<button class="lb__btn lb__next" aria-label="Foto siguiente"><span class="ico" data-icon="arrow"></span></button>' +
      '<figure class="lb__fig"><img class="lb__img" alt=""><figcaption class="lb__cap"></figcaption></figure>';
    document.body.appendChild(box);
    if (window.applyIcons) window.applyIcons(box);

    const imgEl = box.querySelector('.lb__img');
    const capEl = box.querySelector('.lb__cap');
    const countEl = box.querySelector('.lb__count');
    let i = 0;

    function srcOf(a) {
      const img = a.querySelector('img');
      return a.getAttribute('href') || (img && img.getAttribute('src')) || '';
    }
    function show(n) {
      i = (n + links.length) % links.length;
      const a = links[i], img = a.querySelector('img');
      imgEl.src = srcOf(a);
      imgEl.alt = (img && img.alt) || '';
      capEl.textContent = (img && img.alt) || '';
      countEl.textContent = (i + 1) + ' / ' + links.length;
    }
    function open(n) { show(n); box.classList.add('open'); document.body.style.overflow = 'hidden'; }
    function close() { box.classList.remove('open'); document.body.style.overflow = ''; }

    links.forEach((a, n) => a.addEventListener('click', (e) => { e.preventDefault(); open(n); }));
    box.querySelector('.lb__close').addEventListener('click', close);
    box.querySelector('.lb__prev').addEventListener('click', (e) => { e.stopPropagation(); show(i - 1); });
    box.querySelector('.lb__next').addEventListener('click', (e) => { e.stopPropagation(); show(i + 1); });
    box.addEventListener('click', (e) => { if (e.target === box || e.target.classList.contains('lb__fig')) close(); });
    document.addEventListener('keydown', (e) => {
      if (!box.classList.contains('open')) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') show(i - 1);
      else if (e.key === 'ArrowRight') show(i + 1);
    });
  })();

  /* ---- Año dinámico en footer ---- */
  document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });

  /* ---- Botón flotante de WhatsApp (en todas las páginas) ---- */
  if (!document.querySelector('.wa-float')) {
    const wa = document.createElement('a');
    wa.className = 'wa-float';
    wa.href = 'https://wa.me/59170000000?text=Hola,%20quiero%20consultar%20por%20El%20Cadillar%20Apart%20Hotel';
    wa.target = '_blank';
    wa.rel = 'noopener';
    wa.setAttribute('aria-label', 'Escríbanos por WhatsApp');
    wa.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.6 6.32A7.85 7.85 0 0 0 12.05 4a7.94 7.94 0 0 0-6.9 11.9L4 20l4.2-1.1a7.9 7.9 0 0 0 3.8.97h.01a7.94 7.94 0 0 0 5.6-13.55zM12.05 18.5a6.6 6.6 0 0 1-3.36-.92l-.24-.14-2.5.65.67-2.43-.16-.25a6.59 6.59 0 1 1 5.6 3.09zm3.62-4.94c-.2-.1-1.17-.58-1.35-.64s-.31-.1-.44.1-.5.64-.62.77-.23.15-.43.05a5.4 5.4 0 0 1-1.59-.98 6 6 0 0 1-1.1-1.37c-.11-.2 0-.3.09-.4l.3-.35c.1-.12.13-.2.2-.34a.37.37 0 0 0-.02-.35c-.05-.1-.44-1.07-.6-1.46-.16-.38-.32-.33-.44-.33h-.38a.72.72 0 0 0-.52.24 2.18 2.18 0 0 0-.68 1.62 3.79 3.79 0 0 0 .79 2 8.68 8.68 0 0 0 3.32 2.94c.46.2.83.32 1.11.41.47.15.9.13 1.23.08.38-.06 1.17-.48 1.33-.94s.17-.86.12-.94-.18-.14-.38-.24z"/></svg><span class="wa-float__label">WhatsApp</span>';
    floaters().appendChild(wa);
  }
})();
