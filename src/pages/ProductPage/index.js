import BasePage from '@/core/BasePage'
import ProductService from '@/services/ProductService'
import { priceFormat } from '@/utils/num'
import ModalComponent from '@/components/ModalComponent'

import '@/pages/ProductPage/product-page.scss'

const { loadProduct } = ProductService

export default class ProductPage extends BasePage {
  _id = null

  _data = {}

  constructor({ item: id }) {
    super()

    document.title = `Страница продукта - ${this._title}`

    this._id = id
    this._init()
  }

  async _afterInit() {
    await this._loadData()
    await this._updateData()
  }

  async _loadData() {
    this._data.product = await loadProduct(this._id)
  }

  async _updateData() {
    const { product } = this._data

    document.title = `${product.title} - ${this._title}`

    this.update({
      title: this._heading(product),
      image: this._image(product),
      sector: this._sector(product.complex_name),
      subtitle: this._subtitle(product),
      art: product.scu,
      building: product.building,
      floor: product.floor,
      flatNumber: product.flat_number,
      rooms: product.rooms,
      priceTotal: `${priceFormat(product.price_total)} ₸`,
      priceSq: `${priceFormat(product.price_sq_m)} ₸/м<sup>2</sup>`,
      square: `${product.square} м<sup>2</sup>`,
    })
  }

  get _template() {
    return `
      <div class="product-page">
        <div class="container">
          <h1 class="product-page__title" data-el="title">Загрузка...</h1>

          <div class="product-page__content">
            <p class="product-page__pic" data-el="image">
              Загрузка...
            </p>

            <div class="product-page__info">
              <div class="product-page__info-primary">
                <b class="product-page__sector" data-el="sector">Загрузка...</b>
                <h2 class="product-page__subtitle" data-el="subtitle">Загрузка...</h2>
                <p class="product-page__art" data-el="art">Загрузка...</p>
                <button class="product-page__favorite" type="button">
                  <svg width="24" height="24"><use xlink:href="#icon-heart"></use></svg>
                  В избранное
                </button>
                <button class="product-page__favorite product-page__favorite--active" type="button">
                  <svg width="24" height="24"><use xlink:href="#icon-heart"></use></svg>
                  В избранном
                </button>
              </div>

              <div class="product-page__info-secondary">
                <dl class="product-page__param">
                  <dt class="product-page__param-title">Корпус</dt>
                  <dd class="product-page__param-desc" data-el="building"></dd>
                  <dt class="product-page__param-title">Этаж</dt>
                  <dd class="product-page__param-desc" data-el="floor"></dd>
                  <dt class="product-page__param-title">Номер</dt>
                  <dd class="product-page__param-desc" data-el="flatNumber"></dd>
                  <dt class="product-page__param-title">Комнат</dt>
                  <dd class="product-page__param-desc" data-el="rooms"></dd>
                </dl>

                <div class="product-page__detail">
                  <dt class="product-page__detail-title">Стоимость</dt>
                  <dd class="product-page__detail-desc product-page__detail-title--big" data-el="priceTotal">Загрузка...</dd>
                  <dt class="product-page__detail-title">Цена за м<sup>2</sup></dt>
                  <dd class="product-page__detail-desc" data-el="priceSq">Загрузка...</dd>
                  <dt class="product-page__detail-title">Площадь</dt>
                  <dd class="product-page__detail-desc" data-el="square">Загрузка...</dd>
                </div>

                <button class="product-page__buy" type="button" data-el="buy">Забронировать</button>
              </div>
            </div>
          </div>
        </div>

        <div data-el="modal"></div>
      </div>
    `
  }

  _heading(product) {
    return `${product.title}, ${product.square} м<sup>2</sup> за ${priceFormat(
      product.price_total,
    )} ₸`
  }

  _image(product) {
    return `<img class="product-page__img" src="${product.image}" width="500" height="500" alt="${product.title}">`
  }

  _sector(complex) {
    return `ЖК ${complex}`
  }

  _subtitle(product) {
    return `${product.title}, ${product.square} м<sup>2</sup>`
  }

  _initListeners() {
    this._elements.buy.addEventListener('click', () => {
      this._reloadComponents({
        modal: ModalComponent,
      })
    })
  }
}
