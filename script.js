/* ══════════════════════════════════════════
   8GHTec — script.js
   ══════════════════════════════════════════ */

// ── SCROLL REVEAL ──
// Watches elements with class "reveal" and adds "visible" when they enter the viewport
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach((el) => {
  revealObserver.observe(el);
});


// ── MOBILE MENU (HAMBURGER) ──
const hamburger = document.querySelector('.hamburger');
const navLinks  = document.querySelector('.nav-links');

let menuOpen = false;

hamburger.addEventListener('click', () => {
  menuOpen = !menuOpen;
  hamburger.setAttribute('aria-expanded', String(menuOpen));
  navLinks.classList.toggle('show', menuOpen);
});

// Close mobile menu when a nav link is clicked
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      navLinks.classList.remove('show');
      hamburger.setAttribute('aria-expanded', 'false');
      menuOpen = false;
    }
  });
});

// Reset menu on window resize (back to desktop)
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navLinks.classList.remove('show');
    hamburger.setAttribute('aria-expanded', 'false');
    menuOpen = false;
  }
});