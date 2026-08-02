"use strict";

/*
FUNNEL IMAGE NAMING:
assets/images/funnels/[project-slug]/cover.webp
assets/images/funnels/[project-slug]/step-01.webp
assets/images/funnels/[project-slug]/step-02.webp
assets/images/funnels/[project-slug]/step-03.webp
assets/images/funnels/[project-slug]/step-04.webp
assets/images/funnels/[project-slug]/step-05.webp

Recommended step screenshot size: 1600 × 900 px, landscape orientation, WebP.
Recommended full-page screenshot width: 1440 px with natural page height, WebP.
Keep all filenames lowercase and use kebab-case.
*/

/*
VIDEO PLACEHOLDER NAMING:
assets/videos/funnels/[project-slug]-walkthrough.mp4

Examples:
assets/videos/funnels/brightsmile-dental-walkthrough.mp4
assets/videos/funnels/elite-realty-buyer-walkthrough.mp4

An external Loom or YouTube URL may be used instead.
*/

/*
LIVE FUNNEL URL PLACEHOLDERS

Replace each empty liveUrl value with the published URL of that complete funnel.

Examples:

Buyer Consultation Funnel:
https://yourdomain.com/buyer-consultation

Seller Consultation Funnel:
https://yourdomain.com/seller-consultation

Home Valuation Funnel:
https://yourdomain.com/home-valuation

Property Showing Funnel:
https://yourdomain.com/property-showing

Client Review Funnel:
https://yourdomain.com/client-review

Appointment Booking Funnel:
https://yourdomain.com/dental-booking

Patient Feedback Funnel:
https://yourdomain.com/patient-feedback

Keep liveUrl as an empty string until the actual funnel is published.
*/

