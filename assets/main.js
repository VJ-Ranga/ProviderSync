/* ============================================================
   ProviderSync — Shared behaviour
   Header/footer injection · reveals · counters · quiz · forms
   ============================================================ */

const page = document.body.dataset.page || "home";
const enquiryMail = `mailto:${SITE.email}?subject=${encodeURIComponent("Enquiry — backend support for our organisation")}&body=${encodeURIComponent("Hi ProviderSync,\n\nWe'd like to talk about backend support.\n\nOrganisation:\nSector (NDIS / Aged Care / ECE):\nBiggest admin or IT headache right now:\n\nBest email to reach us:\n")}`;
const leadMail = (subject) => `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("Hi ProviderSync,\n\nPlease send it to this email address:\n\nOrganisation (optional):\nSector (optional):\n")}`;

/* ---------- Header ---------- */
document.getElementById("siteHeader").innerHTML = `
  <nav class="navbar navbar-expand-lg fixed-top navbar-ps" aria-label="Main navigation">
    <div class="container">
      <a class="navbar-brand" href="index.html" aria-label="ProviderSync home">
        <i class="fa-solid fa-arrows-rotate brand-icon" aria-hidden="true"></i><span class="brand-provider">Provider</span><span class="brand-sync">Sync</span>
      </a>
      <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fa-solid fa-bars text-green fs-3"></i>
      </button>
      <div class="collapse navbar-collapse" id="mainNav">
        <ul class="navbar-nav ms-auto align-items-lg-center">
          ${NAV.map(n => `<li class="nav-item"><a class="nav-link${n.page === page ? " active" : ""}" ${n.page === page ? 'aria-current="page"' : ""} href="${n.href}">${n.label}</a></li>`).join("")}
          <li class="nav-item ms-lg-3 mt-2 mt-lg-0"><a class="btn btn-ps btn-sm px-4 py-2" href="contact.html"><i class="fa-solid fa-envelope-open-text"></i>Enquire</a></li>
        </ul>
      </div>
    </div>
  </nav>`;

/* ---------- Footer ---------- */
document.getElementById("siteFooter").innerHTML = `
  <footer class="footer-ps">
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-4">
          <div class="footer-brand"><i class="fa-solid fa-arrows-rotate text-amber me-1"></i>Provider<span class="text-amber">Sync</span></div>
          <p class="mt-3 small" style="max-width:330px">${SITE.tagline} Specialist backend outsourcing — admin, compliance &amp; IT — for Australian NDIS, Aged Care &amp; Early Childhood Education providers.</p>
          <div class="small text-amber mt-2"><i class="fa-solid fa-location-dot me-2"></i>${SITE.location}</div>
        </div>
        <div class="col-6 col-lg-2">
          <h6>Company</h6>
          <ul class="list-unstyled small lh-lg">
            <li><a href="about.html">About us</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="pricing.html">Pricing</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div class="col-6 col-lg-3">
          <h6>Who we serve</h6>
          <ul class="list-unstyled small lh-lg">
            <li><a href="sectors.html#ndis">NDIS providers</a></li>
            <li><a href="sectors.html#aged-care">Aged Care</a></li>
            <li><a href="sectors.html#ece">Early Childhood Education</a></li>
            <li><a href="contact.html#quiz">Sync Score check</a></li>
          </ul>
        </div>
        <div class="col-lg-3">
          <h6>Get in touch</h6>
          <ul class="list-unstyled small lh-lg">
            <li><i class="fa-solid fa-envelope me-2 text-amber"></i><a href="mailto:${SITE.email}">${SITE.email}</a></li>
            <li><i class="fa-regular fa-clock me-2 text-amber"></i>${SITE.hours}</li>
            <li><i class="fa-solid fa-reply me-2 text-amber"></i>${SITE.response}</li>
          </ul>
          <h6 class="mt-3">${LEAD.notes.title}</h6>
          <p class="small mb-2" style="color:#9FB3A8">${LEAD.notes.desc}</p>
          <a class="btn btn-ps btn-sm px-4 py-2" href="${leadMail(LEAD.notes.subject)}"><i class="fa-solid fa-envelope"></i>${LEAD.notes.cta}</a>
        </div>
      </div>
      <hr class="mt-4" />
      <div class="d-flex flex-wrap justify-content-between gap-2 small">
        <span>© ${new Date().getFullYear()} ProviderSync · Founded 2025 · ${SITE.abn}</span>
        <span style="color:#7E8F85">Demo by Cloudycode — content pending client confirmation</span>
      </div>
    </div>
  </footer>
  <a href="${enquiryMail}" class="mail-float" aria-label="Email ProviderSync"><span class="pulse"></span><i class="fa-solid fa-envelope"></i></a>
  <button class="to-top" id="toTop" aria-label="Back to top"><i class="fa-solid fa-arrow-up"></i></button>`;

