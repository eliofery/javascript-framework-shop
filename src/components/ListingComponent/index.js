import BaseComponent from '@/core/BaseComponent'
import store from '@/store'
import { SUBMIT_FILTER, RESET_FILTER } from '@/reducers/filterReducer'
import CardList from '@/components/CardList'
import CardTable from '@/components/CardTable'

import '@/components/ListingComponent/main-listing.scss'

const components = {
  productList: CardList.bind(null),
}

export default class ListingComponent extends BaseComponent {
  constructor() {
    super()

    this._setComponents(components)
    this._init()
  }

  async _afterInit() {
    await this._loadData()
    await this._updateData()
  }

  async _loadData() {
    store.subscribe(SUBMIT_FILTER, () => {
      this._reloadComponents(components)
    })

    store.subscribe(RESET_FILTER, () => {
      this._reloadComponents(components)
    })
  }

  async _updateData() {
    //
  }

  get _template() {
    return `
      <section class="main-listing">
        <div class="container">
          <h2 class="sr-only">Список объектов</h2>

          <div class="main-listing__state">
            <div class="main-listing__state-left">
              <label for="sortBy" class="main-listing__sort-label">Сортировать</label>
              <select id="sortBy" class="main-listing__sort" name="sortBy" data-el="sortBy">
                <option value="priceASC">по цене ↑</option>
                <option value="priceDESC">по цене ↓</option>
                <option value="squareASC">по площади ↑</option>
                <option value="squareDESC">по площади ↓</option>
              </select>
            </div>
            <div class="main-listing__state-right">
              <ul class="main-listing__view">
                <li class="main-listing__view-item">
                  <input id="cardList" class="sr-only" type="radio" name="viewType" value="cardList" checked>
                  <label for="cardList" class="main-listing__view-toggle" aria-label="Отображать карточки товара в виде плиток" title="Плитки" data-el="toggleList">
                    <svg width="22" height="22"><use xlink:href="#icon-card-list"></use></svg>
                  </label>
                </li>
                <li class="main-listing__view-item">
                  <input id="cardTable" class="sr-only" type="radio" name="viewType" value="cardTable">
                  <label for="cardTable" class="main-listing__view-toggle" aria-label="Отображать карточки товара в виде таблицы" title="Таблица" data-el="toggleTable">
                    <svg width="22" height="22"><use xlink:href="#icon-card-table"></use></svg>
                  </label>
                </li>
              </ul>
            </div>
          </div>

          <div class="main-listing__content">
            <div data-el="productList"><!-- CardList || CardTable --></div>
          </div>
        </div>
      </section>
    `
  }

  _initListeners() {
    this._elements.toggleList.addEventListener('click', () => {
      if (!this._elements.toggleList.dataset.checked) {
        components.productList = CardList
        this._reloadComponents(components)
      }

      this._elements.toggleList.dataset.checked = 'true'
      this._elements.toggleTable.removeAttribute('data-checked')
    })

    this._elements.toggleTable.addEventListener('click', () => {
      if (!this._elements.toggleTable.dataset.checked) {
        components.productList = CardTable
        this._reloadComponents(components)
      }

      this._elements.toggleList.removeAttribute('data-checked')
      this._elements.toggleTable.dataset.checked = 'true'
    })
  }
}