const funnelProjects = [
  {
    "id": "elite-realty-buyer",
    "slug": "elite-realty-buyer",
    "title": "Buyer Consultation Funnel",
    "category": "Elite Realty CRM",
    "type": "Buyer Lead Consultation Funnel",
    "stepCount": 5,
    "description": "A five-step buyer consultation journey designed to collect contact details, buying timeframe, property preferences, financing status, and consultation preferences before an agent meeting.",
    "goal": "Qualify prospective buyers and organize their requirements before consultation.",
    "audience": "Real estate agents, brokerages, and buyer representatives.",
    "tools": [
      "GoHighLevel",
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "tags": [
      "Lead Qualification",
      "Consultation Booking",
      "Responsive Design",
      "CRM Integration"
    ],
    "coverImage": "https://assets.cdn.filesafe.space/6LJVbOy4V4hjoCRqMxVd/media/6a6133ba1dd882f807cc7bf6.png",
    "images": [
      "assets/images/funnels/elite-realty-buyer/step-01.webp",
      "assets/images/funnels/elite-realty-buyer/step-02.webp",
      "assets/images/funnels/elite-realty-buyer/step-03.webp",
      "assets/images/funnels/elite-realty-buyer/step-04.webp",
      "assets/images/funnels/elite-realty-buyer/step-05.webp"
    ],
    "imageAlts": [
      "Buyer Consultation Funnel introduction step",
      "Buyer property requirements step",
      "Buyer financing information step",
      "Buyer consultation preferences step",
      "Buyer Consultation Funnel confirmation step"
    ],
    "stepUrls": [
      "https://sites.leadconnectorhq.com/preview/P8icrqPDum0vsJjbDxRw",
      "https://sites.leadconnectorhq.com/preview/tlZZZDfVyCIgyt4UId5E",
      "https://sites.leadconnectorhq.com/preview/5oU4EavDqTQ2Cf6JyY9G",
      "https://sites.leadconnectorhq.com/preview/UrPgQdyQzeRY9PB9idk1",
      "https://sites.leadconnectorhq.com/preview/Rj37I3oGWcNBPnZYoQZV"
    ],
    "fullPageImage": "assets/images/funnels/elite-realty-buyer/full-page.webp",
    "fullPageAlt": "Complete full-page preview of the Buyer Consultation Funnel",
    "liveUrl": "",
    "walkthroughUrl": ""
  },
  {
    "id": "elite-realty-seller",
    "slug": "elite-realty-seller",
    "title": "Seller Consultation Funnel",
    "category": "Elite Realty CRM",
    "type": "Seller Lead Consultation Funnel",
    "stepCount": 5,
    "description": "A five-step seller consultation journey designed to collect property details, ownership information, selling timeframe, motivation, and meeting preferences.",
    "goal": "Prepare seller leads for a more focused property consultation.",
    "audience": "Listing agents, real estate teams, and brokerages.",
    "tools": [
      "GoHighLevel",
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "tags": [
      "Seller Intake",
      "Property Details",
      "Consultation Booking",
      "CRM Integration"
    ],
    "coverImage": "assets/images/funnels/elite-realty-seller/cover.webp",
    "images": [
      "assets/images/funnels/elite-realty-seller/step-01.webp",
      "assets/images/funnels/elite-realty-seller/step-02.webp",
      "assets/images/funnels/elite-realty-seller/step-03.webp",
      "assets/images/funnels/elite-realty-seller/step-04.webp",
      "assets/images/funnels/elite-realty-seller/step-05.webp"
    ],
    "imageAlts": [
      "Seller Consultation Funnel introduction step",
      "Seller property details step",
      "Seller ownership information step",
      "Seller timeline and motivation step",
      "Seller consultation preferences step"
    ],
    "stepUrls": [
      "https://sites.leadconnectorhq.com/preview/q1IYtcM5sFIIA07GUTxz",
      "https://sites.leadconnectorhq.com/preview/yyUEmN35YxpHIiWsqRGs",
      "https://sites.leadconnectorhq.com/preview/TfAuQbOWybsiF0LWQS26",
      "https://sites.leadconnectorhq.com/preview/MPuiQ3LJUVtwpvkJe8YM",
      "https://sites.leadconnectorhq.com/preview/iUMSZUGKOi4oE8Vc55f3"
    ],
    "fullPageImage": "assets/images/funnels/elite-realty-seller/full-page.webp",
    "fullPageAlt": "Complete full-page preview of the Seller Consultation Funnel",
    "liveUrl": "",
    "walkthroughUrl": ""
  },
  {
    "id": "elite-realty-home-valuation",
    "slug": "elite-realty-home-valuation",
    "title": "Home Valuation Funnel",
    "category": "Elite Realty CRM",
    "type": "Property Valuation Funnel",
    "stepCount": 4,
    "description": "A four-step property valuation funnel designed to collect the property address, ownership details, occupancy information, and the seller’s contact information.",
    "goal": "Generate and organize home valuation requests.",
    "audience": "Real estate agents, listing specialists, and brokerages.",
    "tools": [
      "GoHighLevel",
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "tags": [
      "Home Valuation",
      "Property Intake",
      "Lead Capture",
      "Responsive Design"
    ],
    "coverImage": "assets/images/funnels/elite-realty-home-valuation/cover.webp",
    "images": [
      "assets/images/funnels/elite-realty-home-valuation/step-01.webp",
      "assets/images/funnels/elite-realty-home-valuation/step-02.webp",
      "assets/images/funnels/elite-realty-home-valuation/step-03.webp",
      "assets/images/funnels/elite-realty-home-valuation/step-04.webp"
    ],
    "imageAlts": [
      "Home Valuation Funnel introduction step",
      "Property address and details step",
      "Ownership and occupancy step",
      "Home valuation contact information step"
    ],
    "stepUrls": [
      "https://sites.leadconnectorhq.com/preview/K3AIWHIazc2QUZnAaRus",
      "https://sites.leadconnectorhq.com/preview/91ESSNBPQ1mwjZfpM8IG",
      "https://sites.leadconnectorhq.com/preview/hERVNSOqmd1zsB64Dmj7",
      "https://sites.leadconnectorhq.com/preview/SSZHb8alcBVI9OcKV9SN"
    ],
    "fullPageImage": "assets/images/funnels/elite-realty-home-valuation/full-page.webp",
    "fullPageAlt": "Complete full-page preview of the Home Valuation Funnel",
    "liveUrl": "",
    "walkthroughUrl": ""
  },
  {
    "id": "elite-realty-property-showing",
    "slug": "elite-realty-property-showing",
    "title": "Property Showing Funnel",
    "category": "Elite Realty CRM",
    "type": "Property Showing Funnel",
    "stepCount": 3,
    "description": "A three-step appointment funnel designed to collect the visitor’s preferred property, contact details, and showing schedule.",
    "goal": "Make it easier for interested buyers to request a property viewing.",
    "audience": "Real estate agents and property sales teams.",
    "tools": [
      "GoHighLevel",
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "tags": [
      "Property Selection",
      "Showing Request",
      "Calendar Booking",
      "CRM Integration"
    ],
    "coverImage": "assets/images/funnels/elite-realty-property-showing/cover.webp",
    "images": [
      "assets/images/funnels/elite-realty-property-showing/step-01.webp",
      "assets/images/funnels/elite-realty-property-showing/step-02.webp",
      "assets/images/funnels/elite-realty-property-showing/step-03.webp"
    ],
    "imageAlts": [
      "Property Showing Funnel introduction step",
      "Property and contact details step",
      "Property showing schedule step"
    ],
    "stepUrls": [
      "https://sites.leadconnectorhq.com/preview/IruJzspij9zdJm5j1oWq",
      "https://sites.leadconnectorhq.com/preview/wC1bauvABX3vWbXAnyjx",
      "https://sites.leadconnectorhq.com/preview/yBaVnCimUaeKKL1yQcj7"
    ],
    "fullPageImage": "assets/images/funnels/elite-realty-property-showing/full-page.webp",
    "fullPageAlt": "Complete full-page preview of the Property Showing Funnel",
    "liveUrl": "",
    "walkthroughUrl": ""
  },
  {
    "id": "elite-realty-client-review",
    "slug": "elite-realty-client-review",
    "title": "Client Review Funnel",
    "category": "Elite Realty CRM",
    "type": "Client Feedback Funnel",
    "stepCount": 3,
    "description": "A three-step feedback journey designed to collect the client’s experience, review details, and permission for further follow-up.",
    "goal": "Collect organized client feedback after a completed real estate transaction.",
    "audience": "Real estate agents, teams, and brokerages.",
    "tools": [
      "GoHighLevel",
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "tags": [
      "Client Feedback",
      "Review Collection",
      "Follow-Up Permission",
      "Responsive Design"
    ],
    "coverImage": "assets/images/funnels/elite-realty-client-review/cover.webp",
    "images": [
      "assets/images/funnels/elite-realty-client-review/step-01.webp",
      "assets/images/funnels/elite-realty-client-review/step-02.webp",
      "assets/images/funnels/elite-realty-client-review/step-03.webp"
    ],
    "imageAlts": [
      "Client Review Funnel introduction step",
      "Client experience and review details step",
      "Client review confirmation step"
    ],
    "stepUrls": [
      "https://sites.leadconnectorhq.com/preview/8Ae6ky3TcyDNUIuQt8jm",
      "https://sites.leadconnectorhq.com/preview/m4ehudGqxGDdohjaJ7SH",
      "https://sites.leadconnectorhq.com/preview/NyhEnxkAk2rDldIzfG1K"
    ],
    "fullPageImage": "assets/images/funnels/elite-realty-client-review/full-page.webp",
    "fullPageAlt": "Complete full-page preview of the Client Review Funnel",
    "liveUrl": "",
    "walkthroughUrl": ""
  },
  {
    "id": "brightsmile-appointment-booking",
    "slug": "brightsmile-appointment-booking",
    "title": "Appointment Booking Funnel",
    "category": "BrightSmile Dental",
    "type": "Dental Appointment Funnel",
    "stepCount": 2,
    "description": "A two-step dental booking experience designed to help patients select an available service and continue to appointment confirmation.",
    "goal": "Create a clear and convenient patient-booking journey.",
    "audience": "Dental clinics and multi-provider practices.",
    "tools": [
      "GoHighLevel",
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "tags": [
      "Service Selection",
      "Appointment Booking",
      "Patient Journey",
      "Responsive Design"
    ],
    "coverImage": "assets/images/funnels/brightsmile-appointment-booking/cover.webp",
    "images": [
      "assets/images/funnels/brightsmile-appointment-booking/step-01.webp",
      "assets/images/funnels/brightsmile-appointment-booking/step-02.webp"
    ],
    "imageAlts": [
      "Appointment Booking Funnel service selection step",
      "Dental appointment confirmation step"
    ],
    "stepUrls": [
      "https://sites.leadconnectorhq.com/preview/0qKukur3k2iZEOdseael",
      "https://sites.leadconnectorhq.com/preview/44wcKJyJceiUa7LPvfpN"
    ],
    "fullPageImage": "assets/images/funnels/brightsmile-appointment-booking/full-page.webp",
    "fullPageAlt": "Complete full-page preview of the Appointment Booking Funnel",
    "liveUrl": "",
    "walkthroughUrl": ""
  },
  {
    "id": "brightsmile-patient-feedback",
    "slug": "brightsmile-patient-feedback",
    "title": "Patient Feedback Funnel",
    "category": "BrightSmile Dental",
    "type": "Patient Feedback Funnel",
    "stepCount": 2,
    "description": "A two-step patient feedback experience designed to collect service ratings, comments, and satisfaction information after a dental visit.",
    "goal": "Organize patient feedback and support service improvement.",
    "audience": "Dental clinics and healthcare practices.",
    "tools": [
      "GoHighLevel",
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "tags": [
      "Patient Feedback",
      "Service Rating",
      "Post-Visit Follow-Up",
      "Responsive Design"
    ],
    "coverImage": "assets/images/funnels/brightsmile-patient-feedback/cover.webp",
    "images": [
      "assets/images/funnels/brightsmile-patient-feedback/step-01.webp",
      "assets/images/funnels/brightsmile-patient-feedback/step-02.webp"
    ],
    "imageAlts": [
      "Patient Feedback Funnel rating and comments step",
      "Patient feedback confirmation step"
    ],
    "stepUrls": [
      "https://sites.leadconnectorhq.com/preview/jEcqkvgJbQ9Mq1aI9UC9",
      "https://sites.leadconnectorhq.com/preview/YC0by77Tt7BrUH519Ueg"
    ],
    "fullPageImage": "assets/images/funnels/brightsmile-patient-feedback/full-page.webp",
    "fullPageAlt": "Complete full-page preview of the Patient Feedback Funnel",
    "liveUrl": "",
    "walkthroughUrl": ""
  }
];

/* =============================================
   Application bootstrap
   ============================================= */
document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initRevealAnimations();
  initTypingEffect();
  initCounters();
  initCardEffects();
  initRippleEffects();
  initFunnelCarousel();
  initFunnelModal();
  initPlanSelection();
  initContactForm();
  initBackToTop();
});

/* =============================================
   Navigation: sticky state, mobile menu, scroll spy
   ============================================= */
function initNavigation() {
  const header = document.querySelector(".site-header");
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".primary-nav");
  if (!header || !menuButton || !navigation) return;

  const navLinks = [...document.querySelectorAll(".primary-nav a")];
  const trackedSections = navLinks.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);
  const updateHeader = () => header.classList.toggle("scrolled", window.scrollY > 24);
  const closeMenu = () => {
    navigation.classList.remove("open");
    menuButton.classList.remove("active");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
  };

  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    menuButton.classList.toggle("active", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });
  navLinks.forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeMenu(); });
  document.addEventListener("click", (event) => {
    if (!navigation.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
  });

  if ("IntersectionObserver" in window) {
    const spyObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
      });
    }, { rootMargin: "-36% 0px -56% 0px", threshold: 0 });
    trackedSections.forEach((section) => spyObserver.observe(section));
  }

  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();
}