/* ---------- Navbar scroll + back-to-top ---------- */
const navEl = document.querySelector(".navbar-ps");
const toTop = document.getElementById("toTop");
window.addEventListener("scroll", () => {
  navEl.classList.toggle("scrolled", window.scrollY > 40);
  toTop.classList.toggle("show", window.scrollY > 500);
}, { passive: true });
toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

/* ---------- Scroll reveal + counters (scroll-position based — no IntersectionObserver,
   so content can never be left invisible if observer callbacks don't fire) ---------- */
function animateCount(el) {
  const target = +el.dataset.count;
  const suffix = el.dataset.suffix || "";
  const dur = 1400, t0 = performance.now();
  (function tick(t) {
    const p = Math.min((t - t0) / dur, 1);
    el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  })(t0);
  /* guarantee the final value even if animation frames are throttled */
  setTimeout(() => { el.textContent = target + suffix; }, dur + 150);
}

function checkInView() {
  const limit = window.innerHeight * 0.92;
  document.querySelectorAll(".reveal:not(.in)").forEach(el => {
    if (el.getBoundingClientRect().top < limit) el.classList.add("in");
  });
  document.querySelectorAll("[data-count]:not(.counted)").forEach(el => {
    if (el.getBoundingClientRect().top < limit) { el.classList.add("counted"); animateCount(el); }
  });
}
function observeReveals() { checkInView(); }

window.addEventListener("scroll", checkInView, { passive: true });
window.addEventListener("resize", checkInView, { passive: true });
window.addEventListener("load", checkInView);
document.addEventListener("DOMContentLoaded", checkInView);
/* polling safety net: guarantees reveals & counters fire even if scroll events are missed */
const inViewPoll = setInterval(() => {
  checkInView();
  if (!document.querySelector(".reveal:not(.in)") && !document.querySelector("[data-count]:not(.counted)")) clearInterval(inViewPoll);
}, 500);
/* whatever is still hidden after 2.5s becomes visible */
setTimeout(() => document.querySelectorAll(".reveal:not(.in)").forEach(el => el.classList.add("in")), 2500);

/* ---------- Shared renderers (run only if container present) ---------- */
const $ = id => document.getElementById(id);

/* Stats band */
if ($("statsBand")) {
  $("statsBand").innerHTML = STATS.map(s => `
    <div class="col-6 col-lg-3 text-center stat-block">
      <div class="num" data-count="${s.num}" data-suffix="${s.suffix}">0</div>
      <div class="label">${s.label}</div>
    </div>`).join("");
  checkInView();
}

/* Sector preview cards (home) */
if ($("sectorPreview")) {
  $("sectorPreview").innerHTML = SECTORS.map((s, i) => `
    <div class="col-md-4 reveal reveal-d${i + 1}">
      <div class="sector-card">
        <div class="sector-head" style="background:linear-gradient(rgba(10,64,35,.82),rgba(15,92,51,.82)), url('${s.img}') center/cover">
          <i class="fa-solid ${s.icon} head-icon" aria-hidden="true"></i>
          <h4 class="mt-3 mb-1 text-white">${s.title}</h4>
          <div class="small" style="opacity:.85">${s.short}</div>
        </div>
        <div class="sector-body">
          <ul class="check-list">${s.serve.slice(0, 3).map(p => `<li><i class="fa-solid fa-circle-check"></i>${p}</li>`).join("")}</ul>
        </div>
        <div class="sector-foot"><a href="sectors.html#${s.id}" class="fw-semibold text-decoration-none">How we help <i class="fa-solid fa-arrow-right ms-1"></i></a></div>
      </div>
    </div>`).join("");
  observeReveals($("sectorPreview"));
}

