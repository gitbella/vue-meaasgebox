!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["mz-vue-messagebox"]=t():e["mz-vue-messagebox"]=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=2)}([function(e,t,n){n(7);var o=n(5)(n(1),n(6),"data-v-961af4ee",null);e.exports=o.exports},function(e,t,n){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var r;t.default={data:function(){return{shown:!1,confirmButtonText:"确认",cancelButtonText:"取消",btnOk:null,btnCancel:null}},methods:{handleCancel:function(e){console.log("confirmEvent"),this.btnOk?this.btnOk():this.shown=!1},handleConfirm:function(e){console.log("confirmEvent"),this.btnOk?this.btnOk():this.shown=!1}},props:(r={title:String,type:{default:"温馨提示",type:String},message:String},o(r,"type",{default:"温馨提示内容",type:String}),o(r,"showConfirmButton",Boolean),o(r,"type",{default:!0,type:Boolean}),o(r,"showCancelButton",Boolean),o(r,"type",{default:!1,type:Boolean}),o(r,"confirmButtonText",String),o(r,"type",{default:"确认",type:String}),o(r,"cancelButtonText",String),o(r,"type",{default:"取消",type:String}),o(r,"confirmEvent",Function),o(r,"type",{type:Function,default:function(){alert("hi")}}),o(r,"className",[String,Array]),r),computed:{messageClass:function(){var e=[],t=this.className;return t&&("string"==typeof t&&e.push(t),Array.isArray(t)&&(e=e.concat(t))),e.join(" ")}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=n.n(o),a={install:function(e){var t=e.extend(r.a),n=null,o=function(){return n||new t({el:document.createElement("div")})},a=function(e){return"string"==typeof e&&(e={message:e}),e||{}},s=function(e){switch(n=o(),n.message=e.message||"",n.title=e.title||"",n.type=e.type||"alert",n.btnOk=e.btnOk,n.btnCancel=e.btnCancel,n.type){case"alert":n.showCancelButton=!1;break;case"confirm":n.showCancelButton=!0}return n.shown=!0,document.body.appendChild(n.$el),n},i=function(e){return e=a(e),e=Object.assign({type:"alert"},e),s(e)},c=function(e){return e=a(e),e=Object.assign({type:"confirm"},e),s(e)},u=function(e){return e=a(e),e=Object.assign({type:"success"},e),s(e)},l={alert:i,confirm:c,success:u};e.messagebox=e.prototype.$messagebox=l}};t.default=a},function(e,t,n){t=e.exports=n(4)(),t.push([e.i,".messagebox-mask[data-v-961af4ee]{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.5);z-index:1000}.toast[data-v-961af4ee]{position:absolute;color:#000;top:50%;left:50%;transform:translate3d(-50%,-50%,0);width:80%;padding:8px 16px;border-radius:4px;background:#fff;box-sizing:border-box;text-align:center;transition:opacity .3s;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.col-5[data-v-961af4ee]{display:inline-block;width:50%;border:1px solid #ccc}.toast-enter[data-v-961af4ee]{opacity:0;transform:translate3d(-50%,20px,0);transform-origin:-50% -50% 0}.toast-enter-active[data-v-961af4ee]{transition:all .5s ease}.toast-leave[data-v-961af4ee]{opacity:1}.toast-leave-active[data-v-961af4ee]{transition:all .5s ease;opacity:0}.toast-message[data-v-961af4ee]{display:block;font-size:14px;text-align:middle;padding:10px 20px}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var a=this[r][0];"number"==typeof a&&(o[a]=!0)}for(r=0;r<t.length;r++){var s=t[r];"number"==typeof s[0]&&o[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(e,t){e.exports=function(e,t,n,o){var r,a=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(r=e,a=e.default);var i="function"==typeof a?a.options:a;if(t&&(i.render=t.render,i.staticRenderFns=t.staticRenderFns),n&&(i._scopeId=n),o){var c=Object.create(i.computed||null);Object.keys(o).forEach(function(e){var t=o[e];c[e]=function(){return t}}),i.computed=c}return{esModule:r,exports:a,options:i}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.shown,expression:"shown"}],staticClass:"messagebox-mask"},[n("transition",{attrs:{name:"toast"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.shown,expression:"shown"}],staticClass:"toast",class:e.messageClass},[n("div",{staticClass:"title "},[e._v(e._s(e.title))]),e._v(" "),n("div",{staticClass:"message",domProps:{innerHTML:e._s(e.message)}}),e._v(" "),n("div",{staticClass:"btn-group"},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.showCancelButton,expression:"showCancelButton"}],staticClass:"cancel col-5",on:{click:e.handleCancel}},[e._v(e._s(e.cancelButtonText))]),e._v(" "),n("div",{staticClass:"sure col-5",on:{click:e.handleConfirm}},[e._v(e._s(e.confirmButtonText))])])])])],1)},staticRenderFns:[]}},function(e,t,n){var o=n(3);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(8)("6505bae2",o,!0)},function(e,t,n){function o(e){for(var t=0;t<e.length;t++){var n=e[t],o=l[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(a(n.parts[r]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{for(var s=[],r=0;r<n.parts.length;r++)s.push(a(n.parts[r]));l[n.id]={id:n.id,refs:1,parts:s}}}}function r(){var e=document.createElement("style");return e.type="text/css",f.appendChild(e),e}function a(e){var t,n,o=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(o){if(v)return h;o.parentNode.removeChild(o)}if(m){var a=p++;o=d||(d=r()),t=s.bind(null,o,a,!1),n=s.bind(null,o,a,!0)}else o=r(),t=i.bind(null,o),n=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else n()}}function s(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=g(t,r);else{var a=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(a,s[t]):e.appendChild(a)}}function i(e,t){var n=t.css,o=t.media,r=t.sourceMap;if(o&&e.setAttribute("media",o),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=n(9),l={},f=c&&(document.head||document.getElementsByTagName("head")[0]),d=null,p=0,v=!1,h=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){v=n;var r=u(e,t);return o(r),function(t){for(var n=[],a=0;a<r.length;a++){var s=r[a],i=l[s.id];i.refs--,n.push(i)}t?(r=u(e,t),o(r)):r=[];for(var a=0;a<n.length;a++){var i=n[a];if(0===i.refs){for(var c=0;c<i.parts.length;c++)i.parts[c]();delete l[i.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],o={},r=0;r<t.length;r++){var a=t[r],s=a[0],i=a[1],c=a[2],u=a[3],l={id:e+":"+r,css:i,media:c,sourceMap:u};o[s]?o[s].parts.push(l):n.push(o[s]={id:s,parts:[l]})}return n}}])});
//# sourceMappingURL=mz-vue-messagebox.js.map