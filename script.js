// TASK 4 DATA
const tracks = {
  data: [
    { id: 1, day: 1, title: "Data Cleaning Basics", desc: "Clean a messy dataset using Google Sheets or Excel. Identify and fix duplicate rows, blank cells, inconsistent formatting, and incorrect data types.", difficulty: "Beginner" },
    { id: 2, day: 4, title: "Formulas & Pivot Tables", desc: "Use spreadsheet formulas and Pivot Tables to answer questions and extract useful insights from a dataset.", difficulty: "Beginner" },
    { id: 3, day: 8, title: "Data Visualization", desc: "Create charts and a simple dashboard that communicate useful insights from a dataset.", difficulty: "Beginner → Intermediate" },
    { id: 4, day: 11, title: "Introduction to SQL", desc: "Practice basic SQL queries and use them to answer real-world questions about data.", difficulty: "Beginner → Intermediate" },
    { id: 5, day: 15, title: "SQL Joins & Aggregations", desc: "Use JOIN, GROUP BY and aggregate functions such as COUNT, SUM and AVG to analyze information across multiple tables.", difficulty: "Intermediate" },
    { id: 6, day: 19, title: "Lookup Functions & Data Wrangling", desc: "Use VLOOKUP or XLOOKUP to combine related datasets and handle data mismatches.", difficulty: "Intermediate" },
    { id: 7, day: 22, title: "Mini Analysis Project", desc: "Complete a small end-to-end analysis involving data cleaning, formulas, Pivot Tables, charts and recommendations.", difficulty: "Intermediate" },
    { id: 8, day: 26, title: "Capstone Project", desc: "Complete a larger project combining spreadsheet analysis and SQL using at least two related tables.", difficulty: "Intermediate" }
  ],
  web: [
    { id: 1, day: 1, title: "Build the TechBridge Homepage", desc: "Create the first version of the TechBridge website using HTML and CSS.", difficulty: "Beginner" },
    { id: 2, day: 4, title: "Build the TechBridge Programs Experience", desc: "Create a Programs experience presenting TechBridge's available learning programs.", difficulty: "Beginner" },
    { id: 3, day: 8, title: "Build the Internship Tasks Experience", desc: "Create an interface that presents the TechBridge internship tasks and helps users understand the internship journey.", difficulty: "Beginner → Intermediate" },
    { id: 4, day: 11, title: "Build an Interactive Internship Roadmap", desc: "Use JavaScript to allow visitors to switch between the Data Analytics and Web Development internship tracks.", difficulty: "Beginner → Intermediate" },
    { id: 5, day: 15, title: "Build the Intern Registration Experience", desc: "Create a professional registration and onboarding interface for TechBridge interns.", difficulty: "Intermediate" },
    { id: 6, day: 19, title: "Build the Task Submission System", desc: "Create an interface through which interns can prepare and submit their task work.", difficulty: "Intermediate" },
    { id: 7, day: 22, title: "Build the Intern Dashboard", desc: "Create a dashboard where an intern can view their profile, progress, tasks and submissions.", difficulty: "Intermediate" },
    { id: 8, day: 26, title: "Build the Complete TechBridge Internship Platform", desc: "Combine the different components created during the internship into a complete TechBridge platform.", difficulty: "Intermediate" }
  ]
};

function showTrack(trackName){
  const container=document.getElementById("tasksContainer");
  const currentTrack=document.getElementById("currentTrack");
  const dataBtn=document.getElementById("dataBtn");
  const webBtn=document.getElementById("webBtn");
  if(!container) return;
  const tasks=tracks[trackName];
  container.innerHTML=tasks.map(t=>`<div class="task-card"><span class="task-num">TASK ${t.id}</span><span class="task-day">Day ${t.day}</span><h3>${t.title}</h3><p>${t.desc}</p><span class="difficulty">${t.difficulty}</span></div>`).join("");
  if(currentTrack) currentTrack.textContent=`Currently Viewing: ${trackName==='data'?'DATA ANALYTICS':'WEB DEVELOPMENT'}`;
  if(dataBtn && webBtn){
    if(trackName==='data'){dataBtn.classList.add("active");webBtn.classList.remove("active");}
    else{webBtn.classList.add("active");dataBtn.classList.remove("active");}
  }
}

