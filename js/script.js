// Smooth scrolling — may break if href points to an element that doesn't exist
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Theme toggle — no saved preference, resets on page reload
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  if (body.getAttribute('data-theme') === 'light') {
    body.removeAttribute('data-theme');
  } else {
    body.setAttribute('data-theme', 'light');
  }
});

/* =====================================================================
   ASSIGNMENT 2 — new JavaScript goes below this line
   TODO (one section per feature branch):
   [ ] 1. Theme: save to / load from localStorage
   [ ] 2. Projects: filter buttons + live search + empty state
   [ ] 3. Contact form: validation + error/success messages
   [ ] 4. Fade-in on scroll (IntersectionObserver)
   ===================================================================== */
