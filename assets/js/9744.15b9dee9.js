"use strict";(self.webpackChunkdocusaurus_lms_demo=self.webpackChunkdocusaurus_lms_demo||[]).push([[9744],{19744:(e,o,n)=>{n.r(o),n.d(o,{a:()=>a,d:()=>l});var t=n(97480),r=Object.defineProperty,i=(e,o)=>r(e,"name",{value:o,configurable:!0});function u(e,o){return o.forEach((function(o){o&&"string"!=typeof o&&!Array.isArray(o)&&Object.keys(o).forEach((function(n){if("default"!==n&&!(n in e)){var t=Object.getOwnPropertyDescriptor(o,n);Object.defineProperty(e,n,t.get?t:{enumerable:!0,get:function(){return o[n]}})}}))})),Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}i(u,"_mergeNamespaces");var a={exports:{}};!function(e){function o(o,n,t){var r,i=o.getWrapperElement();return(r=i.appendChild(document.createElement("div"))).className=t?"CodeMirror-dialog CodeMirror-dialog-bottom":"CodeMirror-dialog CodeMirror-dialog-top","string"==typeof n?r.innerHTML=n:r.appendChild(n),e.addClass(i,"dialog-opened"),r}function n(e,o){e.state.currentNotificationClose&&e.state.currentNotificationClose(),e.state.currentNotificationClose=o}i(o,"dialogDiv"),i(n,"closeNotification"),e.defineExtension("openDialog",(function(t,r,u){u||(u={}),n(this,null);var a=o(this,t,u.bottom),l=!1,s=this;function c(o){if("string"==typeof o)d.value=o;else{if(l)return;l=!0,e.rmClass(a.parentNode,"dialog-opened"),a.parentNode.removeChild(a),s.focus(),u.onClose&&u.onClose(a)}}i(c,"close");var f,d=a.getElementsByTagName("input")[0];return d?(d.focus(),u.value&&(d.value=u.value,!1!==u.selectValueOnOpen&&d.select()),u.onInput&&e.on(d,"input",(function(e){u.onInput(e,d.value,c)})),u.onKeyUp&&e.on(d,"keyup",(function(e){u.onKeyUp(e,d.value,c)})),e.on(d,"keydown",(function(o){u&&u.onKeyDown&&u.onKeyDown(o,d.value,c)||((27==o.keyCode||!1!==u.closeOnEnter&&13==o.keyCode)&&(d.blur(),e.e_stop(o),c()),13==o.keyCode&&r(d.value,o))})),!1!==u.closeOnBlur&&e.on(a,"focusout",(function(e){null!==e.relatedTarget&&c()}))):(f=a.getElementsByTagName("button")[0])&&(e.on(f,"click",(function(){c(),s.focus()})),!1!==u.closeOnBlur&&e.on(f,"blur",c),f.focus()),c})),e.defineExtension("openConfirm",(function(t,r,u){n(this,null);var a=o(this,t,u&&u.bottom),l=a.getElementsByTagName("button"),s=!1,c=this,f=1;function d(){s||(s=!0,e.rmClass(a.parentNode,"dialog-opened"),a.parentNode.removeChild(a),c.focus())}i(d,"close"),l[0].focus();for(var p=0;p<l.length;++p){var m=l[p];!function(o){e.on(m,"click",(function(n){e.e_preventDefault(n),d(),o&&o(c)}))}(r[p]),e.on(m,"blur",(function(){--f,setTimeout((function(){f<=0&&d()}),200)})),e.on(m,"focus",(function(){++f}))}})),e.defineExtension("openNotification",(function(t,r){n(this,c);var u,a=o(this,t,r&&r.bottom),l=!1,s=r&&void 0!==r.duration?r.duration:5e3;function c(){l||(l=!0,clearTimeout(u),e.rmClass(a.parentNode,"dialog-opened"),a.parentNode.removeChild(a))}return i(c,"close"),e.on(a,"click",(function(o){e.e_preventDefault(o),c()})),s&&(u=setTimeout(c,s)),c}))}(t.a.exports);var l=u({__proto__:null,default:a.exports},[a.exports])}}]);