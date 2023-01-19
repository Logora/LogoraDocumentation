"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[894],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>f});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(o),s=r,f=d["".concat(p,".").concat(s)]||d[s]||m[s]||a;return o?n.createElement(f,i(i({ref:t},u),{},{components:o})):n.createElement(f,i({ref:t},u))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=s;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[d]="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}s.displayName="MDXCreateElement"},4754:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>s,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var n=o(7462),r=o(3366),a=(o(7294),o(3905)),i=["components"],c={id:"moderation",title:"Moderation",description:"Logora takes care of the moderation of your debate space. Customize the type of moderation from your administration space."},p=void 0,l={unversionedId:"configuration/moderation",id:"configuration/moderation",title:"Moderation",description:"Logora takes care of the moderation of your debate space. Customize the type of moderation from your administration space.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/configuration/moderation.md",sourceDirName:"configuration",slug:"/configuration/moderation",permalink:"/en/configuration/moderation",draft:!1,tags:[],version:"current",frontMatter:{id:"moderation",title:"Moderation",description:"Logora takes care of the moderation of your debate space. Customize the type of moderation from your administration space."},sidebar:"docs",previous:{title:"URL paths",permalink:"/en/configuration/routes"},next:{title:"RSS feed of debates",permalink:"/en/configuration/social"}},u={},d=[{value:"Type of moderation",id:"type-of-moderation",level:4},{value:"Moderation method",id:"moderation-method",level:4}],m={toc:d};function s(e){var t=e.components,c=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Choose the moderation mode that suits you from the administration space: ",(0,a.kt)("em",{parentName:"p"},"Configuration > Moderation"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Configuration de la mod\xe9ration",src:o(8005).Z,width:"2880",height:"924"})),(0,a.kt)("h4",{id:"type-of-moderation"},"Type of moderation"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Before publication of the content")," : contributions will go through moderation before their publication (moderation ",(0,a.kt)("em",{parentName:"p"},"a priori"),")",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"After publication of the content"),": contributions will be published and then go through moderation (moderation ",(0,a.kt)("em",{parentName:"p"},"a posteriori"),")"),(0,a.kt)("h4",{id:"moderation-method"},"Moderation method"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Manual"),": you manage the moderation via the administration area",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"Intelligent"),": Logora takes care of moderation. Logora's moderation algorithms have already processed more than 100,000 contributions, with a detection rate of 97% of hateful messages. When a contribution is not certified as 100% compliant by our tools, our moderation team takes over to check the content."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Third party"),": Logora integrates with external moderation services:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Netino\n")),(0,a.kt)("p",null,"If you wish to use one of these two integrations or another one not listed here, contact our team via ",(0,a.kt)("inlineCode",{parentName:"p"},"contact@logora.fr"),"."))}s.isMDXComponent=!0},8005:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/moderation-80a33e41a6bce7ce08a122ee69090a3e.png"}}]);