
// Año automático en el pie
document.getElementById('year').textContent = new Date().getFullYear();

// Menú accesible
const btn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
btn.addEventListener('click', () => {
  const expanded = btn.getAttribute('aria-expanded') === 'true';
  btn.setAttribute('aria-expanded', String(!expanded));
  nav.classList.toggle('open');
});

// Form demo
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('¡Gracias! Nos pondremos en contacto muy pronto.');
  form.reset();
});
