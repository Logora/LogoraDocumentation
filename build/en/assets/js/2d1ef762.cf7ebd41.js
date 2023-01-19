"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[647],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(a),h=i,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||r;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},8467:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),o=["components"],s={id:"javascript-sdk",title:"Javascript installation",description:"Install Logora with our universal Javascript code."},l=void 0,p={unversionedId:"installation/javascript-sdk",id:"installation/javascript-sdk",title:"Javascript installation",description:"Install Logora with our universal Javascript code.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/installation/javascript-sdk.md",sourceDirName:"installation",slug:"/installation/javascript-sdk",permalink:"/en/installation/javascript-sdk",draft:!1,tags:[],version:"current",frontMatter:{id:"javascript-sdk",title:"Javascript installation",description:"Install Logora with our universal Javascript code."},sidebar:"docs",previous:{title:"Quickstart",permalink:"/en/"},next:{title:"Wordpress installation",permalink:"/en/installation/wordpress"}},d={},c=[{value:"Before starting",id:"before-starting",level:3},{value:"1. Install the debate space",id:"1-install-the-debate-space",level:3},{value:"1.1. Add a page to insert the debate space",id:"11-add-a-page-to-insert-the-debate-space",level:4},{value:"1.2. Inserting the JavaScript code and your configuration variables",id:"12-inserting-the-javascript-code-and-your-configuration-variables",level:4},{value:"1.3. URL rewriting for debate space routes",id:"13-url-rewriting-for-debate-space-routes",level:4},{value:"2. Install the debate synthesis",id:"2-install-the-debate-synthesis",level:3},{value:"2.1 Insert the JavaScript code and your configuration variables",id:"21-insert-the-javascript-code-and-your-configuration-variables",level:4},{value:"2.2 Sending metadata manually",id:"22-sending-metadata-manually",level:4}],u={toc:c};function h(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Logora can be installed on any site by inserting the native JavaScript code. This documentation is intended for developers. Logora also offers a custom documentation for the ",(0,r.kt)("a",{parentName:"p",href:"installation/wordpress"},"Wordpress installation"),"."),(0,r.kt)("p",null,"The JavaScript installation is done in two steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Insert the debate space"),(0,r.kt)("li",{parentName:"ol"},"Insert the debate summary on your pages\n")),(0,r.kt)("h3",{id:"before-starting"},"Before starting"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Register your site on Logora by signing up : ",(0,r.kt)("a",{parentName:"li",href:"https://logora.fr/signup"},"Register")),(0,r.kt)("li",{parentName:"ul"},"Get your ",(0,r.kt)("strong",{parentName:"li"},"shortname")," available on your ",(0,r.kt)("a",{parentName:"li",href:"https://admin.logora.fr"},"administration space")," in the following tab: ",(0,r.kt)("em",{parentName:"li"},"Configuration > General"),"."),(0,r.kt)("li",{parentName:"ul"},"Authorize the domains on which you want to install Logora. To do this, go to your administration space in the following tab: ",(0,r.kt)("em",{parentName:"li"},"Configuration > General > Security > Authorized domains"),".")),(0,r.kt)("p",null,"For example, if the code is inserted on the page at the URL ",(0,r.kt)("a",{parentName:"p",href:"https://example.com/article/example-article"},"https://example.com/article/example-article"),", add the domain ",(0,r.kt)("a",{parentName:"p",href:"https://example.com"},"https://example.com")," (warning: do not put a slash at the end). Example: http://localhost:3000 , ",(0,r.kt)("a",{parentName:"p",href:"http://sous-domaine.exemple.com."},"http://sous-domaine.exemple.com."),' Important: adding domains on the administration space works like adding a tag, don\'t forget to press "enter" when inserting your URLs.'),(0,r.kt)("h3",{id:"1-install-the-debate-space"},"1. Install the debate space"),(0,r.kt)("p",null,"The debate space is the main platform where your users will be able to participate in debates. The debate space is inserted on a dedicated page on your site. "),(0,r.kt)("p",null,"Let's take the example of a website available at ",(0,r.kt)("a",{parentName:"p",href:"https://yourwebsite.com."},"https://yourwebsite.com.")," The website editor would like to access the debate space via the address ",(0,r.kt)("a",{parentName:"p",href:"https://yourwebsite.com/debate-space"},"https://yourwebsite.com/debate-space"),". Here are the steps to follow to insert the debate space :"),(0,r.kt)("h4",{id:"11-add-a-page-to-insert-the-debate-space"},"1.1. Add a page to insert the debate space"),(0,r.kt)("p",null,"Create a dedicated page where the debate space will be inserted. This page is available at ",(0,r.kt)("a",{parentName:"p",href:"https://yourwebsite.com/debate-space"},"https://yourwebsite.com/debate-space"),". The prefix 'debate-space' is the default prefix. It can be changed in the administration area."),(0,r.kt)("h4",{id:"12-inserting-the-javascript-code-and-your-configuration-variables"},"1.2. Inserting the JavaScript code and your configuration variables"),(0,r.kt)("p",null,"Insert the following scripts and the ",(0,r.kt)("strong",{parentName:"p"},"logora_app")," container in your page. "),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"logora_app")," container is where the debate space is displayed."),(0,r.kt)("p",null,"Standard code to copy/paste and complete: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Scripts to load in the <head> section, as high as possible in the page --\x3e\n<script>\n    // Configuration variables, the application name is available in your administration panel\n    var logora_config = {\n        shortname: "APPLICATION_NAME"\n    };\n<\/script>\n<script src="https://api.logora.fr/debat.js"><\/script>\n\n\x3c!-- Container where the debate space will be displayed --\x3e\n<div id="logora_app"></div>\n\n')),(0,r.kt)("h4",{id:"13-url-rewriting-for-debate-space-routes"},"1.3. URL rewriting for debate space routes"),(0,r.kt)("p",null,"This step allows users to access the debate space directly from their browser.\nFor example, if they wish to access their profile directly via the ",(0,r.kt)("a",{parentName:"p",href:"https://www.yourwebsite.com/debate-space/user/your-profile"},"https://www.yourwebsite.com/debate-space/user/your-profile")," url, without rewriting the urls, they will be redirected to an error page. "),(0,r.kt)("p",null,"The rewriting of urls also allows the Logora team to directly add new modules on new urls of your site without asking you to intervene. "),(0,r.kt)("p",null,"Use URL rewriting on your platform or CMS to make paths starting with 'debate-space/' (or whatever prefix you choose) point to the page where the debate space is inserted."),(0,r.kt)("p",null,"Go to ",(0,r.kt)("a",{parentName:"p",href:"https://yourwebsite.com/debate-space/debates"},"https://yourwebsite.com/debate-space/debates"),". You are on the Debate Space home page!"),(0,r.kt)("p",null,"To change the prefix and the URL paths of the debate space pages, go to ",(0,r.kt)("a",{parentName:"p",href:"/en/configuration/routes"},"the URL paths configuration"),"."),(0,r.kt)("h3",{id:"2-install-the-debate-synthesis"},"2. Install the debate synthesis"),(0,r.kt)("p",null,"Insert the Javascript code of the summary where you want the summary of the debate to appear, on the article footer. This is an example of Javascript code that loads and displays the debate summary linked to your article. It must be inserted on all your article pages. This code will not display anything until you have associated a debate with the page."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you have high performance constraints and want to index the debate pages on search engines, it is necessary to insert the server side synthesis. If you prefer to insert the server-side summary, go to the ","[server-side installation]"," page (installation/api.md).")),(0,r.kt)("h4",{id:"21-insert-the-javascript-code-and-your-configuration-variables"},"2.1 Insert the JavaScript code and your configuration variables"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you want to use the widget, use the widget.js link displayed in the sample Javascript code below. ")),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"logora_synthese")," container is the place where the synthesis is loaded."),(0,r.kt)("p",null,"Standard code to copy/paste and complete :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<div class="logora_synthese" data-object-id="logora_config"></div>\n<script>\n    // Configuration variables\n    var logora_config = {\n        shortname: "SHORTNAME", // Shortname available in your administration space\n        debate: {\n            identifier: "PAGE_IDENTIFIER" // Unique identifier of the page\n        }\n    };\n\n    (function() {\n        var d = document, s = d.createElement(\'script\');\n        s.src = \'https://api.logora.fr/synthese.js\'; // \'https://api.logora.fr/widget.js\' for the widget\n        (d.head || d.body).appendChild(s);\n    })();\n<\/script>\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"debate.identifier (required)")," : unique identifier linked to the page. This identifier must be unique for each page where the synthesis is inserted. It will allow you to retrieve the debate corresponding to the page. For example, the identifier can be the ID in your database of the article on the page, or a unique slug ('example-identifier')."),(0,r.kt)("p",null,"The debate linked to the page must then be created in the administration area > create a debate, by providing the debate.identifier or by selecting the article concerned in the list of last retrieved articles. "),(0,r.kt)("p",null,"All you have to do now is implement a unique sign-on and customize Logora to launch your first debate. "),(0,r.kt)("h4",{id:"22-sending-metadata-manually"},"2.2 Sending metadata manually"),(0,r.kt)("p",null,"Logora fetch metadatas from your articles automatically by default:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"via the html tag ",(0,r.kt)("em",{parentName:"li"},"meta")),(0,r.kt)("li",{parentName:"ul"},"via the script ",(0,r.kt)("em",{parentName:"li"},"json_ld"))),(0,r.kt)("p",null,"If you wish, you can send those metadatas manually from the configurations variables:"),(0,r.kt)("p",null,"Here is an exemple of metadatas being sent from configuration variables:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'    // Configuration variables\n    var logora_config = {\n    shortname: "APP_NAME", // Application name from admin panel\n    debate: {\n        identifier: "PAGE_IDENTIFIER" // Page unique identifier\n    },\n    source: {\n        source_url: "https://yoursite.com/article", // canonical URL\n        uid: "a3f4e033-9e13-4abb-be11-2d87a2294013", // Page unique identifier\n        title: "Article title", // Article title\n        description: "Page description", // Page description\n        origin_image_url: "https://image.com/image.png", // Image URL\n        published_date: "2020-12-01T12:00:00+01:00", // Article date of publishing (format ISO_8601)\n        publisher: "My website", // Website\'s name\n        tag_objects: [  // Article tags (array of objects)\n        { \n          name: "politics",  // Tag name\n          uid: "politics-001" // Tag unique identifier. Can be omitted if name is already unique\n        }, \n        { \n          name: "health", \n          uid: "health-003" \n        },\n        ]\n    }\n    };\n')),(0,r.kt)("p",null,"Every metadata that you send manually is optional, the missing ones will be fetched automatically."))}h.isMDXComponent=!0}}]);