---
name: "SCSS"
dateCreated: 2025-06-05 16:31:00 +0700
---

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