// Dynamic greeting
const greeting = document.getElementById('greeting');
const hour = new Date().getHours();
if (hour < 12) {
  greeting.textContent = 'Good morning!';
} else if (hour < 18) {
  greeting.textContent = 'Good afternoon!';
} else {
  greeting.textContent = 'Good evening!';
}

// Theme toggle
const toggleBtn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);
toggleBtn.addEventListener('click', () => {
  const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
});

// Form validation
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const msg = document.getElementById('form-msg');
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!emailPattern.test(email)) {
    msg.textContent = "Please enter a valid email.";
    msg.style.color = "red";
  } else {
    msg.textContent = "Message sent!";
    msg.style.color = "green";
  }
});

// Scrollspy
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = "";
  sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 100;
    if (top >= offset) current = sec.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});
