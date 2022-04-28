---
id: javascript-sdk
title: Javascript installation
description: Install Logora with our universal Javascript code.
---

Logora can be installed on any site by inserting the native JavaScript code. This documentation is intended for developers. Logora also offers a custom documentation for the [Wordpress installation](installation/wordpress).

The JavaScript installation is done in two steps:
1. Insert the debate space
2. Insert the debate summary on your pages
	 
### Before starting 

- Register your site on Logora by signing up : [Register](https://logora.fr/signup)
- Get your **shortname** available on your [administration space](https://admin.logora.fr) in the following tab: *Configuration > General*.
- Authorize the domains on which you want to install Logora. To do this, go to your administration space in the following tab: *Configuration > General > Security > Authorized domains*.

For example, if the code is inserted on the page at the URL https://example.com/article/example-article, add the domain https://example.com (warning: do not put a slash at the end). Example: http://localhost:3000 , http://sous-domaine.exemple.com. Important: adding domains on the administration space works like adding a tag, don't forget to press "enter" when inserting your URLs.

### 1. Install the debate space

The debate space is the main platform where your users will be able to participate in debates. The debate space is inserted on a dedicated page on your site. 

Let's take the example of a website available at https://yourwebsite.com. The website editor would like to access the debate space via the address https://yourwebsite.com/debate-space. Here are the steps to follow to insert the debate space :

#### 1.1. Add a page to insert the debate space

Create a dedicated page where the debate space will be inserted. This page is available at https://yourwebsite.com/debate-space. The prefix 'debate-space' is the default prefix. It can be changed in the administration area.

#### 1.2. Inserting the JavaScript code and your configuration variables

Insert the following scripts and the **logora_app** container in your page. 

The **logora_app** container is where the debate space is displayed.

Standard code to copy/paste and complete: 

```html
<!-- Scripts to load in the <head> section, as high as possible in the page -->
<script>
    // Configuration variables, the application name is available in your administration panel
    var logora_config = {
        shortname: "APPLICATION_NAME"
    };
</script>
<script src="https://api.logora.fr/debat.js"></script>

<!-- Container where the debate space will be displayed -->
<div id="logora_app"></div>

```

#### 1.3. URL rewriting for debate space routes

This step allows users to access the debate space directly from their browser. 
For example, if they wish to access their profile directly via the https://www.yourwebsite.com/debate-space/user/your-profile url, without rewriting the urls, they will be redirected to an error page. 

The rewriting of urls also allows the Logora team to directly add new modules on new urls of your site without asking you to intervene. 

Use URL rewriting on your platform or CMS to make paths starting with 'debate-space/' (or whatever prefix you choose) point to the page where the debate space is inserted.

Go to https://yourwebsite.com/debate-space/debates. You are on the Debate Space home page!

To change the prefix and the URL paths of the debate space pages, go to [the URL paths configuration](configuration/routes.md).

### 2. Install the debate synthesis

Insert the Javascript code of the summary where you want the summary of the debate to appear, on the article footer. This is an example of Javascript code that loads and displays the debate summary linked to your article. It must be inserted on all your article pages. This code will not display anything until you have associated a debate with the page.

> If you have high performance constraints and want to index the debate pages on search engines, it is necessary to insert the server side synthesis. If you prefer to insert the server-side summary, go to the [server-side installation] page (installation/api.md).

#### 2.1 Insert the JavaScript code and your configuration variables

> If you want to use the widget, use the widget.js link displayed in the sample Javascript code below. 

The **logora_synthese** container is the place where the synthesis is loaded.

Standard code to copy/paste and complete :

```html
<div class="logora_synthese" data-object-id="logora_config"></div>
<script>
    // Configuration variables
    var logora_config = {
        shortname: "SHORTNAME", // Shortname available in your administration space
        debate: {
            identifier: "PAGE_IDENTIFIER" // Unique identifier of the page
        }
    };

    (function() {
        var d = document, s = d.createElement('script');
        s.src = 'https://api.logora.fr/synthese.js'; // 'https://api.logora.fr/widget.js' for the widget
        (d.head || d.body).appendChild(s);
    })();
</script>
```

**debate.identifier (required)** : unique identifier linked to the page. This identifier must be unique for each page where the synthesis is inserted. It will allow you to retrieve the debate corresponding to the page. For example, the identifier can be the ID in your database of the article on the page, or a unique slug ('example-identifier').

The debate linked to the page must then be created in the administration area > create a debate, by providing the debate.identifier or by selecting the article concerned in the list of last retrieved articles. 

All you have to do now is implement a unique sign-on and customize Logora to launch your first debate. 

#### 2.2 Sending metadata manually

Logora fetch metadatas from your articles automatically by default:
- via the html tag _meta_
- via the script _json_ld_

If you wish, you can send those metadatas manually from the configurations variables:

Here is an exemple of metadatas being sent from configuration variables:

```javascript
    // Configuration variables
    var logora_config = {
	shortname: "APP_NAME", // Application name from admin panel
	debate: {
	    identifier: "PAGE_IDENTIFIER" // Page unique identifier
	},
	source: {
	    "source_url": "https://yoursite.com/article", // canonical URL
	    "uid": "a3f4e033-9e13-4abb-be11-2d87a2294013", // Page unique identifier
	    "title": "Article title", // Article title
	    "description": "Page description", // Page description
	    "origin_image_url": "https://image.com/image.png", // Image URL
	    "published_date": "2020-12-01T12:00:00+01:00", // Article date of publishing (format ISO_8601)
	    "publisher": "My website", // Website's name
	    "tag_objects": [  // Article tags (array of objects)
		{ 
		  "name": "politics",  // Tag name
		  "uid": "politics-001" // Tag unique identifier. Can be omitted if name is already unique
		}, 
		{ 
		  "name": "health", 
		  "uid": "health-003" 
		},
	    ]
	}
    };
```

Every metadata that you send manually is optional, the missing ones will be fetched automatically.
