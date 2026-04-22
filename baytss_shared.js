/* ═══════════════════════════════════════════
   BAYTSS — Shared JS (localStorage, auth, admin, cars)
   Include this on every page.
   ═══════════════════════════════════════════ */
(function(){
'use strict';

/* ─── CONFIG ─── */
window.BAYTSS = window.BAYTSS || {};
const B = window.BAYTSS;

B.ADMIN_EMAIL    = "kjo955857@gmail.com";
B.ADMIN_PASSWORD = "86222268";

B.KEYS = {
  USERS:"baytss_users", CURRENT:"baytss_current",
  NEWS:"baytss_news", CAREERS:"baytss_careers",
  HERO:"baytss_hero", HISTORY:"baytss_history",
  ORDERS:"baytss_orders", APPS:"baytss_applications",
  SEEDED:"baytss_seeded_v1"
};

/* ─── ALL 20 CARS ─── */
B.ALL_CARS = [
  { id:"car_001", brand:"Bugatti",    name:"Chiron",       price:3200000, img:"Chiron.png",       desc:"The Bugatti Chiron represents the absolute pinnacle of automotive engineering — a 1,500 horsepower quad-turbocharged W16 masterpiece. Hand-assembled at Molsheim, Alsace." },
  { id:"car_002", brand:"Bugatti",    name:"Centodieci",   price:8900000, img:"Centodieci.png",   desc:"Produced in an edition of just ten, the Centodieci is an homage to the legendary EB110. Its 1,600 horsepower W16 propels it from 0–100 km/h in 2.4 seconds." },
  { id:"car_003", brand:"Bugatti",    name:"Tourbillon",   price:3800000, img:"Tourbillon.png",   desc:"The Bugatti Tourbillon marks a new chapter — a naturally aspirated V16 paired with an electric hybrid system delivering over 1,800 horsepower." },
  { id:"car_004", brand:"Bugatti",    name:"W16 Mistral",  price:5000000, img:"W16 Mistral.png",  desc:"The last open-top Bugatti W16 ever built. The Mistral is limited to 99 examples and channels 1,600 horsepower through a breathtaking roadster body." },
  { id:"car_005", brand:"Bugatti",    name:"Divo",         price:6000000, img:"Divo.png",         desc:"Named after French racing driver Albert Divo, the Bugatti Divo is a track-focused hypercar limited to 40 units. Bugatti at its most aggressive." },
  { id:"car_006", brand:"Bugatti",    name:"Bolide",       price:4700000, img:"Bolide.png",       desc:"The Bolide is Bugatti's most extreme track weapon — a sub-1,750 kg machine producing 1,850 horsepower. Inspired by endurance racing, it is both monument and machine." },
  { id:"car_007", brand:"Ferrari",    name:"LaFerrari",    price:2200000, img:"LaFerrari.png",    desc:"Ferrari's first hybrid supercar. The LaFerrari combines a 6.3L V12 with Formula 1-derived KERS to deliver 963 horsepower. Only 499 were ever made." },
  { id:"car_008", brand:"Ferrari",    name:"Enzo",         price:3000000, img:"Enzo.png",         desc:"Named after the founder himself, the Ferrari Enzo is a statement of uncompromising intent. Its 660 horsepower V12 and F1-inspired design are legendary." },
  { id:"car_009", brand:"Ferrari",    name:"SF90 Stradale",price:720000,  img:"SF90 Stradale.png",desc:"Ferrari's most powerful road car combines a twin-turbo V8 with three electric motors for 1,000 horsepower. A hypercar for every road, every day." },
  { id:"car_010", brand:"Lamborghini",name:"Aventador",    price:500000,  img:"Aventador.png",    desc:"The Aventador's naturally aspirated 6.5L V12 is the heartbeat of a generation. 770 horsepower with a screaming 8,500 rpm redline." },
  { id:"car_011", brand:"Lamborghini",name:"Revuelto",     price:600000,  img:"Revuelto.png",     desc:"The Revuelto succeeds the Aventador with a next-generation V12 hybrid drivetrain producing 1,001 horsepower. The most advanced Lamborghini ever built." },
  { id:"car_012", brand:"Lamborghini",name:"Huracán",      price:280000,  img:"Huracán.png",      desc:"The Huracán — 640 horsepower V10, 0–100 in 2.9 seconds. Entry into Lamborghini ownership, though 'entry' seems an inadequate word." },
  { id:"car_013", brand:"McLaren",    name:"P1",           price:1500000, img:"P1.png",           desc:"McLaren's hypercar trinity answer. A twin-turbo V8 with electric motor for 916 horsepower, 600 kg of downforce. Carbon fibre in its purest form." },
  { id:"car_014", brand:"McLaren",    name:"720S",         price:310000,  img:"720S.png",         desc:"720 horsepower, carbon fibre monocoque, twin-turbocharged V8. The 720S redefined the supercar benchmark for its generation." },
  { id:"car_015", brand:"Koenigsegg", name:"Jesko",        price:3400000, img:"Jesko.png",        desc:"Engineered to break the 300 mph barrier. Its 5.0L twin-turbo V8 produces 1,600 horsepower on E85 fuel. The apex predator of road cars." },
  { id:"car_016", brand:"Koenigsegg", name:"Regera",       price:2000000, img:"Regera.png",       desc:"No traditional gearbox. Three electric motors alongside a 5.0L twin-turbo V8 for 1,500 horsepower. Smooth, silent — then utterly savage." },
  { id:"car_017", brand:"Pagani",     name:"Huayra",       price:2800000, img:"Huayra.png",       desc:"A hand-built Italian masterwork. Named after the Andean wind god, its Mercedes-AMG V12 produces 730 horsepower inside a carbonfibre and titanium body." },
  { id:"car_018", brand:"Pagani",     name:"Zonda",        price:2500000, img:"Zonda.png",        desc:"The car that made Pagani's name. The Zonda's V12 and stunning visual drama reshaped what a bespoke Italian supercar could be. Each example effectively unique." },
  { id:"car_019", brand:"Porsche",    name:"918 Spyder",   price:850000,  img:"918 Spyder.png",   desc:"887 horsepower, 2.6 seconds to 100 km/h, Nürburgring lap record. Porsche proved electrification and driving purity are not mutually exclusive." },
  { id:"car_020", brand:"Porsche",    name:"911",          price:140000,  img:"911.png",          desc:"The 911 needs no introduction. Seventy years of continuous refinement — rear-engine, rear-wheel-drive, and eternally relevant in every generation." }
];

/* ─── SEED DATA ─── */
B.SEED_NEWS = [
  { id:"news_001", title:"Baytss Grand Concours 2025 — The Most Exclusive Automotive Event of the Year", imageUrl:"https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=900&q=80&auto=format&fit=crop", category:"Event", date:"2025-03-15", description:"Baytss is proud to announce the inaugural Baytss Grand Concours, taking place on the grounds of Château de Chantilly this coming September. The event will bring together sixty of the world's most significant automobiles — from pre-war Bugattis to modern hypercars — alongside a private dinner curated by a Michelin three-star chef. Invitations are extended exclusively to registered Baytss members. The Grand Concours will feature live auction access, manufacturer presentations, and a programme of evening entertainment across three days. This is not merely a car show — it is the definitive meeting of those who understand that exceptional machines exist at the intersection of engineering and art." },
  { id:"news_002", title:"Baytss Named 'Most Distinguished New Luxury House' at the European Atelier Awards 2025", imageUrl:"https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=80&auto=format&fit=crop", category:"Award", date:"2025-02-28", description:"At the 2025 European Atelier Awards, held in Geneva in partnership with the Fondation de la Haute Horlogerie, Baytss was recognised as the Most Distinguished New Luxury House — a category judged by a panel of industry leaders, curators, and independent critics. The award acknowledges our commitment to curation over volume, and our founding philosophy that every piece must justify its own existence." },
  { id:"news_003", title:"Baytss Climbs to #4 in the Global Luxury Atelier Index — Fastest Riser in Five Years", imageUrl:"https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900&q=80&auto=format&fit=crop", category:"Ranking", date:"2025-02-10", description:"The 2025 Global Luxury Atelier Index has placed Baytss at position four among emerging luxury houses worldwide — a rise of eleven places since our founding year. The index evaluates houses across seven dimensions: curation integrity, craft provenance, editorial reputation, community strength, environmental responsibility, financial transparency, and cultural relevance. Baytss ranked first in curation integrity and editorial reputation." },
  { id:"news_004", title:"Introducing the Baytss × Hermès Motor Club Capsule — A New Language for the Road", imageUrl:"https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=900&q=80&auto=format&fit=crop", category:"Launch", date:"2025-01-20", description:"Following eighteen months of private collaboration, Baytss and Hermès announce the Motor Club Capsule — a collection of six driving accessories produced entirely at the Hermès ateliers in Paris and Pantin. The collection includes a full-grain leather driving glove, a dashboard companion folio, a chrono-strap in Barenia calfskin, a travel document case, a hand-stitched gear knob cover, and a limited-edition silk square mapping the routes of our Grand Concours." }
];

B.SEED_CAREERS = [
  { id:"career_001", title:"Senior Automotive Curator — Collections Department", location:"Paris, France", postedDate:"2025-03-01", description:"Baytss is seeking an exceptional Senior Automotive Curator to lead our Collections Department. You will be responsible for sourcing, authenticating, and presenting the world's most significant automobiles for private acquisition through the Baytss atelier. The ideal candidate holds 8+ years of experience within a major auction house, private dealer, or manufacturer heritage programme. Full relocation to Paris provided, along with a competitive package commensurate with senior atelier leadership." },
  { id:"career_002", title:"Head of Digital Experience — Baytss Platform", location:"Remote / London or Paris", postedDate:"2025-02-18", description:"We are searching for a Head of Digital Experience to lead the continued development of the Baytss digital platform. This is a rare opportunity to shape the digital identity of one of Europe's most exciting luxury houses. You will oversee front-end architecture, UX strategy, and the integration of new features. We value restraint in design, precision in engineering, and the courage to remove what is unnecessary." }
];

B.SEED_HISTORY = [
  { id:"hist_001", title:"A Heritage Forged in Intention", year:"2019", imageUrl:"https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80&auto=format&fit=crop", shortDesc:"The founding vision — precision over abundance.", description:"Baytss was founded on a single conviction: that the most meaningful luxury objects are those made with a full awareness of why they are being made.\n\nIn 2019, our founder spent six months visiting workshops across Europe and Japan — not to source products, but to understand what distinguished lasting work from fashionable work.\n\nWhat emerged was a philosophy rather than a catalog: that every piece brought into existence by Baytss must justify its own existence. The atelier was established not to compete with legacy houses, but to redefine what it means to operate at the summit of craft in the modern era." },
  { id:"hist_002", title:"First Private Concours — Monaco", year:"2021", imageUrl:"https://images.unsplash.com/photo-1558981852-426c373fea8f?w=1200&q=80&auto=format&fit=crop", shortDesc:"Sixty collectors. One evening. Zero cameras.", description:"In 2021, Baytss hosted its first private concours on the terrace of a family-owned estate overlooking the Mediterranean. Sixty collectors. Twenty-two automobiles. A single evening defined by the absence of spectacle.\n\nNo press. No photographs. Only the machines and the people who understood them.\n\nThe evening set the tone for everything Baytss would become: a house that creates moments rather than events, and audiences rather than crowds." },
  { id:"hist_003", title:"The Atelier Expansion — London & Tokyo", year:"2023", imageUrl:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80&auto=format&fit=crop", shortDesc:"Two new ateliers. The same uncompromising standard.", description:"2023 marked the first time Baytss extended beyond its founding Paris atelier, opening private consultation rooms in London and Tokyo.\n\nNeither space resembles a showroom. Both resemble libraries.\n\nThe decision to expand was not made for commercial reasons. It was made because we encountered collectors in London and Tokyo whose understanding of the objects we curate demanded that we be closer to them. We do not go where the market is largest. We go where the appreciation is deepest." }
];

B.SEED_HERO = { video1:"v1.mp4", video2:"v2.mp4" };

/* ─── STORAGE ─── */
B.load = function(key, fallback){ try{ const r=localStorage.getItem(key); return r===null?fallback:JSON.parse(r); }catch(e){ return fallback; } };
B.save = function(key, val){ try{ localStorage.setItem(key,JSON.stringify(val)); }catch(e){} };
B.getCurrentUser = ()=>B.load(B.KEYS.CURRENT,null);
B.setCurrentUser = v=>{ v?B.save(B.KEYS.CURRENT,v):localStorage.removeItem(B.KEYS.CURRENT); };
B.getUsers    = ()=>B.load(B.KEYS.USERS,[]);
B.setUsers    = v=>B.save(B.KEYS.USERS,v);
B.getNews     = ()=>B.load(B.KEYS.NEWS,[]);
B.setNews     = v=>B.save(B.KEYS.NEWS,v);
B.getCareers  = ()=>B.load(B.KEYS.CAREERS,[]);
B.setCareers  = v=>B.save(B.KEYS.CAREERS,v);
B.getHero     = ()=>B.load(B.KEYS.HERO,{video1:"v1.mp4",video2:"v2.mp4"});
B.setHero     = v=>B.save(B.KEYS.HERO,v);
B.getHistory  = ()=>B.load(B.KEYS.HISTORY,[]);
B.setHistory  = v=>B.save(B.KEYS.HISTORY,v);
B.getOrders   = ()=>B.load(B.KEYS.ORDERS,[]);
B.setOrders   = v=>B.save(B.KEYS.ORDERS,v);
B.getApps     = ()=>B.load(B.KEYS.APPS,[]);
B.setApps     = v=>B.save(B.KEYS.APPS,v);
B.genId       = p=>p+"_"+Date.now().toString(36)+"_"+Math.random().toString(36).slice(2,7);

/* ─── SEED ─── */
B.seed = function(){
  if(B.load(B.KEYS.SEEDED,false)) return;
  if(!B.getNews().length) B.setNews(B.SEED_NEWS);
  if(!B.getCareers().length) B.setCareers(B.SEED_CAREERS);
  if(!B.getHistory().length) B.setHistory(B.SEED_HISTORY);
  B.save(B.KEYS.SEEDED,true);
};

/* ─── UTILS ─── */
B.fmt = v=>{ const n=Number(v); return isNaN(n)?v:"€ "+n.toLocaleString(undefined,{minimumFractionDigits:0,maximumFractionDigits:0}); };
B.validateEmail = e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
B.validatePass  = p=>typeof p==="string"&&p.length>=6;
B.isAdmin       = user=>{ if(!user)return false; const f=B.getUsers().find(u=>u.id===user.id); return !!(f&&f.email===B.ADMIN_EMAIL&&f.password===B.ADMIN_PASSWORD); };

/* ─── THEME ─── */
B.initTheme = function(){
  const stored=localStorage.getItem('baytss_theme');
  if(stored==='light') document.documentElement.setAttribute('data-theme','light');
  const btn=document.getElementById('themeBtn');
  if(btn){
    btn.textContent = stored==='light'?'🌙':'☀';
    btn.addEventListener('click',function(){
      const isLight=document.documentElement.getAttribute('data-theme')==='light';
      if(isLight){ document.documentElement.removeAttribute('data-theme'); localStorage.setItem('baytss_theme','dark'); btn.textContent='☀'; }
      else { document.documentElement.setAttribute('data-theme','light'); localStorage.setItem('baytss_theme','light'); btn.textContent='🌙'; }
    });
  }
};

/* ─── NAV RENDER ─── */
B.renderNav = function(){
  const cur=B.getCurrentUser();
  const pill=document.getElementById('navUserPill');
  const nameEl=document.getElementById('navUserName');
  const loginBtn=document.getElementById('navLoginBtn');
  const signupBtn=document.getElementById('navSignupBtn');
  if(!pill) return;
  if(cur){
    const full=B.getUsers().find(u=>u.id===cur.id);
    if(nameEl) nameEl.textContent=full?full.name:cur.email;
    pill.style.display='flex';
    if(loginBtn) loginBtn.style.display='none';
    if(signupBtn) signupBtn.style.display='none';
  }else{
    pill.style.display='none';
    if(loginBtn) loginBtn.style.display='inline-block';
    if(signupBtn) signupBtn.style.display='inline-block';
  }
  // Admin fab
  const fab=document.getElementById('adminFab');
  if(fab){ B.isAdmin(cur)?fab.classList.remove('hidden'):fab.classList.add('hidden'); }
};

/* ─── AUTH MODAL (shared across pages) ─── */
B.openAuth = function(mode){
  B._authMode=mode||'login';
  const modal=document.getElementById('authModal');
  if(!modal){ window.location.href='login.html'; return; }
  modal.style.display='flex';
  B._setAuthMode(B._authMode);
};
B._setAuthMode = function(mode){
  B._authMode=mode;
  const titleEl=document.getElementById('authTitle');
  const subEl=document.getElementById('authSubtitle');
  const nameGrp=document.getElementById('authNameGroup');
  const locGrp=document.getElementById('authLocationGroup');
  const bioGrp=document.getElementById('authBioGroup');
  const submitBtn=document.getElementById('authSubmitBtn');
  const toggleText=document.getElementById('authToggleText');
  const toggleBtn=document.getElementById('authToggleBtn');
  if(mode==='signup'){
    if(titleEl) titleEl.textContent='Join Baytss';
    if(subEl) subEl.textContent='Create your member account to access the full atelier experience.';
    if(nameGrp) nameGrp.classList.remove('hidden');
    if(locGrp) locGrp.classList.remove('hidden');
    if(bioGrp) bioGrp.classList.remove('hidden');
    if(submitBtn) submitBtn.textContent='Create Account';
    if(toggleText) toggleText.textContent='Already a member?';
    if(toggleBtn) toggleBtn.textContent='Sign in';
  }else{
    if(titleEl) titleEl.textContent='Welcome Back';
    if(subEl) subEl.textContent='Access your Baytss atelier experience.';
    if(nameGrp) nameGrp.classList.add('hidden');
    if(locGrp) locGrp.classList.add('hidden');
    if(bioGrp) bioGrp.classList.add('hidden');
    if(submitBtn) submitBtn.textContent='Sign In';
    if(toggleText) toggleText.textContent='New to Baytss?';
    if(toggleBtn) toggleBtn.textContent='Create account';
  }
};
B._clearAuthErrors = function(){
  ['authGlobalError','authGlobalSuccess','authNameError','authLocationError','authBioError','authEmailError','authPasswordError'].forEach(id=>{ const el=document.getElementById(id); if(el) el.textContent=''; });
};
B.handleAuthSubmit = function(){
  B._clearAuthErrors();
  const email=(document.getElementById('authEmail')||{}).value?.trim().toLowerCase()||'';
  const pass=(document.getElementById('authPassword')||{}).value||'';
  const gErr=document.getElementById('authGlobalError');
  const gSuc=document.getElementById('authGlobalSuccess');
  const emailErr=document.getElementById('authEmailError');
  const passErr=document.getElementById('authPasswordError');
  if(!B.validateEmail(email)){ if(emailErr) emailErr.textContent='Please enter a valid email.'; return; }
  if(!B.validatePass(pass)){ if(passErr) passErr.textContent='Password must be at least 6 characters.'; return; }
  if(B._authMode==='signup'){
    const name=(document.getElementById('authName')||{}).value?.trim()||'';
    const loc=(document.getElementById('authLocation')||{}).value?.trim()||'';
    const bio=(document.getElementById('authBio')||{}).value?.trim()||'';
    const nameErr=document.getElementById('authNameError');
    const locErr=document.getElementById('authLocationError');
    const bioErr=document.getElementById('authBioError');
    if(!name){ if(nameErr) nameErr.textContent='Name is required.'; return; }
    if(!loc){ if(locErr) locErr.textContent='Location is required.'; return; }
    if(!bio){ if(bioErr) bioErr.textContent='Bio is required.'; return; }
    const users=B.getUsers();
    if(users.find(u=>u.email===email)){ if(gErr) gErr.textContent='An account with this email already exists.'; return; }
    const nu={id:B.genId('user'),name,email,password:pass,location:loc,bio,createdAt:new Date().toISOString()};
    users.push(nu); B.setUsers(users); B.setCurrentUser({id:nu.id,email:nu.email});
    if(gSuc) gSuc.textContent='Account created. Welcome to Baytss.';
    setTimeout(()=>{ document.getElementById('authModal').style.display='none'; B.renderNav(); if(B._onAuthSuccess) B._onAuthSuccess(); },600);
  }else{
    const users=B.getUsers();
    const user=users.find(u=>u.email===email&&u.password===pass);
    if(!user){ if(gErr) gErr.textContent='Invalid email or password.'; return; }
    B.setCurrentUser({id:user.id,email:user.email});
    if(gSuc) gSuc.textContent='Welcome back.';
    setTimeout(()=>{ document.getElementById('authModal').style.display='none'; B.renderNav(); if(B._onAuthSuccess) B._onAuthSuccess(); },500);
  }
};

/* ─── ADMIN PANEL LOGIC ─── */
B.initAdminPanel = function(){
  const fab=document.getElementById('adminFab');
  const overlay=document.getElementById('adminOverlay');
  const closeBtn=document.getElementById('closeAdminPanel');
  const emailLabel=document.getElementById('adminEmailLabel');
  if(!overlay) return;
  const cur=B.getCurrentUser();
  if(cur&&emailLabel){ const full=B.getUsers().find(u=>u.id===cur.id); emailLabel.textContent=full?full.email:''; }
  if(fab) fab.addEventListener('click',()=>{ overlay.style.display='flex'; B.loadAdminForms(); });
  if(closeBtn) closeBtn.addEventListener('click',()=>overlay.style.display='none');
  overlay.addEventListener('click',e=>{ if(e.target===overlay) overlay.style.display='none'; });
  document.querySelectorAll('.admin-tab-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const tab=btn.getAttribute('data-tab');
      document.querySelectorAll('.admin-tab-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.admin-section').forEach(s=>{ s.id===tab?s.classList.add('active'):s.classList.remove('active'); });
    });
  });
};

