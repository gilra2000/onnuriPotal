webpackJsonp([2],{233:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=r.n(n),c=r(248),a=r.n(c),i=r(118),u=(r.n(i),function(e){var t=e.location,r=e.match,n=a.a.parse(t.search),c="true"===n.detail,u=r.params.name;return o.a.createElement("div",null,o.a.createElement(i.Helmet,null,o.a.createElement("title",null,"About "+(u||""))),o.a.createElement("h2",null,"About ",u),c&&"detail: blahblah")});t.default=u},248:function(e,t,r){"use strict";function n(e){switch(e.arrayFormat){case"index":return function(t,r,n){return null===r?[c(t,e),"[",n,"]"].join(""):[c(t,e),"[",c(n,e),"]=",c(r,e)].join("")};case"bracket":return function(t,r){return null===r?c(t,e):[c(t,e),"[]=",c(r,e)].join("")};default:return function(t,r){return null===r?c(t,e):[c(t,e),"=",c(r,e)].join("")}}}function o(e){var t;switch(e.arrayFormat){case"index":return function(e,r,n){if(t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),!t)return void(n[e]=r);void 0===n[e]&&(n[e]={}),n[e][t[1]]=r};case"bracket":return function(e,r,n){return t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0===n[e]?void(n[e]=[r]):void(n[e]=[].concat(n[e],r)):void(n[e]=r)};default:return function(e,t,r){if(void 0===r[e])return void(r[e]=t);r[e]=[].concat(r[e],t)}}}function c(e,t){return t.encode?t.strict?i(e):encodeURIComponent(e):e}function a(e){return Array.isArray(e)?e.sort():"object"===typeof e?a(Object.keys(e)).sort(function(e,t){return Number(e)-Number(t)}).map(function(t){return e[t]}):e}var i=r(249),u=r(10),l=r(250);t.extract=function(e){var t=e.indexOf("?");return-1===t?"":e.slice(t+1)},t.parse=function(e,t){t=u({arrayFormat:"none"},t);var r=o(t),n=Object.create(null);return"string"!==typeof e?n:(e=e.trim().replace(/^[?#&]/,""))?(e.split("&").forEach(function(e){var t=e.replace(/\+/g," ").split("="),o=t.shift(),c=t.length>0?t.join("="):void 0;c=void 0===c?null:l(c),r(l(o),c,n)}),Object.keys(n).sort().reduce(function(e,t){var r=n[t];return Boolean(r)&&"object"===typeof r&&!Array.isArray(r)?e[t]=a(r):e[t]=r,e},Object.create(null))):n},t.stringify=function(e,t){t=u({encode:!0,strict:!0,arrayFormat:"none"},t);var r=n(t);return e?Object.keys(e).sort().map(function(n){var o=e[n];if(void 0===o)return"";if(null===o)return c(n,t);if(Array.isArray(o)){var a=[];return o.slice().forEach(function(e){void 0!==e&&a.push(r(n,e,a.length))}),a.join("&")}return c(n,t)+"="+c(o,t)}).filter(function(e){return e.length>0}).join("&"):""}},249:function(e,t,r){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}},250:function(e,t,r){"use strict";function n(e,t){try{return decodeURIComponent(e.join(""))}catch(e){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),o=e.slice(t);return Array.prototype.concat.call([],n(r),n(o))}function o(e){try{return decodeURIComponent(e)}catch(o){for(var t=e.match(a),r=1;r<t.length;r++)e=n(t,r).join(""),t=e.match(a);return e}}function c(e){for(var t={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},r=i.exec(e);r;){try{t[r[0]]=decodeURIComponent(r[0])}catch(e){var n=o(r[0]);n!==r[0]&&(t[r[0]]=n)}r=i.exec(e)}t["%C2"]="\ufffd";for(var c=Object.keys(t),a=0;a<c.length;a++){var u=c[a];e=e.replace(new RegExp(u,"g"),t[u])}return e}var a=new RegExp("%[a-f0-9]{2}","gi"),i=new RegExp("(%[a-f0-9]{2})+","gi");e.exports=function(e){if("string"!==typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return c(e)}}}});
//# sourceMappingURL=2.9ed83d9b.chunk.js.map