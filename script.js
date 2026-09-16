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

let currentTrackName = "web";

function showTrack(trackName) {
  currentTrackName = trackName;
  const container = document.getElementById("tasksContainer");
  const currentTrack = document.getElementById("currentTrack");
  const dataBtn = document.getElementById("dataBtn");
  const webBtn = document.getElementById("webBtn");
  if (!container ||!currentTrack) return;
  const tasks = tracks[trackName];
  container.innerHTML = tasks.map(task => `
    <div class="task-card">
      <span class="task-num">TASK ${task.id}</span>
      <span class="task-day">Day ${task.day}</span>
      <h3>${task.title}</h3>
      <p>${task.desc}</p>
      <span class="difficulty">${task.difficulty}</span>
    </div>
  `).join("");
  currentTrack.textContent = `Currently Viewing: ${trackName === 'data'? 'DATA ANALYTICS' : 'WEB DEVELOPMENT'}`;
  if (trackName === 'data') {
    dataBtn.classList.add("active");
    webBtn.classList.remove("active");
  } else {
    webBtn.classList.add("active");
    dataBtn.classList.remove("active");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const dataBtn = document.getElementById("dataBtn");
  const webBtn = document.getElementById("webBtn");
  if (dataBtn) dataBtn.addEventListener("click", () => showTrack("data"));
  if (webBtn) webBtn.addEventListener("click", () => showTrack("web"));
  showTrack("web");
});
