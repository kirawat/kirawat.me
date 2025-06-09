---
name: "Fix <iframe> Background Not Transparent"
dateCreated: 2025-06-09 22:35:00 +0700
---

There is an issue with `<iframe>` display white background instead of transparent when `color-scheme` between parent and child frames are different.

To workaround this issue, add the following to the `<head>` of your embed HTML:

```html
<meta name="color-scheme" content="light dark">
```

This line tells the web browser that the HTML you embed supports both a light and a dark color theme. Without it, the browser assumes your page is a "legacy" page that isn't aware of modern features like system-level light and dark modes.

To ensure readability and prevent "broken" looking pages (e.g., black text on a black background if the user has dark mode on), the browser plays it safe. It enforces its own default opaque background color on the `<html>` element. This is always `white` in light mode.