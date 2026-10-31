/* Persistent page views. Hash routing also works when opened with file://. */
(() => {
  'use strict';
  const pages = {
    websites: ["Websites | Pat Badiola", "Explore websites built by Pat Badiola."],
    home: ['Pat Badiola | CRM & Automation Architect', 'Turn more leads into customers with websites, booking pages, and automated follow-ups. Built by Pat Badiola, HighLevel Certified Admin.'],
    automations: ['Automations | Pat Badiola', 'Explore demonstration builds for lead follow-ups, appointment reminders, bookings, and customer management.'],
    funnels: ['Funnels | Pat Badiola', 'Explore complete landing, booking, application, and feedback funnels built by Pat Badiola.'],
    about: ['About | Pat Badiola', 'Meet Pat Badiola, a Philippines-based CRM and Automation Architect working remotely with businesses and teams.'],
    contact: ['Contact | Pat Badiola', 'Tell Pat Badiola what is not working in your CRM or business process. Connect by email or WhatsApp for a systems consultation.']
  };
  const main = document.querySelector('main');
  const views = [...document.querySelectorAll('[data-page-view]')];
  const navigation = document.querySelector('.primary-nav');
  const menuButton = document.querySelector('.menu-toggle');
  const footer = document.querySelector('.site-footer');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let currentPage = null;
  let requestedPage = null;
  let transitionId = 0;
  let activeAnimation;
  let keyboardNavigation = false;
  const template = document.querySelector('#consultation-cta-template');
  document.querySelectorAll('[data-consultation-cta]').forEach(slot => slot.append(template.content.cloneNode(true)));

  function route() {
    let hash;
    try { hash = decodeURIComponent(location.hash.slice(1)); } catch { hash = ''; }
    const base = hash.split('/')[0] || 'home';
    // Old standalone sections are intentionally retired, not new page views.
    if (!pages[base]) {
      history.replaceState(null, '', '#home');
      return 'home';
    }
    return base;
  }

  function closeMenu({ focus = false } = {}) {
    if (!navigation.classList.contains('open')) return;
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    document.body.classList.remove('navigation-open');
    main.inert = false;
    footer.inert = false;
    document.querySelector('.floating-whatsapp').inert = false;
    if (focus) menuButton.focus();
  }

  function updateMetadata(page) {
    const [title, description] = pages[page];
    document.title = title;
    document.querySelector('meta[name="description"]').content = description;
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    document.querySelectorAll('.primary-nav a, .site-footer nav a').forEach(link => {
      const active = link.hash === `#${page}`;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
    document.body.dataset.page = page;
  }

  async function showPage({ initial = false } = {}) {
    const page = route();
    closeMenu();
    updateMetadata(page);
    if (page === requestedPage) return;
    requestedPage = page;
    const token = ++transitionId;
    activeAnimation?.cancel();
    if (page === currentPage) { main.removeAttribute('aria-busy'); return; }
    const animate = !initial && !reduced.matches && !keyboardNavigation;
    keyboardNavigation = false;
    if (!initial) window.dispatchEvent(new CustomEvent('portfolio:before-route'));
    main.setAttribute('aria-busy', 'true');
    if (animate && currentPage) {
      activeAnimation = main.animate([{ opacity: 1, transform: 'translateY(0)' }, { opacity: 0, transform: 'translateY(6px)' }], { duration: 90, easing: 'ease-out', fill: 'forwards' });
      await activeAnimation.finished.catch(() => {});
      if (token !== transitionId) return;
    }
    views.forEach(view => { view.hidden = view.dataset.pageView !== page; });
    currentPage = page;
    activeAnimation?.cancel();
    main.removeAttribute('aria-busy');
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    // Focus belongs to the new content as soon as it is available, not after paint.
    if (!location.hash.includes('/')) {
      const heading = views.find(view => !view.hidden)?.querySelector('h1');
      heading?.setAttribute('tabindex', '-1');
      heading?.focus({ preventScroll: true });
    }
    window.dispatchEvent(new CustomEvent('portfolio:routechange', { detail: { page } }));
    window.dispatchEvent(new Event('resize'));
    if (animate) {
      activeAnimation = main.animate([{ opacity: 0, transform: 'translateY(8px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 170, easing: 'cubic-bezier(.23,1,.32,1)' });
      await activeAnimation.finished.catch(() => {});
      if (token !== transitionId) return;
    }
    main.removeAttribute('aria-busy');
  }

  function navigate(hash, { keyboard = false } = {}) {
    keyboardNavigation = keyboard;
    if (location.hash !== hash) history.pushState(null, '', hash);
    // Keep the existing business/file deep-link controller in sync.
    window.dispatchEvent(new HashChangeEvent('hashchange'));
  }
  window.portfolioRouter = { navigate };
  document.addEventListener('click', event => {
    const link = event.target.closest('a[href^="#"]');
    if (!link || event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const hash = link.getAttribute('href');
    if (hash === '#main-content') return;
    event.preventDefault();
    navigate(hash, { keyboard: event.detail === 0 });
  });
  menuButton.addEventListener('click', () => {
    if (navigation.classList.contains('open')) return closeMenu();
    navigation.classList.add('open');
    menuButton.setAttribute('aria-expanded', 'true');
    menuButton.setAttribute('aria-label', 'Close navigation');
    document.body.classList.add('navigation-open');
    main.inert = true;
    footer.inert = true;
    document.querySelector('.floating-whatsapp').inert = true;
    navigation.querySelector('a').focus();
  });
  document.addEventListener('keydown', event => {
    if (!navigation.classList.contains('open')) return;
    if (event.key === 'Escape') { event.preventDefault(); closeMenu({ focus: true }); }
    if (event.key === 'Tab') {
      const controls = [menuButton, ...navigation.querySelectorAll('a')];
      const index = controls.indexOf(document.activeElement);
      if (event.shiftKey && index === 0) { event.preventDefault(); controls.at(-1).focus(); }
      else if (!event.shiftKey && index === controls.length - 1) { event.preventDefault(); menuButton.focus(); }
    }
  });
  document.addEventListener('pointerdown', event => {
    if (!navigation.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
  });
  matchMedia('(min-width: 961px)').addEventListener('change', event => { if (event.matches) closeMenu(); });
  window.addEventListener('hashchange', () => showPage());
  window.addEventListener('popstate', () => showPage());
  history.scrollRestoration = 'manual';
  showPage({ initial: true });
})();
