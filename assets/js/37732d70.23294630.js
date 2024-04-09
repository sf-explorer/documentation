/*! For license information please see 37732d70.23294630.js.LICENSE.txt */
"use strict";(self.webpackChunkdocusaurus_lms_demo=self.webpackChunkdocusaurus_lms_demo||[]).push([[3709],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},13160:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var n=r(87462),a=(r(67294),r(3905)),o=r(40640);const l={},i="Architecture",c={unversionedId:"Architecture",id:"Architecture",title:"Architecture",description:"SF Explorer as a web extension offers the following advantages:",source:"@site/docs/01. Architecture.md",sourceDirName:".",slug:"/Architecture",permalink:"/docs/Architecture",draft:!1,editUrl:"https://github.com/sf-explorer/documentation/tree/master/docs/01. Architecture.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Getting Started",permalink:"/docs/intro"},next:{title:"Object Manager",permalink:"/docs/OrgDetails/"}},s={},u=[{value:"How and Why?",id:"how-and-why",level:2}],p={toc:u};function m(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"architecture"},"Architecture"),(0,a.kt)("p",null,"SF Explorer as a web extension offers the following advantages:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"React, Typescript, webpack and friends offer a better developer experience than LWC"),(0,a.kt)("li",{parentName:"ul"},"A focus on UX with advanced user capabilities (excel like)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"No need to be admin of your org to install/use it")),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("strong",{parentName:"li"},"single installation")," is enough for all your orgs - and single combined UI for multiple orgs"),(0,a.kt)("li",{parentName:"ul"},"A security review done by the chrome/edge team"),(0,a.kt)("li",{parentName:"ul"},"Automatic updates"),(0,a.kt)("li",{parentName:"ul"},"a user experience based on the Salesforce Design System")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"example",src:r(54975).Z,width:"2486",height:"1168"})," "),(0,a.kt)("h2",{id:"how-and-why"},"How and Why?"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Here 25 min video explaining the behind the scene of SF Explorer")),(0,a.kt)(o.Z,{id:"SvmSatZbsvM",params:"autoplay=1&autohide=1&showinfo=0&rel=0",title:"Architecture",poster:"maxresdefault",webp:!0,mdxType:"LiteYouTubeEmbed"}))}m.isMDXComponent=!0},40640:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=function(){return a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},a.apply(this,arguments)};function o(e){var t=n.useState(!1),r=t[0],o=t[1],l=n.useState(!1),i=l[0],c=l[1],s=encodeURIComponent(e.id),u="string"==typeof e.playlistCoverId?encodeURIComponent(e.playlistCoverId):null,p=e.title,m=e.poster||"hqdefault",d="&"+e.params||0,f=e.muted?"&mute=1":"",h=e.announce||"Watch",y=e.webp?"webp":"jpg",b=e.webp?"vi_webp":"vi",g=e.thumbnail||(e.playlist?"https://i.ytimg.com/"+b+"/"+u+"/"+m+"."+y:"https://i.ytimg.com/"+b+"/"+s+"/"+m+"."+y),w=e.noCookie;w=e.cookie?"https://www.youtube.com":"https://www.youtube-nocookie.com";var v=e.playlist?w+"/embed/videoseries?autoplay=1"+f+"&list="+s+d:w+"/embed/"+s+"?autoplay=1&state=1"+f+d,k=e.activatedClass||"lyt-activated",O=e.adNetwork||!1,E=e.aspectHeight||9,x=e.aspectWidth||16,j=e.iframeClass||"",N=e.playerClass||"lty-playbtn",C=e.wrapperClass||"yt-lite",A=e.onIframeAdded||function(){},P=e.rel?"prefetch":"preload";return n.useEffect((function(){i&&A()}),[i]),n.createElement(n.Fragment,null,n.createElement("link",{rel:P,href:g,as:"image"}),n.createElement(n.Fragment,null,r&&n.createElement(n.Fragment,null,n.createElement("link",{rel:"preconnect",href:w}),n.createElement("link",{rel:"preconnect",href:"https://www.google.com"}),O&&n.createElement(n.Fragment,null,n.createElement("link",{rel:"preconnect",href:"https://static.doubleclick.net"}),n.createElement("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net"})))),n.createElement("article",{onPointerOver:function(){r||o(!0)},onClick:function(){i||c(!0)},className:C+" "+(i?k:""),"data-title":p,style:a({backgroundImage:"url("+g+")"},{"--aspect-ratio":E/x*100+"%"})},n.createElement("button",{type:"button",className:N,"aria-label":h+" "+p}),i&&n.createElement("iframe",{className:j,title:p,width:"560",height:"315",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,src:v})))}},54975:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/architecture-25321a01886e24990ee4d1543d170ce1.png"}}]);