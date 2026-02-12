
// Año en el pie
document.getElementById('year').textContent = new Date().getFullYear();
// Menú accesible
const btn=document.getElementById('menuBtn');const nav=document.getElementById('nav');
if(btn&&nav){btn.addEventListener('click',()=>{const e=btn.getAttribute('aria-expanded')==='true';btn.setAttribute('aria-expanded',String(!e));nav.classList.toggle('open')});}
