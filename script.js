/* ===========================================================
   Portfolio script – Vraj Nileshkumar Patel
   =========================================================== */
document.documentElement.classList.add('js');

/* ---------- CONFIG: contact form delivery ----------
   Option A (EmailJS): create a free account at emailjs.com, add an email service
   and a template that uses {{from_name}}, {{from_email}}, {{subject}}, {{message}},
   then paste the three values below.
   Option B (Formspree): create a form at formspree.io pointing to your email and
   paste its endpoint into FORMSPREE_URL.
   If neither is configured, the form opens your mail app with the message pre-filled. */
const CONFIG = {
  EMAILJS_SERVICE_ID:  'YOUR_EMAILJS_SERVICE_ID',   // <-- placeholder
  EMAILJS_TEMPLATE_ID: 'YOUR_EMAILJS_TEMPLATE_ID',  // <-- placeholder
  EMAILJS_PUBLIC_KEY:  'YOUR_EMAILJS_PUBLIC_KEY',   // <-- placeholder
  FORMSPREE_URL:       'YOUR_FORMSPREE_ENDPOINT',   // e.g. https://formspree.io/f/xxxxxxx
  TO_EMAIL: 'vrajpatel24905@gmail.com'
};

const LINKS = {
  github: 'https://github.com/vraj2409/',
  linkedin: 'https://www.linkedin.com/in/vraj-patel-8a7a9b273/',
  email: 'mailto:vrajpatel24905@gmail.com'
};
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

