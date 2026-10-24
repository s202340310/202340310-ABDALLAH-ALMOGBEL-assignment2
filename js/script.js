// Smooth scrolling for the page's internal navigation links.
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));

    if (!target) {
      return;
    }

    event.preventDefault();
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
  });
});

// Theme preference: save it in this browser and restore it after a reload.
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const THEME_STORAGE_KEY = 'portfolio-theme';

function applyTheme(theme, savePreference = false) {
  const useLightTheme = theme === 'light';

  if (useLightTheme) {
    body.setAttribute('data-theme', 'light');
  } else {
    body.removeAttribute('data-theme');
  }

  themeToggle.textContent = useLightTheme ? '☀️' : '🌙';
  themeToggle.setAttribute('aria-label', useLightTheme ? 'Switch to dark theme' : 'Switch to light theme');
  themeToggle.setAttribute('aria-pressed', String(useLightTheme));

  if (savePreference) {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, useLightTheme ? 'light' : 'dark');
    } catch (error) {
      // The theme still works for this page view if browser storage is unavailable.
    }
  }
}

try {
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  applyTheme(savedTheme === 'light' ? 'light' : 'dark');
} catch (error) {
  applyTheme('dark');
}

themeToggle.addEventListener('click', () => {
  const currentTheme = body.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  applyTheme(currentTheme === 'light' ? 'dark' : 'light', true);
});

// Filter project cards by category and by text entered in the search box.
const projectCards = Array.from(document.querySelectorAll('.project'));
const filterButtons = Array.from(document.querySelectorAll('.filter-button'));
const projectSearch = document.getElementById('project-search');
const noProjectsMessage = document.getElementById('no-projects');
let activeProjectFilter = 'all';

function updateProjects() {
  const searchTerm = projectSearch.value.trim().toLowerCase();
  let visibleCount = 0;

  projectCards.forEach((card) => {
    const categoryMatches = activeProjectFilter === 'all' || card.dataset.category === activeProjectFilter;
    const searchableText = card.textContent.toLowerCase();
    const searchMatches = searchableText.includes(searchTerm);
    const shouldShow = categoryMatches && searchMatches;

    card.hidden = !shouldShow;
    if (shouldShow) {
      visibleCount += 1;
    }
  });

  noProjectsMessage.hidden = visibleCount > 0;
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activeProjectFilter = button.dataset.filter;

    filterButtons.forEach((filterButton) => {
      filterButton.setAttribute('aria-pressed', String(filterButton === button));
    });

    updateProjects();
  });
});

projectSearch.addEventListener('input', updateProjects);

// Contact form validation and feedback. This demo does not send information to a server.
const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const formFeedback = document.getElementById('form-feedback');

const formFields = [
  { input: nameInput, error: document.getElementById('name-error') },
  { input: emailInput, error: document.getElementById('email-error') },
  { input: messageInput, error: document.getElementById('message-error') }
];

function clearFieldError(field) {
  field.error.textContent = '';
  field.error.hidden = true;
  field.input.removeAttribute('aria-invalid');
}

function showFieldError(field, message) {
  field.error.textContent = message;
  field.error.hidden = false;
  field.input.setAttribute('aria-invalid', 'true');
}

function showFormFeedback(message, type) {
  formFeedback.textContent = message;
  formFeedback.className = `form-feedback is-${type}`;
  formFeedback.hidden = false;
}

function clearFormFeedback() {
  formFeedback.textContent = '';
  formFeedback.className = 'form-feedback';
  formFeedback.hidden = true;
}

formFields.forEach((field) => {
  field.input.addEventListener('input', () => {
    clearFieldError(field);
    clearFormFeedback();
  });
});

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  formFields.forEach(clearFieldError);
  clearFormFeedback();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();
  const invalidFields = [];

  if (!name) {
    showFieldError(formFields[0], 'Please enter your name.');
    invalidFields.push(nameInput);
  }

  if (!email) {
    showFieldError(formFields[1], 'Please enter your email address.');
    invalidFields.push(emailInput);
  } else if (!emailInput.validity.valid) {
    showFieldError(formFields[1], 'Please enter a valid email address.');
    invalidFields.push(emailInput);
  }

  if (!message) {
    showFieldError(formFields[2], 'Please enter a message.');
    invalidFields.push(messageInput);
  }

  if (invalidFields.length > 0) {
    showFormFeedback('Please correct the highlighted fields and try again.', 'error');
    invalidFields[0].focus();
    return;
  }

  showFormFeedback(`Thanks, ${name}! The form passed validation. This demo does not send email.`, 'success');
  contactForm.reset();
});

// Reveal sections/cards as they enter the viewport, with a safe fallback.
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealElements = document.querySelectorAll('.reveal-section, .reveal-card');

if (!prefersReducedMotion && 'IntersectionObserver' in window) {
  body.classList.add('js-reveal-enabled');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('is-visible'));
}