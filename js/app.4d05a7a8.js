(function(e){function t(t){for(var r,o,i=t[0],s=t[1],c=t[2],l=0,f=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);p&&p(t);while(f.length)f.shift()();return u.push.apply(u,c||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(u.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={2:0},a={2:0},u=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{1:"b6b44ba9",3:"468264c0",4:"7cbb9bb9",5:"847d88b8"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={3:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{1:"31d6cfe0",3:"600cd032",4:"31d6cfe0",5:"31d6cfe0"}[e]+".css",a=s.p+r,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var c=u[i],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===a))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){c=f[i],l=c.getAttribute("data-href");if(l===r||l===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],p.parentNode.removeChild(p),n(u)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var f=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/invest/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var p=l;u.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"2f39":function(e,t,n){"use strict";n.r(t);n("5319"),n("7d6e"),n("e54f"),n("985d"),n("31cd");var r=n("2b0e"),o=n("1f91"),a=n("42d2"),u=n("b05d");r["a"].use(u["a"],{config:{},lang:o["a"],iconSet:a["a"]});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},s=[],c={name:"App"},l=c,f=n("2877"),p=Object(f["a"])(l,i,s,!1,null,null,null),d=p.exports,h=n("2f62"),m={namespaced:!0,state:()=>({status:"Нет статуса",storeData:null}),getters:{status:e=>e.status,storeData:e=>e.storeData},mutations:{SOCKET_newStatus:(e,t)=>{e.status=t},SOCKET_updateData:(e,t)=>{e.storeData=t}}};r["a"].use(h["a"]);var b=function(){const e=new h["a"].Store({modules:{status:m},strict:!1});return e},v=n("8c4f");n("ddb0");const g=[{path:"/",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"8b24"))}]},{path:"/calculate",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"3197"))}]},{path:"*",component:()=>Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"e51e"))}];var y=g;r["a"].use(v["a"]);var w=function(){const e=new v["a"]({scrollBehavior:()=>({x:0,y:0}),routes:y,mode:"history",base:"/invest/"});return e},P=async function(){const e="function"===typeof b?await b({Vue:r["a"]}):b,t="function"===typeof w?await w({Vue:r["a"],store:e}):w;e.$router=t;const n={router:t,store:e,render:e=>e(d),el:"#q-app"};return{app:n,store:e,router:t}},O=n("5132"),S=n.n(O),_=function({store:e}){r["a"].use(new S.a({debug:!1,connection:"https://happytourists.herokuapp.com/",vuex:{store:e,actionPrefix:"SOCKET_",mutationPrefix:"SOCKET_"}}))};const E="/invest/",j=/\/\//,x=e=>(E+e).replace(j,"/");async function C(){const{app:e,store:t,router:n}=await P();let o=!1;const a=e=>{o=!0;const t=Object(e)===e?x(n.resolve(e).route.fullPath):e;window.location.href=t},u=window.location.href.replace(window.location.origin,""),i=[_];for(let c=0;!1===o&&c<i.length;c++)if("function"===typeof i[c])try{await i[c]({app:e,router:n,store:t,Vue:r["a"],ssrContext:null,redirect:a,urlPath:u,publicPath:E})}catch(s){return s&&s.url?void(window.location.href=s.url):void console.error("[Quasar] boot error:",s)}!0!==o&&new r["a"](e)}C()},"31cd":function(e,t,n){}});