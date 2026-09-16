/* El Cadillar Apart Hotel · interacción del sitio (JavaScript sin dependencias) */
(() => {
  'use strict';

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const behavior = reducedMotion ? 'auto' : 'smooth';
  const labels = document.body.dataset;

  const format = (template, values) =>
    template.replace(/\{(\w+)\}/g, (match, key) => (key in values ? String(values[key]) : match));
  const plural = (forms, n) => format(typeof forms === 'string' ? forms : n === 1 ? forms.one : forms.other, { n });

  /* ---------- Medición: envía eventos a GA4, GTM o Meta si están configurados ---------- */

  function track(action, detail = {}) {
    if (Array.isArray(window.dataLayer)) window.dataLayer.push({ event: `cadillar_${action}`, ...detail });
    if (typeof window.gtag === 'function') window.gtag('event', action, detail);
    if (typeof window.fbq === 'function' && /reservar|whatsapp|consulta/.test(action)) window.fbq('track', 'Contact', detail);
  }

  document.addEventListener('click', (event) => {
    const element = event.target.closest('[data-track]');
    if (element) track(element.dataset.track, { destino: element.getAttribute('href') || '' });
  });

  /* ---------- Encabezado y menú ---------- */

  const header = $('[data-header]');
  const nav = $('[data-nav]');
  const toggle = $('[data-nav-toggle]');
  const mobileBar = $('[data-mobile-bar]');

  if (header) {
    let lastY = window.scrollY;
    let ticking = false;
    const update = () => {
      const y = window.scrollY;
      header.classList.toggle('is-scrolled', y > 8);
      if (!header.classList.contains('is-open')) {
        if (y > 320 && y > lastY + 4) header.classList.add('is-hidden');
        else if (y < lastY - 4 || y <= 320) header.classList.remove('is-hidden');
      }
      lastY = y;
      ticking = false;
    };
    window.addEventListener(
      'scroll',
      () => {
        if (!ticking) {
          window.requestAnimationFrame(update);
          ticking = true;
        }
      },
      { passive: true },
    );
    header.addEventListener('focusin', () => header.classList.remove('is-hidden'));
    update();
  }

  if (header && nav && toggle) {
    const toggleLabel = $('[data-nav-toggle-label]', toggle);
    const setOpen = (open) => {
      header.classList.toggle('is-open', open);
      header.classList.remove('is-hidden');
      document.body.classList.toggle('menu-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      if (toggleLabel) toggleLabel.textContent = open ? toggle.dataset.labelClose : toggle.dataset.labelOpen;
      if (mobileBar) mobileBar.classList.toggle('is-hidden', open);
    };
    toggle.addEventListener('click', () => setOpen(!header.classList.contains('is-open')));
    nav.addEventListener('click', (event) => {
      if (event.target.closest('a')) setOpen(false);
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && header.classList.contains('is-open')) {
        setOpen(false);
        toggle.focus();
      }
    });
    window.matchMedia('(min-width: 75rem)').addEventListener('change', (event) => {
      if (event.matches) setOpen(false);
    });
  }

  /* ---------- Aparición progresiva ---------- */

  const revealables = $$('[data-reveal]');
  if (reducedMotion || !('IntersectionObserver' in window)) {
    revealables.forEach((element) => element.classList.add('is-visible'));
  } else if (revealables.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    );
    revealables.forEach((element) => observer.observe(element));
  }

  /* ---------- Filtros (cabañas por capacidad, fotos por espacio) ---------- */

  $$('[data-filter-bar]').forEach((bar) => {
    const target = document.getElementById(bar.dataset.filterBar);
    if (!target) return;
    const items = $$('[data-filter-item]', target);
    const buttons = $$('[data-filter-value]', bar);
    bar.addEventListener('click', (event) => {
      const button = event.target.closest('[data-filter-value]');
      if (!button) return;
      const value = button.dataset.filterValue;
      buttons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
      items.forEach((item) => {
        const tokens = (item.dataset.filter || '').split(/\s+/);
        item.classList.toggle('is-filtered-out', value !== 'all' && !tokens.includes(value));
      });
      if (target.matches('[data-carousel-track]')) target.scrollTo({ left: 0, behavior });
      target.dispatchEvent(new CustomEvent('filtered'));
      track('filtro', { valor: value });
    });
  });

  /* ---------- Carruseles ---------- */

  $$('[data-carousel]').forEach((carousel) => {
    const track = $('[data-carousel-track]', carousel);
    const previous = $('[data-carousel-prev]', carousel);
    const next = $('[data-carousel-next]', carousel);
    if (!track || !previous || !next) return;

    const step = () => {
      const item = Array.from(track.children).find((child) => child.getBoundingClientRect().width > 0);
      const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      return item ? item.getBoundingClientRect().width + gap : track.clientWidth;
    };
    const update = () => {
      previous.disabled = track.scrollLeft <= 2;
      next.disabled = track.scrollLeft >= track.scrollWidth - track.clientWidth - 2;
    };

    previous.addEventListener('click', () => track.scrollBy({ left: -step(), behavior }));
    next.addEventListener('click', () => track.scrollBy({ left: step(), behavior }));
    track.addEventListener('scroll', () => window.requestAnimationFrame(update), { passive: true });
    track.addEventListener('filtered', () => window.requestAnimationFrame(update));
    window.addEventListener('resize', update);
    update();
  });

  /* ---------- Visor de fotos ---------- */

  const photoLinks = $$('[data-lightbox]');
  if (photoLinks.length && typeof HTMLDialogElement === 'function') {
    const svg = (path) =>
      `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${path}</svg>`;
    const dialog = document.createElement('dialog');
    dialog.className = 'lightbox';
    dialog.innerHTML = `
      <div class="lightbox__bar">
        <p class="lightbox__counter" aria-live="polite"></p>
        <button class="lightbox__btn" type="button" data-close>${svg('<path d="M6 6l12 12M18 6 6 18"/>')}</button>
      </div>
      <div class="lightbox__stage">
        <button class="lightbox__btn lightbox__prev" type="button" data-prev>${svg('<path d="M19.5 12h-15M10.5 6l-6 6 6 6"/>')}</button>
        <picture class="lightbox__picture"><source type="image/avif"><img class="lightbox__img" alt=""></picture>
        <button class="lightbox__btn lightbox__next" type="button" data-next>${svg('<path d="M4.5 12h15M13.5 6l6 6-6 6"/>')}</button>
      </div>
      <p class="lightbox__caption"></p>`;
    dialog.setAttribute('aria-label', labels.labelViewer || '');
    $('[data-close]', dialog).setAttribute('aria-label', labels.labelClose || '');
    $('[data-prev]', dialog).setAttribute('aria-label', labels.labelPrevious || '');
    $('[data-next]', dialog).setAttribute('aria-label', labels.labelNext || '');
    document.body.append(dialog);

    const source = $('source', dialog);
    const image = $('img', dialog);
    const counter = $('.lightbox__counter', dialog);
    const caption = $('.lightbox__caption', dialog);
    let items = [];
    let index = 0;
    let opener = null;
    let swiped = false;

    const markLoaded = () => image.classList.add('is-loaded');
    image.addEventListener('load', markLoaded);
    image.addEventListener('error', markLoaded);

    const show = (position) => {
      index = (position + items.length) % items.length;
      const link = items[index];
      image.classList.remove('is-loaded');
      source.srcset = link.dataset.avif || '';
      image.src = link.getAttribute('href');
      image.alt = link.dataset.caption || '';
      caption.textContent = link.dataset.caption || '';
      counter.textContent = format(labels.labelCounter || '{current} / {total}', { current: index + 1, total: items.length });
      $('[data-prev]', dialog).hidden = items.length < 2;
      $('[data-next]', dialog).hidden = items.length < 2;
      window.requestAnimationFrame(() => {
        if (image.complete && image.naturalWidth) markLoaded();
      });
    };

    const open = (link) => {
      items = photoLinks.filter((item) => item.dataset.lightbox === link.dataset.lightbox && !item.closest('.is-filtered-out'));
      if (!items.length) return;
      opener = document.activeElement;
      show(Math.max(0, items.indexOf(link)));
      dialog.showModal();
      document.body.classList.add('lightbox-open');
      track('foto_ampliada', { grupo: link.dataset.lightbox });
    };

    const closeViewer = () => {
      if (dialog.open) dialog.close();
      document.body.classList.remove('lightbox-open');
      if (opener && typeof opener.focus === 'function') opener.focus();
      opener = null;
    };

    // Esc se resuelve de forma síncrona: no depende del evento asíncrono "close"
    dialog.addEventListener('cancel', (event) => {
      event.preventDefault();
      closeViewer();
    });
    dialog.addEventListener('close', () => document.body.classList.remove('lightbox-open'));

    document.addEventListener('click', (event) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target.closest('[data-lightbox]');
      if (link) {
        event.preventDefault();
        open(link);
        return;
      }
      const trigger = event.target.closest('[data-lightbox-open]');
      if (trigger) {
        const first = photoLinks.find((item) => item.dataset.lightbox === trigger.dataset.lightboxOpen);
        if (first) open(first);
      }
    });

    dialog.addEventListener('click', (event) => {
      if (swiped) {
        swiped = false;
        return;
      }
      if (event.target.closest('[data-close]')) closeViewer();
      else if (event.target.closest('[data-prev]')) show(index - 1);
      else if (event.target.closest('[data-next]')) show(index + 1);
      else if (event.target === dialog || event.target.classList.contains('lightbox__stage')) closeViewer();
    });

    dialog.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        show(index - 1);
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        show(index + 1);
      }
    });

    let startX = null;
    dialog.addEventListener('pointerdown', (event) => {
      startX = event.pointerType === 'mouse' ? null : event.clientX;
    });
    dialog.addEventListener('pointerup', (event) => {
      if (startX === null) return;
      const distance = event.clientX - startX;
      startX = null;
      if (Math.abs(distance) > 50 && items.length > 1) {
        swiped = true;
        show(index + (distance < 0 ? 1 : -1));
        window.setTimeout(() => {
          swiped = false;
        }, 350);
      }
    });
  }

  /* ---------- Formulario de reserva: arma la consulta y la abre en WhatsApp ---------- */

  const form = $('[data-booking-form]');
  const textsNode = $('#booking-texts');
  if (form && textsNode) {
    const texts = JSON.parse(textsNode.textContent);
    const field = (name) => form.elements.namedItem(name);
    const cabin = field('cabana');
    const checkIn = field('llegada');
    const checkOut = field('salida');
    const adults = field('adultos');
    const children = field('ninos');
    const nightsNode = $('[data-nights]', form);
    const capacityNode = $('[data-capacity-warning]', form);
    const dateNode = $('[data-date-error]', form);

    const iso = (date) => new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
    const toDate = (value) => (value ? new Date(`${value}T12:00:00`) : null);
    const humanDate = (value) => value.split('-').reverse().join('/');
    const count = (input) => Math.max(0, parseInt(input.value, 10) || 0);

    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    checkIn.min = iso(today);
    checkOut.min = iso(tomorrow);

    const preselected = new URLSearchParams(window.location.search).get('cabana');
    if (preselected && Array.from(cabin.options).some((option) => option.value === preselected)) cabin.value = preselected;

    const nights = () => {
      const start = toDate(checkIn.value);
      const end = toDate(checkOut.value);
      return start && end ? Math.round((end - start) / 86400000) : null;
    };

    const update = () => {
      if (checkIn.value) {
        const minimum = toDate(checkIn.value);
        minimum.setDate(minimum.getDate() + 1);
        checkOut.min = iso(minimum);
      }
      const total = nights();
      const invalidDates = total !== null && total < 1;
      dateNode.hidden = !invalidDates;
      dateNode.textContent = invalidDates ? texts.dateError : '';
      nightsNode.textContent = total > 0 ? plural(texts.nights, total) : '';

      const option = cabin.selectedOptions[0];
      const capacity = option && option.dataset.guests ? Number(option.dataset.guests) : null;
      const overCapacity = capacity !== null && count(adults) + count(children) > capacity;
      capacityNode.hidden = !overCapacity;
      capacityNode.textContent = overCapacity ? format(texts.capacityWarning, { name: option.dataset.name, n: capacity }) : '';
      return !invalidDates;
    };

    form.addEventListener('input', update);
    form.addEventListener('change', update);
    update();

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!update()) {
        checkOut.focus();
        return;
      }
      const message = texts.message;
      const option = cabin.selectedOptions[0];
      const total = nights();
      const lines = [message.intro, ''];

      lines.push(option && option.value ? format(message.cabin, { value: option.dataset.name }) : message.cabinAny);
      if (checkIn.value && checkOut.value && total > 0) {
        lines.push(format(message.dates, { checkIn: humanDate(checkIn.value), checkOut: humanDate(checkOut.value), nights: plural(texts.nights, total) }));
      } else if (checkIn.value) {
        lines.push(format(message.arrival, { value: humanDate(checkIn.value) }));
      }

      const people = [];
      if (count(adults)) people.push(plural(message.adults, count(adults)));
      if (count(children)) people.push(plural(message.children, count(children)));
      if (people.length) lines.push(format(message.guests, { value: people.join(', ') }));

      const name = field('nombre').value.trim();
      const origin = field('origen').value.trim();
      const note = field('mensaje').value.trim();
      if (name) lines.push(format(message.name, { value: name }));
      if (origin) lines.push(format(message.origin, { value: origin }));
      if (note) lines.push('', note);
      lines.push('', message.thanks);

      const url = `https://wa.me/${form.dataset.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`;
      track('consulta_whatsapp', { cabana: cabin.value || 'sin_preferencia', noches: total || 0, personas: count(adults) + count(children) });
      const opened = window.open(url, '_blank');
      if (opened) opened.opener = null;
      else window.location.href = url;
    });
  }
})();
