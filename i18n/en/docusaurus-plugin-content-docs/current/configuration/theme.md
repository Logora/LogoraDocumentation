---
id: theme
title: Appearance and theme
description: Customize the appearance of your Logora contribution space.
---

Logora blends into your visual identity from the administration space via the "Configuration" tab.
You can experiment as much as you like to match your graphic guidelines.
You can revert to the default configuration at any time if needed.

### 1. Customize colors, fonts, box styles, URLs, and texts

Colors, fonts, box styles and URLs of your space can be customized from the "Configuration" > "Customization" tab.
Texts can be edited from the "Configuration" > "Texts" tab.

#### a) Colors: positions, call-to-action, and tags

All colors are available. You can change the colors of positions (for / against / neutral), call-to-action buttons (primary color), and the text and borders of tags (which categorize debates).

#### b) Fonts: type, size, and weight

Around ten fonts are available. If yours is missing, you can add it by clicking "Create". If the font you create is already loaded on your page, it will be picked up automatically by the contribution space.

The font size for titles, the default font, and smaller texts (explanations) can also be adjusted.

Text weight is also configurable.

#### c) Box styles: borders, shadows, and radius

You can modify all box visuals by adjusting the appearance of borders, their shadows, and their radius (more or less rounded).

#### d) Texts: change wording

Most texts in the debate space ("Follow the debate", "All debates", etc.) can be edited from the "Texts" tab. If a text you want to modify is missing, please let us know so we can add it to your space.
You can for example modify all the texts displayed in the synthesis, i.e. within the footer article block.

### 2. Customize using CSS variables

All visual values of the contribution space are exposed as CSS variables, which allows you to override them directly from your page without going through the administration.

Simply add a `<style>` block to your page targeting the `#logoraRoot` element:

```html
<style>
  #logoraRoot {
    /* Position colors */
    --for-primary-color: #cc6a6d;
    --against-primary-color: #7980bb;
    --third-position-color-primary: #9b9b9b;
    --call-primary-color: #434343;
    --source-primary: #4485C3;
    --success-primary: #4d9e33;
    --cancel-primary: #c73c49;
    --connected-green: #80d764;
    --announcement-primary: #cce5ff;
    --announcement-text-primary: #004085;

    /* Backgrounds */
    --background-color-container: white;
    --background-color-primary: white;
    --background-color-secondary: #E8E8E8;

    /* Text */
    --text-primary: #222222;
    --text-secondary: #5F5F5F;
    --text-tertiary: #fafafa;
    --text-light: white;
    --darken-text-tertiary: #F1EFED;
    --darkest-text-tertiary: #c7c7c7;

    /* Boxes */
    --box-shadow: 0px 2px 5px rgba(7, 42, 68, 0.1);
    --box-shadow-main-container: 0px 2px 5px rgba(7, 42, 68, 0.1);
    --box-border: 1px solid rgba(7, 42, 68, 0.1);
    --box-border-main-container: 1px solid rgba(7, 42, 68, 0.1);
    --box-border-radius: 6px;

    /* Buttons */
    --button-shadow: 0px 2px 5px rgba(7, 42, 68, 0.1);
    --button-border: 1px solid rgba(7, 42, 68, 0.1);
    --button-border-radius: 6px;

    /* Typography */
    --font-family: 'Montserrat';
    --title-font-family: 'Montserrat';
    --box-title-font-family: 'Montserrat';
    --font-size-extra-large: 22px;
    --font-size-large: 20px;
    --font-size-medium: 18px;
    --font-size-normal: 16px;
    --font-size-small: 16px;
    --font-size-extra-small: 14px;
    --font-weight-normal: 400;
    --font-weight-bold: 700;

    /* Line height */
    --line-height-none: 1em;
    --line-height-tight: 1.08em;
    --line-height-normal: 1.26em;
    --line-height-loose: 1.38em;

    /* Tags */
    --tag-border-color: #434343;
    --tag-text-color: #434343;
    --tag-text-color-active: white;

    /* Layout */
    --layout-horizontal-margin: 0;

    /* Modal */
    --modal-margin-top: 0.5em;
    --modal-margin-bottom: 0.5em;

    /* Images */
    --img-aspect-ratio: 16/9;
  }
</style>
```
