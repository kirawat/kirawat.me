---
name: "Fix CSS Sticky Not Working on Horizontal Scrolling"
author: "Kirawat Sahasewiyon"
dateCreated: 2025-06-04T15:58:00+07:00
datePublished: 2025-06-04T15:58:00+07:00
dateModified: 2025-06-04T22:33:00+07:00
tags:
  - CSS
status: Evergreen
---

I found an odd case of `sticky` doesn't work as intended on the horizontal scrolling. I wanted a "Sticky" button to stick to the top-right corner inside a `<pre>` element that was horizontally scrollable.

Here is the example HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF=8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="color-scheme" content="light dark">
  <title>Sticky Test</title>
</head>
<style>
  html, body {
    color: black;
  }

  pre {
    position: relative;
    margin: 0 auto;
    overflow-x: auto;
    width: 500px;
    max-height: 200px;
    padding: 20px;
    border: 1px solid black;
  }

  pre .sticky-button {
    position: sticky;
    top: 0;
    right: 0;
    width: 70px;
    z-index: 1;
    margin-bottom: 1rem;
    color: black;
    background-color: lightgreen;
    padding: 5px 10px;
    border: 1px solid darkgreen;
  }

  pre code {
    width: 1000px;
    white-space: nowrap;
    padding-right: 20px;
  }
</style>
<body>
  <pre>
    <button class="sticky-button">Sticky</button>
    <code>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tellus
      erat, elementum eu purus ac, gravida dignissim nulla. Proin blandit
      ipsum vitae odio luctus, a semper enim pulvinar. Pellentesque malesuada
      eget eros vel sollicitudin. Donec eleifend euismod nulla, at varius
      mauris vulputate eu. Phasellus leo sem, efficitur nec aliquet ac,
      placerat vel lacus. Quisque quis nulla non est congue viverra eu ut
      nisl. Nulla facilisi. Curabitur finibus turpis non nisi finibus, id
      malesuada massa interdum. Quisque pharetra ac lectus vel congue.
      Cras dictum ut nibh eget efficitur. Praesent diam nisi, luctus eget
      dui vitae, rhoncus consectetur nisi.
    </code>
  </pre>
</body>
</html>
```

And here is the result:

<iframe src="/assets/blog/2025/06/04/sticky-demo-1.html" allowtransparency="true" style="width: 100%; border: none;"></iframe>

## The Problem

My expectation is to have the "Sticky" button stick to the top-right of the `<pre>` element. The standard approach, `position: sticky; top: 0; right: 0;`, was applied to the button. The `<pre>` element was correctly set up with `overflow-x: auto` and wider content, making it scrollable horizontally.

Despite the correct setup, the button with `right: 0;` did *not* stick horizontally. Instead, it scrolled along with the content inside the `<pre>` block.

So I tried it with vertical scrolling by changed `pre { overflow-x: auto; }` to `pre { overflow-y: auto; }` and remove `pre code { white-space: nowrap; }`.

<iframe src="/assets/blog/2025/06/04/sticky-demo-2.html" allowtransparency="true" style="width: 100%; height: 270px; border: none;"></iframe>

The button stay sticky during vertical scroll, but not during horizontal scroll. This mean `top: 0;` is working, but `right: 0;` is not.

When changed `right: 0;` to `left: 0px;`, the button stay stick to both vertical and horizontal scroll.

<iframe src="/assets/blog/2025/06/04/sticky-demo-3.html" allowtransparency="true" style="width: 100%; height: 270px; border: none;"></iframe>

This pinpointed the issue specifically to the browser's handling of the `right` offset for `position: sticky` in my specific horizontal scrolling. It seemed the browser could correctly identify the `<pre>` element as the scroll container and calculate sticky position relative to its `top` and `left` edges, but failed to do so correctly for its `right` edge during horizontal scrolling.

## The Solution (Workaround)

Since `position: sticky; left: <value>;` was working reliably, I leveraged this to achieve the desired effect. The working solution for the button was:

```css
pre .sticky-button {
  position: sticky;
  top: 0;
  left: calc(100% - (70px + 10px)); /* calc(100% - (BUTTON_WIDTH + PADDING_RIGHT)) */
  width: 70px;
  /* ... other styles ... */
}
```

This positions the *left* edge of the button. `100%` refers to the width of the `<pre>` element's visible scrollport. By subtracting the button's own `width` + padding right width (10px) from `100%`, it calculate the `left` value that makes the button's right edge align with the right edge of the `<pre>` scrollport.

<iframe src="/assets/blog/2025/06/04/sticky-demo-4.html" allowtransparency="true" style="width: 100%; border: none;"></iframe>

I'm not really sure why `right: 0;` doesn't work. It's not just on one specific browser either (Chrome, Edge, Safari), so a browser's bug is ruled out. Some day I may find the answer, but for now, the workaround is working fine.