import BasePage from '@/core/BasePage'

const components = {

}

export default class HomePage extends BasePage {
  constructor() {
    super()

    document.title = 'Главная страница'

    this._setComponents(components)
    this._init()
  }

  get _template() {
    return `

    `
  }

  _initListeners() {

  }
}
