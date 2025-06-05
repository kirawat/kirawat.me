---
name: "Scoped CSS"
dateCreated: 2025-06-05 16:07:00 +0700
---

Scoped CSS prevent style conflicts and improve modularity in your project.

Traditionally, CSS rules are global. This means a style defined for an element in one part of your website could unintentianally affect elements in completely different, unrelated parts. This often leads to "specificity wars" where you have to write increasingly complex selectors (e.g., using `!important` or deeply nested selectors) to override unwanted styles.

Many modern JavaScript frameworks and tools (like Vue.js, Svelte, Angular, and Astro) automatically process your CSS. They often do this by:

  * Adding unique attributes (e.g., `data-v-xxxxxx`) or classes (e.g., `astro-YYYYYY`) to the HTML elements of a component.

  * Rewriting your CSS selectors to include these unique attributes/classes, ensuring they only target elements within that component.