/* Process steps */
if ($("processGrid")) {
  $("processGrid").innerHTML = PROCESS.map((p, i) => `
    <div class="col-md-6 col-lg-3 reveal reveal-d${i % 4}">
      <div class="step-card">
        <div class="icon-box icon-amber"><i class="fa-solid ${p.icon}"></i></div>
        <div class="step-num">${p.n}</div>
        <h5 class="mt-2">${p.title}</h5>
        <p class="text-muted-ps small mb-0">${p.desc}</p>
      </div>
    </div>`).join("");
  observeReveals($("processGrid"));
}

/* Advantages */
if ($("whyGrid")) {
  $("whyGrid").innerHTML = ADVANTAGES.map((a, i) => `
    <div class="col-md-6 reveal reveal-d${i % 3}">
      <div class="value-row">
        <div class="ico"><i class="fa-solid ${a.icon}"></i></div>
        <div><h6 class="mb-1">${a.title}</h6><p class="text-muted-ps small mb-0">${a.desc}</p></div>
      </div>
    </div>`).join("");
  observeReveals($("whyGrid"));
}

/* Compliance & sensitivity grid */
if ($("complianceGrid")) {
  $("complianceGrid").innerHTML = COMPLIANCE.map((c, i) => `
    <div class="col-md-6 col-lg-4 reveal reveal-d${i % 3}">
      <div class="card-ps">
        <div class="icon-box ${i % 2 ? "icon-amber" : "icon-green"}"><i class="fa-solid ${c.icon}"></i></div>
        <h5 class="h6 fw-semibold">${c.title}</h5>
        <p class="text-muted-ps small mb-0">${c.desc}</p>
      </div>
    </div>`).join("");
  observeReveals();
}

/* Lead magnet card (credential cheat-sheet) */
if ($("leadMagnet")) {
  $("leadMagnet").innerHTML = `
    <div class="lead-card reveal">
      <div class="row g-4 align-items-center">
        <div class="col-auto d-none d-sm-block"><div class="lead-badge"><i class="fa-solid fa-file-circle-check"></i></div></div>
        <div class="col">
          <h3 class="h4 mb-1 text-white">${LEAD.checklist.title}</h3>
          <p class="small mb-0" style="color:#DCEBE2">${LEAD.checklist.desc}</p>
        </div>
        <div class="col-12 col-lg-auto">
          <a class="btn btn-ps" href="${leadMail(LEAD.checklist.subject)}"><i class="fa-solid fa-envelope"></i>${LEAD.checklist.cta}</a>
        </div>
      </div>
    </div>`;
  observeReveals();
}

/* Testimonials */
if ($("quoteGrid")) {
  $("quoteGrid").innerHTML = TESTIMONIALS.map((t, i) => `
    <div class="col-md-4 reveal reveal-d${i + 1}">
      <div class="quote-card">
        <p class="quote">${t.quote}</p>
        <div class="quote-who">
          <div class="avatar"><i class="fa-solid ${t.icon}"></i></div>
          <div><div class="fw-semibold small">${t.name}</div><div class="text-muted-ps" style="font-size:.8rem">${t.role}</div></div>
        </div>
      </div>
    </div>`).join("");
  observeReveals($("quoteGrid"));
}

