"use strict";

/*
  AUTOMATION SYSTEMS LIBRARY DATA

  Add, remove, or rename businesses and files here. The section markup,
  workspace, filters, deep links, and file viewer are generated from this data.

  Screenshot convention:
  assets/images/automation-systems/[business-id]/[file-id].png
  Recommended size: at least 1600 px wide. WebP, PNG, and tall screenshots are supported.
*/
const automationPreviewTypes = [
  { id: "workflows", type: "WORKFLOW", name: "Workflows", shortDescription: "Workflow screenshots and build details will be added here." },
  { id: "pipeline", type: "PIPELINE", name: "CRM Pipeline", shortDescription: "Pipeline stages and screenshots will be added here." },
  { id: "website-ai-chatbot", type: "WEBSITE", name: "Website & AI Chatbot", shortDescription: "Website screenshots and the AI chatbot experience will be added here." },
  { id: "voice-ai", type: "VOICE AI", name: "Voice AI", shortDescription: "Voice AI screenshots and call flow details will be added here." },
  { id: "funnels", type: "FUNNEL", name: "Funnels", shortDescription: "Funnel pages and customer journey screenshots will be added here." }
];

const glowMedSystemFiles = [
  {
    "order": "01",
    "id": "consultation-pipeline",
    "type": "PIPELINE",
    "name": "Client Conversion Pipeline — Consultation",
    "shortDescription": "Tracks new leads, first contact, consultation bookings, and completed consultations.",
    "image": "assets/images/automation-systems/glowmed-aesthetics/consultation-pipeline.png",
    "imageAlt": "GlowMed Aesthetics demonstration: Client Conversion Pipeline — Consultation",
    "technologies": [
      "GoHighLevel"
    ]
  },
  {
    "order": "02",
    "id": "treatment-pipeline",
    "type": "PIPELINE",
    "name": "Client Conversion Pipeline — Treatment",
    "shortDescription": "Shows the later stages of the same pipeline: treatment booked, treatment completed, and lost or not interested.",
    "image": "assets/images/automation-systems/glowmed-aesthetics/treatment-pipeline.png",
    "imageAlt": "GlowMed Aesthetics demonstration: Client Conversion Pipeline — Treatment",
    "technologies": [
      "GoHighLevel"
    ]
  },
  {
    "order": "03",
    "id": "appointment-reminders",
    "type": "WORKFLOW",
    "name": "Appointment Confirmation & Reminders",
    "shortDescription": "Confirms appointments, alerts the team, and schedules reminders before the visit.",
    "image": "assets/images/automation-systems/glowmed-aesthetics/appointment-reminders.png",
    "imageAlt": "GlowMed Aesthetics demonstration: Appointment Confirmation & Reminders",
    "technologies": [
      "GoHighLevel"
    ]
  },
  {
    "order": "04",
    "id": "cancellation-recovery",
    "type": "WORKFLOW",
    "name": "Cancellation Recovery",
    "shortDescription": "Stops existing workflows and follows up after a canceled appointment to encourage rescheduling.",
    "image": "assets/images/automation-systems/glowmed-aesthetics/cancellation-recovery.png",
    "imageAlt": "GlowMed Aesthetics demonstration: Cancellation Recovery",
    "technologies": [
      "GoHighLevel"
    ]
  },
  {
    "order": "05",
    "id": "voucher-lead-nurturing",
    "type": "WORKFLOW",
    "name": "Voucher Lead Nurturing",
    "shortDescription": "Follows up with voucher leads using response checks, weekday routing, and business-hour conditions.",
    "image": "assets/images/automation-systems/glowmed-aesthetics/voucher-lead-nurturing.png",
    "imageAlt": "GlowMed Aesthetics demonstration: Voucher Lead Nurturing",
    "technologies": [
      "GoHighLevel"
    ]
  },
  {
    "order": "06",
    "id": "no-show-recovery",
    "type": "WORKFLOW",
    "name": "No-Show Recovery",
    "shortDescription": "Starts an immediate follow-up and scheduled reminders after a missed appointment.",
    "image": "assets/images/automation-systems/glowmed-aesthetics/no-show-recovery.png",
    "imageAlt": "GlowMed Aesthetics demonstration: No-Show Recovery",
    "technologies": [
      "GoHighLevel"
    ]
  },
  {
    "order": "07",
    "id": "opt-out",
    "type": "WORKFLOW",
    "name": "Opt-Out Handling",
    "shortDescription": "Routes opt-out events into a shared workflow to stop ongoing automated follow-up.",
    "image": "assets/images/automation-systems/glowmed-aesthetics/opt-out.png",
    "imageAlt": "GlowMed Aesthetics demonstration: Opt-Out Handling",
    "technologies": [
      "GoHighLevel"
    ]
  },
  {
    "order": "08",
    "id": "voucher-offer",
    "type": "WORKFLOW",
    "name": "Voucher Offer",
    "shortDescription": "Sends a voucher offer and routes replies matching opt-in keywords into the lead-nurturing workflow.",
    "image": "assets/images/automation-systems/glowmed-aesthetics/voucher-offer.png",
    "imageAlt": "GlowMed Aesthetics demonstration: Voucher Offer",
    "technologies": [
      "GoHighLevel"
    ]
  },
  {
    "order": "09",
    "id": "workflow-library",
    "type": "WORKFLOW",
    "name": "Workflow Library Overview",
    "shortDescription": "An inventory screenshot of the appointment, recovery, promotional, and opt-out workflows.",
    "image": "assets/images/automation-systems/glowmed-aesthetics/workflow-library.png",
    "imageAlt": "GlowMed Aesthetics demonstration: Workflow Library Overview",
    "technologies": [
      "GoHighLevel"
    ]
  },
  {
    "order": "10",
    "id": "instagram-dm-nurturing",
    "type": "WORKFLOW",
    "name": "Instagram DM Lead Nurturing",
    "shortDescription": "Organizes Instagram inquiries and continues follow-up through timed messages and response checks.",
    "image": "assets/images/automation-systems/glowmed-aesthetics/instagram-dm-nurturing.png",
    "imageAlt": "GlowMed Aesthetics demonstration: Instagram DM Lead Nurturing",
    "technologies": [
      "GoHighLevel"
    ]
  },
  {
    "order": "11",
    "id": "webform-funnel-nurturing",
    "type": "WORKFLOW",
    "name": "Webform & Funnel Lead Nurturing",
    "shortDescription": "Brings webform and funnel inquiries into a structured follow-up sequence.",
    "image": "assets/images/automation-systems/glowmed-aesthetics/webform-funnel-nurturing.png",
    "imageAlt": "GlowMed Aesthetics demonstration: Webform & Funnel Lead Nurturing",
    "technologies": [
      "GoHighLevel"
    ]
  },
  {
    "order": "12",
    "id": "chat-widget-nurturing",
    "type": "WORKFLOW",
    "name": "Chat Widget Lead Nurturing",
    "shortDescription": "Follows up with website chat inquiries using response and timing conditions.",
    "image": "assets/images/automation-systems/glowmed-aesthetics/chat-widget-nurturing.png",
    "imageAlt": "GlowMed Aesthetics demonstration: Chat Widget Lead Nurturing",
    "technologies": [
      "GoHighLevel"
    ]
  },
  {
    "order": "13",
    "id": "messenger-nurturing",
    "type": "WORKFLOW",
    "name": "Messenger Lead Nurturing",
    "shortDescription": "Organizes Facebook Messenger inquiries and schedules follow-up messages.",
    "image": "assets/images/automation-systems/glowmed-aesthetics/messenger-nurturing.png",
    "imageAlt": "GlowMed Aesthetics demonstration: Messenger Lead Nurturing",
    "technologies": [
      "GoHighLevel"
    ]
  },
  {
    "order": "14",
    "id": "google-business-nurturing",
    "type": "WORKFLOW",
    "name": "Google Business Lead Nurturing",
    "shortDescription": "Shows a source-specific follow-up build for Google Business messaging inquiries.",
    "image": "assets/images/automation-systems/glowmed-aesthetics/google-business-nurturing.png",
    "imageAlt": "GlowMed Aesthetics demonstration: Google Business Lead Nurturing",
    "technologies": [
      "GoHighLevel"
    ]
  },
  {
    "order": "15",
    "id": "missed-call-text-back",
    "type": "WORKFLOW",
    "name": "Missed-Call Text Back",
    "shortDescription": "Responds to missed calls by text and continues follow-up based on the contact's response.",
    "image": "assets/images/automation-systems/glowmed-aesthetics/missed-call-text-back.png",
    "imageAlt": "GlowMed Aesthetics demonstration: Missed-Call Text Back",
    "technologies": [
      "GoHighLevel"
    ]
  },
  {
    "order": "16",
    "id": "zapier-lead-nurturing",
    "type": "WORKFLOW",
    "name": "Zapier Lead Nurturing",
    "shortDescription": "Routes incoming Zapier leads into a timed nurture sequence with response checks.",
    "image": "assets/images/automation-systems/glowmed-aesthetics/zapier-lead-nurturing.png",
    "imageAlt": "GlowMed Aesthetics demonstration: Zapier Lead Nurturing",
    "technologies": [
      "GoHighLevel"
    ]
  },
  {
    "order": "17",
    "id": "tap-to-text-nurturing",
    "type": "WORKFLOW",
    "name": "Tap-to-Text Lead Nurturing",
    "shortDescription": "Follows up with tap-to-text inquiries through conditional messaging paths.",
    "image": "assets/images/automation-systems/glowmed-aesthetics/tap-to-text-nurturing.png",
    "imageAlt": "GlowMed Aesthetics demonstration: Tap-to-Text Lead Nurturing",
    "technologies": [
      "GoHighLevel"
    ]
  },
  {
    "order": "18",
    "id": "inbound-workflow-library",
    "type": "WORKFLOW",
    "name": "Inbound Workflow Library Overview",
    "shortDescription": "An inventory screenshot of the source-specific inbound lead-nurturing workflows.",
    "image": "assets/images/automation-systems/glowmed-aesthetics/inbound-workflow-library.png",
    "imageAlt": "GlowMed Aesthetics demonstration: Inbound Workflow Library Overview",
    "technologies": [
      "GoHighLevel"
    ]
  },
  {
    "order": "19",
    "id": "website-home",
    "type": "WEBSITE",
    "name": "Website — Home",
    "shortDescription": "Introduces the spa's services, treatments, team, and contact options.",
    "image": "assets/images/automation-systems/glowmed-aesthetics/website-home.png",
    "imageAlt": "GlowMed Aesthetics demonstration: Website — Home",
    "imageLayout": "page",
    "technologies": [
      "GoHighLevel"
    ]
  },
  {
    "order": "20",
    "id": "website-about",
    "type": "WEBSITE",
    "name": "Website — About Us",
    "shortDescription": "Introduces the practice and its approach to client care.",
    "image": "assets/images/automation-systems/glowmed-aesthetics/website-about.png",
    "imageAlt": "GlowMed Aesthetics demonstration: Website — About Us",
    "imageLayout": "page",
    "technologies": [
      "GoHighLevel"
    ]
  },
  {
    "order": "21",
    "id": "website-appointments",
    "type": "WEBSITE",
    "name": "Website — Appointment Information",
    "shortDescription": "Presents appointment information and the practice's contact details.",
    "image": "assets/images/automation-systems/glowmed-aesthetics/website-appointments.png",
    "imageAlt": "GlowMed Aesthetics demonstration: Website — Appointment Information",
    "imageLayout": "page",
    "technologies": [
      "GoHighLevel"
    ]
  },
  {
    "order": "22",
    "id": "website-contact",
    "type": "WEBSITE",
    "name": "Website — Contact",
    "shortDescription": "Provides introductory contact information and ways to reach the practice.",
    "image": "assets/images/automation-systems/glowmed-aesthetics/website-contact.png",
    "imageAlt": "GlowMed Aesthetics demonstration: Website — Contact",
    "imageLayout": "page",
    "technologies": [
      "GoHighLevel"
    ]
  },
  {
    "order": "23",
    "id": "website-gallery",
    "type": "WEBSITE",
    "name": "Website — Gallery Page",
    "shortDescription": "Shows the gallery page layout and supporting practice information.",
    "image": "assets/images/automation-systems/glowmed-aesthetics/website-gallery.png",
    "imageAlt": "GlowMed Aesthetics demonstration: Website — Gallery Page",
    "imageLayout": "page",
    "technologies": [
      "GoHighLevel"
    ]
  },
  {
    "order": "24",
    "id": "website-team",
    "type": "WEBSITE",
    "name": "Website — Meet Our Team",
    "shortDescription": "Introduces the team and the practice's client-focused approach.",
    "image": "assets/images/automation-systems/glowmed-aesthetics/website-team.png",
    "imageAlt": "GlowMed Aesthetics demonstration: Website — Meet Our Team",
    "imageLayout": "page",
    "technologies": [
      "GoHighLevel"
    ]
  },
  {
    "order": "25",
    "id": "website-memberships",
    "type": "WEBSITE",
    "name": "Website — Memberships",
    "shortDescription": "Explains the membership offering and ongoing client-care benefits.",
    "image": "assets/images/automation-systems/glowmed-aesthetics/website-memberships.png",
    "imageAlt": "GlowMed Aesthetics demonstration: Website — Memberships",
    "imageLayout": "page",
    "technologies": [
      "GoHighLevel"
    ]
  },
  {
    "order": "26",
    "id": "website-specialties",
    "type": "WEBSITE",
    "name": "Website — Specialties",
    "shortDescription": "Introduces the practice's areas of aesthetic care.",
    "image": "assets/images/automation-systems/glowmed-aesthetics/website-specialties.png",
    "imageAlt": "GlowMed Aesthetics demonstration: Website — Specialties",
    "imageLayout": "page",
    "technologies": [
      "GoHighLevel"
    ]
  },
  {
    "order": "27",
    "id": "website-treatments",
    "type": "WEBSITE",
    "name": "Website — Treatments",
    "shortDescription": "Outlines the treatment offering and directs visitors to practice contact information.",
    "image": "assets/images/automation-systems/glowmed-aesthetics/website-treatments.png",
    "imageAlt": "GlowMed Aesthetics demonstration: Website — Treatments",
    "imageLayout": "page",
    "technologies": [
      "GoHighLevel"
    ]
  },
  {
    "order": "28",
    "id": "funnel-landing",
    "type": "FUNNEL",
    "name": "Funnel — Landing Page",
    "shortDescription": "Presents the spa offer, services, and calls to action that guide visitors toward an inquiry.",
    "image": "assets/images/automation-systems/glowmed-aesthetics/funnel-landing.png",
    "imageAlt": "GlowMed Aesthetics demonstration: Funnel — Landing Page",
    "imageLayout": "page",
    "technologies": [
      "GoHighLevel"
    ]
  },
  {
    "order": "29",
    "id": "funnel-thank-you",
    "type": "FUNNEL",
    "name": "Funnel — Thank You",
    "shortDescription": "Confirms that the request was received and provides a route back to the website.",
    "image": "assets/images/automation-systems/glowmed-aesthetics/funnel-thank-you.png",
    "imageAlt": "GlowMed Aesthetics demonstration: Funnel — Thank You",
    "imageLayout": "page",
    "technologies": [
      "GoHighLevel"
    ]
  }
];

