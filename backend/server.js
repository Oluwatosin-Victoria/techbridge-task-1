const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const dataPath = path.join(__dirname, 'data', 'tasks.json');

function getTasks() {
  const data = fs.readFileSync(dataPath, 'utf8');
  return JSON.parse(data);
}
function saveTasks(tasks) {
  fs.writeFileSync(dataPath, JSON.stringify(tasks, null, 2));
}

app.get('/api/tasks', (req, res) => {
  res.json(getTasks());
});

app.get('/api/tasks/:id', (req, res) => {
  const task = getTasks().find(t => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).json({ error: 'Task not found' });
  res.json(task);
});

app.put('/api/tasks/:id', (req, res) => {
  const tasks = getTasks();
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).json({ error: 'Task not found' });
  if (req.body.status) task.status = req.body.status;
  saveTasks(tasks);
  res.json(task);
});

app.get('/api/status', (req, res) => {
  res.json({ status: 'Connected' });
});

app.listen(PORT, () => {
  console.log(`TechBridge API running on http://localhost:${PORT}`);
});