const ICONS = {
  github: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .3a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0C17.3 4.7 18.3 5 18.3 5c.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0012 .3"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6c.5-.9 1.7-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5v6.3zM5.3 7.4a2.1 2.1 0 110-4.1 2.1 2.1 0 010 4.1zm1.8 13.1H3.6V9h3.5v11.5zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4.2l-8 5-8-5V6l8 5 8-5v2.2z"/></svg>',
  phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.3 11.4 11.4 0 003.6.6 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.3.2 2.5.6 3.6a1 1 0 01-.3 1z"/></svg>',
  pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a7 7 0 00-7 7c0 5.3 7 13 7 13s7-7.700 7-13a7 7 0 00-7-7zm0 9.500A2.500 2.500 0 1112 6.500a2.500 2.500 0 010 5z"/></svg>'
};
// Lucide outline geometry; inline SVG keeps icons available without a CDN script.
const outlineIcon = paths => `<svg class="outline-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;
const DESIGN_ICONS = {
  brain: '<path d="M12 18V5a3 3 0 0 0-5.8-1A4 4 0 0 0 4 11a4 4 0 0 0 1 7.7A3 3 0 0 0 12 18M12 5a3 3 0 0 1 5.8-1A4 4 0 0 1 20 11a4 4 0 0 1-1 7.7A3 3 0 0 1 12 18M8 8l-2 2m10-2 2 2M7 15h2m6 0h2"/>',
  layers: '<path d="m12 3 10 5-10 5L2 8l10-5zM2 12l10 5 10-5M2 16l10 5 10-5"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/><circle cx="9" cy="7" r="4"/>',
  target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  compass: '<circle cx="12" cy="12" r="10"/><path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36z"/>',
  code: '<path d="m16 18 6-6-6-6M8 6l-6 6 6 6M14.5 4l-5 16"/>',
  braces: '<path d="M8 3H6a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5a2 2 0 0 0 2 2h2M16 3h2a2 2 0 0 1 2 2v5a2 2 0 0 0 2 2 2 2 0 0 0-2 2v5a2 2 0 0 1-2 2h-2"/>',
  cloud: '<path d="M20 16.2A4.5 4.5 0 0 0 18 7.5h-1.3A8 8 0 1 0 3 16.3"/><path d="M7 16h10M9 20h6"/>',
  database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5M3 12a9 3 0 0 0 18 0"/>',
  wrench: '<path d="m14.7 6.3 3 3a1 1 0 0 0 1.4 0l2.83-2.83a6 6 0 0 1-7.93 7.93l-7.91 7.91a2.12 2.12 0 0 1-3-3l7.91-7.91a6 6 0 0 1 7.93-7.93L14.7 6.3z"/>',
  sparkles: '<path d="m9 3 1.9 5.8L17 11l-6.1 2.2L9 19l-1.9-5.8L1 11l6.1-2.2L9 3zM19 2v4M17 4h4M20 15v6M17 18h6"/>',
  arrow: '<path d="M7 17 17 7M7 7h10v10"/>'
};
ICONS.mail = outlineIcon('<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>');
ICONS.pin = outlineIcon('<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/>');
ICONS.phone = outlineIcon('<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.79a2 2 0 0 1-.45 2.11L8.09 9.89a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.89.34 1.83.58 2.79.7A2 2 0 0 1 22 16.92z"/>');
$$('[data-design-icon]').forEach(el => el.innerHTML = outlineIcon(DESIGN_ICONS[el.dataset.designIcon]));
const socialHTML = (delay = false) =>
  [['github','GitHub',LINKS.github],['linkedin','LinkedIn',LINKS.linkedin],['mail','Email',LINKS.email]]
  .map(([k,l,u], i) => `<a href="${u}" aria-label="${l}" ${k!=='mail'?'target="_blank" rel="noopener noreferrer"':''} ${delay?`style="animation-delay:${1.7+i*.18}s"`:''}>${ICONS[k]}</a>`).join('');

$('#heroSocial').innerHTML = socialHTML(true);
$('#infoSocial').innerHTML = socialHTML();
$$('.ic[data-ic]').forEach(el => el.innerHTML = ICONS[el.dataset.ic]);

/* ---------- Data ---------- */
const EXPERIENCE = [
  { role:'Web Development Intern', company:'Rise Technologies', type:'Internship', dur:'May 2026',
    project:'VisionHR – Human Resource Management System',
    resp:['Developed a MERN-based HRMS with employee onboarding, attendance and leave workflows','Implemented JWT authentication and role-based access control','Integrated Amazon S3 document storage using 15-minute pre-signed URLs'],
    ach:['Implemented attendance-based payroll calculation in the HRMS','Built automated PDF payslip generation'] },
  { role:'AWS Cloud Summer Training', company:'BVM Engineering College', type:'Training', dur:'Jun 2026',
    resp:['Completed AWS Academy summer training covering cloud fundamentals, architecture, core services, pricing and support'],
    ach:['Earned the AWS Academy Graduate – Cloud Architecting – Training Badge'] }
];
const EDUCATION = [
  { title:'B.Tech – Computer Science & Engineering (IoT)', inst:'G H Patel College of Engineering & Technology, CVM University',
    meta:['2023 – 2027','Full-time','CGPA 9.72/10'],
    hl:['Gold Medalist for academic excellence','Core foundations: Data Structures & Algorithms, OOP, DBMS, Computer Networks, COA, Discrete Mathematics','Specialisation in AI/ML alongside IoT'] },
  { title:'Class XII – G.H.S.E.B.', inst:'', meta:['2023','Full-time','83%'],
    hl:['Higher secondary board examination','Scored 83%','Completed before starting B.Tech'] },
  { title:'Class X – G.S.E.B.', inst:'', meta:['2021','Full-time','81%'],
    hl:['Secondary board examination','Scored 81%','Foundation in science and mathematics'] }
];
const GH = LINKS.github;
const PROJECTS = [
  { title:'Version Control System', type:'Full-stack / Cloud', categories:['Full-stack','Cloud'], image:'version-control', gh:'https://github.com/vraj2409/Version-Control-System',
    desc:'A browser-based version control application with repository management and interactive commit history, deployed on AWS.',
    out:['Supports 100+ simulated commits and repository updates','Interactive commit history visualisation','RESTful APIs for repositories, commits and users','Backend on EC2, repository storage on S3, frontend on AWS Amplify'],
    tech:['React','Node.js','Express.js','MongoDB','AWS EC2','S3','Amplify','Git'] },
  { title:'Pravah – AI-Powered Traffic Management', type:'AI/ML / Full-stack', categories:['AI/ML','Full-stack'], image:'pravah', gh:null,
    desc:'A full-stack traffic management application that predicts traffic flow with LSTM networks and offers routing, incident reporting and traffic light management on an interactive map.',
    out:['LSTM-based traffic flow prediction','React + Leaflet.js for routing, incident reporting and traffic light management','Django backend with MongoDB processing community reports and sensor inputs'],
    tech:['React','Leaflet.js','Django','MongoDB','TensorFlow','LSTM'] },
  { title:'Job Recommendation System', type:'AI/ML', categories:['AI/ML'], image:'job-recommendation', gh:'https://github.com/vraj2409/Job-Recommendation-System',
    desc:'An NLP pipeline that ranks job listings against skills extracted from uploaded PDF resumes, with a Streamlit interface.',
    out:['TF-IDF and cosine similarity ranking of 600+ job listings','Curated 650+ listings using Selenium and BeautifulSoup','Streamlit interface for resume upload and ranked recommendations'],
    tech:['Python','scikit-learn','Streamlit','Selenium','BeautifulSoup'] },
  { title:'MediSure-360 – Pharmacy Management & POS', type:'Full-stack', categories:['Full-stack'], image:'medisure', gh:'https://github.com/vraj2409/MediSure-360',
    desc:'A pharmacy management application with inventory, POS billing and analytics dashboards.',
    out:['Inventory management, POS billing, stock updates, expiry alerts and printable receipts','JWT authentication with bcrypt password hashing','RESTful APIs and Chart.js dashboards on MongoDB aggregation pipelines for revenue, sales trends, top-selling medicines and stock health'],
    tech:['React','Node.js','Express.js','MongoDB','Mongoose','Chart.js','JWT'] }
];
const SKILLS = [
  {cat:'Programming', icon:'code', items:['Java','Python','JavaScript','C++','C','SQL']},
  {cat:'Web', icon:'braces', items:['React','Node.js','Express.js','Django','HTML5','CSS3','RESTful APIs']},
  {cat:'AI & ML', icon:'brain', items:['TensorFlow','Scikit-learn','Keras','Tableau','Matplotlib','NLP','LSTM','TF-IDF','Cosine similarity']},
  {cat:'Cloud', icon:'cloud', items:['AWS EC2','S3','IAM','Amplify','VPC','ALB','RDS','CloudFront','EC2 Auto Scaling','Secrets Manager']},
  {cat:'Databases', icon:'database', items:['MongoDB','PostgreSQL','SQL Server']},
  {cat:'Core', icon:'layers', items:['Data Structures & Algorithms','OOP','DBMS','Computer Networks','COA','Discrete Mathematics']},
  {cat:'Tools', icon:'wrench', items:['Git','GitHub','VS Code','PyCharm','Eclipse','Nmap','Cisco Packet Tracer']},
  {cat:'Soft skills', icon:'users', items:['Complex Problem Solving','Teamwork & Collaboration','Effective Communication','Learning Agility','Leadership']}
];
/* Certificate details were read from the uploaded files. Spec said C++ = 2023,
   but the certificate itself is dated 16 July 2024 (and the CV says 2024), so 2024 is used. */
const CERTS = [
  { title:'AWS Academy Graduate – Cloud Architecting', provider:'AWS Academy', year:'2026', file:'AWS_Academy_Graduate___Cloud_Architecting_Training_Badge.pdf' },
  { title:'SAP Advance Course', provider:'Edunet', year:'2025', file:'Vraj SAP Certificate.pdf' },
  { title:'Programming in Java', provider:'NPTEL', year:'2025', file:'Programming In Java.pdf' },
  { title:'Full Stack Web Development', provider:'Apna College', year:'2024', file:'Delta Full Stack Development.pdf' },
  { title:'100 Days of Code: The Complete Python Pro Bootcamp', provider:'Udemy', year:'2026', file:'Python 100 Days BootCamp.pdf' },
  { title:'C++ Course: Learn the Essentials', provider:'Scaler Topics', year:'2024', file:'Cpp_Essentials.pdf' },
  { title:'Introduction to Industry 4.0 and Industrial IoT (IIoT)', provider:'NPTEL', year:'2026', file:'IIoT.pdf' }
];
const SVG = {
  award:'<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>',
  chart:'<line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/>',
  medal:'<path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"/><path d="M11 12 5.12 2.2"/><path d="m13 12 5.88-9.8"/><path d="M8 7h8"/><circle cx="12" cy="17" r="5"/>',
  code:'<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
  flag:'<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/>'
};
const ACH = [
  { cat:'Professional', icon:'award', title:'GATE 2026 – Computer Science', ctx:'GATE 2026', desc:'Qualified · All India Rank 11,497 · Score 453' },
  { cat:'Professional', icon:'chart', title:'GATE 2026 – Data Science & AI', ctx:'GATE 2026', desc:'Qualified · All India Rank 4,561 · Score 438' },
  { cat:'Academic', icon:'medal', title:'Gold Medalist', ctx:'CVM University', desc:'Academic Excellence, CVM University' },
  { cat:'Professional', icon:'code', title:'Competitive Coding', ctx:'LeetCode & HackerRank', desc:'300+ LeetCode problems solved · 5-star Java rating on HackerRank' },
  { cat:'Professional', icon:'flag', title:'Hackathons', ctx:'Smart India Hackathon & Nexathon', desc:'Smart India Hackathon (2024, 2025) and Nexathon (2025)' }
];

/* ---------- Render ---------- */
const pad = n => String(n).padStart(3, '0');
const list = a => `<ul>${a.map(b => `<li>${esc(b)}</li>`).join('')}</ul>`;

$('#marquee').innerHTML = [...Array(2)].map(() =>
  ['React','Node.js','Django','TensorFlow','AWS','MongoDB','Python','Java','LSTM','NLP','Express.js','PostgreSQL']
  .map(t => `<span>${t}</span>`).join('')).join('');

$('#expList').innerHTML = EXPERIENCE.map((x, i) => `
  <article class="row">
    <div class="idx">${pad(i+1)}</div>
    <div><h3>${esc(x.role)}</h3><p class="who">${esc(x.company)}</p><p class="dur">${esc(x.dur)}</p><p style="margin-top:12px"><span class="badge o">${esc(x.type)}</span></p></div>
    <div>${x.project?`<p class="who" style="margin-bottom:14px">${esc(x.project)}</p>`:''}
      <h4>Key Responsibilities</h4>${list(x.resp)}<h4>Key Achievements</h4>${list(x.ach)}</div>
  </article>`).join('');

$('#eduList').innerHTML = EDUCATION.map((e, i) => `
  <article class="row">
    <div class="idx">${pad(i+1)}</div>
    <div><h3>${esc(e.title)}</h3>${e.inst?`<p class="who">${esc(e.inst)}</p>`:''}<p style="margin-top:12px">${e.meta.map((m,j)=>`<span class="badge ${j===0?'o':''}">${esc(m)}</span>`).join('')}</p></div>
    <div><h4>Key Highlights</h4>${list(e.hl)}</div>
  </article>`).join('');

$('#projList').innerHTML = PROJECTS.map((p, i) => `
  <article class="project-card" data-categories="${p.categories.join('|')}">
    <div class="project-art">
      <img src="assets/projects/${p.image}.svg" alt="${esc(p.title)} — illustrative interface preview" width="800" height="320" loading="lazy">
      <span class="project-number">${String(i+1).padStart(2,'0')}</span>
      ${p.gh ? `<a class="project-arrow" href="${p.gh}" target="_blank" rel="noopener noreferrer" aria-label="Open ${esc(p.title)} on GitHub">↗</a>` : ''}
    </div>
    <div class="project-body">
      <p class="project-category">${esc(p.type)}</p>
      <h3>${esc(p.title)}</h3>
      <p class="project-description">${esc(p.desc)}</p>
      <div class="project-tech">${p.tech.map(t=>`<span>${esc(t)}</span>`).join('')}</div>
      <details class="project-details"><summary>Project highlights</summary>${list(p.out)}</details>
      ${p.gh ? `<a class="project-link" href="${p.gh}" target="_blank" rel="noopener noreferrer">View on GitHub <span aria-hidden="true">↗</span><span class="sr-only"> — ${esc(p.title)}</span></a>` : '<p class="project-unavailable">Repository link coming soon</p>'}
    </div>
  </article>`).join('');

$$('.project-filters button').forEach(button => button.addEventListener('click', () => {
  const filter = button.dataset.filter;
  $$('.project-filters button').forEach(b => {
    const active = b === button;
    b.classList.toggle('selected', active);
    b.setAttribute('aria-pressed', String(active));
  });
  let count = 0;
  $$('.project-card').forEach(card => {
    card.hidden = filter !== 'All' && !card.dataset.categories.split('|').includes(filter);
    if (!card.hidden) count++;
  });
  $('#projectCount').textContent = `Showing ${count} ${filter === 'All' ? '' : filter + ' '}project${count === 1 ? '' : 's'}`;
}));

$('#skillGrid').innerHTML = SKILLS.map((g, gi) => `
  <article class="toolkit-card" style="--accent:${['#ffad88','#b5a1f2','#ffbf76','#ffad88','#b5a1f2','#ffbf76','#ffad88','#b5a1f2'][gi]}">
    <span class="toolkit-icon" aria-hidden="true">${outlineIcon(DESIGN_ICONS[g.icon])}</span>
    <h3>${esc(g.cat)}</h3>
    <ul class="skill-tags">${g.items.map(n => `<li>${esc(n)}</li>`).join('')}</ul>
  </article>`).join('');

$('#achGrid').innerHTML = ACH.map((a, i) => `
  <article class="acard" style="--d:${i*.1}s">
    <span class="abadge" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${SVG[a.icon]}</svg></span>
    <span class="cat">${esc(a.cat)}</span><h3>${esc(a.title)}</h3><p class="actx">${esc(a.ctx)}</p><p class="adesc">${esc(a.desc)}</p>
    ${a.title === 'Competitive Coding' ? `<div class="coding-links"><a class="profile-btn" href="https://leetcode.com/u/Messi-10/" target="_blank" rel="noopener noreferrer">LeetCode <span>↗</span></a><a class="profile-btn" href="https://www.hackerrank.com/profile/vrajpatel24905" target="_blank" rel="noopener noreferrer">HackerRank <span>↗</span></a></div>` : ''}
  </article>`).join('');

$('#stats').innerHTML = [[300,'+','LeetCode Problems'],[CERTS.length,'','Certifications'],[PROJECTS.length,'','Major Projects'],[ACH.length,'','Awards & Recognitions']]
  .map(([n,s,l],i) => `<div class="stat" style="--d:${i*.1}s"><b data-stat="${n}" data-suffix="${s}">0${s}</b><span>${esc(l)}</span></div>`).join('');

/* ---------- Certificates (PDF preview with graceful fallbacks) ---------- */
const certPath = f => 'Certificates/' + encodeURIComponent(f);
const prevPath = f => 'Certificates/previews/' + encodeURIComponent(f.replace(/\.pdf$/i, '')) + '.jpg';
$('#certGrid').innerHTML = CERTS.map((c, i) => `
  <article class="ccard" data-file="${esc(c.file)}" style="--d:${((i%3)*.12 + Math.floor(i/3)*.25).toFixed(2)}s">
    <div class="cprev"></div>
    <div class="cinfo"><h3>${esc(c.title)}</h3>
      <div class="cmeta">${c.provider?`<span class="pb">${esc(c.provider)}</span>`:''}${c.year?`<span class="pb yr">${esc(c.year)}</span>`:''}</div>
      ${c.unavailable ? '' : `<a class="vbtn" href="${certPath(c.file)}" target="_blank" rel="noopener noreferrer">View Certificate ↗</a>`}</div>
  </article>`).join('');

function showSoon(card, c) {
  const box = $('.cprev', card);
  if (c.unavailable) {
    box.className = 'cprev python-preview';
    box.innerHTML = '<img src="assets/python-course.svg" alt="Python programming illustration" width="640" height="480">';
    return;
  }
  box.className = 'cprev soon';
  box.innerHTML = `<span class="pb">${esc(c.provider)}</span><strong>PDF certificate</strong><span>Open the original using the link below</span>`;
}
function tryPdfJs(card, c) {
  const box = $('.cprev', card);
  if (!window.pdfjsLib) return showSoon(card, c);
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
  pdfjsLib.getDocument(certPath(c.file)).promise.then(pdf => pdf.getPage(1)).then(page => {
    const vp = page.getViewport({ scale: 1.2 }), cv = document.createElement('canvas');
    cv.width = vp.width; cv.height = vp.height;
    return page.render({ canvasContext: cv.getContext('2d'), viewport: vp }).promise.then(() => { box.innerHTML = ''; box.appendChild(cv); });
  }).catch(() => showSoon(card, c));
}
window.addEventListener('load', () => {
  $$('.ccard').forEach(card => {
    const c = CERTS.find(x => x.file === card.dataset.file), box = $('.cprev', card);
    if (c.unavailable) { showSoon(card, c); return; }
    const img = new Image();
    img.alt = 'Preview of ' + c.title;
    img.onload = () => box.appendChild(img);
    img.onerror = () => tryPdfJs(card, c);
    img.src = prevPath(c.file);
  });
});

/* ---------- Scroll reveal ---------- */
const io = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (!en.isIntersecting) return;
    const el = en.target; el.classList.add('in-view'); io.unobserve(el);
    if (el.matches('.stat')) countStat($('b', el));
    if (el.matches('.form-card')) setTimeout(() => { el.classList.add('draw'); setTimeout(() => $('#sendBtn').classList.add('pulse'), 1900); }, 900);
  });
}, { threshold: .12, rootMargin: '0px 0px -40px 0px' });
$$('.rv, .row, .scard, .ccard, .acard, .stat, .big .line').forEach(el => io.observe(el));

function countStat(b) {
  const n = +b.dataset.stat, s = b.dataset.suffix;
  if (reduced) { b.textContent = n + s; return; }
  const dur = 1600, st = performance.now();
  (function step(t) {
    const p = Math.min((t - st) / dur, 1), e = 1 - Math.pow(1 - p, 3);
    b.textContent = Math.round(n * e) + s; if (p < 1) requestAnimationFrame(step);
  })(st);
}

/* ---------- Certificate card tilt ---------- */
if (!reduced && matchMedia('(hover:hover)').matches) {
  $$('.ccard').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
      card.classList.add('tilting');
      card.style.transform = `perspective(900px) rotateX(${(-y*7).toFixed(2)}deg) rotateY(${(x*8).toFixed(2)}deg) scale(1.02)`;
    });
    card.addEventListener('mouseleave', () => { card.classList.remove('tilting'); card.style.transform = ''; });
  });
}

/* ---------- Navbar ---------- */
const toggle = $('#navToggle'), links = $('#navLinks');
toggle.addEventListener('click', () => { const o = links.classList.toggle('open'); toggle.setAttribute('aria-expanded', o); });
$$('#navLinks a').forEach(a => a.addEventListener('click', () => { links.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }));
document.addEventListener('keydown', e => { if (e.key === 'Escape' && links.classList.contains('open')) { links.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); toggle.focus(); } });
document.addEventListener('click', e => { if (!e.target.closest('#nav')) { links.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); } });
const navAnchors = $$('#navLinks a');
const spy = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) navAnchors.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
}), { rootMargin: '-45% 0px -50% 0px' });
$$('main section[id]').forEach(s => spy.observe(s));

/* ---------- Contact form ---------- */
const form = $('#contactForm'), status = $('#formStatus'), btn = $('#sendBtn');
const setStatus = (msg, ok) => { status.textContent = msg; status.className = 'form-status ' + (ok ? 'ok' : 'err'); };
const configured = v => v && !/^YOUR_/.test(v);
form.addEventListener('submit', async e => {
  e.preventDefault();
  const d = Object.fromEntries(new FormData(form));
  if (!d.name.trim() || !/^\S+@\S+\.\S+$/.test(d.email) || !d.subject.trim() || !d.message.trim()) {
    form.reportValidity();
    return setStatus('Please fill in every field with a valid email address.', false);
  }
  btn.disabled = true; setStatus('Sending…', true);
  try {
    if (configured(CONFIG.EMAILJS_SERVICE_ID) && configured(CONFIG.EMAILJS_TEMPLATE_ID) && configured(CONFIG.EMAILJS_PUBLIC_KEY)) {
      const r = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ service_id: CONFIG.EMAILJS_SERVICE_ID, template_id: CONFIG.EMAILJS_TEMPLATE_ID, user_id: CONFIG.EMAILJS_PUBLIC_KEY,
          template_params: { from_name: d.name, from_email: d.email, subject: d.subject, message: d.message, to_email: CONFIG.TO_EMAIL } })
      });
      if (!r.ok) throw new Error(await r.text());
    } else if (configured(CONFIG.FORMSPREE_URL)) {
      const r = await fetch(CONFIG.FORMSPREE_URL, { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify(d) });
      if (!r.ok) throw new Error('Formspree error');
    } else {
      const body = `${d.message}\n\n— ${d.name} (${d.email})`;
      window.location.href = `mailto:${CONFIG.TO_EMAIL}?subject=${encodeURIComponent(d.subject)}&body=${encodeURIComponent(body)}`;
      setStatus('Your email app should open with the message ready to send. If it does not, write to ' + CONFIG.TO_EMAIL + '.', true);
      btn.disabled = false; return;
    }
    setStatus('Message sent. Thank you, I will reply soon.', true); form.reset();
  } catch (err) {
    setStatus('The message could not be sent. Please email ' + CONFIG.TO_EMAIL + ' directly.', false);
  }
  btn.disabled = false;
});

if (configured(CONFIG.FORMSPREE_URL) || (configured(CONFIG.EMAILJS_SERVICE_ID) && configured(CONFIG.EMAILJS_TEMPLATE_ID) && configured(CONFIG.EMAILJS_PUBLIC_KEY))) { $('#sendBtn span').textContent = 'Send Message'; $('.form-hint').textContent = 'Send a message directly from this form.'; }

// Replace typographic arrow glyphs with consistent outline icons.
$$('.btn i, .talk i, .work-list i, .send-btn i, .project-arrow, .project-link span[aria-hidden]').forEach(el => {
  el.innerHTML = outlineIcon(DESIGN_ICONS.arrow);
  el.setAttribute('aria-hidden', el.tagName === 'A' ? 'false' : 'true');
});
