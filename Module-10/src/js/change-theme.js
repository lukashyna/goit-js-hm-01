const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const switchTheme = document.querySelector(`input.js-switch-input`);
const body = document.querySelector(`body`);
function setTheme() {
  if (localStorage.getItem('theme') === Theme.DARK) {
    body.classList.remove(Theme.LIGHT);
    body.classList.add(Theme.DARK);
    switchTheme.setAttribute('checked', 'checked');
  } else {
    body.classList.remove(Theme.DARK);
    body.classList.add(Theme.LIGHT);
  }
}
function switchCheckbox() {
  switchTheme.toggleAttribute('checked');
  if (switchTheme.hasAttribute(`checked`)) {
    localStorage.setItem('theme', Theme.DARK);
    setTheme();
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
    setTheme();
  }
}
switchTheme.addEventListener('change', switchCheckbox);