/* Full service groups (services page) */
if ($("serviceGroups")) {
  $("serviceGroups").innerHTML = SERVICES.map(g => `
    <section class="section${g.id === "it" ? " bg-mist" : ""}" id="${g.id}">
      <div class="container">
        <div class="row g-4 align-items-center mb-5">
          <div class="col-lg-6 reveal">
            <span class="role-chip"><i class="fa-solid ${g.icon} me-1"></i>${g.lead}</span>
            <h2 class="section-title mt-3">${g.group}</h2>
            <p class="page-lead">${g.blurb}</p>
          </div>
          <div class="col-lg-6 reveal reveal-d1">
            <img src="${g.img}" alt="${g.group}" class="img-fluid photo-frame" />
          </div>
        </div>
        <div class="row g-4">
          ${g.items.map((it, i) => `
            <div class="col-md-6 col-lg-4 reveal reveal-d${i % 3}">
              <div class="card-ps">
                <div class="icon-box ${i % 2 ? "icon-amber" : "icon-green"}"><i class="fa-solid ${it.icon}"></i></div>
                <h5>${it.title}</h5>
                <p class="text-muted-ps small">${it.desc}</p>
                <ul class="check-list">${it.points.map(p => `<li><i class="fa-solid fa-check"></i>${p}</li>`).join("")}</ul>
              </div>
            </div>`).join("")}
        </div>
      </div>
    </section>`).join("");
  observeReveals($("serviceGroups"));
}

/* Sector tabs (sectors page) */
if ($("sectorTabs")) {
  $("sectorTabs").innerHTML = SECTORS.map((s, i) => `
    <button class="ps-tab${i === 0 ? " active" : ""}" data-tab="${s.id}" type="button" role="tab" aria-selected="${i === 0}">
      <i class="fa-solid ${s.icon}"></i>${s.title}
    </button>`).join("");

  $("sectorPanes").innerHTML = SECTORS.map((s, i) => `
    <div class="ps-tab-pane${i === 0 ? " active" : ""}" id="pane-${s.id}" role="tabpanel">
      <div class="row g-4 align-items-start">
        <div class="col-lg-5">
          <img src="${s.img}" alt="${s.title}" class="img-fluid photo-frame mb-4" />
          <div class="card-ps h-auto">
            <div class="icon-box icon-green"><i class="fa-solid ${s.icon}"></i></div>
            <h3 class="h4">${s.title}</h3>
            <p class="text-muted-ps">${s.intro}</p>
            <h6 class="mt-4 mb-2">Who we support</h6>
            <ul class="check-list">${s.serve.map(p => `<li><i class="fa-solid fa-circle-check"></i>${p}</li>`).join("")}</ul>
            <div class="mt-4 p-3 rounded-3 bg-mist small"><i class="fa-solid fa-shield-halved text-green me-2"></i><strong>Compliance focus:</strong> ${s.compliance}</div>
          </div>
        </div>
        <div class="col-lg-7">
          <div class="card-ps h-auto mb-4">
            <h6 class="mb-3"><i class="fa-solid fa-list-check text-amber me-2"></i>What we take off your plate</h6>
            <div class="row">
              <div class="col-sm-6"><ul class="check-list">${s.handle.slice(0, 3).map(p => `<li><i class="fa-solid fa-check"></i>${p}</li>`).join("")}</ul></div>
              <div class="col-sm-6"><ul class="check-list">${s.handle.slice(3).map(p => `<li><i class="fa-solid fa-check"></i>${p}</li>`).join("")}</ul></div>
            </div>
          </div>
          <h6 class="mb-3 ps-1">Before &amp; after ProviderSync</h6>
          ${s.pains.map(x => `
            <div class="pain-row">
              <div class="pain"><i class="fa-solid fa-circle-exclamation"></i>${x.p}</div>
              <div class="arrow"><i class="fa-solid fa-arrows-rotate"></i></div>
              <div class="fix"><i class="fa-solid fa-circle-check"></i>${x.s}</div>
            </div>`).join("")}
          <a href="contact.html" class="btn btn-green mt-3"><i class="fa-solid fa-envelope-open-text"></i>Request a ${s.title.replace(" Providers", "")} proposal</a>
        </div>
      </div>
    </div>`).join("");

  const tabs = document.querySelectorAll(".ps-tab");
  function activate(id) {
    tabs.forEach(t => { const on = t.dataset.tab === id; t.classList.toggle("active", on); t.setAttribute("aria-selected", on); });
    document.querySelectorAll(".ps-tab-pane").forEach(p => p.classList.toggle("active", p.id === "pane-" + id));
  }
  tabs.forEach(t => t.addEventListener("click", () => { activate(t.dataset.tab); history.replaceState(null, "", "#" + t.dataset.tab); }));
  const hash = location.hash.replace("#", "");
  if (SECTORS.some(s => s.id === hash)) activate(hash);
}

