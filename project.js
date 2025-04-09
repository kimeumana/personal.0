const projects = [
  { title: "Portfolio Website", category: "web" },
  { title: "Data Dashboard", category: "data" },
  { title: "AI Chatbot", category: "ai" }
];

function renderProjects(list) {
  const container = document.getElementById('project-list');
  container.innerHTML = '';
  list.forEach(p => {
    const div = document.createElement('div');
    div.className = 'project';
    div.innerHTML = `<h3>${p.title}</h3><p>Category: ${p.category}</p>`;
    container.appendChild(div);
  });
}

function filterProjects(cat) {
  if (cat === 'all') {
    renderProjects(projects);
  } else {
    const filtered = projects.filter(p => p.category === cat);
    renderProjects(filtered);
  }
}

document.addEventListener('DOMContentLoaded', () => renderProjects(projects));
