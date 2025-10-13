// Mobile Navigation for Active Metal Roofing
// Handles hamburger menu, drawer, and accordion navigation

(function() {
  'use strict';

  // Elements
  const hamburger = document.querySelector('.hamburger');
  const drawer = document.querySelector('.drawer');
  const overlay = document.querySelector('.overlay');
  const drawerClose = document.querySelector('.drawer-close');
  const accButtons = document.querySelectorAll('.acc-btn');
  const subToggles = document.querySelectorAll('.sub-toggle');

  // Open drawer
  function openDrawer() {
    drawer.setAttribute('data-open', 'true');
    overlay.removeAttribute('hidden');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  // Close drawer
  function closeDrawer() {
    drawer.setAttribute('data-open', 'false');
    overlay.setAttribute('hidden', '');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  // Toggle accordion panels in mobile drawer
  function toggleAccordion(button) {
    const panel = button.nextElementSibling;
    const isOpen = button.getAttribute('aria-expanded') === 'true';

    // Close all other accordions
    accButtons.forEach(btn => {
      if (btn !== button) {
        btn.setAttribute('aria-expanded', 'false');
        btn.nextElementSibling.setAttribute('aria-expanded', 'false');
      }
    });

    // Toggle current
    button.setAttribute('aria-expanded', !isOpen);
    panel.setAttribute('aria-expanded', !isOpen);
  }

  // Toggle desktop dropdown menus
  function toggleDropdown(button) {
    const menu = button.nextElementSibling;
    const isOpen = button.getAttribute('aria-expanded') === 'true';

    // Close all other dropdowns
    subToggles.forEach(btn => {
      if (btn !== button) {
        btn.setAttribute('aria-expanded', 'false');
        btn.nextElementSibling.setAttribute('hidden', '');
      }
    });

    // Toggle current
    button.setAttribute('aria-expanded', !isOpen);
    if (isOpen) {
      menu.setAttribute('hidden', '');
    } else {
      menu.removeAttribute('hidden');
    }
  }

  // Event Listeners
  if (hamburger) hamburger.addEventListener('click', openDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);

  // Mobile accordion
  accButtons.forEach(btn => {
    btn.addEventListener('click', () => toggleAccordion(btn));
  });

  // Desktop dropdowns
  subToggles.forEach(btn => {
    btn.addEventListener('click', () => toggleDropdown(btn));

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (!btn.parentElement.contains(e.target)) {
        btn.setAttribute('aria-expanded', 'false');
        btn.nextElementSibling.setAttribute('hidden', '');
      }
    });
  });

  // Close drawer on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.getAttribute('data-open') === 'true') {
      closeDrawer();
    }
  });

})();
