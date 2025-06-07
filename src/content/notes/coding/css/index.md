---
name: "CSS"
dateCreated: 2025-06-06 12:04:00 +0700
---

* [CSS Coding Convention](./css-coding-convention.md)
* [CSS Reset](./css-reset.md)
* [Mobile-first Styling](./mobile-first-styling.md)

## Mobile-first Styling

You should generally style for smaller screen first and then use `@media (min-width: ...)` for larger screens. This approach is known as [mobile-first design](../../mobile-first-design.md), and it's considered a best practice in modern web development.

Starting with the essential styles for the smallest viewports forces you to prioritize content and functionality. You begin with a baseline and progressively add complexity. This often leads to less CSS bloat and fewer style overrides, making your CSS easier to manage.

### How it Works in Practice

Your CSS would be structured like this:

```css
/* Base style for mobile devices (and all screens) */
.container {
  padding: 1rem;
  font-size: 16px;
}

.button {
  width: 100%;
  padding: 0.75rem;
}

/* Styles for tablets and larger screens */
@media (min-width: 48em) { /* ~768px */
  .container {
    padding: 2rem;
  }
}

/* Styles for desktop and very large screens */
@media (min-width: 64em) { /* ~1024px */
  .button {
    width: auto;
    padding: 0.75rem 1.5rem;
  }
}
```

In this example, all devices get the simple base styles. As the screen width increases, the media queries add or override styles to adapt the layout for the larger space. This is more efficient than writing a complex desktop layout and then trying to simplify or undo it for smaller screens using `max-width`.