"use strict";

// This ticker is explicitly requested to autoplay; its pause control stays available.
(() => {
  const strip = document.querySelector(".capability-strip");
  if (!strip) return;
  const track = strip.querySelector('.capability-strip__track');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  strip.dataset.tickerEngine = 'waapi';
  const animation = track.animate([
    { transform: 'translate3d(0,0,0)' },
    { transform: 'translate3d(-50%,0,0)' }
  ], { duration: 24000, iterations: Infinity, easing: 'linear' });
  const button = document.createElement("button");
  button.className = "ticker-toggle";
  button.type = "button";
  const setPlaying = (playing) => {
    playing ? animation.play() : animation.pause();
    strip.dataset.playing = String(playing);
    button.textContent = playing ? "Pause" : "Play";
    button.setAttribute("aria-label", playing ? "Pause capabilities ticker" : "Play capabilities ticker");
  };
  button.addEventListener("click", () => setPlaying(strip.dataset.playing !== "true"));
  strip.append(button);
  setPlaying(!reducedMotion.matches);
  reducedMotion.addEventListener('change', () => setPlaying(!reducedMotion.matches));
})();

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
CURRENT FUNNEL PROJECT SLUGS:
elite-realty-buyer
elite-realty-seller
elite-realty-home-valuation
elite-realty-property-showing
elite-realty-client-review
brightsmile-appointment-booking
brightsmile-patient-feedback
elevate-coaching-application
elevate-lead-magnet
elevate-program-feedback

WALKTHROUGH THUMBNAIL NAMING:
assets/images/video-walkthroughs/[project-slug]-walkthrough-thumbnail.webp

Elevate Academy thumbnails currently use:
assets/images/video-walkthroughs/elevate-academy/[project-slug]-walkthrough-thumbnail.webp

Recommended thumbnail size: 1600 x 1000 px, WebP, 16:10 ratio.
*/

