/* ============================================================
   ProviderSync — Site Data
   All editable content lives here. Update text, prices and
   contact details without touching the HTML pages.
   ============================================================ */

const SITE = {
  brand: "ProviderSync",
  tagline: "Sync Your Backend. Streamline Care.",
  email: "hello@providersync.com.au",   // TODO: confirm with client — ALL contact goes through email only
  location: "Australia-wide · Remote-first",
  hours: "Mon–Fri · 8:00am – 6:00pm AEST",
  response: "Replies within one business day",
  abn: "ABN pending registration",      // TODO: confirm with client
};

const NAV = [
  { label: "Home", href: "index.html", page: "home" },
  { label: "Services", href: "services.html", page: "services" },
  { label: "Who We Serve", href: "sectors.html", page: "sectors" },
  { label: "Pricing", href: "pricing.html", page: "pricing" },
  { label: "About", href: "about.html", page: "about" },
  { label: "Contact", href: "contact.html", page: "contact" },
];

/* ---------- Sectors ---------- */
const SECTORS = [
  {
    id: "ndis",
    icon: "fa-universal-access",
    img: "assets/img/ndis-support.jpg",
    title: "NDIS Providers",
    short: "SDA, SIL & registered NDIS providers",
    intro:
      "The NDIS rewards great support — and punishes messy paperwork. We run the participant admin, compliance evidence and claims cycle so your team stays focused on participants, not portals.",
    serve: [
      "SDA (Specialist Disability Accommodation) providers",
      "SIL (Supported Independent Living) providers",
      "Small to mid-size registered NDIS providers",
      "Allied health businesses supporting participants",
    ],
    handle: [
      "Participant onboarding & service agreements",
      "NDIS plan management administration",
      "SDA / SIL backend coordination",
      "Compliance reporting & audit-ready evidence",
      "Rostering & support worker scheduling",
      "Claims, invoicing & payment reconciliation",
    ],
    pains: [
      { p: "Audit anxiety before every review cycle", s: "Evidence maintained continuously, not the week before" },
      { p: "Claims rejected over small errors", s: "Clean, verified claims submitted on schedule" },
      { p: "Onboarding paperwork delaying service starts", s: "Intake packs turned around fast and correctly" },
    ],
    compliance: "NDIS Practice Standards · Quality & Safeguards Commission requirements",
  },
  {
    id: "aged-care",
    icon: "fa-hand-holding-heart",
    img: "assets/img/aged-care.jpg",
    title: "Aged Care",
    short: "Residential, home care & community services",
    intro:
      "Rosters, timesheets, payroll and compliance never stop in aged care. We keep the workforce engine running quietly in the background — every shift covered, every hour verified, every record current.",
    serve: [
      "Residential aged care facilities",
      "Home care package providers",
      "Community aged care services",
      "Support worker agencies",
    ],
    handle: [
      "Rostering & shift management",
      "Payroll processing & timesheet verification",
      "Support worker onboarding & credentialing",
      "Invoicing, billing & expense claims",
      "Compliance documentation & incident reports",
      "Performance tracking & operational reporting",
    ],
    pains: [
      { p: "Last-minute roster gaps and shift chaos", s: "Proactive rostering with coverage monitoring" },
      { p: "Payroll errors eroding staff trust", s: "Verified timesheets and clean payroll runs" },
      { p: "Credential expiries slipping through", s: "Tracked registers with renewal alerts" },
    ],
    compliance: "Aged Care Quality Standards · home care package requirements",
  },
  {
    id: "ece",
    icon: "fa-child-reaching",
    img: "assets/img/ece-kids.jpg",
    title: "Early Childhood Education",
    short: "ECE centres & early intervention services",
    intro:
      "Coordinating therapists, educators and families is a full-time job on its own. We handle scheduling, recruitment support and family communications so children get consistent, uninterrupted care.",
    serve: [
      "Early childhood education centres",
      "Therapy providers (OT, speech pathology, physiotherapy)",
      "Allied health teams supporting children with disabilities",
      "NDIS-funded early intervention services",
    ],
    handle: [
      "Staff coordination & therapist scheduling",
      "Therapist recruitment support (OT, speech, physio)",
      "Fee negotiations & invoicing",
      "Training coordination & onboarding",
      "Compliance documentation",
      "Centre–family communications",
    ],
    pains: [
      { p: "Therapist availability clashing with sessions", s: "Coordinated schedules across every provider" },
      { p: "Slow recruitment leaving children waitlisted", s: "Active sourcing and fast, compliant onboarding" },
      { p: "Families left chasing updates", s: "Structured, warm centre–family communication" },
    ],
    compliance: "NDIS early intervention requirements · child safety standards",
  },
];