/* =============================================
   Animations: viewport reveals
   ============================================= */
function initRevealAnimations() {
  const elements = document.querySelectorAll(".reveal");
  if (!elements.length) return;
  if (!("IntersectionObserver" in window) || prefersReducedMotion()) {
    elements.forEach((element) => element.classList.add("in-view"));
    return;
  }
  const observer = new IntersectionObserver((entries, revealObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("in-view");
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -45px" });
  elements.forEach((element) => observer.observe(element));
}

/* =============================================
   Hero: accessible typing treatment
   ============================================= */
function initTypingEffect() {
  const target = document.querySelector(".typing-text");
  if (!target || prefersReducedMotion()) return;
  const phrase = target.textContent.trim();
  let index = 0;
  target.textContent = "";
  const type = () => {
    target.textContent = phrase.slice(0, index);
    index += 1;
    if (index <= phrase.length) window.setTimeout(type, 42);
  };
  window.setTimeout(type, 450);
}

/* =============================================
   Counters: optional animated metrics
   ============================================= */
function initCounters() {
  const counters = document.querySelectorAll(".counter");
  if (!counters.length || !("IntersectionObserver" in window)) return;
  const observer = new IntersectionObserver((entries, counterObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    });
  }, { threshold: 0.8 });
  counters.forEach((counter) => observer.observe(counter));
}

