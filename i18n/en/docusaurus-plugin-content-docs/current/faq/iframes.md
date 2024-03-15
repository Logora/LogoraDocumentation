---
id: iframes
title: Resizing iframes
description: Dynamically resize Logora iframes.
---

If you wish to use Logora's iframes in your articles and dynamically resize them according to the content size of the iframe, you can use an external script that utilizes the npm package [iframe-resizer](https://www.npmjs.com/package/iframe-resizer). 

You need to add a script that loads the minified code enabling resizing and call the corresponding function. 

This is done in 3 steps: 1) insert the code in the head of your page, 2) insert the script code in the body of your page, 3) insert the iframe as usual. 

#### Insert the minified resizing code and call the function.

```html
 <head>
    <!-- Load the minified code -->
    <script src="https://cdn.jsdelivr.net/npm/iframe-resizer@4.3.5/js/iframeResizer.min.js"></script>
  </head>
  <!-- Logora iframe available in the admin space -->
<iframe class="logoraIframe" style="border: 0;" src="https://cdn.logora.com/embed.html?shortname=demo&id=14593&resource=group" width="100%" height="285"></iframe>
<script>
    iFrameResize( [{}], ".logoraIframe");
</script>
