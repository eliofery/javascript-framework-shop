import BasePage from '@/core/BasePage'

const components = {}

export default class HomePage extends BasePage {
  constructor() {
    super()

    document.title = `Главная страница - ${this._title}`

    this._setComponents(components)
    this._init()
  }

  get _template() {
    return `
      <div class="error-page">
        <div class="container">
          <h1 class="title">Страница 404</h1>
          <p>Страница не найдена.</p>
        </div>
      </div>
    `
  }

  _initListeners() {}
}
