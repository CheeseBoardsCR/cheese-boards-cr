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

// Envío del formulario (demo)
// Puedes integrar un servicio como Formspree o Netlify Forms sin backend propio
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('¡Gracias! Hemos recibido tu mensaje.');
  form.reset();
});