/* ---------- Services ---------- */
const SERVICES = [
  {
    id: "admin",
    group: "Healthcare Administration & Operations",
    lead: "Led by Niluki Silva",
    icon: "fa-clipboard-check",
    img: "assets/img/office-meeting.jpg",
    blurb:
      "Specialist admin built for the Australian healthcare compliance environment — not generic virtual assistance.",
    items: [
      { icon: "fa-user-plus", title: "Client Onboarding & Intake", desc: "NDIS onboarding, service agreements and participant records — done right the first time, every time.", points: ["Service agreement preparation", "Participant & client record setup", "Intake coordination with families & coordinators"] },
      { icon: "fa-calendar-days", title: "Rostering & Scheduling", desc: "Workforce scheduling across aged care, NDIS and ECE with coverage monitored proactively.", points: ["Shift planning & roster management", "Coverage gap monitoring", "Support worker allocation"] },
      { icon: "fa-money-check-dollar", title: "Payroll & Invoicing", desc: "Timesheets verified, payroll coordinated, claims and billing reconciled to the dollar.", points: ["Timesheet verification", "Payroll coordination", "Claims, invoicing & reconciliation"] },
      { icon: "fa-shield-halved", title: "Compliance & Reporting", desc: "Audit-ready documentation maintained continuously against NDIS Practice Standards and aged care requirements.", points: ["Incident report management", "Credential & registration tracking", "Operational & compliance reporting"] },
      { icon: "fa-user-doctor", title: "Recruitment & Workforce", desc: "Sourcing, onboarding and credentialing support workers, therapists and ECE staff.", points: ["Interview & induction coordination", "Onboarding & compliance documentation", "Staff records & credential registers"] },
      { icon: "fa-people-arrows", title: "Stakeholder Communication", desc: "Professional liaison with families, support coordinators and allied health teams on your behalf.", points: ["Family & participant correspondence", "Coordinator & therapist liaison", "Centre–family communications"] },
    ],
  },
  {
    id: "it",
    group: "IT & Digital Solutions",
    lead: "Led by Viraj Maduranga",
    icon: "fa-laptop-code",
    img: "assets/img/it-code.jpg",
    blurb:
      "A complete, professional digital presence and reliable technology infrastructure — set up, secured and maintained.",
    items: [
      { icon: "fa-globe", title: "Website Development", desc: "Custom, healthcare-focused WordPress websites with intake and booking forms built in.", points: ["Custom WordPress builds", "Client intake & booking forms", "Mobile-responsive, accessible layouts"] },
      { icon: "fa-magnifying-glass-chart", title: "SEO & Online Presence", desc: "Be found by the families and coordinators searching for providers in your area.", points: ["Local SEO optimisation", "Google Business Profile setup", "Analytics & directory listings"] },
      { icon: "fa-share-nodes", title: "Social Media & Branding", desc: "Brand identity, logo design and consistent presence across Facebook, Instagram and LinkedIn.", points: ["Brand identity & logo design", "Content strategy & posting", "Review management strategy"] },
      { icon: "fa-server", title: "IT Infrastructure", desc: "Business email, domains, DNS, hosting and managed VPS — professionally set up and maintained.", points: ["Business email setup (Google Workspace)", "Domain, DNS & hosting management", "Managed VPS hosting"] },
      { icon: "fa-headset", title: "Remote IT Support", desc: "Staff IT onboarding, troubleshooting and software setup — on demand, without an in-house IT hire.", points: ["Staff IT onboarding", "Remote troubleshooting", "Software setup & configuration"] },
      { icon: "fa-lock", title: "Security & Performance", desc: "SSL, backups, updates and performance tuning that keep your site fast and your data safe.", points: ["SSL & security hardening", "Automated backups & updates", "Performance monitoring"] },
    ],
  },
];