// Replace a preview's image and details, or add more items to any business.
const upcomingAutomationBusinesses = [
  { id: "greenscape-pro", name: "GreenScape Pro", industry: "Landscaping Services", description: "Landscaping sales pipeline, appointment and inbound follow-up, website, and booking funnel.", items: greenScapeSystemFiles },

  { id: "glowmed-aesthetics", name: "GlowMed Aesthetics", industry: "Medical Spa", description: "Consultation inquiries, appointment booking, and client follow-up." },
  { id: "aquafix-pros", name: "AquaFix Pros", industry: "Plumbing Services", items: aquaFixSystemFiles, description: "Service inquiries, job scheduling, and customer communication." },



].map((business) => ({
  ...business,
  overview: business.id === "aquafix-pros" ? "A demonstration plumbing system with pipelines, follow-up workflows, website pages, and booking funnels." : business.id === "glowmed-aesthetics"
    ? "A demonstration med spa build in GoHighLevel, with client conversion pipeline views, appointment and inbound-lead workflows, website pages, and a two-page funnel. Screenshots show the build, not live client results."
    : business.items ? "A demonstration landscaping system built in GoHighLevel, with three sales pipeline views, appointment and source-specific follow-up workflows, five website pages, and a three-step funnel. Screenshots show the build, not live client results."
    : business.description + " Explore the collection below. Screenshots and build details are coming soon.",
  systemType: "Business System",
  status: business.items || business.id === "glowmed-aesthetics" ? "Demonstration System" : "Preview Collection",
  coverImage: "",
  featured: false,
  pending: !business.items && business.id !== "glowmed-aesthetics",
  items: (business.id === "glowmed-aesthetics" ? glowMedSystemFiles : business.items || automationPreviewTypes).map((file, index) => ({
    order: String(index + 1).padStart(2, "0"),
    image: "",
    imageAlt: business.name + " " + file.name,
    pending: !business.items && business.id !== "glowmed-aesthetics",
    technologies: [],
    ...file
  }))
}));