/*
LOCAL FUNNEL PAGE PATHS

Each step screenshot now opens a permanent local HTML page instead of an
expiring GoHighLevel preview URL. Replace the placeholder index.html inside
each matching funnels/[project-slug]/step-XX/ directory with the completed
hard-coded funnel page. Keep the directory names unchanged so the portfolio
modal and the Previous/Next links continue to work after deployment.
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
"coverImage": "assets/images/funnels/elite-realty-buyer/cover.webp",
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
      "funnels/elite-realty-buyer/step-01/index.html",
      "funnels/elite-realty-buyer/step-02/index.html",
      "funnels/elite-realty-buyer/step-03/index.html",
      "funnels/elite-realty-buyer/step-04/index.html",
      "funnels/elite-realty-buyer/step-05/index.html"
    ],
    "fullPageImage": "assets/images/funnels/elite-realty-buyer/full-page.webp",
    "fullPageAlt": "Complete full-page preview of the Buyer Consultation Funnel",
    "liveUrl": "funnels/elite-realty-buyer/step-01/index.html",
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
      "funnels/elite-realty-seller/step-01/index.html",
      "funnels/elite-realty-seller/step-02/index.html",
      "funnels/elite-realty-seller/step-03/index.html",
      "funnels/elite-realty-seller/step-04/index.html",
      "funnels/elite-realty-seller/step-05/index.html"
    ],
    "fullPageImage": "assets/images/funnels/elite-realty-seller/full-page.webp",
    "fullPageAlt": "Complete full-page preview of the Seller Consultation Funnel",
    "liveUrl": "funnels/elite-realty-seller/step-01/index.html",
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
      "funnels/elite-realty-home-valuation/step-01/index.html",
      "funnels/elite-realty-home-valuation/step-02/index.html",
      "funnels/elite-realty-home-valuation/step-03/index.html",
      "funnels/elite-realty-home-valuation/step-04/index.html"
    ],
    "fullPageImage": "assets/images/funnels/elite-realty-home-valuation/full-page.webp",
    "fullPageAlt": "Complete full-page preview of the Home Valuation Funnel",
    "liveUrl": "funnels/elite-realty-home-valuation/step-01/index.html",
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
      "funnels/elite-realty-property-showing/step-01/index.html",
      "funnels/elite-realty-property-showing/step-02/index.html",
      "funnels/elite-realty-property-showing/step-03/index.html"
    ],
    "fullPageImage": "assets/images/funnels/elite-realty-property-showing/full-page.webp",
    "fullPageAlt": "Complete full-page preview of the Property Showing Funnel",
    "liveUrl": "funnels/elite-realty-property-showing/step-01/index.html",
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
      "funnels/elite-realty-client-review/step-01/index.html",
      "funnels/elite-realty-client-review/step-02/index.html",
      "funnels/elite-realty-client-review/step-03/index.html"
    ],
    "fullPageImage": "assets/images/funnels/elite-realty-client-review/full-page.webp",
    "fullPageAlt": "Complete full-page preview of the Client Review Funnel",
    "liveUrl": "funnels/elite-realty-client-review/step-01/index.html",
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
      "funnels/brightsmile-appointment-booking/step-01/index.html",
      "funnels/brightsmile-appointment-booking/step-02/index.html"
    ],
    "fullPageImage": "assets/images/funnels/brightsmile-appointment-booking/full-page.webp",
    "fullPageAlt": "Complete full-page preview of the Appointment Booking Funnel",
    "liveUrl": "funnels/brightsmile-appointment-booking/step-01/index.html",
    "walkthroughUrl": "assets/videos/funnels/brightsmile-dental-walkthrough.mp4"
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
      "funnels/brightsmile-patient-feedback/step-01/index.html",
      "funnels/brightsmile-patient-feedback/step-02/index.html"
    ],
    "fullPageImage": "assets/images/funnels/brightsmile-patient-feedback/full-page.webp",
    "fullPageAlt": "Complete full-page preview of the Patient Feedback Funnel",
    "liveUrl": "funnels/brightsmile-patient-feedback/step-01/index.html",
    "walkthroughUrl": ""
  },
  {
    "id": "elevate-coaching-application",
    "slug": "elevate-coaching-application",
    "title": "Coaching Application Funnel",
    "category": "Elevate Academy · Fictional Project",
    "type": "Application & Discovery Call System",
    "stepCount": 3,
    "description": "A three-step coaching application funnel that helps prospects compare coaching options, submit a detailed application, and book a discovery call through a connected GoHighLevel calendar.",
    "goal": "Capture qualified coaching applications and guide suitable prospects toward a discovery call.",
    "audience": "Online coaches, consultants, and education businesses.",
    "tools": ["GoHighLevel", "HTML", "CSS", "JavaScript"],
    "tags": ["Application Survey", "Discovery Call", "Calendar Booking", "CRM Automation"],
    "coverImage": "assets/images/funnels/elevate-coaching-application/cover.webp",
    "images": [
      "assets/images/funnels/elevate-coaching-application/step-01.webp",
      "assets/images/funnels/elevate-coaching-application/step-02.webp",
      "assets/images/funnels/elevate-coaching-application/step-03.webp"
    ],
    "imageAlts": [
      "Elevate Academy Coaching Application step",
      "Elevate Academy Application Confirmation step",
      "Elevate Academy Discovery Call Booking step"
    ],
    "stepUrls": [
      "funnels/elevate-coaching-application/step-01/index.html",
      "funnels/elevate-coaching-application/step-02/index.html",
      "funnels/elevate-coaching-application/step-03/index.html"
    ],
    "fullPageImage": "assets/images/funnels/elevate-coaching-application/full-page.webp",
    "fullPageAlt": "Complete full-page preview of the Coaching Application Funnel",
    "liveUrl": "funnels/elevate-coaching-application/step-01/index.html",
    "walkthroughUrl": ""
  },
  {
    "id": "elevate-lead-magnet",
    "slug": "elevate-lead-magnet",
    "title": "Lead Magnet Funnel",
    "category": "Elevate Academy · Fictional Project",
    "type": "Lead Capture & Nurture System",
    "stepCount": 3,
    "description": "A three-step lead magnet funnel designed to attract coaching prospects, capture their contact information in exchange for a practical resource, and guide new leads toward the most relevant Elevate Academy program or next step.",
    "goal": "Turn resource interest into organized leads and begin a clear nurture journey inside the CRM.",
    "audience": "Coaches, course creators, and online education businesses building an audience.",
    "tools": ["GoHighLevel", "HTML", "CSS", "JavaScript"],
    "tags": ["Lead Magnet", "Lead Capture", "Resource Delivery", "Email Nurture"],
    "coverImage": "assets/images/funnels/elevate-lead-magnet/cover.webp",
    "images": [
      "assets/images/funnels/elevate-lead-magnet/step-01.webp",
      "assets/images/funnels/elevate-lead-magnet/step-02.webp",
      "assets/images/funnels/elevate-lead-magnet/step-03.webp"
    ],
    "imageAlts": [
      "Elevate Academy Lead Magnet Landing Page step",
      "Elevate Academy Resource Request Confirmation step",
      "Elevate Academy Resource Access and Next Steps page"
    ],
    "stepUrls": [
      "funnels/elevate-lead-magnet/step-01/index.html",
      "funnels/elevate-lead-magnet/step-02/index.html",
      "funnels/elevate-lead-magnet/step-03/index.html"
    ],
    "fullPageImage": "assets/images/funnels/elevate-lead-magnet/full-page.webp",
    "fullPageAlt": "Complete full-page preview of the Lead Magnet Funnel",
    "liveUrl": "funnels/elevate-lead-magnet/step-01/index.html",
    "walkthroughUrl": ""
  },
  {
    "id": "elevate-program-feedback",
    "slug": "elevate-program-feedback",
    "title": "Program Feedback Funnel",
    "category": "Elevate Academy · Fictional Project",
    "type": "Feedback & Improvement System",
    "stepCount": 2,
    "description": "A two-step post-program funnel that collects structured participant feedback, records satisfaction and improvement insights, and confirms successful submission.",
    "goal": "Collect organized participant feedback and improvement insights after program completion.",
    "audience": "Coaches, course creators, and online education teams.",
    "tools": ["GoHighLevel", "HTML", "CSS", "JavaScript"],
    "tags": ["Program Feedback", "Satisfaction Survey", "Follow-Up", "CRM Records"],
    "coverImage": "assets/images/funnels/elevate-program-feedback/cover.webp",
    "images": [
      "assets/images/funnels/elevate-program-feedback/step-01.webp",
      "assets/images/funnels/elevate-program-feedback/step-02.webp"
    ],
    "imageAlts": [
      "Elevate Academy Program Feedback survey step",
      "Elevate Academy Feedback Confirmation step"
    ],
    "stepUrls": [
      "funnels/elevate-program-feedback/step-01/index.html",
      "funnels/elevate-program-feedback/step-02/index.html"
    ],
    "fullPageImage": "assets/images/funnels/elevate-program-feedback/full-page.webp",
    "fullPageAlt": "Complete full-page preview of the Program Feedback Funnel",
    "liveUrl": "funnels/elevate-program-feedback/step-01/index.html",
    "walkthroughUrl": ""
  }
];

/* =============================================
   Application bootstrap
   ============================================= */
