"use strict";(self.webpackChunkjavascript_framework_shop=self.webpackChunkjavascript_framework_shop||[]).push([[736],{771:(t,e,n)=>{n.d(e,{Z:()=>s});class s{_component=null;_elements={};_components={};_abortController=new AbortController;constructor(){if("BaseComponent"===this.constructor.name)throw new TypeError("Абстрактный класс!")}get _template(){return""}get component(){return this._component}get elements(){return this._elements}_setComponents(t){this._components=t}_reloadComponents(t){this._setComponents(t),this._initComponents()}_init(){this._beforeInit().then(),this._initComponent(),this._initElements(),this._initComponents(),this._initListeners(),this._afterInit().then()}async _beforeInit(){}async _afterInit(){}_loadData(){}_updateData(){}_initComponent(){const t=document.createElement("div");t.innerHTML=this._template,this._component=t.firstElementChild||t}_initElements(t=this._component){t.querySelectorAll("[data-el]").forEach((t=>{const e=t.dataset.el;this._elements[e]=t}))}_initComponents(){for(const t of Object.keys(this._components)){let e=this._elements[t];const{component:n}="object"!=typeof this._components[t]||Array.isArray(this._components[t])?new this._components[t]:this._components[t];e&&n&&(n.dataset.el=e.dataset.el,this._elements[e.dataset.el]=n,e.insertAdjacentElement("beforebegin",n),e.remove(),e=null,this._initElements(n))}}_initListeners(){}update(t={}){for(const[e,n]of Object.entries(t))this._elements[e]&&(this._elements[e].innerHTML=n)}destroy(){this._remove(),this._removeListeners()}_remove(){this._component.innerHTML="",this._elements={}}_removeListeners(){this._abortController.abort()}}},44:(t,e,n)=>{n.d(e,{Z:()=>o});var s=n(771);class o extends s.Z{_layout=n.e(220).then(n.bind(n,220));_title="JavaScript framework";constructor(){super(),document.title="Главая страница"}get layout(){return this._layout}}},736:(t,e,n)=>{n.r(e),n.d(e,{default:()=>i});var s=n(44);const o={};class i extends s.Z{constructor(){super(),document.title=`Главная страница - ${this._title}`,this._setComponents(o),this._init()}get _template(){return'\n      <div class="error-page">\n        <div class="container">\n          <h1 class="title">Страница 404</h1>\n          <p>Страница не найдена.</p>\n        </div>\n      </div>\n    '}_initListeners(){}}}}]);