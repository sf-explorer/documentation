"use strict";(self.webpackChunkdocusaurus_lms_demo=self.webpackChunkdocusaurus_lms_demo||[]).push([[6896],{58009:(e,t,u)=>{u.d(t,{i:()=>r});function r(e,t){var u,r;const{levels:n,indentLevel:l}=e;return((n&&0!==n.length?n.at(-1)-((null===(u=this.electricInput)||void 0===u?void 0:u.test(t))?1:0):l)||0)*((null===(r=this.config)||void 0===r?void 0:r.indentUnit)||0)}(0,Object.defineProperty)(r,"name",{value:"indent",configurable:!0})},86896:(e,t,u)=>{u.r(t);var r=u(97480),n=u(4032),l=u(58009);u(67294),u(85893),u(73935);r.C.defineMode("graphql-results",(e=>{const t=(0,n.o)({eatWhitespace:e=>e.eatSpace(),lexRules:a,parseRules:i,editorConfig:{tabSize:e.tabSize}});return{config:e,startState:t.startState,token:t.token,indent:l.i,electricInput:/^\s*[}\]]/,fold:"brace",closeBrackets:{pairs:'[]{}""',explode:"[]{}"}}}));const a={Punctuation:/^\[|]|\{|\}|:|,/,Number:/^-?(?:0|(?:[1-9][0-9]*))(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?/,String:/^"(?:[^"\\]|\\(?:"|\/|\\|b|f|n|r|t|u[0-9a-fA-F]{4}))*"?/,Keyword:/^true|false|null/},i={Document:[(0,n.p)("{"),(0,n.l)("Entry",(0,n.p)(",")),(0,n.p)("}")],Entry:[(0,n.t)("String","def"),(0,n.p)(":"),"Value"],Value(e){switch(e.kind){case"Number":return"NumberValue";case"String":return"StringValue";case"Punctuation":switch(e.value){case"[":return"ListValue";case"{":return"ObjectValue"}return null;case"Keyword":switch(e.value){case"true":case"false":return"BooleanValue";case"null":return"NullValue"}return null}},NumberValue:[(0,n.t)("Number","number")],StringValue:[(0,n.t)("String","string")],BooleanValue:[(0,n.t)("Keyword","builtin")],NullValue:[(0,n.t)("Keyword","keyword")],ListValue:[(0,n.p)("["),(0,n.l)("Value",(0,n.p)(",")),(0,n.p)("]")],ObjectValue:[(0,n.p)("{"),(0,n.l)("ObjectField",(0,n.p)(",")),(0,n.p)("}")],ObjectField:[(0,n.t)("String","property"),(0,n.p)(":"),"Value"]}}}]);