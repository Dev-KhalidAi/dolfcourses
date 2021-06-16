(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function t(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
t("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function fa(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
var ha="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ia=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ha(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ja;
if("function"==typeof Object.setPrototypeOf)ja=Object.setPrototypeOf;else{var ka;a:{var la={a:!0},ma={};try{ma.__proto__=la;ka=ma.a;break a}catch(a){}ka=!1}ja=ka?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var na=ja;
function v(a,b){a.prototype=ha(b.prototype);a.prototype.constructor=a;if(na)na(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.O=b.prototype}
function oa(){this.o=!1;this.l=null;this.i=void 0;this.h=1;this.u=this.m=0;this.C=this.j=null}
function pa(a){if(a.o)throw new TypeError("Generator is already running");a.o=!0}
oa.prototype.B=function(a){this.i=a};
function qa(a,b){a.j={Ga:b,Ha:!0};a.h=a.m||a.u}
oa.prototype.return=function(a){this.j={return:a};this.h=this.u};
function w(a,b,c){a.h=c;return{value:b}}
oa.prototype.A=function(a){this.h=a};
function ra(a,b,c){a.m=b;void 0!=c&&(a.u=c)}
function sa(a){a.m=0;var b=a.j.Ga;a.j=null;return b}
function ta(a){a.C=[a.j];a.m=0;a.u=0}
function ua(a){var b=a.C.splice(0)[0];(b=a.j=a.j||b)?b.Ha?a.h=a.m||a.u:void 0!=b.A&&a.u<b.A?(a.h=b.A,a.j=null):a.h=a.u:a.h=0}
function va(a){this.h=new oa;this.i=a}
function wa(a,b){pa(a.h);var c=a.h.l;if(c)return xa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return ya(a)}
function xa(a,b,c,d){try{var e=b.call(a.h.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.o=!1,e;var f=e.value}catch(g){return a.h.l=null,qa(a.h,g),ya(a)}a.h.l=null;d.call(a.h,f);return ya(a)}
function ya(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.o=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,qa(a.h,c)}a.h.o=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.Ha)throw b.Ga;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function za(a){this.next=function(b){pa(a.h);a.h.l?b=xa(a,a.h.l.next,b,a.h.B):(a.h.B(b),b=ya(a));return b};
this.throw=function(b){pa(a.h);a.h.l?b=xa(a,a.h.l["throw"],b,a.h.B):(qa(a.h,b),b=ya(a));return b};
this.return=function(b){return wa(a,b)};
this[Symbol.iterator]=function(){return this}}
function x(a,b){b=new za(new va(b));na&&a.prototype&&na(b,a.prototype);return b}
t("Reflect",function(a){return a?a:{}});
t("Reflect.construct",function(){return ia});
t("Reflect.setPrototypeOf",function(a){return a?a:na?function(b,c){try{return na(b,c),!0}catch(d){return!1}}:null});
function Aa(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
t("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!Aa(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n.delete(k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!Aa(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&Aa(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&Aa(k,g)&&Aa(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&Aa(k,g)&&Aa(k[g],this.h)?delete k[g][this.h]:!1};
return b});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.h;return ea(function(){if(l){for(;l.head!=h.h;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h.data_[l];if(n&&Aa(h.data_,l))for(h=0;h<n.length;h++){var p=n[h];if(k!==k&&p.key!==p.key||k===p.key)return{id:l,list:n,index:h,H:p}}return{id:l,list:n,index:-1,H:void 0}}
function e(h){this.data_={};this.h=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.data_[l.id]=[]);l.H?l.H.value=k:(l.H={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},l.list.push(l.H),this.h.previous.next=l.H,this.h.previous=l.H,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.H&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.H.previous.next=h.H.next,h.H.next.previous=h.H.previous,h.H.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).H};
e.prototype.get=function(h){return(h=d(this,h).H)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ba(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ba(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ba(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
t("Object.setPrototypeOf",function(a){return a||na});
var Ca="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Aa(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||Ca});
t("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.o=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.u()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.u=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.K),reject:g(this.u)}};
b.prototype.K=function(g){if(g===this)this.u(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.P(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.J(g):this.m(g)}};
b.prototype.J=function(g){var h=void 0;try{h=g.then}catch(k){this.u(k);return}"function"==typeof h?this.ba(h,g):this.m(g)};
b.prototype.u=function(g){this.B(2,g)};
b.prototype.m=function(g){this.B(1,g)};
b.prototype.B=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.L();this.C()};
b.prototype.L=function(){var g=this;e(function(){if(g.F()){var h=da.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.F=function(){if(this.o)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.C=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.P=function(g){var h=this.l();g.ia(h.resolve,h.reject)};
b.prototype.ba=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,q){return"function"==typeof r?function(A){try{l(r(A))}catch(I){n(I)}}:q}
var l,n,p=new b(function(r,q){l=r;n=q});
this.ia(k(g,l),k(h,n));return p};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.ia=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.o=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),n=l.next();!n.done;n=l.next())d(n.value).ia(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,n){function p(A){return function(I){r[A]=I;q--;0==q&&l(r)}}
var r=[],q=0;do r.push(void 0),q++,d(k.value).ia(p(r.length-1),n),k=h.next();while(!k.done)})};
return b});
function Da(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
t("Array.prototype.entries",function(a){return a?a:function(){return Da(this,function(b,c){return[b,c]})}});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Aa(b,d)&&c.push([d,b[d]]);return c}});
t("Array.prototype.keys",function(a){return a?a:function(){return Da(this,function(b){return b})}});
t("Array.prototype.values",function(a){return a?a:function(){return Da(this,function(b,c){return c})}});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ba(this,b,"includes").indexOf(b,c||0)}});
t("Set",function(a){function b(c){this.h=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
t("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
t("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
t("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
t("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)Aa(b,d)&&c.push(b[d]);return c}});
var y=this||self;function z(a,b,c){a=a.split(".");c=c||y;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function B(a,b){a=a.split(".");b=b||y;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Ea(){}
function Fa(a){a.wa=void 0;a.getInstance=function(){return a.wa?a.wa:a.wa=new a}}
function Ga(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Ha(a){var b=Ga(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ia(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ja(a){return Object.prototype.hasOwnProperty.call(a,Ka)&&a[Ka]||(a[Ka]=++La)}
var Ka="closure_uid_"+(1E9*Math.random()>>>0),La=0;function Ma(a,b,c){return a.call.apply(a.bind,arguments)}
function Na(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Oa(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Oa=Ma:Oa=Na;return Oa.apply(null,arguments)}
function Pa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Qa(a,b){z(a,b,void 0)}
function C(a,b){function c(){}
c.prototype=b.prototype;a.O=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.al=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Ra(a){return a}
;function Sa(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Sa);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));b&&(this.Pa=b)}
C(Sa,Error);Sa.prototype.name="CustomError";function Ta(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function Va(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var Wa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},D=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Xa=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Ya=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Za=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
D(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function $a(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function ab(a,b){b=Wa(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function bb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function cb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ha(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function db(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function eb(a){var b=fb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function gb(a){for(var b in a)return!1;return!0}
function hb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function ib(){var a=E("PLAYER_VARS",{});return null!==a&&"privembed"in a?a.privembed:!1}
function jb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function kb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function lb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=lb(a[c]);return b}
var mb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function nb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<mb.length;f++)c=mb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var ob;function pb(){if(void 0===ob){var a=null,b=y.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Ra,createScript:Ra,createScriptURL:Ra})}catch(c){y.console&&y.console.error(c.message)}ob=a}else ob=a}return ob}
;var qb={};function rb(a){this.h=qb===qb?a:"";this.Y=!0}
rb.prototype.X=function(){return this.h.toString()};
rb.prototype.toString=function(){return this.h.toString()};function sb(a,b){this.h=b===tb?a:""}
m=sb.prototype;m.Y=!0;m.X=function(){return this.h.toString()};
m.va=!0;m.ra=function(){return 1};
m.toString=function(){return this.h+""};
function ub(a){if(a instanceof sb&&a.constructor===sb)return a.h;Ga(a);return"type_error:TrustedResourceUrl"}
var tb={};function vb(a){var b=pb();a=b?b.createScriptURL(a):a;return new sb(a,tb)}
;var wb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function xb(a,b){if(b)a=a.replace(yb,"&amp;").replace(zb,"&lt;").replace(Ab,"&gt;").replace(Bb,"&quot;").replace(Cb,"&#39;").replace(Db,"&#0;");else{if(!Eb.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(yb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(zb,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Ab,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Bb,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Cb,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Db,"&#0;"))}return a}
var yb=/&/g,zb=/</g,Ab=/>/g,Bb=/"/g,Cb=/'/g,Db=/\x00/g,Eb=/[\x00&<>"']/;function Fb(a,b){this.h=b===Gb?a:""}
m=Fb.prototype;m.Y=!0;m.X=function(){return this.h.toString()};
m.va=!0;m.ra=function(){return 1};
m.toString=function(){return this.h.toString()};
function Hb(a){if(a instanceof Fb&&a.constructor===Fb)return a.h;Ga(a);return"type_error:SafeUrl"}
var Ib=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,Jb=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,Kb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Gb={},Lb=new Fb("about:invalid#zClosurez",Gb);var Mb;a:{var Nb=y.navigator;if(Nb){var Ob=Nb.userAgent;if(Ob){Mb=Ob;break a}}Mb=""}function F(a){return-1!=Mb.indexOf(a)}
;function Pb(a,b,c){this.h=c===Qb?a:"";this.i=b}
m=Pb.prototype;m.va=!0;m.ra=function(){return this.i};
m.Y=!0;m.X=function(){return this.h.toString()};
m.toString=function(){return this.h.toString()};
var Qb={};function Rb(a,b){var c=pb();a=c?c.createHTML(a):a;return new Pb(a,b,Qb)}
;function Sb(a,b){b instanceof Fb||b instanceof Fb||(b="object"==typeof b&&b.Y?b.X():String(b),Kb.test(b)||(b="about:invalid#zClosurez"),b=new Fb(b,Gb));a.href=Hb(b)}
function Tb(a,b){a.rel="stylesheet";a.href=ub(b).toString();(b=Ub('style[nonce],link[rel="stylesheet"][nonce]',a.ownerDocument&&a.ownerDocument.defaultView))&&a.setAttribute("nonce",b)}
function Vb(){return Ub("script[nonce]",void 0)}
var Wb=/^[\w+/_-]+[=]{0,2}$/;function Ub(a,b){b=(b||y).document;return b.querySelector?(a=b.querySelector(a))&&(a=a.nonce||a.getAttribute("nonce"))&&Wb.test(a)?a:"":""}
;function Xb(a){return a=xb(a,void 0)}
function Yb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Zb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function $b(a){return a?decodeURI(a):a}
function ac(a){return $b(a.match(Zb)[3]||null)}
function bc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)bc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function cc(a){var b=[],c;for(c in a)bc(c,a[c],b);return b.join("&")}
function dc(a,b){b=cc(b);if(b){var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.substr(0,d),e,a.substr(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
var ec=/#|$/;function G(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(k){try{h(b.next(k))}catch(l){e(l)}}
function g(k){try{h(b["throw"](k))}catch(l){e(l)}}
function h(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(f,g)}
h((b=b.apply(a,void 0)).next())})}
;function fc(){return F("iPhone")&&!F("iPod")&&!F("iPad")}
;function gc(a){gc[" "](a);return a}
gc[" "]=Ea;var hc=F("Opera"),ic=F("Trident")||F("MSIE"),jc=F("Edge"),kc=F("Gecko")&&!(-1!=Mb.toLowerCase().indexOf("webkit")&&!F("Edge"))&&!(F("Trident")||F("MSIE"))&&!F("Edge"),lc=-1!=Mb.toLowerCase().indexOf("webkit")&&!F("Edge"),mc=F("Android");function nc(){var a=y.document;return a?a.documentMode:void 0}
var oc;a:{var pc="",qc=function(){var a=Mb;if(kc)return/rv:([^\);]+)(\)|;)/.exec(a);if(jc)return/Edge\/([\d\.]+)/.exec(a);if(ic)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(lc)return/WebKit\/(\S+)/.exec(a);if(hc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
qc&&(pc=qc?qc[1]:"");if(ic){var rc=nc();if(null!=rc&&rc>parseFloat(pc)){oc=String(rc);break a}}oc=pc}var sc=oc,tc;if(y.document&&ic){var uc=nc();tc=uc?uc:parseInt(sc,10)||void 0}else tc=void 0;var vc=tc;var wc=fc()||F("iPod"),xc=F("iPad"),yc=F("Safari")&&!((F("Chrome")||F("CriOS"))&&!F("Edge")||F("Coast")||F("Opera")||F("Edge")||F("Edg/")||F("OPR")||F("Firefox")||F("FxiOS")||F("Silk")||F("Android"))&&!(fc()||F("iPad")||F("iPod"));var zc={},Ac=null;
function Bc(a){var b=3;Ha(a);void 0===b&&(b=0);if(!Ac){Ac={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));zc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===Ac[h]&&(Ac[h]=g)}}}b=zc[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],l=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+l+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var Cc={dl:{value:!0,configurable:!0}};var Dc=Object,Ec=Dc.freeze,Fc=[];Array.isArray(Fc)&&!Object.isFrozen(Fc)&&Object.defineProperties(Fc,Cc);Ec.call(Dc,Fc);var H=window;var Gc={};function Hc(){}
function Ic(a,b){if(b!==Gc)throw Error("Bad secret");this.h=a}
v(Ic,Hc);Ic.prototype.toString=function(){return this.h};
var Jc=new Ic("about:invalid#zTSz",Gc);function Kc(a){if(a instanceof Hc)if(a instanceof Ic)a=a.h;else throw Error("wrong type");else a=Hb(a);return a}
;function Lc(a,b){a.src=ub(b);var c;b=(a.ownerDocument&&a.ownerDocument.defaultView||window).document;(c=(b=null===(c=b.querySelector)||void 0===c?void 0:c.call(b,"script[nonce]"))?b.nonce||b.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",c)}
;var Mc=!ic||9<=Number(vc);function Nc(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
m=Nc.prototype;m.clone=function(){return new Nc(this.x,this.y)};
m.equals=function(a){return a instanceof Nc&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Oc(a,b){this.width=a;this.height=b}
m=Oc.prototype;m.clone=function(){return new Oc(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.isEmpty=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Pc(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function Qc(a,b){db(b,function(c,d){c&&"object"==typeof c&&c.Y&&(c=c.X());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Rc.hasOwnProperty(d)?a.setAttribute(Rc[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var Rc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Sc(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!Mc&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Xb(g.name),'"');if(g.type){f.push(' type="',Xb(g.type),'"');var h={};nb(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=Tc(e,f);g&&("string"===typeof g?f.className=g:Array.isArray(g)?f.className=g.join(" "):Qc(f,g));2<d.length&&Uc(e,f,d);return f}
function Uc(a,b,c){function d(h){h&&b.appendChild("string"===typeof h?a.createTextNode(h):h)}
for(var e=2;e<c.length;e++){var f=c[e];if(!Ha(f)||Ia(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(Ia(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if("function"===typeof f){g="function"==typeof f.item;break a}}g=!1}D(g?bb(f):f,d)}}}
function Tc(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Vc(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Wc(a){var b=Xc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Yc(){var a=[];Wc(function(b){a.push(b)});
return a}
var Xc={Jb:"allow-forms",Kb:"allow-modals",Lb:"allow-orientation-lock",Mb:"allow-pointer-lock",Nb:"allow-popups",Ob:"allow-popups-to-escape-sandbox",Pb:"allow-presentation",Qb:"allow-same-origin",Rb:"allow-scripts",Sb:"allow-top-navigation",Tb:"allow-top-navigation-by-user-activation"},Zc=Va(function(){return Yc()});
function $c(){var a=Tc(document,"IFRAME"),b={};D(Zc(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function ad(a){this.isValid=a}
function bd(a){return new ad(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var cd=[bd("data"),bd("http"),bd("https"),bd("mailto"),bd("ftp"),new ad(function(a){return/^[^:]*([/?#]|$)/.test(a)})];function dd(a){ed();return vb(a)}
var ed=Ea;function fd(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var gd=(new Date).getTime();function hd(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==
c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function id(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(p){for(var r=g,q=0;64>q;q+=4)r[q/4]=p[q]<<24|p[q+1]<<16|p[q+2]<<8|p[q+3];for(q=16;80>q;q++)p=r[q-3]^r[q-8]^r[q-14]^r[q-16],r[q]=(p<<1|p>>>31)&4294967295;p=e[0];var A=e[1],I=e[2],K=e[3],X=e[4];for(q=0;80>q;q++){if(40>q)if(20>q){var Y=K^A&(I^K);var L=1518500249}else Y=A^I^K,L=1859775393;else 60>q?(Y=A&I|K&(A|I),L=2400959708):(Y=A^I^K,L=3395469782);Y=((p<<5|p>>>27)&4294967295)+Y+X+L+r[q]&4294967295;X=K;K=I;I=(A<<30|A>>>2)&4294967295;A=p;p=Y}e[0]=e[0]+p&4294967295;e[1]=e[1]+A&4294967295;e[2]=
e[2]+I&4294967295;e[3]=e[3]+K&4294967295;e[4]=e[4]+X&4294967295}
function c(p,r){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var q=[],A=0,I=p.length;A<I;++A)q.push(p.charCodeAt(A));p=q}r||(r=p.length);q=0;if(0==l)for(;q+64<r;)b(p.slice(q,q+64)),q+=64,n+=64;for(;q<r;)if(f[l++]=p[q++],n++,64==l)for(l=0,b(f);q+64<r;)b(p.slice(q,q+64)),q+=64,n+=64}
function d(){var p=[],r=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var q=63;56<=q;q--)f[q]=r&255,r>>>=8;b(f);for(q=r=0;5>q;q++)for(var A=24;0<=A;A-=8)p[r++]=e[q]>>A&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,Qa:function(){for(var p=d(),r="",q=0;q<p.length;q++)r+="0123456789ABCDEF".charAt(Math.floor(p[q]/16))+"0123456789ABCDEF".charAt(p[q]%16);return r}}}
;function jd(a,b,c){var d=String(y.location.href);return d&&a&&b?[b,kd(hd(d),a,c||null)].join(" "):null}
function kd(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],D(d,function(h){e.push(h)}),ld(e.join(" "));
var f=[],g=[];D(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];D(d,function(h){e.push(h)});
a=ld(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function ld(a){var b=id();b.update(a);return b.Qa().toLowerCase()}
;var md={};function nd(a){this.h=a||{cookie:""}}
m=nd.prototype;m.isEnabled=function(){if(!y.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{xa:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.ll;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.xa}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);this.h.cookie=a+"="+b+(f?";domain="+f:"")+(g?";path="+g:"")+(0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString())+(d?";secure":"")+(null!=e?";samesite="+e:"")};
m.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=wb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{xa:0,path:b,domain:c});return d};
m.isEmpty=function(){return!this.h.cookie};
m.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=wb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var od=new nd("undefined"==typeof document?null:document);function pd(a){return!!md.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function qd(a){a=void 0===a?!1:a;var b=y.__SAPISID||y.__APISID||y.__3PSAPISID||y.__OVERRIDE_SID;pd(a)&&(b=b||y.__1PSAPISID);if(b)return!0;var c=new nd(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID");pd(a)&&(b=b||c.get("__Secure-1PAPISID"));return!!b}
function rd(a,b,c,d){(a=y[a])||(a=(new nd(document)).get(b));return a?jd(a,c,d):null}
function sd(a){var b=void 0===b?!1:b;var c=hd(String(y.location.href)),d=[];if(qd(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?y.__SAPISID:y.__APISID;e||(e=new nd(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?jd(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&pd(b)&&((b=rd("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=rd("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return 0==
d.length?null:d.join(" ")}
;function td(){this.data_=[];this.h=-1}
td.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.data_[a]!=b&&(this.data_[a]=b,this.h=-1)};
td.prototype.get=function(a){return!!this.data_[a]};
function ud(a){-1==a.h&&(a.h=Za(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.h}
;function vd(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
vd.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function wd(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;var xd;
function yd(){var a=y.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!F("Presto")&&(a=function(){var e=Tc(document,"IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Oa(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!F("Trident")&&!F("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Da;c.Da=null;e()}};
return function(e){d.next={Da:e};d=d.next;b.port2.postMessage(0)}}return function(e){y.setTimeout(e,0)}}
;function zd(a){y.setTimeout(function(){throw a;},0)}
;function Ad(){this.i=this.h=null}
Ad.prototype.add=function(a,b){var c=Bd.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Ad.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Bd=new vd(function(){return new Cd},function(a){return a.reset()});
function Cd(){this.next=this.scope=this.h=null}
Cd.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
Cd.prototype.reset=function(){this.next=this.scope=this.h=null};function Dd(a,b){Ed||Fd();Gd||(Ed(),Gd=!0);Hd.add(a,b)}
var Ed;function Fd(){if(y.Promise&&y.Promise.resolve){var a=y.Promise.resolve(void 0);Ed=function(){a.then(Id)}}else Ed=function(){var b=Id;
"function"!==typeof y.setImmediate||y.Window&&y.Window.prototype&&!F("Edge")&&y.Window.prototype.setImmediate==y.setImmediate?(xd||(xd=yd()),xd(b)):y.setImmediate(b)}}
var Gd=!1,Hd=new Ad;function Id(){for(var a;a=Hd.remove();){try{a.h.call(a.scope)}catch(b){zd(b)}wd(Bd,a)}Gd=!1}
;function Jd(a,b){this.h=a[y.Symbol.iterator]();this.i=b;this.j=0}
Jd.prototype[Symbol.iterator]=function(){return this};
Jd.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value,this.j++),done:a.done}};
function Kd(a,b){return new Jd(a,b)}
;function Ld(){this.blockSize=-1}
;function Md(){this.blockSize=-1;this.blockSize=64;this.h=[];this.u=[];this.m=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
C(Md,Ld);Md.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function Nd(a,b,c){c||(c=0);var d=a.m;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
Md.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.u,f=this.i;d<b;){if(0==f)for(;d<=c;)Nd(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Nd(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Nd(this,e);f=0;break}}this.i=f;this.l+=b}};
Md.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.u[c]=b&255,b/=256;Nd(this,this.u);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Od(a){var b=B("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||y.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Pd(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Qd[c])c=Qd[c];else{c=String(c);if(!Qd[c]){var f=/function\s+([^\(]+)/m.exec(c);Qd[c]=f?f[1]:"[Anonymous]"}c=Qd[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Pd(a,b){b||(b={});b[Rd(a)]=!0;var c=a.stack||"";(a=a.Pa)&&!b[Rd(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Pd(a,b));return c}
function Rd(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Qd={};function Sd(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function Td(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Ha(d)?Td.apply(null,d):Sd(d)}}
;function J(){this.h=this.h;this.u=this.u}
J.prototype.h=!1;J.prototype.dispose=function(){this.h||(this.h=!0,this.D())};
function Ud(a,b){a.h?b():(a.u||(a.u=[]),a.u.push(b))}
J.prototype.D=function(){if(this.u)for(;this.u.length;)this.u.shift()()};function Vd(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Wd(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Xd(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Vd(a).match(/\S+/g)||[],b=0<=Wa(a,b));return b}
function Yd(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Xd(a,"inverted-hdpi")&&Wd(a,Xa(a.classList?a.classList:Vd(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;var Zd="StopIteration"in y?y.StopIteration:{message:"StopIteration",stack:""};function $d(){}
$d.prototype.next=function(){return $d.prototype.h.call(this)};
$d.prototype.h=function(){throw Zd;};
$d.prototype.M=function(){return this};function ae(a){if(a instanceof be||a instanceof ce||a instanceof de)return a;if("function"==typeof a.next)return new be(function(){return ee(a)});
if("function"==typeof a[Symbol.iterator])return new be(function(){return a[Symbol.iterator]()});
if("function"==typeof a.M)return new be(function(){return ee(a.M())});
throw Error("Not an iterator or iterable.");}
function ee(a){if(!(a instanceof $d))return a;var b=!1;return{next:function(){for(var c;!b;)try{c=a.next();break}catch(d){if(d!==Zd)throw d;b=!0}return{value:c,done:b}}}}
function be(a){this.h=a}
be.prototype.M=function(){return new ce(this.h())};
be.prototype[Symbol.iterator]=function(){return new de(this.h())};
be.prototype.i=function(){return new de(this.h())};
function ce(a){this.j=a}
v(ce,$d);ce.prototype.h=function(){var a=this.j.next();if(a.done)throw Zd;return a.value};
ce.prototype.next=function(){return ce.prototype.h.call(this)};
ce.prototype[Symbol.iterator]=function(){return new de(this.j)};
ce.prototype.i=function(){return new de(this.j)};
function de(a){be.call(this,function(){return a});
this.j=a}
v(de,be);de.prototype.next=function(){return this.j.next()};function fe(a,b){this.i={};this.h=[];this.V=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof fe)for(c=ge(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function ge(a){he(a);return a.h.concat()}
m=fe.prototype;m.has=function(a){return ie(this.i,a)};
m.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||je;he(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function je(a,b){return a===b}
m.isEmpty=function(){return 0==this.size};
m.clear=function(){this.i={};this.V=this.size=this.h.length=0};
m.remove=function(a){return this.delete(a)};
m.delete=function(a){return ie(this.i,a)?(delete this.i[a],--this.size,this.V++,this.h.length>2*this.size&&he(this),!0):!1};
function he(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];ie(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],ie(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
m.get=function(a,b){return ie(this.i,a)?this.i[a]:b};
m.set=function(a,b){ie(this.i,a)||(this.size+=1,this.h.push(a),this.V++);this.i[a]=b};
m.forEach=function(a,b){for(var c=ge(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new fe(this)};
m.keys=function(){return ae(this.M(!0)).i()};
m.values=function(){return ae(this.M(!1)).i()};
m.entries=function(){var a=this;return Kd(this.keys(),function(b){return[b,a.get(b)]})};
m.M=function(a){he(this);var b=0,c=this.V,d=this,e=new $d;e.h=function(){if(c!=d.V)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)throw Zd;var f=d.h[b++];return a?f:d.i[f]};
e.next=e.h.bind(e);return e};
function ie(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;var ke=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{y.addEventListener("test",Ea,b),y.removeEventListener("test",Ea,b)}catch(c){}return a}();function le(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
le.prototype.stopPropagation=function(){this.j=!0};
le.prototype.preventDefault=function(){this.defaultPrevented=!0};function me(a,b){le.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
C(me,le);var ne={2:"touch",3:"pen",4:"mouse"};
me.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(kc){a:{try{gc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:ne[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&me.O.preventDefault.call(this)};
me.prototype.stopPropagation=function(){me.O.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
me.prototype.preventDefault=function(){me.O.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var oe="closure_listenable_"+(1E6*Math.random()|0);var pe=0;function qe(a,b,c,d,e){this.listener=a;this.h=null;this.src=b;this.type=c;this.capture=!!d;this.la=e;this.key=++pe;this.ea=this.ha=!1}
function re(a){a.ea=!0;a.listener=null;a.h=null;a.src=null;a.la=null}
;function se(a){this.src=a;this.listeners={};this.h=0}
se.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=te(a,b,d,e);-1<g?(b=a[g],c||(b.ha=!1)):(b=new qe(b,this.src,f,!!d,e),b.ha=c,a.push(b));return b};
se.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=te(e,b,c,d);return-1<b?(re(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function ue(a,b){var c=b.type;c in a.listeners&&ab(a.listeners[c],b)&&(re(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function te(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.ea&&f.listener==b&&f.capture==!!c&&f.la==d)return e}return-1}
;var ve="closure_lm_"+(1E6*Math.random()|0),we={},xe=0;function ye(a,b,c,d,e){if(d&&d.once)ze(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)ye(a,b[f],c,d,e);else c=Ae(c),a&&a[oe]?a.ca(b,c,Ia(d)?!!d.capture:!!d,e):Be(a,b,c,!1,d,e)}
function Be(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ia(e)?!!e.capture:!!e,h=Ce(a);h||(a[ve]=h=new se(a));c=h.add(b,c,d,g,f);if(!c.h){d=De();c.h=d;d.src=a;d.listener=c;if(a.addEventListener)ke||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Ee(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");xe++}}
function De(){function a(c){return b.call(a.src,a.listener,c)}
var b=Fe;return a}
function ze(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)ze(a,b[f],c,d,e);else c=Ae(c),a&&a[oe]?a.j.add(String(b),c,!0,Ia(d)?!!d.capture:!!d,e):Be(a,b,c,!0,d,e)}
function Ge(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Ge(a,b[f],c,d,e);else(d=Ia(d)?!!d.capture:!!d,c=Ae(c),a&&a[oe])?a.j.remove(String(b),c,d,e):a&&(a=Ce(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=te(b,c,d,e)),(c=-1<a?b[a]:null)&&He(c))}
function He(a){if("number"!==typeof a&&a&&!a.ea){var b=a.src;if(b&&b[oe])ue(b.j,a);else{var c=a.type,d=a.h;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Ee(c),d):b.addListener&&b.removeListener&&b.removeListener(d);xe--;(c=Ce(b))?(ue(c,a),0==c.h&&(c.src=null,b[ve]=null)):re(a)}}}
function Ee(a){return a in we?we[a]:we[a]="on"+a}
function Fe(a,b){if(a.ea)a=!0;else{b=new me(b,this);var c=a.listener,d=a.la||a.src;a.ha&&He(a);a=c.call(d,b)}return a}
function Ce(a){a=a[ve];return a instanceof se?a:null}
var Ie="__closure_events_fn_"+(1E9*Math.random()>>>0);function Ae(a){if("function"===typeof a)return a;a[Ie]||(a[Ie]=function(b){return a.handleEvent(b)});
return a[Ie]}
;function Je(){J.call(this);this.j=new se(this);this.P=this;this.F=null}
C(Je,J);Je.prototype[oe]=!0;Je.prototype.addEventListener=function(a,b,c,d){ye(this,a,b,c,d)};
Je.prototype.removeEventListener=function(a,b,c,d){Ge(this,a,b,c,d)};
function Ke(a,b){var c=a.F;if(c){var d=[];for(var e=1;c;c=c.F)d.push(c),++e}a=a.P;c=b.type||b;"string"===typeof b?b=new le(b,a):b instanceof le?b.target=b.target||a:(e=b,b=new le(c,a),nb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=Le(g,c,!0,b)&&e}b.j||(g=b.h=a,e=Le(g,c,!0,b)&&e,b.j||(e=Le(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=Le(g,c,!1,b)&&e}
Je.prototype.D=function(){Je.O.D.call(this);if(this.j){var a=this.j,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,re(d[e]);delete a.listeners[c];a.h--}}this.F=null};
Je.prototype.ca=function(a,b,c,d){return this.j.add(String(a),b,!1,c,d)};
function Le(a,b,c,d){b=a.j.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.ea&&g.capture==c){var h=g.listener,k=g.la||g.src;g.ha&&ue(a.j,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function Me(a){var b=[];Ne(new Oe,a,b);return b.join("")}
function Oe(){}
function Ne(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Ne(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Pe(d,c),c.push(":"),Ne(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Pe(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Qe={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Re=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Pe(a,b){b.push('"',a.replace(Re,function(c){var d=Qe[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),Qe[c]=d);return d}),'"')}
;function Se(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function Te(a){this.h=0;this.o=void 0;this.l=this.i=this.j=null;this.u=this.m=!1;if(a!=Ea)try{var b=this;a.call(void 0,function(c){Ue(b,2,c)},function(c){Ue(b,3,c)})}catch(c){Ue(this,3,c)}}
function Ve(){this.next=this.context=this.onRejected=this.i=this.h=null;this.j=!1}
Ve.prototype.reset=function(){this.context=this.onRejected=this.i=this.h=null;this.j=!1};
var We=new vd(function(){return new Ve},function(a){a.reset()});
function Xe(a,b,c){var d=We.get();d.i=a;d.onRejected=b;d.context=c;return d}
function Ye(a){return new Te(function(b,c){c(a)})}
Te.prototype.then=function(a,b,c){return Ze(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Te.prototype.$goog_Thenable=!0;function $e(a,b){return Ze(a,null,b,void 0)}
Te.prototype.cancel=function(a){if(0==this.h){var b=new af(a);Dd(function(){bf(this,b)},this)}};
function bf(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?bf(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):cf(c),df(c,e,3,b)))}a.j=null}else Ue(a,3,b)}
function ef(a,b){a.i||2!=a.h&&3!=a.h||ff(a);a.l?a.l.next=b:a.i=b;a.l=b}
function Ze(a,b,c,d){var e=Xe(null,null,null);e.h=new Te(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof af?g(h):f(k)}catch(l){g(l)}}:g});
e.h.j=a;ef(a,e);return e.h}
Te.prototype.C=function(a){this.h=0;Ue(this,2,a)};
Te.prototype.F=function(a){this.h=0;Ue(this,3,a)};
function Ue(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.C,f=a.F;if(d instanceof Te){ef(d,Xe(e||Ea,f||null,a));var g=!0}else if(Se(d))d.then(e,f,a),g=!0;else{if(Ia(d))try{var h=d.then;if("function"===typeof h){gf(d,h,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}g||(a.o=c,a.h=b,a.j=null,ff(a),3!=b||c instanceof af||hf(a,c))}}
function gf(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function ff(a){a.m||(a.m=!0,Dd(a.B,a))}
function cf(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
Te.prototype.B=function(){for(var a;a=cf(this);)df(this,a,this.h,this.o);this.m=!1};
function df(a,b,c,d){if(3==c&&b.onRejected&&!b.j)for(;a&&a.u;a=a.j)a.u=!1;if(b.h)b.h.j=null,jf(b,c,d);else try{b.j?b.i.call(b.context):jf(b,c,d)}catch(e){kf.call(null,e)}wd(We,b)}
function jf(a,b,c){2==b?a.i.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function hf(a,b){a.u=!0;Dd(function(){a.u&&kf.call(null,b)})}
var kf=zd;function af(a){Sa.call(this,a)}
C(af,Sa);af.prototype.name="cancel";function M(a){J.call(this);this.o=1;this.l=[];this.m=0;this.i=[];this.j={};this.B=!!a}
C(M,J);m=M.prototype;m.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.o;this.i[e]=a;this.i[e+1]=b;this.i[e+2]=c;this.o=e+3;d.push(e);return e};
function lf(a,b,c,d){if(b=a.j[b]){var e=a.i;(b=$a(b,function(f){return e[f+1]==c&&e[f+2]==d}))&&a.da(b)}}
m.da=function(a){var b=this.i[a];if(b){var c=this.j[b];0!=this.m?(this.l.push(a),this.i[a+1]=Ea):(c&&ab(c,a),delete this.i[a],delete this.i[a+1],delete this.i[a+2])}return!!b};
m.W=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.B)for(e=0;e<c.length;e++){var g=c[e];mf(this.i[g+1],this.i[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.i[g+1].apply(this.i[g+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;c=this.l.pop();)this.da(c)}}return 0!=e}return!1};
function mf(a,b,c){Dd(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.j[a];b&&(D(b,this.da,this),delete this.j[a])}else this.i.length=0,this.j={}};
m.D=function(){M.O.D.call(this);this.clear();this.l.length=0};function nf(a){this.h=a}
nf.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,Me(b))};
nf.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
nf.prototype.remove=function(a){this.h.remove(a)};function of(a){this.h=a}
C(of,nf);function pf(a){this.data=a}
function qf(a){return void 0===a||a instanceof pf?a:new pf(a)}
of.prototype.set=function(a,b){of.O.set.call(this,a,qf(b))};
of.prototype.i=function(a){a=of.O.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
of.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function rf(a){this.h=a}
C(rf,of);rf.prototype.set=function(a,b,c){if(b=qf(b)){if(c){if(c<Date.now()){rf.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}rf.O.set.call(this,a,b)};
rf.prototype.i=function(a){var b=rf.O.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())rf.prototype.remove.call(this,a);else return b}};function sf(){}
;function tf(){}
C(tf,sf);tf.prototype[Symbol.iterator]=function(){return ae(this.M(!0)).i()};
tf.prototype.clear=function(){var a=Array.from(this);a=u(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function uf(a){this.h=a}
C(uf,tf);m=uf.prototype;m.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
m.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeItem(a)};
m.M=function(a){var b=0,c=this.h,d=new $d;d.h=function(){if(b>=c.length)throw Zd;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
d.next=d.h.bind(d);return d};
m.clear=function(){this.h.clear()};
m.key=function(a){return this.h.key(a)};function vf(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
C(vf,uf);function wf(a,b){this.i=a;this.h=null;if(ic&&!(9<=Number(vc))){xf||(xf=new fe);this.h=xf.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),xf.set(a,this.h));try{this.h.load(this.i)}catch(c){this.h=null}}}
C(wf,tf);var yf={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},xf=null;function zf(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return yf[b]})}
m=wf.prototype;m.isAvailable=function(){return!!this.h};
m.set=function(a,b){this.h.setAttribute(zf(a),b);Af(this)};
m.get=function(a){a=this.h.getAttribute(zf(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeAttribute(zf(a));Af(this)};
m.M=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new $d;d.h=function(){if(b>=c.length)throw Zd;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
d.next=d.h.bind(d);return d};
m.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Af(this)};
function Af(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Bf(a,b){this.i=a;this.h=b+"::"}
C(Bf,tf);Bf.prototype.set=function(a,b){this.i.set(this.h+a,b)};
Bf.prototype.get=function(a){return this.i.get(this.h+a)};
Bf.prototype.remove=function(a){this.i.remove(this.h+a)};
Bf.prototype.M=function(a){var b=this.i.M(!0),c=this,d=new $d;d.h=function(){for(var e=b.next();e.substr(0,c.h.length)!=c.h;)e=b.next();return a?e.substr(c.h.length):c.i.get(e)};
d.next=d.h.bind(d);return d};function Cf(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var Df,Ef,Ff=y.window,Gf=(null===(Df=null===Ff||void 0===Ff?void 0:Ff.yt)||void 0===Df?void 0:Df.config_)||(null===(Ef=null===Ff||void 0===Ff?void 0:Ff.ytcfg)||void 0===Ef?void 0:Ef.data_)||{};z("yt.config_",Gf,void 0);function N(a){for(var b=0;b<arguments.length;++b);Cf(Gf,arguments)}
function E(a,b){return a in Gf?Gf[a]:b}
;var Hf=[];function If(a){Hf.forEach(function(b){return b(a)})}
function Jf(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Kf(b)}}:a}
function Kf(a){var b=B("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=E("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),N("ERRORS",b));If(a)}
function Lf(a){var b=B("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=E("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),N("ERRORS",b))}
;var Mf=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};z("yt.msgs_",Mf,void 0);function Nf(a){Cf(Mf,arguments)}
;function O(a){a=Of(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Pf(a,b){a=Of(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function Of(a){var b=E("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:E("EXPERIMENT_FLAGS",{})[a]}
;var Qf=0,Rf=lc?"webkit":kc?"moz":ic?"ms":hc?"o":"";z("ytDomDomGetNextId",B("ytDomDomGetNextId")||function(){return++Qf},void 0);var Sf={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Tf(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Sf||(this[b]=a[b]);this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?
d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function Uf(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
Tf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Tf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Tf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var fb=y.ytEventsEventsListeners||{};z("ytEventsEventsListeners",fb,void 0);var Vf=y.ytEventsEventsCounter||{count:0};z("ytEventsEventsCounter",Vf,void 0);
function Wf(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return eb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Ia(e[4])&&Ia(d)&&jb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var Xf=Va(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Yf(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Wf(a,b,c,d);if(e)return e;e=++Vf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Tf(h);if(!Vc(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Tf(h);
h.currentTarget=a;return c.call(a,h)};
g=Jf(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Xf()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);fb[e]=[a,b,c,g,d];return e}
function Zf(a){a&&("string"==typeof a&&(a=[a]),D(a,function(b){if(b in fb){var c=fb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Xf()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete fb[b]}}))}
;var $f=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function ag(a,b){"function"===typeof a&&(a=Jf(a));return window.setTimeout(a,b)}
function bg(a){window.clearTimeout(a)}
;function cg(a){this.C=a;this.i=null;this.m=0;this.B=null;this.o=0;this.j=[];for(a=0;4>a;a++)this.j.push(0);this.l=0;this.J=Yf(window,"mousemove",Oa(this.K,this));a=Oa(this.F,this);"function"===typeof a&&(a=Jf(a));this.L=window.setInterval(a,25)}
C(cg,J);cg.prototype.K=function(a){void 0===a.h&&Uf(a);var b=a.h;void 0===a.i&&Uf(a);this.i=new Nc(b,a.i)};
cg.prototype.F=function(){if(this.i){var a=$f();if(0!=this.m){var b=this.B,c=this.i,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.m);this.j[this.l]=.5<Math.abs((d-this.o)/this.o)?1:0;for(c=b=0;4>c;c++)b+=this.j[c]||0;3<=b&&this.C();this.o=d}this.m=a;this.B=this.i;this.l=(this.l+1)%4}};
cg.prototype.D=function(){window.clearInterval(this.L);Zf(this.J)};function dg(){}
function eg(a,b){return fg(a,0,b)}
function gg(a,b){return fg(a,1,b)}
;function hg(){dg.apply(this,arguments)}
v(hg,dg);function fg(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=B("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):ag(a,c||0)}
function ig(a){if(void 0===a||!Number.isNaN(Number(a))){var b=B("yt.scheduler.instance.cancelJob");b?b(a):bg(a)}}
hg.prototype.start=function(){var a=B("yt.scheduler.instance.start");a&&a()};
hg.prototype.pause=function(){var a=B("yt.scheduler.instance.pause");a&&a()};hg.h||(hg.h=new hg);var jg={};
function kg(a){var b=void 0===a?{}:a;a=void 0===b.Va?!0:b.Va;b=void 0===b.kb?!1:b.kb;if(null==B("_lact",window)){var c=parseInt(E("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;z("_lact",c,window);z("_fact",c,window);-1==c&&lg();Yf(document,"keydown",lg);Yf(document,"keyup",lg);Yf(document,"mousedown",lg);Yf(document,"mouseup",lg);a&&(b?Yf(window,"touchmove",function(){mg("touchmove",200)},{passive:!0}):(Yf(window,"resize",function(){mg("resize",200)}),Yf(window,"scroll",function(){mg("scroll",200)})));
new cg(function(){mg("mouse",100)});
Yf(document,"touchstart",lg,{passive:!0});Yf(document,"touchend",lg,{passive:!0})}}
function mg(a,b){jg[a]||(jg[a]=!0,gg(function(){lg();jg[a]=!1},b))}
function lg(){null==B("_lact",window)&&kg();var a=Date.now();z("_lact",a,window);-1==B("_fact",window)&&z("_fact",a,window);(a=B("ytglobal.ytUtilActivityCallback_"))&&a()}
function ng(){var a=B("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;function og(){var a=pg;B("yt.ads.biscotti.getId_")||z("yt.ads.biscotti.getId_",a,void 0)}
function qg(a){z("yt.ads.biscotti.lastId_",a,void 0)}
;var rg=/^[\w.]*$/,sg={q:!0,search_query:!0};function tg(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=ug(f[0]||""),h=ug(f[1]||"");g in c?Array.isArray(c[g])?cb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(p){var k=p,l=f[0],n=String(tg);k.args=[{key:l,value:f[1],query:a,method:vg==n?"unchanged":n}];sg.hasOwnProperty(l)||Lf(k)}}return c}
var vg=String(tg);function wg(a){var b=[];db(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];D(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function xg(a){"?"==a.charAt(0)&&(a=a.substr(1));return tg(a,"&")}
function yg(){var a=window.location.href;return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),xg(1<a.length?a[1]:a[0])):{}}
function zg(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=xg(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return dc(a,e)+d}
function Ag(a){if(!b)var b=window.location.href;var c=a.match(Zb)[1]||null,d=ac(a);c&&d?(a=a.match(Zb),b=b.match(Zb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?ac(b)==d&&(Number(b.match(Zb)[4]||null)||null)==(Number(a.match(Zb)[4]||null)||null):!0;return a}
function ug(a){return a&&a.match(rg)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function Bg(a){var b=Cg;a=void 0===a?B("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=gd;e.flash="0";a:{try{var f=b.h.top.location.href}catch(Ua){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?H:g;try{var h=g.history.length}catch(Ua){h=0}e.u_his=h;e.u_java=!!H.navigator&&"unknown"!==typeof H.navigator.javaEnabled&&!!H.navigator.javaEnabled&&H.navigator.javaEnabled();H.screen&&(e.u_h=H.screen.height,e.u_w=H.screen.width,
e.u_ah=H.screen.availHeight,e.u_aw=H.screen.availWidth,e.u_cd=H.screen.colorDepth);H.navigator&&H.navigator.plugins&&(e.u_nplug=H.navigator.plugins.length);H.navigator&&H.navigator.mimeTypes&&(e.u_nmime=H.navigator.mimeTypes.length);h=b.h;try{var k=h.screenX;var l=h.screenY}catch(Ua){}try{var n=h.outerWidth;var p=h.outerHeight}catch(Ua){}try{var r=h.innerWidth;var q=h.innerHeight}catch(Ua){}try{var A=h.screenLeft;var I=h.screenTop}catch(Ua){}try{r=h.innerWidth,q=h.innerHeight}catch(Ua){}try{var K=
h.screen.availWidth;var X=h.screen.availTop}catch(Ua){}k=[A,I,k,l,K,X,n,p,r,q];l=b.h.top;try{var Y=(l||window).document,L="CSS1Compat"==Y.compatMode?Y.documentElement:Y.body;var T=(new Oc(L.clientWidth,L.clientHeight)).round()}catch(Ua){T=new Oc(-12245933,-12245933)}Y=T;T={};L=new td;y.SVGElement&&y.document.createElementNS&&L.set(0);l=$c();l["allow-top-navigation-by-user-activation"]&&L.set(1);l["allow-popups-to-escape-sandbox"]&&L.set(2);y.crypto&&y.crypto.subtle&&L.set(3);y.TextDecoder&&y.TextEncoder&&
L.set(4);L=ud(L);T.bc=L;T.bih=Y.height;T.biw=Y.width;T.brdim=k.join();b=b.i;b=(T.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,T.wgl=!!H.WebGLRenderingContext,T);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var Cg=new function(){var a=window.document;this.h=window;this.i=a};
z("yt.ads_.signals_.getAdSignalsString",function(a){return wg(Bg(a))},void 0);var Dg="XMLHttpRequest"in y?function(){return new XMLHttpRequest}:null;
function Eg(){if(!Dg)return null;var a=Dg();return"open"in a?a:null}
function Fg(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;var Gg={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},
Hg="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address client_dev_root_url".split(" "),Ig=!1;
function Jg(a,b){b=void 0===b?{}:b;var c=Ag(a),d=O("web_ajax_ignore_global_headers_if_set"),e;for(e in Gg){var f=E(Gg[e]);!f||!c&&ac(a)||d&&void 0!==b[e]||(b[e]=f)}if(c||!ac(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!ac(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}if(c||!ac(a))b["X-YouTube-Ad-Signals"]=wg(Bg(void 0));return b}
function Kg(a){var b=window.location.search,c=ac(a);O("debug_handle_relative_url_for_query_forward_killswitch")||c||!Ag(a)||(c=document.location.hostname);var d=$b(a.match(Zb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=xg(b),f={};D(Hg,function(g){e[g]&&(f[g]=e[g])});
return zg(a,f||{},!1)}
function Lg(a,b){var c=b.format||"JSON";a=Mg(a,b);var d=Ng(a,b),e=!1,f=Og(a,function(k){if(!e){e=!0;h&&bg(h);var l=Fg(k),n=null,p=400<=k.status&&500>k.status,r=500<=k.status&&600>k.status;if(l||p||r)n=Pg(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(n&&n.return_code,10);break a;case "RAW":l=!0;break a}l=!!n}n=n||{};p=b.context||y;l?b.onSuccess&&b.onSuccess.call(p,k,n):b.onError&&b.onError.call(p,k,n);b.onFinish&&b.onFinish.call(p,k,n)}},b.method,
d,b.headers,b.responseType,b.withCredentials);
if(b.onTimeout&&0<b.timeout){var g=b.onTimeout;var h=ag(function(){e||(e=!0,f.abort(),bg(h),g.call(b.context||y,f))},b.timeout)}return f}
function Mg(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=E("XSRF_FIELD_NAME",void 0);if(b=b.urlParams)b[c]&&delete b[c],a=zg(a,b||{},!0);return a}
function Ng(a,b){var c=E("XSRF_FIELD_NAME",void 0),d=E("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.postParams,g=E("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||ac(a)&&!b.withCredentials&&ac(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=xg(e),nb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):cc(e));f=e||f&&!gb(f);!Ig&&f&&
"POST"!=b.method&&(Ig=!0,Kf(Error("AJAX request with postData should use POST")));return e}
function Pg(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Lf(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Qg(a):null)e={},D(a.getElementsByTagName("*"),function(g){e[g.tagName]=Rg(g)})}d&&Sg(e);
return e}
function Sg(a){if(Ia(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Rb(a[b],null);a[c]=d}else Sg(a[b])}}
function Qg(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Rg(a){var b="";D(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Og(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Jf(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=Eg();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;O("debug_forward_web_query_parameters")&&(a=Kg(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Jg(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var Tg=wc||xc;function Ug(a){var b=Mb;return b?0<=b.toLowerCase().indexOf(a):!1}
;var Vg={},Wg=0;
function Xg(a,b,c,d,e){e=void 0===e?"":e;if(a)if(c&&!Ug("cobalt")){if(a){a instanceof Fb||(a="object"==typeof a&&a.Y?a.X():String(a),Kb.test(a)?a=new Fb(a,Gb):(a=String(a),a=a.replace(/(%0A|%0D)/g,""),a=(b=a.match(Jb))&&Ib.test(b[1])?new Fb(a,Gb):null));a=Hb(a||Lb);if("about:invalid#zClosurez"===a||a.startsWith("data"))a="";else{if(!(a instanceof Pb)){b="object"==typeof a;var f=null;b&&a.va&&(f=a.ra());a=Rb(xb(b&&a.Y?a.X():String(a)),f)}a instanceof Pb&&a.constructor===Pb?a=a.h:(Ga(a),a="type_error:SafeHtml");
a=encodeURIComponent(String(Me(a.toString())))}/^[\s\xa0]*$/.test(a)||(a=Sc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))}}else if(e)Og(a,b,"POST",e,d);else if(E("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d)Og(a,b,"GET","",d);else{b:{try{var g=new Ta({url:a});if(g.j&&g.i||g.l){var h=$b(a.match(Zb)[5]||null),k;if(!(k=!h||!h.endsWith("/aclk"))){var l=a.search(ec);d:{for(c=0;0<=(c=a.indexOf("ri",
c))&&c<l;){var n=a.charCodeAt(c-1);if(38==n||63==n){var p=a.charCodeAt(c+2);if(!p||61==p||38==p||35==p){var r=c;break d}}c+=3}r=-1}if(0>r)var q=null;else{var A=a.indexOf("&",r);if(0>A||A>l)A=l;r+=3;q=decodeURIComponent(a.substr(r,A-r).replace(/\+/g," "))}k="1"!==q}f=!k;break b}}catch(I){}f=!1}f?Yg(a)?(b&&b(),f=!0):f=!1:f=!1;f||Zg(a,b)}}
function $g(a,b,c){c=void 0===c?"":c;Yg(a,c)?b&&b():Xg(a,b,void 0,void 0,c)}
function Yg(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function Zg(a,b){var c=new Image,d=""+Wg++;Vg[d]=c;c.onload=c.onerror=function(){b&&Vg[d]&&b();delete Vg[d]};
c.src=a}
;var ah=y.ytPubsubPubsubInstance||new M,bh=y.ytPubsubPubsubSubscribedKeys||{},ch=y.ytPubsubPubsubTopicToKeys||{},dh=y.ytPubsubPubsubIsSynchronous||{};function eh(a,b){var c=fh();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){bh[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{dh[a]?f():ag(f,0)}catch(g){Kf(g)}},void 0);
bh[d]=!0;ch[a]||(ch[a]=[]);ch[a].push(d);return d}return 0}
function gh(a){var b=fh();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),D(a,function(c){b.unsubscribeByKey(c);delete bh[c]}))}
function hh(a,b){var c=fh();c&&c.publish.apply(c,arguments)}
function ih(a){var b=fh();if(b)if(b.clear(a),a)jh(a);else for(var c in ch)jh(c)}
function fh(){return y.ytPubsubPubsubInstance}
function jh(a){ch[a]&&(a=ch[a],D(a,function(b){bh[b]&&delete bh[b]}),a.length=0)}
M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.da;M.prototype.publish=M.prototype.W;M.prototype.clear=M.prototype.clear;z("ytPubsubPubsubInstance",ah,void 0);z("ytPubsubPubsubTopicToKeys",ch,void 0);z("ytPubsubPubsubIsSynchronous",dh,void 0);z("ytPubsubPubsubSubscribedKeys",bh,void 0);var kh=window,P=kh.ytcsi&&kh.ytcsi.now?kh.ytcsi.now:kh.performance&&kh.performance.timing&&kh.performance.now&&kh.performance.timing.navigationStart?function(){return kh.performance.timing.navigationStart+kh.performance.now()}:function(){return(new Date).getTime()};var lh=Pf("initial_gel_batch_timeout",2E3),mh=Math.pow(2,16)-1,nh=null,oh=0,ph=void 0,qh=0,rh=0,sh=0,th=!0,uh=y.ytLoggingTransportGELQueue_||new Map;z("ytLoggingTransportGELQueue_",uh,void 0);var vh=y.ytLoggingTransportTokensToCttTargetIds_||{};z("ytLoggingTransportTokensToCttTargetIds_",vh,void 0);
function wh(a,b){if("log_event"===a.endpoint){var c="";a.ja?c="visitorOnlyApprovedKey":a.G&&(vh[a.G.token]=xh(a.G),c=a.G.token);var d=uh.get(c)||[];uh.set(c,d);d.push(a.payload);b&&(ph=new b);a=Pf("tvhtml5_logging_max_batch")||Pf("web_logging_max_batch")||100;b=P();d.length>=a?yh({writeThenSend:!0}):10<=b-sh&&(zh(),sh=b)}}
function Ah(a,b){if("log_event"===a.endpoint){var c="";a.ja?c="visitorOnlyApprovedKey":a.G&&(vh[a.G.token]=xh(a.G),c=a.G.token);var d=new Map;d.set(c,[a.payload]);b&&(ph=new b);return new Te(function(e){ph&&ph.isReady()?Bh(d,e,{bypassNetworkless:!0}):e()})}}
function yh(a){a=void 0===a?{}:a;new Te(function(b){bg(qh);bg(rh);rh=0;ph&&ph.isReady()?(Bh(uh,b,a),uh.clear()):(zh(),b())})}
function zh(){O("web_gel_timeout_cap")&&!rh&&(rh=ag(function(){yh({writeThenSend:!0})},6E4));
bg(qh);var a=E("LOGGING_BATCH_TIMEOUT",Pf("web_gel_debounce_ms",1E4));O("shorten_initial_gel_batch_timeout")&&th&&(a=lh);qh=ag(function(){yh({writeThenSend:!0})},a)}
function Bh(a,b,c){var d=ph;c=void 0===c?{}:c;var e=Math.round(P()),f=a.size;a=u(a);for(var g=a.next();!g.done;g=a.next()){var h=u(g.value);g=h.next().value;var k=h.next().value;h=lb({context:Ch(d.config_||Dh())});h.events=k;(k=vh[g])&&Eh(h,g,k);delete vh[g];g="visitorOnlyApprovedKey"===g;Fh(h,e,g);O("send_beacon_before_gel")&&window.navigator&&window.navigator.sendBeacon&&!c.writeThenSend&&$g("/generate_204");Gh(d,"log_event",h,{retry:!0,onSuccess:function(){f--;f||b();oh=Math.round(P()-e)},
onError:function(){f--;f||b()},
Ka:c,ja:g});th=!1}}
function Fh(a,b,c){a.requestTimeMs=String(b);O("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=E("EVENT_ID",void 0))&&((c=E("BATCH_CLIENT_COUNTER",void 0)||0)||(c=Math.floor(Math.random()*mh/2)),c++,c>mh&&(c=1),N("BATCH_CLIENT_COUNTER",c),b={serializedEventId:b,clientCounter:String(c)},a.serializedClientEventId=b,nh&&oh&&O("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:nh,roundtripMs:String(oh)}),nh=b,oh=0)}
function Eh(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function xh(a){var b={};a.videoId?b.videoId=a.videoId:a.playlistId&&(b.playlistId=a.playlistId);return b}
;var Hh=y.ytLoggingGelSequenceIdObj_||{};z("ytLoggingGelSequenceIdObj_",Hh,void 0);function Ih(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||P());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=ng();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};O("log_sequence_info_on_gel_web")&&d.U&&(a=e.context,b=d.U,Hh[b]=b in Hh?Hh[b]+1:0,a.sequence={index:Hh[b],groupKey:b},d.Ta&&delete Hh[d.U]);(d.ml?Ah:wh)({endpoint:"log_event",payload:e,G:d.G,ja:d.ja},c)}
;function Jh(){if(!y.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return y.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":y.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":y.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":y.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function Kh(a,b,c,d,e){od.set(""+a,b,{xa:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
;var Lh=B("ytglobal.prefsUserPrefsPrefs_")||{};z("ytglobal.prefsUserPrefsPrefs_",Lh,void 0);function Mh(){this.h=E("ALT_PREF_COOKIE_NAME","PREF");this.i=E("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=od.get(""+this.h,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Lh[d]=c.toString())}}}
Mh.prototype.get=function(a,b){Nh(a);Oh(a);a=void 0!==Lh[a]?Lh[a].toString():null;return null!=a?a:b?b:""};
Mh.prototype.set=function(a,b){Nh(a);Oh(a);if(null==b)throw Error("ExpectedNotNull");Lh[a]=b.toString()};
Mh.prototype.remove=function(a){Nh(a);Oh(a);delete Lh[a]};
Mh.prototype.clear=function(){for(var a in Lh)delete Lh[a]};
function Oh(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Nh(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Ph(a){a=void 0!==Lh[a]?Lh[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Fa(Mh);var Qh={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Rh={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function Sh(){var a=y.navigator;return a?a.connection:void 0}
;function Th(){return"INNERTUBE_API_KEY"in Gf&&"INNERTUBE_API_VERSION"in Gf}
function Dh(){return{innertubeApiKey:E("INNERTUBE_API_KEY",void 0),innertubeApiVersion:E("INNERTUBE_API_VERSION",void 0),Wa:E("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Xa:E("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:E("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Za:E("INNERTUBE_CONTEXT_HL",void 0),Ya:E("INNERTUBE_CONTEXT_GL",void 0),ab:E("INNERTUBE_HOST_OVERRIDE",void 0)||"",cb:!!E("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),bb:!!E("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:E("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function Ch(a){var b={client:{hl:a.Za,gl:a.Ya,clientName:a.Xa,clientVersion:a.innertubeContextClientVersion,configInfo:a.Wa}};O("web_include_ua_it_context")&&navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=y.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=E("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=[];var d=E("EXPERIMENTS_FORCED_FLAGS",{});for(e in d)c.push({key:e,value:String(d[e])});var e=E("EXPERIMENT_FLAGS",{});for(var f in e)f.startsWith("force_")&&
void 0===d[f]&&c.push({key:f,value:String(e[f])});0<c.length&&(b.request={internalExperimentFlags:c});f=b.client.clientName;if("WEB"===f||"MWEB"===f||1===f||2===f){if(!O("web_include_display_mode_killswitch")){var g;b.client.mainAppWebInfo=null!=(g=b.client.mainAppWebInfo)?g:{};b.client.mainAppWebInfo.webDisplayMode=Jh()}}else if(g=b.client.clientName,("WEB_REMIX"===g||76===g)&&!O("music_web_display_mode_killswitch")){var h;b.client.Ja=null!=(h=b.client.Ja)?h:{};b.client.Ja.webDisplayMode=Jh()}a.appInstallData&&
(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);E("DELEGATED_SESSION_ID")&&!O("pageid_as_header_web")&&(b.user={onBehalfOfUser:E("DELEGATED_SESSION_ID")});a:{if(h=Sh()){a=Qh[h.type||"unknown"]||"CONN_UNKNOWN";h=Qh[h.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===a&&"CONN_UNKNOWN"!==h&&(a=h);if("CONN_UNKNOWN"!==a)break a;if("CONN_UNKNOWN"!==h){a=h;break a}}a=void 0}a&&(b.client.connectionType=a);O("web_log_effective_connection_type")&&
(a=Sh(),a=null!==a&&void 0!==a&&a.effectiveType?Rh.hasOwnProperty(a.effectiveType)?Rh[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,a&&(b.client.effectiveConnectionType=a));a=Object;h=a.assign;g=b.client;f={};e=u(Object.entries(xg(E("DEVICE",""))));for(c=e.next();!c.done;c=e.next())d=u(c.value),c=d.next().value,d=d.next().value,"cbrand"===c?f.deviceMake=d:"cmodel"===c?f.deviceModel=d:"cbr"===c?f.browserName=d:"cbrver"===c?f.browserVersion=d:"cos"===c?f.osName=d:"cosver"===c?f.osVersion=
d:"cplatform"===c&&(f.platform=d);b.client=h.call(a,g,f);return b}
function Uh(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||E("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Zk||E("AUTHORIZATION"))||(a?b="Bearer "+B("gapi.auth.getToken")().Xk:b=sd([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=E("SESSION_INDEX",0),O("pageid_as_header_web")&&(d["X-Goog-PageId"]=E("DELEGATED_SESSION_ID")));return d}
;function Vh(a){a=Object.assign({},a);delete a.Authorization;var b=sd();if(b){var c=new Md;c.update(E("INNERTUBE_API_KEY",void 0));c.update(b);a.hash=Bc(c.digest())}return a}
;function Wh(a){var b=new vf;(b=b.isAvailable()?a?new Bf(b,a):b:null)||(a=new wf(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new rf(a):null;this.i=document.domain||window.location.hostname}
Wh.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Me(b))}catch(f){return}else e=escape(b);Kh(a,e,c,this.i)};
Wh.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=od.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Wh.prototype.remove=function(a){this.h&&this.h.remove(a);var b=this.i;od.remove(""+a,"/",void 0===b?"youtube.com":b)};var Xh;function Yh(){Xh||(Xh=new Wh("yt.innertube"));return Xh}
function Zh(a,b,c,d){if(d)return null;d=Yh().get("nextId",!0)||1;var e=Yh().get("requests",!0)||{};e[d]={method:a,request:b,authState:Vh(c),requestTime:Math.round(P())};Yh().set("nextId",d+1,86400,!0);Yh().set("requests",e,86400,!0);return d}
function $h(a){var b=Yh().get("requests",!0)||{};delete b[a];Yh().set("requests",b,86400,!0)}
function ai(a){var b=Yh().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(P())-d.requestTime)){var e=d.authState,f=Vh(Uh(!1));jb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(P())),Gh(a,d.method,e,{}));delete b[c]}}Yh().set("requests",b,86400,!0)}}
;function bi(a,b){this.version=a;this.args=b}
;function ci(a,b){this.topic=a;this.h=b}
ci.prototype.toString=function(){return this.topic};var di=B("ytPubsub2Pubsub2Instance")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.da;M.prototype.publish=M.prototype.W;M.prototype.clear=M.prototype.clear;z("ytPubsub2Pubsub2Instance",di,void 0);var ei=B("ytPubsub2Pubsub2SubscribedKeys")||{};z("ytPubsub2Pubsub2SubscribedKeys",ei,void 0);var fi=B("ytPubsub2Pubsub2TopicToKeys")||{};z("ytPubsub2Pubsub2TopicToKeys",fi,void 0);var gi=B("ytPubsub2Pubsub2IsAsync")||{};z("ytPubsub2Pubsub2IsAsync",gi,void 0);
z("ytPubsub2Pubsub2SkipSubKey",null,void 0);function hi(a,b){var c=ii();c&&c.publish.call(c,a.toString(),a,b)}
function ji(a){var b=ki,c=ii();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=B("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(ei[d])try{if(f&&b instanceof ci&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.V){var l=new h;h.V=l.version}var n=h.V}catch(p){}if(!n||k.version!=n)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{f=Reflect.construct(h,
bb(k.args))}catch(p){throw p.message="yt.pubsub2.Data.deserialize(): "+p.message,p;}}catch(p){throw p.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+p.message,p;}a.call(window,f)}catch(p){Kf(p)}},gi[b.toString()]?B("yt.scheduler.instance")?gg(g):ag(g,0):g())});
ei[d]=!0;fi[b.toString()]||(fi[b.toString()]=[]);fi[b.toString()].push(d);return d}
function li(){var a=mi,b=ji(function(c){a.apply(void 0,arguments);ni(b)});
return b}
function ni(a){var b=ii();b&&("number"===typeof a&&(a=[a]),D(a,function(c){b.unsubscribeByKey(c);delete ei[c]}))}
function ii(){return B("ytPubsub2Pubsub2Instance")}
;function oi(){}
;var pi=function(){var a;return function(){a||(a=new Wh("ytidb"));return a}}();
function qi(){var a;return null===(a=pi())||void 0===a?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
function ri(a){this.h=void 0===a?!1:a;(a=qi())||(a={hasSucceededOnce:this.h});this.i=a;var b,c;O("ytidb_analyze_is_supported")&&(null===(c=pi())||void 0===c?0:c.h)&&(c={hasSucceededOnce:this.i.hasSucceededOnce||this.h},null===(b=pi())||void 0===b?void 0:b.set("LAST_RESULT_ENTRY_KEY",c,2592E3,!0))}
ri.prototype.isSupported=function(){return this.h};var si=[],ti=!1;function ui(a){ti||(si.push({type:"ERROR",payload:a}),10<si.length&&si.shift())}
function vi(a,b){ti||(si.push({type:"EVENT",eventType:a,payload:b}),10<si.length&&si.shift())}
;function wi(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(c instanceof Array?c:fa(u(c)))}
v(wi,Error);function xi(){if(void 0!==E("DATASYNC_ID",void 0))return E("DATASYNC_ID",void 0);throw new wi("Datasync ID not set","unknown");}
;function yi(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function zi(a){return a.substr(0,a.indexOf(":"))||a}
;var Ai={},Bi=(Ai.AUTH_INVALID="No user identifier specified.",Ai.EXPLICIT_ABORT="Transaction was explicitly aborted.",Ai.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Ai.MISSING_OBJECT_STORE="Object store not created.",Ai.DB_DELETED_BY_MISSING_OBJECT_STORE="Database is deleted because an expected object store was not created.",Ai.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",Ai.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Ai.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",
Ai.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Ai),Ci={},Di=(Ci.AUTH_INVALID="ERROR",Ci.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Ci.EXPLICIT_ABORT="IGNORED",Ci.IDB_NOT_SUPPORTED="ERROR",Ci.MISSING_OBJECT_STORE="ERROR",Ci.DB_DELETED_BY_MISSING_OBJECT_STORE="WARNING",Ci.QUOTA_EXCEEDED="WARNING",Ci.QUOTA_MAYBE_EXCEEDED="WARNING",Ci.UNKNOWN_ABORT="WARNING",Ci),Ei={},Fi=(Ei.AUTH_INVALID=!1,Ei.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Ei.EXPLICIT_ABORT=!1,Ei.IDB_NOT_SUPPORTED=
!1,Ei.MISSING_OBJECT_STORE=!1,Ei.DB_DELETED_BY_MISSING_OBJECT_STORE=!1,Ei.QUOTA_EXCEEDED=!1,Ei.QUOTA_MAYBE_EXCEEDED=!0,Ei.UNKNOWN_ABORT=!0,Ei);function Q(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?Bi[a]:c;d=void 0===d?Di[a]:d;e=void 0===e?Fi[a]:e;wi.call(this,c,Object.assign({name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,Q.prototype)}
v(Q,wi);function Gi(a){Q.call(this,"MISSING_OBJECT_STORE",{gb:a},Bi.MISSING_OBJECT_STORE);Object.setPrototypeOf(this,Gi.prototype)}
v(Gi,Q);var Hi=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Ii(a,b,c){b=zi(b);var d=a instanceof Error?a:Error("Unexpected error: "+a);if(d instanceof Q)return d;if("QuotaExceededError"===d.name)return new Q("QUOTA_EXCEEDED",{objectStoreNames:c,dbName:b});if(yc&&"UnknownError"===d.name)return new Q("QUOTA_MAYBE_EXCEEDED",{objectStoreNames:c,dbName:b});if("InvalidStateError"===d.name&&Hi.some(function(e){return d.message.includes(e)}))return new Q("EXECUTE_TRANSACTION_ON_CLOSED_DB",{objectStoreNames:c,
dbName:b});if("AbortError"===d.name)return new Q("UNKNOWN_ABORT",{objectStoreNames:c,dbName:b},d.message);d.args=[{name:"IdbError",il:d.name,dbName:b,objectStoreNames:c}];d.level="WARNING";return d}
;function Ji(a){if(!a)throw Error();throw a;}
function Ki(a){return a}
function R(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=u(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=u(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.i=a;this.state={status:"PENDING"};this.h=[];this.onRejected=[];try{this.i(c,b)}catch(e){b(e)}}
R.all=function(a){return new R(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={aa:0};f.aa<a.length;f={aa:f.aa},++f.aa)Li(R.resolve(a[f.aa]).then(function(g){return function(h){d[g.aa]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})})};
R.resolve=function(a){return new R(function(b,c){a instanceof R?a.then(b,c):b(a)})};
R.reject=function(a){return new R(function(b,c){c(a)})};
R.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:Ki,e=null!==b&&void 0!==b?b:Ji;return new R(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){Mi(c,c,d,f,g)}),c.onRejected.push(function(){Ni(c,c,e,f,g)})):"FULFILLED"===c.state.status?Mi(c,c,d,f,g):"REJECTED"===c.state.status&&Ni(c,c,e,f,g)})};
function Li(a,b){a.then(void 0,b)}
function Mi(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof R?Oi(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Ni(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof R?Oi(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Oi(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof R?Oi(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Pi(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Qi(a){return new Promise(function(b,c){Pi(a,b,c)})}
function Ri(a){return new R(function(b,c){Pi(a,b,c)})}
;function Si(a,b){return new R(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()})}
;function Ti(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(P());this.i=!1}
m=Ti.prototype;m.add=function(a,b,c){return Ui(this,[a],{mode:"readwrite",I:!0},function(d){return Vi(d,a).add(b,c)})};
m.clear=function(a){return Ui(this,[a],{mode:"readwrite",I:!0},function(b){return Vi(b,a).clear()})};
m.close=function(){var a;this.h.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()};
m.count=function(a,b){return Ui(this,[a],{mode:"readonly",I:!0},function(c){return Vi(c,a).count(b)})};
function Wi(a,b,c){a=a.h.createObjectStore(b,c);return new Xi(a)}
m.delete=function(a,b){return Ui(this,[a],{mode:"readwrite",I:!0},function(c){return Vi(c,a).delete(b)})};
m.get=function(a,b){return Ui(this,[a],{mode:"readonly",I:!0},function(c){return Vi(c,a).get(b)})};
function Yi(a,b,c,d){return Ui(a,[b],{mode:"readwrite",I:!0},function(e){e=Vi(e,b);return Ri(e.h.put(c,d))})}
m.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function Ui(a,b,c,d){return G(a,function f(){var g=this,h,k,l,n,p,r,q,A,I,K,X,Y;return x(f,function(L){switch(L.h){case 1:var T={mode:"readonly",I:!1};"string"===typeof c?T.mode=c:T=c;h=T;g.transactionCount++;k=h.I?Pf("ytidb_transaction_try_count",1):1;l=0;case 2:if(n){L.A(3);break}l++;p=Math.round(P());ra(L,4);r=g.h.transaction(b,h.mode);T=new Zi(r);T=$i(T,d);return w(L,T,6);case 6:return q=L.i,A=Math.round(P()),aj(g,p,A,l,void 0,b.join(),h),L.return(q);case 4:I=sa(L);K=Math.round(P());X=Ii(I,g.h.name,
b.join());if((Y=X instanceof Q&&!X.h)||l>=k)aj(g,p,K,l,X,b.join(),h),n=X;L.A(2);break;case 3:return L.return(Promise.reject(n))}})})}
function aj(a,b,c,d,e,f,g){b=c-b;e?(e instanceof Q&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&vi("QUOTA_EXCEEDED",{dbName:zi(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof Q&&"UNKNOWN_ABORT"===e.type&&(vi("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c-a.j}),a.i=!0),bj(a,!1,d,f,b),ui(e)):bj(a,!0,d,f,b)}
function bj(a,b,c,d,e){vi("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c})}
m.getName=function(){return this.h.name};
function Xi(a){this.h=a}
m=Xi.prototype;m.add=function(a,b){return Ri(this.h.add(a,b))};
m.autoIncrement=function(){return this.h.autoIncrement};
m.clear=function(){return Ri(this.h.clear()).then(function(){})};
m.count=function(a){return Ri(this.h.count(a))};
function cj(a,b){return dj(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
m.delete=function(a){return a instanceof IDBKeyRange?cj(this,a):Ri(this.h.delete(a))};
m.get=function(a){return Ri(this.h.get(a))};
m.index=function(a){return new ej(this.h.index(a))};
m.getName=function(){return this.h.name};
m.keyPath=function(){return this.h.keyPath};
function dj(a,b,c){a=a.h.openCursor(b.query,b.direction);return fj(a).then(function(d){return Si(d,c)})}
function Zi(a){var b=this;this.h=a;this.j=new Map;this.i=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.i){e=Q;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function $i(a,b){var c=new Promise(function(d,e){try{Li(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return u(d).next().value})}
Zi.prototype.abort=function(){this.h.abort();this.i=!0;throw new Q("EXPLICIT_ABORT");};
function Vi(a,b){b=a.h.objectStore(b);var c=a.j.get(b);c||(c=new Xi(b),a.j.set(b,c));return c}
function ej(a){this.h=a}
m=ej.prototype;m.count=function(a){return Ri(this.h.count(a))};
m.delete=function(a){return gj(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
m.get=function(a){return Ri(this.h.get(a))};
m.getKey=function(a){return Ri(this.h.getKey(a))};
m.keyPath=function(){return this.h.keyPath};
m.unique=function(){return this.h.unique};
function gj(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return fj(a).then(function(d){return Si(d,c)})}
function hj(a,b){this.request=a;this.cursor=b}
function fj(a){return Ri(a).then(function(b){return null===b?null:new hj(a,b)})}
m=hj.prototype;m.advance=function(a){this.cursor.advance(a);return fj(this.request)};
m.continue=function(a){this.cursor.continue(a);return fj(this.request)};
m.delete=function(){return Ri(this.cursor.delete()).then(function(){})};
m.getKey=function(){return this.cursor.key};
m.getValue=function(){return this.cursor.value};
m.update=function(a){return Ri(this.cursor.update(a))};function ij(a,b,c){return new Promise(function(d,e){function f(){r||(r=new Ti(g.result,{closed:p}));return r}
var g=self.indexedDB.open(a,b),h=c.blocked,k=c.blocking,l=c.wb,n=c.upgrade,p=c.closed,r;g.addEventListener("upgradeneeded",function(q){try{if(null===q.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");q.dataLoss&&"none"!==q.dataLoss&&vi("IDB_DATA_CORRUPTED",{reason:q.dataLossMessage||"unknown reason",dbName:zi(a)});var A=f(),I=new Zi(g.transaction);n&&n(A,q.oldVersion,q.newVersion,
I);I.done.catch(function(K){e(K)})}catch(K){e(K)}});
g.addEventListener("success",function(){var q=g.result;k&&q.addEventListener("versionchange",function(){k(f())});
q.addEventListener("close",function(){vi("IDB_UNEXPECTEDLY_CLOSED",{dbName:zi(a),dbVersion:q.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function jj(a,b,c){c=void 0===c?{}:c;return ij(a,b,c)}
function kj(a,b){b=void 0===b?{}:b;return G(this,function d(){var e,f,g;return x(d,function(h){e=self.indexedDB.deleteDatabase(a);f=b;(g=f.blocked)&&e.addEventListener("blocked",function(){g()});
return w(h,Qi(e),0)})})}
;function lj(a,b){this.name=a;this.options=b;this.j=!1}
lj.prototype.i=function(a,b,c){c=void 0===c?{}:c;return jj(a,b,c)};
lj.prototype.delete=function(a){a=void 0===a?{}:a;return kj(this.name,a)};
lj.prototype.open=function(){var a=this;if(!this.h){var b,c=function(){a.h===b&&(a.h=void 0)},d={blocking:function(f){f.close()},
closed:c,wb:c,upgrade:this.options.upgrade},e=function(){return G(a,function g(){var h=this,k,l,n;return x(g,function(p){switch(p.h){case 1:return ra(p,2),w(p,h.i(h.name,h.options.version,d),4);case 4:k=p.i;a:{var r=h.options;for(var q=u(Object.keys(r.ma)),A=q.next();!A.done;A=q.next()){A=A.value;var I=r.ma[A];if("boolean"===typeof I){if(!k.h.objectStoreNames.contains(A)){r=A;break a}}else{var K=void 0===I.mb?Number.MAX_VALUE:I.mb;if(k.h.version>=I.Yk&&!(k.h.version>=K)&&!k.h.objectStoreNames.contains(A)){r=
A;break a}}}r=void 0}l=r;if(void 0===l){p.A(5);break}if(h.j){p.A(6);break}h.j=!0;return w(p,h.delete(),7);case 7:return ui(new Q("DB_DELETED_BY_MISSING_OBJECT_STORE",{dbName:h.name,gb:l})),p.return(e());case 6:throw new Gi(l);case 5:return p.return(k);case 2:n=sa(p);if(n instanceof DOMException?"VersionError"===n.name:"DOMError"in self&&n instanceof DOMError?"VersionError"===n.name:n instanceof Object&&"message"in n&&"An attempt was made to open a database using a lower version than the existing version."===
n.message)return p.return(h.i(h.name,void 0,Object.assign(Object.assign({},d),{upgrade:void 0})));c();throw n;}})})};
this.h=b=e()}return this.h};var mj=new lj("YtIdbMeta",{ma:{databases:!0},upgrade:function(a,b){1>b&&Wi(a,"databases",{keyPath:"actualName"})}});
function nj(a){return G(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,mj.open(),2);d=e.i;return e.return(Ui(d,["databases"],{I:!0,mode:"readwrite"},function(f){var g=Vi(f,"databases");return g.get(a.actualName).then(function(h){if(h?a.actualName!==h.actualName||a.publicName!==h.publicName||a.userIdentifier!==h.userIdentifier||a.clearDataOnAuthChange!==h.clearDataOnAuthChange:1)return Ri(g.h.put(a,void 0)).then(function(){})})}))})})}
function oj(a){return G(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,mj.open(),2);d=e.i;return e.return(d.delete("databases",a))})})}
function pj(a){return G(this,function c(){var d,e;return x(c,function(f){return 1==f.h?(d=[],w(f,mj.open(),2)):3!=f.h?(e=f.i,w(f,Ui(e,["databases"],{I:!0,mode:"readonly"},function(g){d.length=0;return dj(Vi(g,"databases"),{},function(h){a(h.getValue())&&d.push(h.getValue());return h.continue()})}),3)):f.return(d)})})}
function qj(){return pj(function(a){return"LogsDatabaseV2"===a.publicName&&void 0!==a.userIdentifier})}
;var rj;
function sj(){return G(this,function b(){var c,d,e;return x(b,function(f){switch(f.h){case 1:if(O("ytidb_is_supported_cache_success_result")&&(c=qi(),null===c||void 0===c?0:c.hasSucceededOnce))return f.return(new ri(!0));var g;if(g=Tg)g=/WebKit\/([0-9]+)/.exec(Mb),g=!!(g&&600<=parseInt(g[1],10));g&&(g=/WebKit\/([0-9]+)/.exec(Mb),g=!(g&&602<=parseInt(g[1],10)));if(g||jc)return f.return(new ri(!1));try{if(d=self,!(d.indexedDB&&d.IDBIndex&&d.IDBKeyRange&&d.IDBObjectStore))return f.return(new ri(!1))}catch(h){return f.return(new ri(!1))}if(!("IDBTransaction"in self&&
"objectStoreNames"in IDBTransaction.prototype))return f.return(new ri(!1));ra(f,2);e={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return w(f,nj(e),4);case 4:return w(f,oj("yt-idb-test-do-not-use"),5);case 5:return f.return(new ri(!0));case 2:return sa(f),f.return(new ri(!1))}})})}
function tj(){if(void 0!==rj)return rj;ti=!0;return rj=sj().then(function(a){ti=!1;return a.isSupported()})}
;function uj(a){try{xi();var b=!0}catch(c){b=!1}if(!b)throw a=new Q("AUTH_INVALID"),ui(a),a;b=xi();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function vj(a,b,c,d){var e,f;return G(this,function h(){var k,l;return x(h,function(n){switch(n.h){case 1:return w(n,wj({caller:"openDbImpl",publicName:a,version:b}),2);case 2:return yi(a),k=c?{actualName:a,publicName:a,userIdentifier:void 0}:uj(a),k.clearDataOnAuthChange=O("remove_clear_data_on_auth_change_killswitch")?null!==(e=d.clearDataOnAuthChange)&&void 0!==e?e:!1:null!==(f=d.clearDataOnAuthChange)&&void 0!==f?f:!0,ra(n,3),w(n,nj(k),5);case 5:return w(n,jj(k.actualName,b,d),6);case 6:return n.return(n.i);
case 3:return l=sa(n),ra(n,7),w(n,oj(k.actualName),9);case 9:n.h=8;n.m=0;break;case 7:sa(n);case 8:throw l;}})})}
function wj(a){return G(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,tj(),2);if(!e.i)throw d=new Q("IDB_NOT_SUPPORTED",{context:a}),ui(d),d;e.h=0})})}
function xj(a,b,c){c=void 0===c?{}:c;return vj(a,b,!1,c)}
function yj(a,b,c){c=void 0===c?{}:c;return vj(a,b,!0,c)}
function zj(a,b){b=void 0===b?{}:b;return G(this,function d(){var e;return x(d,function(f){if(1==f.h)return w(f,tj(),2);if(3!=f.h){if(!f.i)return f.return();yi(a);e=uj(a);return w(f,kj(e.actualName,b),3)}return w(f,oj(e.actualName),0)})})}
function Aj(a,b){var c=this;a=a.map(function(d){return G(c,function f(){return x(f,function(g){return 1==g.h?w(g,kj(d.actualName,b),2):w(g,oj(d.actualName),0)})})});
return Promise.all(a).then(function(){})}
function Bj(){var a=void 0===a?{}:a;return G(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,tj(),2);if(3!=e.h){if(!e.i)return e.return();yi("LogsDatabaseV2");return w(e,qj(),3)}d=e.i;return w(e,Aj(d,a),0)})})}
function Cj(a,b){b=void 0===b?{}:b;return G(this,function d(){return x(d,function(e){if(1==e.h)return w(e,tj(),2);if(3!=e.h){if(!e.i)return e.return();yi(a);return w(e,kj(a,b),3)}return w(e,oj(a),0)})})}
;function Dj(){R.call(this,function(){});
throw Error("Not allowed to instantiate the thennable outside of the core library.");}
v(Dj,R);Dj.reject=R.reject;Dj.resolve=R.resolve;Dj.all=R.all;function Ej(a,b){lj.call(this,a,b);this.options=b;yi(a)}
v(Ej,lj);function Fj(a,b){var c;return function(){c||(c=new Ej(a,b));return c}}
Ej.prototype.i=function(a,b,c){c=void 0===c?{}:c;return(this.options.za?yj:xj)(a,b,Object.assign(Object.assign({},c),{clearDataOnAuthChange:this.options.clearDataOnAuthChange}))};
Ej.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.za?Cj:zj)(this.name,a)};
function Gj(a,b){return Fj(a,b)}
;var Hj;
function Ij(){if(Hj)return Hj();var a={};Hj=Gj("LogsDatabaseV2",{ma:(a.LogsRequestsStore=!0,a.sapisid=!0,a.SWHealthLog=!0,a),za:!O("nwl_use_ytidb_partitioning"),clearDataOnAuthChange:O("nwl_use_ytidb_partitioning"),upgrade:function(b,c,d){2>c&&2<=d&&(Wi(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0}).h.createIndex("newRequest",["status","authHash","interface","timestamp"],{unique:!1}),Wi(b,"sapisid"));3>c&&3<=d&&Wi(b,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).h.createIndex("swHealthNewRequest",["interface",
"timestamp"],{unique:!1})},
version:4});return Hj()}
;function Jj(){return Ij().open()}
function Kj(a){return G(this,function c(){var d,e,f,g,h;return x(c,function(k){switch(k.h){case 1:return d={startTime:P(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},w(k,Jj(),2);case 2:e=k.i;if(5<=e.h.version){f=Object.assign(Object.assign({},a),{options:JSON.parse(JSON.stringify(a.options)),interface:E("INNERTUBE_CONTEXT_CLIENT_NAME",0)});k.A(3);break}return w(k,Lj(),4);case 4:g=k.i,f=Object.assign(Object.assign({},a),{authHash:g,options:JSON.parse(JSON.stringify(a.options)),interface:E("INNERTUBE_CONTEXT_CLIENT_NAME",
0)});case 3:return w(k,Yi(e,"LogsRequestsStore",f),5);case 5:return h=k.i,d.xb=P(),Mj(d),k.return(h)}})})}
function Nj(a){return G(this,function c(){var d,e,f,g,h,k,l,n,p;return x(c,function(r){switch(r.h){case 1:return d={startTime:P(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},w(r,Jj(),2);case 2:e=r.i;f=E("INNERTUBE_CONTEXT_CLIENT_NAME",0);if(5<=e.h.version){g=[a,f,0];h=[a,f,P()];r.A(3);break}return w(r,Lj(),4);case 4:k=r.i,g=[a,k,f,0],h=[a,k,f,P()];case 3:return l=IDBKeyRange.bound(g,h),n=void 0,p=5<=e.h.version?"newRequestV2":"newRequest",w(r,Ui(e,["LogsRequestsStore"],{mode:"readwrite",I:!0},
function(q){return gj(Vi(q,"LogsRequestsStore").index(p),{query:l,direction:"prev"},function(A){A.getValue()&&(n=A.getValue(),"NEW"===a&&(n.status="QUEUED",A.update(n)))})}),5);
case 5:return d.xb=P(),Mj(d),r.return(n)}})})}
function Oj(a){return G(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,Jj(),2);d=e.i;return e.return(Ui(d,["LogsRequestsStore"],{mode:"readwrite",I:!0},function(f){var g=Vi(f,"LogsRequestsStore");return g.get(a).then(function(h){if(h)return h.status="QUEUED",Ri(g.h.put(h,void 0)).then(function(){return h})})}))})})}
function Pj(a){return G(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,Jj(),2);d=e.i;return e.return(Ui(d,["LogsRequestsStore"],{mode:"readwrite",I:!0},function(f){var g=Vi(f,"LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",h.sendCount+=1,Ri(g.h.put(h,void 0)).then(function(){return h})):Dj.resolve(void 0)})}))})})}
function Qj(a){return G(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,Jj(),2);d=e.i;return e.return(d.delete("LogsRequestsStore",a))})})}
function Rj(){return G(this,function b(){var c;return x(b,function(d){if(1==d.h)return w(d,Jj(),2);c=d.i;return d.return(c.clear("LogsRequestsStore"))})})}
function Sj(){return G(this,function b(){var c,d;return x(b,function(e){if(1==e.h)return w(e,Jj(),2);c=e.i;d=P()-2592E6;return w(e,Ui(c,["LogsRequestsStore"],{mode:"readwrite",I:!0},function(f){return dj(Vi(f,"LogsRequestsStore"),{},function(g){if(g.getValue().timestamp<=d)return g.delete().then(function(){return g.continue()})})}),0)})})}
function Tj(){return G(this,function b(){return x(b,function(c){return 1==c.h?w(c,Bj(),2):w(c,Cj("LogsDatabaseV2"),0)})})}
function Lj(){return G(this,function b(){var c;return x(b,function(d){if(1==d.h){oi.h||(oi.h=new oi);var e={};var f=sd([]);f&&(e.Authorization=f,f=void 0,void 0===f&&(f=Number(E("SESSION_INDEX",0)),f=isNaN(f)?0:f),e["X-Goog-AuthUser"]=f,"INNERTUBE_HOST_OVERRIDE"in Gf||(e["X-Origin"]=window.location.origin),O("pageid_as_header_web")&&"DELEGATED_SESSION_ID"in Gf&&(e["X-Goog-PageId"]=E("DELEGATED_SESSION_ID")));e instanceof Te||(f=new Te(Ea),Ue(f,2,e),e=f);return w(d,e,2)}c=d.i;e=d.return;f=Vh(c);var g=
new Md;g.update(JSON.stringify(f,Object.keys(f).sort()));f=g.digest();g="";for(var h=0;h<f.length;h++)g+="0123456789ABCDEF".charAt(Math.floor(f[h]/16))+"0123456789ABCDEF".charAt(f[h]%16);return e.call(d,g)})})}
function Uj(a){return G(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,Jj(),2);d=e.i;return w(e,Yi(d,"sapisid",a,"sapisid"),0)})})}
function Vj(){return G(this,function b(){var c,d;return x(b,function(e){if(1==e.h)return w(e,Jj(),2);if(3!=e.h)return c=e.i,w(e,c.get("sapisid","sapisid"),3);d=e.i;return e.return(d||"")})})}
function Mj(a){var b=Pf("nwl_latency_sampling_rate",.01);.02<b||Math.random()<=b&&hi("nwl_transaction_latency_payload",a)}
;var Wj={},Xj=Gj("ServiceWorkerLogsDatabase",{ma:(Wj.SWHealthLog=!0,Wj),za:!0,upgrade:function(a,b,c){1>b&&1<=c&&Wi(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).h.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function Yj(){return G(this,function b(){var c,d;return x(b,function(e){if(1==e.h)return O("web_clean_sw_logs_store")?w(e,Xj().open(),3):e.A(0);c=e.i;d=P()-2592E6;return w(e,Ui(c,["SWHealthLog"],{mode:"readwrite",I:!0},function(f){return dj(Vi(f,"SWHealthLog"),{},function(g){if(g.getValue().timestamp<=d)return g.delete().then(function(){return g.continue()})})}),0)})})}
function Zj(){return G(this,function b(){var c,d;return x(b,function(e){switch(e.h){case 1:return w(e,Xj().open(),2);case 2:return c=e.i,w(e,c.clear("SWHealthLog"),3);case 3:return w(e,Jj(),4);case 4:return d=e.i,e.return(d.clear("SWHealthLog"))}})})}
;var ak=["__Secure-1PAPISID","SAPISID","__Secure-3PAPISID"];function bk(){for(var a=u(ak),b=a.next();!b.done;b=a.next())if(b=od.get(b.value))return b;return"LOGGED_OUT"}
function ck(){Je.call(this);this.pollingInterval=3E3;this.i=[null,null,null];this.m=!1;dk(this)}
v(ck,Je);function ek(){ck.h||(ck.h=new ck);var a=ck.h;a.m=!0;a.verifyUser();fk(a)}
ck.prototype.verifyUser=function(){var a=dk(this),b=a.fb;if(!a.vb)return fk(this),!0;Ke(this,"ytsessionchange");b&&Ke(this,"ytuserinvalid");fk(this);return!1};
function dk(a){var b=ak.map(function(e){var f;return null!==(f=od.get(e))&&void 0!==f?f:""}),c=b.some(function(e,f){return a.i&&""!==a.i[f]&&""===e}),d=b.some(function(e,f){return a.i&&a.i[f]!==e});
a.i=b;return{fb:c,vb:d}}
function fk(a){a.m&&(gk(a),a.l=eg(function(){a.verifyUser()},a.pollingInterval))}
function gk(a){a.l&&(ig(a.l),a.l=void 0)}
;var hk;function ik(){hk||(hk=new Wh("yt.offline"));return hk}
function jk(a){if(O("offline_error_handling")){var b=ik().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);ik().set("errors",b,2592E3,!0)}}
function kk(){if(O("offline_error_handling")){var a=ik().get("errors",!0);if(a){for(var b in a)if(a[b]){var c=new wi(b,"sent via offline_errors");c.name=a[b].name;c.stack=a[b].stack;c.level=a[b].level;Kf(c)}ik().set("errors",{},2592E3,!0)}}}
;var lk=Pf("network_polling_interval",3E4);function S(){Je.call(this);this.L=0;this.o=this.l=!1;this.B=0;this.m=this.J=!1;this.i=this.ka();this.m=O("validate_network_status");mk(this);nk(this)}
v(S,Je);function ok(){if(!S.h){var a=B("yt.networkStatusManager.instance")||new S;z("yt.networkStatusManager.instance",a,void 0);S.h=a}return S.h}
m=S.prototype;m.N=function(){this.m||this.i===this.ka()||Lf(new wi("NetworkStatusManager isOnline does not match window status"));return this.i};
m.hb=function(a){this.l=!0;if(void 0===a?0:a)this.L||pk(this)};
m.ka=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
m.Ra=function(){this.J=!0};
m.ca=function(a,b){return Je.prototype.ca.call(this,a,b)};
function nk(a){window.addEventListener("online",function(){return G(a,function c(){var d=this;return x(c,function(e){if(1==e.h)return d.m?w(e,d.T(),2):(d.i=!0,d.l&&Ke(d,"ytnetworkstatus-online"),e.A(2));qk(d);d.J&&kk();e.h=0})})})}
function mk(a){window.addEventListener("offline",function(){return G(a,function c(){var d=this;return x(c,function(e){if(1==e.h)return d.m?w(e,d.T(),2):(d.i=!1,d.l&&Ke(d,"ytnetworkstatus-offline"),e.A(2));qk(d);e.h=0})})})}
function pk(a){a.L=eg(function(){return G(a,function c(){var d=this;return x(c,function(e){if(1==e.h){if(O("trigger_nsm_validation_checks_with_nwl")&&!d.i)return w(e,d.T(),3);if(d.ka()){if(!1!==d.i)return e.A(3);d.o=!0;d.B=P();return d.l?d.m?w(e,d.T(),11):(d.i=!0,Ke(d,"ytnetworkstatus-online"),e.A(11)):e.A(11)}if(!0!==d.i)return e.A(3);d.o=!0;d.B=P();return d.l?d.m?w(e,d.T(),3):(d.i=!1,Ke(d,"ytnetworkstatus-offline"),e.A(3)):e.A(3)}if(3!=e.h)return d.J&&kk(),e.A(3);pk(d);e.h=0})})},lk)}
function qk(a){a.o&&(Lf(new wi("NetworkStatusManager state did not match poll",P()-a.B)),a.o=!1)}
m.T=function(a){var b=this;return this.C?this.C:this.C=new Promise(function(c){return G(b,function e(){var f,g,h,k=this;return x(e,function(l){switch(l.h){case 1:return f=window.AbortController?new window.AbortController:void 0,g=null===f||void 0===f?void 0:f.signal,h=!1,ra(l,2,3),f&&(k.K=gg(function(){f.abort()},a||2E4)),w(l,fetch("/generate_204",{method:"HEAD",
signal:g}),5);case 5:h=!0;case 3:ta(l);k.C=void 0;k.K&&ig(k.K);h!==k.i&&(k.i=h,k.i&&k.l?Ke(k,"ytnetworkstatus-online"):k.l&&Ke(k,"ytnetworkstatus-offline"));c(h);ua(l);break;case 2:sa(l),h=!1,l.A(3)}})})})};
S.prototype.sendNetworkCheckRequest=S.prototype.T;S.prototype.listen=S.prototype.ca;S.prototype.enableErrorFlushing=S.prototype.Ra;S.prototype.getWindowStatus=S.prototype.ka;S.prototype.monitorNetworkStatusChange=S.prototype.hb;S.prototype.isNetworkAvailable=S.prototype.N;S.getInstance=ok;function rk(a){a=void 0===a?{}:a;Je.call(this);var b=this;this.l=this.o=0;this.i=ok();var c=B("yt.networkStatusManager.instance.monitorNetworkStatusChange").bind(this.i);c&&c(a.Sa);a.eb&&(c=B("yt.networkStatusManager.instance.enableErrorFlushing").bind(this.i))&&c();if(c=B("yt.networkStatusManager.instance.listen").bind(this.i))a.na?(this.na=a.na,c("ytnetworkstatus-online",function(){sk(b,"publicytnetworkstatus-online")}),c("ytnetworkstatus-offline",function(){sk(b,"publicytnetworkstatus-offline")})):
(c("ytnetworkstatus-online",function(){Ke(b,"publicytnetworkstatus-online")}),c("ytnetworkstatus-offline",function(){Ke(b,"publicytnetworkstatus-offline")}))}
v(rk,Je);rk.prototype.N=function(){var a=B("yt.networkStatusManager.instance.isNetworkAvailable").bind(this.i);return a?a():!0};
rk.prototype.T=function(a){return G(this,function c(){var d=this,e;return x(c,function(f){return(e=B("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(d.i))?f.return(e(a)):f.return(!0)})})};
function sk(a,b){a.na?a.l?(ig(a.o),a.o=gg(function(){a.m!==b&&(Ke(a,b),a.m=b,a.l=P())},a.na-(P()-a.l))):(Ke(a,b),a.m=b,a.l=P()):Ke(a,b)}
;var tk=!1,uk=!1,vk=0,wk=0,xk,yk=y.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:tk,isIdbSupported:uk,potentialEsfErrorCounter:wk};O("export_networkless_options")&&z("ytNetworklessLoggingInitializationOptions",yk,void 0);
function zk(){G(this,function b(){var c,d,e,f;return x(b,function(g){switch(g.h){case 1:return w(g,tj(),2);case 2:(c=g.i)&&(uk=!0);d=O("networkless_logging");if(c&&d)return O("nwl_use_ytidb_partitioning")?w(g,Cj("LogsDatabaseV2"),8):w(g,Bj(),8);if(!c){g.A(0);break}return w(g,Tj(),0);case 8:return ek(),document.addEventListener("ytsessionchange",function(){Ak()}),w(g,Vj(),11);
case 11:e=g.i;f=bk();if(e===f){g.A(12);break}Ak();return w(g,Uj(f),12);case 12:if(!(O("enable_nwl_cleaning_logic")&&Math.random()<=Pf("nwl_cleaning_rate",.1))){g.A(14);break}return w(g,Sj(),15);case 15:return w(g,Yj(),14);case 14:tk=!0;Bk();Ck().N()&&Dk();Ck().ca("publicytnetworkstatus-online",Dk);Ck().ca("publicytnetworkstatus-offline",Ek);if(!O("networkless_immediately_drop_sw_health_store")){g.A(17);break}return w(g,Fk(),17);case 17:if(!O("networkless_immediately_drop_all_requests")){g.A(19);break}return w(g,
Tj(),19);case 19:O("export_networkless_options")&&(yk.isNwlInitialized=tk,yk.isIdbSupported=uk),g.h=0}})})}
function Gk(a,b){function c(d){var e=Ck().N();if(!Hk()||!d||e&&O("vss_networkless_bypass_write"))Ik(a,b);else{var f={url:a,options:b,timestamp:P(),status:"NEW",sendCount:0};Kj(f).then(function(g){f.id=g;(Ck().N()||O("networkless_always_online"))&&Jk(f)}).catch(function(g){Jk(f);
Ck().N()?Kf(g):jk(g)})}}
b=void 0===b?{}:b;O("skip_is_supported_killswitch")?tj().then(function(d){c(d)}):c(Kk())}
function Lk(a,b){function c(d){if(Hk()&&d){var e={url:a,options:b,timestamp:P(),status:"NEW",sendCount:0},f=!1,g=b.onSuccess?b.onSuccess:function(){};
e.options.onSuccess=function(h,k){void 0!==e.id?Qj(e.id):f=!0;g(h,k)};
Ik(e.url,e.options);Kj(e).then(function(h){e.id=h;f&&Qj(e.id)}).catch(function(h){Ck().N()?Kf(h):jk(h)})}else Ik(a,b)}
b=void 0===b?{}:b;O("skip_is_supported_killswitch")?tj().then(function(d){c(d)}):c(Kk())}
function Dk(){var a=this;vk||(vk=gg(function(){return G(a,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,Nj("NEW"),2);if(3!=e.h)return d=e.i,d?w(e,Jk(d),3):(Ek(),e.return());if(!O("nwl_throttling_race_fix")||vk)vk=0,Dk();e.h=0})})},100))}
function Ek(){ig(vk);vk=0}
function Jk(a){return G(this,function c(){var d;return x(c,function(e){switch(e.h){case 1:if(void 0===a.id){e.A(2);break}return w(e,Oj(a.id),3);case 3:(d=e.i)?a=d:Lf(Error("The request cannot be found in the database."));case 2:if(Mk(a,2592E6)){e.A(4);break}Lf(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===a.id){e.A(5);break}return w(e,Qj(a.id),5);case 5:return e.return();case 4:var f=a=Nk(a),g,h;if(null===(h=null===(g=null===f||void 0===f?void 0:f.options)||void 0===
g?void 0:g.postParams)||void 0===h?0:h.requestTimeMs)f.options.postParams.requestTimeMs=Math.round(P());(a=f)&&Ik(a.url,a.options);e.h=0}})})}
function Nk(a){var b=this,c=a.options.onError?a.options.onError:function(){};
a.options.onError=function(e,f){return G(b,function h(){return x(h,function(k){switch(k.h){case 1:if(!(O("trigger_nsm_validation_checks_with_nwl")&&(B("ytNetworklessLoggingInitializationOptions")?yk.potentialEsfErrorCounter:wk)<=Pf("potential_esf_error_limit",10))){k.A(2);break}return w(k,Ck().T(),3);case 3:if(Ck().N())B("ytNetworklessLoggingInitializationOptions")&&yk.potentialEsfErrorCounter++,wk++;else return c(e,f),k.return();case 2:if(void 0===(null===a||void 0===a?void 0:a.id)){k.A(4);break}return 1>
a.sendCount?w(k,Pj(a.id),8):w(k,Qj(a.id),4);case 8:gg(function(){Ck().N()&&Dk()},5E3);
case 4:c(e,f),k.h=0}})})};
var d=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(e,f){return G(b,function h(){return x(h,function(k){if(1==k.h)return void 0===(null===a||void 0===a?void 0:a.id)?k.A(2):w(k,Qj(a.id),2);d(e,f);k.h=0})})};
return a}
function Mk(a,b){a=a.timestamp;return P()-a>=b?!1:!0}
function Bk(){var a=this;Nj("QUEUED").then(function(b){b&&!Mk(b,12E4)?gg(function(){return G(a,function d(){return x(d,function(e){if(1==e.h)return void 0===b.id?e.A(2):w(e,Pj(b.id),2);Bk();e.h=0})})}):O("nwl_trigger_throttle_after_reset")&&Ck().N()&&Dk()})}
function Ak(){Rj().catch(function(a){Kf(a)})}
function Fk(){return G(this,function b(){return x(b,function(c){return c.return(Zj().catch(function(d){Kf(d)}))})})}
function Ck(){xk||(xk=new rk({eb:!0,Sa:O("trigger_nsm_validation_checks_with_nwl")}));return xk}
function Ik(a,b){if(O("networkless_with_beacon")){var c=["method","postBody"];if(Object.keys(b).length>c.length)var d=!0;else{d=0;c=u(c);for(var e=c.next();!e.done;e=c.next())b.hasOwnProperty(e.value)&&d++;d=Object.keys(b).length!==d}d?Lg(a,b):O("networkless_with_ping_send")&&1===Object.keys(b).length&&b.allowPingSend?Xg(a):$g(a,void 0,b.postBody)}else O("networkless_with_ping_send")&&1===Object.keys(b).length&&b.allowPingSend?Xg(a):Lg(a,b)}
function Hk(){return B("ytNetworklessLoggingInitializationOptions")?yk.isNwlInitialized:tk}
function Kk(){return B("ytNetworklessLoggingInitializationOptions")?yk.isIdbSupported:uk}
;function Ok(a){var b=this;this.config_=null;a?this.config_=a:Th()&&(this.config_=Dh());eg(function(){ai(b)},5E3)}
Ok.prototype.isReady=function(){!this.config_&&Th()&&(this.config_=Dh());return!!this.config_};
function Gh(a,b,c,d){function e(r){r=void 0===r?!1:r;var q;if(d.retry&&"www.youtube-nocookie.com"!=h&&(r||(q=Zh(b,c,l,k)),q)){var A=g.onSuccess,I=g.onFetchSuccess;g.onSuccess=function(K,X){$h(q);A(K,X)};
c.onFetchSuccess=function(K,X){$h(q);I(K,X)}}try{r&&d.retry&&!d.Ka.bypassNetworkless?(g.method="POST",!d.Ka.writeThenSend&&O("nwl_send_fast_on_unload")?Lk(p,g):Gk(p,g)):(g.method="POST",g.postParams||(g.postParams={}),Lg(p,g))}catch(K){if("InvalidAccessError"==K.name)q&&($h(q),q=0),Lf(Error("An extension is blocking network request."));
else throw K;}q&&eg(function(){ai(a)},5E3)}
!E("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Lf(new wi("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new wi("innertube xhrclient not ready",b,c,d);Kf(f);throw f;}var g={headers:{"Content-Type":"application/json"},method:"POST",postParams:c,postBodyFormat:"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(r,q){if(d.onSuccess)d.onSuccess(q)},
onFetchSuccess:function(r){if(d.onSuccess)d.onSuccess(r)},
onError:function(r,q){if(d.onError)d.onError(q)},
onFetchError:function(r){if(d.onError)d.onError(r)},
timeout:d.timeout,withCredentials:!0},h="";(f=a.config_.ab)&&(h=f);var k=a.config_.cb||!1,l=Uh(k,h,d);Object.assign(g.headers,l);g.headers.Authorization&&!h&&(g.headers["x-origin"]=window.location.origin);f="/youtubei/"+a.config_.innertubeApiVersion+"/"+b;var n={alt:"json"};a.config_.bb&&g.headers.Authorization||(n.key=a.config_.innertubeApiKey);var p=zg(""+h+f,n||{},!0);Hk()?tj().then(function(r){e(r)}):e(!1)}
;function Pk(a,b,c){c=void 0===c?{}:c;var d=Ok;E("ytLoggingEventsDefaultDisabled",!1)&&Ok==Ok&&(d=null);Ih(a,b,d,c)}
;var Qk=[{Ia:function(a){return"Cannot read property '"+a.key+"'"},
ya:{TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}],Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}]}},{Ia:function(a){return"Cannot call '"+a.key+"'"},
ya:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}}];var Sk={S:[],R:[{Ca:Rk,weight:500}]};function Rk(a){a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Tk(){this.R=[];this.S=[]}
var Uk;function Vk(){if(!Uk){var a=Uk=new Tk;a.S.length=0;a.R.length=0;Sk.S&&a.S.push.apply(a.S,Sk.S);Sk.R&&a.R.push.apply(a.R,Sk.R)}return Uk}
;var Wk=new M;function Xk(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Yk(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Yk(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Yk(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Yk(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Zk(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=$k(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f="string"!==typeof g||"clickTrackingParams"!==f&&"trackingParams"!==f?0:(g=Xk(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?$k(f+".ve",g,h,k):0;d+=f;d+=$k(e,a[e],b,c);if(500<d)break}}else c[b]=al(a),d+=c[b].length;else c[b]=al(a),d+=c[b].length;return d}
function $k(a,b,c,d){c+="."+a;a=al(b);d[c]=a;return c.length+a.length}
function al(a){return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}
;var bl=new Set,cl=0,dl=0,el=0,fl=[],gl=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function hl(a){il(a,"WARNING")}
function il(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||E("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||E("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);c=f||{};b=void 0===b?"ERROR":b;b=void 0===b?"ERROR":b;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),O("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+JSON.stringify(a.args)),d.push("File name: "+
a.fileName),d.push("Stacktrace: "+a.stack),window.console.log(d.join("\n"),a)),!(5<=cl))){var g=Od(a);d=g.message||"Unknown Error";e=g.name||"UnknownError";var h=g.stack||a.i||"Not available";h.startsWith(e+": "+d)&&(f=h.split("\n"),f.shift(),h=f.join("\n"));f=g.lineNumber||"Not available";g=g.fileName||"Not available";var k=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var l=0;l<a.args.length&&!(k=Zk(a.args[l],"params."+l,c,k),500<=k);l++);else if(a.hasOwnProperty("params")&&a.params){var n=
a.params;if("object"===typeof a.params)for(l in n){if(n[l]){var p="params."+l,r=al(n[l]);c[p]=r;k+=p.length+r.length;if(500<k)break}}else c.params=al(n)}if(fl.length)for(l=0;l<fl.length&&!(k=Zk(fl[l],"params.context."+l,c,k),500<=k);l++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);l={message:d,name:e,lineNumber:f,fileName:g,stack:h,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(l.lineNumber=l.lineNumber+":"+c);if("IGNORED"===a.level)a=0;else a:{a=
Vk();c=u(a.S);for(d=c.next();!d.done;d=c.next())if(d=d.value,l.message&&l.message.match(d.fl)){a=d.weight;break a}a=u(a.R);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.Ca(l)){a=c.weight;break a}a=1}l.sampleWeight=a;a=u(Qk);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.ya[l.name])for(e=u(c.ya[l.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=l.message.match(f.regexp)){l.params["params.error.original"]=d[0];e=f.groups;f={};for(g=0;g<e.length;g++)f[e[g]]=d[g+1],l.params["params.error."+e[g]]=
d[g+1];l.message=c.Ia(f);break}l.params||(l.params={});a=Vk();l.params["params.errorServiceSignature"]="msg="+a.S.length+"&cb="+a.R.length;l.params["params.serviceWorker"]="false";y.document&&y.document.querySelectorAll&&(l.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));window.yterr&&"function"===typeof window.yterr&&window.yterr(l);if(0!==l.sampleWeight&&!bl.has(l.message)){"ERROR"===b?(Wk.W("handleError",l),O("record_app_crashed_web")&&0===el&&1===l.sampleWeight&&
(el++,Pk("appCrashed",{appCrashType:"APP_CRASH_TYPE_BREAKPAD"})),dl++):"WARNING"===b&&Wk.W("handleWarning",l);if(O("kevlar_gel_error_routing")){a=b;b:{c=u(gl);for(d=c.next();!d.done;d=c.next())if(Ug(d.value.toLowerCase())){c=!0;break b}c=!1}if(c)c=void 0;else{d={stackTrace:l.stack};l.fileName&&(d.filename=l.fileName);c=l.lineNumber&&l.lineNumber.split?l.lineNumber.split(":"):[];0!==c.length&&(1!==c.length||isNaN(Number(c[0]))?2!==c.length||isNaN(Number(c[0]))||isNaN(Number(c[1]))||(d.lineNumber=Number(c[0]),
d.columnNumber=Number(c[1])):d.lineNumber=Number(c[0]));c={level:"ERROR_LEVEL_UNKNOWN",message:l.message,errorClassName:l.name,sampleWeight:l.sampleWeight};"ERROR"===a?c.level="ERROR_LEVEL_ERROR":"WARNING"===a&&(c.level="ERROR_LEVEL_WARNNING");d={isObfuscated:!0,browserStackInfo:d};e={pageUrl:window.location.href,kvPairs:[]};E("FEXP_EXPERIMENTS")&&(e.experimentIds=E("FEXP_EXPERIMENTS"));if(f=l.params)for(g=u(Object.keys(f)),h=g.next();!h.done;h=g.next())h=h.value,e.kvPairs.push({key:"client."+h,value:String(f[h])});
f=E("SERVER_NAME",void 0);g=E("SERVER_VERSION",void 0);f&&g&&(e.kvPairs.push({key:"server.name",value:f}),e.kvPairs.push({key:"server.version",value:g}));c={errorMetadata:e,stackTrace:d,logMessage:c}}c&&(Pk("clientError",c),("ERROR"===a||O("errors_flush_gel_always_killswitch"))&&yh())}if(!O("suppress_error_204_logging")){a=l.params||{};b={urlParams:{a:"logerror",t:"jserror",type:l.name,msg:l.message.substr(0,250),line:l.lineNumber,level:b,"client.name":a.name},postParams:{url:E("PAGE_NAME",window.location.href),
file:l.fileName},method:"POST"};a.version&&(b["client.version"]=a.version);if(b.postParams){l.stack&&(b.postParams.stack=l.stack);c=u(Object.keys(a));for(d=c.next();!d.done;d=c.next())d=d.value,b.postParams["client."+d]=a[d];if(a=E("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(c=u(Object.keys(a)),d=c.next();!d.done;d=c.next())d=d.value,b.postParams[d]=a[d];a=E("SERVER_NAME",void 0);c=E("SERVER_VERSION",void 0);a&&c&&(b.postParams["server.name"]=a,b.postParams["server.version"]=c)}Lg(E("ECATCHER_REPORT_HOST",
"")+"/error_204",b)}bl.add(l.message);cl++}}}
function jl(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];a.args||(a.args=[]);a.args.push.apply(a.args,c instanceof Array?c:fa(u(c)))}
;var kl={jc:3611,yb:27686,zb:85013,Ab:23462,Cb:42016,Db:62407,Eb:26926,Bb:43781,Fb:51236,Gb:79148,Hb:50160,Ib:77504,Ub:87907,Vb:18630,Wb:54445,Xb:80935,Yb:105675,Zb:37521,ac:47786,cc:98349,dc:123695,ec:6827,fc:29434,hc:7282,ic:124448,mc:32276,lc:76278,nc:93911,oc:106531,pc:27259,qc:27262,sc:27263,uc:21759,wc:27107,xc:62936,yc:49568,zc:38408,Ac:80637,Bc:68727,Cc:68728,Dc:80353,Ec:80356,Fc:74610,Gc:45707,Hc:83962,Ic:83970,Jc:46713,Kc:89711,Lc:74612,Mc:93265,Nc:74611,Pc:113533,Qc:93252,Rc:99357,Tc:94521,
Uc:114252,Vc:113532,Wc:94522,Sc:94583,Xc:88E3,Yc:93253,Zc:93254,bd:94387,cd:94388,dd:93255,ed:97424,Oc:72502,fd:110111,gd:76019,jd:117092,kd:117093,hd:89431,ld:110466,md:77240,nd:60508,od:105350,pd:73393,qd:113534,rd:92098,sd:84517,td:83759,ud:80357,vd:86113,wd:72598,xd:72733,yd:107349,zd:124275,Ad:118203,Bd:117431,Cd:117429,Dd:117430,Ed:117432,Fd:120080,Gd:117259,Hd:121692,Id:97615,Jd:31402,Kd:84774,Ld:95117,Md:98930,Nd:98931,Od:98932,Pd:43347,Qd:45474,Rd:100352,Sd:84758,Td:98443,Ud:117985,Vd:74613,
Wd:74614,Xd:64502,Yd:74615,Zd:74616,ae:122224,be:74617,ce:77820,de:74618,ee:93278,ge:93274,he:93275,ie:93276,je:22110,ke:29433,me:120541,oe:82047,pe:113550,qe:75836,re:75837,se:42352,te:84512,ue:76065,we:75989,xe:16623,ye:32594,ze:27240,Ae:32633,Be:74858,De:3945,Ce:16989,Ee:45520,Fe:25488,Ge:25492,He:25494,Ie:55760,Je:14057,Ke:18451,Le:57204,Me:57203,Ne:17897,Oe:57205,Pe:18198,Qe:17898,Re:17909,Se:43980,Te:46220,Ue:11721,Ve:49954,We:96369,Xe:3854,Ye:56251,Ze:25624,af:16906,bf:99999,cf:68172,df:27068,
ef:47973,ff:72773,gf:26970,hf:26971,jf:96805,kf:17752,lf:73233,mf:109512,nf:22256,pf:14115,qf:22696,rf:89278,sf:89277,tf:109513,uf:43278,vf:43459,wf:43464,xf:89279,yf:43717,zf:55764,Af:22255,Bf:89281,Cf:40963,Df:43277,Ef:43442,Ff:91824,Gf:120137,Hf:96367,If:36850,Jf:72694,Kf:37414,Lf:36851,Nf:124863,Mf:121343,Of:73491,Pf:54473,Qf:43375,Rf:46674,Sf:32473,Tf:72901,Uf:72906,Vf:50947,Wf:50612,Xf:50613,Yf:50942,Zf:84938,ag:84943,cg:84939,dg:84941,eg:84944,fg:84940,gg:84942,hg:35585,ig:51926,jg:79983,kg:63238,
lg:18921,mg:63241,ng:57893,og:41182,pg:33424,qg:22207,rg:42993,sg:36229,tg:22206,ug:22205,vg:18993,wg:19001,xg:18990,yg:18991,zg:18997,Ag:18725,Bg:19003,Cg:36874,Dg:44763,Eg:33427,Fg:67793,Gg:22182,Hg:37091,Ig:34650,Jg:50617,Kg:47261,Lg:22287,Mg:25144,Ng:97917,Og:62397,Pg:125598,Qg:36961,Rg:108035,Sg:27426,Tg:27857,Ug:27846,Vg:27854,Wg:69692,Xg:61411,Yg:39299,Zg:38696,ah:62520,bh:36382,dh:108701,eh:50663,fh:36387,gh:14908,hh:37533,ih:105443,jh:61635,kh:62274,lh:65702,mh:65703,nh:65701,oh:76256,ph:37671,
qh:49953,sh:36216,th:28237,uh:39553,vh:29222,wh:26107,xh:38050,yh:26108,Ah:120745,zh:26109,Bh:26110,Ch:66881,Dh:28236,Eh:14586,Fh:57929,Gh:74723,Hh:44098,Ih:44099,Jh:23528,Kh:61699,Lh:59149,Mh:101951,Nh:97346,Oh:118051,Ph:95102,Qh:64882,Rh:119505,Sh:63595,Th:63349,Uh:95101,Vh:75240,Wh:27039,Xh:68823,Yh:21537,Zh:83464,ai:75707,bi:83113,ci:101952,di:101953,gi:79610,hi:125755,ii:24402,ji:24400,ki:32925,li:57173,mi:122502,ni:64423,oi:64424,ri:33986,si:100828,ti:129089,vi:21409,wi:11070,xi:11074,yi:17880,
zi:14001,Bi:30709,Ci:30707,Di:30711,Ei:30710,Fi:30708,Ai:26984,Gi:63648,Hi:63649,Ii:51879,Ji:111059,Ki:5754,Li:20445,Mi:110386,Ni:113746,Oi:66557,Pi:17310,Qi:28631,Ri:21589,Si:68012,Ti:60480,Ui:31571,Vi:76980,Wi:41577,Xi:45469,Yi:38669,Zi:13768,aj:13777,bj:62985,cj:4724,dj:59369,ej:43927,fj:43928,gj:12924,hj:100355,kj:56219,lj:27669,mj:10337,jj:47896,nj:122629,oj:121258,pj:107598,qj:127991,rj:96639,sj:107536,tj:96661,uj:96658,vj:116646,wj:121122,xj:96660,yj:127738,zj:127083,Aj:104443,Bj:96659,Cj:106442,
Dj:63667,Ej:63668,Fj:63669,Gj:78314,Hj:55761,Ij:127098,Jj:96368,Kj:67374,Lj:48992,Mj:49956,Nj:31961,Oj:26388,Pj:23811,Qj:5E4,Rj:126250,Sj:96370,Tj:47355,Uj:47356,Vj:37935,Wj:45521,Xj:21760,Yj:83769,Zj:49977,ak:49974,bk:93497,ck:93498,dk:34325,ek:115803,fk:123707,gk:100081,hk:35309,ik:68314,jk:25602,kk:100339,lk:59018,mk:18248,nk:50625,pk:9729,qk:37168,rk:37169,sk:21667,tk:16749,uk:18635,vk:39305,wk:18046,xk:53969,yk:8213,zk:93926,Ak:102852,Bk:110099,Ck:22678,Dk:69076,Fk:100856,Gk:17736,Hk:3832,Ik:55759,
Jk:64031,Kk:93044,Lk:93045,Mk:34388,Nk:17657,Ok:17655,Pk:39579,Qk:39578,Rk:77448,Sk:8196,Tk:11357,Uk:69877,Vk:8197,Wk:82039};function ll(){var a=kb(ml),b;return $e(new Te(function(c,d){a.onSuccess=function(e){Fg(e)?c(new nl(e)):d(new ol("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new ol("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new ol("Request timed out","net.timeout",e))};
b=Lg("//googleads.g.doubleclick.net/pagead/id",a)}),function(c){c instanceof af&&b.abort();
return Ye(c)})}
function ol(a,b,c){Sa.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
v(ol,Sa);function nl(a){this.xhr=a}
;function pl(){this.i=0;this.h=null}
pl.prototype.then=function(a,b,c){return 1===this.i&&a?(a=a.call(c,this.h),Se(a)?a:ql(a)):2===this.i&&b?(a=b.call(c,this.h),Se(a)?a:rl(a)):this};
pl.prototype.getValue=function(){return this.h};
pl.prototype.$goog_Thenable=!0;function rl(a){var b=new pl;a=void 0===a?null:a;b.i=2;b.h=void 0===a?null:a;return b}
function ql(a){var b=new pl;a=void 0===a?null:a;b.i=1;b.h=void 0===a?null:a;return b}
;function sl(){if(qd())return!0;var a=E("INNERTUBE_CLIENT_NAME");return!a||"WEB"!==a&&"MWEB"!==a||Tg&&Ug("applewebkit")&&!Ug("version")&&(!Ug("safari")||Ug("gsa/"))||mc&&Ug("version/")?!0:(a=od.get("CONSENT",void 0))?a.startsWith("YES+"):!0}
;function tl(a){Sa.call(this,a.message||a.description||a.name);this.isMissing=a instanceof ul;this.isTimeout=a instanceof ol&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof af}
v(tl,Sa);tl.prototype.name="BiscottiError";function ul(){Sa.call(this,"Biscotti ID is missing from server")}
v(ul,Sa);ul.prototype.name="BiscottiMissingError";var ml={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},vl=null;function pg(){if(O("condition_biscotti_fetch_on_consent_cookie_html5_clients")&&!sl())return Ye(Error("User has not consented - not fetching biscotti id."));if("1"==ib())return Ye(Error("Biscotti ID is not available in private embed mode"));vl||(vl=$e(ll().then(wl),function(a){return xl(2,a)}));
return vl}
function wl(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new ul;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new ul;a=a.id;qg(a);vl=ql(a);yl(18E5,2);return a}
function xl(a,b){b=new tl(b);qg("");vl=rl(b);0<a&&yl(12E4,a-1);throw b;}
function yl(a,b){ag(function(){$e(ll().then(wl,function(c){return xl(b,c)}),Ea)},a)}
function zl(){try{var a=B("yt.ads.biscotti.getId_");return a?a():pg()}catch(b){return Ye(b)}}
;function Al(a){if("1"!=ib()){a&&og();try{zl().then(function(){},function(){}),ag(Al,18E5)}catch(b){Kf(b)}}}
;var Bl=Date.now().toString();
function Cl(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Bl)for(a=1,b=0;b<Bl.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Bl.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Dl,El=y.ytLoggingDocDocumentNonce_;El||(El=Cl(),Qa("ytLoggingDocDocumentNonce_",El));Dl=El;var Fl={le:0,kc:1,tc:2,rh:3,ne:4,Ek:5,fi:6,ij:7,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE"};function Gl(a){this.h=a}
function Hl(a){return new Gl({trackingParams:a})}
Gl.prototype.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);return a};
Gl.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
Gl.prototype.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};function Il(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function Jl(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Kl(a){return E(Jl(void 0===a?0:a),void 0)}
z("yt_logging_screen.getRootVeType",Kl,void 0);function Ll(a){return(a=Kl(void 0===a?0:a))?new Gl({veType:a,youtubeData:void 0}):null}
function Ml(){var a=E("csn-to-ctt-auth-info");a||(a={},N("csn-to-ctt-auth-info",a));return a}
function Nl(a){a=void 0===a?0:a;var b=E(Il(a));if(!b&&!E("USE_CSN_FALLBACK",!0))return null;b||0!=a||(b="UNDEFINED_CSN");return b?b:null}
z("yt_logging_screen.getCurrentCsn",Nl,void 0);function Ol(a,b,c){var d=Ml();(c=Nl(c))&&delete d[c];b&&(d[a]=b)}
function Pl(a){return Ml()[a]}
z("yt_logging_screen.getCttAuthInfo",Pl,void 0);function Ql(a,b,c,d){c=void 0===c?0:c;if(a!==E(Il(c))||b!==E(Jl(c)))Ol(a,d,c),N(Il(c),a),N(Jl(c),b),b=function(){setTimeout(function(){a&&Ih("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Dl,clientScreenNonce:a},Ok)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()}
z("yt_logging_screen.setCurrentScreen",Ql,void 0);function Rl(a){bi.call(this,1,arguments);this.csn=a}
v(Rl,bi);var ki=new ci("screen-created",Rl),Sl=[],Ul=Tl,Vl=0;function Wl(a,b,c,d){var e=d.filter(function(f){f.csn!==b?(f.csn=b,f=!0):f=!1;return f});
c={csn:b,parentVe:c.getAsJson(),childVes:Ya(e,function(f){return f.getAsJson()})};
d=u(d);for(e=d.next();!e.done;e=d.next())e=e.value.getAsJson(),(gb(e)||!e.trackingParams&&!e.veType)&&hl(Error("Child VE logged with no data"));d={G:Pl(b),U:b};"UNDEFINED_CSN"==b?Xl("visualElementAttached",c,d):a?Ih("visualElementAttached",c,a,d):Pk("visualElementAttached",c,d)}
function Tl(){for(var a=Math.random()+"",b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return Bc(b)}
function Xl(a,b,c){Sl.push({payloadName:a,payload:b,options:c});Vl||(Vl=li())}
function mi(a){if(Sl){for(var b=u(Sl),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,Ih(c.payloadName,c.payload,null,c.options));Sl.length=0}Vl=0}
;function Yl(){this.i=new Set;this.h=new Set;this.j=new Map}
Yl.prototype.clear=function(){this.i.clear();this.h.clear();this.j.clear()};
Fa(Yl);function Zl(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!$l(a)||c.some(function(e){return!$l(e)}))throw Error("Only objects may be merged.");
c=u(c);for(d=c.next();!d.done;d=c.next())am(a,d.value);return a}
function am(a,b){for(var c in b)if($l(b[c])){if(c in a&&!$l(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});am(a[c],b[c])}else if(bm(b[c])){if(c in a&&!bm(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);cm(a[c],b[c])}else a[c]=b[c];return a}
function cm(a,b){b=u(b);for(var c=b.next();!c.done;c=b.next())c=c.value,$l(c)?a.push(am({},c)):bm(c)?a.push(cm([],c)):a.push(c);return a}
function $l(a){return"object"===typeof a&&!Array.isArray(a)}
function bm(a){return"object"===typeof a&&Array.isArray(a)}
;function dm(a,b){bi.call(this,1,arguments)}
v(dm,bi);function em(a,b){bi.call(this,1,arguments)}
v(em,bi);var fm=new ci("aft-recorded",dm),gm=new ci("timing-sent",em);var hm=window;function im(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var U=hm.performance||hm.mozPerformance||hm.msPerformance||hm.webkitPerformance||new im;var jm=!1,km={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3/mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj"};Oa(U.clearResourceTimings||U.webkitClearResourceTimings||U.mozClearResourceTimings||U.msClearResourceTimings||U.oClearResourceTimings||Ea,U);function lm(a){var b=mm(a);if(b.aft)return b.aft;a=E((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function nm(){var a;if(O("csi_use_performance_navigation_timing")){var b,c,d,e=null===(d=null===(c=null===(b=null===(a=null===U||void 0===U?void 0:U.getEntriesByType)||void 0===a?void 0:a.call(U,"navigation"))||void 0===b?void 0:b[0])||void 0===c?void 0:c.toJSON)||void 0===d?void 0:d.call(c);e?(e.requestStart=om(e.requestStart),e.responseEnd=om(e.responseEnd),e.redirectStart=om(e.redirectStart),e.redirectEnd=om(e.redirectEnd),e.domainLookupEnd=om(e.domainLookupEnd),e.connectStart=om(e.connectStart),
e.connectEnd=om(e.connectEnd),e.responseStart=om(e.responseStart),e.secureConnectionStart=om(e.secureConnectionStart),e.domainLookupStart=om(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=U.timing}else a=U.timing;return a}
function pm(){return O("csi_use_time_origin")&&U.timeOrigin?Math.floor(U.timeOrigin):U.timing.navigationStart}
function om(a){return Math.round(pm()+a)}
function qm(a){var b;(b=B("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},Qa("ytcsi."+(a||"")+"data_",b));return b}
function rm(a){a=qm(a);a.info||(a.info={});return a.info}
function mm(a){a=qm(a);a.tick||(a.tick={});return a.tick}
function sm(a){var b=qm(a).nonce;b||(b=Cl(),qm(a).nonce=b);return b}
function tm(a){var b=mm(a||""),c=lm(a);c&&!jm&&(hi(fm,new dm(Math.round(c-b._start),a)),jm=!0)}
;function um(){if(U.getEntriesByType){var a=U.getEntriesByType("paint");if(a=$a(a,function(b){return"first-paint"===b.name}))return om(a.startTime)}a=U.timing;
return a.ib?Math.max(0,a.ib):0}
;function vm(){var a=B("ytcsi.debug");a||(a=[],z("ytcsi.debug",a,void 0),z("ytcsi.reference",{},void 0));return a}
function wm(a){a=a||"";var b=B("ytcsi.reference");b||(vm(),b=B("ytcsi.reference"));if(b[a])return b[a];var c=vm(),d={timerName:a,info:{},tick:{},span:{}};c.push(d);return b[a]=d}
;var xm=y.ytLoggingLatencyUsageStats_||{};z("ytLoggingLatencyUsageStats_",xm,void 0);function ym(){this.h=0}
function zm(){ym.h||(ym.h=new ym);return ym.h}
ym.prototype.tick=function(a,b,c){Am(this,"tick_"+a+"_"+b)||Pk("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c})};
ym.prototype.info=function(a,b){var c=Object.keys(a).join("");Am(this,"info_"+c+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,Pk("latencyActionInfo",a))};
ym.prototype.span=function(a,b){var c=Object.keys(a).join("");Am(this,"span_"+c+"_"+b)||(a.clientActionNonce=b,Pk("latencyActionSpan",a))};
function Am(a,b){xm[b]=xm[b]||{count:0};var c=xm[b];c.count++;c.time=P();a.h||(a.h=eg(function(){var d=P(),e;for(e in xm)xm[e]&&6E4<d-xm[e].time&&delete xm[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new wi("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||hl(c)),!0):!1}
;var V={},Bm=(V.auto_search="LATENCY_ACTION_AUTO_SEARCH",V.ad_to_ad="LATENCY_ACTION_AD_TO_AD",V.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",V.app_startup="LATENCY_ACTION_APP_STARTUP",V["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",V["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",V["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",V.browse="LATENCY_ACTION_BROWSE",V.channels="LATENCY_ACTION_CHANNELS",V.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",
V["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",V["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",V["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",V["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",V["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",V["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",V["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",V["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",
V["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",V["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",V.chips="LATENCY_ACTION_CHIPS",V["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",V["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",V.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",V.embed="LATENCY_ACTION_EMBED",V.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",V.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",
V.home="LATENCY_ACTION_HOME",V.library="LATENCY_ACTION_LIBRARY",V.live="LATENCY_ACTION_LIVE",V.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",V.onboarding="LATENCY_ACTION_KIDS_ONBOARDING",V.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",V.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",V.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",V.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",V["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",
V["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",V.prebuffer="LATENCY_ACTION_PREBUFFER",V.prefetch="LATENCY_ACTION_PREFETCH",V.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",V.profile_switcher="LATENCY_ACTION_KIDS_PROFILE_SWITCHER",V.reel_watch="LATENCY_ACTION_REEL_WATCH",V.results="LATENCY_ACTION_RESULTS",V.search_ui="LATENCY_ACTION_SEARCH_UI",V.search_suggest="LATENCY_ACTION_SUGGEST",V.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",V.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",
V.seek="LATENCY_ACTION_PLAYER_SEEK",V.settings="LATENCY_ACTION_SETTINGS",V.tenx="LATENCY_ACTION_TENX",V.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",V.watch="LATENCY_ACTION_WATCH",V.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",V["watch,watch7"]="LATENCY_ACTION_WATCH",V["watch,watch7_html5"]="LATENCY_ACTION_WATCH",V["watch,watch7ad"]="LATENCY_ACTION_WATCH",V["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",V.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",V.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",V["video.analytics"]=
"LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",V["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",V["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",V["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",V["video.video_editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",V["video.video_editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",V["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",V.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",V.cast_load_by_entity_to_watch=
"LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",V.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",V),W={},Cm=(W.ad_allowed="adTypesAllowed",W.yt_abt="adBreakType",W.ad_cpn="adClientPlaybackNonce",W.ad_docid="adVideoId",W.yt_ad_an="adNetworks",W.ad_at="adType",W.aida="appInstallDataAgeMs",W.browse_id="browseId",W.p="httpProtocol",W.t="transportProtocol",W.cpn="clientPlaybackNonce",W.ccs="creatorInfo.creatorCanaryState",W.csn="clientScreenNonce",W.docid="videoId",W.GetHome_rid="requestIds",
W.GetSearch_rid="requestIds",W.GetPlayer_rid="requestIds",W.GetWatchNext_rid="requestIds",W.GetBrowse_rid="requestIds",W.GetLibrary_rid="requestIds",W.is_continuation="isContinuation",W.is_nav="isNavigation",W.b_p="kabukiInfo.browseParams",W.is_prefetch="kabukiInfo.isPrefetch",W.is_secondary_nav="kabukiInfo.isSecondaryNav",W.prev_browse_id="kabukiInfo.prevBrowseId",W.query_source="kabukiInfo.querySource",W.voz_type="kabukiInfo.vozType",W.yt_lt="loadType",W.mver="creatorInfo.measurementVersion",W.yt_ad=
"isMonetized",W.nr="webInfo.navigationReason",W.nrsu="navigationRequestedSameUrl",W.ncnp="webInfo.nonPreloadedNodeCount",W.pnt="performanceNavigationTiming",W.prt="playbackRequiresTap",W.plt="playerInfo.playbackType",W.pis="playerInfo.playerInitializedState",W.paused="playerInfo.isPausedOnLoad",W.yt_pt="playerType",W.fmt="playerInfo.itag",W.yt_pl="watchInfo.isPlaylist",W.yt_pre="playerInfo.preloadType",W.yt_ad_pr="prerollAllowed",W.pa="previousAction",W.yt_red="isRedSubscriber",W.rce="mwebInfo.responseContentEncoding",
W.scrh="screenHeight",W.scrw="screenWidth",W.st="serverTimeMs",W.ssdm="shellStartupDurationMs",W.br_trs="tvInfo.bedrockTriggerState",W.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",W.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",W.label="tvInfo.label",W.is_mdx="tvInfo.isMdx",W.preloaded="tvInfo.isPreloaded",W.upg_player_vis="playerInfo.visibilityState",W.query="unpluggedInfo.query",W.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",W.yt_vst="videoStreamType",W.vph="viewportHeight",
W.vpw="viewportWidth",W.yt_vis="isVisible",W.rcl="mwebInfo.responseContentLength",W.GetSettings_rid="requestIds",W.GetTrending_rid="requestIds",W.GetMusicSearchSuggestions_rid="requestIds",W.REQUEST_ID="requestIds",W),Dm="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),
Em={},Fm=(Em.ccs="CANARY_STATE_",Em.mver="MEASUREMENT_VERSION_",Em.pis="PLAYER_INITIALIZED_STATE_",Em.yt_pt="LATENCY_PLAYER_",Em.pa="LATENCY_ACTION_",Em.yt_vst="VIDEO_STREAM_TYPE_",Em),Gm="all_vc ap aq c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function Hm(a){return!!E("FORCE_CSI_ON_GEL",!1)||O("csi_on_gel")||O("enable_csi_on_gel")||!!qm(a).useGel}
function Im(a,b,c){var d=Jm(c);d.gelTicks&&(d.gelTicks["tick_"+a]=!0);c||b||P();return Hm(c)?(wm(c||"").tick[a]=b||P(),d=sm(c),"_start"===a?(a=zm(),Am(a,"baseline_"+d)||Pk("latencyActionBaselined",{clientActionNonce:d},{timestamp:b})):zm().tick(a,d,b),tm(c),!0):!1}
function Km(a,b,c){c=Jm(c);if(c.gelInfos)c.gelInfos["info_"+a]=!0;else{var d={};c.gelInfos=(d["info_"+a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in Cm){c=Cm[a];0<=Wa(Dm,c)&&(b=!!b);a in Fm&&"string"===typeof b&&(b=Fm[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return Zl({},d)}0<=Wa(Gm,a)||hl(new wi("Unknown label logged with GEL CSI",a))}
function Jm(a){a=qm(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function Lm(a){a=Jm(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
;function Mm(a,b,c){null!==b&&(rm(c)[a]=b,Hm(c)?(a=Km(a,b,c))&&Hm(c)&&(b=wm(c||""),Zl(b.info,a),Zl(Lm(c),a),c=sm(c),zm().info(a,c)):wm(c||"").info[a]=b)}
function Z(a,b,c){var d=mm(c);if(!b&&"_"!==a[0]){var e=a;U.mark&&(0==e.lastIndexOf("mark_",0)||(e="mark_"+e),c&&(e+=" ("+c+")"),U.mark(e))}e=b||P();d[a]=e;Im(a,b,c)||(Nm(c),wm(c||"").tick[a]=b||P());return d[a]}
function Om(a,b){if(Hm(void 0)){var c=Jm(void 0);if(c.gelSpans)c.gelSpans[a]=!0;else{var d={};c.gelSpans=(d[a]=!0,d)}a={spanName:a,spanLengthUsec:String(Math.round(1E3*b))};wm("").span[String(a.spanName)]=a;b=Jm(void 0);b.gelSpans||(b.gelSpans={});Zl(b.gelSpans,a);b=sm(void 0);zm().span(a,b)}}
function Pm(){var a=sm(void 0);requestAnimationFrame(function(){setTimeout(function(){a===sm(void 0)&&Z("ol",void 0,void 0)},0)})}
function Nm(a){if(!B("yt.timing."+(a||"")+"pingSent_")){var b=E((a||"")+"TIMING_ACTION",void 0),c=mm(a);if(b=!!B("ytglobal.timing"+(a||"")+"ready_")&&b)b="_start"in mm(void 0);if(b&&lm(a))if(tm(a),a)Qm(a);else{b=!0;var d=E("TIMING_WAIT",[]);if(d.length)for(var e=0,f=d.length;e<f;++e)if(!(d[e]in c)){b=!1;break}b&&Qm(a)}}}
function Rm(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=Rf+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function Qm(a){if(!Hm(a)){var b=mm(a),c=rm(a),d=b._start,e=E("CSI_SERVICE_NAME","youtube"),f={v:2,s:e,action:E((a||"")+"TIMING_ACTION",void 0)},g=c.srt;void 0!==b.srt&&delete c.srt;b.aft=lm(a);var h=mm(a),k=h.pbr,l=h.vc;h=h.pbs;k&&l&&h&&k<l&&l<h&&rm(a).yt_pvis&&"youtube"===e&&(Mm("yt_lt","hot_bg",a),e=b.vc,k=b.pbs,delete b.aft,c.aft=Math.round(k-e));for(var n in c)"_"!==n.charAt(0)&&(f[n]=c[n]);b.ps=P();n={};e=[];for(var p in b)"_"!==p.charAt(0)&&(k=Math.round(b[p]-d),n[p]=k,e.push(p+"."+k));f.rt=
e.join(",");b=!!c.ap;c="";for(var r in f)f.hasOwnProperty(r)&&(c+="&"+r+"="+f[r]);f="/csi_204?"+c.substring(1);window.navigator&&window.navigator.sendBeacon&&(b||O("always_send_csi_204_with_beacon"))?$g(f):Xg(f);z("yt.timing."+(a||"")+"pingSent_",!0,void 0);hi(gm,new em(n.aft+(Number(g)||0),a))}}
function Sm(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);Vb()&&a.setAttribute("nonce",Vb());return c?(a=U.getEntriesByName(c))&&a[0]&&(a=a[0],c=pm(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&(b=rm(void 0),c=Lm(void 0),"rc"in b||"rc"in c||Mm("rc",""),0===a.transferSize))?!0:!1:!1}
function Tm(){var a=window.location.protocol,b=U.getEntriesByType("resource");b=Xa(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=Za(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(Z("wffs",om(b.startTime)),Z("wffe",om(b.responseEnd)))}
var Um=window;Um.ytcsi&&(Um.ytcsi.info=Mm,Um.ytcsi.tick=Z);function Vm(){this.l=[];this.u=[];this.h=[];this.i=new Set;this.m=new Map}
function Wm(a,b,c){c=void 0===c?0:c;b.then(function(d){var e,f;a.i.has(c)&&a.j&&a.j();var g=Nl(c),h=Ll(c);g&&h&&(d.csn=g,(null===(e=d.response)||void 0===e?0:e.trackingParams)&&Wl(a.client,g,h,[Hl(d.response.trackingParams)]),(null===(f=d.playerResponse)||void 0===f?0:f.trackingParams)&&Wl(a.client,g,h,[Hl(d.playerResponse.trackingParams)]))})}
function Xm(a,b,c,d){d=void 0===d?0:d;if(a.i.has(d))a.l.push([b,c]);else{var e=Nl(d);c=c||Ll(d);e&&c&&Wl(a.client,e,c,[b])}}
Vm.prototype.clickCommand=function(a,b,c){c=Nl(void 0===c?0:c);if(!a.clickTrackingParams||!c)return!1;var d=this.client;var e="INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";a={csn:c,ve:Hl(a.clickTrackingParams).getAsJson(),gestureType:e};b&&(a.clientData=b);b={G:Pl(c),U:c};"UNDEFINED_CSN"==c?Xl("visualElementGestured",a,b):d?Ih("visualElementGestured",a,d,b):Pk("visualElementGestured",a,b);return!0};
function Ym(a,b,c){c=void 0===c?{}:c;a.i.add(c.layer||0);a.j=function(){Zm(a,b,c);var f=Ll(c.layer);if(f){for(var g=u(a.l),h=g.next();!h.done;h=g.next())h=h.value,Xm(a,h[0],h[1]||f,c.layer);f=u(a.u);for(g=f.next();!g.done;g=f.next()){var k=g.value;g=void 0;g=void 0===g?0:g;h=Nl(g);var l=k[0]||Ll(g);h&&l&&(g=a.client,k=k[1],k={csn:h,ve:l.getAsJson(),clientData:k},l={G:Pl(h),U:h},"UNDEFINED_CSN"==h?Xl("visualElementStateChanged",k,l):g?Ih("visualElementStateChanged",k,g,l):Pk("visualElementStateChanged",
k,l))}}};
Nl(c.layer)||a.j();if(c.Fa)for(var d=u(c.Fa),e=d.next();!e.done;e=d.next())Wm(a,e.value,c.layer);else il(Error("Delayed screen needs a data promise."))}
function Zm(a,b,c){c=void 0===c?{}:c;c.layer||(c.layer=0);var d=void 0!==c.jb?c.jb:c.layer;var e=Nl(d);d=Ll(d);var f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));var g,h=E("EVENT_ID");O("screen_manager_log_servlet_ei")&&"UNDEFINED_CSN"===e&&h&&(g={servletData:{serializedServletEventId:h}});try{var k=a.client;h=f;var l=c.Ea,n=c.G,p=Ul(),r={csn:p,pageVe:(new Gl({veType:b,youtubeData:g})).getAsJson()};h&&
h.visualElement?r.implicitGesture={parentCsn:h.clientScreenNonce,gesturedVe:h.visualElement.getAsJson()}:h&&hl(new wi("newScreen() parent element does not have a VE - rootVe",b));l&&(r.cloneCsn=l);l={G:n,U:p};k?Ih("screenCreated",r,k,l):Pk("screenCreated",r,l);hi(ki,new Rl(p));var q=p}catch(A){jl(A,{kl:b,rootVe:d,parentVisualElement:void 0,bl:e,jl:f,Ea:c.Ea});il(A);return}Ql(q,b,c.layer,c.G);if((b=e&&"UNDEFINED_CSN"!==e&&d)&&!(b=O("screen_manager_skip_hide_killswitch"))){a:{b=u(Object.values(Fl));
for(f=b.next();!f.done;f=b.next())if(Nl(f.value)==e){b=!0;break a}b=!1}b=!b}b&&(b=a.client,f=!0,k=(f=void 0===f?!1:f)?16:8,d={csn:e,ve:d.getAsJson(),eventType:k},f={G:Pl(e),U:e,Ta:f},"UNDEFINED_CSN"==e?Xl("visualElementHidden",d,f):b?Ih("visualElementHidden",d,b,f):Pk("visualElementHidden",d,f));a.h[a.h.length-1]&&!a.h[a.h.length-1].csn&&(a.h[a.h.length-1].csn=q||"");Mm("csn",q);Yl.getInstance().clear();d=Ll(c.layer);e&&"UNDEFINED_CSN"!==e&&d&&(O("web_mark_root_visible")||O("music_web_mark_root_visible"))&&
(e=q,q=O("use_default_events_client")?void 0:Ok,b={csn:e,ve:d.getAsJson(),eventType:1},f={G:Pl(e),U:e},"UNDEFINED_CSN"==e?Xl("visualElementShown",b,f):q?Ih("visualElementShown",b,q,f):Pk("visualElementShown",b,f));a.i.delete(c.layer||0);a.j=void 0;e=u(a.m);for(q=e.next();!q.done;q=e.next())q=u(q.value),b=q.next().value,q.next().value.has(c.layer)&&d&&Xm(a,b,d,c.layer)}
;function $m(a){a&&(a.dataset?a.dataset[an("loaded")]="true":a.setAttribute("data-loaded","true"))}
function bn(a,b){return a?a.dataset?a.dataset[an(b)]:a.getAttribute("data-"+b):null}
var cn={};function an(a){return cn[a]||(cn[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var dn=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,en=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function fn(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(dn,""),c=c.replace(en,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else gn(a,b,c)}
function gn(a,b,c){c=void 0===c?null:c;var d=hn(a),e=document.getElementById(d),f=e&&bn(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=eh(d,b),b=""+Ja(b),jn[b]=f),g||(e=kn(a,d,function(){bn(e,"loaded")||($m(e),hh(d),ag(Pa(ih,d),0))},c)))}
function kn(a,b,c,d){d=void 0===d?null:d;var e=Tc(document,"SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Lc(e,dd(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function ln(a){a=hn(a);var b=document.getElementById(a);b&&(ih(a),b.parentNode.removeChild(b))}
function mn(a,b){a&&b&&(a=""+Ja(b),(a=jn[a])&&gh(a))}
function hn(a){var b=document.createElement("a");Sb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Yb(a)}
var jn={};var nn=[],on=!1;function pn(){if((!O("condition_ad_status_fetch_on_consent_cookie_html5_clients")||sl())&&"1"!=ib()){var a=function(){on=!0;"google_ad_status"in window?N("DCLKSTAT",1):N("DCLKSTAT",2)};
try{fn("//static.doubleclick.net/instream/ad_status.js",a)}catch(b){}nn.push(gg(function(){if(!(on||"google_ad_status"in window)){try{mn("//static.doubleclick.net/instream/ad_status.js",a)}catch(b){}on=!0;N("DCLKSTAT",3)}},5E3))}}
function qn(){var a=Number(E("DCLKSTAT",0));return isNaN(a)?0:a}
;function rn(){this.i=!1;this.h=null}
rn.prototype.initialize=function(a,b,c,d){d=void 0===d?!1:d;var e,f;if(a.program){var g=null!==(e=a.interpreterScript)&&void 0!==e?e:null,h=null!==(f=a.interpreterUrl)&&void 0!==f?f:null;if(a.interpreterSafeScript){g=a.interpreterSafeScript.privateDoNotAccessOrElseSafeScriptWrappedValue||"";var k=pb();g=k?k.createScript(g):g;g=(new rb(g)).toString()}a.interpreterSafeUrl&&(h=vb(a.interpreterSafeUrl.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue||"").toString());sn(this,g,h,a.program,b,c,d)}else hl(Error("Cannot initialize botguard without program"))};
function sn(a,b,c,d,e,f,g){g=void 0===g?!1:g;c?(a.i=!0,fn(c,function(){a.i=!1;var h=0<=c.indexOf("/th/");(h?window.trayride:window.botguard)?tn(a,d,!!g,h,e):(ln(c),hl(new wi("Unable to load Botguard","from "+c)))},f)):b&&(f=Tc(document,"SCRIPT"),f.textContent=b,f.nonce=Vb(),document.head.appendChild(f),document.head.removeChild(f),((b=b.includes("trayride"))?window.trayride:window.botguard)?tn(a,d,!!g,b,e):hl(Error("Unable to load Botguard from JS")))}
function tn(a,b,c,d,e){var f,g;if(d=d?null===(f=window.trayride)||void 0===f?void 0:f.ad:null===(g=window.botguard)||void 0===g?void 0:g.bg)if(c)try{un(a,new d(b,e?function(){return e(b)}:Ea))}catch(h){h instanceof Error&&hl(h)}else{try{un(a,new d(b))}catch(h){h instanceof Error&&hl(h)}e&&e(b)}else hl(Error("Failed to finish initializing VM"))}
rn.prototype.invoke=function(a){a=void 0===a?{}:a;return this.h?this.h.hasOwnProperty("hot")?this.h.hot(void 0,void 0,a):this.h.invoke(void 0,void 0,a):null};
rn.prototype.dispose=function(){this.h=null};
function un(a,b){a.h=b}
;var vn=new rn;function wn(){return!!vn.h}
function xn(a){a=void 0===a?{}:a;return vn.invoke(a)}
;var yn=window,zn=/[A-Za-z]+\/[0-9.]+/g;function An(a,b){if(a.replace(zn,"")!==b.replace(zn,""))return!1;a=a.match(zn);b=b.match(zn);if(a.length!==b.length)return!1;for(var c=0;c<a.length;c++){var d=a[c],e=b[c];if(!d.startsWith(e)&&!e.startsWith(d))return!1}return!0}
function Bn(){var a=yn.uaChPolyfill.state;if(0===a.type)Pk("clientHintsPolyfillEvent",{clientHintsSupported:!1});else{var b=navigator.userAgent,c=void 0!==a.syntheticUa&&An(a.syntheticUa,b);Pk("clientHintsPolyfillEvent",{clientHintsSupported:!0,uaAccessedBeforePolyfill:a.didAccessUaBeforePolyfillAvailable,syntheticUaMatches:c});c||(b={syntheticUa:a.syntheticUa,ua:b},b.brand=a.data.brands.map(function(d){return'"'+d.brand+'"; v="'+d.version+'"'}),b.mobileness=a.data.mobile,a=a.data.values,a.architecture&&
(b.platformArchitecture=a.architecture),a.model&&(b.model=a.model),a.platform&&(b.platformBrand=a.platform),a.platformVersion&&(b.platformVersion=a.platformVersion),a.uaFullVersion&&(b.fullVersion=a.uaFullVersion),Pk("clientHintsPolyfillDiagnostics",b))}}
var Cn=!1;function Dn(){var a;1===(null===(a=yn.uaChPolyfill)||void 0===a?void 0:a.state.type)?Cn||(yn.uaChPolyfill.onReady=Dn,Cn=!0):yn.uaChPolyfill&&Bn()}
;function En(a,b,c){J.call(this);var d=this;c=c||E("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname;this.j=b||null;this.C="*";this.l=c;this.sessionId=null;this.channel="widget";this.F=!!a;this.B=function(e){a:if(!("*"!=d.l&&e.origin!=d.l||d.j&&e.source!=d.j||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.F&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.l=d.C=e.origin);d.j=e.source;d.sessionId=f.id;d.i&&(d.i(),d.i=null);break;case "command":d.m&&(!d.o||0<=Wa(d.o,f.func))&&d.m(f.func,f.args,e.origin)}}};
this.o=this.i=this.m=null;window.addEventListener("message",this.B)}
v(En,J);En.prototype.sendMessage=function(a,b){if(b=b||this.j){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.C)}catch(d){Lf(d)}}};
En.prototype.D=function(){window.removeEventListener("message",this.B);J.prototype.D.call(this)};function Fn(){this.i=[];this.isReady=!1;this.j={};var a=this.h=new En(!!E("WIDGET_ID_ENFORCE")),b=this.lb.bind(this);a.m=b;a.o=null;this.h.channel="widget";if(a=E("WIDGET_ID"))this.h.sessionId=a}
m=Fn.prototype;m.lb=function(a,b,c){"addEventListener"===a&&b?(a=b[0],this.j[a]||"onReady"===a||(this.addEventListener(a,Gn(this,a)),this.j[a]=!0)):this.Aa(a,b,c)};
m.Aa=function(){};
function Gn(a,b){return function(c){return a.sendMessage(b,c)}}
m.addEventListener=function(){};
m.Ua=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.ta());this.sendMessage("onReady");D(this.i,this.Ma,this);this.i=[]};
m.ta=function(){return null};
function Hn(a,b){a.sendMessage("infoDelivery",b)}
m.Ma=function(a){this.isReady?this.h.sendMessage(a):this.i.push(a)};
m.sendMessage=function(a,b){this.Ma({event:a,info:void 0===b?null:b})};
m.dispose=function(){this.h=null};function In(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Jn(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}
function Kn(a,b,c,d){if(Ia(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function Ln(a){Fn.call(this);this.listeners=[];this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.sb.bind(this));this.addEventListener("onVolumeChange",this.tb.bind(this));this.addEventListener("onApiChange",this.nb.bind(this));this.addEventListener("onPlaybackQualityChange",this.pb.bind(this));this.addEventListener("onPlaybackRateChange",this.qb.bind(this));this.addEventListener("onStateChange",this.rb.bind(this));this.addEventListener("onWebglSettingsChanged",
this.ub.bind(this))}
v(Ln,Fn);m=Ln.prototype;
m.Aa=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&In(a)){var d=b;if(Ia(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=Jn(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=Jn(e);break;case "loadPlaylist":case "cuePlaylist":e=Kn(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);In(a)&&Hn(this,this.ta())}};
m.onReady=function(){var a=this.Ua.bind(this);this.h.i=a};
m.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
m.ta=function(){if(!this.api)return null;var a=this.api.getApiInterface();ab(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
m.rb=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());Hn(this,a)};
m.pb=function(a){Hn(this,{playbackQuality:a})};
m.qb=function(a){Hn(this,{playbackRate:a})};
m.nb=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
m.tb=function(){Hn(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
m.sb=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());Hn(this,a)};
m.ub=function(){var a={sphericalProperties:this.api.getSphericalProperties()};Hn(this,a)};
m.dispose=function(){Fn.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function Mn(a){J.call(this);this.i={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.La,this)}
v(Mn,J);m=Mn.prototype;m.start=function(){this.started||this.h||(this.started=!0,this.connection.Z("RECEIVING"))};
m.Z=function(a,b){this.started&&!this.h&&this.connection.Z(a,b)};
m.La=function(a,b,c){if(this.started&&!this.h){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=Nn(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=On(a,c))&&this.Z(a,c))}}};
m.addListener=function(a){if(!(a in this.i)){var b=this.ob.bind(this,a);this.i[a]=b;this.addEventListener(a,b)}};
m.ob=function(a,b){this.started&&!this.h&&this.connection.Z(a,this.sa(a,b))};
m.sa=function(a,b){if(null!=b)return{value:b}};
m.removeListener=function(a){a in this.i&&(this.removeEventListener(a,this.i[a]),delete this.i[a])};
m.D=function(){var a=this.connection;a.h||lf(a.i,"command",this.La,this);this.connection=null;for(var b in this.i)this.i.hasOwnProperty(b)&&this.removeListener(b);J.prototype.D.call(this)};function Pn(a,b){Mn.call(this,b);this.api=a;this.start()}
v(Pn,Mn);Pn.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
Pn.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function Nn(a,b){switch(a){case "loadVideoById":return a=Jn(b),[a];case "cueVideoById":return a=Jn(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=Kn(b),[a];case "cuePlaylist":return a=Kn(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function On(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Pn.prototype.sa=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Mn.prototype.sa.call(this,a,b)};
Pn.prototype.D=function(){Mn.prototype.D.call(this);delete this.api};function Qn(a){a=void 0===a?!1:a;J.call(this);this.i=new M(a);Ud(this,Pa(Sd,this.i))}
C(Qn,J);Qn.prototype.subscribe=function(a,b,c){return this.h?0:this.i.subscribe(a,b,c)};
Qn.prototype.l=function(a,b){this.h||this.i.W.apply(this.i,arguments)};function Rn(a,b,c){Qn.call(this);this.j=a;this.destination=b;this.id=c}
v(Rn,Qn);Rn.prototype.Z=function(a,b){this.h||this.j.Z(this.destination,this.id,a,b)};
Rn.prototype.D=function(){this.destination=this.j=null;Qn.prototype.D.call(this)};function Sn(a,b,c){J.call(this);this.destination=a;this.origin=c;this.i=Yf(window,"message",this.j.bind(this));this.connection=new Rn(this,a,b);Ud(this,Pa(Sd,this.connection))}
v(Sn,J);Sn.prototype.Z=function(a,b,c,d){this.h||a!==this.destination||(a={id:b,command:c},d&&(a.data=d),this.destination.postMessage(Me(a),this.origin))};
Sn.prototype.j=function(a){var b;if(b=!this.h)if(b=a.origin===this.origin)a:{b=this.destination;do{b:{var c=a.source;do{if(c===b){c=!0;break b}if(c===c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,"string"===typeof b)){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.connection,c.h||c.l("command",b.command,b.data,a.origin))}};
Sn.prototype.D=function(){Zf(this.i);this.destination=null;J.prototype.D.call(this)};function Tn(){J.call(this);this.i=[]}
v(Tn,J);Tn.prototype.D=function(){for(;this.i.length;){var a=this.i.pop();a.target.removeEventListener(a.name,a.Ca)}J.prototype.D.call(this)};function Un(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||kb(b);this.assets=a.assets||{};this.attrs=a.attrs||kb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Un.prototype.clone=function(){var a=new Un,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Ga(c)?a[b]=kb(c):a[b]=c}return a};var Vn=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Wn(a){a=a||"";if(window.spf){var b=a.match(Vn);spf.style.load(a,b?b[1]:"",void 0)}else Xn(a)}
function Xn(a){var b=Yn(a),c=document.getElementById(b),d=c&&bn(c,"loaded");d||c&&!d||(c=Zn(a,b,function(){bn(c,"loaded")||($m(c),hh(b),ag(Pa(ih,b),0))}))}
function Zn(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=dd(a);Tb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Yn(a){var b=Tc(document,"A");Sb(b,new Fb(a,Gb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Yb(a)}
;function $n(a,b,c,d){J.call(this);var e=this;this.F=b;this.webPlayerContextConfig=d;this.oa=!1;this.api={};this.ba=this.m=null;this.J=new M;this.i={};this.L=this.fa=this.elementId=this.qa=this.config=null;this.K=!1;this.l=this.B=null;this.ga={};this.Na=["onReady"];this.lastError=null;this.Ba=NaN;this.C={};this.Oa=new Tn(this);this.P=0;this.j=this.o=a;Ud(this,Pa(Sd,this.J));ao(this);bo(this);Ud(this,Pa(Sd,this.Oa));c?this.P=ag(function(){e.loadNewVideoConfig(c)},0):d&&(co(this),eo(this))}
v($n,J);m=$n.prototype;m.getId=function(){return this.F};
m.loadNewVideoConfig=function(a){if(!this.h){this.P&&(bg(this.P),this.P=0);var b=a||{};b instanceof Un||(b=new Un(b));this.config=b;this.setConfig(a);eo(this);this.isReady()&&fo(this)}};
function co(a){var b,c;a.webPlayerContextConfig?c=a.webPlayerContextConfig.rootElementId:c=a.config.attrs.id;a.elementId=c||a.elementId;"video-player"===a.elementId&&(a.elementId=a.F,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.F:a.config.attrs.id=a.F);(null===(b=a.j)||void 0===b?void 0:b.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
m.setConfig=function(a){var b;this.qa=a;this.config=go(a);co(this);this.fa||(this.fa=ho(this,(null===(b=this.config.args)||void 0===b?void 0:b.jsapicallback)||"onYouTubePlayerReady"));this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null===(c=this.config)||void 0===c?0:c.attrs)a=this.config.attrs,(c=a.width)&&this.j&&(this.j.style.width=fd(Number(c)||c)),(a=a.height)&&this.j&&(this.j.style.height=fd(Number(a)||a))};
function fo(a){var b;a.config&&!0!==a.config.loaded&&(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay?a.api.loadVideoByPlayerVars(null!==(b=a.config.args)&&void 0!==b?b:null):a.api.cueVideoByPlayerVars(a.config.args))}
function io(a){var b=!0,c=jo(a);c&&a.config&&(a=ko(a),b=bn(c,"version")===a);return b&&!!B("yt.player.Application.create")}
function eo(a){if(!a.h&&!a.K){var b=io(a);if(b&&"html5"===(jo(a)?"html5":null))a.L="html5",a.isReady()||lo(a);else if(mo(a),a.L="html5",b&&a.l&&a.o)a.o.appendChild(a.l),lo(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.B=function(){c=!0;var d=no(a,"player_bootstrap_method")?B("yt.player.Application.createAlternate")||B("yt.player.Application.create"):B("yt.player.Application.create");var e=a.config?go(a.config):void 0;d&&d(a.o,e,a.webPlayerContextConfig);lo(a)};
a.K=!0;b?a.B():(fn(ko(a),a.B),(b=oo(a))&&Wn(b),po(a)&&!c&&z("yt.player.Application.create",null,void 0))}}}
function jo(a){var b=Pc(a.elementId);!b&&a.j&&a.j.querySelector&&(b=a.j.querySelector("#"+a.elementId));return b}
function lo(a){var b;if(!a.h){var c=jo(a),d=!1;c&&c.getApiInterface&&c.getApiInterface()&&(d=!0);d?(a.K=!1,!no(a,"html5_remove_not_servable_check_killswitch")&&(null===c||void 0===c?0:c.isNotServable)&&a.config&&(null===c||void 0===c?0:c.isNotServable(null===(b=a.config.args)||void 0===b?void 0:b.video_id))||qo(a)):a.Ba=ag(function(){lo(a)},50)}}
function qo(a){ao(a);a.oa=!0;var b=jo(a);if(b){a.m=ro(a,b,"addEventListener");a.ba=ro(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=ro(a,b,f))}}for(var g in a.i)a.i.hasOwnProperty(g)&&a.m&&a.m(g,a.i[g]);fo(a);a.fa&&a.fa(a.api);a.J.W("onReady",a.api)}
function ro(a,b,c){var d=b[c];return function(e){for(var f=[],g=0;g<arguments.length;++g)f[g-0]=arguments[g];try{return a.lastError=null,d.apply(b,f)}catch(h){"sendAbandonmentPing"!==c&&(h.params=c,a.lastError=h,hl(h))}}}
function ao(a){a.oa=!1;if(a.ba)for(var b in a.i)a.i.hasOwnProperty(b)&&a.ba(b,a.i[b]);for(var c in a.C)a.C.hasOwnProperty(c)&&bg(Number(c));a.C={};a.m=null;a.ba=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.qa};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
m.isReady=function(){return this.oa};
function bo(a){a.addEventListener("WATCH_LATER_VIDEO_ADDED",function(b){hh("WATCH_LATER_VIDEO_ADDED",b)});
a.addEventListener("WATCH_LATER_VIDEO_REMOVED",function(b){hh("WATCH_LATER_VIDEO_REMOVED",b)});
a.addEventListener("onAdAnnounce",function(b){hh("a11y-announce",b)})}
m.addEventListener=function(a,b){var c=this,d=ho(this,b);d&&(0<=Wa(this.Na,a)||this.i[a]||(b=so(this,a),this.m&&this.m(a,b)),this.J.subscribe(a,d),"onReady"===a&&this.isReady()&&ag(function(){d(c.api)},0))};
m.removeEventListener=function(a,b){this.h||(b=ho(this,b))&&lf(this.J,a,b)};
function ho(a,b){var c=b;if("string"===typeof b){if(a.ga[b])return a.ga[b];c=function(d){for(var e=[],f=0;f<arguments.length;++f)e[f-0]=arguments[f];if(f=B(b))try{f.apply(y,e)}catch(g){il(g)}};
a.ga[b]=c}return c?c:null}
function so(a,b){var c="ytPlayer"+b+a.F;a.i[b]=c;y[c]=function(d){var e=ag(function(){if(!a.h){a.J.W(b,d);var f=a.C,g=String(e);g in f&&delete f[g]}},0);
hb(a.C,String(e))};
return c}
m.getPlayerType=function(){return this.L||(jo(this)?"html5":null)};
m.getLastError=function(){return this.lastError};
function mo(a){a.cancel();ao(a);a.L=null;a.config&&(a.config.loaded=!1);var b=jo(a);b&&(io(a)||!po(a)?a.l=b:(b&&b.destroy&&b.destroy(),a.l=null));if(a.o)for(a=a.o;b=a.firstChild;)a.removeChild(b)}
m.cancel=function(){this.B&&mn(ko(this),this.B);bg(this.Ba);this.K=!1};
m.D=function(){mo(this);if(this.l&&this.config&&this.l.destroy)try{this.l.destroy()}catch(b){il(b)}this.ga=null;for(var a in this.i)this.i.hasOwnProperty(a)&&(y[this.i[a]]=null);this.qa=this.config=this.api=null;delete this.o;delete this.j;J.prototype.D.call(this)};
function po(a){var b,c;a=null===(c=null===(b=a.config)||void 0===b?void 0:b.args)||void 0===c?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function ko(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function oo(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function no(a,b){var c;if(a.webPlayerContextConfig)var d=a.webPlayerContextConfig.serializedExperimentFlags;else if(null===(c=a.config)||void 0===c?0:c.args)d=a.config.args.fflags;return"true"===tg(d||"","&")[b]}
function go(a){for(var b={},c=u(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?kb(e):e}return b}
;var to={},uo="player_uid_"+(1E9*Math.random()>>>0);function vo(a,b,c){var d="player";c=void 0===c?!0:c;d="string"===typeof d?Pc(d):d;var e=uo+"_"+Ja(d),f=to[e];if(f&&c)return wo(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new $n(d,e,a,b);to[e]=f;hh("player-added",f.api);Ud(f,function(){delete to[f.getId()]});
return f.api}
function wo(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var xo=null,yo=null,zo=null;function Ao(){var a=xo.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
;function Bo(a,b,c){a="ST-"+Yb(a).toString(36);b=b?cc(b):"";c=c||5;O("drop_st_cookie_before_cb")&&!sl()||Kh(a,b,c)}
;function Co(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=E("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=E("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=ac(window.location.href);g&&f.push(g);g=ac(d);if(0<=Wa(f,g)||!g&&0==d.lastIndexOf("/",0))if(O("autoescape_tempdata_url")&&(f=document.createElement("a"),Sb(f,d),d=f.href),d){g=d.match(Zb);d=g[5];f=g[6];g=g[7];var h="";d&&(h+=d);f&&(h+="?"+f);g&&(h+="#"+g);d=h;f=d.indexOf("#");if(d=0>f?d:d.substr(0,f))if(e&&!b.csn&&(b.itct||b.ved)&&
(b=Object.assign({csn:Nl()},b)),k){var k=parseInt(k,10);isFinite(k)&&0<k&&Bo(d,b,k)}else Bo(d,b)}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var n=void 0===n?"":n;var p=void 0===p?window:p;c=p.location;a=dc(a,l)+n;var r=void 0===r?cd:r;a:{r=void 0===r?cd:r;for(l=0;l<r.length;++l)if(n=r[l],n instanceof ad&&n.isValid(a)){r=new Ic(a,Gc);break a}r=void 0}c.href=Kc(r||Jc)}return!0}
;z("yt.setConfig",N,void 0);z("yt.config.set",N,void 0);z("yt.setMsg",Nf,void 0);z("yt.msgs.set",Nf,void 0);z("yt.logging.errors.log",il,void 0);
z("writeEmbed",function(){var a=E("PLAYER_CONFIG",void 0);if(!a){var b=E("PLAYER_VARS",void 0);b&&(a={args:b})}Al(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=E("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);O("embeds_js_api_set_1p_cookie")&&(c=yg(),c.embedsTokenValue&&(a.args.embedsTokenValue=c.embedsTokenValue));N("FORCE_CSI_ON_GEL",!0);
c=["ol"];wm("").info.actionType="embed";c&&N("TIMING_AFT_KEYS",c);N("TIMING_ACTION","embed");c=E("TIMING_INFO",{});for(var d in c)c.hasOwnProperty(d)&&Mm(d,c[d]);Mm("is_nav",1);(d=Nl())&&Mm("csn",d);(d=E("PREVIOUS_ACTION",void 0))&&!Hm()&&Mm("pa",d);d=rm();c=E("CLIENT_PROTOCOL");var e=E("CLIENT_TRANSPORT");c&&Mm("p",c);e&&Mm("t",e);Mm("yt_vis",Rm());Mm("yt_lt","cold");c=nm();if(e=pm())Z("srt",c.responseStart),1!==d.prerender&&(Mm("yt_sts","n",void 0),Z("_start",e,void 0));d=um();0<d&&Z("fpt",d);if(!O("log_deltas_killswitch")){var f,
g,h,k;U&&U.timing&&(U.timeOrigin&&U.timing.navigationStart&&Om("startTimeDelta",Math.floor(U.timeOrigin)-U.timing.navigationStart),(d=null===(k=null===(h=null===(g=null===(f=U.getEntriesByType)||void 0===f?void 0:f.call(U,"navigation"))||void 0===g?void 0:g[0])||void 0===h?void 0:h.toJSON)||void 0===k?void 0:k.call(h))&&d.responseEnd&&U.timing.responseEnd&&Om("responseEndDelta",om(d.responseEnd)-U.timing.responseEnd))}f=nm();f.isPerformanceNavigationTiming&&Mm("pnt",1,void 0);Z("nreqs",f.requestStart,
void 0);Z("nress",f.responseStart,void 0);Z("nrese",f.responseEnd,void 0);0<f.redirectEnd-f.redirectStart&&(Z("nrs",f.redirectStart,void 0),Z("nre",f.redirectEnd,void 0));0<f.domainLookupEnd-f.domainLookupStart&&(Z("ndnss",f.domainLookupStart,void 0),Z("ndnse",f.domainLookupEnd,void 0));0<f.connectEnd-f.connectStart&&(Z("ntcps",f.connectStart,void 0),Z("ntcpe",f.connectEnd,void 0));f.secureConnectionStart>=pm()&&0<f.connectEnd-f.secureConnectionStart&&(Z("nstcps",f.secureConnectionStart,void 0),Z("ntcpe",
f.connectEnd,void 0));U&&U.getEntriesByType&&Tm();f=[];if(document.querySelector&&U&&U.getEntriesByName)for(var l in km)km.hasOwnProperty(l)&&(g=km[l],Sm(l,g)&&f.push(g));f.length&&Mm("rc",f.join(","));if(Hm(void 0)){l={actionType:Bm[E("TIMING_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN",previousAction:Bm[E("PREVIOUS_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN"};if(f=Nl())l.clientScreenNonce=f;f=sm(void 0);zm().info(l,f)}l=rm();g=mm();if("cold"===l.yt_lt&&(f=Jm(),h=f.gelTicks?f.gelTicks:f.gelTicks={},
f=f.gelInfos?f.gelInfos:f.gelInfos={},Hm())){for(var n in g)"tick_"+n in h||Im(n,g[n]);n=Lm();g=sm();h={};for(var p in l)"info_"+p in f||!(k=Km(p,l[p]))||(Zl(n,k),Zl(h,k));zm().info(h,g)}z("ytglobal.timingready_",!0,void 0);Nm();(p=E("WEB_PLAYER_CONTEXT_CONFIGS",void 0))&&"WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER"in p?(p=p.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER,p.serializedForcedExperimentIds||(n=yg(),n.forced_experiments&&(p.serializedForcedExperimentIds=n.forced_experiments)),xo=vo(a,
p,!1)):xo=vo(a);xo.addEventListener("onVideoDataChange",Ao);a=E("POST_MESSAGE_ID","player");E("ENABLE_JS_API")?zo=new Ln(xo):E("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(yo=new Sn(window.parent,a,b),zo=new Pn(xo,yo.connection));pn();O("networkless_logging_web_embedded")&&zk();O("embeds_enable_ua_ch_polyfill")&&Dn()},void 0);
var Do=Jf(function(){Pm();var a=Mh.getInstance(),b=!!((Ph("f"+(Math.floor(119/31)+1))||0)&67108864),c=1<window.devicePixelRatio;if(document.body&&Xd(document.body,"exp-invert-logo"))if(c&&!Xd(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Xd(d,"inverted-hdpi")){var e=Vd(d);Wd(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Xd(document.body,"inverted-hdpi")&&Yd();if(b!=c){b="f"+(Math.floor(119/31)+1);d=Ph(b)||0;d=c?d|67108864:
d&-67108865;0==d?delete Lh[b]:(c=d.toString(16),Lh[b]=c.toString());c=!0;O("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(var f in Lh)d.push(f+"="+encodeURIComponent(String(Lh[f])));Kh(b,d.join("&"),63072E3,a.i,c)}Vm.h||(Vm.h=new Vm);a=Vm.h;f=16623;var g=void 0===g?{}:g;Object.values(kl).includes(f)||(hl(new wi("createClientScreen() called with a non-page VE",f)),f=83769);g.isHistoryNavigation||a.h.push({rootVe:f,key:g.key||""});a.l=[];a.u=[];g.Fa?Ym(a,f,g):Zm(a,f,g)}),Eo=Jf(function(){xo&&
xo.sendAbandonmentPing&&xo.sendAbandonmentPing();
E("PL_ATT")&&vn.dispose();for(var a=0,b=nn.length;a<b;a++)ig(nn[a]);nn.length=0;ln("//static.doubleclick.net/instream/ad_status.js");on=!1;N("DCLKSTAT",0);Td(zo,yo);xo&&(xo.removeEventListener("onVideoDataChange",Ao),xo.destroy())});
window.addEventListener?(window.addEventListener("load",Do),window.addEventListener("unload",Eo)):window.attachEvent&&(window.attachEvent("onload",Do),window.attachEvent("onunload",Eo));Qa("yt.abuse.player.botguardInitialized",B("yt.abuse.player.botguardInitialized")||wn);Qa("yt.abuse.player.invokeBotguard",B("yt.abuse.player.invokeBotguard")||xn);Qa("yt.abuse.dclkstatus.checkDclkStatus",B("yt.abuse.dclkstatus.checkDclkStatus")||qn);
Qa("yt.player.exports.navigate",B("yt.player.exports.navigate")||Co);Qa("yt.util.activity.init",B("yt.util.activity.init")||kg);Qa("yt.util.activity.getTimeSinceActive",B("yt.util.activity.getTimeSinceActive")||ng);Qa("yt.util.activity.setTimestamp",B("yt.util.activity.setTimestamp")||lg);}).call(this);