document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.classList.add("page-ready");
  initEditorialReveals();
  initDiscoveryMap();
  initPointerEnhancements();
  initAnalyticsEvents();
  initProjectPreviewImages();
  initVideoModal();
  initFunnelCarousel();
  initFunnelModal();
  initDynamicYear();
});

function initEditorialReveals() {
  const elements = [...document.querySelectorAll(".reveal")];
  if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
    elements.forEach(element => element.classList.add("in-view"));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("in-view");
      observer.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -5% 0px" });
  elements.forEach(element => observer.observe(element));
}

function initDiscoveryMap() {
  const questions = [...document.querySelectorAll(".discovery-question")];
  if (!questions.length) return;

  questions.forEach((question) => {
    const button = question.querySelector("button[aria-controls]");
    const answer = document.getElementById(button?.getAttribute("aria-controls") || "");
    if (!button || !answer) return;

    button.addEventListener("click", () => {
      const willOpen = button.getAttribute("aria-expanded") !== "true";
      questions.forEach((item) => {
        const itemButton = item.querySelector("button[aria-controls]");
        const itemAnswer = document.getElementById(itemButton?.getAttribute("aria-controls") || "");
        item.classList.remove("is-active");
        itemButton?.setAttribute("aria-expanded", "false");
        if (itemAnswer) itemAnswer.hidden = true;
      });

      if (willOpen) {
        question.classList.add("is-active");
        button.setAttribute("aria-expanded", "true");
        answer.hidden = false;
      }
    });
  });
}