function animateCounter(element) {
  const target = Number(element.dataset.target || 0);
  if (prefersReducedMotion()) { element.textContent = String(target); return; }
  const start = performance.now();
  const duration = 1100;
  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    element.textContent = String(Math.round(target * (1 - Math.pow(1 - progress, 3))));
    if (progress < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

/* =============================================
   Cards and media: glow, project actions, fallbacks
   ============================================= */
function initCardEffects() {
  document.querySelectorAll("[data-glow]").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
      card.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
    });
  });
  document.querySelectorAll(".play-button").forEach((button) => {
    button.addEventListener("click", () => button.closest(".project-card")?.querySelector(".project-content .button")?.click());
  });
  initImageFallbacks(document);
}

function initImageFallbacks(root) {
  root.querySelectorAll("[data-image-fallback]").forEach((wrapper) => {
    const image = wrapper.querySelector("img");
    if (!image || image.dataset.fallbackReady === "true") return;
    image.dataset.fallbackReady = "true";
    const showFallback = () => wrapper.classList.add("image-fallback");
    const showImage = () => wrapper.classList.remove("image-fallback");
    image.addEventListener("error", showFallback);
    image.addEventListener("load", showImage);
    if (image.complete) image.naturalWidth ? showImage() : showFallback();
  });
}

/* =============================================
   Buttons: reusable ripple interaction
   ============================================= */
