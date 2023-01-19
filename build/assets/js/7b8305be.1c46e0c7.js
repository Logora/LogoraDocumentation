"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[525],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,f=c["".concat(p,".").concat(m)]||c[m]||u[m]||a;return n?o.createElement(f,i(i({ref:t},l),{},{components:n})):o.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d[c]="string"==typeof e?e:r,i[1]=d;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},744:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>d,metadata:()=>s,toc:()=>c});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],d={id:"moderation",title:"Mod\xe9ration",description:"Logora s'occupe de la mod\xe9ration de votre espace de d\xe9bat. Personnalisez le type de mod\xe9ration dans votre espace d'administration"},p=void 0,s={unversionedId:"configuration/moderation",id:"configuration/moderation",title:"Mod\xe9ration",description:"Logora s'occupe de la mod\xe9ration de votre espace de d\xe9bat. Personnalisez le type de mod\xe9ration dans votre espace d'administration",source:"@site/docs/configuration/moderation.md",sourceDirName:"configuration",slug:"/configuration/moderation",permalink:"/configuration/moderation",draft:!1,tags:[],version:"current",frontMatter:{id:"moderation",title:"Mod\xe9ration",description:"Logora s'occupe de la mod\xe9ration de votre espace de d\xe9bat. Personnalisez le type de mod\xe9ration dans votre espace d'administration"},sidebar:"docs",previous:{title:"Chemins d'URL",permalink:"/configuration/routes"},next:{title:"Flux RSS des d\xe9bats",permalink:"/configuration/social"}},l={},c=[{value:"Type de mod\xe9ration",id:"type-de-mod\xe9ration",level:4},{value:"M\xe9thode de mod\xe9ration",id:"m\xe9thode-de-mod\xe9ration",level:4}],u={toc:c};function m(e){var t=e.components,d=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,d,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Choisissez le mode de mod\xe9ration qui vous convient depuis l'espace d'administration ",(0,a.kt)("em",{parentName:"p"},"Configuration > Mod\xe9ration"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Configuration de la mod\xe9ration",src:n(8005).Z,width:"2880",height:"924"})),(0,a.kt)("h4",{id:"type-de-mod\xe9ration"},"Type de mod\xe9ration"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Avant publication du contenu")," : les contributions passeront par la mod\xe9ration avant leur publication (mod\xe9ration ",(0,a.kt)("em",{parentName:"p"},"a priori"),")",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"Apr\xe8s publication du contenu")," : les contributions seront publi\xe9es puis passeront par la mod\xe9ration (mod\xe9ration ",(0,a.kt)("em",{parentName:"p"},"a posteriori"),")"),(0,a.kt)("h4",{id:"m\xe9thode-de-mod\xe9ration"},"M\xe9thode de mod\xe9ration"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Manuelle")," : vous g\xe9rez vous-m\xeames la mod\xe9ration via l'espace d'administration",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"Intelligente")," : Logora s'occupe de la mod\xe9ration. Les algorithmes de mod\xe9ration de Logora ont d\xe9j\xe0 trait\xe9 plus de 100 000 contributions, avec un taux de d\xe9tection de messages haineux \xe0 hauteur de 97%. Lorsqu'une contribution n'est pas certifi\xe9e conforme \xe0 100% par nos outils, notre \xe9quipe de mod\xe9ration prend la main pour v\xe9rifier le contenu."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Externe")," : Logora s'int\xe8gre \xe0 des services externes de mod\xe9ration :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Netino\n")),(0,a.kt)("p",null,"Si vous souhaitez utiliser une de ces deux int\xe9grations, contactez notre \xe9quipe via ",(0,a.kt)("inlineCode",{parentName:"p"},"contact@logora.fr"),"."))}m.isMDXComponent=!0},8005:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/moderation-80a33e41a6bce7ce08a122ee69090a3e.png"}}]);