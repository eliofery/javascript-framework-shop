import BasePage from '@/core/BasePage'
import FilterComponent from '@/components/FilterComponent'

const components = {
  filter: new FilterComponent(),
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
      <div class="container">
        <div data-el="filter"><!-- FilterComponent --></div>
      </div>
    `
  }

  _initListeners() {}
}