function initPointerEnhancements() {
  if (prefersReducedMotion() || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  const cursor = document.querySelector(".cursor-follower");
  const pointerLight = document.querySelector(".pointer-light");
  if (cursor) {
    let targetX = -120;
    let targetY = -120;
    let cursorX = targetX;
    let cursorY = targetY;
    let lightX = targetX;
    let lightY = targetY;
    let motionFrame = 0;

    const renderPointer = () => {
      cursorX += (targetX - cursorX) * .24;
      cursorY += (targetY - cursorY) * .24;
      lightX += (targetX - lightX) * .08;
      lightY += (targetY - lightY) * .08;
      cursor.style.transform = `translate3d(${cursorX - cursor.offsetWidth / 2}px, ${cursorY - cursor.offsetHeight / 2}px, 0)`;
      if (pointerLight) pointerLight.style.transform = `translate3d(${lightX - 220}px, ${lightY - 220}px, 0)`;

      const unsettled = Math.abs(targetX - cursorX) > .1 || Math.abs(targetY - cursorY) > .1 || Math.abs(targetX - lightX) > .1 || Math.abs(targetY - lightY) > .1;
      motionFrame = unsettled ? window.requestAnimationFrame(renderPointer) : 0;
    };
    const schedulePointer = () => {
      if (!motionFrame) motionFrame = window.requestAnimationFrame(renderPointer);
    };

    document.addEventListener("pointermove", (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
      cursor.classList.add("is-visible");
      pointerLight?.classList.add("is-visible");
      schedulePointer();
    });
    document.addEventListener("pointerleave", () => {
      cursor.classList.remove("is-visible", "is-interactive", "is-label");
      pointerLight?.classList.remove("is-visible");
    });

    document.querySelectorAll("a, button, summary, [role='button']").forEach((element) => {
      element.addEventListener("pointerenter", () => {
        cursor.classList.add("is-interactive");
        schedulePointer();
      });
      element.addEventListener("pointerleave", () => {
        cursor.classList.remove("is-interactive");
        schedulePointer();
      });
    });
    document.querySelectorAll("[data-cursor-label]").forEach((element) => {
      element.addEventListener("pointerenter", () => {
        cursor.querySelector("span").textContent = element.dataset.cursorLabel || "View system";
        cursor.classList.add("is-label");
        schedulePointer();
      });
      element.addEventListener("pointerleave", () => {
        cursor.classList.remove("is-label");
        schedulePointer();
      });
    });
  }

  document.querySelectorAll("[data-parallax-zone]").forEach((zone) => {
    const items = [...zone.querySelectorAll("[data-depth]")];
    if (!items.length) return;
    zone.addEventListener("pointermove", (event) => {
      const rect = zone.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - .5;
      const y = (event.clientY - rect.top) / rect.height - .5;
      items.forEach((item) => {
        const depth = Number(item.dataset.depth || 1);
        item.style.transform = `translate3d(${x * 10 * depth}px, ${y * 10 * depth}px, 0)`;
      });
    });
    zone.addEventListener("pointerleave", () => items.forEach((item) => { item.style.transform = "translate3d(0,0,0)"; }));
  });

  document.querySelectorAll(".magnetic").forEach((button) => {
    button.addEventListener("pointermove", (event) => {
      const rect = button.getBoundingClientRect();
      const x = (event.clientX - rect.left - rect.width / 2) * .08;
      const y = (event.clientY - rect.top - rect.height / 2) * .1;
      button.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    });
    button.addEventListener("pointerleave", () => { button.style.transform = "translate3d(0,0,0)"; });
  });

  document.querySelectorAll(".case-study__media").forEach((media) => {
    media.addEventListener("pointermove", (event) => {
      const bounds = media.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - .5;
      const y = (event.clientY - bounds.top) / bounds.height - .5;
      media.style.transform = `perspective(1200px) rotateX(${(-y * 1.6).toFixed(2)}deg) rotateY(${(x * 1.6).toFixed(2)}deg) translateY(-4px)`;
    });
    media.addEventListener("pointerleave", () => { media.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0)"; });
  });

  document.querySelectorAll(".automation-panel").forEach((panel) => {
    panel.addEventListener("pointermove", (event) => {
      const bounds = panel.getBoundingClientRect();
      panel.style.setProperty("--panel-x", `${((event.clientX - bounds.left) / bounds.width * 100).toFixed(1)}%`);
      panel.style.setProperty("--panel-y", `${((event.clientY - bounds.top) / bounds.height * 100).toFixed(1)}%`);
    });
  });
}

function initImageFallbacks(root) {
  root.querySelectorAll("[data-image-fallback]").forEach((wrapper) => {
    const image = wrapper.querySelector("img");
    if (!image || image.dataset.fallbackReady === "true") return;
    image.dataset.fallbackReady = "true";
    if (!image.hasAttribute("decoding")) image.decoding = "async";
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
function trackPortfolioInteraction(interactionType, interactionLabel) {
  if (!interactionType) return;
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "portfolio_interaction",
      interaction_type: interactionType,
      interaction_label: interactionLabel || ""
    });
  } catch (error) {
    console.debug("Analytics event unavailable:", error);
  }
}

function initAnalyticsEvents() {
  document.querySelectorAll("[data-interaction]").forEach((element) => {
    if (element.dataset.analyticsInitialized === "true") return;
    element.dataset.analyticsInitialized = "true";
    element.addEventListener("click", () => {
      trackPortfolioInteraction(element.dataset.interaction, element.dataset.interactionLabel);
    });
  });
}

/* =============================================
   Featured project previews and responsive CTA
   ============================================= */
function initProjectPreviewImages() {
  document.querySelectorAll(".project-preview-image").forEach((image) => {
    const revealImage = () => image.classList.add("is-loaded");
    const fallbackSources = [image.dataset.fallbackSrc, image.dataset.youtubeThumbnail].filter(Boolean);
    let fallbackIndex = 0;
    const handleError = () => {
      const fallbackSource = fallbackSources[fallbackIndex];
      fallbackIndex += 1;
      if (fallbackSource) {
        image.src = fallbackSource;
        return;
      }

      image.hidden = true;
    };

    image.addEventListener("load", revealImage);
    image.addEventListener("error", handleError);

    if (image.complete) {
      if (image.naturalWidth > 0) revealImage();
      else handleError();
    }
  });
}

/* =============================================
   Project walkthroughs: accessible video modal
   ============================================= */
function initVideoModal() {
  const modal = document.querySelector(".video-modal");
  const dialog = modal?.querySelector(".video-modal__dialog");
  const title = modal?.querySelector("#video-modal-title");
  const media = modal?.querySelector(".video-modal__media");
  const closeButton = modal?.querySelector(".video-modal__close");
  const backdrop = modal?.querySelector("[data-video-modal-close]");
  const triggers = [...document.querySelectorAll("[data-video-url]")];
  if (!modal || !dialog || !title || !media || !closeButton || !backdrop || !triggers.length) return;

  let lastFocusedElement = null;
  const backgroundElements = [...document.querySelectorAll(".site-header, main, .site-footer, .back-to-top, .mobile-project-cta")];
  const setBackgroundInert = (isInert) => backgroundElements.forEach((element) => { element.inert = isInert; });
  const closeModal = () => {
    if (modal.hidden) return;
    modal.hidden = true;
    media.replaceChildren();
    document.body.classList.remove("modal-open");
    setBackgroundInert(false);
    if (lastFocusedElement?.isConnected) lastFocusedElement.focus();
  };
  const trapFocus = (event) => {
    const focusable = [...dialog.querySelectorAll('button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])')]
      .filter((element) => element.offsetParent !== null);
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
  const openModal = (trigger) => {
    const url = trigger.dataset.videoUrl || "";
    const type = trigger.dataset.videoType || "mp4";
    if (!isValidWalkthroughUrl(url)) return;

    const mediaElement = type === "youtube" ? document.createElement("iframe") : document.createElement("video");
    if (type === "youtube") {
      mediaElement.src = url;
      mediaElement.title = trigger.dataset.videoTitle || "Project video walkthrough";
      mediaElement.allow = "autoplay; accelerometer; encrypted-media; gyroscope; picture-in-picture";
      mediaElement.allowFullscreen = true;
    } else {
      mediaElement.src = url;
      mediaElement.controls = true;
      mediaElement.preload = "metadata";
      mediaElement.playsInline = true;
      if (trigger.dataset.videoPoster) mediaElement.poster = trigger.dataset.videoPoster;
      mediaElement.addEventListener("error", () => {
        const unavailable = document.createElement("div");
        const eyebrow = document.createElement("span");
        const heading = document.createElement("strong");
        const message = document.createElement("p");
        unavailable.className = "video-modal__unavailable";
        eyebrow.textContent = "Project Walkthrough";
        heading.textContent = "Video coming soon";
        message.textContent = "This walkthrough is being prepared and will be available here after the video is uploaded.";
        unavailable.append(eyebrow, heading, message);
        media.replaceChildren(unavailable);
      }, { once: true });
    }

    lastFocusedElement = trigger;
    title.textContent = trigger.dataset.videoTitle || "Project walkthrough";
    media.replaceChildren(mediaElement);
    modal.hidden = false;
    document.body.classList.add("modal-open");
    setBackgroundInert(true);
    trackPortfolioInteraction("project_video_open", title.textContent);
    window.requestAnimationFrame(() => closeButton.focus());
  };

  window.addEventListener("portfolio:before-route", closeModal);
  triggers.forEach((trigger) => trigger.addEventListener("click", () => openModal(trigger)));
  closeButton.addEventListener("click", closeModal);
  backdrop.addEventListener("click", closeModal);
  document.addEventListener("keydown", (event) => {
    if (modal.hidden) return;
    if (event.key === "Escape") {
      event.preventDefault();
      closeModal();
    } else if (event.key === "Tab") {
      trapFocus(event);
    }
  });
}

/* =============================================
   Consolidated system explanation tabs
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

  const originalCards = [...track.querySelectorAll(".funnel-card")];
  if (!originalCards.length) return;

  originalCards.forEach((card) => {
    const project = funnelProjects.find((item) => item.id === card.dataset.funnelId);
    const content = card.querySelector(".funnel-card-content");
    const openLabel = card.querySelector(".funnel-card-open");
    if (!project || !content || !openLabel || content.querySelector(".funnel-card-summary")) return;
    const summary = document.createElement("span");
    const audience = document.createElement("span");
    summary.className = "funnel-card-summary";
    audience.className = "funnel-card-audience";
    summary.textContent = project.goal;
    audience.textContent = `For: ${project.audience}`;
    content.insertBefore(summary, openLabel);
    content.insertBefore(audience, openLabel);
  });

  let isPointerDown = false;
  let pointerId = null;
  let startX = 0;
  let startY = 0;
  let startScrollLeft = 0;
  let hasDragged = false;
  let suppressClick = false;
  let scrollFrame = 0;
  let scrollSettleTimer = 0;
  let loopWidth = 0;
  let middleStart = 0;
  let lastPointerX = 0;
  let lastPointerTime = 0;
  let dragVelocity = 0;
  let glideFrame = 0;
  let isGliding = false;
  const dragThreshold = 8;

  const createLoopClone = (card) => {
    const clone = card.cloneNode(true);
    clone.dataset.carouselClone = "true";
    clone.tabIndex = -1;
    clone.setAttribute("aria-hidden", "true");
    clone.querySelectorAll("img[data-fallback-ready]").forEach((image) => delete image.dataset.fallbackReady);
    return clone;
  };
  const leadingCards = originalCards.map(createLoopClone);
  const trailingCards = originalCards.map(createLoopClone);
  track.prepend(...leadingCards);
  track.append(...trailingCards);
  initImageFallbacks(track);

  const cardDistance = () => {
    const card = track.querySelector(".funnel-card");
    if (!card) return viewport.clientWidth * .8;
    const gap = Number.parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap || "0");
    return card.getBoundingClientRect().width + gap;
  };
  const refreshLoopMetrics = () => {
    const trackStyles = getComputedStyle(track);
    const inlineInset = Number.parseFloat(trackStyles.paddingInlineStart || trackStyles.paddingLeft || "0");
    middleStart = Math.max(0, originalCards[0].offsetLeft - inlineInset);
    loopWidth = trailingCards[0].offsetLeft - originalCards[0].offsetLeft;
    if (loopWidth <= 0) loopWidth = cardDistance() * originalCards.length;
  };
  const jumpWithoutAnimation = (position) => {
    const previousBehavior = viewport.style.scrollBehavior;
    viewport.style.scrollBehavior = "auto";
    viewport.scrollLeft = position;
    viewport.style.scrollBehavior = previousBehavior;
  };
  const normalizeLoopPosition = () => {
    if (!loopWidth || isPointerDown || isGliding) return;
    let normalizedPosition = viewport.scrollLeft;
    const lowerBoundary = middleStart - loopWidth * .5;
    const upperBoundary = middleStart + loopWidth * .5;
    while (normalizedPosition < lowerBoundary) normalizedPosition += loopWidth;
    while (normalizedPosition > upperBoundary) normalizedPosition -= loopWidth;
    if (Math.abs(normalizedPosition - viewport.scrollLeft) > 1) {
      jumpWithoutAnimation(normalizedPosition);
    }
  };
  const cancelGlide = () => {
    cancelAnimationFrame(glideFrame);
    glideFrame = 0;
    isGliding = false;
    viewport.classList.remove("is-gliding");
  };
  const settleToNearestCard = () => {
    normalizeLoopPosition();
    const distance = cardDistance();
    const target = middleStart + Math.round((viewport.scrollLeft - middleStart) / distance) * distance;
    viewport.scrollTo({ left: target, behavior: prefersReducedMotion() ? "auto" : "smooth" });
  };
  const startGlide = (initialVelocity) => {
    cancelGlide();
    if (prefersReducedMotion() || Math.abs(initialVelocity) < .04) {
      settleToNearestCard();
      return;
    }

    isGliding = true;
    viewport.classList.add("is-gliding");
    let velocity = Math.max(-2.8, Math.min(2.8, initialVelocity));
    let previousTime = performance.now();
    const startedAt = previousTime;

    const glide = (now) => {
      const elapsed = Math.min(32, Math.max(1, now - previousTime));
      previousTime = now;
      viewport.scrollLeft += velocity * elapsed;
      velocity *= Math.pow(.95, elapsed / 16.67);

      if (Math.abs(velocity) < .025 || now - startedAt > 1100) {
        cancelGlide();
        settleToNearestCard();
        return;
      }
      glideFrame = requestAnimationFrame(glide);
    };
    glideFrame = requestAnimationFrame(glide);
  };
  const scrollByCards = (direction) => {
    cancelGlide();
    viewport.scrollBy({ left: direction * cardDistance() * 2, behavior: prefersReducedMotion() ? "auto" : "smooth" });
  };
  const endPointerInteraction = (event) => {
    if (!isPointerDown || (event && pointerId !== event.pointerId)) return;
    const releasedPointerId = pointerId;
    const shouldGlide = hasDragged && event?.type === "pointerup";
    const releaseVelocity = dragVelocity;
    isPointerDown = false;
    viewport.classList.remove("is-dragging");
    if (releasedPointerId !== null && viewport.hasPointerCapture?.(releasedPointerId)) {
      viewport.releasePointerCapture(releasedPointerId);
    }
    pointerId = null;
    suppressClick = hasDragged;
    if (shouldGlide) startGlide(releaseVelocity);
    else if (hasDragged) settleToNearestCard();
    else normalizeLoopPosition();
    window.setTimeout(() => {
      hasDragged = false;
      suppressClick = false;
    }, 0);
  };

  viewport.addEventListener("pointerdown", (event) => {
    if (event.button !== 0 || event.target.closest(".funnel-carousel-button")) return;
    cancelGlide();
    isPointerDown = true;
    pointerId = event.pointerId;
    startX = event.clientX;
    startY = event.clientY;
    startScrollLeft = viewport.scrollLeft;
    lastPointerX = event.clientX;
    lastPointerTime = performance.now();
    dragVelocity = 0;
    hasDragged = false;
    suppressClick = false;
  });
  viewport.addEventListener("pointermove", (event) => {
    if (!isPointerDown || pointerId !== event.pointerId) return;
    const movementX = event.clientX - startX;
    const movementY = event.clientY - startY;
    const now = performance.now();
    const elapsed = Math.max(1, now - lastPointerTime);
    const instantaneousVelocity = -(event.clientX - lastPointerX) / elapsed;
    dragVelocity = dragVelocity * .68 + instantaneousVelocity * .32;
    lastPointerX = event.clientX;
    lastPointerTime = now;
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
  track.addEventListener("click", (event) => {
    const card = event.target.closest(".funnel-card");
    if (!card || !track.contains(card)) return;
    if (hasDragged || suppressClick) {
      event.preventDefault();
      return;
    }
    const focusReturnCard = card.dataset.carouselClone === "true"
      ? originalCards.find((originalCard) => originalCard.dataset.funnelId === card.dataset.funnelId)
      : card;
    openFunnelModal(card.dataset.funnelId, focusReturnCard || card);
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
    window.clearTimeout(scrollSettleTimer);
    scrollFrame = requestAnimationFrame(() => {
      scrollSettleTimer = window.setTimeout(normalizeLoopPosition, 140);
    });
  }, { passive: true });
  window.addEventListener("resize", () => {
    cancelGlide();
    cancelAnimationFrame(scrollFrame);
    scrollFrame = requestAnimationFrame(() => {
      refreshLoopMetrics();
      jumpWithoutAnimation(middleStart);
    });
  }, { passive: true });

  window.addEventListener("portfolio:routechange", ({ detail }) => {
    if (detail.page !== "funnels") return;
    cancelGlide();
    requestAnimationFrame(() => { refreshLoopMetrics(); jumpWithoutAnimation(middleStart); });
  });
  previousButton.disabled = false;
  nextButton.disabled = false;
  requestAnimationFrame(() => {
    refreshLoopMetrics();
    jumpWithoutAnimation(middleStart);
  });
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
  const backgroundElements = [...document.querySelectorAll(".site-header, main, .site-footer, .back-to-top, .mobile-project-cta")];

  const setBackgroundInert = (isInert) => backgroundElements.forEach((element) => { element.inert = isInert; });
  const isValidProjectUrl = (value) => {
    if (typeof value !== "string" || !value.trim()) return false;
    const normalizedValue = value.trim();
    const isLocalFunnelStep = /^funnels\/[a-z0-9-]+\/step-\d{2}\/index\.html$/.test(normalizedValue);
    const isLocalWalkthrough = /^assets\/videos\/[a-z0-9/_-]+\.(?:mp4|webm)$/i.test(normalizedValue);
    if (isLocalFunnelStep || isLocalWalkthrough) return true;

    try {
      const url = new URL(normalizedValue);
      return url.protocol === "http:" || url.protocol === "https:";
    } catch {
      return false;
    }
  };
  const setOptionalLink = (link, url, label) => {
    const isValid = isValidProjectUrl(url);
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
    const firstStepUrl = currentProject.liveUrl || currentProject.stepUrls?.[0] || "";
    const label = `Open the ${currentProject.title} from step 1 in a new tab`;
    setOptionalLink(fullPageButton, firstStepUrl, label);
    setOptionalLink(liveLink, firstStepUrl, label);
  };
  const updateGallery = (index, focusThumbnail = false) => {
    if (!currentProject || fullPageActive) return;
    currentImageIndex = Math.max(0, Math.min(index, currentProject.images.length - 1));
    stage.classList.add("is-changing");
    stage.classList.remove("image-fallback");
    image.alt = currentProject.imageAlts[currentImageIndex];
    image.width = 1600;
    image.height = 900;
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
      thumbnail.width = 160;
      thumbnail.height = 200;
      thumbnail.loading = "lazy";
      thumbnail.decoding = "async";
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
    trackPortfolioInteraction("project_view", project.title);
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

  window.addEventListener("portfolio:before-route", () => closeModal({ returnFocus: false }));
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
    window.portfolioRouter.navigate("#contact");
  });
  walkthroughLink.addEventListener("click", () => {
    if (currentProject) trackPortfolioInteraction("project_video_open", currentProject.title);
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
function initDynamicYear() {
  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });
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
