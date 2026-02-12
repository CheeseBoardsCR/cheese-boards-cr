
(function(){
  const backdrop=document.createElement('div');
  backdrop.className='lb-backdrop';backdrop.setAttribute('aria-hidden','true');
  backdrop.innerHTML=`<div role="dialog" aria-modal="true" class="lb-dialog" tabindex="-1"><button class="lb-close" aria-label="Cerrar">×</button><img alt="" /><div class="lb-caption" aria-live="polite"></div></div>`;
  document.body.appendChild(backdrop);
  const dialog=backdrop.querySelector('.lb-dialog');const img=dialog.querySelector('img');const cap=dialog.querySelector('.lb-caption');
  const close=()=>{backdrop.setAttribute('aria-hidden','true');img.src='';img.alt='';cap.textContent='';};
  backdrop.addEventListener('click',e=>{if(e.target===backdrop) close();});
  document.addEventListener('keydown',e=>{if(backdrop.getAttribute('aria-hidden')==='false'&&e.key==='Escape') close();});
  dialog.querySelector('.lb-close').addEventListener('click',close);
  document.addEventListener('click',e=>{const a=e.target.closest('a[data-lightbox]');if(!a) return; e.preventDefault();img.src=a.href;const alt=(a.querySelector('img')||{}).alt||'';img.alt=alt;cap.textContent=alt;backdrop.setAttribute('aria-hidden','false');dialog.focus();});
})();
