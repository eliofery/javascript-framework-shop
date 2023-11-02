import BasePage from '@/core/BasePage'
import CardListComponent from '@/components/CardListComponent'
import store from '@/store'
import ProductService from '@/services/ProductService'

import '@/pages/FavouritesPage/favorite-page.scss'

const { loadProductById } = ProductService

export default class FavouritesPage extends BasePage {
  constructor() {
    super()

    document.title = `Избранные товары - ${this._title}`

    this._init()
  }

  async _afterInit() {
    await this._updateData()
  }

  async _updateData() {
    const favourites = await loadProductById(store.getState('favourites'))

    const components = {
      productList: new CardListComponent(favourites),
    }

    this._reloadComponents(components)
  }

  get _template() {
    return `
      <div class="favorite-page">
        <div class="container">
          <h1 class="favorite-page__title">Избранное</h1>

          <div data-el="productList"><!-- CardListComponent --></div>
        </div>
      </div>
    `
  }

  _initListeners() {}
}