// TASK 5 DATA
const challenges=[
  {id:1,name:"Sales Performance Dashboard",track:"data",difficulty:"Beginner",short:"Analyze monthly sales data and create visual insights.",outcome:"A dashboard showing monthly sales trends and top products.",objective:"Analyze sales information and identify important trends.",skills:"Excel, data cleaning, charts",tools:"Google Sheets, Excel",time:"2-3 days",result:"Dashboard with sales KPIs and recommendations"},
  {id:2,name:"Customer Churn Analysis",track:"data",difficulty:"Intermediate",short:"Explore customer data to find why customers leave.",outcome:"A report explaining churn reasons and retention ideas.",objective:"Find patterns in customer churn.",skills:"Pivot Tables, SQL basics",tools:"Excel, SQL",time:"3-4 days",result:"Churn analysis report with charts"},
  {id:3,name:"Expense Tracker Analysis",track:"data",difficulty:"Beginner",short:"Clean and analyze personal/company expense data.",outcome:"Cleaned dataset and spending insights.",objective:"Practice data cleaning and categorization.",skills:"Data cleaning, VLOOKUP",tools:"Sheets, Excel",time:"2 days",result:"Clean expense report"},
  {id:4,name:"Responsive Landing Page",track:"web",difficulty:"Beginner",short:"Build a modern responsive landing page for TechBridge.",outcome:"A fully responsive landing page.",objective:"Create a landing page that works on all devices.",skills:"HTML, CSS, Flexbox",tools:"VS Code, Chrome",time:"2-3 days",result:"Deployed landing page"},
  {id:5,name:"Portfolio Website",track:"web",difficulty:"Intermediate",short:"Create a personal portfolio to showcase projects.",outcome:"A portfolio website with projects and contact section.",objective:"Build personal brand online.",skills:"HTML, CSS, JavaScript",tools:"HTML/CSS/JS",time:"4 days",result:"Live portfolio site"},
  {id:6,name:"Interactive Contact Form",track:"web",difficulty:"Advanced",short:"Build a contact form with validation and animations.",outcome:"A working form with JS validation.",objective:"Handle user input professionally.",skills:"JavaScript, DOM, Validation",tools:"JavaScript, CSS",time:"3 days",result:"Validated interactive form"}
];

let filterTrack="all", filterDiff="all";

function renderChallenges(){
  const cont=document.getElementById("challengesContainer");
  if(!cont) return;
  let filtered=challenges.filter(c=>{
    const trackOk=filterTrack==="all"||c.track===filterTrack;
    const diffOk=filterDiff==="all"||c.difficulty===filterDiff;
    return trackOk && diffOk;
  });
  document.getElementById("count").textContent=`Showing ${filtered.length} challenges`;
  if(filtered.length===0){cont.innerHTML="<p style='text-align:center; grid-column:1/-1; padding:40px;'>No results found. Try different filters.</p>";return;}
  cont.innerHTML=filtered.map(c=>`
    <div class="task-card">
      <span class="challenge-track ${c.track==='data'?'track-data':'track-web'}">${c.track==='data'?'DATA ANALYTICS':'WEB DEVELOPMENT'}</span>
      <span class="difficulty">${c.difficulty}</span>
      <h3>${c.name}</h3>
      <p>${c.short}</p>
      <p><strong>Outcome:</strong> ${c.outcome}</p>
      <button class="view-btn" onclick="openModal(${c.id})">View Challenge</button>
    </div>
  `).join("");
}

function openModal(id){
  const c=challenges.find(x=>x.id===id);
  const modal=document.getElementById("modal");
  const body=document.getElementById("modalBody");
  body.innerHTML=`
    <span class="challenge-track ${c.track==='data'?'track-data':'track-web'}">${c.track}</span>
    <h2>${c.name}</h2>
    <p><strong>Track:</strong> ${c.track}</p>
    <p><strong>Difficulty:</strong> ${c.difficulty}</p>
    <p><strong>Objective:</strong> ${c.objective}</p>
    <p><strong>Skills:</strong> ${c.skills}</p>
    <p><strong>Tools:</strong> ${c.tools}</p>
    <p><strong>Time:</strong> ${c.time}</p>
    <p><strong>Expected Result:</strong> ${c.result}</p>
  `;
  modal.style.display="block";
}

document.addEventListener("DOMContentLoaded",()=>{
  // Task 4 listeners
  const dataBtn=document.getElementById("dataBtn");
  const webBtn=document.getElementById("webBtn");
  if(dataBtn) dataBtn.addEventListener("click",()=>showTrack("data"));
  if(webBtn) webBtn.addEventListener("click",()=>showTrack("web"));
  if(document.getElementById("tasksContainer")) showTrack("web");

  // Task 5 listeners
  if(document.getElementById("challengesContainer")){
    renderChallenges();
    document.querySelectorAll(".filter-btn").forEach(btn=>{
      btn.addEventListener("click",()=>{
        const type=btn.dataset.filter;
        const val=btn.dataset.value;
        if(type==="track"){
          filterTrack=val;
          document.querySelectorAll('[data-filter="track"]').forEach(b=>b.classList.remove("active"));
        } else {
          filterDiff=val;
          document.querySelectorAll('[data-filter="difficulty"]').forEach(b=>b.classList.remove("active"));
        }
        btn.classList.add("active");
        renderChallenges();
      });
    });
    document.querySelector(".close").onclick=()=>document.getElementById("modal").style.display="none";
    window.onclick=(e)=>{if(e.target.id==="modal") document.getElementById("modal").style.display="none";};
  }
});
