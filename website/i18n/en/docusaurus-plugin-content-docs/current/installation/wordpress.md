---
id: wordpress
title: Wordpress installation
---

### Before you start 

- Register your site on Logora by signing up: [Register](https://logora.fr/en/signup)
- Get your shortname available on your [administration space](https://admin.logora.fr) in the following tab: *Configuration > General*.
- Authorize the domains on which you want to install Logora. To do this, go to your administration space in the following tab: *Configuration > General > Security > Authorized domains*. For example, if the code is inserted on the page at the URL https://example.com/article/example-article, add the domain https://example.com (warning: do not put a slash at the end). Example: http://localhost:3000 , http://sous-domaine.exemple.com.  Important: adding domains on the administration space works like adding a tag, do not forget to press "enter" when inserting your URLs.

### Installation

- Logora is available on the Wordpress catalog (https://wordpress.org/plugins/logora/). On your Wordpress interface, download the plugin via Plugins by searching "Logora". Activate the plugin after downloading it.
- Add your application name and your secret key in the Logora settings tab.

### Use

- Access your debate space on the path `/debate-space`. 
- The debate synthesis is available via the shortcode `[logora-synthese]`. Insert this shortcode into your article template so that it is present on all pages. 
