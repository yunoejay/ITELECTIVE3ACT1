// Highlight active nav link and form validation
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav a');
  const curr = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(link => {
    if(link.getAttribute('href') === curr) {
      link.classList.add('active');
    }
  });

  // Contact page: improved validation
  if(window.location.pathname.endsWith('contact.html')) {
    const form = document.querySelector('form');
    if(form) {
      form.addEventListener('submit', e => {
        e.preventDefault();
        let valid = true;
        const name = form.querySelector('input[name="name"]');
        const email = form.querySelector('input[name="email"]');
        const message = form.querySelector('textarea[name="
