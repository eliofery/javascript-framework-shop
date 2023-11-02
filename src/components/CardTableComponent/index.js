import BaseComponent from '@/core/BaseComponent'
import store from '@/store'
import { convertKeysToCamelCase } from '@/utils/string'
import { priceFormat } from '@/utils/num'
import { SORT_PRODUCT, sortProduct } from '@/reducers/sortReducer'
import { compare, compareString } from '@/utils/form'
import Link from '@/core/Link'

import '@/components/CardTableComponent/card-table.scss'

export default class CardTableComponent extends BaseComponent {
  _data = {}

  constructor() {
    super()

    this._init()
  }

  async _beforeInit() {
    await this._loadData()
    await this._updateData()
  }

  async _loadData() {
    this._data.products = store.getState('products')

    store.subscribe(SORT_PRODUCT, () => {
      this._toggle('complex')
      this._toggle('rooms')
      this._toggle('square')
      this._toggle('priceSqM')
      this._toggle('priceTotal')
    })
  }

  async _updateData() {
    const { products } = this._data

    this._elements.content.append(...this._list(products))
  }

  get _template() {
    return `
      <div class="card-table">
        <header class="card-table__row card-table__filter" data-el="filter">
          <button class="card-table__col card-table__toggle" type="button" tabindex="-1"><span>Артикул</span></button>
          <button class="card-table__col card-table__toggle card-table__toggle--desc" type="button" data-el="complex"><span>ЖК</span></button>
          <button class="card-table__col card-table__toggle" type="button" tabindex="-1"><span>Корпус</span></button>
          <button class="card-table__col card-table__toggle" type="button" tabindex="-1"><span>Этаж</span></button>
          <button class="card-table__col card-table__toggle card-table__toggle--desc" type="button" data-el="rooms"><span>Комнат</span></button>
          <button class="card-table__col card-table__toggle card-table__toggle--desc" type="button" data-el="square"><span>Площадь</span></button>
          <button class="card-table__col card-table__toggle card-table__toggle--desc" type="button" data-el="priceSqM"><span>м<sup>2</sup></span></button>
          <button class="card-table__col card-table__toggle card-table__toggle--desc" type="button" data-el="priceTotal"><span>Стоимость</span></button>
          <button class="card-table__col card-table__toggle" type="button" tabindex="-1"><span>Избранное</span></button>
        </header>
        <div class="card-table__content" data-el="content"></div>
      </div>
    `
  }

  _list(data = {}) {
    return data.map(item => {
      const {
        id,
        scu,
        complexName,
        square,
        priceSqM,
        priceTotal,
        building,
        floor,
        rooms,
      } = convertKeysToCamelCase(item)

      const link = new Link({
        url: `/item/${id}`,
        html: `
          <div class="card-table__col card-table__col--scu">${scu}</div>
          <div class="card-table__col card-table__col--complex">ЖК ${complexName}</div>
          <div class="card-table__col card-table__col--building">${building}</div>
          <div class="card-table__col card-table__col--floor">${floor}</div>
          <div class="card-table__col card-table__col--rooms">${rooms}</div>
          <div class="card-table__col card-table__col--square">${square} м<sup>2</sup></div>
          <div class="card-table__col card-table__col--priceSqM">${priceFormat(
            priceSqM,
          )} ₸</div>
          <div class="card-table__col card-table__col--priceTotal">${priceFormat(
            priceTotal,
          )} ₸</div>
          <div class="card-table__col card-table__col--favorite">
            <span class="card-table__favorite" data-el="favorite" tabindex="0">
              <svg width="24" height="24"><use xlink:href="#icon-heart"></use></svg>
            </span>
          </div>
        `,
        attributes: { class: 'card-table__row card-table__card' },
      })

      return link.component
    })
  }

  _toggle(name) {
    const sortDirections = store.getState('directions')

    if (sortDirections[name] === 'asc') {
      this._elements[name].classList.remove('card-table__toggle--asc')
      this._elements[name].classList.add('card-table__toggle--desc')
    } else {
      this._elements[name].classList.remove('card-table__toggle--desc')
      this._elements[name].classList.add('card-table__toggle--asc')
    }
  }

  _initListeners() {
    const { complex, rooms, square, priceSqM, priceTotal } = this._elements
    const products = store.getState('products')
    const sortDirections = store.getState('directions')

    const sortDirection = col =>
      (sortDirections[col] = sortDirections[col] === 'asc' ? 'desc' : 'asc')

    complex.addEventListener('click', () => {
      sortDirection('complex')

      products.sort((a, b) =>
        sortDirections.complex === 'asc'
          ? compareString(a.complex_name, b.complex_name)
          : compareString(b.complex_name, a.complex_name),
      )

      store.dispatch(sortProduct(products))
    })

    rooms.addEventListener('click', () => {
      sortDirection('rooms')

      products.sort((a, b) =>
        sortDirections.rooms === 'asc'
          ? compare(a.rooms, b.rooms)
          : compare(b.rooms, a.rooms),
      )

      store.dispatch(sortProduct(products))
    })

    square.addEventListener('click', () => {
      sortDirection('square')

      products.sort((a, b) =>
        sortDirections.square === 'asc'
          ? compare(a.square, b.square)
          : compare(b.square, a.square),
      )

      store.dispatch(sortProduct(products))
    })

    priceSqM.addEventListener('click', () => {
      sortDirection('priceSqM')

      products.sort((a, b) =>
        sortDirections.priceSqM === 'asc'
          ? compare(a.price_sq_m, b.price_sq_m)
          : compare(b.price_sq_m, a.price_sq_m),
      )

      store.dispatch(sortProduct(products))
    })

    priceTotal.addEventListener('click', () => {
      sortDirection('priceTotal')

      products.sort((a, b) =>
        sortDirections.priceTotal === 'asc'
          ? compare(a.price_total, b.price_total)
          : compare(b.price_total, a.price_total),
      )

      store.dispatch(sortProduct(products))
    })
  }
}
