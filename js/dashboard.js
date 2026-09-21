let tasks = [
  {id:1, title:"TechBridge Landing Page", desc:"Build responsive landing page with hero and features.", status:"completed", duration:"3 hrs", skills:"HTML, CSS"},
  {id:2, title:"About & Programs Section", desc:"Create about and program cards for TechBridge.", status:"completed", duration:"2 hrs", skills:"Flexbox, Grid"},
  {id:3, title:"Internship Tasks Page", desc:"Display internship journey with 8 tasks overview.", status:"completed", duration:"3 hrs", skills:"HTML, CSS, Responsive"},
  {id:4, title:"Learning Roadmap", desc:"Build toggle between Data and Web Development tracks.", status:"in-progress", duration:"4 hrs", skills:"JavaScript, DOM"},
  {id:5, title:"Challenge Hub", desc:"Interactive hub with filters and modals for 6 challenges.", status:"in-progress", duration:"4 hrs", skills:"JS Filters, Modal"},
  {id:6, title:"Intern Dashboard", desc:"Build dashboard with progress tracker and task completion.", status:"in-progress", duration:"5 hrs", skills:"JS Data, Progress Logic"},
  {id:7, title:"Registration & Forms", desc:"Create registration flow with validation and localStorage.", status:"not-started", duration:"4 hrs", skills:"Forms, Validation"},
  {id:8, title:"Final Deployment", desc:"Final testing, optimization and portfolio presentation.", status:"not-started", duration:"3 hrs", skills:"Deployment, QA"}
];

const saved = localStorage.getItem('techbridge_tasks');
if(saved){ tasks = JSON.parse(saved); }
let currentFilter = 'all';

const techData = {
  nextjs: `<h3>Next.js</h3><p>Next.js is a powerful React framework used for building modern, fast web applications. It enables server-side rendering, static site generation, and API routes. Commonly used for: SaaS platforms, dashboards, e-commerce like TechBridge.</p><p><b>Used by:</b> Netflix, TikTok, Twitch</p><a href="https://nextjs.org" target="_blank" style="color:#2563eb;">Learn More →</a>`,
  vue: `<h3>Vue.js</h3><p>Vue.js is a progressive JavaScript framework for building user interfaces. It's easy to learn, lightweight, and flexible. Developers use it for SPAs, interactive dashboards, and components.</p><p><b>Used by:</b> Alibaba, Grammarly, GitLab</p><a href="https://vuejs.org" target="_blank" style="color:#2563eb;">Learn More →</a>`,
  angular: `<h3>Angular</h3><p>Angular is a full-featured framework by Google for building large-scale enterprise applications. It uses TypeScript and has built-in routing, forms, and HTTP.</p><p><b>Used by:</b> Google, Microsoft Office, Upwork</p><a href="https://angular.dev" target="_blank" style="color:#2563eb;">Learn More →</a>`,
  backend: `<h3>Backend Development</h3><p>Backend is the server-side that powers frontend. It handles databases, authentication, APIs, and logic. Frontend = what users see, Backend = what makes it work.</p><p><b>Popular Backend Tech:</b><br>• <b>Node.js + Express.js</b> - JavaScript backend, fast APIs<br>• <b>Django / Flask</b> - Python, great for Data apps<br>• <b>Laravel</b> - PHP framework for web platforms</p>`
};

function saveTasks(){ localStorage.setItem('techbridge_tasks', JSON.stringify(tasks)); }

function updateProgress(){
  const completed = tasks.filter(t=>t.status==='completed').length;
  const total = tasks.length;
  const remaining = total - completed;
  const percent = ((completed/total)*100).toFixed(1);
  document.getElementById('completedCount').textContent = completed;
  document.getElementById('remainingCount').textContent = remaining;
  document.getElementById('totalCount').textContent = total;
  document.getElementById('percentText').textContent = percent + '%';
  document.getElementById('progressFill').style.width = percent + '%';
  if(completed===total){
    document.getElementById('statusText').textContent = 'Completed 🎉';
    if(!localStorage.getItem('celebrated')){ alert('🎉 Congratulations Victoria! You completed all 8 tasks!'); localStorage.setItem('celebrated','yes'); }
  }
}

function renderTasks(){
  const grid = document.getElementById('tasksGrid');
  grid.innerHTML = '';
  const filtered = currentFilter==='all' ? tasks : tasks.filter(t=>t.status===currentFilter);
  if(filtered.length===0){ grid.innerHTML='<p style="grid-column:1/-1;text-align:center;padding:20px;">No tasks found.</p>'; return; }
  filtered.forEach(task=>{
    const card = document.createElement('div');
    card.className = `task-card ${task.status}`;
    card.innerHTML = `
      <h4>TASK ${task.id}</h4>
      <h3>${task.title}</h3>
      <p style="font-size:13px;color:#6b7280;">${task.desc}</p>
      <span class="badge ${task.status}">${task.status.replace('-',' ')}</span>
      <div class="task-actions">
        <button class="btn btn-primary" onclick="viewTask(${task.id})">View Task</button>
        ${task.status!=='completed' ? `<button class="btn btn-success" onclick="markCompleted(${task.id})">Mark Completed</button>` : `<button class="btn btn-outline" onclick="markNotStarted(${task.id})">Undo</button>`}
      </div>
    `;
    grid.appendChild(card);
  });
}

function markCompleted(id){
  const t = tasks.find(x=>x.id===id);
  if(t){ t.status='completed'; saveTasks(); updateProgress(); renderTasks(); }
}
function markNotStarted(id){
  const t = tasks.find(x=>x.id===id);
  if(t){ t.status='not-started'; saveTasks(); updateProgress(); renderTasks(); localStorage.removeItem('celebrated'); }
}
function viewTask(id){
  const t = tasks.find(x=>x.id===id);
  document.getElementById('modalTitle').textContent = `Task ${t.id}: ${t.title}`;
  document.getElementById('modalDesc').textContent = t.desc;
  document.getElementById('modalDetails').innerHTML = `<p><b>Status:</b> ${t.status}</p><p><b>Skills:</b> ${t.skills}</p><p><b>Estimated:</b> ${t.duration}</p><p><b>Deliverable:</b> Complete and deploy this task page.</p>`;
  document.getElementById('taskModal').classList.add('active');
}

document.querySelectorAll('.filter-btn[data-filter]').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    document.querySelectorAll('.filter-btn[data-filter]').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    renderTasks();
  });
});

function showTech(key){
  document.getElementById('techDisplay').innerHTML = techData[key];
  document.querySelectorAll('.tech-tab').forEach(b=>b.classList.remove('active'));
  document.querySelector(`[data-tech="${key}"]`).classList.add('active');
}
document.querySelectorAll('.tech-tab').forEach(btn=>{
  btn.addEventListener('click', ()=> showTech(btn.dataset.tech));
});

document.getElementById('closeTaskModal').onclick = ()=> document.getElementById('taskModal').classList.remove('active');
document.getElementById('taskModal').onclick = (e)=>{ if(e.target.id==='taskModal') e.target.classList.remove('active'); };

updateProgress();
renderTasks();
showTech('nextjs');
