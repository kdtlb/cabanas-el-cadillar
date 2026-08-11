/* Íconos SVG de trazo — reemplazan cualquier <span data-icon="nombre"></span> */
(function () {
  'use strict';
  const S = (p) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;

  const ICONS = {
    mountain:  S('<path d="M3 20l6-11 4 7 2.5-3.5L21 20z"/><circle cx="16.5" cy="6.5" r="1.4"/>'),
    flame:     S('<path d="M12 3c.6 2.4 2.4 3.6 3.4 5.1C16.5 9.9 17 11.4 17 13a5 5 0 0 1-10 0c0-1 .3-2 .9-2.8.4 1.3 1.3 1.8 2.1 2 .5-2.4-.6-4.6 0-6.2A6 6 0 0 1 12 3z"/>'),
    grape:     S('<path d="M12 4v3"/><path d="M15 4h1.5A1.5 1.5 0 0 1 18 5.5C18 6.3 17.3 7 16.5 7"/><circle cx="9" cy="11" r="2"/><circle cx="15" cy="11" r="2"/><circle cx="12" cy="14.5" r="2"/><circle cx="9" cy="18" r="2"/><circle cx="15" cy="18" r="2"/>'),
    leaf:      S('<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/>'),
    star:      S('<path d="M12 3l2.7 5.5 6 .9-4.35 4.2 1 6L12 16.8 6.65 19.6l1-6L3.3 9.4l6-.9z"/>'),
    pin:       S('<path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>'),
    phone:     S('<path d="M21 16.9v2.6a2 2 0 0 1-2.2 2 19.6 19.6 0 0 1-8.5-3 19.3 19.3 0 0 1-6-6 19.6 19.6 0 0 1-3-8.6A2 2 0 0 1 3.3 4h2.6a2 2 0 0 1 2 1.7c.12.9.35 1.8.67 2.7a2 2 0 0 1-.45 2.1L7 11.7a16 16 0 0 0 6 6l1.2-1.1a2 2 0 0 1 2.1-.45c.9.32 1.8.55 2.7.67a2 2 0 0 1 1.7 2z"/>'),
    mail:      S('<rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="M3.5 6.5 12 13l8.5-6.5"/>'),
    clock:     S('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.2 2"/>'),
    check:     S('<path d="M20 6.5 9.2 17.3 4 12"/>'),
    building:  S('<path d="M4 21V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v17"/><path d="M15 9h4a1 1 0 0 1 1 1v11"/><path d="M3 21h18"/><path d="M8 7h3M8 11h3M8 15h3"/>'),
    droplet:   S('<path d="M12 3.5c3 3.7 6 6.6 6 10a6 6 0 0 1-12 0c0-3.4 3-6.3 6-10z"/>'),
    plane:     S('<path d="M17.8 19.2 16 11l3.3-3.3c1.4-1.4 1.9-3 1.4-3.5s-2.1 0-3.5 1.4L14 8.8 5.8 7c-.4-.1-.8.1-1 .5l-.2.4c-.2.4-.1.9.3 1.2L9 12l-1.8 2.7H4.5L3.5 16l3 1.6L8 20.5l1.3-1v-2.7l2.7-1.8 2.8 4.4c.3.4.8.5 1.2.3l.4-.2c.4-.3.6-.7.5-1.1z"/>'),
    users:     S('<circle cx="9" cy="8" r="3"/><path d="M3.5 20a5.5 5.5 0 0 1 11 0"/><path d="M16 5.2a3 3 0 0 1 0 5.6"/><path d="M17.5 14.4A5.5 5.5 0 0 1 20.5 19.5"/>'),
    bed:       S('<path d="M3 20V6"/><path d="M3 12h15a3 3 0 0 1 3 3v5"/><path d="M3 16h18"/><path d="M7 12v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>'),
    ruler:     S('<rect x="3" y="8" width="18" height="8" rx="1" transform="rotate(0 12 12)"/><path d="M7 8v3M11 8v4M15 8v3M19 8v4"/>'),
    coin:      S('<circle cx="12" cy="12" r="9"/><path d="M12 7v10M9.5 9.2A2.2 2.2 0 0 1 12 8c1.4 0 2.3.8 2.3 1.7 0 2.3-4.6 1.5-4.6 3.8 0 1 1 1.7 2.3 1.7 1.1 0 1.9-.4 2.4-1.1"/>'),
    instagram: S('<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="3.6"/><circle cx="17.2" cy="6.8" r="0.6" fill="currentColor"/>'),
    facebook:  S('<path d="M15.5 3H13a4 4 0 0 0-4 4v2.5H6.5v3H9V21h3v-8.5h2.5l.5-3H12V7a1 1 0 0 1 1-1h2.5z"/>'),
    whatsapp:  S('<path d="M4 20l1.3-4A8 8 0 1 1 8 18.7z"/><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5.6 0 1-.5 1-.5l-1.4-1-1 .6c-1.2-.5-2-1.3-2.4-2.4l.6-1-1-1.4s-.5.4-.5 1z"/>'),
    tiktok:    S('<path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>'),
    airbnb:    S('<path d="M12 3c1 0 1.6.6 2.2 1.7 1.6 3 3.9 7.4 5 9.8.3.7.5 1.2.5 1.9a3.2 3.2 0 0 1-5.6 2.1c-.5-.5-.9-1.1-1.1-1.5-.2.4-.6 1-1.1 1.5A3.2 3.2 0 0 1 6.3 16.4c0-.7.2-1.2.5-1.9 1.1-2.4 3.4-6.8 5-9.8C10.4 3.6 11 3 12 3z"/>'),
    booking:   S('<rect x="3.5" y="3.5" width="17" height="17" rx="3.5"/><path d="M9.3 7.8h2.4a2 2 0 0 1 0 4H9.3zM9.3 11.8h2.9a2 2 0 0 1 0 4H9.3zM9.3 7.8v8"/>'),
    globe:     S('<circle cx="12" cy="12" r="9"/><path d="M3.2 9h17.6M3.2 15h17.6"/><path d="M12 3c2.4 2.4 3.5 5.7 3.5 9s-1.1 6.6-3.5 9c-2.4-2.4-3.5-5.7-3.5-9s1.1-6.6 3.5-9z"/>'),
    chevron:   S('<path d="M6 9l6 6 6-6"/>'),
    arrow:     S('<path d="M5 12h14M13 6l6 6-6 6"/>'),
    'arrow-left': S('<path d="M19 12H5M11 6l-6 6 6 6"/>'),
  };

  function apply(root) {
    (root || document).querySelectorAll('[data-icon]').forEach(el => {
      const name = el.getAttribute('data-icon');
      if (ICONS[name]) { el.innerHTML = ICONS[name]; el.classList.add('ico'); }
    });
  }

  window.CADICONS = ICONS;
  window.applyIcons = apply;
  if (document.readyState !== 'loading') apply();
  else document.addEventListener('DOMContentLoaded', () => apply());
})();
