(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();var ot=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function it(d){return d&&d.__esModule&&Object.prototype.hasOwnProperty.call(d,"default")?d.default:d}var nt={exports:{}};(function(d,s){(function(t,n){d.exports=n()})(ot,function(){return function(t){function n(o){if(e[o])return e[o].exports;var r=e[o]={exports:{},id:o,loaded:!1};return t[o].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}var e={};return n.m=t,n.c=e,n.p="dist/",n(0)}([function(t,n,e){function o(c){return c&&c.__esModule?c:{default:c}}var r=Object.assign||function(c){for(var x=1;x<arguments.length;x++){var M=arguments[x];for(var _ in M)Object.prototype.hasOwnProperty.call(M,_)&&(c[_]=M[_])}return c},f=e(1),b=(o(f),e(6)),u=o(b),y=e(7),l=o(y),p=e(8),h=o(p),v=e(9),C=o(v),j=e(10),Y=o(j),G=e(11),U=o(G),V=e(14),R=o(V),E=[],K=!1,w={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},A=function(){var c=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(c&&(K=!0),K)return E=(0,U.default)(E,w),(0,Y.default)(E,w.once),E},D=function(){E=(0,R.default)(),A()},a=function(){E.forEach(function(c,x){c.node.removeAttribute("data-aos"),c.node.removeAttribute("data-aos-easing"),c.node.removeAttribute("data-aos-duration"),c.node.removeAttribute("data-aos-delay")})},i=function(c){return c===!0||c==="mobile"&&C.default.mobile()||c==="phone"&&C.default.phone()||c==="tablet"&&C.default.tablet()||typeof c=="function"&&c()===!0},m=function(c){w=r(w,c),E=(0,R.default)();var x=document.all&&!window.atob;return i(w.disable)||x?a():(w.disableMutationObserver||h.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),w.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",w.easing),document.querySelector("body").setAttribute("data-aos-duration",w.duration),document.querySelector("body").setAttribute("data-aos-delay",w.delay),w.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?A(!0):w.startEvent==="load"?window.addEventListener(w.startEvent,function(){A(!0)}):document.addEventListener(w.startEvent,function(){A(!0)}),window.addEventListener("resize",(0,l.default)(A,w.debounceDelay,!0)),window.addEventListener("orientationchange",(0,l.default)(A,w.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,Y.default)(E,w.once)},w.throttleDelay)),w.disableMutationObserver||h.default.ready("[data-aos]",D),E)};t.exports={init:m,refresh:A,refreshHard:D}},function(t,n){},,,,,function(t,n){(function(e){function o(i,m,c){function x(g){var T=L,F=q;return L=q=void 0,z=g,S=i.apply(F,T)}function M(g){return z=g,O=setTimeout(W,m),H?x(g):S}function _(g){var T=g-P,F=g-z,tt=m-T;return B?D(tt,I-F):tt}function $(g){var T=g-P,F=g-z;return P===void 0||T>=m||T<0||B&&F>=I}function W(){var g=a();return $(g)?Q(g):void(O=setTimeout(W,_(g)))}function Q(g){return O=void 0,k&&L?x(g):(L=q=void 0,S)}function X(){O!==void 0&&clearTimeout(O),z=0,L=P=q=O=void 0}function J(){return O===void 0?S:Q(a())}function N(){var g=a(),T=$(g);if(L=arguments,q=this,P=g,T){if(O===void 0)return M(P);if(B)return O=setTimeout(W,m),x(P)}return O===void 0&&(O=setTimeout(W,m)),S}var L,q,I,S,O,P,z=0,H=!1,B=!1,k=!0;if(typeof i!="function")throw new TypeError(p);return m=y(m)||0,f(c)&&(H=!!c.leading,B="maxWait"in c,I=B?A(y(c.maxWait)||0,m):I,k="trailing"in c?!!c.trailing:k),N.cancel=X,N.flush=J,N}function r(i,m,c){var x=!0,M=!0;if(typeof i!="function")throw new TypeError(p);return f(c)&&(x="leading"in c?!!c.leading:x,M="trailing"in c?!!c.trailing:M),o(i,m,{leading:x,maxWait:m,trailing:M})}function f(i){var m=typeof i>"u"?"undefined":l(i);return!!i&&(m=="object"||m=="function")}function b(i){return!!i&&(typeof i>"u"?"undefined":l(i))=="object"}function u(i){return(typeof i>"u"?"undefined":l(i))=="symbol"||b(i)&&w.call(i)==v}function y(i){if(typeof i=="number")return i;if(u(i))return h;if(f(i)){var m=typeof i.valueOf=="function"?i.valueOf():i;i=f(m)?m+"":m}if(typeof i!="string")return i===0?i:+i;i=i.replace(C,"");var c=Y.test(i);return c||G.test(i)?U(i.slice(2),c?2:8):j.test(i)?h:+i}var l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},p="Expected a function",h=NaN,v="[object Symbol]",C=/^\s+|\s+$/g,j=/^[-+]0x[0-9a-f]+$/i,Y=/^0b[01]+$/i,G=/^0o[0-7]+$/i,U=parseInt,V=(typeof e>"u"?"undefined":l(e))=="object"&&e&&e.Object===Object&&e,R=(typeof self>"u"?"undefined":l(self))=="object"&&self&&self.Object===Object&&self,E=V||R||Function("return this")(),K=Object.prototype,w=K.toString,A=Math.max,D=Math.min,a=function(){return E.Date.now()};t.exports=r}).call(n,function(){return this}())},function(t,n){(function(e){function o(a,i,m){function c(k){var g=N,T=L;return N=L=void 0,P=k,I=a.apply(T,g)}function x(k){return P=k,S=setTimeout($,i),z?c(k):I}function M(k){var g=k-O,T=k-P,F=i-g;return H?A(F,q-T):F}function _(k){var g=k-O,T=k-P;return O===void 0||g>=i||g<0||H&&T>=q}function $(){var k=D();return _(k)?W(k):void(S=setTimeout($,M(k)))}function W(k){return S=void 0,B&&N?c(k):(N=L=void 0,I)}function Q(){S!==void 0&&clearTimeout(S),P=0,N=O=L=S=void 0}function X(){return S===void 0?I:W(D())}function J(){var k=D(),g=_(k);if(N=arguments,L=this,O=k,g){if(S===void 0)return x(O);if(H)return S=setTimeout($,i),c(O)}return S===void 0&&(S=setTimeout($,i)),I}var N,L,q,I,S,O,P=0,z=!1,H=!1,B=!0;if(typeof a!="function")throw new TypeError(l);return i=u(i)||0,r(m)&&(z=!!m.leading,H="maxWait"in m,q=H?w(u(m.maxWait)||0,i):q,B="trailing"in m?!!m.trailing:B),J.cancel=Q,J.flush=X,J}function r(a){var i=typeof a>"u"?"undefined":y(a);return!!a&&(i=="object"||i=="function")}function f(a){return!!a&&(typeof a>"u"?"undefined":y(a))=="object"}function b(a){return(typeof a>"u"?"undefined":y(a))=="symbol"||f(a)&&K.call(a)==h}function u(a){if(typeof a=="number")return a;if(b(a))return p;if(r(a)){var i=typeof a.valueOf=="function"?a.valueOf():a;a=r(i)?i+"":i}if(typeof a!="string")return a===0?a:+a;a=a.replace(v,"");var m=j.test(a);return m||Y.test(a)?G(a.slice(2),m?2:8):C.test(a)?p:+a}var y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},l="Expected a function",p=NaN,h="[object Symbol]",v=/^\s+|\s+$/g,C=/^[-+]0x[0-9a-f]+$/i,j=/^0b[01]+$/i,Y=/^0o[0-7]+$/i,G=parseInt,U=(typeof e>"u"?"undefined":y(e))=="object"&&e&&e.Object===Object&&e,V=(typeof self>"u"?"undefined":y(self))=="object"&&self&&self.Object===Object&&self,R=U||V||Function("return this")(),E=Object.prototype,K=E.toString,w=Math.max,A=Math.min,D=function(){return R.Date.now()};t.exports=o}).call(n,function(){return this}())},function(t,n){function e(y){var l=void 0,p=void 0;for(l=0;l<y.length;l+=1)if(p=y[l],p.dataset&&p.dataset.aos||p.children&&e(p.children))return!0;return!1}function o(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function r(){return!!o()}function f(y,l){var p=window.document,h=o(),v=new h(b);u=l,v.observe(p.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function b(y){y&&y.forEach(function(l){var p=Array.prototype.slice.call(l.addedNodes),h=Array.prototype.slice.call(l.removedNodes),v=p.concat(h);if(e(v))return u()})}Object.defineProperty(n,"__esModule",{value:!0});var u=function(){};n.default={isSupported:r,ready:f}},function(t,n){function e(p,h){if(!(p instanceof h))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function p(h,v){for(var C=0;C<v.length;C++){var j=v[C];j.enumerable=j.enumerable||!1,j.configurable=!0,"value"in j&&(j.writable=!0),Object.defineProperty(h,j.key,j)}}return function(h,v,C){return v&&p(h.prototype,v),C&&p(h,C),h}}(),f=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,b=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,y=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,l=function(){function p(){e(this,p)}return r(p,[{key:"phone",value:function(){var h=o();return!(!f.test(h)&&!b.test(h.substr(0,4)))}},{key:"mobile",value:function(){var h=o();return!(!u.test(h)&&!y.test(h.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),p}();n.default=new l},function(t,n){Object.defineProperty(n,"__esModule",{value:!0});var e=function(r,f,b){var u=r.node.getAttribute("data-aos-once");f>r.position?r.node.classList.add("aos-animate"):typeof u<"u"&&(u==="false"||!b&&u!=="true")&&r.node.classList.remove("aos-animate")},o=function(r,f){var b=window.pageYOffset,u=window.innerHeight;r.forEach(function(y,l){e(y,u+b,f)})};n.default=o},function(t,n,e){function o(u){return u&&u.__esModule?u:{default:u}}Object.defineProperty(n,"__esModule",{value:!0});var r=e(12),f=o(r),b=function(u,y){return u.forEach(function(l,p){l.node.classList.add("aos-init"),l.position=(0,f.default)(l.node,y.offset)}),u};n.default=b},function(t,n,e){function o(u){return u&&u.__esModule?u:{default:u}}Object.defineProperty(n,"__esModule",{value:!0});var r=e(13),f=o(r),b=function(u,y){var l=0,p=0,h=window.innerHeight,v={offset:u.getAttribute("data-aos-offset"),anchor:u.getAttribute("data-aos-anchor"),anchorPlacement:u.getAttribute("data-aos-anchor-placement")};switch(v.offset&&!isNaN(v.offset)&&(p=parseInt(v.offset)),v.anchor&&document.querySelectorAll(v.anchor)&&(u=document.querySelectorAll(v.anchor)[0]),l=(0,f.default)(u).top,v.anchorPlacement){case"top-bottom":break;case"center-bottom":l+=u.offsetHeight/2;break;case"bottom-bottom":l+=u.offsetHeight;break;case"top-center":l+=h/2;break;case"bottom-center":l+=h/2+u.offsetHeight;break;case"center-center":l+=h/2+u.offsetHeight/2;break;case"top-top":l+=h;break;case"bottom-top":l+=u.offsetHeight+h;break;case"center-top":l+=u.offsetHeight/2+h}return v.anchorPlacement||v.offset||isNaN(y)||(p=y),l+p};n.default=b},function(t,n){Object.defineProperty(n,"__esModule",{value:!0});var e=function(o){for(var r=0,f=0;o&&!isNaN(o.offsetLeft)&&!isNaN(o.offsetTop);)r+=o.offsetLeft-(o.tagName!="BODY"?o.scrollLeft:0),f+=o.offsetTop-(o.tagName!="BODY"?o.scrollTop:0),o=o.offsetParent;return{top:f,left:r}};n.default=e},function(t,n){Object.defineProperty(n,"__esModule",{value:!0});var e=function(o){return o=o||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(o,function(r){return{node:r}})};n.default=e}])})})(nt);const rt=it(nt.exports);function Z(){return Z=Object.assign?Object.assign.bind():function(d){for(var s=1;s<arguments.length;s++){var t=arguments[s];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(d[n]=t[n])}return d},Z.apply(this,arguments)}var st={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(d){},onComplete:function(d){},preStringTyped:function(d,s){},onStringTyped:function(d,s){},onLastStringBackspaced:function(d){},onTypingPaused:function(d,s){},onTypingResumed:function(d,s){},onReset:function(d){},onStop:function(d,s){},onStart:function(d,s){},onDestroy:function(d){}},at=new(function(){function d(){}var s=d.prototype;return s.load=function(t,n,e){if(t.el=typeof e=="string"?document.querySelector(e):e,t.options=Z({},st,n),t.isInput=t.el.tagName.toLowerCase()==="input",t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map(function(u){return u.trim()}),t.stringsElement=typeof t.options.stringsElement=="string"?document.querySelector(t.options.stringsElement):t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var o=Array.prototype.slice.apply(t.stringsElement.children),r=o.length;if(r)for(var f=0;f<r;f+=1)t.strings.push(o[f].innerHTML.trim())}for(var b in t.strPos=0,t.currentElContent=this.getCurrentElContent(t),t.currentElContent&&t.currentElContent.length>0&&(t.strPos=t.currentElContent.length-1,t.strings.unshift(t.currentElContent)),t.sequence=[],t.strings)t.sequence[b]=b;t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.autoInsertCss=t.options.autoInsertCss,t.autoInsertCss&&(this.appendCursorAnimationCss(t),this.appendFadeOutAnimationCss(t))},s.getCurrentElContent=function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:t.contentType==="html"?t.el.innerHTML:t.el.textContent},s.appendCursorAnimationCss=function(t){var n="data-typed-js-cursor-css";if(t.showCursor&&!document.querySelector("["+n+"]")){var e=document.createElement("style");e.setAttribute(n,"true"),e.innerHTML=`
        .typed-cursor{
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink{
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `,document.body.appendChild(e)}},s.appendFadeOutAnimationCss=function(t){var n="data-typed-fadeout-js-css";if(t.fadeOut&&!document.querySelector("["+n+"]")){var e=document.createElement("style");e.setAttribute(n,"true"),e.innerHTML=`
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `,document.body.appendChild(e)}},d}()),et=new(function(){function d(){}var s=d.prototype;return s.typeHtmlChars=function(t,n,e){if(e.contentType!=="html")return n;var o=t.substring(n).charAt(0);if(o==="<"||o==="&"){var r;for(r=o==="<"?">":";";t.substring(n+1).charAt(0)!==r&&!(1+ ++n>t.length););n++}return n},s.backSpaceHtmlChars=function(t,n,e){if(e.contentType!=="html")return n;var o=t.substring(n).charAt(0);if(o===">"||o===";"){var r;for(r=o===">"?"<":"&";t.substring(n-1).charAt(0)!==r&&!(--n<0););n--}return n},d}()),ut=function(){function d(t,n){at.load(this,n,t),this.begin()}var s=d.prototype;return s.toggle=function(){this.pause.status?this.start():this.stop()},s.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},s.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},s.destroy=function(){this.reset(!1),this.options.onDestroy(this)},s.reset=function(t){t===void 0&&(t=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())},s.begin=function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){t.strPos===0?t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos):t.backspace(t.strings[t.sequence[t.arrayPos]],t.strPos)},this.startDelay)},s.typewrite=function(t,n){var e=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var o=this.humanizer(this.typeSpeed),r=1;this.pause.status!==!0?this.timeout=setTimeout(function(){n=et.typeHtmlChars(t,n,e);var f=0,b=t.substring(n);if(b.charAt(0)==="^"&&/^\^\d+/.test(b)){var u=1;u+=(b=/\d+/.exec(b)[0]).length,f=parseInt(b),e.temporaryPause=!0,e.options.onTypingPaused(e.arrayPos,e),t=t.substring(0,n)+t.substring(n+u),e.toggleBlinking(!0)}if(b.charAt(0)==="`"){for(;t.substring(n+r).charAt(0)!=="`"&&(r++,!(n+r>t.length)););var y=t.substring(0,n),l=t.substring(y.length+1,n+r),p=t.substring(n+r+1);t=y+l+p,r--}e.timeout=setTimeout(function(){e.toggleBlinking(!1),n>=t.length?e.doneTyping(t,n):e.keepTyping(t,n,r),e.temporaryPause&&(e.temporaryPause=!1,e.options.onTypingResumed(e.arrayPos,e))},f)},o):this.setPauseStatus(t,n,!0)},s.keepTyping=function(t,n,e){n===0&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var o=t.substring(0,n+=e);this.replaceText(o),this.typewrite(t,n)},s.doneTyping=function(t,n){var e=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){e.backspace(t,n)},this.backDelay))},s.backspace=function(t,n){var e=this;if(this.pause.status!==!0){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var o=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){n=et.backSpaceHtmlChars(t,n,e);var r=t.substring(0,n);if(e.replaceText(r),e.smartBackspace){var f=e.strings[e.arrayPos+1];e.stopNum=f&&r===f.substring(0,n)?n:0}n>e.stopNum?(n--,e.backspace(t,n)):n<=e.stopNum&&(e.arrayPos++,e.arrayPos===e.strings.length?(e.arrayPos=0,e.options.onLastStringBackspaced(),e.shuffleStringsIfNeeded(),e.begin()):e.typewrite(e.strings[e.sequence[e.arrayPos]],n))},o)}else this.setPauseStatus(t,n,!1)},s.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},s.setPauseStatus=function(t,n,e){this.pause.typewrite=e,this.pause.curString=t,this.pause.curStrPos=n},s.toggleBlinking=function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},s.humanizer=function(t){return Math.round(Math.random()*t/2)+t},s.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},s.initFadeOut=function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)},this.fadeOutDelay)},s.replaceText=function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:this.contentType==="html"?this.el.innerHTML=t:this.el.textContent=t},s.bindFocusEvents=function(){var t=this;this.isInput&&(this.el.addEventListener("focus",function(n){t.stop()}),this.el.addEventListener("blur",function(n){t.el.value&&t.el.value.length!==0||t.start()}))},s.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},d}();rt.init();new ut(".typing-text",{strings:['Thura Aung <span class="text-sky-400">@ Htet Minn Khant</span>','I am a <span class="text-sky-400">Full Stack Developer</span>'],typeSpeed:30,loop:!0,backDelay:900,backSpeed:30});const ct=document.querySelectorAll("section");window.onscroll=()=>{const d=document.documentElement.scrollTop||document.body.scrollTop;ct.forEach(s=>{var t;s.offsetTop<=d+300&&((t=document.querySelector("a.text-white.js-scroll-trigger"))==null||t.classList.remove("text-white"),document.querySelector(`a[href*=${s.id}]`).classList.add("text-white"))})};const lt=document.querySelectorAll("a.js-scroll-trigger");lt.forEach(function(d){d.addEventListener("click",function(s){s.preventDefault(),document.querySelector(d.hash).scrollIntoView({behavior:"smooth"})})});document.getElementById("toggle-nav").addEventListener("click",()=>{const s=document.getElementById("nav-links").classList.toggle("hidden"),t=document.getElementById("menu-icon"),n=document.getElementById("cross-icon");s?(t.classList.remove("hidden"),n.classList.add("hidden")):(t.classList.add("hidden"),n.classList.remove("hidden"))});
