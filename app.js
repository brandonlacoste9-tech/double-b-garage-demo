/* EN-only i18n for Double B Garage demo */
const i18n = {
  en: {
    "nav.services": "Services",
    "nav.why": "Why us",
    "nav.gallery": "Gallery",
    "nav.faq": "FAQ",
    "nav.reviews": "Reviews",
    "nav.contact": "Contact",
    "nav.call": "(260) 489-2734",
    "hero.kicker": "Fort Wayne, Indiana · Truck & auto repair · Open 24/7",
    "hero.title": "Back on the road,<br>day or night.",
    "hero.sub": "Rated 4.5 out of 5 from 27 reviews: truck & trailer repair, tires, brakes and 24-hour roadside assistance — fast, honest work at fair prices.",
    "hero.cta1": "Call (260) 489-2734",
    "hero.cta2": "See services",
    "trust.t1t": "Open 24 hours",
    "trust.t1d": "Road service, day and night",
    "trust.t2t": "Trucks & trailers",
    "trust.t2d": "Heavy-duty repair specialists",
    "trust.t3t": "Fair, honest pricing",
    "trust.t3d": "No price gouging, ever",
    "stats.s1n": "24/7",
    "stats.s1l": "roadside assistance",
    "stats.s2n": "Trucks",
    "stats.s2l": "& trailers repaired",
    "stats.s3n": "75 mi",
    "stats.s3l": "service radius around Fort Wayne",
    "stats.s4n": "4.5\u2605",
    "stats.s4l": "from 27 customer reviews",
    "services.kicker": "What we do",
    "services.title": "Truck, trailer & auto repair under one roof",
    "services.s1t": "Truck & trailer repair",
    "services.s1d": "Heavy-duty repair for trucks and trailers — our specialty, done right.",
    "services.s2t": "Tire sales & changes",
    "services.s2d": "New and used tires for cars and trucks, mounted fast so you keep rolling.",
    "services.s3t": "24-hour road service",
    "services.s3d": "Breakdown help around the clock — jump starts, tire changes and more, on site.",
    "services.s4t": "Engine repair",
    "services.s4d": "Engine diagnostics and repair for trucks and cars — quick, honest assessment.",
    "services.s5t": "Brakes & rotors",
    "services.s5d": "Brake pad and rotor service to keep you stopping safely, whatever you drive.",
    "services.s6t": "Alternators, welding & hoses",
    "services.s6d": "Alternators, wheel bearings, hydraulic hose repair and portable welding.",
    "why.kicker": "Why choose us",
    "why.title": "Honest work that gets you moving",
    "why.intro": "Drivers trust us because we show up fast, charge fair prices and treat every vehicle like it matters. From roadside rescues to full repairs, we do what we say.",
    "why.l1t": "Open around the clock",
    "why.l1d": "Breakdowns don't keep office hours — neither do we.",
    "why.l2t": "Heavy-duty know-how",
    "why.l2d": "Trucks and trailers are our bread and butter, not an afterthought.",
    "why.l3t": "Fair pricing",
    "why.l3d": "Customers call our prices fair — no upsells, no surprises.",
    "why.l4t": "Fast turnaround",
    "why.l4d": "Quick service that gets you back on the road on time.",
    "gallery.kicker": "The shop in action",
    "gallery.title": "Real trucks, real repairs",
    "gallery.c1": "Engine work done with care",
    "gallery.c2": "24-hour roadside assistance",
    "reviews.kicker": "Word on the street",
    "reviews.title": "Rated 4.5 out of 5 by Fort Wayne drivers",
    "reviews.more": "See what customers say about us — 4.5 stars from 27 reviews",
    "faq.kicker": "Good to know",
    "faq.title": "Frequently asked questions",
    "faq.q1": "Do you really offer 24-hour roadside service?",
    "faq.a1": "Yes — we run 24-hour road service for trucks and cars, including jump starts and tire changes on site.",
    "faq.q2": "Do you work on regular cars, or only trucks?",
    "faq.a2": "Both. Trucks and trailers are our specialty, but we service cars too — tires, brakes, engines and more.",
    "faq.q3": "Do you sell tires?",
    "faq.a3": "Yes — a variety of new and used tires for cars and trucks, mounted on the spot.",
    "faq.q4": "How do I get a quote?",
    "faq.a4": "Call us at (260) 489-2734 any time — we will assess the job and give you a fair price up front.",
    "contact.kicker": "Come see us",
    "contact.title": "Get in touch",
    "contact.addr": "Address",
    "contact.phone": "Phone",
    "contact.hours": "Hours",
    "contact.hoursVal": "Open 24 hours<br>7 days a week",
    "contact.cta": "Call now",
    "footer.tag": "Truck & auto repair · Fort Wayne, Indiana"
  }
};

function applyLang(lang) {
  const dict = i18n[lang] || i18n.en;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.documentElement.lang = lang;
}

document.addEventListener("DOMContentLoaded", () => {
  applyLang("en");

  const menuBtn = document.getElementById("menuBtn");
  const nav = document.getElementById("mainNav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
    nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => nav.classList.remove("open")));
  }

  const header = document.querySelector(".site-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  }, { passive: true });
});