B.loadAdminForms = function(){
  const h=B.getHero();
  const v1=document.getElementById('adminVideo1'); if(v1) v1.value=h.video1||'';
  const v2=document.getElementById('adminVideo2'); if(v2) v2.value=h.video2||'';
  B.renderAdminNews(); B.renderAdminCareers(); B.renderAdminHistory(); B.renderAdminUsers(); B.renderAdminOrders();
};

B.renderAdminNews = function(){
  const list=document.getElementById('adminNewsList'); if(!list) return;
  const news=B.getNews().slice().sort((a,b)=>new Date(b.date||0)-new Date(a.date||0));
  list.innerHTML='';
  if(!news.length){ list.innerHTML="<div class='text-muted'>No articles yet.</div>"; return; }
  news.forEach(item=>{
    const div=document.createElement('div'); div.className='admin-list-item';
    const main=document.createElement('div'); main.className='admin-list-main';
    main.innerHTML="<strong>"+item.title+"</strong><div class='text-muted mt-1'>"+(item.category||'News')+" · "+(item.date||'')+"</div>";
    const acts=document.createElement('div'); acts.className='admin-list-actions';
    const del=document.createElement('button'); del.className='admin-delete-btn'; del.textContent='Delete';
    del.addEventListener('click',()=>{ if(confirm('Delete this article?')){ B.setNews(B.getNews().filter(n=>n.id!==item.id)); B.renderAdminNews(); if(B.refreshNews) B.refreshNews(); } });
    acts.appendChild(del); div.appendChild(main); div.appendChild(acts); list.appendChild(div);
  });
};

