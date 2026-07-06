// Footer year
(function() {
  const el = document.getElementById("footergen");
  if (!el) return;
  const year = new Date().getFullYear();
  el.textContent = `© ${year} Manhakkim`;
})();

// Mailto helper
function mailtoo() {
  const subject = document.getElementById("subjecte").value || "";
  const body = document.getElementById("bodye").value || "";
  const emailFrom = document.getElementById("emailfrom").value || "";
  const composed = `From: ${emailFrom}\n\n${body}`;
  const s = encodeURIComponent(subject);
  const b = encodeURIComponent(composed);
  window.location.href = `mailto:lhakim1762@gmail.com?subject=${s}&body=${b}`;
}

// Simple scrollspy to highlight current section link
(function() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar .nav-link");
  const navbar = document.querySelector(".navbar");
  if (!sections.length || !navLinks.length) return;

  function onScroll() {
    const scrollPos = document.documentElement.scrollTop + 120;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;
      const id = section.getAttribute("id");
      const link = document.querySelector(`.navbar .nav-link[href="#${id}"]`);
      if (!link) return;

      if (scrollPos >= top && scrollPos < bottom) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    if (navbar) {
      if (window.scrollY > 10) navbar.classList.add("nav-scrolled");
      else navbar.classList.remove("nav-scrolled");
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  // Initialize state
  onScroll();
})();

// Reveal sections as they enter the viewport
(function() {
  const elements = document.querySelectorAll(".reveal-on-scroll");
  if (!elements.length || !("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.18
  });

  elements.forEach((element) => observer.observe(element));
})();
