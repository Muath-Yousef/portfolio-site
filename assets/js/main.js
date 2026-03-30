(function () {
  'use strict';

  /* ----- Progressive enhancement: add .js class to <html> ----- */
  document.documentElement.classList.add('js');

  /* ----- Footer year ----- */
  var yearTarget = document.getElementById('current-year');
  if (yearTarget) {
    yearTarget.textContent = String(new Date().getFullYear());
  }

  /* ----- Mobile nav toggle (single-page: .menu-toggle / .site-nav) ----- */
  var menuToggle = document.querySelector('.menu-toggle');
  var siteNav = document.querySelector('.site-nav');

  if (menuToggle && siteNav) {
    menuToggle.addEventListener('click', function () {
      var isOpen = siteNav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.setAttribute(
        'aria-label',
        isOpen ? 'Close navigation' : 'Open navigation'
      );
    });
  }

  /* ----- Mobile nav toggle (multi-page: .nav-toggle / .nav-links) ----- */
  var toggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('open');
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

  /* ----- Active nav link based on current page (multi-page) ----- */
  (function setActiveLink() {
    var path = window.location.pathname;
    var page = path.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(function (a) {
      var href = a.getAttribute('href');
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
  var form = document.getElementById('contact-form');
  var formMsg = document.getElementById('form-message');

  if (form && formMsg) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var btn = form.querySelector('button[type="submit"]');
      if (btn) {
        btn.disabled = true;
        btn.textContent = 'Sending…';
      }

      /* Encode form data for Formspree / similar endpoint */
      var data = new FormData(form);
      var action = form.getAttribute('action');

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
