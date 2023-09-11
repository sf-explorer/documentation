"use strict";(self.webpackChunkdocusaurus_lms_demo=self.webpackChunkdocusaurus_lms_demo||[]).push([[8466],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1933:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={},i="Product Explorer",l={unversionedId:"Insurance Product/Getting started",id:"Insurance Product/Getting started",title:"Product Explorer",description:"Introduction",source:"@site/docs/2. Insurance Product/1. Getting started.md",sourceDirName:"2. Insurance Product",slug:"/Insurance Product/Getting started",permalink:"/documentation/docs/Insurance Product/Getting started",draft:!1,editUrl:"https://github.com/sf-explorer/documentation/tree/master/docs/2. Insurance Product/1. Getting started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Org Details",permalink:"/documentation/docs/OrgDetails/"},next:{title:"Omniscript",permalink:"/documentation/docs/Omnistudio/Omniscript"}},s={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Configurable systems in 2023",id:"configurable-systems-in-2023",level:3},{value:"Why Product Explorer?",id:"why-product-explorer",level:3},{value:"Example",id:"example",level:3},{value:"Get started",id:"get-started",level:2},{value:"Installation",id:"installation",level:3}],c={toc:u};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"product-explorer"},"Product Explorer"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("h3",{id:"configurable-systems-in-2023"},"Configurable systems in 2023"),(0,o.kt)("p",null,"Nowadays systems are by design more and more configurable. Don\u2019t get me wrong, this is great. However in many cases this also gives back a lot of responsibility to the end user. Over the years, developers have invented many tools to help them in their day to day work, such as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Code autocompletion"),(0,o.kt)("li",{parentName:"ul"},"Code reviews"),(0,o.kt)("li",{parentName:"ul"},"Deployment pipeline"),(0,o.kt)("li",{parentName:"ul"},"Automatic testing"),(0,o.kt)("li",{parentName:"ul"},"Linting"),(0,o.kt)("li",{parentName:"ul"},"and much more,...")),(0,o.kt)("p",null,"Wait a minute\u2026 What do we provide to our end user who is supposed to do something as heavy as configuring an insurance product? Not always much.\nThis document is intended to explain how SF Explorer can help the product configurator in his day to day activity."),(0,o.kt)("h3",{id:"why-product-explorer"},"Why Product Explorer?"),(0,o.kt)("p",null,"The goal of ",(0,o.kt)("strong",{parentName:"p"},"Product Explorer")," is to help the Product Specialist in his configuration work that can be complex by providing:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"An Helicopter View ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"360 degrees view of all layers, from product to attribute rule"))),(0,o.kt)("li",{parentName:"ul"},"Dependency management",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Visualize dependencies between components"))),(0,o.kt)("li",{parentName:"ul"},"Visualize recent changes at glance"),(0,o.kt)("li",{parentName:"ul"},"Be alerted on configuration errors")),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("p",null,"The below example show a product class with 4 different product instances using many attributes. It is a particular good fit because many attributes are reused between coverages (which is often the case).\n",(0,o.kt)("img",{alt:"Product class",src:r(9736).Z,width:"2444",height:"1200"})),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"As a best practice try to name your attributes with a common name. For example, don't use Collision Limit but only Limit. We know it is a collision limit because it is in the collision coverage.")),(0,o.kt)("p",null,"Here is what you ",(0,o.kt)("strong",{parentName:"p"},"should not do")," for example\n",(0,o.kt)("img",{alt:"Product class",src:r(6867).Z,width:"2332",height:"1050"})),(0,o.kt)("h2",{id:"get-started"},"Get started"),(0,o.kt)("h3",{id:"installation"},"Installation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://chrome.google.com/webstore/detail/salesforce-industry-explo/eabpolgjfkpchgffbkiedgfemcgbnbde"},"Install chrome extension")),(0,o.kt)("li",{parentName:"ul"},"Log into your org"),(0,o.kt)("li",{parentName:"ul"},"Click on the man with a backpack on the right end side of your screen (in the middle)"),(0,o.kt)("li",{parentName:"ul"},"Select 'Products' on the menu"),(0,o.kt)("li",{parentName:"ul"},"Select on of you product"),(0,o.kt)("li",{parentName:"ul"},"'Voil\xe0'")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Try to update the app in chrome regularly as the app in currently evolving rapidly")))}p.isMDXComponent=!0},6867:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Product2-2094192da63a95e67b6278100b5c6eb1.png"},9736:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/product_class-47e0d1c398f6959d5037130b14d32a77.png"}}]);