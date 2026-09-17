/* ============================================================
   ProviderSync — Site Data
   All editable content lives here. Update text, prices and
   contact details without touching the HTML pages.
   NOTE: Contact is EMAIL ONLY. No complimentary audit offers anywhere.
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

/* ---------- Lead capture (email-first) ---------- */
const LEAD = {
  checklist: {
    title: "The 2026 Provider Credential Cheat-Sheet",
    desc: "Every clearance and certificate your workers must hold — NDIS Worker Screening, WWCC, HLTAID011 First Aid, CPR, police checks — with renewal windows on one page.",
    cta: "Email me the cheat-sheet",
    subject: "Please send me the 2026 Provider Credential Cheat-Sheet",
  },
};

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
      "Compliance reporting and evidence organisation",
      "Rostering & support worker scheduling",
      "Claims, invoicing & payment reconciliation",
    ],
    pains: [
      { p: "Certification audits looming over every quarter", s: "Evidence maintained continuously against the Practice Standards" },
      { p: "Claims rejected over small errors", s: "Clean, verified claims submitted on schedule" },
      { p: "Worker screening & credential expiries slipping", s: "Tracked registers with renewal alerts before due dates" },
    ],
    compliance: "NDIS Act 2013 · NDIS Practice Standards · Quality & Safeguards Commission requirements · NDIS Worker Screening",
  },
  {
    id: "aged-care",
    icon: "fa-hand-holding-heart",
    img: "assets/img/aged-care.jpg",
    title: "Aged Care",
    short: "Residential, Support at Home & community services",
    intro:
      "Rosters, timesheets, payroll and compliance never stop in aged care. We keep the workforce engine running quietly in the background — every shift covered, every hour verified, every record current.",
    serve: [
      "Residential aged care facilities",
      "Support at Home providers — including former Home Care Package providers",
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
    compliance: "Strengthened Aged Care Quality Standards · Aged Care Act 2024 requirements · Support at Home program rules",
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
    compliance: "National Quality Framework · state and territory WWCC schemes · ACECQA-approved qualifications · National Principles for Child Safe Organisations",
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
      { icon: "fa-user-plus", title: "Client Onboarding & Intake", desc: "Client onboarding, service agreement preparation and record management across NDIS, Aged Care and Early Childhood Education.", points: ["Service agreement preparation", "Participant and client record management", "Intake coordination with families and coordinators"] },
      { icon: "fa-calendar-days", title: "Rostering & Scheduling", desc: "Workforce rostering and scheduling across NDIS, Aged Care and Early Childhood Education, with proactive coverage monitoring.", points: ["Shift planning and roster management", "Coverage gap monitoring", "Support worker allocation"] },
      { icon: "fa-money-check-dollar", title: "Payroll & Invoicing", desc: "Timesheets verified, payroll coordinated, and claims and invoices processed accurately.", points: ["Timesheet verification", "Payroll coordination", "Claims processing, invoicing and reconciliation"] },
      { icon: "fa-shield-halved", title: "Compliance & Reporting", desc: "Maintaining organised documentation in line with NDIS Practice Standards and Aged Care requirements, ready for review.", points: ["Incident report management", "Credential and worker screening registers", "Operational and compliance reporting"] },
      { icon: "fa-user-doctor", title: "Recruitment & Workforce", desc: "Recruiting, onboarding and managing compliance for support workers, allied health professionals and Early Childhood Education staff.", points: ["Interview and induction coordination", "WWCC, police check and screening verification", "Staff records and credential tracking"] },
      { icon: "fa-people-arrows", title: "Stakeholder Communication", desc: "Professional communication and coordination with participants, families, support coordinators and allied health professionals.", points: ["Family and participant correspondence", "Coordinator and therapist liaison", "Centre and family communication"] },
      { icon: "fa-address-book", title: "CRM & Client Database Management", desc: "Maintain accurate participant and client records, update service information, manage referrals, and keep databases organised, secure and current.", points: ["Participant and client record maintenance", "Referral and service-information updates", "Secure, organised database management"] },
      { icon: "fa-envelope-open-text", title: "Email & Document Administration", desc: "Manage shared inboxes, respond to administrative enquiries, prepare service agreements and correspondence, organise documents, and maintain digital records.", points: ["Shared inbox administration", "Service agreements and correspondence", "Digital document organisation"] },
      { icon: "fa-arrows-rotate", title: "Workflow Automation", desc: "Streamline repetitive administrative tasks through templates, digital workflows, automated reminders and system integrations to improve efficiency and reduce manual work.", points: ["Templates and repeatable workflows", "Automated reminders", "Practical system integrations"] },
      { icon: "fa-folder-tree", title: "Digital Filing & Record Management", desc: "Organise and maintain secure electronic filing systems for participant, employee and business records, keeping documentation accessible and ready for review.", points: ["Secure electronic filing structures", "Participant, employee and business records", "Accessible documentation for review"] },
    ],
  },
  {
    id: "it",
    group: "IT & Digital Solutions",
    lead: "Led by Viraj Maduranga",
    icon: "fa-laptop-code",
    img: "assets/img/it-code.jpg",
    blurb:
      "Technology for organisations that handle sensitive participant data, with practical security safeguards and support for your operational needs.",
    items: [
      { icon: "fa-globe", title: "Website Development", desc: "Custom, healthcare-focused WordPress websites with accessible design and secure enquiry forms.", points: ["Custom WordPress builds", "WCAG-conscious, mobile-first design", "Secure client enquiry & referral forms"] },
      { icon: "fa-user-shield", title: "Cybersecurity & Data Protection", desc: "Practical privacy and security safeguards, including encryption, access controls and staff security habits that support responsible participant-information handling.", points: ["MFA and role-based access setup", "Secure storage and file sharing", "Staff cyber-awareness training"] },
      { icon: "fa-gears", title: "Care Software Setup & Migration", desc: "Rostering, CRM and care-management platforms selected for your size, set up properly, and migrated without losing a record.", points: ["Platform selection & configuration", "Data migration & clean-up", "Workflow automation between tools"] },
      { icon: "fa-server", title: "IT Infrastructure", desc: "Business email, domains, DNS, hosting and managed VPS — professionally set up and maintained on Australian-friendly terms.", points: ["Business email setup (Google Workspace / M365)", "Domain, DNS & hosting management", "Managed VPS hosting & backups"] },
      { icon: "fa-magnifying-glass-chart", title: "SEO & Online Presence", desc: "Be found by the families and coordinators searching for providers in your area.", points: ["Local SEO optimisation", "Google Business Profile setup", "Analytics & directory listings"] },
      { icon: "fa-share-nodes", title: "Social Media & Branding", desc: "Brand identity, logo design and consistent presence across Facebook, Instagram and LinkedIn — with imagery and language that respects the people you support.", points: ["Brand identity & logo design", "Content strategy & posting", "Review management strategy"] },
      { icon: "fa-headset", title: "Remote IT Support", desc: "Staff IT onboarding, troubleshooting and software setup — on demand, without an in-house IT hire.", points: ["Staff IT onboarding & offboarding", "Remote troubleshooting", "Software setup & configuration"] },
      { icon: "fa-rotate", title: "Backup & Continuity", desc: "Backup and recovery planning designed to help your team restore access and records after a device or account incident.", points: ["Automated backup schedules", "Account recovery planning", "Incident-response support planning"] },
    ],
  },
];