/* ---------- How it works ---------- */
const PROCESS = [
  { n: "01", icon: "fa-stethoscope", title: "Free Backend Audit", desc: "We review your admin, compliance and digital setup and map exactly where hours and dollars are leaking." },
  { n: "02", icon: "fa-map", title: "Your Sync Plan", desc: "A clear proposal: which functions we take over, the package that fits, and what success looks like." },
  { n: "03", icon: "fa-arrows-rotate", title: "We Sync In", desc: "Structured handover in 1–2 weeks. Systems connected, processes documented, nothing dropped." },
  { n: "04", icon: "fa-chart-line", title: "Ongoing Support", desc: "Weekly reporting, monthly reviews and direct founder access as your backend runs itself." },
];

/* ---------- Why us ---------- */
const ADVANTAGES = [
  { icon: "fa-notes-medical", title: "Healthcare-specific expertise", desc: "We understand NDIS, Aged Care & ECE — not generic BPO." },
  { icon: "fa-house-chimney", title: "Admin + IT under one roof", desc: "No juggling separate admin and IT vendors." },
  { icon: "fa-map-location-dot", title: "Australian market knowledge", desc: "We know the compliance requirements and regulations." },
  { icon: "fa-seedling", title: "Small-provider friendly", desc: "Affordable packages designed for growing businesses." },
  { icon: "fa-wifi", title: "Remote-first delivery", desc: "Flexible support without geographic limitations." },
  { icon: "fa-user-tie", title: "Personalised service", desc: "Direct access to the founding team, not a call centre." },
];

/* ---------- Packages ---------- */
const PACKAGES = [
  {
    name: "Starter", price: "$900–$1,500", per: "/month",
    best: "New & micro providers finding their feet",
    features: ["Core admin: intake, records & invoicing", "Basic IT & email support", "Compliance document maintenance", "Monthly reporting", "Email support (next business day)"],
    featured: false,
  },
  {
    name: "Growth", price: "$2,000–$3,500", per: "/month",
    best: "Established providers ready to scale",
    features: ["Everything in Starter", "Rostering, payroll & timesheets", "Website maintenance + local SEO", "Recruitment & onboarding support", "Weekly reporting", "Priority support (same day)"],
    featured: true,
  },
  {
    name: "Complete", price: "$4,000+", per: "/month",
    best: "Mid-size providers wanting a full backend",
    features: ["Everything in Growth", "End-to-end compliance management", "Full IT, digital & social media", "Branding & content strategy", "Monthly strategy review calls", "Dedicated founder access"],
    featured: false,
  },
];

const ADDONS = [
  { icon: "fa-globe", title: "Website Build", price: "from $1,800", desc: "Custom healthcare WordPress site with intake forms" },
  { icon: "fa-palette", title: "Brand Identity", price: "from $1,200", desc: "Logo, palette, templates & brand guidelines" },
  { icon: "fa-gears", title: "IT Setup Project", price: "from $900", desc: "Email, domains, hosting & software from scratch" },
  { icon: "fa-file-shield", title: "Compliance Catch-up", price: "quoted", desc: "One-off cleanup before an audit or registration" },
];

/* ---------- FAQs ---------- */
const FAQS = [
  { q: "Are you a call centre or offshore VA service?", a: "Neither. ProviderSync is founder-led — you work directly with Niluki (admin & operations) and Viraj (IT & digital). We're a specialist team focused only on Australian healthcare providers, not a generic outsourcing pool." },
  { q: "How do you handle participant and client data?", a: "We align with the Australian Privacy Principles: encrypted storage, role-based access, signed confidentiality agreements and access limited strictly to the functions you delegate. Data handling terms are documented in every service agreement." },
  { q: "How fast can you take over our admin?", a: "Most providers are fully handed over within 1–2 weeks. We start with a structured audit, document your current processes, then transition function by function so nothing is dropped mid-stream." },
  { q: "Do we need to sign a long contract?", a: "No lock-in contracts. Packages run month-to-month after an initial 3-month establishment period, and you can scale up, down or pause with 30 days' notice." },
  { q: "Can you work with our existing software?", a: "Yes. We work inside your current rostering, payroll and CRM platforms — and if you don't have systems yet, we'll recommend and set up affordable tools that fit your size." },
  { q: "What if we only need IT, or only admin?", a: "That's fine. Packages can be weighted toward either side. Many clients start with one function and add more as trust builds — the audit will show you what makes sense first." },
];

