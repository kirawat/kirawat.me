---
name: "7-1 File Structure Pattern for Sass"
dateCreated: 2025-06-05 19:03:00 +0700
---

The basic idea is to have **7 different folders** for your partial SCSS files and **1 main SCSS file** (usually `main.scss` or `style.scss`) in the root of your Sass directory to import them all.

Here's a way to categorize your SCSS files:

```
sass/
|
|- abstracts/ (or utils/)
|   |- _variables.scss     // Variables, functions, mixins, placeholders
|   |- _functions.scss
|   |- _mixins.scss
|   |- _placeholders.scss
|
|- base/
|   |- _reset.scss         // Reset/normalize
|   |- _typography.scss    // Typography rules
|   |- _base.scss          // Basic element styling (body, html, etc.)
|   |- _utilities.scss     // Utility classes (e.g., `.text-center`)
|
|- components/
|   |- _buttons.scss
|   |- _cards.scss
|   |- _forms.scss
|   |- _navigation.scss
|   ...etc.
|
|- layout/
|   |- _grid.scss
|   |- _header.scss
|   |- _footer.scss
|   |- _sidebar.scss
|   |- _navigation.scss    // Structural navigation if different from component
|
|- pages/
|   |- _home.scss
|   |- _about.scss
|   |- _contact.scss
|   ...etc.
|
|- themes/
|   |- _default.scss
|   |- _dark.scss
|   |- _admin.scss
|   ...etc.
|
|- vendors/
|   |- _bootstrap.scss    // For third-party CSS
|   |- _jquery-ui.scss
|
`- main.scss              // Main file to import all partials
```

## Explanation of Categories

* `abstracts/` (or `utils/`): This folder contains all your Sass tools and helpers. Things like variables, functions, mixins, and placeholder selectors. These files don't output any CSS on their own.

* `base/`: Holds the boilderplate code for your project. This includes resets (like `normalize.scss`), typographic rules, and styles for base HTML elements (like `body`, `p`, `a`, etc.).

* `components/`: This is where you put the styles for smaller, reusable parts of your site like buttons, cards, form elements, navigation items, etc. Each component gets its own `.scss` file.

* `layout/`: Contains styles for the major structural parts of your site, such as the header, footer, navigation bar, sidebar, and grid systems.

* `pages/`: If you have styles that are specific to a single page, they go here. For example, styles unique to the homepage would be in `_home.scss`.

* `themes/`: If your site has different themes (e.g., a light and dark mode, or different themes for different sections), you can store those theme-specific styles here.

* `vendors/`: For CSS from external libraries and frameworks (e.g., Bootstrap, jQuery UI, FontAwesome). Sometimes, you might directly link their CSS, but if you need to override or integrate them with Sass, this is the place.

## Main SCSS File (`main.scss`)

Your `main.scss` (or `style.scss`, `app.scss`) file is where you import all the partials in the correct order. Sass files starting with an underscore (`_`) are called partials and are not compiled into separate CSS files. They are meant to be imported.

```scss
// main.scss

// 1. Abstracts (or Utils)
@use 'abstracts/variables';
@use 'abstracts/functions';
@use 'abstracts/mixins';
@use 'abstracts/placeholders';

// 2. Vendors
@use 'vendors/bootstrap';

// 3. Base
@use 'base/reset';
@use 'base/typography';
@use 'base/base';
@use 'base/utilities';

// 4. Layout
@use 'layout/grid';
@use 'layout/header';
@use 'layout/footer';
// ... more layout files.

// 5. Components
@use 'components/buttons';
@use 'components/cards';
@use 'components/forms';
// ... more component files.

// 6. Pages
@use 'pages/home';
@use 'pages/about';
// ... more page-specific files.

// 7. Themes
@use 'themes/default';
@use 'themes/dark';
```

## Examples of Partial Files

`abstract/_variables.scss`:

```scss
$primary-color: #007bff;
$secondary-color: #6c757d;
$font-family-base: 'Helvetica Neue', Arial, sans-serif;
$space-unit: 8px;
```

`base/_typography.scss`:

```scss
body {
  font-family: $font-family-base;
  line-height: 1.6;
  color: #333;
}

h1, h2, h3 {
  margin-bottom: calc($spacing-unit * 2);
}
```

`components/_buttons.scss`:

```scss
.button {
  padding: calc($spacing-unit * 1.5) calc($spacing-unit * 3);
  background-color: $primary-color;
  color: white;
  border: none;
  border-radius: calc($spacing-unit / 2);
  cursor: pointer;
  text-decoration: none;
  display: inline-block;

  &:hover {
    background-color: darken($primary-color, 10%);
  }
}

.button-secondary {
  @extend .button;
  background-color: $secondary-color;

  &:hover {
    background-color: darken($secondary-color, 10%);
  }
}
```