/* Pricing */
if ($("priceGrid")) {
  $("priceGrid").innerHTML = PACKAGES.map((p, i) => `
    <div class="col-md-6 col-lg-4 reveal reveal-d${i + 1}">
      <div class="price-card${p.featured ? " featured" : ""}">
        ${p.featured ? '<span class="ribbon">Most popular</span>' : ""}
        <h4>${p.name}</h4>
        <p class="text-muted-ps small mb-2">${p.best}</p>
        <div class="price mb-3">${p.price}<span class="fs-6 text-muted-ps fw-normal" style="font-family:var(--font-body)">${p.per}</span></div>
        <ul class="check-list mb-4">${p.features.map(f => `<li><i class="fa-solid fa-check"></i>${f}</li>`).join("")}</ul>
        <a href="contact.html" class="btn ${p.featured ? "btn-ps" : "btn-green"} w-100 justify-content-center">Start with ${p.name}</a>
      </div>
    </div>`).join("");
  observeReveals($("priceGrid"));
}

if ($("addonGrid")) {
  $("addonGrid").innerHTML = ADDONS.map((a, i) => `
    <div class="col-sm-6 col-lg-3 reveal reveal-d${i % 4}">
      <div class="card-ps text-center">
        <div class="icon-box icon-amber mx-auto"><i class="fa-solid ${a.icon}"></i></div>
        <h6>${a.title}</h6>
        <div class="text-green fw-bold mb-1">${a.price}</div>
        <p class="text-muted-ps small mb-0">${a.desc}</p>
      </div>
    </div>`).join("");
  observeReveals($("addonGrid"));
}

/* FAQ */
if ($("faqAccordion")) {
  $("faqAccordion").innerHTML = FAQS.map((f, i) => `
    <div class="accordion-item">
      <h3 class="accordion-header">
        <button class="accordion-button${i ? " collapsed" : ""}" type="button" data-bs-toggle="collapse" data-bs-target="#faq${i}" aria-expanded="${!i}">${f.q}</button>
      </h3>
      <div id="faq${i}" class="accordion-collapse collapse${i ? "" : " show"}" data-bs-parent="#faqAccordion">
        <div class="accordion-body">${f.a}</div>
      </div>
    </div>`).join("");
}

/* Values (about) */
if ($("valuesGrid")) {
  $("valuesGrid").innerHTML = VALUES.map((v, i) => `
    <div class="col-md-6 reveal reveal-d${i % 3}">
      <div class="value-row">
        <div class="ico"><i class="fa-solid ${v.icon}"></i></div>
        <div><h6 class="mb-1">${v.title}</h6><p class="text-muted-ps small mb-0">${v.desc}</p></div>
      </div>
    </div>`).join("");
  observeReveals($("valuesGrid"));
}

/* Founders (about) */
if ($("founderGrid")) {
  $("founderGrid").innerHTML = FOUNDERS.map((f, i) => `
    <div class="col-lg-6 reveal reveal-d${i + 1}">
      <div class="founder-card">
        <div class="d-flex align-items-center gap-3 mb-3">
          <div class="founder-avatar">${f.initials}</div>
          <div>
            <h4 class="mb-1">${f.name}</h4>
            <span class="role-chip">${f.role}</span>
          </div>
        </div>
        <p class="text-muted-ps">${f.bio}</p>
        <ul class="check-list">${f.points.map(p => `<li><i class="fa-solid fa-circle-check"></i>${p}</li>`).join("")}</ul>
      </div>
    </div>`).join("");
  observeReveals($("founderGrid"));
}

