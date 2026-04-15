const darkModeBtn = document.getElementById('darkModeBtn');
const body = document.body;

if(localStorage.getItem('darkMode') === 'enabled') {
  body.classList.add('dark-mode');
  darkModeBtn.textContent = '☀️';
}

darkModeBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  if(body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
    darkModeBtn.textContent = '☀️';
  } else {
    localStorage.setItem('darkMode', 'disabled');
    darkModeBtn.textContent = '🌙';
  }
});