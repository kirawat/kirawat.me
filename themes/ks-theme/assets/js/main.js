function printRelativeTime(elementId) {
  const element = document.getElementById(elementId);
  const elementData = element.dataset.datetime;
  element.innerHTML = moment(elementData).fromNow();
}

function toggleDarkMode() {
  const container = document.documentElement;
  const dataTheme = container.getAttribute('data-theme');

  if (dataTheme === 'dark') {
    container.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  } else {
    container.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
}

window.toggleDarkMode = toggleDarkMode;

const currentPageElement = document.querySelector('a[aria-current="true"');
const isGarden = currentPageElement ? currentPageElement.textContent === 'Garden' : false;
if (isGarden) {
  printRelativeTime('planted-date');
  printRelativeTime('last-tended');
}