const automationBusinesses = [
  {
    id: "grand-avenue-motors",
    name: "Grand Avenue Motors",
    industry: "Automotive Dealership",
    description: "Mock dealership CRM, appointment workflows, booking funnel, and five-page website.",
    overview: "A demonstration dealership system built in GoHighLevel. It combines a CRM pipeline, seven workflows, a three-step booking funnel, and a five-page website.",
    systemType: "CRM + Automation System",
    status: "Demonstration System",
    coverImage: "",
    featured: false,
    items: [
      {
        id: "lead-management-pipeline", order: "01", type: "PIPELINE", name: "Lead Management Pipeline", image: "assets/images/automation-systems/grand-avenue-motors/lead-management-pipeline.png",
        imageAlt: "Grand Avenue Motors sales opportunity pipeline with Opt In, Appt Set, Cancellation, and No Show stages",
        shortDescription: "Organizes dealership opportunities across opt-in, appointment, cancellation, and no-show stages.",
        problem: "Appointment and lead outcomes are difficult to manage when they are scattered across conversations and contact records.",
        whatItDoes: "Creates a visible sales opportunity pipeline with dedicated stages for Opt In, Appt Set, Cancellation, and No Show.",
        architectureDecision: "Lead and appointment outcomes use explicit opportunity stages so each workflow can update one shared operating view.",
        errorProtection: "Records that cannot be matched to an existing contact or opportunity stay visible for staff review instead of being moved silently.",
        businessValue: "The team can see which leads need confirmation, recovery, or follow-up without searching through individual conversations.",
        technologies: ["GoHighLevel", "CRM", "Pipeline Design"]
      },
      {
        id: "appointment-confirmation-reminders", order: "02", type: "WORKFLOW", name: "Appointment Confirmation & Reminders", image: "assets/images/automation-systems/grand-avenue-motors/appointment-confirmation-reminders.png",
        imageAlt: "Grand Avenue Motors appointment confirmation workflow with team notification and timed reminders",
        shortDescription: "Confirms appointments and coordinates team alerts with timed customer reminders.",
        problem: "Reduces forgotten appointments, inconsistent reminders, and manual follow-up work.",
        whatItDoes: "When a customer books an appointment, the workflow stops previous automations, notifies the team, creates an opportunity, and sends a confirmation. It then sends reminders two days, 24 hours, and one hour before the appointment.",
        architectureDecision: "Confirmation and reminders run from the booked appointment time, keeping every message tied to one scheduling event.",
        errorProtection: "Previous automations are stopped first so customers do not receive conflicting nurture and appointment messages.",
        businessValue: "Helps improve appointment attendance, staff preparation, and customer communication.",
        technologies: ["GoHighLevel", "Workflow Automation", "Calendar", "SMS"]
      },
      {
        id: "appointment-cancellation-recovery", order: "03", type: "WORKFLOW", name: "Appointment Cancellation Recovery", image: "assets/images/automation-systems/grand-avenue-motors/appointment-cancellation-recovery.png",
        imageAlt: "Grand Avenue Motors appointment cancellation recovery workflow with three scheduled follow-ups",
        shortDescription: "Stops active messaging and starts a controlled rescheduling sequence after a cancellation.",
        problem: "Prevents interested customers from being lost after canceling an appointment.",
        whatItDoes: "When a customer cancels an appointment, the workflow removes them from existing workflows, notifies the team, and creates an opportunity. It then sends three follow-up messages over the following days to encourage the customer to reconnect or reschedule.",
        architectureDecision: "Cancellation is treated as a recoverable lifecycle state with its own opportunity and follow-up path.",
        errorProtection: "Existing workflows are removed before recovery messages begin, preventing duplicate or contradictory communication.",
        businessValue: "Creates more opportunities to recover canceled appointments and re-engage potential buyers.",
        technologies: ["GoHighLevel", "Workflow Automation", "Calendar", "SMS"]
      },
      {
        id: "lead-nurturing-free-quote", order: "04", type: "WORKFLOW", name: "Lead Nurturing Free Quote", image: "assets/images/automation-systems/grand-avenue-motors/lead-nurturing-free-quote.png",
        imageAlt: "Grand Avenue Motors free quote lead nurturing workflow with weekday, weekend, response, and business-hour branches",
        shortDescription: "Nurtures free-quote leads using response checks and timing based on the business schedule.",
        problem: "Prevents free-quote leads from being forgotten or contacted inconsistently.",
        whatItDoes: "This workflow creates an opportunity, sends a weekday or weekend free-quote message, and checks whether the lead responds. It also uses business-hour logic and scheduled follow-ups to continue nurturing the lead.",
        architectureDecision: "Weekday, weekend, and business-hour branches keep outreach timing intentional rather than sending every lead through one schedule.",
        errorProtection: "Response checks stop or redirect follow-up when the lead has already replied, reducing repeated messages.",
        businessValue: "Helps Grand Avenue Motors generate more conversations, quote requests, appointments, and sales opportunities.",
        technologies: ["GoHighLevel", "Workflow Automation", "Conditional Logic", "SMS"]
      },
      {
        id: "lead-nurturing-gift-card", order: "05", type: "WORKFLOW", name: "Lead Nurturing Gift Card", image: "assets/images/automation-systems/grand-avenue-motors/lead-nurturing-gift-card.png",
        imageAlt: "Grand Avenue Motors gift card lead nurturing workflow with response and business-hour branches",
        shortDescription: "Keeps promotional leads engaged through controlled weekday, weekend, and follow-up paths.",
        problem: "Prevents promotional leads from being lost when they do not respond immediately.",
        whatItDoes: "This workflow creates an opportunity and sends a weekday or weekend gift-card message. It checks for a response, applies business-hour rules, and sends additional follow-ups over several days.",
        architectureDecision: "Separate timing branches let the promotion adapt to business hours while preserving one measurable nurture path.",
        errorProtection: "Reply checks prevent follow-up messages from continuing after the contact has already responded.",
        businessValue: "Helps maintain engagement and creates more opportunities to turn gift-card interest into dealership visits.",
        technologies: ["GoHighLevel", "Workflow Automation", "Conditional Logic", "SMS"]
      },
      {
        id: "appointment-no-show-recovery", order: "06", type: "WORKFLOW", name: "Appointment No-Show Recovery", image: "assets/images/automation-systems/grand-avenue-motors/appointment-no-show-recovery.png",
        imageAlt: "Grand Avenue Motors no-show recovery workflow with immediate and three-day follow-up messages",
        shortDescription: "Turns a missed appointment into a structured, time-bound rescheduling opportunity.",
        problem: "Prevents missed appointments from becoming permanently lost sales opportunities.",
        whatItDoes: "When a customer is marked as a no-show, the workflow removes them from existing workflows and sends an immediate follow-up. It then sends additional messages over the next three days to encourage the customer to reschedule.",
        architectureDecision: "A no-show is modeled as a distinct recovery state rather than returning the contact to general nurture.",
        errorProtection: "The workflow removes the contact from existing automations before the immediate and timed recovery sequence begins.",
        businessValue: "Helps recover no-show customers and gives the dealership another opportunity to book an appointment.",
        technologies: ["GoHighLevel", "Workflow Automation", "Appointment Status", "SMS"]
      },
      {
        id: "offer-free-quote", order: "07", type: "WORKFLOW", name: "Offer Free Quote", image: "assets/images/automation-systems/grand-avenue-motors/offer-free-quote.png",
        imageAlt: "Grand Avenue Motors free quote SMS offer workflow with reply keyword branch and nurture enrollment",
        shortDescription: "Identifies free-quote interest and routes opted-in contacts into lead nurturing.",
        problem: "Automates the identification and routing of leads interested in receiving a free quote.",
        whatItDoes: "This workflow sends a free-quote offer by SMS and waits for the customer's reply. If the response contains an accepted opt-in keyword, the contact is added to the Walk In DR Lead Nurturing workflow.",
        architectureDecision: "Keyword-based opt-in gates entry into the longer Walk In DR Lead Nurturing workflow.",
        errorProtection: "Contacts without an approved opt-in reply remain outside the nurture workflow instead of being enrolled by assumption.",
        businessValue: "Helps the dealership respond to interested leads faster and continue nurturing them toward an appointment or sale.",
        technologies: ["GoHighLevel", "Workflow Automation", "SMS", "Opt-in Logic"]
      },
      {
        id: "offer-gift-card", order: "08", type: "WORKFLOW", name: "Offer Gift Card", image: "assets/images/automation-systems/grand-avenue-motors/offer-gift-card.png",
        imageAlt: "Grand Avenue Motors gift card SMS offer workflow with opt-in keyword routing",
        shortDescription: "Qualifies gift-card interest by reply and enrolls opted-in contacts into lead nurturing.",
        problem: "Reduces the manual work required to identify customers interested in the promotion.",
        whatItDoes: "This workflow sends a gift-card offer by SMS and checks the customer's reply for opt-in keywords. Interested contacts are automatically added to the Walk In DR Lead Nurturing workflow.",
        architectureDecision: "The promotion remains a short opt-in workflow, while continued follow-up is owned by the dedicated nurture system.",
        errorProtection: "Only accepted opt-in replies trigger enrollment, preventing non-responsive contacts from entering the nurture sequence.",
        businessValue: "Helps turn promotional engagement into continued conversations, dealership visits, and potential sales.",
        technologies: ["GoHighLevel", "Workflow Automation", "SMS", "Opt-in Logic"]
      },
      {
        "id": "funnel-opt-in",
        "order": "09",
        "type": "FUNNEL",
        "name": "Opt-In / Landing Page",
        "image": "assets/images/automation-systems/grand-avenue-motors/funnel-opt-in.png",
        "imageAlt": "Grand Avenue Motors demonstration opt-in / landing page screenshot",
        "imageLayout": "page",
        "shortDescription": "Introduces the dealership, explains its services, and guides visitors toward a vehicle inquiry or booking.",
        "technologies": [
          "GoHighLevel",
          "Funnel Builder"
        ]
      },
      {
        "id": "funnel-schedule",
        "order": "10",
        "type": "FUNNEL",
        "name": "Schedule a Trade-In Appraisal",
        "image": "assets/images/automation-systems/grand-avenue-motors/funnel-schedule.png",
        "imageAlt": "Grand Avenue Motors demonstration schedule a trade-in appraisal screenshot",
        "imageLayout": "page",
        "shortDescription": "Lets visitors choose a date and time for a complimentary trade-in appraisal.",
        "technologies": [
          "GoHighLevel",
          "Funnel Builder"
        ]
      },
      {
        "id": "funnel-thank-you",
        "order": "11",
        "type": "FUNNEL",
        "name": "Booking Thank-You Page",
        "image": "assets/images/automation-systems/grand-avenue-motors/funnel-thank-you.png",
        "imageAlt": "Grand Avenue Motors demonstration booking thank-you page screenshot",
        "imageLayout": "page",
        "shortDescription": "Confirms the appraisal booking and explains that appointment details will be sent to the customer.",
        "technologies": [
          "GoHighLevel",
          "Funnel Builder"
        ]
      },
      {
        "id": "website-home",
        "order": "12",
        "type": "WEBSITE",
        "name": "Website Homepage",
        "image": "assets/images/automation-systems/grand-avenue-motors/website-home.png",
        "imageAlt": "Grand Avenue Motors demonstration website homepage screenshot",
        "imageLayout": "page",
        "shortDescription": "Introduces the dealership's vehicle services and guides visitors toward inquiries, test drives, and trade-in appraisals.",
        "technologies": [
          "GoHighLevel",
          "Website Builder"
        ]
      },
      {
        "id": "website-about",
        "order": "13",
        "type": "WEBSITE",
        "name": "About Us",
        "image": "assets/images/automation-systems/grand-avenue-motors/website-about.png",
        "imageAlt": "Grand Avenue Motors demonstration about us screenshot",
        "imageLayout": "page",
        "shortDescription": "Explains the dealership's approach to vehicle buying, customer service, and ongoing support.",
        "technologies": [
          "GoHighLevel",
          "Website Builder"
        ]
      },
      {
        "id": "website-blogs",
        "order": "14",
        "type": "WEBSITE",
        "name": "Blogs",
        "image": "assets/images/automation-systems/grand-avenue-motors/website-blogs.png",
        "imageAlt": "Grand Avenue Motors demonstration blogs screenshot",
        "imageLayout": "page",
        "shortDescription": "Provides a space for automotive tips and advice. The mockup currently shows an empty blog listing.",
        "technologies": [
          "GoHighLevel",
          "Website Builder"
        ]
      },
      {
        "id": "website-faqs",
        "order": "15",
        "type": "WEBSITE",
        "name": "Frequently Asked Questions",
        "image": "assets/images/automation-systems/grand-avenue-motors/website-faqs.png",
        "imageAlt": "Grand Avenue Motors demonstration frequently asked questions screenshot",
        "imageLayout": "page",
        "shortDescription": "Answers common questions about test drives, trade-ins, financing, appointments, and vehicle availability.",
        "technologies": [
          "GoHighLevel",
          "Website Builder"
        ]
      },
      {
        "id": "website-contact",
        "order": "16",
        "type": "WEBSITE",
        "name": "Contact",
        "image": "assets/images/automation-systems/grand-avenue-motors/website-contact.png",
        "imageAlt": "Grand Avenue Motors demonstration contact screenshot",
        "imageLayout": "page",
        "shortDescription": "Collects the visitor's name, phone number, and email so the dealership can follow up on an inquiry.",
        "technologies": [
          "GoHighLevel",
          "Website Builder"
        ]
      }
    ]
  },
  ...upcomingAutomationBusinesses
];