B.renderAdminCareers = function(){
  const list=document.getElementById('adminCareerList'); if(!list) return;
  const cs=B.getCareers().slice().sort((a,b)=>new Date(b.postedDate||0)-new Date(a.postedDate||0));
  list.innerHTML='';
  if(!cs.length){ list.innerHTML="<div class='text-muted'>No roles yet.</div>"; return; }
  cs.forEach(c=>{
    const div=document.createElement('div'); div.className='admin-list-item';
    const main=document.createElement('div'); main.className='admin-list-main';
    main.innerHTML="<strong>"+c.title+"</strong><div class='text-muted mt-1'>"+(c.location||'Remote')+" · "+(c.postedDate||'')+"</div>";
    const acts=document.createElement('div'); acts.className='admin-list-actions';
    const del=document.createElement('button'); del.className='admin-delete-btn'; del.textContent='Delete';
    del.addEventListener('click',()=>{ if(confirm('Delete this role?')){ B.setCareers(B.getCareers().filter(x=>x.id!==c.id)); B.renderAdminCareers(); if(B.refreshCareers) B.refreshCareers(); } });
    acts.appendChild(del); div.appendChild(main); div.appendChild(acts); list.appendChild(div);
  });
};

B.renderAdminHistory = function(){
  const list=document.getElementById('adminHistoryList'); if(!list) return;
  const hs=B.getHistory();
  list.innerHTML='';
  if(!hs.length){ list.innerHTML="<div class='text-muted'>No history entries yet.</div>"; return; }
  hs.forEach(h=>{
    const div=document.createElement('div'); div.className='admin-list-item';
    const main=document.createElement('div'); main.className='admin-list-main';
    main.innerHTML="<strong>"+h.title+"</strong><div class='text-muted mt-1'>"+h.year+"</div>";
    const acts=document.createElement('div'); acts.className='admin-list-actions';
    const del=document.createElement('button'); del.className='admin-delete-btn'; del.textContent='Delete';
    del.addEventListener('click',()=>{ if(confirm('Delete this history entry?')){ B.setHistory(B.getHistory().filter(x=>x.id!==h.id)); B.renderAdminHistory(); if(B.refreshHistory) B.refreshHistory(); } });
    acts.appendChild(del); div.appendChild(main); div.appendChild(acts); list.appendChild(div);
  });
};

