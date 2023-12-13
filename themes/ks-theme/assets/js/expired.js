function displayFixedHeader() {
  const header = document.getElementById('header');
  const scrollTrigger = 80; // Scroll offset to activate the fixed header.
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > scrollTrigger) {
      header.classList.add('fixed');
    } else {
      header.classList.remove('fixed');
    }
  });
}

function customTooltips() {
  const tooltips = document.querySelectorAll('[data-tooltip]');

  tooltips.forEach(tooltip => {
    const content = tooltip.dataset.tooltip;
    const tooltipElement = document.createElement('div');
    tooltipElement.classList.add('tooltip');
    tooltipElement.textContent = content;
    document.body.appendChild(tooltipElement);
  
    tooltip.addEventListener('mouseenter', () => {
      tooltipElement.style.display = 'block';
    });
  
    tooltip.addEventListener('mouseleave', () => {
      tooltipElement.style.display = 'none';
    });

    document.addEventListener('mousemove', (e) => {
      tooltipElement.style.left = (e.pageX + 10) + 'px';
      tooltipElement.style.top = (e.pageY + 10) + 'px';
    });
  })
}

function convertWikilinkToLink() {
  const regexWikilink = /\[\[([^\[\]]+)\]\]/g;
  const regexLinkWithDisplayText = /\[\[([^\[\]]+)\|([^\[\]]+)\]\]/g;

  const element = document.getElementById('article-content');
  const source = element.innerHTML;

  const replaceLinkWithDisplayText = (match, title, text) => {
    const slug = getSlugFromTitle(title);
    return `<a href="../${slug}">${text}</a>`;
  }

  const replaceWikilink = (match, title) => {
    const slug = getSlugFromTitle(title);
    return `<a href="../${slug}">${title}</a>`;
  }

  element.innerHTML = source
    .replace(regexLinkWithDisplayText, replaceLinkWithDisplayText)
    .replace(regexWikilink, replaceWikilink);
}

function convertMarkdownLinks() {
  const links = document.querySelectorAll('a');

  for (const link of links) {
    if (!link.href.includes('.md')) {
      continue;
    };
    link.href = link.href
      .toLowerCase()
      .replace('/garden/kb/', '/kb/')
      .replace(' ', '-')
      .replace('%20', '-')
      .replace('.md', '');
  }
}

function getSlugFromTitle(title) {
  return title.trim().toLowerCase().replace(' ', '-').replace('#', '/#');
}