(function(e){function t(t){for(var s,a,o=t[0],u=t[1],c=t[2],f=0,p=[];f<o.length;f++)a=o[f],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(e[s]=u[s]);l&&l(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],s=!0,o=1;o<n.length;o++){var u=n[o];0!==r[u]&&(s=!1)}s&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var s={},r={app:0},i=[];function a(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=s,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)a.d(n,s,function(t){return e[t]}.bind(null,s));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var l=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"2c2e":function(e,t,n){},4431:function(e,t,n){"use strict";var s=n("acbd"),r=n.n(s);r.a},a161:function(e,t,n){},a6bc:function(e,t,n){e.exports=function(){return new Worker(n.p+"36be4b14cf686edfce80.worker.js")}},ab01:function(e,t,n){"use strict";var s=n("a161"),r=n.n(s);r.a},acbd:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("d4ec"),r=n("bee2"),i=n("a6bc"),a=n.n(i),o=function(){function e(t){var n=this;Object(s["a"])(this,e),this.state=t,this.worker=new a.a,this.worker.onmessage=function(e){return n.handleEvent(e)}}return Object(r["a"])(e,[{key:"terminate",value:function(){this.worker.terminate()}},{key:"handleEvent",value:function(e){var t=e.data;"state"===t.type?Object.assign(this.state,t.state):console.log("Message from worker",t)}},{key:"reset",value:function(){this.command("reset")}},{key:"incrementUnitsPerSec",value:function(){this.command("incrementUnitsPerSec")}},{key:"togglePause",value:function(){this.command("togglePause")}},{key:"command",value:function(e){this.worker.postMessage({type:"command",command:e})}}]),e}(),u=(n("b65f"),function(){function e(){Object(s["a"])(this,e),this.paused=!1,this.pieces=0,this.unitsPerSec=0}return Object(r["a"])(e,[{key:"units",get:function(){return Math.trunc(this.pieces)}}]),e}()),c=n("2b0e"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",[e._v("Minimal Clicker")]),n("prod"),n("msg"),n("lv")],1)},f=[],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Production")]),n("p",[e._v("Running: "+e._s(!e.paused))]),n("p",[e._v("Units per second: "+e._s(e.unitsPerSec))]),n("p",[e._v("Units: "+e._s(e.units))]),n("button",{on:{click:e.handleClick}},[e._v("Increase")]),n("button",{on:{click:e.handlePause}},[e._v("Pause")]),n("button",{on:{click:e.handleReset}},[e._v("Reset")])])},v=[],d={computed:{paused:function(){return this.$state.paused},units:function(){return this.$state.units},unitsPerSec:function(){return this.$state.unitsPerSec}},methods:{handleClick:function(){this.$engine.incrementUnitsPerSec()},handlePause:function(){this.$engine.togglePause()},handleReset:function(){this.$engine.reset()}}},h=d,b=n("2877"),m=Object(b["a"])(h,p,v,!1,null,"9427d40a",null),g=m.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"msg",class:e.msgClass},[e._t("default")],2)},y=[],w={props:{visible:{type:Boolean,default:!0}},computed:{msgClass:function(){return this.visible?"msg-visible":"msg-hidden"}}},k=w,P=(n("4431"),Object(b["a"])(k,_,y,!1,null,"a556bd84",null)),j=P.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"lv"},[n("msg",{attrs:{visible:e.lv>=1}},[e._v(" You've reached "),n("span",{staticClass:"lv-indicator",class:e.lvClass},[e._v("Lv"+e._s(e.lv))])]),n("msg",{staticClass:"inset",attrs:{visible:e.lv>=2}},[e._v(" » Learn more: "),n("a",{attrs:{href:"https://github.com/nebaughman/minimal-clicker"}},[e._v(" GitHub project ↣ ")])]),n("msg",{staticClass:"inset",attrs:{visible:e.lv>=3}},[e._v(" » Well done! "),n("a",{attrs:{href:"https://www.buymeacoffee.com/nebaughman"}},[e._v(" Buy Me a Coffee ↣ ")])])],1)},$=[],C=(n("6b93"),{components:{Msg:j},data:function(){return{leveledUp:!1}},computed:{units:function(){return this.$state.units},lv:function(){return this.units<=0?0:Math.floor(Math.log10(this.units))},lvClass:function(){return!!this.leveledUp&&"levelup"}},watch:{lv:function(){var e=this;this.leveledUp=!0,setTimeout((function(){return e.leveledUp=!1}),1e3)}}}),M=C,S=(n("f353"),Object(b["a"])(M,O,$,!1,null,"ea65bc20",null)),x=S.exports,U={components:{Prod:g,Msg:j,Lv:x}},E=U,R=(n("ab01"),Object(b["a"])(E,l,f,!1,null,"14fb34c6",null)),T=R.exports,L=new u,B=new o(L);c["a"].observable(L),c["a"].prototype.$engine=B,c["a"].prototype.$state=L,c["a"].config.productionTip=!1,new c["a"]({render:function(e){return e(T)}}).$mount("#app")},f353:function(e,t,n){"use strict";var s=n("2c2e"),r=n.n(s);r.a}});
//# sourceMappingURL=app.4f133f33.js.map