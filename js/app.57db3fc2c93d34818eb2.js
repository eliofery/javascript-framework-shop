(()=>{"use strict";var e,t,r,n,o,a,i={286:(e,t,r)=>{r.d(t,{Z:()=>a});const n=Object.freeze({HASH:"hashchange",STATE:"popstate"});class o{static _initializing=!1;static _instance=null;_history=n.HASH;_routes=[];_root="#app";constructor(){if(!o._initializing)throw new TypeError("Нельзя напрямую создать экземпляр данного класса")}get root(){return this._root}set root(e){this._root=e}static get instance(){return this._instance instanceof this||(o._initializing=!0,this._instance=new this,o._initializing=!1),this._instance}get history(){return this._history}get routes(){return this._routes}static createWebHashHistory(){return n.HASH}static createWebHistory(){return n.STATE}_strippedHashPath(){return`/${window.location.hash.replace(/^#\//,"")}`}_strippedPath(){return`/${window.location.pathname.replace(/^\/+|\/+$/g,"").replace(/\/+/g,"/")}`}}class a extends o{_pageElement=null;static createRoute({history:e,routes:t}){const r=a.instance;return r._history=e??r._history,r._routes.push(...t),r}render=async()=>{const{component:e}=this._findRoute(this.getUri());if(!e)return void this._page404();const t=this._getParams(),r=await this._getComponent(e,t);r.layout?await this._renderLayout(r.layout):this._pageElement=null,await this._renderPage(r)};_renderLayout=async e=>{const{component:t,elements:r}=await this._getComponent(e);this._pageElement=r.page;const n=document.querySelector(this.root);n.innerHTML="",n.insertAdjacentElement("afterbegin",t)};_renderPage=async({component:e})=>{let t=document.querySelector(this._root);this._pageElement&&(t=this._pageElement),t.innerHTML="",t.insertAdjacentElement("afterbegin",e),this._pageElement=null};_page404(){document.querySelector(this._root).innerHTML="Страница 404 не найдена"}getUri(){return this._history===n.STATE?this._strippedPath():this._strippedHashPath()}_getParams(){return this.getUri().replace("/javascript-framework-shop","").slice(1).split("/").reduce(((e,t,r,n)=>(r%2==0&&n[r+1]&&(e[t]=n[r+1]),e)),{})}_findRoute(e){return this._routes.find((t=>{const r=new RegExp(`^${t.path}$`);return e.match(r)}))}async _getComponent(e,t={}){let r=e;if(r instanceof Promise){r=(await r).default}return new r({...t,router:this})}}}},s={};function c(e){var t=s[e];if(void 0!==t)return t.exports;var r=s[e]={exports:{}};return i[e](r,r.exports,c),r.exports}c.m=i,e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",r="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",n=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},c.a=(o,a,i)=>{var s;i&&((s=[]).d=-1);var c,p,u,h=new Set,l=o.exports,d=new Promise(((e,t)=>{u=t,p=e}));d[t]=l,d[e]=e=>(s&&e(s),h.forEach(e),d.catch((e=>{}))),o.exports=d,a((o=>{var a;c=(o=>o.map((o=>{if(null!==o&&"object"==typeof o){if(o[e])return o;if(o.then){var a=[];a.d=0,o.then((e=>{i[t]=e,n(a)}),(e=>{i[r]=e,n(a)}));var i={};return i[e]=e=>e(a),i}}var s={};return s[e]=e=>{},s[t]=o,s})))(o);var i=()=>c.map((e=>{if(e[r])throw e[r];return e[t]})),p=new Promise((t=>{(a=()=>t(i)).r=0;var r=e=>e!==s&&!h.has(e)&&(h.add(e),e&&!e.d&&(a.r++,e.push(a)));c.map((t=>t[e](r)))}));return a.r?p:i()}),(e=>(e?u(d[r]=e):p(l),n(s)))),s&&s.d<0&&(s.d=0)},c.d=(e,t)=>{for(var r in t)c.o(t,r)&&!c.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((t,r)=>(c.f[r](e,t),t)),[])),c.u=e=>"js/"+e+"-"+e+".js",c.miniCssF=e=>"css/"+e+".css",c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o={},a="javascript-framework-shop:",c.l=(e,t,r,n)=>{if(o[e])o[e].push(t);else{var i,s;if(void 0!==r)for(var p=document.getElementsByTagName("script"),u=0;u<p.length;u++){var h=p[u];if(h.getAttribute("src")==e||h.getAttribute("data-webpack")==a+r){i=h;break}}i||(s=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.setAttribute("data-webpack",a+r),i.src=e),o[e]=[t];var l=(t,r)=>{i.onerror=i.onload=null,clearTimeout(d);var n=o[e];if(delete o[e],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(r))),t)return t(r)},d=setTimeout(l.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=l.bind(null,i.onerror),i.onload=l.bind(null,i.onload),s&&document.head.appendChild(i)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.p="",(()=>{if("undefined"!=typeof document){var e=e=>new Promise(((t,r)=>{var n=c.miniCssF(e),o=c.p+n;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=(i=r[n]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===t))return i}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){var i;if((o=(i=a[n]).getAttribute("data-href"))===e||o===t)return i}})(n,o))return t();((e,t,r,n,o)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",a.onerror=a.onload=r=>{if(a.onerror=a.onload=null,"load"===r.type)n();else{var i=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=s,a.parentNode&&a.parentNode.removeChild(a),o(c)}},a.href=t,r?r.parentNode.insertBefore(a,r.nextSibling):document.head.appendChild(a)})(e,o,null,t,r)})),t={143:0};c.f.miniCss=(r,n)=>{t[r]?n.push(t[r]):0!==t[r]&&{25:1,220:1,301:1,352:1,526:1}[r]&&n.push(t[r]=e(r).then((()=>{t[r]=0}),(e=>{throw delete t[r],e})))}}})(),(()=>{var e={143:0};c.f.j=(t,r)=>{var n=c.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise(((r,o)=>n=e[t]=[r,o]));r.push(n[2]=o);var a=c.p+c.u(t),i=new Error;c.l(a,(r=>{if(c.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+t,t)}};var t=(t,r)=>{var n,o,[a,i,s]=r,p=0;if(a.some((t=>0!==e[t]))){for(n in i)c.o(i,n)&&(c.m[n]=i[n]);if(s)s(c)}for(t&&t(r);p<a.length;p++)o=a[p],c.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=self.webpackChunkjavascript_framework_shop=self.webpackChunkjavascript_framework_shop||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),(()=>{var e=c(286);const t=e.Z.createRoute({history:e.Z.createWebHistory(),routes:[{path:"/javascript-framework-shop",name:"home",component:Promise.all([c.e(197),c.e(526)]).then(c.bind(c,750))},{path:"/javascript-framework-shop/item/[0-9]+",name:"product",component:c.e(301).then(c.bind(c,301))},{path:"/javascript-framework-shop/bids",name:"bids",component:c.e(352).then(c.bind(c,352))},{path:"/javascript-framework-shop/favourites",name:"favourites",component:Promise.all([c.e(197),c.e(25)]).then(c.bind(c,886))},{path:"/javascript-framework-shop/.*",name:"404",component:c.e(736).then(c.bind(c,736))}]});const r=new class{#e={};constructor(e){this.#e=e}run(e="#app"){this.#e.root=e,this.#t(),window.addEventListener(this.#e.history,(()=>this.#t()))}#t(){this.#e.render()}}(t);r.run()})()})();