/* ---------- Compliance & sensitivity (the rulebook section) ---------- */
const COMPLIANCE = [
  { icon: "fa-scale-balanced", title: "Privacy Act 1988 & the APPs", desc: "Sensitive information handled with consent where required, data minimisation, access controls, secure storage practices and appropriate retention processes." },
  { icon: "fa-file-shield", title: "NDIS Practice Standards", desc: "Evidence built into everyday workflow to help keep it organised and ready when certification or verification reviews occur." },
  { icon: "fa-id-card-clip", title: "Worker screening & credentials", desc: "NDIS Worker Screening for relevant roles, state and territory WWCC schemes, police checks, first aid — HLTAID011 (general) or HLTAID012 (education and care setting) — and CPR tracked with renewal alerts." },
  { icon: "fa-bell", title: "Notifiable Data Breaches scheme", desc: "Incident-response processes designed to support your organisation's assessment, escalation and notification obligations where they apply." },
  { icon: "fa-hand-holding-heart", title: "Aged Care Quality Standards", desc: "Documentation and reporting mapped to the Standards your assessors actually check." },
  { icon: "fa-heart", title: "Dignity in every word", desc: "Person-first language in every letter, post and web page. The people your clients support are people — our communications never forget it." },
];

/* ---------- How it works ---------- */
const PROCESS = [
  { n: "01", icon: "fa-envelope-open-text", title: "Email Us", desc: "Tell us what's eating your week. A founder — not a sales queue — replies within one business day." },
  { n: "02", icon: "fa-map", title: "Scoping & Proposal", desc: "A short scoping conversation, then a written proposal: functions covered, package, fixed monthly price." },
  { n: "03", icon: "fa-arrows-rotate", title: "We Sync In", desc: "Structured handover in 1–2 weeks. Systems connected, processes documented, nothing dropped." },
  { n: "04", icon: "fa-chart-line", title: "Ongoing Support", desc: "Weekly reporting, monthly reviews and direct founder access as your backend runs itself." },
];

