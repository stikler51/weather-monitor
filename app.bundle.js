!function(n){var e={};function t(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(o,r,function(e){return n[e]}.bind(null,r));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=27)}([function(n,e,t){n.exports=t.p+"c6779920619e41d6b605b4993a3dc410.svg"},function(n,e,t){n.exports=t.p+"07aa3f06aec88ccad3f9b480a08bf64b.svg"},function(n,e,t){n.exports=t.p+"f1fe2b224569cdd12fedd25a569118f9.svg"},function(n,e,t){n.exports=t.p+"7e41a803065b9abae8afdabfce5ceabe.svg"},function(n,e,t){n.exports=t.p+"255a951be56f07032a4a9db094177782.svg"},function(n,e,t){n.exports=t.p+"9039acf157ee4b2953accdacfddf8edd.svg"},function(n,e,t){n.exports=t.p+"ed2401ffd59659e7c80bac4a4b2e706c.jpg"},function(n,e,t){n.exports=t.p+"cde1ad3f5d45a74306383bfba1eb4d9d.jpg"},function(n,e,t){n.exports=t.p+"7753fbc8e058e1c70e47e281cbe5a435.jpg"},function(n,e,t){n.exports=t.p+"85be3c830583fd4bcf1eb2e62378bb51.jpg"},function(n,e,t){n.exports=t.p+"df4d9bbefbc14ba4c2ce68947c444cae.jpg"},function(n,e,t){n.exports=t.p+"98f612309ba7dbfa6a8533d5c86cf621.jpg"},function(n,e,t){n.exports=t.p+"a1ce816a2356b2811618113bd3e12c63.jpg"},function(n,e,t){n.exports=t.p+"c7d46457e37a67e1051181d736524a06.jpg"},function(n,e,t){n.exports=t.p+"c82d4f1a6474bd13490ab6aab2265d15.jpg"},function(n,e,t){n.exports=t.p+"05ed39743fb2e3e94028adb0d86de30e.jpg"},function(n,e,t){n.exports=t.p+"d0824cc533f918c3d0c52f42a3ad1ba2.jpg"},function(n,e,t){n.exports=t.p+"8f9b014a8e08dff7cda573cf7eab4ace.jpg"},function(n,e,t){var o=t(19);"string"==typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(25)(o,r);o.locals&&(n.exports=o.locals)},function(n,e,t){(e=n.exports=t(20)(!1)).push([n.i,"@import url(https://fonts.googleapis.com/css?family=Quicksand:300&display=swap);",""]);var o=t(21),r=o(t(22)),i=o(t(23)),a=o(t(24));e.push([n.i,'@font-face {\n  font-family: "Raleway";\n  src: url('+r+"); }\n\n.modal {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.4);\n  z-index: 1000;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.modal__window {\n  width: 70%;\n  height: 40%;\n  background: rgba(0, 0, 0, 0.7) url("+i+");\n  background-repeat: no-repeat;\n  background-position: right;\n  background-size: contain;\n  position: absolute;\n  border-radius: 10px;\n  color: white; }\n  .modal__window .message {\n    width: 55%;\n    height: 100%;\n    padding-top: 40px;\n    padding-left: 40px;\n    position: relative; }\n    .modal__window .message .modal__close {\n      width: 80px;\n      height: 40px;\n      margin-top: 40px;\n      position: absolute;\n      bottom: 80px;\n      right: 40px;\n      background: transparent;\n      color: white;\n      border: 2px solid white;\n      transition: 0.4s; }\n      .modal__window .message .modal__close:hover {\n        border-color: #a2cbff; }\n\n@media screen and (max-width: 768px) and (orientation: portrait) {\n  html {\n    font-size: 13px; }\n  .body .header {\n    flex-wrap: wrap; }\n    .body .header .title,\n    .body .header .search {\n      width: 100%; }\n    .body .header .title {\n      text-align: center;\n      font-size: 3rem; }\n    .body .header .search {\n      margin-top: 3vh;\n      display: flex;\n      justify-content: center; }\n      .body .header .search .search__button {\n        height: 100%; }\n      .body .header .search .search__field {\n        height: 4vh;\n        width: 60vw;\n        margin-left: 50px; }\n    .body .header .validation {\n      margin-top: 2vh; }\n  .body .main {\n    background: none; }\n    .body .main .monitor {\n      width: 80vw;\n      height: 50vh; }\n      .body .main .monitor .monitor__left {\n        width: 80vw;\n        height: 25vh; }\n        .body .main .monitor .monitor__left .weather-icon {\n          width: 60%; }\n      .body .main .monitor .monitor__right {\n        width: 80vw;\n        height: 25vh;\n        position: absolute;\n        top: unset;\n        bottom: 0; }\n        .body .main .monitor .monitor__right .monitor__temperature .temperature {\n          font-size: 8rem; }\n  .modal {\n    width: 100vw; }\n    .modal .modal__window {\n      width: 90vw;\n      height: 40vh;\n      background: rgba(0, 0, 0, 0.4); }\n      .modal .modal__window .message {\n        padding: 20px;\n        text-align: center;\n        width: 80vw;\n        line-height: 2rem;\n        font-size: 1.3rem; } }\n\n@media screen and (max-width: 768px) and (orientation: portrait) and (max-width: 350px) {\n  html {\n    font-size: 10px; }\n  .body .header .search .search__field {\n    width: 50vw; } }\n\n@media screen and (max-height: 768px) and (orientation: landscape) {\n  html {\n    font-size: 11px; }\n  .body .header {\n    flex-wrap: wrap;\n    padding-top: 0 !important; }\n    .body .header .title,\n    .body .header .search {\n      width: 100%; }\n    .body .header .title {\n      text-align: center;\n      font-size: 3rem; }\n    .body .header .search {\n      margin-top: 3vh;\n      display: flex;\n      justify-content: center; }\n      .body .header .search .search__button {\n        height: 100%; }\n      .body .header .search .search__field {\n        height: 8vh;\n        width: 60vw;\n        margin-left: 50px; }\n    .body .header .validation {\n      margin-top: 2vh; }\n  .body .main {\n    background: none;\n    height: 65vh; }\n    .body .main .monitor {\n      width: 60vw; }\n      .body .main .monitor .monitor__left {\n        width: 30vw; }\n      .body .main .monitor .monitor__right {\n        width: 30vw; }\n  .body .modal .modal__window .message {\n    padding: 20px; }\n    .body .modal .modal__window .message .modal__close {\n      width: 60px;\n      height: 30px;\n      bottom: 60px; } }\n\n* {\n  margin: 0;\n  padding: 0; }\n\n.body {\n  font-family: Raleway;\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n  background: url("+a+");\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: cover;\n  transition: 0.5s; }\n  .body .header {\n    display: flex;\n    justify-content: space-around;\n    align-items: stretch;\n    padding-top: 15px; }\n    .body .header .search {\n      display: flex;\n      align-content: center; }\n    .body .header .search__field {\n      background-color: rgba(0, 0, 0, 0.2);\n      color: white;\n      border: 2px solid transparent;\n      border-radius: 5px;\n      height: 75%;\n      padding: 0 10px;\n      outline: none;\n      transition: 0.2s; }\n      .body .header .search__field:focus {\n        border: 2px white solid; }\n    .body .header .search__button {\n      height: 75%;\n      width: 50px;\n      background: transparent;\n      color: white;\n      border: none;\n      outline: none;\n      transition: 0.4s; }\n      .body .header .search__button .fa-search-location {\n        font-size: 2rem;\n        pointer-events: none; }\n      .body .header .search__button:hover {\n        color: #a2cbff; }\n    .body .header .validation .disable-validation {\n      position: absolute;\n      z-index: -1000;\n      left: -1000px;\n      overflow: hidden;\n      clip: rect(0 0 0 0);\n      height: 1px;\n      width: 1px;\n      margin: -1px;\n      padding: 0;\n      border: 0; }\n    .body .header .validation .disable-validation + .disable-label {\n      padding-left: 30px;\n      height: 25px;\n      display: inline-block;\n      line-height: 25px;\n      background-repeat: no-repeat;\n      background-position: 0 0;\n      font-size: 25px;\n      vertical-align: middle;\n      cursor: pointer; }\n    .body .header .validation .disable-validation:checked + .disable-label {\n      background-position: 0 -25px; }\n    .body .header .validation .disable-label {\n      background-image: url(http://csscheckbox.com/checkboxes/u/csscheckbox_391ce065f36b1460c4845fa9b5173fba.png);\n      color: white;\n      -webkit-touch-callout: none;\n      -webkit-user-select: none;\n      -khtml-user-select: none;\n      -moz-user-select: none;\n      -ms-user-select: none;\n      user-select: none; }\n  .body .title {\n    color: white; }\n\n.main {\n  height: 80vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: inherit; }\n  .main .monitor {\n    width: 50vw;\n    height: 50vh;\n    border-radius: 10px;\n    background: inherit;\n    position: absolute;\n    overflow: hidden;\n    display: none; }\n    .main .monitor:before {\n      content: '';\n      background: inherit;\n      position: absolute;\n      right: -25px;\n      top: -25px;\n      bottom: -25px;\n      left: 0;\n      box-shadow: inset 0 0 0 3000px rgba(0, 0, 0, 0.3);\n      filter: blur(4px); }\n    .main .monitor .monitor__left,\n    .main .monitor .monitor__right {\n      width: 25vw;\n      height: 50vh;\n      position: absolute; }\n    .main .monitor .monitor__left {\n      left: 0;\n      top: 0;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      position: relative; }\n      .main .monitor .monitor__left .weather-icon {\n        width: 25vw; }\n      .main .monitor .monitor__left .weather-definition {\n        color: white;\n        font-size: 2rem;\n        display: block;\n        width: 100%;\n        text-align: center;\n        padding-top: 1vh;\n        position: absolute;\n        top: 0;\n        left: 0; }\n    .main .monitor .monitor__right {\n      right: 0;\n      top: 0;\n      display: flex;\n      justify-content: center;\n      align-items: center; }\n      .main .monitor .monitor__right .monitor__city {\n        color: white;\n        text-align: center;\n        font-size: 2rem;\n        position: absolute;\n        top: 0;\n        padding-top: 1vh;\n        width: 100%;\n        text-align: center; }\n      .main .monitor .monitor__right .monitor__temperature {\n        display: flex;\n        justify-content: center; }\n        .main .monitor .monitor__right .monitor__temperature .temperature {\n          font-family: 'Quicksand', sans-serif;\n          font-size: 10rem;\n          color: white;\n          line-height: 6rem; }\n        .main .monitor .monitor__right .monitor__temperature .celsius {\n          font-family: 'Quicksand', sans-serif;\n          color: white;\n          font-size: 3rem; }\n      .main .monitor .monitor__right .monitor__footer {\n        position: absolute;\n        bottom: 0;\n        width: 100%;\n        display: flex;\n        justify-content: space-around;\n        padding-bottom: 1vh;\n        font-family: 'Quicksand', sans-serif; }\n      .main .monitor .monitor__right .humidity,\n      .main .monitor .monitor__right .wind {\n        color: white;\n        font-size: 1.5rem; }\n",""])},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var t=function(n,e){var t=n[1]||"",o=n[3];if(!o)return t;if(e&&"function"==typeof btoa){var r=(a=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=o.sources.map(function(n){return"/*# sourceURL="+o.sourceRoot+n+" */"});return[t].concat(i).concat([r]).join("\n")}var a;return[t].join("\n")}(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(r=0;r<n.length;r++){var a=n[r];null!=a[0]&&o[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),e.push(a))}},e}},function(n,e,t){"use strict";n.exports=function(n,e){return"string"!=typeof n?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),/["'() \t\n]/.test(n)||e?'"'+n.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':n)}},function(n,e,t){n.exports=t.p+"3d4b8bcd55b844b404bcf213a47f5b13.ttf"},function(n,e,t){n.exports=t.p+"39bd96222320394100ad8de932039341.png"},function(n,e,t){n.exports=t.p+"150ded29273b0227c2be1f60c00270ad.jpg"},function(n,e,t){var o,r,i={},a=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=o.apply(this,arguments)),r}),d=function(n){var e={};return function(n,t){if("function"==typeof n)return n();if(void 0===e[n]){var o=function(n,e){return e?e.querySelector(n):document.querySelector(n)}.call(this,n,t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(n){o=null}e[n]=o}return e[n]}}(),s=null,c=0,l=[],u=t(26);function p(n,e){for(var t=0;t<n.length;t++){var o=n[t],r=i[o.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](o.parts[a]);for(;a<o.parts.length;a++)r.parts.push(y(o.parts[a],e))}else{var d=[];for(a=0;a<o.parts.length;a++)d.push(y(o.parts[a],e));i[o.id]={id:o.id,refs:1,parts:d}}}}function f(n,e){for(var t=[],o={},r=0;r<n.length;r++){var i=n[r],a=e.base?i[0]+e.base:i[0],d={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(d):t.push(o[a]={id:a,parts:[d]})}return t}function h(n,e){var t=d(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=l[l.length-1];if("top"===n.insertAt)o?o.nextSibling?t.insertBefore(e,o.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),l.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=d(n.insertAt.before,t);t.insertBefore(e,r)}}function b(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=l.indexOf(n);e>=0&&l.splice(e,1)}function m(n){var e=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var o=function(){0;return t.nc}();o&&(n.attrs.nonce=o)}return g(e,n.attrs),h(n,e),e}function g(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function y(n,e){var t,o,r,i;if(e.transform&&n.css){if(!(i="function"==typeof e.transform?e.transform(n.css):e.transform.default(n.css)))return function(){};n.css=i}if(e.singleton){var a=c++;t=s||(s=m(e)),o=x.bind(null,t,a,!1),r=x.bind(null,t,a,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",g(e,n.attrs),h(n,e),e}(e),o=function(n,e,t){var o=t.css,r=t.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=u(o));r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),d=n.href;n.href=URL.createObjectURL(a),d&&URL.revokeObjectURL(d)}.bind(null,t,e),r=function(){b(t),t.href&&URL.revokeObjectURL(t.href)}):(t=m(e),o=function(n,e){var t=e.css,o=e.media;o&&n.setAttribute("media",o);if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}.bind(null,t),r=function(){b(t)});return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=f(n,e);return p(t,e),function(n){for(var o=[],r=0;r<t.length;r++){var a=t[r];(d=i[a.id]).refs--,o.push(d)}n&&p(f(n,e),e);for(r=0;r<o.length;r++){var d;if(0===(d=o[r]).refs){for(var s=0;s<d.parts.length;s++)d.parts[s]();delete i[d.id]}}}};var v,w=(v=[],function(n,e){return v[n]=e,v.filter(Boolean).join("\n")});function x(n,e,t,o){var r=t?"":o.css;if(n.styleSheet)n.styleSheet.cssText=w(e,r);else{var i=document.createTextNode(r),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}},function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,o=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var r,i=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?n:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?t+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(n,e,t){"use strict";t.r(e);var o=t(0),r=t.n(o),i=t(1),a=t.n(i),d=t(2),s=t.n(d),c=t(3),l=t.n(c),u=t(4),p=t.n(u),f=t(5),h=t.n(f),b=t(6),m=t.n(b),g=t(7),y=t.n(g),v=t(8),w=t.n(v),x=t(9),_=t.n(x),k=t(10),j=t.n(k),S=t(11),L=t.n(S),z=t(12),$=t.n(z),M=t(13),O=t.n(M),R=t(14),U=t.n(R),T=t(15),q=t.n(T),C=t(16),E=t.n(C),A=t(17),B=t.n(A);class I{constructor(n){this.city=n.name,this.temperature=n.main.temp,this.humidity=n.main.humidity,this.wind=n.wind.speed,this.weatherStatus=n.weather[0].main}updateState(){var n;document.body.querySelector(".city").innerHTML=this.city,document.body.querySelector(".temperature").innerHTML=Math.ceil(this.temperature),n=this.temperature,document.body.style.background=n<0?`url(${O.a})`:n>=0&&n<10?`url(${U.a})`:n>=10&&n<20?`url(${q.a})`:n>=20&&n<30?`url(${E.a})`:`url(${B.a})`,document.body.style.backgroundSize="cover",document.body.style.backgroundAttachment="fixed",document.body.style.backgroundRepeat="no-repeat",document.body.querySelector(".wind-value").innerHTML=`${this.wind} m/s`,document.body.querySelector(".humidity-value").innerHTML=`${this.humidity} %`,document.body.querySelector(".weather-definition").innerHTML=this.weatherStatus,function(n){const e=document.body.querySelector(".monitor__left"),t=document.body.querySelector(".weather-icon"),o=document.body.querySelector(".monitor__left");t&&t.remove();const i=document.createElement("img");switch(i.classList.add("weather-icon"),n){case"Thunderstorm":i.src=r.a,o.style.background=`url(${m.a})`;break;case"Drizzle":i.src=a.a,o.style.background=`url(${y.a})`;break;case"Rain":i.src=s.a,o.style.background=`url(${w.a})`;break;case"Snow":i.src=l.a,o.style.background=`url(${_.a})`;break;case"Clear":i.src=p.a,o.style.background=`url(${j.a})`;break;case"Clouds":i.src=h.a,o.style.background=`url(${L.a})`;break;default:o.style.background=`url(${$.a})`}o.style.backgroundSize="cover",e.appendChild(i)}(this.weatherStatus),document.body.querySelector(".monitor").style.display="block"}}function H(n){const e=document.createElement("div");e.classList.add("modal"),e.innerHTML='<div class="modal__window">'+`<div class="message">${n}`+'<button class="modal__close">OK</button></div></div>',document.body.appendChild(e),document.body.querySelector(".modal__close").addEventListener("click",()=>{e.remove()})}const N="a37fd266dcf0de1f7a2a058e96a7cabe",P='<p>Looks like something went wrong.</p><p>You can search only Minsk, Warszaw, Berlin and Paris</p><p>To disable validation check "Disable validation" checkbox.</p>',D=["minsk","warszaw","berlin","paris"];async function Q(n){const e=`https://api.openweathermap.org/data/2.5/weather?q=${n}&appid=${N}&units=metric`;return await fetch(e).then(n=>n.json())}async function J(){const n=document.body.querySelector(".disable-validation").checked,e=document.body.querySelector(".search__field").value.toLowerCase();if(n){const n=await Q(e).then(n=>n);if(n.message)H(`<p>${n.message}</p>`);else{new I(n).updateState()}}else if(D.includes(e)){const n=await Q(e).then(n=>n);new I(n).updateState()}else H(P)}function F(n){const e=document.body.querySelector(".modal");"Enter"!==n.key||e?"Enter"===n.key&&e&&e.remove():J()}t(18);document.body.querySelector(".search__button").addEventListener("click",J),document.body.addEventListener("keypress",F)}]);
//# sourceMappingURL=app.bundle.js.map