---
name: JavaScript
dateCreated: 2025-06-11 02:33:00 +0700
---
## Defer

When the browser encounters a `<script>` tag with the `defer` attribute, it starts downloading the  script file immediately in the background. This download doesn't block the HTML parser from continuing to process the rest of the page.

The deferred script is executed only after the HTML document has been fully parsed. This means that the DOM (Document Object Mode) is fully constructed, and the browser is ready to render the page visually. The script will run before the `DOMContentLoaded` event is fired.

If a script primarily adds functionality or interacts with the DOM after it's fully loaded (e.g., event listeners, form validation), `defer` is a good choice.

If you have multiple scripts with the `defer` attribute, they are executed in the order in which they appear in the HTML document.

> [!NOTE]
> The `defer` attribute only works with external scripts (those with a `src` attribute). It doesn't apply to inline scripts.

### Key Benefits

* **Improve Page Load Performance:** By downloading scripts in the background and deferring their execution until the end, it never block the HTML parser—preventing potential delays in page rendering—so the browser can render the page content faster. This is especially beneficial for scripts that don't need to run immediately.

* **Guaranteed Execution Order:** With `defer`, you have the assurance that scripts will execute in order you've placed them in the HTML, which can be important for dependencies between scripts.