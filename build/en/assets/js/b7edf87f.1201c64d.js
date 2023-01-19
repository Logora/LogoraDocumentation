"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[109],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,f=c["".concat(p,".").concat(d)]||c[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2026:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"amp-sdk",title:"Google AMP SDK",description:"Insert Logora on your Google AMP pages"},p=void 0,s={unversionedId:"installation/amp-sdk",id:"installation/amp-sdk",title:"Google AMP SDK",description:"Insert Logora on your Google AMP pages",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/installation/amp-sdk.md",sourceDirName:"installation",slug:"/installation/amp-sdk",permalink:"/en/installation/amp-sdk",draft:!1,tags:[],version:"current",frontMatter:{id:"amp-sdk",title:"Google AMP SDK",description:"Insert Logora on your Google AMP pages"},sidebar:"docs",previous:{title:"Server side API",permalink:"/en/installation/server-side-sdk"},next:{title:"Android SDK",permalink:"/en/installation/android-sdk"}},m={},c=[{value:"URL scheme",id:"url-scheme",level:4},{value:"Insertion",id:"insertion",level:4}],u={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Google AMP SDK integration allows you to display the debate summary in your AMP pages."),(0,o.kt)("p",null,"To do this, use the ",(0,o.kt)("a",{parentName:"p",href:"https://amp.dev/documentation/components/amp-iframe"},(0,o.kt)("em",{parentName:"a"},"amp-iframe"))," component using the link format defined below."),(0,o.kt)("h4",{id:"url-scheme"},"URL scheme"),(0,o.kt)("p",null,"Base URL:\n",(0,o.kt)("inlineCode",{parentName:"p"},"https://api.logora.fr/synthese-amp.html")),(0,o.kt)("p",null,"Dynamic parameters that must be specified in the URL:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"shortname")," : name of your application"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"id")," : unique page identifier")),(0,o.kt)("p",null,"Example URL :\n",(0,o.kt)("inlineCode",{parentName:"p"},"https://api.logora.fr/synthese-amp.html?shortname=logora-demo&id=1881")),(0,o.kt)("h4",{id:"insertion"},"Insertion"),(0,o.kt)("p",null,"Add the following script in the ",(0,o.kt)("inlineCode",{parentName:"p"},"<head>")," container in addition to all the AMP integration prerequisites:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"><\/script>\n')),(0,o.kt)("p",null,"Embed the amp-iframe in your page to load the summary in AMP format (the ",(0,o.kt)("inlineCode",{parentName:"p"},"<div overflow placeholder>")," tag is required for the iframe to load). The iframe will resize automatically on load, that's why the height of 10 pixels is required."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<amp-iframe\nwidth="200"\nheight="10"\nsandbox="allow-scripts allow-same-origin allow-top-navigation"\nlayout="responsive"\nresizable\nframeborder="0"\nsrc="https://api.logora.fr/synthese-amp.html?shortname=NOM_APPLICATION&id=PAGE_IDENTIFIER"\n>\n    <div overflow placeholder></div>\n</amp-iframe>\n')))}d.isMDXComponent=!0}}]);