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
    const scrollPos = document.documentElement.scrollTop + 60; // offset for fixed nav
    for (let i = 1; i < sections.length; i++) { // skip hero/about at index 0
      const s = sections[i];
      const top = s.offsetTop;
      const bottom = top + s.offsetHeight;
      const link = navLinks[i - 1];
      if (scrollPos >= top && scrollPos < bottom) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    }
    if (navbar) {
      if (window.scrollY > 10) navbar.classList.add("nav-scrolled");
      else navbar.classList.remove("nav-scrolled");
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  // Initialize state
  onScroll();
})();
