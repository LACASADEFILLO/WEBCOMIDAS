const toggle=document.querySelector('.menu-toggle'); const nav=document.querySelector('.nav'); if(toggle) toggle.addEventListener('click',()=>nav.classList.toggle('open'));
const lb=document.querySelector('.lightbox'); const lbImg=lb?.querySelector('img'); const close=lb?.querySelector('.close');
document.querySelectorAll('[data-lightbox]').forEach(el=>el.addEventListener('click',()=>{if(!lb)return; lbImg.src=el.dataset.src || el.querySelector('img').src; lb.classList.add('show')}));
close?.addEventListener('click',()=>lb.classList.remove('show')); lb?.addEventListener('click',e=>{if(e.target===lb)lb.classList.remove('show')}); document.addEventListener('keydown',e=>{if(e.key==='Escape')lb?.classList.remove('show')});