function initRippleEffects() {
  document.querySelectorAll(".ripple").forEach((button) => {
    button.addEventListener("pointerdown", (event) => {
      const rect = button.getBoundingClientRect();
      const diameter = Math.max(rect.width, rect.height);
      const ripple = document.createElement("span");
      ripple.className = "ripple-wave";
      ripple.style.width = ripple.style.height = `${diameter}px`;
      ripple.style.left = `${event.clientX - rect.left - diameter / 2}px`;
      ripple.style.top = `${event.clientY - rect.top - diameter / 2}px`;
      button.querySelector(".ripple-wave")?.remove();
      button.appendChild(ripple);
      ripple.addEventListener("animationend", () => ripple.remove());
    });
  });
}

/* =============================================
   Funnel portfolio carousel
   ============================================= */
let funnelModalController = null;

function openFunnelModal(projectId, triggerElement = null) {
  funnelModalController?.open(projectId, triggerElement);
}

function initFunnelCarousel() {
  const viewport = document.querySelector(".funnel-carousel-viewport");
  const track = document.querySelector(".funnel-carousel-track");
  const previousButton = document.querySelector(".funnel-carousel-prev");
  const nextButton = document.querySelector(".funnel-carousel-next");
  if (!viewport || !track || !previousButton || !nextButton) return;

  let isPointerDown = false;
  let pointerId = null;
  let startX = 0;
  let startY = 0;
  let startScrollLeft = 0;
  let hasDragged = false;
  let suppressClick = false;
  let scrollFrame = 0;
  const dragThreshold = 8;

  const cardDistance = () => {
    const card = track.querySelector(".funnel-card");
    if (!card) return viewport.clientWidth * .8;
    const gap = Number.parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap || "0");
    return card.getBoundingClientRect().width + gap;
  };
  const updateControls = () => {
    const maxScroll = Math.max(0, viewport.scrollWidth - viewport.clientWidth);
    previousButton.disabled = viewport.scrollLeft <= 2;
    nextButton.disabled = viewport.scrollLeft >= maxScroll - 2;
  };
  const scrollByCards = (direction) => viewport.scrollBy({ left: direction * cardDistance() * 2, behavior: prefersReducedMotion() ? "auto" : "smooth" });
  const endPointerInteraction = (event) => {
    if (!isPointerDown || (event && pointerId !== event.pointerId)) return;
    const releasedPointerId = pointerId;
    isPointerDown = false;
    viewport.classList.remove("is-dragging");
    if (releasedPointerId !== null && viewport.hasPointerCapture?.(releasedPointerId)) {
      viewport.releasePointerCapture(releasedPointerId);
    }
    pointerId = null;
    suppressClick = hasDragged;
    updateControls();
    window.setTimeout(() => {
      hasDragged = false;
      suppressClick = false;
    }, 0);
  };

  viewport.addEventListener("pointerdown", (event) => {
    if (event.button !== 0 || event.target.closest(".funnel-carousel-button")) return;
    isPointerDown = true;
    pointerId = event.pointerId;
    startX = event.clientX;
    startY = event.clientY;
    startScrollLeft = viewport.scrollLeft;
    hasDragged = false;
    suppressClick = false;
  });
  viewport.addEventListener("pointermove", (event) => {
    if (!isPointerDown || pointerId !== event.pointerId) return;
    const movementX = event.clientX - startX;
    const movementY = event.clientY - startY;
    if (!hasDragged && Math.abs(movementX) > dragThreshold && Math.abs(movementX) > Math.abs(movementY)) {
      hasDragged = true;
      suppressClick = true;
      viewport.classList.add("is-dragging");
      viewport.setPointerCapture?.(pointerId);
    }
    if (!hasDragged) return;
    event.preventDefault();
    viewport.scrollLeft = startScrollLeft - movementX;
  });
  viewport.addEventListener("pointerup", endPointerInteraction);
  viewport.addEventListener("pointercancel", endPointerInteraction);
  viewport.addEventListener("lostpointercapture", (event) => {
    if (isPointerDown && event.pointerId === pointerId) endPointerInteraction(event);
  });
  track.addEventListener("dragstart", (event) => event.preventDefault());
  track.querySelectorAll(".funnel-card").forEach((card) => {
    card.addEventListener("click", (event) => {
      if (hasDragged || suppressClick) {
        event.preventDefault();
        return;
      }
      openFunnelModal(card.dataset.funnelId, card);
    });
  });
  viewport.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    scrollByCards(event.key === "ArrowLeft" ? -1 : 1);
  });
  previousButton.addEventListener("click", () => scrollByCards(-1));
  nextButton.addEventListener("click", () => scrollByCards(1));
  viewport.addEventListener("scroll", () => {
    cancelAnimationFrame(scrollFrame);
    scrollFrame = requestAnimationFrame(updateControls);
  }, { passive: true });
  window.addEventListener("resize", updateControls, { passive: true });
  updateControls();
}

