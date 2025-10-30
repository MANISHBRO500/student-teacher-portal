// Navbar hamburger toggle
const hamburger = document.querySelector('.hamburger');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    const menu = document.querySelector('.menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  });
}

// Login redirect logic (index.html)
const loginBtn = document.getElementById('loginBtn');
if (loginBtn) {
  loginBtn.addEventListener('click', () => {
    const role = document.getElementById('role').value;
    if (role === 'student') window.location.href = 'student.html';
    else window.location.href = 'teacher.html';
  });
}
