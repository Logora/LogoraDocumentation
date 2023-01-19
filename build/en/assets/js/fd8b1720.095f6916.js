"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[863],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(n),g=r,f=p["".concat(c,".").concat(g)]||p[g]||d[g]||i;return n?o.createElement(f,a(a({ref:t},s),{},{components:n})):o.createElement(f,a({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=g;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[p]="string"==typeof e?e:r,a[1]=u;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4813:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>g,frontMatter:()=>u,metadata:()=>l,toc:()=>p});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],u={id:"introduction",title:"Introduction"},c=void 0,l={unversionedId:"authentication/introduction",id:"authentication/introduction",title:"Introduction",description:"If you don't have a registration and login method on your site or you want to use Logora's login module, go to your Administration Space  (Configuration > Authentication) and choose the Social authentication mode. You can then go directly to the customization of your debate space.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/authentication/introduction.md",sourceDirName:"authentication",slug:"/authentication/introduction",permalink:"/en/authentication/introduction",draft:!1,tags:[],version:"current",frontMatter:{id:"introduction",title:"Introduction"},sidebar:"docs",previous:{title:"Homepage module",permalink:"/en/installation/homepage"},next:{title:"OAuth 2.0 server",permalink:"/en/authentication/oauth2_server"}},s={},p=[{value:"Single Sign-On",id:"single-sign-on",level:4}],d={toc:p};function g(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If you don't have a registration and login method on your site or you want to use Logora's login module, go to your ",(0,i.kt)("a",{parentName:"p",href:"https://admin.logora.fr"},"Administration Space"),"  (",(0,i.kt)("em",{parentName:"p"},"Configuration > Authentication"),") and choose the ",(0,i.kt)("inlineCode",{parentName:"p"},"Social")," authentication mode. You can then go directly to the ",(0,i.kt)("a",{parentName:"p",href:"/en/configuration/theme"},"customization of your debate space"),"."),(0,i.kt)("p",null,"If you want your users to use your own authentication module to participate in the debate space, use Single Sign-On (SSO)."),(0,i.kt)("h4",{id:"single-sign-on"},"Single Sign-On"),(0,i.kt)("p",null,"Single Sign-On allows users to log in to your site and use the Logora plugin without logging in a second time to Logora."),(0,i.kt)("p",null,"Single sign-on will create a site-specific user profile on Logora so as not to conflict with existing Logora users."),(0,i.kt)("p",null,"Logora offers several possible authentication modes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"OAuth 2.0 server authentication (you have an OAuth 2.0 server)"),(0,i.kt)("li",{parentName:"ul"},"Authentication by JWT signature")))}g.isMDXComponent=!0}}]);