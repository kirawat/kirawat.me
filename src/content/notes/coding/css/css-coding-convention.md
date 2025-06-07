---
name: "CSS Coding Convention"
dateCreated: 2025-06-07 14:45:00 +0700
---

## CSS Properties Order

Properties are grouped into logical categories, and the categories themselves are ordered in a way that flows from larger-scale concerns to smaller, more detailed ones.

A common order for these groups is often referred to as "Outside-In":

  1. **Positioning & Layout:** Properties that dictate how an element is placed on the page and how it affects other elements.
      * `position`, `top`, `right`, `bottom`, `left`, `z-index`
      * `display`, `flex`, `grid`, `float`, `clear`

  2. **Box Model:** Properties that define the dimensions and spacing of the element "box" itself.
      * `width`, `height`, `margin`, `padding`
      * `border`, `box-sizing`

  3. **Visual / Typographic:** Properties that style the content *inside* the element.
      * **Typography:** `font-family`, `font-size`, `font-weight`, `line-height`, `text-align`, `color`
      * **Visuals:** `background`, `background-color`, `box-shadow`, `opacity`, `border-radius`

  4. **Miscellaneous:** Other properties like animation, transitions, and generated content.
      * `transform`, `transition`, `animation`
      * `cursor`, `content`

Example:

```css
.my-component {
  /* 1. Positioning */
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;

  /* 2. Box Model */
  display: flex;
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;

  /* 3. Visual / Typographic */
  color: #333;
  background-color: #f5f5f5;
  font-family: Arial, sans-serif;
  font-size: 16px;
  text-align: center;

  /* 4. Miscellaneous */
  transition: background-color 0.3s ease;
}
```

It's logical and helps you visualize the element's structure from its placement down to its text. When you put it all together, you get a clean, readable, and highly professional CSS rule:

1. **Positioning:** How is the element placed? (`position`, `top`, `z-index`)
2. **Box Model:** What are its dimensions and spacing? (`display`, `width`, `margin`, `padding`, `border`)
3. **Visual / Typographic:** What does it and its content look like? (`color`, `font-size`, `background`, `box-shadow`)

#### Positioning Properties Order

1. `position`: This is property defines the entire positioning context for the element (e.g., `static`, `relative`, `absolute`, `fixed`, `sticky`). All the other properties below depend on this one being set to something other than `static`.

2. `top`, `right`, `bottom`, `left`: These "offset" properties specify the element's exact location within its positioning context. It's logical to group them together right after `position`.

3. `inset`: This is a modern shorthand property for `top`, `right`, `bottom`, `left`. If you use it, it should replace the individual offset properties.

4. `z-index`: This property controls the element's stacking order (which element appears in front of or behind another). Since it only matters once an element is positioned, it logically comes last.

#### Box Model Properties Order

Box Model properties follows the "Outside-In" principle. You start with properties that affect things *outside* the element (like its display type and margins) and move progressively inward to properties that affect the element's core content.

1. `display`: This property is dictates how the element generates a box in the first place (e.g., `block`, `inline`, `flex`, `grid`, `none`). It should come first as it defines the context for all other box model properties.

2. **Flexbox / Grid Layout:** If `display` is `flex` or `grid`, the container's layout properties should come next, as they define how the *children* of the current box are arranged.
    * `flex-direction`, `justigy-content`, `align-items`, `gap`, etc.

3. `box-sizing`: This property defines whether `padding` and `border` are included *inside* or *outside* the element's `width` and `height`. Placing it high up makes it clear how the dimensions are being calculated. `border-box` is the modern standard.

4. `width`, `height`: The dimensions of the box. This includes related properties like `min-width`, `max-width`, `min-height`, `max-height`, and `aspect-ratio`.

5. `margin`: The space outside the border. This is the outermost layer of the box itself.

6. `border`: The line that sits between the `margin` and `padding`.

7. `padding`: The space inside the border, surrounding the content. This is the innermost layer of the box.

8. `overflow`: This property determines what happens to content that doesn't fit within the box's defined dimensions. Since it deals with the content *inside* the padding, it logically comes last.

#### Visual / Typographic Properties Order

This group is split into two main sub-groups: Typography first, then Visuals.

##### Typography

This follows a logical flow from the most fundamental text properties to more specific styling and spacing adjustments.

1. `color`: The color of the text. It's a primary property and ofen one of the first things you want to define.

2. `font-family`: The typeface being used.

3. `font-size`: The size of the text.

4. `line-height`: The space between lines of text. This is crucial for readability and comes right after `font-size` as they are closely related.

5. `font-weight`: The thickness of the text (`normal`, `bold`).

6. `font-style`: `italic` or `normal`.

7. `text-align`, `text-decoration`, `text-transform`: Properties that align, decorate (e.g., `underline`), or change the case (`uppercase`) of the text.

8. Spacing & Wrapping: `letter-spacing`, `word-spacing`, `white-space`, `word-break`. These are fine-tuning adjustments that come last.

> [!NOTE]
> The shorthand `font` property combines many of these. If you use it, it should come first in the typography block, replacing the individual properties it sets.

##### Visuals & Effects

These properties style the box itself and add effects or animations.

1. `background`: The background color, image, or gradient. This is the base layer of the element's appearance. It includes all longhand properties like `background-color`, `background-image`, `background-position`, etc.

2. `border-radius`: This should come after `border` (in the Box Model group) and `background` as it modifies the corners of the box's visible shape.

3. Effects: Properties that add depth or visual effects.
    * `box-shadow`, `text-shadow`
    * `opacity`
    * `filter`

4. Animations & Transitions: Properties that control dynamic changes.
    * `transform`
    * `transition`
    * `animation`

5. Interactivity & Miscellaneous:
    * `cursor`: Provides a visual cue for interactive elements.
    * `user-select`, `pointer-events`: Other user-interaction properties.