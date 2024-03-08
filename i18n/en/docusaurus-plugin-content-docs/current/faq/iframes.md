---
id: iframes
title: iframes
description: Dynamically resize Logora iframes.
---

If you wish to use Logora's iframes in your articles and dynamically resize them according to the content size of the iframe, you can use an external script that utilizes the npm package [iframe-resizer](https://www.npmjs.com/package/iframe-resizer). Simply add a script that loads the minified code enabling resizing and call the corresponding function.

#### Insert the minified resizing code and call the function.

```html
 <head>
    <!-- Load the minified code -->
    <script src="https://cdn.jsdelivr.net/npm/iframe-resizer@4.3.5/js/iframeResizer.min.js"></script>
  </head>
  <!-- Logora iframe available in the admin space -->
<iframe class="logoraIframe" style="border: 0;" src="https://cdn.logora.com/embed.html?shortname=test&id=1111&resource=group" width="100%" height="285"></iframe>
<script>
    iFrameResize( [{}], ".logoraIframe");
</script>