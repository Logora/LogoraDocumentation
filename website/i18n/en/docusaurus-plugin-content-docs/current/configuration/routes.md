---
id: routes
title: URL paths
---

The debate space includes several pages that are accessible on your site via different URLs. If you are using the [Javascript installation](installation/javascript-sdk.md), these URLs must point to the page on your website where the debate space is inserted. If you use our [Wordpress plugin](installation/wordpress.md), the routes are handled automatically.

### Debate space prefix path

Debate space routes are prefixed by the prefix parameter defined in the admin area on the *Configuration > Customization > URL Paths* tab. This prefix allows you to have the same root path for all pages in the debate space. By default, the prefix is *'debate-space'*.

### Debate Space Pages

Here are the different Debate Space pages with their links and settings:

- **Home page** => :prefix_path/:index_path  
   	*:prefix_path* : the prefix defined in the parameters (default: 'debate-space')  
  	 *:index_path* : path of the home page (default: 'debates')
   
- **Debate page** => :prefix_path/:debate_path/:debate_label  
	*:prefix_path* : the prefix defined in the parameters (default: 'debate-space')  
	*:debate_path* : path to the debate page (default: 'debat')  
	*:debate_label* : text identifier of the debate, example: "should we trust robots".
	
- **User profile page** => :prefix_path/:user_path/:user_label  
	*:prefix_path* : the prefix defined in the parameters (default: 'debate-space')  
	*:user_path* : path of the user page (default: 'user')  
	*:user_label* : text identifier of the user, example: "jean-dupont

- **Modification of the user profile** => :prefix_path/:user_path/edit  
	*:prefix_path* : the prefix defined in the parameters (default: 'debate-space')  
	*:user_path* : path of the user page (default: 'user')  
	
	
- **Search page** => :prefix_path/:search_path  
	*:prefix_path* : the prefix defined in the parameters (default: 'debate-space')  
	*:search_path* : path of the search page (default: 'search')

#### Example

With the default settings, the home page of the debate space is accessible through the link: https://yourwebsite.com/espace-debat/debats.

The names of these paths can be set in the administration space in the tab *Configuration > Customization > URL paths*.
