/* ============================================================
   Portfolio Site — Main JS
   Minimal progressive enhancement only.
   ============================================================ */

(function () {
  'use strict';

  /* ----- Mobile nav toggle ----- */
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('open');
      toggle.classList.toggle('open', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    /* Close menu when a link is clicked */
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ----- Active nav link based on current page ----- */
  (function setActiveLink() {
    const path = window.location.pathname;
    const page = path.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(function (a) {
      const href = a.getAttribute('href');
      if (
        href === page ||
        (page === '' && href === 'index.html') ||
        (page === 'index.html' && href === 'index.html')
      ) {
        a.classList.add('active');
      }
    });
  })();

  /* ----- Contact form: basic client-side handling ----- */
  const form = document.getElementById('contact-form');
  const formMsg = document.getElementById('form-message');

  if (form && formMsg) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const btn = form.querySelector('button[type="submit"]');
      if (btn) {
        btn.disabled = true;
        btn.textContent = 'Sending…';
      }

      /* Encode form data for Formspree / similar endpoint */
      const data = new FormData(form);
      const action = form.getAttribute('action');

      if (!action || action === '#') {
        formMsg.textContent =
          'Form submission is not yet configured. ' +
          'Please reach out via email directly.';
        formMsg.style.color = 'var(--text-secondary)';
        if (btn) { btn.disabled = false; btn.textContent = 'Send Message'; }
        return;
      }

      fetch(action, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
        .then(function (res) {
          if (res.ok) {
            form.reset();
            formMsg.textContent =
              'Message sent. I will get back to you shortly.';
            formMsg.style.color = 'var(--success)';
          } else {
            throw new Error('Network response was not ok');
          }
        })
        .catch(function () {
          formMsg.textContent =
            'Submission failed. Please try again or email me directly.';
          formMsg.style.color = '#f85149';
        })
        .finally(function () {
          if (btn) { btn.disabled = false; btn.textContent = 'Send Message'; }
        });
    });
  }
})();
