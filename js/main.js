/* ============================================================
   main.js — UI wiring: language toggle, mobile menu, project
   filter, scroll-reveal, contact form (Formspree + fallback).
   ============================================================ */

(function () {
  "use strict";

  // ---- Year ----
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---- Language ----
  if (window.initLang) window.initLang();
  var langToggle = document.getElementById("langToggle");
  if (langToggle) {
    langToggle.addEventListener("click", function () {
      var next = (window.currentLang === "ja") ? "en" : "ja";
      window.applyLang(next);
    });
  }

  // ---- Mobile menu ----
  var menuToggle = document.getElementById("menuToggle");
  var navLinks = document.querySelector(".nav-links");
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      var open = navLinks.classList.toggle("open");
      menuToggle.classList.toggle("open", open);
      menuToggle.setAttribute("aria-expanded", String(open));
    });
    navLinks.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuToggle.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ---- Project filter ----
  var currentFilter = "all";
  window.applyFilter = function () {
    document.querySelectorAll(".proj-card").forEach(function (card) {
      var show = currentFilter === "all" || card.getAttribute("data-cat") === currentFilter;
      card.style.display = show ? "" : "none";
    });
  };
  var filterBar = document.getElementById("filterBar");
  if (filterBar) {
    filterBar.addEventListener("click", function (e) {
      var btn = e.target.closest(".filter-btn");
      if (!btn) return;
      filterBar.querySelectorAll(".filter-btn").forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      currentFilter = btn.getAttribute("data-filter");
      window.applyFilter();
    });
  }

  // ---- Scroll reveal ----
  var io = null;
  window.observeReveals = function () {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
      return;
    }
    if (!io) {
      io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
        });
      }, { threshold: 0.12 });
    }
    document.querySelectorAll(".reveal:not(.in)").forEach(function (el) { io.observe(el); });
  };

  // Tag the static sections for reveal, then observe.
  document.querySelectorAll(".svc-card, .skill-group, .about-card, .contact-form, .contact-direct, .section-head")
    .forEach(function (el) { el.classList.add("reveal"); });

  // ---- Contact form (Formspree with graceful fallback) ----
  var form = document.getElementById("contactForm");
  var note = document.getElementById("formNote");
  function t(key) {
    var d = window.I18N && window.I18N[window.currentLang || "ja"];
    return (d && d[key]) || "";
  }
  if (form) {
    form.addEventListener("submit", function (e) {
      var action = form.getAttribute("action") || "";
      var configured = action.indexOf("YOUR_FORM_ID") === -1 && /formspree\.io\/f\/.+/.test(action);

      // Fallback: no Formspree endpoint set yet -> open mail client.
      if (!configured) {
        e.preventDefault();
        var name = (form.name && form.name.value) || "";
        var email = (form.email && form.email.value) || "";
        var msg = (form.message && form.message.value) || "";
        if (note) { note.textContent = t("contact.fallback"); note.className = "form-note"; }
        var body = encodeURIComponent(msg + "\n\n---\n" + name + " <" + email + ">");
        var subject = encodeURIComponent("[Portfolio] " + (name || "Inquiry"));
        window.location.href = "mailto:liquitex@gmail.com?subject=" + subject + "&body=" + body;
        return;
      }

      // Configured: AJAX submit to Formspree, stay on page.
      e.preventDefault();
      if (note) { note.textContent = t("contact.sending"); note.className = "form-note"; }
      fetch(action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      }).then(function (res) {
        if (res.ok) {
          form.reset();
          if (note) { note.textContent = t("contact.ok"); note.className = "form-note ok"; }
        } else {
          if (note) { note.textContent = t("contact.err"); note.className = "form-note err"; }
        }
      }).catch(function () {
        if (note) { note.textContent = t("contact.err"); note.className = "form-note err"; }
      });
    });
  }

  // ---- Initial render ----
  if (window.renderProjects) window.renderProjects(window.currentLang || "ja");
  window.observeReveals();
})();