/* ---------- Why us ---------- */
const ADVANTAGES = [
  { icon: "fa-notes-medical", title: "Healthcare-specific expertise", desc: "We understand NDIS, Aged Care & ECE — not generic BPO." },
  { icon: "fa-house-chimney", title: "Admin + IT under one roof", desc: "No juggling separate admin and IT vendors." },
  { icon: "fa-map-location-dot", title: "Australian regulatory fluency", desc: "Privacy Act, Practice Standards, worker screening — we work inside the rules you're assessed against." },
  { icon: "fa-seedling", title: "Small-provider friendly", desc: "Affordable packages designed for growing businesses." },
  { icon: "fa-wifi", title: "Remote-first delivery", desc: "Flexible support without geographic limitations." },
  { icon: "fa-user-tie", title: "Personalised service", desc: "Direct access to the founding team, not a call centre." },
];

/* ---------- Packages ---------- */
const PACKAGES = [
  {
    name: "Starter", price: "from A$1,500", per: "/month + GST",
    best: "New & micro providers finding their feet",
    features: ["Core admin: intake, records & invoicing", "Basic IT & email support", "Compliance document maintenance", "Monthly reporting", "Email support (next business day)"],
    featured: false,
  },
  {
    name: "Growth", price: "from A$3,000", per: "/month + GST",
    best: "Established providers ready to scale",
    features: ["Everything in Starter", "Rostering, payroll & timesheets", "Website maintenance + local SEO", "Recruitment & onboarding support", "Weekly reporting", "Priority support (same day)"],
    featured: true,
  },
  {
    name: "Complete", price: "from A$6,000", per: "/month + GST",
    best: "Mid-size providers wanting a full backend",
    features: ["Everything in Growth", "Compliance administration and evidence support", "Full IT, digital & social media", "Cybersecurity and data protection support", "Monthly strategy review calls", "Dedicated founder access"],
    featured: false,
  },
];

const ADDONS = [
  { icon: "fa-globe", title: "Website Build", price: "from A$1,800 + GST", desc: "Custom healthcare WordPress site with secure enquiry forms" },
  { icon: "fa-palette", title: "Brand Identity", price: "from A$1,200 + GST", desc: "Logo, palette, templates & brand guidelines" },
  { icon: "fa-user-shield", title: "Security Hardening", price: "from A$900 + GST", desc: "MFA rollout, access review, backup and incident-response setup" },
  { icon: "fa-file-shield", title: "Compliance Catch-up", price: "quoted", desc: "One-off documentation cleanup before a certification review" },
  { icon: "fa-clipboard-list", title: "Backend Audit", price: "from A$399 + GST", desc: "Detailed review of processes, documentation, systems and operational risks, with prioritised recommendations. The audit fee can be credited across the first four months of an ongoing package, as agreed in your proposal." },
];