/* ---------- Testimonials (illustrative placeholders — replace with real client quotes) ---------- */
const TESTIMONIALS = [
  { quote: "Our claims went from constantly bounced to clean every cycle. The audit alone showed us where 12 hours a week were going.", name: "SIL Provider", role: "Director · Western Sydney", icon: "fa-universal-access" },
  { quote: "Rosters, timesheets and payroll just happen now. Our coordinators finally spend their day with clients instead of spreadsheets.", name: "Home Care Provider", role: "Operations Manager · Brisbane", icon: "fa-hand-holding-heart" },
  { quote: "They built our website, set up our email and took over therapist scheduling — one team, one invoice, zero chasing.", name: "Early Intervention Service", role: "Centre Director · Melbourne", icon: "fa-child-reaching" },
];

/* ---------- Sync Score quiz ---------- */
const QUIZ = [
  { q: "Do you or senior staff spend more than 5 hours a week on rostering and scheduling?" },
  { q: "Have you had a claim or invoice rejected in the last 3 months?" },
  { q: "Is your compliance evidence assembled in a rush before audits?" },
  { q: "Do staff credential or registration expiries ever slip past you?" },
  { q: "Is your website outdated, or missing online intake and booking forms?" },
  { q: "Do you rely on personal email (Gmail/Hotmail) instead of a business domain?" },
  { q: "Does client onboarding paperwork ever delay service commencement?" },
  { q: "Are you the only person who knows how your backend actually works?" },
];

const QUIZ_VERDICTS = [
  { max: 1, label: "Well Synced", tone: "good", msg: "Your backend is in strong shape. A light-touch Starter package could still free up a few hours a week — worth a conversation." },
  { max: 4, label: "Partly Synced", tone: "mid", msg: "There are real leaks here — hours and money going into admin that a Growth package would take off your plate within weeks." },
  { max: 8, label: "Out of Sync", tone: "high", msg: "Your backend is costing you serious time, risk and revenue. A free audit will map the fastest wins — most providers like you recover 10+ hours a week." },
];

/* ---------- Values ---------- */
const VALUES = [
  { icon: "fa-heart-pulse", title: "Care behind the care", desc: "Our work exists so providers can serve their clients better. That purpose shapes every process we run." },
  { icon: "fa-file-circle-check", title: "Compliance-first", desc: "Regulatory accuracy is non-negotiable. We build evidence continuously, never retrofit it." },
  { icon: "fa-people-roof", title: "One team, one roof", desc: "Admin and IT working as a single unit — decisions made together, nothing lost between vendors." },
  { icon: "fa-hand-holding-hand", title: "Personalised, not a call centre", desc: "Direct access to the founders. Your account is never a ticket number." },
  { icon: "fa-scale-balanced", title: "Affordable & honest", desc: "Packages sized for growing providers, priced plainly, with no lock-in surprises." },
];

/* ---------- Founders ---------- */
const FOUNDERS = [
  {
    initials: "NS", name: "Niluki Silva", role: "Admin & Operations Lead",
    bio: "Niluki runs the operational heart of ProviderSync. A specialist in Australian healthcare administration, she has coordinated NDIS onboarding, aged care rostering and payroll, and ECE therapist teams — with deep working knowledge of the NDIS Practice Standards and aged care requirements.",
    points: ["NDIS client onboarding, coordination & compliance", "Aged Care rostering, scheduling & payroll", "ECE operations & therapist recruitment", "Allied health administration & provider support", "Workforce recruitment, onboarding & credentialing"],
  },
  {
    initials: "VM", name: "Viraj Maduranga", role: "IT & Digital Lead",
    bio: "Viraj builds and runs the technology side — websites, hosting, email, branding and SEO. With 6+ years across IT, Linux and VPS infrastructure and experience in Australian, US and Sri Lankan markets, he sets up complete digital operations for businesses from the ground up.",
    points: ["WordPress & healthcare-focused web development", "6+ years in IT, Linux, VPS & hosting", "SEO, branding & social media strategy", "Business email, domain & infrastructure setup", "Remote IT support & staff onboarding"],
  },
];

/* ---------- Stats ---------- */
const STATS = [
  { num: 3, suffix: "", label: "Healthcare sectors served" },
  { num: 12, suffix: "+", label: "Backend functions covered" },
  { num: 10, suffix: "+", label: "Hours saved weekly, typical client" },
  { num: 100, suffix: "%", label: "Remote & Australia-wide" },
];
