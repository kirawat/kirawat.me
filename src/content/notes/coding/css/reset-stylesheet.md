---
name: "Reset Stylesheet"
dateCreated: 2025-06-05 19:44:00 +0700
---

A reset stylesheet aims to reduce browser inconsistencies in default element styling. There are many comprehensive resets available (like [Meyer's Reset](https://meyerweb.com/eric/tools/css/reset/) or [Normalize.css](https://necolas.github.io/normalize.css/)). Here's a very simplified example to give you the idea. For a real project, you might want to use a more robust solution or tailor this extensively.

```css
/*
  Changes how the CSS box model works, making it more intuitive
  to size elements because padding and border no longer increase
  the element's specified width or height.
*/
*,
*::before,
*::after {
  box-sizing: border-box;
}

/*
  Universal reset for a wide range of HTML elements.
  The purpose of this block is to strip away default browser styling,
  providing a consistent baseline to build upon.
  This helps in reducing cross-browser inconsistencies.
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {

  /*
    Removes all default margins from the selected elements.

    Different browsers apply different default margins to elements
    like headings (`h1`-`h6`), paragraphs (`p`), lists (`ul`, `ol`), etc.
    This rule removes all those default outer spaces.
  */
  margin: 0;

  /*
    Removes all default padding from the selected elements.

    Similar to margin, this removes any default inner spacing that
    browsers might apply to elements.
  */
  padding: 0;

  /*
    Removes all default borders from the selected elements.

    Resets any default borders. For example, `fieldset` elements
    often have a default border.
  */
  border: 0;

  /*
    Ensures that the font size is not altered by browser defaults,
    making it easier to set a base font size on the body or html
    element.
  */
  font-size: 100%;

  /*
    Makes all text-related properties (`font-family`, `font-weight`,
    `font-style`, `line-height`, etc.) inherit from their parent element,
    rather than using browser defaults.
  */
  font: inherit;

  /*
    Aligns the baseline of the element with the baseline of its parent.
    This is particular useful for inline and table-cell elements to ensure
    consistent alignment.
  */
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}

body {
  line-height: 1;
}

ol, ul {
  list-style: none;
}

blockquote, q {
  quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}
```