/* =============================================
   Funnel project modal
   ============================================= */

/* =============================================
   Funnel project modal: accessible step gallery
   ============================================= */
function initFunnelModal() {
  const modal = document.querySelector(".funnel-modal");
  const dialog = modal?.querySelector(".funnel-modal-dialog");
  const closeButton = modal?.querySelector(".funnel-modal-close");
  const image = modal?.querySelector(".funnel-modal-image");
  const stage = modal?.querySelector(".funnel-modal-stage");
  const thumbnails = modal?.querySelector(".funnel-modal-thumbnails");
  const previousImageButton = modal?.querySelector(".funnel-modal-prev");
  const nextImageButton = modal?.querySelector(".funnel-modal-next");
  const counter = modal?.querySelector(".funnel-modal-counter");
  const gallery = modal?.querySelector(".funnel-modal-gallery");
  const fullPageButton = modal?.querySelector(".funnel-modal-full-page-button");
  const fullPageViewport = modal?.querySelector(".funnel-full-page-viewport");
  const fullPageImage = modal?.querySelector(".funnel-full-page-image");
  const liveLink = modal?.querySelector(".funnel-modal-live-link");
  const walkthroughLink = modal?.querySelector(".funnel-modal-walkthrough-link");
  const cta = modal?.querySelector(".funnel-modal-cta");
  if (!modal || !dialog || !closeButton || !image || !stage || !thumbnails || !previousImageButton || !nextImageButton || !counter || !gallery || !fullPageButton || !fullPageViewport || !fullPageImage || !liveLink || !walkthroughLink || !cta) return;

  let currentProject = null;
  let currentImageIndex = 0;
  let lastFocusedElement = null;
  let fullPageActive = false;
  let swipePointerId = null;
  let swipeStartX = 0;
  let swipeStartY = 0;
  const backgroundElements = [...document.querySelectorAll(".site-header, main, .site-footer, .back-to-top")];

  const setBackgroundInert = (isInert) => backgroundElements.forEach((element) => { element.inert = isInert; });
  const isValidExternalUrl = (value) => {
    try {
      const url = new URL(value);
      return url.protocol === "http:" || url.protocol === "https:";
    } catch {
      return false;
    }
  };
  const setOptionalLink = (link, url, label) => {
    const isValid = isValidExternalUrl(url);
    link.hidden = !isValid;
    if (isValid) {
      link.href = url;
      link.setAttribute("aria-label", label);
    } else {
      link.removeAttribute("href");
      link.removeAttribute("aria-label");
    }
  };
  const updateCurrentStepLinks = () => {
    if (!currentProject) return;
    const stepUrl = currentProject.stepUrls?.[currentImageIndex] || currentProject.liveUrl || "";
    const label = `Open step ${currentImageIndex + 1} of the ${currentProject.title} in a new tab`;
    setOptionalLink(fullPageButton, stepUrl, label);
    setOptionalLink(liveLink, stepUrl, label);
  };
  const updateGallery = (index, focusThumbnail = false) => {
    if (!currentProject || fullPageActive) return;
    currentImageIndex = Math.max(0, Math.min(index, currentProject.images.length - 1));
    stage.classList.add("is-changing");
    stage.classList.remove("image-fallback");
    image.alt = currentProject.imageAlts[currentImageIndex];
    image.src = currentProject.images[currentImageIndex];
    modal.querySelector(".funnel-modal-fallback-initials").textContent = getInitials(currentProject.title);
    modal.querySelector(".funnel-modal-fallback-title").textContent = currentProject.title;
    modal.querySelector(".funnel-modal-fallback-step").textContent = `Step ${currentImageIndex + 1} · Replace funnel screenshot`;
    counter.textContent = `${currentImageIndex + 1} / ${currentProject.stepCount}`;
    thumbnails.querySelectorAll(".funnel-modal-thumbnail").forEach((button, buttonIndex) => {
      const selected = buttonIndex === currentImageIndex;
      button.setAttribute("aria-selected", String(selected));
      button.tabIndex = selected ? 0 : -1;
      if (selected && focusThumbnail) button.focus();
    });
    previousImageButton.disabled = currentImageIndex === 0;
    nextImageButton.disabled = currentImageIndex === currentProject.images.length - 1;
    updateCurrentStepLinks();
    window.setTimeout(() => stage.classList.remove("is-changing"), prefersReducedMotion() ? 0 : 160);
  };
  const renderThumbnails = () => {
    thumbnails.replaceChildren();
    currentProject.images.forEach((src, index) => {
      const button = document.createElement("button");
      const thumbnail = document.createElement("img");
      button.type = "button";
      button.className = "funnel-modal-thumbnail";
      button.dataset.stepLabel = String(index + 1).padStart(2, "0");
      button.setAttribute("role", "tab");
      button.setAttribute("aria-label", `Show funnel step ${index + 1}`);
      thumbnail.src = src;
      thumbnail.alt = "";
      thumbnail.loading = "lazy";
      thumbnail.addEventListener("error", () => {
        thumbnail.hidden = true;
        button.classList.add("image-fallback");
      });
      button.appendChild(thumbnail);
      button.addEventListener("click", () => updateGallery(index));
      thumbnails.appendChild(button);
    });
  };
  const openModal = (projectId, trigger) => {
    const project = funnelProjects.find((item) => item.id === projectId);
    if (!project) return;
    currentProject = project;
    currentImageIndex = 0;
    lastFocusedElement = trigger || document.activeElement;
    fullPageActive = false;
    gallery.classList.remove("funnel-full-page-active");
    fullPageViewport.hidden = true;
    fullPageButton.hidden = true;
    fullPageButton.removeAttribute("href");
    modal.querySelector(".funnel-modal-category").textContent = project.category;
    modal.querySelector(".funnel-modal-title").textContent = project.title;
    modal.querySelector(".funnel-modal-type").textContent = `${project.type} · ${project.stepCount} steps`;
    modal.querySelector(".funnel-modal-description").textContent = project.description;
    modal.querySelector('[data-funnel-fact="goal"]').textContent = project.goal;
    modal.querySelector('[data-funnel-fact="audience"]').textContent = project.audience;
    modal.querySelector('[data-funnel-fact="steps"]').textContent = `${project.stepCount} steps`;
    modal.querySelector('[data-funnel-fact="tools"]').textContent = project.tools.join(", ");
    const tags = modal.querySelector(".funnel-modal-tags");
    tags.replaceChildren(...project.tags.map((tag) => Object.assign(document.createElement("span"), { textContent: tag })));
    setOptionalLink(walkthroughLink, project.walkthroughUrl, `Watch the ${project.title} walkthrough in a new tab`);
    renderThumbnails();
    updateGallery(0);
    modal.hidden = false;
    document.body.classList.add("modal-open");
    setBackgroundInert(true);
    window.requestAnimationFrame(() => closeButton.focus());
  };
  const closeModal = ({ returnFocus = true } = {}) => {
    if (modal.hidden) return;
    modal.hidden = true;
    document.body.classList.remove("modal-open");
    setBackgroundInert(false);
    image.removeAttribute("src");
    fullPageImage.removeAttribute("src");
    gallery.classList.remove("funnel-full-page-active");
    fullPageViewport.hidden = true;
    fullPageActive = false;
    if (returnFocus && lastFocusedElement?.isConnected) lastFocusedElement.focus();
    currentProject = null;
  };
  const changeImage = (direction) => {
    if (!currentProject || fullPageActive) return;
    updateGallery(currentImageIndex + direction);
  };
  const trapFocus = (event) => {
    const focusable = [...dialog.querySelectorAll('button:not([disabled]), a[href]:not([hidden]), [tabindex]:not([tabindex="-1"])')]
      .filter((element) => !element.hidden && element.offsetParent !== null);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  funnelModalController = { open: openModal };
  image.addEventListener("load", () => stage.classList.remove("image-fallback"));
  image.addEventListener("error", () => stage.classList.add("image-fallback"));
  fullPageImage.addEventListener("load", () => fullPageViewport.classList.remove("image-fallback"));
  fullPageImage.addEventListener("error", () => fullPageViewport.classList.add("image-fallback"));
  closeButton.addEventListener("click", () => closeModal());
  modal.querySelector(".funnel-modal-backdrop").addEventListener("click", () => closeModal());
  previousImageButton.addEventListener("click", () => changeImage(-1));
  nextImageButton.addEventListener("click", () => changeImage(1));
  stage.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "mouse" || fullPageActive) return;
    swipePointerId = event.pointerId;
    swipeStartX = event.clientX;
    swipeStartY = event.clientY;
    stage.setPointerCapture?.(event.pointerId);
  });
  stage.addEventListener("pointerup", (event) => {
    if (event.pointerId !== swipePointerId) return;
    const movementX = event.clientX - swipeStartX;
    const movementY = event.clientY - swipeStartY;
    if (Math.abs(movementX) > 45 && Math.abs(movementX) > Math.abs(movementY)) changeImage(movementX < 0 ? 1 : -1);
    if (stage.hasPointerCapture?.(event.pointerId)) stage.releasePointerCapture(event.pointerId);
    swipePointerId = null;
  });
  stage.addEventListener("pointercancel", () => { swipePointerId = null; });
  cta.addEventListener("click", (event) => {
    event.preventDefault();
    closeModal({ returnFocus: false });
    document.querySelector("#connect")?.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth" });
  });
  document.addEventListener("keydown", (event) => {
    if (modal.hidden) return;
    if (event.key === "Escape") {
      event.preventDefault();
      closeModal();
    } else if (!fullPageActive && event.key === "ArrowLeft" && !previousImageButton.disabled) {
      event.preventDefault();
      changeImage(-1);
    } else if (!fullPageActive && event.key === "ArrowRight" && !nextImageButton.disabled) {
      event.preventDefault();
      changeImage(1);
    } else if (event.key === "Tab") {
      trapFocus(event);
    }
  });
}

