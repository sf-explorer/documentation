"use strict";(self.webpackChunkdocusaurus_lms_demo=self.webpackChunkdocusaurus_lms_demo||[]).push([[1653],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,f=c["".concat(d,".").concat(m)]||c[m]||u[m]||o;return a?n.createElement(f,i(i({ref:t},s),{},{components:a})):n.createElement(f,i({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6247:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={description:"Edit custom metadata",title:"Custom Metadata",keywords:["metadata api","json"]},i="Custom Metadata Edition",l={unversionedId:"Code/customMedata",id:"Code/customMedata",title:"Custom Metadata",description:"Edit custom metadata",source:"@site/docs/Code/customMedata.md",sourceDirName:"Code",slug:"/Code/customMedata",permalink:"/documentation/docs/Code/customMedata",draft:!1,editUrl:"https://github.com/sf-explorer/documentation/tree/master/docs/Code/customMedata.md",tags:[],version:"current",frontMatter:{description:"Edit custom metadata",title:"Custom Metadata",keywords:["metadata api","json"]},sidebar:"tutorialSidebar",previous:{title:"Flexipage Explorer",permalink:"/documentation/docs/Code/Flexipage/"}},d={},p=[{value:"Problematic",id:"problematic",level:2},{value:"Proposed solution",id:"proposed-solution",level:2}],s={toc:p};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"custom-metadata-edition"},"Custom Metadata Edition"),(0,r.kt)("h2",{id:"problematic"},"Problematic"),(0,r.kt)("p",null,"A number of frameworks and project implementations use ",(0,r.kt)("inlineCode",{parentName:"p"},"Custom Metadata")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"textarea")," to stored structured information in json or XML.\nThe approach is powerful but today the ",(0,r.kt)("strong",{parentName:"p"},"Salesforce Admin UI")," is not appropriate for this type of manipulation as it lacks:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Automatic indentation"),(0,r.kt)("li",{parentName:"ul"},"Collapsing sections"),(0,r.kt)("li",{parentName:"ul"},"Syntax validation"),(0,r.kt)("li",{parentName:"ul"},"Syntax coloration")),(0,r.kt)("p",null,"Today you have to manual copy into third party tools and it is error prone."),(0,r.kt)("h2",{id:"proposed-solution"},"Proposed solution"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"SF Explorer")," provides the missing edition capabilities with:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Ace Editor")," for syntax coloration"),(0,r.kt)("li",{parentName:"ul"},"Standard ",(0,r.kt)("inlineCode",{parentName:"li"},"JSON")," parsing and validation"),(0,r.kt)("li",{parentName:"ul"},"Default ",(0,r.kt)("inlineCode",{parentName:"li"},"JSON")," formating with ",(0,r.kt)("inlineCode",{parentName:"li"},"JSON.stringify")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Salesforce Metadata API")," to update the metadata in salesforce")),(0,r.kt)("p",null,"Metadata can be retrieved and then edited from the query builder or the Metadata menu entry"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"example",src:a(8406).Z,width:"1400",height:"590"})," "),(0,r.kt)("admonition",{title:"Roadmap",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This feature is going to be enhanced with the folling tools:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Prettier")," is going to be used in a future version for enhanced formating capabilities"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Monaco Editor")," is going to replace Ace Editor"))))}u.isMDXComponent=!0},8406:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/customMetadata-18430d85986d3af8077978ffff0489d9.png"}}]);