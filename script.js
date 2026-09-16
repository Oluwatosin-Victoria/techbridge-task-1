const tracks = {
  data: [
    { id: 1, day: "Day 1-4", title: "Build the TechBridge Homepage", difficulty: "Beginner", desc: "Create index.html with hero and programs section" },
    { id: 2, day: "Day 5-8", title: "Build the TechBridge Programs Experience", difficulty: "Beginner", desc: "Create programs.html with 2 program cards" },
    { id: 3, day: "Day 9-13", title: "Build the TechBridge Internship Tasks Page", difficulty: "Intermediate", desc: "Create tasks.html listing all 8 tasks" },
    { id: 4, day: "Day 14-18", title: "Build the 30-Day Roadmap with JavaScript", difficulty: "Intermediate", desc: "Create roadmap.html with track switcher using JS" },
    { id: 5, day: "Day 19-22", title: "Data Cleaning with Excel/Sheets", difficulty: "Intermediate", desc: "Clean messy sales data" },
    { id: 6, day: "Day 23-25", title: "SQL Queries & Analysis", difficulty: "Advanced", desc: "Write SQL to answer business questions" },
    { id: 7, day: "Day 26-28", title: "Build Interactive Dashboard", difficulty: "Advanced", desc: "Create charts and dashboards" },
    { id: 8, day: "Day 29-30", title: "Final Presentation & Recommendation", difficulty: "Advanced", desc: "Present insights" }
  ],
  web: [
    { id: 1, day: "Day 1-4", title: "Build the TechBridge Homepage", difficulty: "Beginner", desc: "Create index.html with hero and programs section" },
    { id: 2, day: "Day 5-8", title: "Build the TechBridge Programs Experience", difficulty: "Beginner", desc: "Create programs.html with 2 program cards" },
    { id: 3, day: "Day 9-13", title: "Build the TechBridge Internship Tasks Page", difficulty: "Intermediate", desc: "Create tasks.html listing all 8 tasks" },
    { id: 4, day: "Day 14-18", title: "Build the 30-Day Roadmap with JavaScript", difficulty: "Intermediate", desc: "Create roadmap.html with track switcher using JS" },
    { id: 5, day: "Day 19-22", title: "Responsive Design & CSS Flexbox", difficulty: "Intermediate", desc: "Make all pages mobile responsive" },
    { id: 6, day: "Day 23-25", title: "JavaScript Interactivity", difficulty: "Advanced", desc: "Add forms, modals and validation" },
    { id: 7, day: "Day 26-28", title: "GitHub Deployment & Version Control", difficulty: "Advanced", desc: "Host projects on GitHub Pages" },
    { id: 8, day: "Day 29-30", title: "Final Portfolio & Recommendation", difficulty: "Advanced", desc: "Build final portfolio" }
  ]
};

function showTrack(trackName) {
  const container = document.getElementById("tasksContainer");
  const currentTrack = document.getElementById("currentTrack");
  const dataBtn = document.getElementById("dataBtn");
  const webBtn = document.getElementById("webBtn");
  if (!container ||!currentTrack) return;
  const tasks = tracks[trackName];
  container.innerHTML = tasks.map(task => `
    <div class="task-card">
      <span class="task-num">TASK ${task.id}</span>
      <span class="task-day">${task.day}</span>
      <h3>${task.title}</h3>
      <p>${task.desc}</p>
      <span class="difficulty">${task.difficulty}</span>
    </div>
  `).join("");
  currentTrack.textContent = `Currently Viewing: ${trackName === 'data'? 'DATA ANALYTICS' : 'WEB DEVELOPMENT'}`;
  if (dataBtn && webBtn) {
    if (trackName === 'data') {
      dataBtn.classList.add("active");
      webBtn.classList.remove("active");
    } else {
      webBtn.classList.add("active");
      dataBtn.classList.remove("active");
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const dataBtn = document.getElementById("dataBtn");
  const webBtn = document.getElementById("webBtn");
  if (dataBtn) dataBtn.addEventListener("click", () => showTrack("data"));
  if (webBtn) webBtn.addEventListener("click", () => showTrack("web"));
  showTrack("web");
});
