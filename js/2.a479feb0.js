(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"1a7c":function(t,e,n){"use strict";n("8c27")},"8b24":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",{staticClass:"flex flex-center"},[n("q-btn",{on:{click:t.send}},[t._v("\n    startLoad\n  ")]),n("div",[t._v("\n    "+t._s(t.status)+"\n  ")]),t.storeData?n("div",t._l(t.storeData.stocksGlobal,(function(e,s){return n("div",{key:s,staticClass:"data-row"},[n("div",[t._v("\n        "+t._s(e.name)+" ("+t._s(e.currency)+")\n      ")]),n("div",[t._v("\n        "+t._s(t.storeData.pricesGlobal.find((function(t){return t.ticker===e.ticker}))?t.storeData.pricesGlobal.find((function(t){return t.ticker===e.ticker})).price:"Нет данных")+"\n      ")])])})),0):t._e()],1)},a=[],c=n("ded3"),r=n.n(c),i=n("2f62"),o={name:"PageIndex",computed:r()({},Object(i["b"])("status",["status","storeData"])),methods:{send(){this.$socket.emit("startLoad")}}},u=o,d=(n("1a7c"),n("2877")),l=n("9989"),f=n("9c40"),p=n("eebe"),_=n.n(p),b=Object(d["a"])(u,s,a,!1,null,"248f61f0",null);e["default"]=b.exports;_()(b,"components",{QPage:l["a"],QBtn:f["a"]})},"8c27":function(t,e,n){}}]);