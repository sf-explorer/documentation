/*! For license information please see 1b7f39f2.2a3cf788.js.LICENSE.txt */
"use strict";(self.webpackChunkdocusaurus_lms_demo=self.webpackChunkdocusaurus_lms_demo||[]).push([[4183],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5786:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var n=r(7462),o=(r(7294),r(3905)),a=r(640);const l={description:"View and Compare flexipages",keywords:["flexipage","salesforce","compare"]},i="Flexipage Explorer",c={unversionedId:"Code/Flexipage/index",id:"Code/Flexipage/index",title:"Flexipage Explorer",description:"View and Compare flexipages",source:"@site/docs/Code/Flexipage/index.md",sourceDirName:"Code/Flexipage",slug:"/Code/Flexipage/",permalink:"/documentation/docs/Code/Flexipage/",draft:!1,editUrl:"https://github.com/sf-explorer/documentation/tree/master/docs/Code/Flexipage/index.md",tags:[],version:"current",frontMatter:{description:"View and Compare flexipages",keywords:["flexipage","salesforce","compare"]},sidebar:"tutorialSidebar",previous:{title:"Apex",permalink:"/documentation/docs/Code/Apex"},next:{title:"Custom Metadata",permalink:"/documentation/docs/Code/customMedata"}},p={},s=[{value:"Demonstration",id:"demonstration",level:2}],u={toc:s};function m(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"flexipage-explorer"},"Flexipage Explorer"),(0,o.kt)("p",null,"SF Explorer let you inspect and compare the content of your flexipages to extract information such as Visibility rules or used custom components"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"example",src:r(7010).Z,width:"3180",height:"1566"})," "),(0,o.kt)("h2",{id:"demonstration"},"Demonstration"),(0,o.kt)(a.Z,{id:"z2jNAPK4d5I",params:"autoplay=1&autohide=1&showinfo=0&rel=0",title:"View and compare flexipages",poster:"maxresdefault",webp:!0,mdxType:"LiteYouTubeEmbed"}))}m.isMDXComponent=!0},640:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(7294),o=function(){return o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},o.apply(this,arguments)};function a(e){var t=n.useState(!1),r=t[0],a=t[1],l=n.useState(!1),i=l[0],c=l[1],p=encodeURIComponent(e.id),s="string"==typeof e.playlistCoverId?encodeURIComponent(e.playlistCoverId):null,u=e.title,m=e.poster||"hqdefault",d="&"+e.params||0,f=e.muted?"&mute=1":"",y=e.announce||"Watch",g=e.webp?"webp":"jpg",b=e.webp?"vi_webp":"vi",h=e.thumbnail||(e.playlist?"https://i.ytimg.com/"+b+"/"+s+"/"+m+"."+g:"https://i.ytimg.com/"+b+"/"+p+"/"+m+"."+g),w=e.noCookie;w=e.cookie?"https://www.youtube.com":"https://www.youtube-nocookie.com";var x=e.playlist?w+"/embed/videoseries?autoplay=1"+f+"&list="+p+d:w+"/embed/"+p+"?autoplay=1&state=1"+f+d,v=e.activatedClass||"lyt-activated",k=e.adNetwork||!1,O=e.aspectHeight||9,C=e.aspectWidth||16,E=e.iframeClass||"",j=e.playerClass||"lty-playbtn",F=e.wrapperClass||"yt-lite",P=e.onIframeAdded||function(){},T=e.rel?"prefetch":"preload";return n.useEffect((function(){i&&P()}),[i]),n.createElement(n.Fragment,null,n.createElement("link",{rel:T,href:h,as:"image"}),n.createElement(n.Fragment,null,r&&n.createElement(n.Fragment,null,n.createElement("link",{rel:"preconnect",href:w}),n.createElement("link",{rel:"preconnect",href:"https://www.google.com"}),k&&n.createElement(n.Fragment,null,n.createElement("link",{rel:"preconnect",href:"https://static.doubleclick.net"}),n.createElement("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net"})))),n.createElement("article",{onPointerOver:function(){r||a(!0)},onClick:function(){i||c(!0)},className:F+" "+(i?v:""),"data-title":u,style:o({backgroundImage:"url("+h+")"},{"--aspect-ratio":O/C*100+"%"})},n.createElement("button",{type:"button",className:j,"aria-label":y+" "+u}),i&&n.createElement("iframe",{className:E,title:u,width:"560",height:"315",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,src:x})))}},7010:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/overview-7f6e74eece01cb47620c5b5627b0991f.png"}}]);