"use strict";(self.webpackChunkdocusaurus_lms_demo=self.webpackChunkdocusaurus_lms_demo||[]).push([[6079],{26079:(t,e,i)=>{i.r(e),i.d(e,{s:()=>l});var n=i(97480),o=Object.defineProperty,s=(t,e)=>o(t,"name",{value:e,configurable:!0});function r(t,e){return e.forEach((function(e){e&&"string"!=typeof e&&!Array.isArray(e)&&Object.keys(e).forEach((function(i){if("default"!==i&&!(i in t)){var n=Object.getOwnPropertyDescriptor(e,i);Object.defineProperty(t,i,n.get?n:{enumerable:!0,get:function(){return e[i]}})}}))})),Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}s(r,"_mergeNamespaces");var c={exports:{}};!function(t){var e="CodeMirror-hint",i="CodeMirror-hint-active";function n(t,e){if(this.cm=t,this.options=e,this.widget=null,this.debounce=0,this.tick=0,this.startPos=this.cm.getCursor("start"),this.startLen=this.cm.getLine(this.startPos.line).length-this.cm.getSelection().length,this.options.updateOnCursorActivity){var i=this;t.on("cursorActivity",this.activityFunc=function(){i.cursorActivity()})}}t.showHint=function(t,e,i){if(!e)return t.showHint(i);i&&i.async&&(e.async=!0);var n={hint:e};if(i)for(var o in i)n[o]=i[o];return t.showHint(n)},t.defineExtension("showHint",(function(e){e=c(this,this.getCursor("start"),e);var i=this.listSelections();if(!(i.length>1)){if(this.somethingSelected()){if(!e.hint.supportsSelection)return;for(var o=0;o<i.length;o++)if(i[o].head.line!=i[o].anchor.line)return}this.state.completionActive&&this.state.completionActive.close();var s=this.state.completionActive=new n(this,e);s.options.hint&&(t.signal(this,"startCompletion",this),s.update(!0))}})),t.defineExtension("closeHint",(function(){this.state.completionActive&&this.state.completionActive.close()})),s(n,"Completion");var o=window.requestAnimationFrame||function(t){return setTimeout(t,1e3/60)},r=window.cancelAnimationFrame||clearTimeout;function c(t,e,i){var n=t.options.hintOptions,o={};for(var s in m)o[s]=m[s];if(n)for(var s in n)void 0!==n[s]&&(o[s]=n[s]);if(i)for(var s in i)void 0!==i[s]&&(o[s]=i[s]);return o.hint.resolve&&(o.hint=o.hint.resolve(t,e)),o}function l(t){return"string"==typeof t?t:t.text}function a(t,e){var i={Up:function(){e.moveFocus(-1)},Down:function(){e.moveFocus(1)},PageUp:function(){e.moveFocus(1-e.menuSize(),!0)},PageDown:function(){e.moveFocus(e.menuSize()-1,!0)},Home:function(){e.setFocus(0)},End:function(){e.setFocus(e.length-1)},Enter:e.pick,Tab:e.pick,Esc:e.close};/Mac/.test(navigator.platform)&&(i["Ctrl-P"]=function(){e.moveFocus(-1)},i["Ctrl-N"]=function(){e.moveFocus(1)});var n=t.options.customKeys,o=n?{}:i;function r(t,n){var r;r="string"!=typeof n?s((function(t){return n(t,e)}),"bound"):i.hasOwnProperty(n)?i[n]:n,o[t]=r}if(s(r,"addBinding"),n)for(var c in n)n.hasOwnProperty(c)&&r(c,n[c]);var l=t.options.extraKeys;if(l)for(var c in l)l.hasOwnProperty(c)&&r(c,l[c]);return o}function h(t,e){for(;e&&e!=t;){if("LI"===e.nodeName.toUpperCase()&&e.parentNode==t)return e;e=e.parentNode}}function u(n,o){this.id="cm-complete-"+Math.floor(Math.random(1e6)),this.completion=n,this.data=o,this.picked=!1;var s=this,r=n.cm,c=r.getInputField().ownerDocument,u=c.defaultView||c.parentWindow,d=this.hints=c.createElement("ul");d.setAttribute("role","listbox"),d.setAttribute("aria-expanded","true"),d.id=this.id;var f=n.cm.options.theme;d.className="CodeMirror-hints "+f,this.selectedHint=o.selectedHint||0;for(var p=o.list,m=0;m<p.length;++m){var g=d.appendChild(c.createElement("li")),v=p[m],y=e+(m!=this.selectedHint?"":" "+i);null!=v.className&&(y=v.className+" "+y),g.className=y,m==this.selectedHint&&g.setAttribute("aria-selected","true"),g.id=this.id+"-"+m,g.setAttribute("role","option"),v.render?v.render(g,o,v):g.appendChild(c.createTextNode(v.displayText||l(v))),g.hintId=m}var b=n.options.container||c.body,w=r.cursorCoords(n.options.alignWithWord?o.from:null),H=w.left,A=w.bottom,C=!0,k=0,x=0;if(b!==c.body){var O=-1!==["absolute","relative","fixed"].indexOf(u.getComputedStyle(b).position)?b:b.offsetParent,S=O.getBoundingClientRect(),T=c.body.getBoundingClientRect();k=S.left-T.left-O.scrollLeft,x=S.top-T.top-O.scrollTop}d.style.left=H-k+"px",d.style.top=A-x+"px";var F=u.innerWidth||Math.max(c.body.offsetWidth,c.documentElement.offsetWidth),M=u.innerHeight||Math.max(c.body.offsetHeight,c.documentElement.offsetHeight);b.appendChild(d),r.getInputField().setAttribute("aria-autocomplete","list"),r.getInputField().setAttribute("aria-owns",this.id),r.getInputField().setAttribute("aria-activedescendant",this.id+"-"+this.selectedHint);var N,P=n.options.moveOnOverlap?d.getBoundingClientRect():new DOMRect,E=!!n.options.paddingForScrollbar&&d.scrollHeight>d.clientHeight+1;if(setTimeout((function(){N=r.getScrollInfo()})),P.bottom-M>0){var I=P.bottom-P.top;if(w.top-(w.bottom-P.top)-I>0)d.style.top=(A=w.top-I-x)+"px",C=!1;else if(I>M){d.style.height=M-5+"px",d.style.top=(A=w.bottom-P.top-x)+"px";var W=r.getCursor();o.from.ch!=W.ch&&(w=r.cursorCoords(W),d.style.left=(H=w.left-k)+"px",P=d.getBoundingClientRect())}}var R,B=P.right-F;if(E&&(B+=r.display.nativeBarWidth),B>0&&(P.right-P.left>F&&(d.style.width=F-5+"px",B-=P.right-P.left-F),d.style.left=(H=w.left-B-k)+"px"),E)for(var K=d.firstChild;K;K=K.nextSibling)K.style.paddingRight=r.display.nativeBarWidth+"px";r.addKeyMap(this.keyMap=a(n,{moveFocus:function(t,e){s.changeActive(s.selectedHint+t,e)},setFocus:function(t){s.changeActive(t)},menuSize:function(){return s.screenAmount()},length:p.length,close:function(){n.close()},pick:function(){s.pick()},data:o})),n.options.closeOnUnfocus&&(r.on("blur",this.onBlur=function(){R=setTimeout((function(){n.close()}),100)}),r.on("focus",this.onFocus=function(){clearTimeout(R)})),r.on("scroll",this.onScroll=function(){var t=r.getScrollInfo(),e=r.getWrapperElement().getBoundingClientRect();N||(N=r.getScrollInfo());var i=A+N.top-t.top,o=i-(u.pageYOffset||(c.documentElement||c.body).scrollTop);if(C||(o+=d.offsetHeight),o<=e.top||o>=e.bottom)return n.close();d.style.top=i+"px",d.style.left=H+N.left-t.left+"px"}),t.on(d,"dblclick",(function(t){var e=h(d,t.target||t.srcElement);e&&null!=e.hintId&&(s.changeActive(e.hintId),s.pick())})),t.on(d,"click",(function(t){var e=h(d,t.target||t.srcElement);e&&null!=e.hintId&&(s.changeActive(e.hintId),n.options.completeOnSingleClick&&s.pick())})),t.on(d,"mousedown",(function(){setTimeout((function(){r.focus()}),20)}));var _=this.getSelectedHintRange();return 0===_.from&&0===_.to||this.scrollToActive(),t.signal(o,"select",p[this.selectedHint],d.childNodes[this.selectedHint]),!0}function d(t,e){if(!t.somethingSelected())return e;for(var i=[],n=0;n<e.length;n++)e[n].supportsSelection&&i.push(e[n]);return i}function f(t,e,i,n){if(t.async)t(e,n,i);else{var o=t(e,i);o&&o.then?o.then(n):n(o)}}function p(e,i){var n,o=e.getHelpers(i,"hint");if(o.length){var r=s((function(t,e,i){var n=d(t,o);function r(o){if(o==n.length)return e(null);f(n[o],t,i,(function(t){t&&t.list.length>0?e(t):r(o+1)}))}s(r,"run"),r(0)}),"resolved");return r.async=!0,r.supportsSelection=!0,r}return(n=e.getHelper(e.getCursor(),"hintWords"))?function(e){return t.hint.fromList(e,{words:n})}:t.hint.anyword?function(e,i){return t.hint.anyword(e,i)}:function(){}}n.prototype={close:function(){this.active()&&(this.cm.state.completionActive=null,this.tick=null,this.options.updateOnCursorActivity&&this.cm.off("cursorActivity",this.activityFunc),this.widget&&this.data&&t.signal(this.data,"close"),this.widget&&this.widget.close(),t.signal(this.cm,"endCompletion",this.cm))},active:function(){return this.cm.state.completionActive==this},pick:function(e,i){var n=e.list[i],o=this;this.cm.operation((function(){n.hint?n.hint(o.cm,e,n):o.cm.replaceRange(l(n),n.from||e.from,n.to||e.to,"complete"),t.signal(e,"pick",n),o.cm.scrollIntoView()})),this.options.closeOnPick&&this.close()},cursorActivity:function(){this.debounce&&(r(this.debounce),this.debounce=0);var t=this.startPos;this.data&&(t=this.data.from);var e=this.cm.getCursor(),i=this.cm.getLine(e.line);if(e.line!=this.startPos.line||i.length-e.ch!=this.startLen-this.startPos.ch||e.ch<t.ch||this.cm.somethingSelected()||!e.ch||this.options.closeCharacters.test(i.charAt(e.ch-1)))this.close();else{var n=this;this.debounce=o((function(){n.update()})),this.widget&&this.widget.disable()}},update:function(t){if(null!=this.tick){var e=this,i=++this.tick;f(this.options.hint,this.cm,this.options,(function(n){e.tick==i&&e.finishUpdate(n,t)}))}},finishUpdate:function(e,i){this.data&&t.signal(this.data,"update");var n=this.widget&&this.widget.picked||i&&this.options.completeSingle;this.widget&&this.widget.close(),this.data=e,e&&e.list.length&&(n&&1==e.list.length?this.pick(e,0):(this.widget=new u(this,e),t.signal(e,"shown")))}},s(c,"parseOptions"),s(l,"getText"),s(a,"buildKeyMap"),s(h,"getHintElement"),s(u,"Widget"),u.prototype={close:function(){if(this.completion.widget==this){this.completion.widget=null,this.hints.parentNode&&this.hints.parentNode.removeChild(this.hints),this.completion.cm.removeKeyMap(this.keyMap);var t=this.completion.cm.getInputField();t.removeAttribute("aria-activedescendant"),t.removeAttribute("aria-owns");var e=this.completion.cm;this.completion.options.closeOnUnfocus&&(e.off("blur",this.onBlur),e.off("focus",this.onFocus)),e.off("scroll",this.onScroll)}},disable:function(){this.completion.cm.removeKeyMap(this.keyMap);var t=this;this.keyMap={Enter:function(){t.picked=!0}},this.completion.cm.addKeyMap(this.keyMap)},pick:function(){this.completion.pick(this.data,this.selectedHint)},changeActive:function(e,n){if(e>=this.data.list.length?e=n?this.data.list.length-1:0:e<0&&(e=n?0:this.data.list.length-1),this.selectedHint!=e){var o=this.hints.childNodes[this.selectedHint];o&&(o.className=o.className.replace(" "+i,""),o.removeAttribute("aria-selected")),(o=this.hints.childNodes[this.selectedHint=e]).className+=" "+i,o.setAttribute("aria-selected","true"),this.completion.cm.getInputField().setAttribute("aria-activedescendant",o.id),this.scrollToActive(),t.signal(this.data,"select",this.data.list[this.selectedHint],o)}},scrollToActive:function(){var t=this.getSelectedHintRange(),e=this.hints.childNodes[t.from],i=this.hints.childNodes[t.to],n=this.hints.firstChild;e.offsetTop<this.hints.scrollTop?this.hints.scrollTop=e.offsetTop-n.offsetTop:i.offsetTop+i.offsetHeight>this.hints.scrollTop+this.hints.clientHeight&&(this.hints.scrollTop=i.offsetTop+i.offsetHeight-this.hints.clientHeight+n.offsetTop)},screenAmount:function(){return Math.floor(this.hints.clientHeight/this.hints.firstChild.offsetHeight)||1},getSelectedHintRange:function(){var t=this.completion.options.scrollMargin||0;return{from:Math.max(0,this.selectedHint-t),to:Math.min(this.data.list.length-1,this.selectedHint+t)}}},s(d,"applicableHelpers"),s(f,"fetchHints"),s(p,"resolveAutoHints"),t.registerHelper("hint","auto",{resolve:p}),t.registerHelper("hint","fromList",(function(e,i){var n,o=e.getCursor(),s=e.getTokenAt(o),r=t.Pos(o.line,s.start),c=o;s.start<o.ch&&/\w/.test(s.string.charAt(o.ch-s.start-1))?n=s.string.substr(0,o.ch-s.start):(n="",r=o);for(var l=[],a=0;a<i.words.length;a++){var h=i.words[a];h.slice(0,n.length)==n&&l.push(h)}if(l.length)return{list:l,from:r,to:c}})),t.commands.autocomplete=t.showHint;var m={hint:t.hint.auto,completeSingle:!0,alignWithWord:!0,closeCharacters:/[\s()\[\]{};:>,]/,closeOnPick:!0,closeOnUnfocus:!0,updateOnCursorActivity:!0,completeOnSingleClick:!0,container:null,customKeys:null,extraKeys:null,paddingForScrollbar:!0,moveOnOverlap:!0};t.defineOption("hintOptions",null)}(n.a.exports);var l=r({__proto__:null,default:c.exports},[c.exports])}}]);