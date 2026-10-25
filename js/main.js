/* MAIN.JS: the only JavaScript on the site.
   It opens and closes the mobile menu (the hamburger button). */

// Find the hamburger button and the list of nav links in the page
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-list');

// When the button is clicked...
toggle.addEventListener('click', () => {
  // ...add/remove the "open" class (CSS shows the menu when .open is present)
  const isOpen = nav.classList.toggle('open');
  // Tell screen readers whether the menu is open
  toggle.setAttribute('aria-expanded', isOpen);
});
