---
name: "SCSS"
dateCreated: 2025-06-05 16:31:00 +0700
---

## Comment

### Comment Types

| Syntax       | Name                                             | Purpose                                                              |
| ------------ | ------------------------------------------------ | -------------------------------------------------------------------- |
| `// ...`     | [Slient Comment](#single-line-silent-comment)    | For developer notes. **Removed** by the Sass compiler.               |
| `/* ... */`  | [Standard CSS Comment](#multi-line-loud-comment) | Preserved by Sass, but **removed** by most production minifiers.     |
| `/** ... */` | DocBlock Comment                                 | For **SassDoc**. Treated like `/* */` by Sass and minifiers.         |
| `/*! ... */` | Important Comment                                | **Preserved by Sass and minifiers.** For licenses and legal notices. |

### Single-line "Silent" Comment

This comment style was introduced by Sass. It is "silent" because it is completely removed during compilation and will not appear in the final CSS file.

**Use this for:**

* Developer-only notes and reminders.
* Explaining complex logic within your Sass files.
* Temporarily "commenting out" a line of code for debugging.

**Sass (`.scss`) Example:**

```scss
// Brand color palette.
// TODO: Get final confirmation on the primary color from the design team.
$primary-color: #3498db;

.widget {
  // Use the primary brand color for the background.
  background-color: $primary-color;
  // border-bottom: 2px solid $primary-color; // Temporariy disabled this rule.
}
```

**Compiled CSS Output:**

```css
.widget {
  background-color: #3498db;
}
```

**Recommendation:** Use `//` for your everyday comments within Sass files. Use `/* */` only when you have a specific reason for the comment to be included in the final CSS output.

### Multi-line "Loud" Comment

You can use multi-line comment (`/* ... */`) in Sass. This is the standard CSS comment. Sass preserves this comment and includes it in the final compiled CSS file. It's called a "loud" comment because it "survives" compilation.

**Sass (`.scss`) Example:**

```scss
/*
 * Card Component
 *
 * This block defines the best styles for all card elements.
 * It's intended to be a flexible and reusable compoent.
 */
 .card {
  border: 1px solid #ccc; /* Sets a simple border. */
  padding: 1rem;
 }
```

**Compiled CSS Output:**

```css
/*
 * Card Component
 *
 * This block defines the best styles for all card elements.
 * It's intended to be a flexible and reusable compoent.
 */
 .card {
  border: 1px solid #ccc; /* Sets a simple border. */
  padding: 1rem;
 }
```

While Sass preserves these comments, CSS minifiers in a production build process might still remove them unless they are marked as important with a `/*!`.

```scss
/*!
 * Card Component
 *
 * This block defines the best styles for all card elements.
 * It's intended to be a flexible and reusable compoent.
 */
 .card {
  border: 1px solid #ccc; /*! Sets a simple border. */
  padding: 1rem;
 }
```

### Documentation Generator Tools Comment

From the perspective of the Sass compiler itself, there is no difference between `/** ... */` and a standard `/* ... */`. Both are treated as [multi-line "loud" comments](#multi-line-loud-comment) that are preserved and included in the final compiled CSS file.

However, The `/** ... */` is conventional for documentation generator tools (e.g., SassDoc). It tells the tool listening for it that this is a formal documentation block, not just a simple comment.

SassDoc is a popular tool that reads your Sass files and parses these special comment blocks to automatically generate a browsable documentation website for your project's tyles, variables, and functions—often called a style guide.

**Example with SassDoc Annotations**

```scss
/**
 * Creates a visually appealing button with customizable colors.
 *
 * @param {Color} $background-color [default: #3498db] - The background color of the button.
 * @param {Color} $text-color [default: white] - The text color of the button.
 * @param {Number} $padding [default: 0.5em 1em] - The internal padding of the button.
 *
 * @example
 * .my-custom-button {
 *   @include button(#e74c3c, white);
 * }
 *
 * @group mixins
 */
@mixin button($background-color: #3498db, $text-color: white, $padding: 0.5em 1em) {
  display: inline-block;
  padding: $padding;
  background-color: $background-color;
  color: $text-color;
  border: none;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  font-family: sans-serif;
}
```

When you run SassDoc on this file, it will parse the `/** ... */` block and generate a documentation page for the `button` mixin, detailing its purpose, parameters (`@oaram`), and even showing a rendered code example (`@example`).

## Color Palette Generation

```scss
// Define the start (base) and end colors for your palette generation.
$palette-base-color: #000000;
$palette-end-color: #ffffff;

// This block will generate CSS custom properties for a color palette.
// This palette transitions from `$palette-base-color` to `$palette-end-color`.
:root {
  @for $step from 0 to 10 {
    // Calculate the percentage weight for the `mix()` function.
    $mix-percentage: $step * 10%;

    // Determine the name for the CSS custom property based on the current step.
    $variable-name: '';
    @if $step < 10 {
      // For steps 0 through 9, names are `--shade-0`, `--shade-100`, ..., `--shade-900`.
      $variable-name: --shade-#{$step * 100};
    }
    @else {
      // For the final step, the name is `--share-999`.
      $variable-name: --shade-999;
    }

    // Define the CSS custom property.
    #{$variable-name}: #{mix($palette-base-color, $palette-end-color, $mix-percentage)};
  }
}
```

Resulting CSS (with base: `#000000`, end `#ffffff`):

```css
:root {
  --shade-0: #000000;
  --shade-100: #1a1a1a;
  --shade-200: #333333;
  --shade-300: #4d4d4d;
  --shade-400: #666666;
  --shade-500: #808080;
  --shade-600: #999999;
  --shade-700: #b3b3b3;
  --shade-800: #cccccc;
  --shade-900: #e6e6e6;
  --shade-999: #ffffff;
}
```

## `mix()`

The `mix($color1, $color2, $weight)` function in Sass is used to blend two colors together. It produces a new color that is an intermediate shade between the two input colors.

**Arguments:**

  * `$color1`: The first color to be mixed.
  * `$color2`: The second color to be mixed.
  * `$weight` (optional): This is a percentage value (from 0% to 100%) that determines the proportion of the second color (`$color2`) in the resulting mix.
    * If `$weight` is not provided, it defaults to `50%`, meaning an even blend of both colors.

**Example:**

  * `mix(black, white, 0%)` results in `black` (`#000000`).
  * `mix(black, white, 10%)` results in a very dark gray (`#1a1a1a`).
  * `mix(black, white, 50%)` results in a medium gray (`#808080`).
  * `mix(black, white, 100%)` results in `white` (`#ffffff`).
  * `mix(blue, yellow, 50%)` would result in `green`.