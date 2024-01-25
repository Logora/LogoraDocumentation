---
id: homepage
title: Homepage module
---

Logora provides you with a module presenting a debate to be integrated on your home page. By default, the module will automatically update with your last created debate. You can also choose to pin a debate from your administration space, this will replace the default behavior of the module (you can unpin the debate at any time and return to the default behavior or pin another debate of your choice).

A mobile format example : 

<img src="/img/widget_instance.png" alt="Home widget" width="200"/>

#### Installation

Insert the Javascript code of the home page module where you want the module to appear. This is an example of Javascript code that loads and displays the module.

The **logora_embed** container is where the module is loaded.

Standard code to copy/paste and complete:

```html
<div class="logora_embed" data-object-id="logora_config"></div>
<script>
    // Configuration parameters
    var logora_config = {
        shortname: "NOM_APPLICATION", // Application name 
        resource: {
            id: "vote", // Non-variable parameters
            name: "vote" // Non-variable parameters
        }
    };

    (function() {
        var d = document, s = d.createElement('script');
        s.src = 'https://cdn.logora.com/embed.js';
        (d.head || d.body).appendChild(s);
    })();
</script>
```

Once you have installed the code, let the Logora team (contact@logora.fr) know so that they can activate the possibility of pinning a debate from your administration space. 
