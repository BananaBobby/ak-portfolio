!function(e){var t={};function i(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=2)}([function(e,t){var i;i=function(){return this}();try{i=i||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(i=window)}e.exports=i},function(e,t,i){"use strict";(function(e,i){function n(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var r=void 0!==e&&"[object global]"==={}.toString.call(e);function o(e,t){return 0===e.indexOf(t.toLowerCase())?e:"".concat(t.toLowerCase()).concat(e.substr(0,1).toUpperCase()).concat(e.substr(1))}function s(e){return/^(https?:)?\/\/((player|www).)?vimeo.com(?=$|\/)/.test(e)}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id,i=e.url,n=t||i;if(!n)throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");if(function(e){return!isNaN(parseFloat(e))&&isFinite(e)&&Math.floor(e)==e}(n))return"https://vimeo.com/".concat(n);if(s(n))return n.replace("http:","https:");if(t)throw new TypeError("“".concat(t,"” is not a valid video id."));throw new TypeError("“".concat(n,"” is not a vimeo.com url."))}var c=void 0!==Array.prototype.indexOf,l="undefined"!=typeof window&&void 0!==window.postMessage;if(!(r||c&&l))throw new Error("Sorry, the Vimeo Player API is not available in this browser.");var u="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};
/*!
 * weakmap-polyfill v2.0.0 - ECMAScript6 WeakMap polyfill
 * https://github.com/polygonplanet/weakmap-polyfill
 * Copyright (c) 2015-2016 polygon planet <polygon.planet.aqua@gmail.com>
 * @license MIT
 */
!function(e){if(!e.WeakMap){var t=Object.prototype.hasOwnProperty,i=function(e,t,i){Object.defineProperty?Object.defineProperty(e,t,{configurable:!0,writable:!0,value:i}):e[t]=i};e.WeakMap=function(){function e(){if(void 0===this)throw new TypeError("Constructor WeakMap requires 'new'");if(i(this,"_id",function(e){return e+"_"+o()+"."+o()}("_WeakMap")),arguments.length>0)throw new TypeError("WeakMap iterable is not supported")}function r(e,i){if(!n(e)||!t.call(e,"_id"))throw new TypeError(i+" method called on incompatible receiver "+typeof e)}function o(){return Math.random().toString().substring(2)}return i(e.prototype,"delete",function(e){if(r(this,"delete"),!n(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)&&(delete e[this._id],!0)}),i(e.prototype,"get",function(e){if(r(this,"get"),n(e)){var t=e[this._id];return t&&t[0]===e?t[1]:void 0}}),i(e.prototype,"has",function(e){if(r(this,"has"),!n(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)}),i(e.prototype,"set",function(e,t){if(r(this,"set"),!n(e))throw new TypeError("Invalid value used as weak map key");var o=e[this._id];return o&&o[0]===e?(o[1]=t,this):(i(e,this._id,[e,t]),this)}),i(e,"_polyfill",!0),e}()}function n(e){return Object(e)===e}}("undefined"!=typeof self?self:"undefined"!=typeof window?window:u);var d=function(e,t){return e(t={exports:{}},t.exports),t.exports
/*!
 * weakmap-polyfill v2.0.0 - ECMAScript6 WeakMap polyfill
 * https://github.com/polygonplanet/weakmap-polyfill
 * Copyright (c) 2015-2016 polygon planet <polygon.planet.aqua@gmail.com>
 * @license MIT
 */}(function(e){
/*! Native Promise Only
    v0.8.1 (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
*/
!function(t,i,n){i[t]=i[t]||n(),e.exports&&(e.exports=i[t])}("Promise",u,function(){var e,t,n,r=Object.prototype.toString,o=void 0!==i?function(e){return i(e)}:setTimeout;try{Object.defineProperty({},"x",{}),e=function(e,t,i,n){return Object.defineProperty(e,t,{value:i,writable:!0,configurable:!1!==n})}}catch(t){e=function(e,t,i){return e[t]=i,e}}function s(e,i){n.add(e,i),t||(t=o(n.drain))}function a(e){var t,i=typeof e;return null==e||"object"!=i&&"function"!=i||(t=e.then),"function"==typeof t&&t}function c(){for(var e=0;e<this.chain.length;e++)l(this,1===this.state?this.chain[e].success:this.chain[e].failure,this.chain[e]);this.chain.length=0}function l(e,t,i){var n,r;try{!1===t?i.reject(e.msg):(n=!0===t?e.msg:t.call(void 0,e.msg))===i.promise?i.reject(TypeError("Promise-chain cycle")):(r=a(n))?r.call(n,i.resolve,i.reject):i.resolve(n)}catch(e){i.reject(e)}}function u(e){var t=this;t.triggered||(t.triggered=!0,t.def&&(t=t.def),t.msg=e,t.state=2,t.chain.length>0&&s(c,t))}function d(e,t,i,n){for(var r=0;r<t.length;r++)!function(r){e.resolve(t[r]).then(function(e){i(r,e)},n)}(r)}function h(e){this.def=e,this.triggered=!1}function f(e){if("function"!=typeof e)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");this.__NPO__=1;var t=new function(e){this.promise=e,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}(this);this.then=function(e,i){var n={success:"function"!=typeof e||e,failure:"function"==typeof i&&i};return n.promise=new this.constructor(function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");n.resolve=e,n.reject=t}),t.chain.push(n),0!==t.state&&s(c,t),n.promise},this.catch=function(e){return this.then(void 0,e)};try{e.call(void 0,function(e){(function e(t){var i,n=this;if(!n.triggered){n.triggered=!0,n.def&&(n=n.def);try{(i=a(t))?s(function(){var r=new h(n);try{i.call(t,function(){e.apply(r,arguments)},function(){u.apply(r,arguments)})}catch(e){u.call(r,e)}}):(n.msg=t,n.state=1,n.chain.length>0&&s(c,n))}catch(e){u.call(new h(n),e)}}}).call(t,e)},function(e){u.call(t,e)})}catch(e){u.call(t,e)}}n=function(){var e,i,n;return{add:function(t,r){n=new function(e,t){this.fn=e,this.self=t,this.next=void 0}(t,r),i?i.next=n:e=n,i=n,n=void 0},drain:function(){var n=e;for(e=i=t=void 0;n;)n.fn.call(n.self),n=n.next}}}();var v=e({},"constructor",f,!1);return f.prototype=v,e(v,"__NPO__",0,!1),e(f,"resolve",function(e){return e&&"object"==typeof e&&1===e.__NPO__?e:new this(function(t,i){if("function"!=typeof t||"function"!=typeof i)throw TypeError("Not a function");t(e)})}),e(f,"reject",function(e){return new this(function(t,i){if("function"!=typeof t||"function"!=typeof i)throw TypeError("Not a function");i(e)})}),e(f,"all",function(e){var t=this;return"[object Array]"!=r.call(e)?t.reject(TypeError("Not an array")):0===e.length?t.resolve([]):new t(function(i,n){if("function"!=typeof i||"function"!=typeof n)throw TypeError("Not a function");var r=e.length,o=Array(r),s=0;d(t,e,function(e,t){o[e]=t,++s===r&&i(o)},n)})}),e(f,"race",function(e){var t=this;return"[object Array]"!=r.call(e)?t.reject(TypeError("Not an array")):new t(function(i,n){if("function"!=typeof i||"function"!=typeof n)throw TypeError("Not a function");d(t,e,function(e,t){i(t)},n)})}),f})}),h=new WeakMap;function f(e,t,i){var n=h.get(e.element)||{};t in n||(n[t]=[]),n[t].push(i),h.set(e.element,n)}function v(e,t){return(h.get(e.element)||{})[t]||[]}function m(e,t,i){var n=h.get(e.element)||{};if(!n[t])return!0;if(!i)return n[t]=[],h.set(e.element,n),!0;var r=n[t].indexOf(i);return-1!==r&&n[t].splice(r,1),h.set(e.element,n),n[t]&&0===n[t].length}var p=["autopause","autoplay","background","byline","color","height","id","loop","maxheight","maxwidth","muted","playsinline","portrait","responsive","speed","title","transparent","url","width"];function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return p.reduce(function(t,i){var n=e.getAttribute("data-vimeo-".concat(i));return(n||""===n)&&(t[i]=""===n?1:n),t},t)}function g(e,t){var i=e.html;if(!t)throw new TypeError("An element must be provided");if(null!==t.getAttribute("data-vimeo-initialized"))return t.querySelector("iframe");var n=document.createElement("div");return n.innerHTML=i,t.appendChild(n.firstChild),t.setAttribute("data-vimeo-initialized","true"),t.querySelector("iframe")}function w(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2?arguments[2]:void 0;return new Promise(function(n,r){if(!s(e))throw new TypeError("“".concat(e,"” is not a vimeo.com url."));var o="https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(e),"&domain=").concat(window.location.hostname);for(var a in t)t.hasOwnProperty(a)&&(o+="&".concat(a,"=").concat(encodeURIComponent(t[a])));var c="XDomainRequest"in window?new XDomainRequest:new XMLHttpRequest;c.open("GET",o,!0),c.onload=function(){if(404!==c.status)if(403!==c.status)try{var t=JSON.parse(c.responseText);if(403===t.domain_status_code)return g(t,i),void r(new Error("“".concat(e,"” is not embeddable.")));n(t)}catch(e){r(e)}else r(new Error("“".concat(e,"” is not embeddable.")));else r(new Error("“".concat(e,"” was not found.")))},c.onerror=function(){var e=c.status?" (".concat(c.status,")"):"";r(new Error("There was an error fetching the embed code from Vimeo".concat(e,".")))},c.send()})}function _(e){return"string"==typeof e&&(e=JSON.parse(e)),e}function b(e,t,i){if(e.element.contentWindow&&e.element.contentWindow.postMessage){var n={method:t};void 0!==i&&(n.value=i);var r=parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/,"$1"));r>=8&&r<10&&(n=JSON.stringify(n)),e.element.contentWindow.postMessage(n,e.origin)}}function A(e,t){var i,n=[];if((t=_(t)).event){if("error"===t.event)v(e,t.data.method).forEach(function(i){var n=new Error(t.data.message);n.name=t.data.name,i.reject(n),m(e,t.data.method,i)});n=v(e,"event:".concat(t.event)),i=t.data}else if(t.method){var r=function(e,t){var i=v(e,t);if(i.length<1)return!1;var n=i.shift();return m(e,t,n),n}(e,t.method);r&&(n.push(r),i=t.value)}n.forEach(function(t){try{if("function"==typeof t)return void t.call(e,i);t.resolve(i)}catch(e){}})}var k=new WeakMap,T=new WeakMap,S=function(){function e(t){var i=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(/*! @vimeo/player v2.6.3 | (c) 2018 Vimeo | MIT License | https://github.com/vimeo/player.js */
function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),window.jQuery&&t instanceof jQuery&&(t.length>1&&window.console&&console.warn&&console.warn("A jQuery object with multiple elements was passed, using the first element."),t=t[0]),"undefined"!=typeof document&&"string"==typeof t&&(t=document.getElementById(t)),!function(e){return e instanceof window.HTMLElement}(t))throw new TypeError("You must pass either a valid element or a valid id.");if("IFRAME"!==t.nodeName){var r=t.querySelector("iframe");r&&(t=r)}if("IFRAME"===t.nodeName&&!s(t.getAttribute("src")||""))throw new Error("The player element passed isn’t a Vimeo embed.");if(k.has(t))return k.get(t);this.element=t,this.origin="*";var o=new d(function(e,r){var o=function(t){if(s(t.origin)&&i.element.contentWindow===t.source){"*"===i.origin&&(i.origin=t.origin);var n=_(t.data),r="event"in n&&"ready"===n.event,o="method"in n&&"ping"===n.method;if(r||o)return i.element.setAttribute("data-ready","true"),void e();A(i,n)}};if(window.addEventListener?window.addEventListener("message",o,!1):window.attachEvent&&window.attachEvent("onmessage",o),"IFRAME"!==i.element.nodeName){var c=y(t,n);w(a(c),c,t).then(function(e){var n=g(e,t);return i.element=n,i._originalElement=t,function(e,t){var i=h.get(e);h.set(t,i),h.delete(e)}(t,n),k.set(i.element,i),e}).catch(function(e){return r(e)})}});return T.set(this,o),k.set(this.element,this),"IFRAME"===this.element.nodeName&&b(this,"ping"),this}return function(e,t,i){t&&n(e.prototype,t),i&&n(e,i)}(e,[{key:"callMethod",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new d(function(n,r){return t.ready().then(function(){f(t,e,{resolve:n,reject:r}),b(t,e,i)}).catch(function(e){r(e)})})}},{key:"get",value:function(e){var t=this;return new d(function(i,n){return e=o(e,"get"),t.ready().then(function(){f(t,e,{resolve:i,reject:n}),b(t,e)})})}},{key:"set",value:function(e,t){var i=this;return d.resolve(t).then(function(t){if(e=o(e,"set"),void 0===t||null===t)throw new TypeError("There must be a value to set.");return i.ready().then(function(){return new d(function(n,r){f(i,e,{resolve:n,reject:r}),b(i,e,t)})})})}},{key:"on",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(!t)throw new TypeError("You must pass a callback function.");if("function"!=typeof t)throw new TypeError("The callback must be a function.");0===v(this,"event:".concat(e)).length&&this.callMethod("addEventListener",e).catch(function(){}),f(this,"event:".concat(e),t)}},{key:"off",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(t&&"function"!=typeof t)throw new TypeError("The callback must be a function.");m(this,"event:".concat(e),t)&&this.callMethod("removeEventListener",e).catch(function(e){})}},{key:"loadVideo",value:function(e){return this.callMethod("loadVideo",e)}},{key:"ready",value:function(){var e=T.get(this)||new d(function(e,t){t(new Error("Unknown player. Probably unloaded."))});return d.resolve(e)}},{key:"addCuePoint",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.callMethod("addCuePoint",{time:e,data:t})}},{key:"removeCuePoint",value:function(e){return this.callMethod("removeCuePoint",e)}},{key:"enableTextTrack",value:function(e,t){if(!e)throw new TypeError("You must pass a language.");return this.callMethod("enableTextTrack",{language:e,kind:t})}},{key:"disableTextTrack",value:function(){return this.callMethod("disableTextTrack")}},{key:"pause",value:function(){return this.callMethod("pause")}},{key:"play",value:function(){return this.callMethod("play")}},{key:"unload",value:function(){return this.callMethod("unload")}},{key:"destroy",value:function(){var e=this;return new d(function(t){T.delete(e),k.delete(e.element),e._originalElement&&(k.delete(e._originalElement),e._originalElement.removeAttribute("data-vimeo-initialized")),e.element&&"IFRAME"===e.element.nodeName&&e.element.remove(),t()})}},{key:"getAutopause",value:function(){return this.get("autopause")}},{key:"setAutopause",value:function(e){return this.set("autopause",e)}},{key:"getColor",value:function(){return this.get("color")}},{key:"setColor",value:function(e){return this.set("color",e)}},{key:"getCuePoints",value:function(){return this.get("cuePoints")}},{key:"getCurrentTime",value:function(){return this.get("currentTime")}},{key:"setCurrentTime",value:function(e){return this.set("currentTime",e)}},{key:"getDuration",value:function(){return this.get("duration")}},{key:"getEnded",value:function(){return this.get("ended")}},{key:"getLoop",value:function(){return this.get("loop")}},{key:"setLoop",value:function(e){return this.set("loop",e)}},{key:"getPaused",value:function(){return this.get("paused")}},{key:"getPlaybackRate",value:function(){return this.get("playbackRate")}},{key:"setPlaybackRate",value:function(e){return this.set("playbackRate",e)}},{key:"getTextTracks",value:function(){return this.get("textTracks")}},{key:"getVideoEmbedCode",value:function(){return this.get("videoEmbedCode")}},{key:"getVideoId",value:function(){return this.get("videoId")}},{key:"getVideoTitle",value:function(){return this.get("videoTitle")}},{key:"getVideoWidth",value:function(){return this.get("videoWidth")}},{key:"getVideoHeight",value:function(){return this.get("videoHeight")}},{key:"getVideoUrl",value:function(){return this.get("videoUrl")}},{key:"getVolume",value:function(){return this.get("volume")}},{key:"setVolume",value:function(e){return this.set("volume",e)}}]),e}();r||!window.Vimeo||window.Vimeo.Player||(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=function(e){"console"in window&&console.error&&console.error("There was an error creating an embed: ".concat(e))};[].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")).forEach(function(e){try{if(null!==e.getAttribute("data-vimeo-defer"))return;var i=y(e);w(a(i),i,e).then(function(t){return g(t,e)}).catch(t)}catch(e){t(e)}})}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=function(t){if(s(t.origin)&&t.data&&"spacechange"===t.data.event)for(var i=e.querySelectorAll("iframe"),n=0;n<i.length;n++)if(i[n].contentWindow===t.source){i[n].parentElement.style.paddingBottom="".concat(t.data.data[0].bottom,"px");break}};window.addEventListener?window.addEventListener("message",t,!1):window.attachEvent&&window.attachEvent("onmessage",t)}()),t.a=S}).call(this,i(0),i(5).setImmediate)},function(e,t,i){"use strict";i.r(t),window.AB||(window.AB={}),window.AB.components||(window.AB.components={});var n=new class{constructor(){this.store={}}register(e,t){if(e in Object.keys(this.store))throw new Error(`${e} is already registered`);this.store[e]=t,window.AB.components[e]=e}get(e){return this.store[e]}};function r(e,t,i,n){const r=function(e){const t=function(e,t){if("function"==typeof e.closest)return e.closest(t);const i=document.querySelectorAll(t);for(let t=0;t<i.length;t++){let n=e;for(;n;){if(i[t]===n)return n;n=n.parentElement}}}(e.target,i);e.delegateTarget=t,t&&n.call(null,e)};return e.addEventListener(t,r),function(){e.removeEventListener(t,r)}}window.AB||(window.AB={});class o{constructor(e,t){this.root=e,this.props=t||{},this.handlers=null,this.selectors={},this.modifiers={},this._removeHandlersMap={}}setState(e){if(!this.state)throw new Error("\n                You are trying to update a state that wasn't initialised yet.\n                Create it in the init method of your component first e.g. this.state = { foo: 'bar' };\n            ");this.state=Object.assign({},this.state,e)}_toggleHandlers(e){const t=this.handlers,i=this.selectors;t&&Object.keys(t).forEach(n=>{const o=n.split("@"),s=o[0],a=o[1];if(!s||!a)throw new Error("Wrong syntax for component");const c=t[n].bind(this);let l;if("window"===s&&(l=window),"body"===s&&(l=document.body),"root"===s&&(l=this.root),l){return void l[e?"addEventListener":"removeEventListener"](a,c)}const u=i[s];if(!u)throw new Error("Selector for element not found");if(e)"scroll"===a?this.root.querySelector(u).addEventListener(a,c):this._removeHandlersMap[n]=r(this.root,a,u,c);else if("scroll"===a)this.root.querySelector(u).removeEventListener(a,c);else{const e=this._removeHandlersMap[n];e&&e()}})}onMount(){}onUnmount(){}mount(){this._toggleHandlers(!0),this.onMount()}unmount(){this._toggleHandlers(!1),this.onUnmount()}}function s(e,t,i){return new(n.get(e))(t,i)}function a(e){(e||document.body).querySelectorAll("[data-component]").forEach(e=>{e.getAttribute("data-component").split(",").forEach(t=>{if(!t)return;s(t,e).mount()})})}window.AB.getInstance=s,window.AB.initComponents=a;n.register("TimedMenu",class extends o{constructor(e){super(e),this._handleMousewheel=(e=>{this.instances.length&&null!==this.state.activeSliderIndex&&"hidden"!==document.body.style.overflow&&this.scrolls[this.state.activeSliderIndex].scrollBy({top:e.deltaY})}),this._handleClose=(()=>{const e=this.root.classList,t=this.modifiers.contentActive;this.state.layoutActive&&(this.instances=[],this.items.forEach(e=>e.classList.remove(this.modifiers.itemSelected)),e.remove(t),this.setState({layoutActive:!1}),this._setNextActive(),this._startTimer())}),this._handleMoreClick=(e=>{e.preventDefault(),this.choose(this.state.activeIndex)}),this._handleItemClick=(e=>{e.preventDefault();const t=e.delegateTarget,i=Array.prototype.slice.call(this.items).indexOf(t);this.choose(i)}),this.choose=(e=>{const t=this.items[e];this.items.forEach(e=>e.classList.remove(this.modifiers.itemSelected,this.modifiers.itemActive)),this.contents.forEach(e=>e.classList.remove(this.modifiers.typeActive)),clearInterval(this.timer),this.setState({layoutActive:!0,activeIndex:e}),t.classList.add(this.modifiers.itemSelected,this.modifiers.itemActive),this.root.classList.add(this.modifiers.contentActive),this.contents[e].classList.add(this.modifiers.typeActive),this._initSlider(e)}),this._handleSliderPrev=(e=>{if(e.preventDefault(),!this.instances[this.state.activeSliderIndex])return;const{isFirst:t,isLast:i}=this.instances[this.state.activeSliderIndex].setPreviousSlide();this.sliderPrev.classList.toggle(this.modifiers.controlHidden,t),this.sliderNext.classList.toggle(this.modifiers.controlHidden,i)}),this._handleSliderNext=(e=>{if(e.preventDefault(),!this.instances[this.state.activeSliderIndex])return;const{isLast:t,isFirst:i}=this.instances[this.state.activeSliderIndex].setNextSlide();this.sliderPrev.classList.toggle(this.modifiers.controlHidden,i),this.sliderNext.classList.toggle(this.modifiers.controlHidden,t)}),this._initSlider=(e=>{null!==this.state.activeSliderIndex&&(this.sliderPrev.removeEventListener("click",this._handleSliderPrev),this.sliderNext.removeEventListener("click",this._handleSliderNext)),this.instances[e]&&this.instances[e].unmount();const t=this.sliders[e];this.instances[e]=window.AB.getInstance("ContentSlider",t,{onScroll:({isFirst:e,isLast:t})=>{this.sliderPrev.classList.toggle(this.modifiers.controlHidden,e),this.sliderNext.classList.toggle(this.modifiers.controlHidden,t)}}),this.setState({activeSliderIndex:e}),this.sliderPrev.classList.add(this.modifiers.controlHidden),this.sliderNext.classList.remove(this.modifiers.controlHidden),this.sliderPrev.addEventListener("click",this._handleSliderPrev),this.sliderNext.addEventListener("click",this._handleSliderNext),this.instances[e].mount()}),this._setActive=(e=>{const t=this.items[e],i=this.items[this.state.activeIndex];this.setState({activeIndex:e}),this.items.forEach(e=>e.classList.remove(this.modifiers.itemActive)),this.sections.forEach(e=>e.classList.remove(this.modifiers.sectionActive)),i&&(i.querySelector(this.selectors.progress).style.width=0),t.classList.add(this.modifiers.itemActive),setTimeout(()=>t.querySelector(this.selectors.progress).style.width="100%",0),this.sections[e].classList.add(this.modifiers.sectionActive)}),this._setNextActive=(()=>{const e=this.state.activeIndex,t=this.items.length;this._setActive(e===t-1?0:e+1)}),this._startTimer=(()=>{this.timer=setInterval(this._setNextActive,this.state.timeout)}),this.selectors={item:".js-timed-menu__item",progress:".js-timed-menu__progress",section:".js-timed-menu__section",more:".js-timed-menu__more",close:".js-timed-menu__close",contentType:".js-timed-menu__content-type",slider:".js-content-slider",sliderScroll:".js-content-slider__scroll",sliderPrev:".js-timed-menu__slider-prev",sliderNext:".js-timed-menu__slider-next"},this.state={layoutActive:!1,activeIndex:0,activeSliderIndex:null,timeout:6e3},this.modifiers={contentActive:"layout_active",itemActive:"menu__item_active",itemSelected:"menu__item_selected",sectionActive:"layout__previews-section_active",typeActive:"layout__content-type_active",controlHidden:"layout__control_hidden"},this.handlers={"more@click":this._handleMoreClick,"close@click":this._handleClose,"item@click":this._handleItemClick,"body@mousewheel":this._handleMousewheel},this.items=e.querySelectorAll(this.selectors.item),this.sections=e.querySelectorAll(this.selectors.section),this.contents=e.querySelectorAll(this.selectors.contentType),this.sliders=e.querySelectorAll(this.selectors.slider),this.scrolls=e.querySelectorAll(this.selectors.sliderScroll),this.sliderPrev=e.querySelector(this.selectors.sliderPrev),this.sliderNext=e.querySelector(this.selectors.sliderNext),this.timer=null,this.instances=[]}onMount(){this._setActive(0),this._startTimer()}});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e};n.register("ContentSlider",class extends o{constructor(e,t){super(e),this._handleScroll=(()=>{const e=this.scroll.clientHeight,t=this.scroll.scrollTop,i=t%e;let n=Math.floor(t/e);0===i&&(n-=1);let r=Math.floor(t/e)+1;this.setState({prevIndex:n,nextIndex:r}),this.props.onScroll&&this.props.onScroll({isFirst:n<0,isLast:r>=this.items.length})}),this._handleReset=(()=>{this.setSlide(0)}),this._handleKeyDown=(e=>{switch(e.which){case 40:e.preventDefault(),this.setNextSlide();break;case 38:e.preventDefault(),this.setPreviousSlide()}}),this.setNextSlide=(()=>{const e=this.setSlide(this.state.nextIndex);return{index:e,isLast:e===this.items.length-1,isFirst:0===e}}),this.setPreviousSlide=(()=>{const e=this.setSlide(this.state.prevIndex);return{index:e,isLast:e===this.items.length-1,isFirst:0===e}}),this.setSlide=(e=>{const t=Math.min(Math.max(0,e),this.items.length-1),i=this.items[t];if(!i)return;const n=t-1,r=t+1;return i.scrollIntoView({behavior:"smooth"}),this.setState({prevIndex:n,nextIndex:r}),t}),this.selectors={scroll:".js-content-slider__scroll",item:".js-content-slider__item",control:".js-content-slider__control",reset:".js-content-slider__reset",prev:".js-content-slider__control-prev",next:".js-content-slider__control-next"},this.modifiers={controlHidden:"layout__control--hidden"},this.props=c({},t),this.state={activeIndex:0,prevIndex:-1,nextIndex:1},this.handlers={"reset@click":this._handleReset,"window@keydown":this._handleKeyDown,"scroll@scroll":this._handleScroll},this.items=this.root.querySelectorAll(this.selectors.item),this.scroll=this.root.querySelector(this.selectors.scroll)}onMount(){}});var l=i(1);const u=e=>`\n    <div class="viewer__action-title">${e.title}</div>\n    <div class="viewer__action-text">${e.description}</div>\n`,d=e=>e.includes("vimeo.com"),h=e=>{let t="";return e.media?(e.media.forEach((i,n)=>{d(i)?t+=`\n                <div class="viewer__slide js-gallery__slide ${!n&&"viewer__slide_active"}">\n                      <img class="viewer__video-holder" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />\n                      <iframe src="${i}" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n                </div>\n            `:t+=`\n            <div class="viewer__slide js-gallery__slide ${!n&&"viewer__slide_active"}">\n                ${e.soon?'<div class="viewer__badge">Coming soon</div>':""}    \n                <img class="viewer__src" src="${i}" />\n            </div>\n        `}),t):t};n.register("Gallery",class extends o{constructor(e){super(e),this._handleKeyDown=(e=>{if(this.state.active)switch(e.which){case 37:this._handlePrevClick(e);break;case 39:this._handleNextClick(e);break;case 27:this._handleClose(e)}}),this._handleActionClick=(e=>{e.preventDefault(),this.toggleAction()}),this._handleClose=(e=>{e.preventDefault(),this.toggle(),this.togglePlayer(!1),this.toggleAction(!1)}),this._handlePreviewClick=(e=>{e.preventDefault();const t=JSON.parse(e.delegateTarget.getAttribute("data-post"));this.post=t,this.info.innerHTML=u(t),this.media.innerHTML=h(t),this.viewer.classList.remove(this.modifiers.typePhoto,this.modifiers.typeVideo),this.viewer.classList.add(t.video?this.modifiers.typeVideo:this.modifiers.typePhoto),this.slides=this.media.querySelectorAll(this.selectors.slide),this.setActiveSlide(0),this.toggle(),this.togglePlayer(!0)}),this._handlePrevClick=(e=>{e.preventDefault();const t=this.state.activeIndex-1;this.togglePlayer(!1),this.setActiveSlide(t),this.togglePlayer(!0)}),this._handleNextClick=(e=>{e.preventDefault();const t=this.state.activeIndex+1;this.togglePlayer(!1),this.setActiveSlide(t),this.togglePlayer(!0)}),this.setActiveSlide=(e=>{if(this.post&&this.post.media&&this.slides&&!(e<0||e>this.post.media.length-1)&&(this.player=null,this.slides.forEach(e=>e.classList.remove(this.modifiers.slideActive)),this.slides[e].classList.add(this.modifiers.slideActive),this.prev.classList[0===e?"add":"remove"](this.modifiers.controlHidden),this.next.classList[e===this.post.media.length-1?"add":"remove"](this.modifiers.controlHidden),this.setState({activeIndex:e}),d(this.post.media[e]))){const t=this.slides[e].querySelector("iframe");this.player=new l.a(t)}}),this.togglePlayer=(e=>{this.player&&!e&&this.player.pause(),this.player&&e&&this.player.play()}),this.toggle=(e=>{const t=void 0!==e?e:!this.state.active;this.viewer.classList[t?"add":"remove"](this.modifiers.active),this.setState({active:t}),t?this._preventBodyScroll():this._releaseBodyScroll()}),this.toggleAction=(e=>{const t=void 0!==e?e:!this.state.actionActive;this.action.classList[t?"add":"remove"](this.modifiers.actionActive),this.setState({actionActive:t})}),this.selectors={preview:".js-gallery__preview",viewer:".js-gallery__viewer",close:".js-gallery__close",action:".js-gallery__action",actionButton:".js-gallery__action-button",actionInfo:".js-gallery__info",media:".js-gallery__media",prev:".js-gallery__prev",next:".js-gallery__next",slide:".js-gallery__slide"},this.modifiers={active:"viewer_active",actionActive:"viewer__action_active",typePhoto:"viewer_photo",typeVideo:"viewer_video",slideActive:"viewer__slide_active",controlHidden:"viewer__control_hidden"},this.state={active:!1,actionActive:!1,activeIndex:0},this.handlers={"close@click":this._handleClose,"preview@click":this._handlePreviewClick,"actionButton@click":this._handleActionClick,"prev@click":this._handlePrevClick,"next@click":this._handleNextClick,"window@keydown":this._handleKeyDown},this.viewer=e.querySelector(this.selectors.viewer),this.action=e.querySelector(this.selectors.action),this.info=e.querySelector(this.selectors.actionInfo),this.media=e.querySelector(this.selectors.media),this.prev=e.querySelector(this.selectors.prev),this.next=e.querySelector(this.selectors.next)}_preventBodyScroll(){this._overflowStyle=document.body.style.overflow,document.body.style.overflow="hidden"}_releaseBodyScroll(){document.body.style.overflow=this._overflowStyle}onMount(){}}),setTimeout(a,16)},function(e,t){var i,n,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(i===setTimeout)return setTimeout(e,0);if((i===o||!i)&&setTimeout)return i=setTimeout,setTimeout(e,0);try{return i(e,0)}catch(t){try{return i.call(null,e,0)}catch(t){return i.call(this,e,0)}}}!function(){try{i="function"==typeof setTimeout?setTimeout:o}catch(e){i=o}try{n="function"==typeof clearTimeout?clearTimeout:s}catch(e){n=s}}();var c,l=[],u=!1,d=-1;function h(){u&&c&&(u=!1,c.length?l=c.concat(l):d=-1,l.length&&f())}function f(){if(!u){var e=a(h);u=!0;for(var t=l.length;t;){for(c=l,l=[];++d<t;)c&&c[d].run();d=-1,t=l.length}c=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function v(e,t){this.fun=e,this.array=t}function m(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)t[i-1]=arguments[i];l.push(new v(e,t)),1!==l.length||u||a(f)},v.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.prependListener=m,r.prependOnceListener=m,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},function(e,t,i){(function(e,t){!function(e,i){"use strict";if(!e.setImmediate){var n,r=1,o={},s=!1,a=e.document,c=Object.getPrototypeOf&&Object.getPrototypeOf(e);c=c&&c.setTimeout?c:e,"[object process]"==={}.toString.call(e.process)?n=function(e){t.nextTick(function(){u(e)})}:function(){if(e.postMessage&&!e.importScripts){var t=!0,i=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=i,t}}()?function(){var t="setImmediate$"+Math.random()+"$",i=function(i){i.source===e&&"string"==typeof i.data&&0===i.data.indexOf(t)&&u(+i.data.slice(t.length))};e.addEventListener?e.addEventListener("message",i,!1):e.attachEvent("onmessage",i),n=function(i){e.postMessage(t+i,"*")}}():e.MessageChannel?function(){var e=new MessageChannel;e.port1.onmessage=function(e){u(e.data)},n=function(t){e.port2.postMessage(t)}}():a&&"onreadystatechange"in a.createElement("script")?function(){var e=a.documentElement;n=function(t){var i=a.createElement("script");i.onreadystatechange=function(){u(t),i.onreadystatechange=null,e.removeChild(i),i=null},e.appendChild(i)}}():n=function(e){setTimeout(u,0,e)},c.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),i=0;i<t.length;i++)t[i]=arguments[i+1];var s={callback:e,args:t};return o[r]=s,n(r),r++},c.clearImmediate=l}function l(e){delete o[e]}function u(e){if(s)setTimeout(u,0,e);else{var t=o[e];if(t){s=!0;try{!function(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(i,n)}}(t)}finally{l(e),s=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,i(0),i(3))},function(e,t,i){(function(e){var n=void 0!==e&&e||"undefined"!=typeof self&&self||window,r=Function.prototype.apply;function o(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new o(r.call(setTimeout,n,arguments),clearTimeout)},t.setInterval=function(){return new o(r.call(setInterval,n,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(n,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},i(4),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,i(0))}]);