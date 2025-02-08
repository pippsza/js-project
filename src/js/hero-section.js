const themes = [
  'red-theme',
  'lightGreen-theme',
  'blue-theme',
  'orange-theme',
  'green-theme',
  'yellow-theme',
];

let currentThemeIndex = 0;
const savedTheme = localStorage.getItem('selectedTheme');
if (savedTheme && themes.includes(savedTheme)) {
  document.body.classList.add(savedTheme);
  currentThemeIndex = themes.indexOf(savedTheme);
}

document.getElementById('rollButton').addEventListener('click', () => {
  const body = document.body;
  body.classList.remove(themes[currentThemeIndex]);
  currentThemeIndex = (currentThemeIndex + 1) % themes.length;
  const newTheme = themes[currentThemeIndex];
  body.classList.add(newTheme);
  localStorage.setItem('selectedTheme', newTheme);
});
