---
id: module-commentaires
title: Comments Module
description: Install comments at the bottom of your articles using our JavaScript code.
---

The integration described below allows you to load and display the Logora Comments module using JavaScript.

This block is usually inserted after the article content, but it can also be placed within the article if required by your technical constraints.

This code must be added to all article pages where you want to enable comments.

#### Insert the JavaScript code and configuration variables

The **logora_comments** container corresponds to the location where the comments module will be displayed.

Standard code to copy, paste, and complete:

```javascript
<div class="logora_comments" data-object-id="logora_config"></div>
<script>
    // Configuration variables
    var logora_config = {
        shortname: "APPLICATION_NAME", // Application name available in your admin panel
        resource: {
            id: "PAGE_IDENTIFIER", // Unique page identifier
            name: "comments"
        }
    };

    (function() {
        var d = document, s = d.createElement('script');
        s.src = 'https://cdn.logora.com/comments.js';
        (d.head || d.body).appendChild(s);
    })();
</script>

#### Configuration variables


- **shortname**  
  Name of the Logora application associated with your site.  
  This value is available in your Logora administration panel  
  (_Configuration > General_).

- **resource.name**  
  Type of resource displayed.  
  This value must be set to `comments`.

- **resource.id**  
  Unique and stable identifier for the article.  
  It allows comments to be correctly associated with the corresponding content.