/* =============================================
   Contact form: client-side validation and feedback
   ============================================= */
function initContactForm() {
  const form = document.querySelector("#contact-form");
  if (!form) return;
  const fields = [...form.querySelectorAll("input, select, textarea")];
  fields.forEach((field) => {
    field.addEventListener("blur", () => validateField(field));
    field.addEventListener("input", () => { if (field.classList.contains("invalid")) validateField(field); });
  });
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const isValid = fields.every(validateField);
    const message = form.querySelector(".form-message");
    if (!message) return;
    if (!isValid) {
      message.textContent = "Please review the highlighted fields before sending.";
      message.style.color = "#a83c3a";
      form.querySelector(".invalid")?.focus();
      return;
    }
    const submitButton = form.querySelector(".form-submit");
    if (!submitButton) return;
    const originalLabel = submitButton.innerHTML;
    submitButton.disabled = true;
    submitButton.innerHTML = "Inquiry Ready <span>✓</span>";
    message.style.color = "#4a8453";
    message.textContent = "Thanks! This demo form is validated and ready to connect to your preferred inbox or CRM.";
    form.reset();
    window.setTimeout(() => { submitButton.disabled = false; submitButton.innerHTML = originalLabel; }, 2600);
  });
}

/* =============================================
   Service plans: preselect the relevant inquiry
   ============================================= */
