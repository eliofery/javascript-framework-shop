"use strict";(self.webpackChunkjavascript_framework_shop=self.webpackChunkjavascript_framework_shop||[]).push([[25],{886:(t,a,e)=>{e.a(t,(async(t,s)=>{try{e.r(a),e.d(a,{default:()=>p});var i=e(44),n=e(828),r=e(319),c=e(42),o=t([n,r]);[n,r]=o.then?(await o)():o;const{loadProductById:d}=c.default;class p extends i.Z{constructor(){super(),document.title=`Избранные товары - ${this._title}`,this._init()}async _afterInit(){await this._updateData()}async _updateData(){const t=await d(r.Z.getState("favourites")),a={productList:new n.Z(t)};this._reloadComponents(a)}get _template(){return'\n      <div class="favorite-page">\n        <div class="container">\n          <h1 class="favorite-page__title">Избранное</h1>\n\n          <div data-el="productList">\x3c!-- CardListComponent --\x3e</div>\n        </div>\n      </div>\n    '}_initListeners(){}}s()}catch(t){s(t)}}))}}]);