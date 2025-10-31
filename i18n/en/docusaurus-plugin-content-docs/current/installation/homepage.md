---
id: homepage
title: Homepage module
---

Logora provides you with a module presenting a debate to be integrated on your home page. By default, the module will automatically update with your last created debate. You can also choose to pin a debate from your administration space, this will replace the default behavior of the module (you can unpin the debate at any time and return to the default behavior or pin another debate of your choice).

An example on Ouest-France : 

![Ouest-France homepage](/img/ouest-france-homepage.png)

#### Installation

##### A) Install a unique module on your homepage

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

You can then choose to pin a debate from the ‘Advanced’ tab. 

![Ouest-France homepage](/img/pin-advanced.png)

This will take the form of a pin in your list of debates. 

![Pin debate](/img/pin_debate.png)

##### B) Installing a Different Homepage Module on Each Section

If you wish to install different questions on various sections, you need to install the **logora_synthese** container as described in the "Javascript Installation" article on each of the relevant section pages, by adding the following information:

```html
synthesis: {
            hideArguments: true
       }
```

The entire code looks like this:

```html
<div class="logora_synthese" data-object-id="logora_config"></div>
<script>
    // Configuration variables
    var logora_config = {
        shortname: "APPLICATION_NAME", // Application name as it appears in your administration area
        resource: {
            name: "synthesis",
            id: "PAGE_IDENTIFIER" // Unique identifier for the page
        },
        synthesis: {
            hideArguments: true
       }
    };

    (function() {
        var d = document, s = d.createElement('script');
        s.src = 'https://cdn.logora.com/synthese.js'; // 'https://cdn.logora.com/widget.js' for the widget
        (d.head || d.body).appendChild(s);
    })();
</script>
```

This will allow you to insert debate questions in the form of votes on the relevant section.
