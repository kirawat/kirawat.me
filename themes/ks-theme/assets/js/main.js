function printRelativeTime(elementId) {
  const element = document.getElementById(elementId);
  const elementData = element.dataset.datetime;
  element.innerHTML = moment(elementData).fromNow();
}

function toggleDarkMode() {
  const container = document.documentElement;
  const dataTheme = container.getAttribute('data-theme');

  // https://github.com/giscus/giscus/issues/336#issuecomment-1007922777
  function changeGiscusTheme(theme) {
    function sendMessage(message) {
      const iframe = document.querySelector('iframe.giscus-frame');
      if (!iframe) return;
      iframe.contentWindow.postMessage({ giscus: message }, 'https://giscus.app');
    }
    sendMessage({
      setConfig: {
        theme: theme
      }
    });
  }

  if (dataTheme === 'dark') {
    container.setAttribute('data-theme', 'light');
    changeGiscusTheme('light');
    localStorage.setItem('theme', 'light');
  } else {
    container.setAttribute('data-theme', 'dark');
    changeGiscusTheme('dark');
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