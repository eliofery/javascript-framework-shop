import BasePage from '@/core/BasePage'
import FilterComponent from '@/components/FilterComponent'
import ListingComponent from '@/components/ListingComponent'

const components = {
  filter: new FilterComponent(),
  listing: new ListingComponent(),
}

export default class HomePage extends BasePage {
  constructor() {
    super()

    document.title = `Главная страница - ${this._title}`

    this._setComponents(components)
    this._init()
  }

  get _template() {
    return `
      <div class="home-page">
        <div data-el="filter"><!-- FilterComponent --></div>
        <div data-el="listing"><!-- ListingComponent --></div>
      </div>
    `
  }

  _initListeners() {}
}
