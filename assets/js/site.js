(()=>{const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const burger=$('#burger'),links=$('#links'),hdr=$('.site-header');
const setMenu=o=>{links.classList.toggle('open',o);burger.setAttribute('aria-expanded',o);burger.setAttribute('aria-label',o?'Close menu':'Open menu');document.body.style.overflow=o&&innerWidth<=960?'hidden':''};
burger.addEventListener('click',()=>setMenu(!links.classList.contains('open')));
$$('a',links).forEach(a=>a.addEventListener('click',()=>setMenu(false)));
addEventListener('keydown',e=>{if(e.key==='Escape')setMenu(false)});
addEventListener('resize',()=>{if(innerWidth>960)setMenu(false)});
const onScroll=()=>hdr.classList.toggle('scrolled',scrollY>8);onScroll();addEventListener('scroll',onScroll,{passive:true});
$('#year').textContent=new Date().getFullYear();
if('IntersectionObserver'in window){
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});$$('.reveal').forEach(el=>io.observe(el));
const bio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('go');bio.unobserve(e.target)}}),{threshold:.4});$$('.bars').forEach(el=>bio.observe(el));
const cio=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const el=e.target,n=+el.dataset.count,t=performance.now();
const tick=now=>{const p=Math.min((now-t)/1200,1);el.firstChild.textContent=Math.round(n*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(tick)};
if(!matchMedia('(prefers-reduced-motion:reduce)').matches)requestAnimationFrame(tick);cio.unobserve(el)}),{threshold:.6});$$('[data-count]').forEach(el=>cio.observe(el))}
else{$$('.reveal').forEach(el=>el.classList.add('visible'));$$('.bars').forEach(el=>el.classList.add('go'))}
const car=$('[data-carousel]');if(car){const rs=$$('.rev',car),ds=$$('.dots button',car);let i=0,t;
const show=n=>{i=(n+rs.length)%rs.length;rs.forEach((r,k)=>r.classList.toggle('on',k===i));ds.forEach((d,k)=>d.classList.toggle('on',k===i))};
const run=()=>{clearInterval(t);if(!matchMedia('(prefers-reduced-motion:reduce)').matches)t=setInterval(()=>show(i+1),6500)};
$('[data-prev]',car).onclick=()=>{show(i-1);run()};$('[data-next]',car).onclick=()=>{show(i+1);run()};ds.forEach((d,k)=>d.onclick=()=>{show(k);run()});
let x0;car.addEventListener('touchstart',e=>x0=e.touches[0].clientX,{passive:true});car.addEventListener('touchend',e=>{const d=e.changedTouches[0].clientX-x0;if(Math.abs(d)>40){show(i+(d<0?1:-1));run()}});run()}
const f=$('#contactForm');if(f)f.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(f);
const m='Hi Fitness Milestones!\nName: '+d.get('name')+'\nPhone: '+d.get('phone')+'\nEmail: '+(d.get('email')||'Not provided')+'\nGoals: '+(d.get('message')||'Not specified');
window.open('https://wa.me/919819451919?text='+encodeURIComponent(m),'_blank','noopener')});
})();
