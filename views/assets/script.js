// Highlight active nav link
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav a');
  const curr = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(link => {
    if(link.getAttribute('href') === curr) {
      link.classList.add('active');
    }
  });

  // Contact page: basic validation
  if(window.location.pathname.endsWith('contact.html')) {
    const form = document.querySelector('form');
    if(form) {
      form.addEventListener('submit', e => {
        e.preventDefault();
        let valid = true;
        const name = form.querySelector('input[name="name"]');
        const email = form.querySelector('input[name="email"]');
        const message = form.querySelector('textarea[name="message"]');
        const errorEls = form.querySelectorAll('.error');
        errorEls.forEach(el => el.textContent = '');

        if(name.value.trim().length < 2) {
          name.nextElementSibling.textContent = "Please enter a valid name.";
          valid = false;
        }
        if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
          email.nextElementSibling.textContent = "Please enter a valid email address.";
          valid = false;
        }
        if(message.value.trim().length < 6) {
          message.nextElementSibling.textContent = "Message must be at least 6 characters.";
          valid = false;
        }
        if(valid) {
          form.reset();
          form.querySelector('.success').textContent = "Message sent! (But this is just a demo 🙂)";
        } else {
          form.querySelector('.success').textContent = "";
        }
      });
    }
  }
});