B.renderAdminUsers = function(){
  const list=document.getElementById('adminUsersList'); if(!list) return;
  const users=B.getUsers(); list.innerHTML='';
  if(!users.length){ list.innerHTML="<div class='text-muted'>No registered members yet.</div>"; return; }
  users.forEach(u=>{
    const div=document.createElement('div'); div.className='admin-list-item';
    const main=document.createElement('div'); main.className='admin-list-main';
    const adm=u.email===B.ADMIN_EMAIL&&u.password===B.ADMIN_PASSWORD;
    main.innerHTML="<strong>"+u.name+"</strong><div class='text-muted mt-1'>"+u.email+"</div><div class='text-muted mt-1'>"+(u.location||'')+"</div>";
    const acts=document.createElement('div'); acts.className='admin-list-actions';
    const badge=document.createElement('span'); badge.className='badge '+(adm?'badge-admin':'badge-user'); badge.textContent=adm?'Admin':'Member';
    acts.appendChild(badge); div.appendChild(main); div.appendChild(acts); list.appendChild(div);
  });
};

B.renderAdminOrders = function(){
  const list=document.getElementById('adminOrdersList'); if(!list) return;
  const orders=B.getOrders().slice().sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt));
  const users=B.getUsers(); list.innerHTML='';
  if(!orders.length){ list.innerHTML="<div class='text-muted'>No orders yet.</div>"; return; }
  orders.forEach(o=>{
    const u=users.find(x=>x.id===o.userId);
    const car=B.ALL_CARS.find(x=>x.id===o.productId);
    const div=document.createElement('div'); div.className='admin-list-item';
    const main=document.createElement('div'); main.className='admin-list-main';
    main.innerHTML="<strong>"+(car?car.brand+' '+car.name:'Unknown')+"</strong><div class='text-muted mt-1'>"+(u?u.name+' ('+u.email+')':'Unknown')+"</div><div class='text-muted mt-1'>"+B.fmt(o.price)+" · "+new Date(o.createdAt).toLocaleString()+"</div>";
    const acts=document.createElement('div'); acts.className='admin-list-actions';
    const badge=document.createElement('span'); badge.className='badge'; badge.textContent='Simulated'; acts.appendChild(badge);
    div.appendChild(main); div.appendChild(acts); list.appendChild(div);
  });
};

