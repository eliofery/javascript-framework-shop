import BaseComponent from '@/core/BaseComponent'
import { priceFormat } from '@/utils/num'

import '@/components/CardComponent/product-card.scss'
import Link from '@/core/Link'

export default class CardComponent extends BaseComponent {
  constructor(data = {}) {
    super()

    this._id = data.id
    this._scu = data.scu
    this._title = data.title
    this._complexName = data.complex_name
    this._square = data.square
    this._priceSqM = data.price_sq_m
    this._priceTotal = data.price_total
    // this._building = data['building']
    this._floor = data.floor
    this._floorsTotal = data.floors_total
    this._rooms = data.rooms
    // this._flatNumber = data['flat_number']
    this._image = data.image

    this._init()
  }

  async _loadData() {
    //
  }

  async _updateData() {
    //
  }

  _initComponent() {
    this._component = document.createElement('article')
    this._component.classList.add('product-card')
    this._component.append(this._link())
  }

  _link() {
    return new Link({
      url: `/item/${this._id}`,
      attributes: { class: 'product-card__link' },
      html: `
          <header class="product-card__header">
            <h2 class="product-card__title">ЖК ${this._complexName}</h2>
            <span class="product-card__favorite" data-el="favorite" tabindex="0">
              <svg width="24" height="24"><use xlink:href="#icon-heart"></use></svg>
            </span>
          </header>
          <p class="product-card__pic">
            <img class="product-card__img" width="300" height="300" src="${
              this._image
            }" alt="ЖК ${this._complexName}">
          </p>
          <div class="product-card__desc">
            <p class="product-card__price">
              <b class="product-card__price-total">${priceFormat(
                this._priceTotal,
              )} ₸</b>
              <span class="product-card__price-square">${priceFormat(
                this._priceSqM,
              )} ₸/м<sup>2</sup></span>
            </p>
            <dl class="product-card__param">
              <dt class="product-card__param-title">Комнат</dt>
              <dd class="product-card__param-desc">${this._rooms}</dd>
              <dt class="product-card__param-title">Площадь</dt>
              <dd class="product-card__param-desc">${this._square}</dd>
            </dl>
          </div>
          <footer class="product-card__footer">
            <span class="product-card__scu">${this._scu}</span>
            <span class="product-card__floor">Этаж ${this._floor} из ${
              this._floorsTotal
            }</span>
          </footer>
    `,
    }).component
  }

  _initListeners() {}
}
