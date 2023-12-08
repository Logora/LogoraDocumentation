---
id: comments
title: Comments
description: Install comments on your articles thanks to our Javascript code.
---

In case you want to insert the comments and the debate summary on the same page, you can use this Javascript insertion method to embed the comments independently of the debate summary. If you want to embed either the summary or the comments on your article, use Javascript installation [/installation/javascript-sdk](installation/javascript-sdk) and enable comments in your admin area configuration. Comments will be displayed if the article is not associated with a debate.

#### Inserting the JavaScript code and your configuration variables

The **logora_embed** container is where the comments are displayed.

Standard code to copy/paste and complete: 

```html
<div class="logora_embed" data-object-id="logora_config"></div>
<script>
    // Variables de configuration
    var logora_config = {
        shortname: "APPLICATION_NAME", // Application name available on your admin space.
        resource: { id: "ARTICLE ID", name: "comments" } // Article informations.
    };

    (function() {
        var d = document, s = d.createElement('script');
        s.src = 'https://cdn.logora.com/comments.js';
        (d.head || d.body).appendChild(s);
    })();
</script>
```

**resource.id (required)** : unique article identifier available in your admin space.
**resource.name (required)** : "comments", not variable.