/* ---------- FAQs ---------- */
const FAQS = [
  { q: "Are you a call centre or offshore VA service?", a: "Neither. ProviderSync is founder-led — you work directly with Niluki (admin & operations) and Viraj (IT & digital). We're a specialist team focused only on Australian healthcare providers, not a generic outsourcing pool." },
  { q: "How do you handle participant and client data?", a: "We support reasonable privacy safeguards under the Privacy Act 1988 and Australian Privacy Principles, including need-to-know access, secure storage practices, signed confidentiality agreements and incident-escalation processes. Data handling responsibilities are documented in every service agreement." },
  { q: "How does an engagement start?", a: "You email us. A founder replies within one business day, we have a short scoping conversation, and you receive a written proposal with a fixed monthly price. If it's not a fit, you'll know within a week — no pressure, no obligation." },
  { q: "Do we need to sign a long contract?", a: "Service terms, notice periods and any renewal arrangements are set out clearly in your proposal and service agreement. We keep arrangements practical for growing providers and explain all commercial terms before commencement." },
  { q: "Is a refundable security retainer required?", a: "To commence service, ProviderSync may require a refundable security retainer equal to three months of your selected monthly fee. After 12 months, it is returned following account reconciliation or, with your written approval, carried forward for a renewed annual term. It may only be applied to unpaid invoices or documented wind-down costs agreed in the service agreement. It is not payment for future services or a guarantee of business, compliance, audit or other outcomes. Full terms are confirmed before commencement." },
  { q: "How is my package scope set?", a: "Your written proposal documents the agreed systems, active client and staff volumes, payroll frequency, response targets, reporting cadence, included functions and any out-of-scope work. This keeps pricing clear as your organisation changes." },
  { q: "Can you work with our existing software?", a: "Yes. We work inside your current rostering, payroll and CRM platforms — and if you don't have systems yet, we'll recommend, set up and migrate you to affordable tools that fit your size." },
  { q: "What if we only need IT, or only admin?", a: "That's fine. Packages can be weighted toward either side. Many clients start with one function and add more as trust builds — the scoping conversation will show what makes sense first." },
];

/* ---------- Sync Score quiz ---------- */
const QUIZ = [
  { q: "Do you or senior staff spend more than 5 hours a week on rostering and scheduling?" },
  { q: "Have you had a claim or invoice rejected in the last 3 months?" },
  { q: "Is your compliance evidence assembled in a rush before certification reviews?" },
  { q: "Do worker screening, WWCC or First Aid expiries ever slip past you?" },
  { q: "Is your website outdated, or missing secure enquiry and referral forms?" },
  { q: "Do you rely on personal email (Gmail/Hotmail) instead of a business domain?" },
  { q: "Could a lost laptop or hacked account expose participant information today?" },
  { q: "Are you the only person who knows how your backend actually works?" },
];

const QUIZ_VERDICTS = [
  { max: 1, label: "Well Synced", tone: "good", msg: "Your backend is in strong shape. Your full Sync Report includes the small refinements that could still win back a few hours a week." },
  { max: 4, label: "Partly Synced", tone: "mid", msg: "There are real leaks here — hours, dollars and a little compliance risk. Your full Sync Report maps which ones to fix first." },
  { max: 8, label: "Out of Sync", tone: "high", msg: "Your backend is carrying serious time, cost and compliance risk. Your full Sync Report prioritises the fastest, highest-impact fixes." },
];

/* ---------- Values ---------- */
const VALUES = [
  { icon: "fa-heart-pulse", title: "Care behind the care", desc: "Our work exists so providers can serve their clients better. That purpose shapes every process we run." },
  { icon: "fa-file-circle-check", title: "Compliance-first", desc: "Regulatory accuracy is non-negotiable. We build evidence continuously, never retrofit it." },
  { icon: "fa-people-roof", title: "One team, one roof", desc: "Admin and IT working as a single unit — decisions made together, nothing lost between vendors." },
  { icon: "fa-hand-holding-hand", title: "Personalised, not a call centre", desc: "Direct access to the founders. Your account is never a ticket number." },
  { icon: "fa-scale-balanced", title: "Affordable & honest", desc: "Packages sized for growing providers, priced plainly, with clear commercial terms." },
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
    bio: "Viraj builds and runs the technology side — websites, security, hosting, email, branding and SEO. With 6+ years across IT, Linux and VPS infrastructure and experience in Australian, US and Sri Lankan markets, he sets up complete, secure digital operations for businesses from the ground up.",
    points: ["WordPress & healthcare-focused web development", "Cybersecurity & privacy-aligned data handling", "6+ years in IT, Linux, VPS & hosting", "SEO, branding & social media strategy", "Business email, domain & infrastructure setup"],
  },
];

/* ---------- Stats ---------- */
const STATS = [
  { num: 3, suffix: "", label: "Healthcare sectors served" },
  { num: 18, suffix: "+", label: "Backend functions covered" },
  { num: 10, suffix: "+", label: "Hours saved weekly, typical client" },
  { num: 100, suffix: "%", label: "Remote & Australia-wide" },
];
