"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[191],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>v});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,v=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(v,i(i({ref:t},c),{},{components:r})):n.createElement(v,i({ref:t},c))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4489:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={id:"wordpress",title:"Installation Wordpress"},s=void 0,p={unversionedId:"installation/wordpress",id:"installation/wordpress",title:"Installation Wordpress",description:"Avant de commencer",source:"@site/docs/installation/wordpress.md",sourceDirName:"installation",slug:"/installation/wordpress",permalink:"/installation/wordpress",draft:!1,tags:[],version:"current",frontMatter:{id:"wordpress",title:"Installation Wordpress"},sidebar:"docs",previous:{title:"Installation Javascript",permalink:"/installation/javascript-sdk"},next:{title:"Installation c\xf4t\xe9 serveur",permalink:"/installation/server-side-sdk"}},c={},u=[{value:"Avant de commencer",id:"avant-de-commencer",level:3},{value:"Installation",id:"installation",level:3},{value:"Utilisation",id:"utilisation",level:3}],d={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"avant-de-commencer"},"Avant de commencer"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Enregistrez votre site sur Logora en vous inscrivant : ",(0,o.kt)("a",{parentName:"li",href:"https://logora.fr/signup"},"Inscription")),(0,o.kt)("li",{parentName:"ul"},"Autorisez les domaines sur lesquels vous d\xe9sirez installer Logora. Pour cela, rendez-vous sur votre espace d'administration dans l'onglet ",(0,o.kt)("em",{parentName:"li"},"Configuration > G\xe9n\xe9ral > S\xe9curit\xe9 > Domaines autoris\xe9s"),". Par exemple, si le code est ins\xe9r\xe9 sur la page \xe0 l'URL ",(0,o.kt)("a",{parentName:"li",href:"https://exemple.com/article/exemple-article"},"https://exemple.com/article/exemple-article"),", ajoutez le domaine ",(0,o.kt)("a",{parentName:"li",href:"https://exemple.com."},"https://exemple.com.")," Exemple : http://localhost:3000 , ",(0,o.kt)("a",{parentName:"li",href:"http://sous-domaine.exemple.com."},"http://sous-domaine.exemple.com."),"  Important : l'ajout des domaines sur l'espace d'administration fonctionne comme un ajout de tag, n'oubliez pas d'appuyer sur \"entrer\" lors de l'insertion de vos URL.")),(0,o.kt)("h3",{id:"installation"},"Installation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Logora est disponible sur le catalogue Wordpress (",(0,o.kt)("a",{parentName:"li",href:"https://wordpress.org/plugins/logora/"},"https://wordpress.org/plugins/logora/"),"). Sur votre interface Wordpress, t\xe9l\xe9chargez l'extension via Plugins en recherchant \"Logora\". Activez l'extension apr\xe8s son t\xe9l\xe9chargement."),(0,o.kt)("li",{parentName:"ul"},"Ajoutez votre nom d'application et votre cl\xe9 secr\xe8te dans l'onglet de r\xe9glages Logora. Votre nom d'application et votre cl\xe9 secr\xe9te sont disponibles sur votre ",(0,o.kt)("a",{parentName:"li",href:"https://admin.logora.fr"},"espace d'administration")," dans l'onglet ",(0,o.kt)("em",{parentName:"li"},"Configuration > G\xe9n\xe9ral"),".")),(0,o.kt)("h3",{id:"utilisation"},"Utilisation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Acc\xe9dez \xe0 votre espace de d\xe9bat sur le chemin ",(0,o.kt)("inlineCode",{parentName:"li"},"/espace-debat"),". L'espace de d\xe9bat apparait vide, vous pouvez le peupler en cr\xe9ant un d\xe9bat depuis votre espace d'administration. "),(0,o.kt)("li",{parentName:"ul"},"La synth\xe8se de d\xe9bat est disponible via le shortcode ",(0,o.kt)("inlineCode",{parentName:"li"},"[logora-synthese]"),". Ins\xe9rez-la en tapant ",(0,o.kt)("inlineCode",{parentName:"li"},"/")," et en choissisant ",(0,o.kt)("inlineCode",{parentName:"li"},"shortcode"),". Disposez le shortcode dans votre template d'article pour qu'il soit pr\xe9sent sur toutes les pages. Pour que la synth\xe8se apparait en pied d'un article, il faut que l'article (au format ",(0,o.kt)("inlineCode",{parentName:"li"},"Post"),") en question soit li\xe9 \xe0 un d\xe9bat. Il vous faut donc cr\xe9er un d\xe9bat depuis votre ",(0,o.kt)("a",{parentName:"li",href:"https://admin.logora.fr"},"espace d'administration")," et s\xe9lectionner l'article \xe0 lier au d\xe9bat.")))}m.isMDXComponent=!0}}]);