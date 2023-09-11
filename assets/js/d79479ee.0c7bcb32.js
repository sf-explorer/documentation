/*! For license information please see d79479ee.0c7bcb32.js.LICENSE.txt */
"use strict";(self.webpackChunkdocusaurus_lms_demo=self.webpackChunkdocusaurus_lms_demo||[]).push([[6958],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,y=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(y,l(l({ref:t},s),{},{components:r})):n.createElement(y,l({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3172:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var n=r(7462),a=(r(7294),r(3905)),o=r(640);const l={description:"Browse your org data and datamodel with SOQL",keywords:["salesforce","search"]},i="SOQL",c={unversionedId:"Query/SOQL",id:"Query/SOQL",title:"SOQL",description:"Browse your org data and datamodel with SOQL",source:"@site/docs/Query/1. SOQL.md",sourceDirName:"Query",slug:"/Query/SOQL",permalink:"/documentation/docs/Query/SOQL",draft:!1,editUrl:"https://github.com/sf-explorer/documentation/tree/master/docs/Query/1. SOQL.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Browse your org data and datamodel with SOQL",keywords:["salesforce","search"]},sidebar:"tutorialSidebar",previous:{title:"Query Builder",permalink:"/documentation/docs/Query/"},next:{title:"Apex",permalink:"/documentation/docs/Query/Apex"}},u={},s=[{value:"Features",id:"features",level:2}],p={toc:s};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"soql"},"SOQL"),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("p",null,"SF Explorer allows you to browse your org model with SOQL queries with the following features:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ability to ",(0,a.kt)("strong",{parentName:"li"},"chain queries")),(0,a.kt)("li",{parentName:"ul"},"autocompletion "),(0,a.kt)("li",{parentName:"ul"},"sorting"),(0,a.kt)("li",{parentName:"ul"},"pivoting"),(0,a.kt)("li",{parentName:"ul"},"ability to run accross ",(0,a.kt)("strong",{parentName:"li"},"multiple orgs")),(0,a.kt)("li",{parentName:"ul"},"compare results")),(0,a.kt)("p",null,"Here is a quick demo:"),(0,a.kt)(o.Z,{id:"Yz6EHxIq35s",params:"autoplay=1&autohide=1&showinfo=0&rel=0",title:"View and compare flexipages",poster:"maxresdefault",webp:!0,mdxType:"LiteYouTubeEmbed"}))}m.isMDXComponent=!0},640:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294),a=function(){return a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},a.apply(this,arguments)};function o(e){var t=n.useState(!1),r=t[0],o=t[1],l=n.useState(!1),i=l[0],c=l[1],u=encodeURIComponent(e.id),s="string"==typeof e.playlistCoverId?encodeURIComponent(e.playlistCoverId):null,p=e.title,m=e.poster||"hqdefault",d="&"+e.params||0,y=e.muted?"&mute=1":"",f=e.announce||"Watch",b=e.webp?"webp":"jpg",g=e.webp?"vi_webp":"vi",h=e.thumbnail||(e.playlist?"https://i.ytimg.com/"+g+"/"+s+"/"+m+"."+b:"https://i.ytimg.com/"+g+"/"+u+"/"+m+"."+b),w=e.noCookie;w=e.cookie?"https://www.youtube.com":"https://www.youtube-nocookie.com";var O=e.playlist?w+"/embed/videoseries?autoplay=1"+y+"&list="+u+d:w+"/embed/"+u+"?autoplay=1&state=1"+y+d,k=e.activatedClass||"lyt-activated",v=e.adNetwork||!1,E=e.aspectHeight||9,Q=e.aspectWidth||16,S=e.iframeClass||"",j=e.playerClass||"lty-playbtn",x=e.wrapperClass||"yt-lite",C=e.onIframeAdded||function(){},N=e.rel?"prefetch":"preload";return n.useEffect((function(){i&&C()}),[i]),n.createElement(n.Fragment,null,n.createElement("link",{rel:N,href:h,as:"image"}),n.createElement(n.Fragment,null,r&&n.createElement(n.Fragment,null,n.createElement("link",{rel:"preconnect",href:w}),n.createElement("link",{rel:"preconnect",href:"https://www.google.com"}),v&&n.createElement(n.Fragment,null,n.createElement("link",{rel:"preconnect",href:"https://static.doubleclick.net"}),n.createElement("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net"})))),n.createElement("article",{onPointerOver:function(){r||o(!0)},onClick:function(){i||c(!0)},className:x+" "+(i?k:""),"data-title":p,style:a({backgroundImage:"url("+h+")"},{"--aspect-ratio":E/Q*100+"%"})},n.createElement("button",{type:"button",className:j,"aria-label":f+" "+p}),i&&n.createElement("iframe",{className:S,title:p,width:"560",height:"315",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,src:O})))}}}]);