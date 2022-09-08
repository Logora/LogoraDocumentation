---
id: homepage
title: Homepage module
---

Logora provides you with a module presenting the latest debate created to integrate on your home page. It automatically updates with your latest debate.

#### Installation

Insert the Javascript code of the home page module where you want the module to appear. This is an example of Javascript code that loads and displays the last created debate module.

The **logora_embed** container is where the module is loaded.

Standard code to copy/paste and complete:

```html
<div class="logora_embed" data-object-id="logora_config"></div>
<script>
    // Configuration parameters
    var logora_config = {
        shortname: "NOM_APPLICATION", // Application name 
        resource: {
            id: "vote_embed", // Non-variable parameters
            name: "vote_embed" // Non-variable parameters
        }
    };

    (function() {
        var d = document, s = d.createElement('script');
        s.src = 'https://api.logora.fr/embed.js';
        (d.head || d.body).appendChild(s);
    })();
</script>
```