function initPlanSelection() {
  const planButtons = [...document.querySelectorAll("#plans [data-plan]")];
  const form = document.querySelector("#contact-form");
  if (!planButtons.length || !form) return;

  const serviceSelect = form.querySelector('select[name="service"]');
  const messageField = form.querySelector('textarea[name="message"]');
  if (!serviceSelect || !messageField) return;

  const serviceByPlan = {
    "High-Converting Landing Page": "Funnel Design",
    "Lead Generation System": "Funnel + CRM Setup",
    "Client Journey System": "Funnel + CRM Setup"
  };

  planButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const planName = button.dataset.plan;
      const serviceName = serviceByPlan[planName];
      const matchingOption = [...serviceSelect.options].some((option) => option.value === serviceName);

      if (matchingOption) {
        serviceSelect.value = serviceName;
        serviceSelect.dispatchEvent(new Event("input", { bubbles: true }));
        serviceSelect.dispatchEvent(new Event("change", { bubbles: true }));
      }

      if (!messageField.value.trim()) {
        messageField.value = `I’m interested in the ${planName} plan.`;
        messageField.dispatchEvent(new Event("input", { bubbles: true }));
      }
    });
  });
}

function validateField(field) {
  if (!field.required) return true;
  const error = field.parentElement.querySelector(".field-error");
  let message = "";
  if (!field.value.trim()) message = "This field is required.";
  else if (field.type === "email" && !isValidEmail(field.value)) message = "Enter a valid email address.";
  else if (field.name === "message" && field.value.trim().length < 12) message = "Please add a little more detail (12 characters minimum).";
  field.classList.toggle("invalid", Boolean(message));
  field.setAttribute("aria-invalid", String(Boolean(message)));
  if (error) error.textContent = message;
  return !message;
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

/* =============================================
   Utilities
   ============================================= */
function initBackToTop() {
  const button = document.querySelector(".back-to-top");
  if (!button) return;
  const update = () => button.classList.toggle("visible", window.scrollY > 700);
  button.addEventListener("click", () => window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" }));
  window.addEventListener("scroll", update, { passive: true });
  update();
}

function createFunnelImages(slug, count) {
  return Array.from({ length: count }, (_, index) => `assets/images/funnels/${slug}/step-${String(index + 1).padStart(2, "0")}.webp`);
}

function getInitials(value) {
  return value.split(/\s+/).filter(Boolean).slice(0, 2).map((word) => word[0]).join("").toUpperCase();
}

function isValidWalkthroughUrl(url) {
  return typeof url === "string" && /^(https?:\/\/|assets\/videos\/)/.test(url);
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