/* ─── INIT ─── */
document.addEventListener('DOMContentLoaded', function(){
  B.seed();
  B.initTheme();
  B.renderNav();

  // Logout
  const logoutBtn=document.getElementById('navLogoutBtn');
  if(logoutBtn) logoutBtn.addEventListener('click',()=>{ B.setCurrentUser(null); B.renderNav(); if(B.onLogout) B.onLogout(); else window.location.reload(); });

  // Nav login/signup buttons
  const navLogin=document.getElementById('navLoginBtn');
  const navSignup=document.getElementById('navSignupBtn');
  if(navLogin) navLogin.addEventListener('click',()=>B.openAuth('login'));
  if(navSignup) navSignup.addEventListener('click',()=>B.openAuth('signup'));

  // Auth modal events
  const authModal=document.getElementById('authModal');
  if(authModal){
    const closeBtn=document.getElementById('closeAuthModal');
    if(closeBtn) closeBtn.addEventListener('click',()=>authModal.style.display='none');
    authModal.addEventListener('click',e=>{ if(e.target===authModal) authModal.style.display='none'; });
    const toggleBtn=document.getElementById('authToggleBtn');
    if(toggleBtn) toggleBtn.addEventListener('click',()=>B._setAuthMode(B._authMode==='login'?'signup':'login'));
    const submitBtn=document.getElementById('authSubmitBtn');
    if(submitBtn) submitBtn.addEventListener('click',B.handleAuthSubmit);
  }

  B.initAdminPanel();

  // Hero video save
  const heroSaveBtn=document.getElementById('adminHeroSave');
  if(heroSaveBtn) heroSaveBtn.addEventListener('click',()=>{
    const v1=(document.getElementById('adminVideo1')||{}).value?.trim()||'v1.mp4';
    const v2=(document.getElementById('adminVideo2')||{}).value?.trim()||'v2.mp4';
    B.setHero({video1:v1,video2:v2});
    const msg=document.getElementById('adminHeroMessage');
    if(msg){ msg.textContent='Hero saved.'; setTimeout(()=>msg.textContent='',1500); }
    if(B.refreshHero) B.refreshHero();
  });

  // News add
  const newsAddBtn=document.getElementById('adminNewsAdd');
  if(newsAddBtn) newsAddBtn.addEventListener('click',()=>{
    const title=(document.getElementById('adminNewsTitleInput')||{}).value?.trim()||'';
    const desc=(document.getElementById('adminNewsDescInput')||{}).value?.trim()||'';
    const msg=document.getElementById('adminNewsMessage');
    if(!title||!desc){ if(msg){ msg.style.color='var(--danger2)'; msg.textContent='Title and description required.'; } return; }
    const n=B.getNews();
    n.push({id:B.genId('news'),title,imageUrl:(document.getElementById('adminNewsImageInput')||{}).value?.trim()||'',category:(document.getElementById('adminNewsCategoryInput')||{}).value?.trim()||'News',date:(document.getElementById('adminNewsDateInput')||{}).value||'',description:desc});
    B.setNews(n);
    if(msg){ msg.style.color='var(--success)'; msg.textContent='Article published.'; setTimeout(()=>msg.textContent='',1500); }
    ['adminNewsTitleInput','adminNewsImageInput','adminNewsCategoryInput','adminNewsDateInput','adminNewsDescInput'].forEach(id=>{ const el=document.getElementById(id); if(el) el.value=''; });
    B.renderAdminNews(); if(B.refreshNews) B.refreshNews();
  });

  // Careers add
  const careerAddBtn=document.getElementById('adminCareerAdd');
  if(careerAddBtn) careerAddBtn.addEventListener('click',()=>{
    const title=(document.getElementById('adminCareerTitleInput')||{}).value?.trim()||'';
    const desc=(document.getElementById('adminCareerDescInput')||{}).value?.trim()||'';
    const msg=document.getElementById('adminCareerMessage');
    if(!title||!desc){ if(msg){ msg.style.color='var(--danger2)'; msg.textContent='Title and description required.'; } return; }
    const cs=B.getCareers();
    cs.push({id:B.genId('career'),title,location:(document.getElementById('adminCareerLocationInput')||{}).value?.trim()||'',postedDate:(document.getElementById('adminCareerDateInput')||{}).value||'',description:desc});
    B.setCareers(cs);
    if(msg){ msg.style.color='var(--success)'; msg.textContent='Role posted.'; setTimeout(()=>msg.textContent='',1500); }
    ['adminCareerTitleInput','adminCareerLocationInput','adminCareerDateInput','adminCareerDescInput'].forEach(id=>{ const el=document.getElementById(id); if(el) el.value=''; });
    B.renderAdminCareers(); if(B.refreshCareers) B.refreshCareers();
  });

  // History add
  const histAddBtn=document.getElementById('adminHistoryAdd');
  if(histAddBtn) histAddBtn.addEventListener('click',()=>{
    const title=(document.getElementById('adminHistTitleInput')||{}).value?.trim()||'';
    const desc=(document.getElementById('adminHistDescInput')||{}).value?.trim()||'';
    const msg=document.getElementById('adminHistoryMessage');
    if(!title||!desc){ if(msg){ msg.style.color='var(--danger2)'; msg.textContent='Title and description required.'; } return; }
    const hs=B.getHistory();
    hs.push({id:B.genId('hist'),title,year:(document.getElementById('adminHistYearInput')||{}).value?.trim()||'',imageUrl:(document.getElementById('adminHistImageInput')||{}).value?.trim()||'',shortDesc:(document.getElementById('adminHistShortInput')||{}).value?.trim()||'',description:desc});
    B.setHistory(hs);
    if(msg){ msg.style.color='var(--success)'; msg.textContent='Entry saved.'; setTimeout(()=>msg.textContent='',1500); }
    ['adminHistTitleInput','adminHistYearInput','adminHistImageInput','adminHistShortInput','adminHistDescInput'].forEach(id=>{ const el=document.getElementById(id); if(el) el.value=''; });
    B.renderAdminHistory(); if(B.refreshHistory) B.refreshHistory();
  });

  // Footer year
  const fy=document.getElementById('footerYear'); if(fy) fy.textContent=new Date().getFullYear();
});

})();
