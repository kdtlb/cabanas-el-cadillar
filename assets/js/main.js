/* Las Cabañas el Cadillar — interacciones */
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
      const head = document.createElement('div');
      head.className = 'nav__mobile__head';
      head.innerHTML = '<a href="index.html" class="nav__brand"><div class="nav__logo">C</div><div class="nav__name">Cadillar<span>Cabañas de Tarija</span></div></a><button class="nav__mobile__close" aria-label="Cerrar menú"><span></span><span></span></button>';
      const foot = document.createElement('div');
      foot.className = 'nav__mobile__foot';
      foot.innerHTML = '<span class="nav__mobile__foot-label">¿Consultas? Estamos para ayudarle</span><a class="btn btn--gold" href="https://wa.me/59170000000?text=Hola,%20quiero%20consultar%20por%20Las%20Caba%C3%B1as%20el%20Cadillar" target="_blank" rel="noopener">Escríbanos por WhatsApp</a>';
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

  /* ---- Año dinámico en footer ---- */
  document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });

  /* ---- Botón flotante de WhatsApp (en todas las páginas) ---- */
  if (!document.querySelector('.wa-float')) {
    const wa = document.createElement('a');
    wa.className = 'wa-float';
    wa.href = 'https://wa.me/59170000000?text=Hola,%20quiero%20consultar%20por%20Las%20Caba%C3%B1as%20el%20Cadillar';
    wa.target = '_blank';
    wa.rel = 'noopener';
    wa.setAttribute('aria-label', 'Escríbanos por WhatsApp');
    wa.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.6 6.32A7.85 7.85 0 0 0 12.05 4a7.94 7.94 0 0 0-6.9 11.9L4 20l4.2-1.1a7.9 7.9 0 0 0 3.8.97h.01a7.94 7.94 0 0 0 5.6-13.55zM12.05 18.5a6.6 6.6 0 0 1-3.36-.92l-.24-.14-2.5.65.67-2.43-.16-.25a6.59 6.59 0 1 1 5.6 3.09zm3.62-4.94c-.2-.1-1.17-.58-1.35-.64s-.31-.1-.44.1-.5.64-.62.77-.23.15-.43.05a5.4 5.4 0 0 1-1.59-.98 6 6 0 0 1-1.1-1.37c-.11-.2 0-.3.09-.4l.3-.35c.1-.12.13-.2.2-.34a.37.37 0 0 0-.02-.35c-.05-.1-.44-1.07-.6-1.46-.16-.38-.32-.33-.44-.33h-.38a.72.72 0 0 0-.52.24 2.18 2.18 0 0 0-.68 1.62 3.79 3.79 0 0 0 .79 2 8.68 8.68 0 0 0 3.32 2.94c.46.2.83.32 1.11.41.47.15.9.13 1.23.08.38-.06 1.17-.48 1.33-.94s.17-.86.12-.94-.18-.14-.38-.24z"/></svg>';
    document.body.appendChild(wa);
  }
})();