const automationSystemFilters = [
  { id: "all", label: "All" },
  { id: "pipeline", label: "Pipelines", types: ["PIPELINE"] },
  { id: "workflow", label: "Workflows", types: ["WORKFLOW"] },
  { id: "website", label: "Websites", types: ["WEBSITE"] },
  { id: "funnel", label: "Funnels", types: ["FUNNEL"] },
  { id: "ai", label: "AI", types: ["AI AGENT"] },
  { id: "voice", label: "Voice", types: ["VOICE AI"] },
  { id: "integration", label: "Integrations", types: ["INTEGRATION"] }
];

const automationTypeCodes = {
  "PIPELINE": "PL",
  "WORKFLOW": "WF",
  "AI AGENT": "AI",
  "VOICE AI": "VOICE",
  "INTEGRATION": "API",
  "SYSTEM MAP": "MAP",
  "WEBSITE": "WEB",
  "FUNNEL": "FUNNEL"
};

function initAutomationSystemsLibrary() {
  const grid = document.querySelector("#automation-business-grid");
  if (!grid) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
  const escapeHtml = (value = "") => String(value).replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", "\"": "&quot;"
  })[character]);
  const typeCode = (type) => automationTypeCodes[type] || "FILE";
  const getFocusable = (container) => [...container.querySelectorAll("button:not([disabled]), a[href], [tabindex]:not([tabindex='-1'])")].filter((element) => !element.hidden && element.offsetParent !== null);
  const waitForExit = () => reduceMotion.matches ? 0 : 220;
  const backgroundElements = [...document.querySelectorAll(".site-header, main, .site-footer, .back-to-top, .mobile-project-cta")];

  let currentBusiness = null;
  let selectedFileId = "";
  let activeFilter = "all";
  let currentFileIndex = 0;
  let lastFolderFocus = null;
  let lastFileFocus = null;
  let workspaceReturnHash = "#automations";
  let viewerTransitionTimer = 0;

  const fileTypeSummary = (business) => {
    if (business.pending) return "<span>Screenshots coming soon</span>";
    const counts = business.items.reduce((summary, item) => {
      summary[item.type] = (summary[item.type] || 0) + 1;
      return summary;
    }, {});
    const pluralTypes = {
      PIPELINE: "PIPELINES",
      WORKFLOW: "WORKFLOW FILES",
      WEBSITE: "WEBSITE PAGES",
      FUNNEL: "FUNNEL PAGES",
      "AI AGENT": "AI AGENTS",
      "VOICE AI": "VOICE AI",
      INTEGRATION: "INTEGRATIONS",
      "SYSTEM MAP": "SYSTEM MAPS"
    };
    return Object.entries(counts).map(([type, count]) => `<span><strong>${count}</strong> ${escapeHtml(count === 1 ? type : (pluralTypes[type] || `${type} FILES`))}</span>`).join("");
  };

  const previewMarkup = (business) => business.items.slice(0, 3).map((item) => item.image ? `
    <span class="business-folder__preview business-folder__preview--image" aria-hidden="true">
      <img src="${escapeHtml(item.image)}" alt="" loading="lazy" decoding="async">
      <span><b>${escapeHtml(typeCode(item.type))}</b>${escapeHtml(item.name)}</span>
    </span>
  ` : `
    <span class="business-folder__preview" aria-hidden="true">
      <b>${escapeHtml(typeCode(item.type))}</b>
      <span>${escapeHtml(item.name)}</span>
    </span>
  `).join("");

  grid.innerHTML = automationBusinesses.map((business) => `
    <article class="business-folder${business.featured ? " business-folder--featured" : ""}" data-business-folder="${escapeHtml(business.id)}">
      <div class="business-folder__stage">
        <div class="business-folder__back" aria-hidden="true">
          <span class="business-folder__tab">${escapeHtml(business.status)}</span>
        </div>
        <div class="business-folder__previews">${previewMarkup(business)}</div>
        <div class="business-folder__front">
          <div>
            <div class="business-folder__meta"><span>${escapeHtml(business.systemType)}</span><span>${business.items.length} ${business.pending ? "categories" : "system files"}</span></div>
            <h3>${escapeHtml(business.name)}</h3>
            <p class="business-folder__industry">${escapeHtml(business.industry)}</p>
            <p class="business-folder__description">${escapeHtml(business.description)}</p>
          </div>
          <div class="business-folder__summary">
            <div class="business-folder__counts">${fileTypeSummary(business)}</div>
            <span class="business-folder__cta">Open System →</span>
          </div>
        </div>
      </div>
      <button class="business-folder__hit" type="button" data-open-business="${escapeHtml(business.id)}" data-cursor-label="OPEN SYSTEM" aria-haspopup="dialog" aria-label="Open ${escapeHtml(business.name)} automation system"></button>
    </article>
  `).join("");

  const workspace = document.createElement("div");
  workspace.className = "automation-workspace";
  workspace.hidden = true;
  workspace.setAttribute("role", "dialog");
  workspace.setAttribute("aria-modal", "true");
  workspace.setAttribute("aria-labelledby", "automation-workspace-title");
  workspace.innerHTML = `
    <button class="automation-workspace__backdrop" type="button" aria-label="Close business system"></button>
    <div class="automation-workspace__panel" role="document">
      <header class="automation-workspace__topbar">
        <div class="automation-workspace__identity">
          <h2 id="automation-workspace-title"></h2>
          <span data-workspace-industry></span>
        </div>
        <button class="automation-workspace__close" type="button" aria-label="Close business system">×</button>
      </header>
      <div class="automation-workspace__body">
        <div class="automation-workspace__intro">
          <div>
            <p class="automation-workspace__kicker" data-workspace-status></p>
            <p class="automation-workspace__overview" data-workspace-overview></p>
          </div>
          <p class="automation-workspace__system-type" data-workspace-system-type></p>
        </div>
        <div class="automation-workspace__toolbar">
          <strong>System Files <span data-workspace-count></span></strong>
          <div class="automation-workspace__filters" role="group" aria-label="Filter system files"></div>
        </div>
        <div class="system-file-grid" data-system-file-grid></div>
      </div>
    </div>
  `;

  const viewer = document.createElement("div");
  viewer.className = "system-file-viewer";
  viewer.hidden = true;
  viewer.setAttribute("role", "dialog");
  viewer.setAttribute("aria-modal", "true");
  viewer.setAttribute("aria-labelledby", "system-file-viewer-title");
  viewer.innerHTML = `
    <button class="system-file-viewer__backdrop" type="button" aria-label="Close system file"></button>
    <div class="system-file-viewer__panel" role="document">
      <div class="system-file-viewer__media">
        <div class="system-file-viewer__media-inner"></div>
        <span class="system-file-viewer__count" aria-live="polite"></span>
      </div>
      <div class="system-file-viewer__details">
        <button class="system-file-viewer__close" type="button" aria-label="Close system file">×</button>
        <div class="system-file-viewer__details-inner"></div>
      </div>
      <div class="system-file-viewer__navigation">
        <button type="button" data-file-previous>← Previous file</button>
        <button type="button" data-file-next>Next file →</button>
      </div>
    </div>
  `;

  document.body.append(workspace, viewer);

  const workspacePanel = workspace.querySelector(".automation-workspace__panel");
  const workspaceBody = workspace.querySelector(".automation-workspace__body");
  const workspaceClose = workspace.querySelector(".automation-workspace__close");
  const workspaceBackdrop = workspace.querySelector(".automation-workspace__backdrop");
  const workspaceTitle = workspace.querySelector("#automation-workspace-title");
  const workspaceIndustry = workspace.querySelector("[data-workspace-industry]");
  const workspaceStatus = workspace.querySelector("[data-workspace-status]");
  const workspaceOverview = workspace.querySelector("[data-workspace-overview]");
  const workspaceSystemType = workspace.querySelector("[data-workspace-system-type]");
  const workspaceCount = workspace.querySelector("[data-workspace-count]");
  const filterContainer = workspace.querySelector(".automation-workspace__filters");
  const fileGrid = workspace.querySelector("[data-system-file-grid]");
  const viewerPanel = viewer.querySelector(".system-file-viewer__panel");
  const viewerMedia = viewer.querySelector(".system-file-viewer__media");
  const viewerMediaInner = viewer.querySelector(".system-file-viewer__media-inner");
  const viewerDetails = viewer.querySelector(".system-file-viewer__details");
  const viewerDetailsInner = viewer.querySelector(".system-file-viewer__details-inner");
  const viewerCount = viewer.querySelector(".system-file-viewer__count");
  const viewerClose = viewer.querySelector(".system-file-viewer__close");
  const viewerBackdrop = viewer.querySelector(".system-file-viewer__backdrop");
  const previousFile = viewer.querySelector("[data-file-previous]");
  const nextFile = viewer.querySelector("[data-file-next]");

  const setPageInert = (isInert) => backgroundElements.forEach((element) => { element.inert = isInert; });
  const setUrl = (hash, mode = "push") => {
    const nextUrl = `${window.location.pathname}${window.location.search}${hash}`;
    window.history[mode === "replace" ? "replaceState" : "pushState"]({ automationLibrary: true }, "", nextUrl);
  };

  const filteredFiles = () => {
    const filter = automationSystemFilters.find((item) => item.id === activeFilter);
    if (!currentBusiness || !filter || !filter.types) return currentBusiness?.items || [];
    return currentBusiness.items.filter((item) => filter.types.includes(item.type));
  };

  const renderFilters = () => {
    filterContainer.innerHTML = automationSystemFilters.filter((filter) => !filter.types || currentBusiness.items.some((file) => filter.types.includes(file.type))).map((filter) => `
      <button class="automation-filter${filter.id === activeFilter ? " is-active" : ""}" type="button" data-automation-filter="${filter.id}" aria-pressed="${filter.id === activeFilter}">${filter.label}</button>
    `).join("");
    filterContainer.querySelectorAll("[data-automation-filter]").forEach((button) => {
      button.addEventListener("click", () => {
        activeFilter = button.dataset.automationFilter || "all";
        renderFilters();
        renderFileGrid();
      });
    });
  };

  const fileMediaMarkup = (file, context = "card") => {
    const alt = file.imageAlt || `${file.name} system screenshot`;
    if (file.image) {
      const image = `<img src="${escapeHtml(file.image)}" alt="${escapeHtml(alt)}" loading="lazy" decoding="async">`;
      return context === "viewer" ? image : `<span class="system-file__media system-file__media--image${file.imageLayout === "page" ? " system-file__media--page" : ""}">${image}</span>`;
    }
    return `
      <${context === "viewer" ? "div" : "span"} class="${context === "viewer" ? "system-file-viewer__placeholder" : "system-file__media"}" role="img" aria-label="Screenshot placeholder for ${escapeHtml(file.name)}">
        <span>Screenshot placeholder</span>
        <strong>${escapeHtml(typeCode(file.type))}</strong>
        <small>${escapeHtml(file.type)}</small>
      </${context === "viewer" ? "div" : "span"}>
    `;
  };

  const renderFileGrid = () => {
    const files = filteredFiles();
    workspaceCount.textContent = `${files.length} ${files.length === 1 ? "File" : "Files"}`;
    fileGrid.innerHTML = files.map((file) => `
      <button class="system-file is-entering" type="button" data-system-file="${escapeHtml(file.id)}" data-cursor-label="OPEN FILE" aria-label="Open ${escapeHtml(file.name)}. ${escapeHtml(file.type)}.">
        ${fileMediaMarkup(file)}
        <span class="system-file__body">
          <span class="system-file__order">${escapeHtml(file.type)} ${escapeHtml(file.order)}</span>
          <h3>${escapeHtml(file.name)}</h3>
          <p>${escapeHtml(file.shortDescription)}</p>
          <span class="system-file__tags">${file.technologies.slice(0, 3).map((technology) => `<span>${escapeHtml(technology)}</span>`).join("")}</span>
        </span>
      </button>
    `).join("");

    fileGrid.querySelectorAll("[data-system-file]").forEach((button, index) => {
      button.addEventListener("click", (event) => openFile(button.dataset.systemFile, { animate: event.detail !== 0 }));
      if (!reduceMotion.matches) window.setTimeout(() => button.classList.remove("is-entering"), 35 + Math.min(index, 5) * 35);
      else button.classList.remove("is-entering");
    });
  };

  const renderWorkspace = (business) => {
    workspaceTitle.textContent = business.name;
    workspaceIndustry.textContent = business.industry;
    workspaceStatus.textContent = business.status;
    workspaceOverview.textContent = business.overview;
    workspaceSystemType.textContent = business.systemType;
    activeFilter = "all";
    selectedFileId = business.items[0]?.id || "";
    renderFilters();
    renderFileGrid();
    workspaceBody.scrollTop = 0;
  };

  const openBusiness = (businessId, { updateUrl = true, returnFocus = null, animate = true } = {}) => {
    const business = automationBusinesses.find((item) => item.id === businessId);
    if (!business) return;
    if (workspace.hidden) workspaceReturnHash = window.location.hash && !window.location.hash.startsWith("#automations/") ? window.location.hash : "#automations";
    currentBusiness = business;
    lastFolderFocus = returnFocus || lastFolderFocus || document.activeElement;
    renderWorkspace(business);
    workspace.hidden = false;
    document.body.classList.add("modal-open");
    setPageInert(true);
    if (updateUrl) setUrl(`#automations/${business.id}`);
    if (!animate || reduceMotion.matches) workspace.classList.add("is-open");
    else window.requestAnimationFrame(() => workspace.classList.add("is-open"));
    window.requestAnimationFrame(() => workspaceClose.focus());
    if (typeof trackPortfolioInteraction === "function") trackPortfolioInteraction("automation_business_open", business.name);
  };

  const closeViewer = ({ updateUrl = true, returnFocus = true } = {}) => {
    if (viewer.hidden) return;
    window.clearTimeout(viewerTransitionTimer);
    viewer.classList.remove("is-open");
    viewerPanel.classList.remove("is-changing");
    workspacePanel.inert = false;
    if (updateUrl && currentBusiness) setUrl(`#automations/${currentBusiness.id}`, "replace");
    window.setTimeout(() => {
      viewer.hidden = true;
      viewerMediaInner.replaceChildren();
      if (returnFocus && lastFileFocus?.isConnected) lastFileFocus.focus();
    }, waitForExit());
  };

  const closeWorkspace = ({ updateUrl = true, returnFocus = true } = {}) => {
    if (workspace.hidden) return;
    closeViewer({ updateUrl: false, returnFocus: false });
    workspace.classList.remove("is-open");
    document.body.classList.remove("modal-open");
    setPageInert(false);
    if (updateUrl) setUrl(workspaceReturnHash || "#automations", "replace");
    window.setTimeout(() => {
      workspace.hidden = true;
      if (returnFocus && lastFolderFocus?.isConnected) lastFolderFocus.focus();
    }, waitForExit());
  };

  const viewerDetailsMarkup = (file) => `
    <p class="system-file-viewer__business">${escapeHtml(currentBusiness.name)}</p>
    <span class="system-file-viewer__type">${escapeHtml(file.type)} ${escapeHtml(file.order)}</span>
    <h2 id="system-file-viewer-title">${escapeHtml(file.name)}</h2>
    <p class="system-file-viewer__summary">${escapeHtml(file.shortDescription)}</p>
    ${[["Problem", file.problem], ["What It Does", file.whatItDoes], ["Architecture Decision", file.architectureDecision], ["Error / Failure Protection", file.errorProtection], ["Business Value", file.businessValue]].filter(([, value]) => value).map(([label, value]) => `<section class="system-file-viewer__fact"><h3>${label}</h3><p>${escapeHtml(value)}</p></section>`).join("")}
    <div class="system-file-viewer__technology" aria-label="Technology">${file.technologies.map((technology) => `<span>${escapeHtml(technology)}</span>`).join("")}</div>
  `;

  const applyViewerFile = (file) => {
    currentFileIndex = currentBusiness.items.findIndex((item) => item.id === file.id);
    selectedFileId = file.id;
    viewerMedia.classList.remove("is-zoomed");
    viewerMedia.classList.toggle("is-page", file.imageLayout === "page");
    if (file.image) {
      const alt = file.imageAlt || `${file.name} system screenshot`;
      viewerMediaInner.innerHTML = `<button class="system-file-viewer__image-button" type="button" aria-label="Enlarge ${escapeHtml(file.name)} screenshot"><img src="${escapeHtml(file.image)}" alt="${escapeHtml(alt)}" decoding="async"></button>`;
      viewerMediaInner.querySelector("button")?.addEventListener("click", () => viewerMedia.classList.toggle("is-zoomed"));
    } else {
      viewerMediaInner.innerHTML = fileMediaMarkup(file, "viewer");
    }
    viewerDetailsInner.innerHTML = viewerDetailsMarkup(file);
    viewerCount.textContent = `${String(currentFileIndex + 1).padStart(2, "0")} / ${String(currentBusiness.items.length).padStart(2, "0")}`;
    previousFile.setAttribute("aria-label", `View previous file before ${file.name}`);
    nextFile.setAttribute("aria-label", `View next file after ${file.name}`);
    viewerMedia.scrollTop = 0;
    viewerMedia.scrollLeft = 0;
    viewerDetails.scrollTop = 0;
  };

  const transitionToFile = (file, animate = true) => {
    window.clearTimeout(viewerTransitionTimer);
    if (!animate || reduceMotion.matches || viewer.hidden) {
      applyViewerFile(file);
      return;
    }
    viewerPanel.classList.add("is-changing");
    viewerTransitionTimer = window.setTimeout(() => {
      applyViewerFile(file);
      window.requestAnimationFrame(() => viewerPanel.classList.remove("is-changing"));
    }, 110);
  };

  function openFile(fileId, { updateUrl = true, animate = true } = {}) {
    if (!currentBusiness) return;
    const file = currentBusiness.items.find((item) => item.id === fileId);
    if (!file) return;
    lastFileFocus = document.activeElement;
    applyViewerFile(file);
    viewer.hidden = false;
    workspacePanel.inert = true;
    if (updateUrl) setUrl(`#automations/${currentBusiness.id}/${file.id}`);
    if (!animate || reduceMotion.matches) viewer.classList.add("is-open");
    else window.requestAnimationFrame(() => viewer.classList.add("is-open"));
    window.requestAnimationFrame(() => viewerClose.focus());
    if (typeof trackPortfolioInteraction === "function") trackPortfolioInteraction("automation_file_open", `${currentBusiness.name}: ${file.name}`);
  }

  const moveFile = (direction) => {
    if (!currentBusiness) return;
    const count = currentBusiness.items.length;
    const nextIndex = (currentFileIndex + direction + count) % count;
    const file = currentBusiness.items[nextIndex];
    transitionToFile(file);
    setUrl(`#automations/${currentBusiness.id}/${file.id}`, "replace");
  };

  const trapFocus = (event, container) => {
    if (event.key !== "Tab") return;
    const focusable = getFocusable(container);
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

  grid.querySelectorAll("[data-open-business]").forEach((button) => {
    const folder = button.closest(".business-folder");
    const stage = folder?.querySelector(".business-folder__stage");
    button.addEventListener("click", (event) => {
      const open = () => openBusiness(button.dataset.openBusiness, { returnFocus: button, animate: event.detail !== 0 });
      if (event.detail === 0 || reduceMotion.matches) {
        open();
        return;
      }
      folder?.classList.add("is-opening");
      window.setTimeout(() => {
        open();
        folder?.classList.remove("is-opening");
      }, 180);
    });
    if (stage && finePointer.matches && !reduceMotion.matches) {
      button.addEventListener("pointermove", (event) => {
        const bounds = button.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - .5;
        const y = (event.clientY - bounds.top) / bounds.height - .5;
        stage.style.transform = `perspective(1100px) rotateX(${(-y * 1.6).toFixed(2)}deg) rotateY(${(x * 1.8).toFixed(2)}deg)`;
      });
      button.addEventListener("pointerleave", () => { stage.style.transform = ""; });
    }
  });

  workspaceClose.addEventListener("click", () => closeWorkspace());
  workspaceBackdrop.addEventListener("click", () => closeWorkspace());
  viewerClose.addEventListener("click", () => closeViewer());
  viewerBackdrop.addEventListener("click", () => closeViewer());
  previousFile.addEventListener("click", () => moveFile(-1));
  nextFile.addEventListener("click", () => moveFile(1));

  document.addEventListener("keydown", (event) => {
    if (!viewer.hidden) {
      if (event.key === "Escape") {
        event.preventDefault();
        closeViewer();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        moveFile(-1);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        moveFile(1);
      } else {
        trapFocus(event, viewerPanel);
      }
      return;
    }
    if (!workspace.hidden) {
      if (event.key === "Escape") {
        event.preventDefault();
        closeWorkspace();
      } else {
        trapFocus(event, workspacePanel);
      }
    }
  });

  const syncFromHash = () => {
    const hash = decodeURIComponent(window.location.hash || "");
    if (!hash.startsWith("#automations")) {
      closeWorkspace({ updateUrl: false, returnFocus: false });
      return;
    }
    const [, businessId, fileId] = hash.split("/");
    if (!businessId) {
      closeWorkspace({ updateUrl: false, returnFocus: false });
      return;
    }
    const business = automationBusinesses.find((item) => item.id === businessId);
    if (!business) return;
    if (workspace.hidden || currentBusiness?.id !== business.id) openBusiness(business.id, { updateUrl: false, animate: false });
    if (fileId) openFile(fileId, { updateUrl: false, animate: false });
    else closeViewer({ updateUrl: false, returnFocus: false });
  };

  window.addEventListener("popstate", syncFromHash);
  window.addEventListener("hashchange", syncFromHash);
  syncFromHash();
}

initAutomationSystemsLibrary();