/* ---------- Contact form ---------- */
if ($("contactForm")) {
  const form = $("contactForm");
  const sectorSel = $("cfSector");
  sectorSel.innerHTML = '<option value="">Select your sector…</option>' +
    SECTORS.map(s => `<option>${s.title}</option>`).join("") + "<option>Other / not sure</option>";

  form.addEventListener("submit", e => {
    e.preventDefault();
    if (!form.checkValidity()) { form.classList.add("was-validated"); return; }
    const d = Object.fromEntries(new FormData(form).entries());
    const body = `Hi ProviderSync,%0D%0A%0D%0AName: ${encodeURIComponent(d.name)}%0D%0AOrganisation: ${encodeURIComponent(d.org)}%0D%0ASector: ${encodeURIComponent(d.sector)}%0D%0AReply to: ${encodeURIComponent(d.email)}%0D%0A%0D%0A${encodeURIComponent(d.message)}`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent("Proposal request — " + d.org)}&body=${body}`;
    $("formSent").classList.remove("d-none");
    form.reset();
    form.classList.remove("was-validated");
  });
}

/* ---------- Sync Score quiz ---------- */
if ($("quizBox")) {
  let idx = 0, yes = 0;
  const box = $("quizBox");

  function renderQ() {
    const pct = Math.round((idx / QUIZ.length) * 100);
    box.innerHTML = `
      <div class="d-flex justify-content-between small text-muted-ps mb-2">
        <span>Question ${idx + 1} of ${QUIZ.length}</span><span>${pct}%</span>
      </div>
      <div class="quiz-progress mb-4"><div class="bar" style="width:${pct}%"></div></div>
      <div class="quiz-q active">
        <h4 class="mb-4">${QUIZ[idx].q}</h4>
        <div class="row g-3">
          <div class="col-sm-6"><button class="quiz-btn" data-a="1" type="button"><i class="fa-solid fa-circle-check"></i>Yes, that's us</button></div>
          <div class="col-sm-6"><button class="quiz-btn" data-a="0" type="button"><i class="fa-regular fa-circle"></i>No / rarely</button></div>
        </div>
      </div>`;
    box.querySelectorAll(".quiz-btn").forEach(b => b.addEventListener("click", () => {
      yes += +b.dataset.a;
      idx++;
      idx < QUIZ.length ? renderQ() : renderResult();
    }));
  }

  function renderResult() {
    const v = QUIZ_VERDICTS.find(x => yes <= x.max);
    const pct = Math.round((yes / QUIZ.length) * 100);
    box.innerHTML = `
      <div class="text-center">
        <div class="score-dial" style="--pct:${pct}">
          <div class="val">${yes}</div><div class="of">of ${QUIZ.length} signs</div>
        </div>
        <h3 class="mt-4 verdict-${v.tone}">${v.label}</h3>
        <p class="text-muted-ps mx-auto" style="max-width:520px">${v.msg}</p>
        <div class="mx-auto mt-4 text-start" style="max-width:460px">
          <label class="fw-semibold small mb-2" for="quizEmail">Where should we send your full Sync Report?</label>
          <div class="d-flex flex-wrap gap-2 form-ps">
            <input class="form-control flex-grow-1" style="min-width:220px" id="quizEmail" type="email" placeholder="you@yourorganisation.com.au" />
            <button class="btn btn-ps" type="button" id="quizSend"><i class="fa-solid fa-paper-plane"></i>Send my report</button>
          </div>
          <p class="small text-muted-ps mt-2 mb-0"><i class="fa-solid fa-lock me-1"></i>Used once, to send your report. Handled under the Australian Privacy Principles — never shared, never spammed.</p>
        </div>
        <button class="btn btn-ghost-green mt-4" type="button" id="quizRetry"><i class="fa-solid fa-arrows-rotate"></i>Retake</button>
      </div>`;
    $("quizSend").addEventListener("click", () => {
      const em = $("quizEmail").value.trim();
      if (!em || !em.includes("@")) { $("quizEmail").classList.add("is-invalid"); $("quizEmail").focus(); return; }
      window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(`Sync Report request — score ${yes}/${QUIZ.length} (${v.label})`)}&body=${encodeURIComponent(`Hi ProviderSync,\n\nI scored ${yes}/${QUIZ.length} (${v.label}) on the Sync Score check.\nPlease send my full Sync Report to: ${em}\n\nOrganisation:\nSector (NDIS / Aged Care / ECE):\n`)}`;
    });
    $("quizRetry").addEventListener("click", () => { idx = 0; yes = 0; renderQ(); });
  }

  renderQ();
}
