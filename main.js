const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const generateBtn = document.getElementById('generate-btn');
const randomNumberEl = document.getElementById('random-number');

// Function to set the theme
const setTheme = (theme) => {
  body.dataset.theme = theme;
  localStorage.setItem('theme', theme);
  themeToggle.checked = theme === 'dark';
};

// Event listener for the theme toggle
themeToggle.addEventListener('change', () => {
  if (themeToggle.checked) {
    setTheme('dark');
  } else {
    setTheme('light');
  }
});

// Initial theme check
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  setTheme(savedTheme);
} else {
  // Check for preferred color scheme
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(prefersDark ? 'dark' : 'light');
}

// Random number generator
generateBtn.addEventListener('click', () => {
  const randomNumber = Math.floor(Math.random() * 101);
  randomNumberEl.textContent = randomNumber;
});
