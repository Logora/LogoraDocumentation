"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[508],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(o),d=r,m=u["".concat(l,".").concat(d)]||u[d]||f[d]||a;return o?n.createElement(m,i(i({ref:t},p),{},{components:o})):n.createElement(m,i({ref:t},p))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},282:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var n=o(7462),r=o(3366),a=(o(7294),o(3905)),i=["components"],s={id:"social",title:"RSS feed of debates"},l=void 0,c={unversionedId:"configuration/social",id:"configuration/social",title:"RSS feed of debates",description:"1) Access your RSS feed",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/configuration/social.md",sourceDirName:"configuration",slug:"/configuration/social",permalink:"/en/configuration/social",draft:!1,tags:[],version:"current",frontMatter:{id:"social",title:"RSS feed of debates"},sidebar:"docs",previous:{title:"Moderation",permalink:"/en/configuration/moderation"},next:{title:"Advertising inserts",permalink:"/en/configuration/ads"}},p={},u=[{value:"1) Access your RSS feed",id:"1-access-your-rss-feed",level:3},{value:"2) Connect the RSS feed to your sharing tools",id:"2-connect-the-rss-feed-to-your-sharing-tools",level:3}],f={toc:u};function d(e){var t=e.components,s=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"1-access-your-rss-feed"},"1) Access your RSS feed"),(0,a.kt)("p",null,"An RSS feed of your created discussions and consultations is available at ",(0,a.kt)("a",{parentName:"p",href:"https://app.logora.fr/rss/%7Byour-application-name%7D"},"https://app.logora.fr/rss/{your-application-name}"),". "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'For example, if your application is called "New-York-Times", the url of your RSS feed is ',(0,a.kt)("a",{parentName:"p",href:"https://app.logora.fr/rss/new-york-times"},"https://app.logora.fr/rss/new-york-times"))),(0,a.kt)("p",null,"This RSS feed can be used to automatically publish your debates on your social networks or on an email communication. "),(0,a.kt)("p",null,"An example of an RSS feed :"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"An example of RSS feed",src:o(6706).Z,width:"2880",height:"1130"})),(0,a.kt)("h3",{id:"2-connect-the-rss-feed-to-your-sharing-tools"},"2) Connect the RSS feed to your sharing tools"),(0,a.kt)("p",null,"By regularly calling your RSS feed, you can automatically post new debates wherever you want. "),(0,a.kt)("p",null,"For example, by using the Zapier tool, you can automate a post on your social networks as soon as a new item (debate or consultation) is posted. "),(0,a.kt)("p",null,"The documentation link for Zapier is ",(0,a.kt)("a",{parentName:"p",href:"https://zapier.com/apps/facebook-pages/integrations/rss/39/post-new-rss-items-to-a-facebook-page"},"available here.")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Many tools offer a similar service, you probably already have an equivalent.")),(0,a.kt)("p",null,"You get ",(0,a.kt)("strong",{parentName:"p"},"the title, link, and image of the debate or consultation"),".\nYou can also add a custom description to each share. "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'Example for a Facebook post: "The {title} issue is featured on the New York Times! Follow the link to participate on our dedicated debate space."')),(0,a.kt)("p",null,"An example of an automated publication without a custom description: "),(0,a.kt)("img",{src:"/img/publicationfb.png",alt:"RSS to Facebook",width:"400"}))}d.isMDXComponent=!0},6706:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/rss-ebb86352b7b2430161d1958a480a4592.png"}}]);