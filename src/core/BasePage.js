import BaseComponent from '@/core/BaseComponent'

export default class BasePage extends BaseComponent {
  _layout = import('@/layouts/MainLayout')

  constructor() {
    super()

    document.title = 'Главая страница'
  }

  get layout() {
    return this._layout
  }
}
