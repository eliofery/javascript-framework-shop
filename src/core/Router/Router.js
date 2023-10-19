import Dispatcher from '@/core/Router/Dispatcher'
import HISTORY_TYPE_ENUM from '@/core/Router/HistoryTypeEnum'

/**
 * Роутер
 *
 */
export default class Router extends Dispatcher {
  _pageElement = null

  /**
   * Создание роутера
   *
   * @param history
   * @param routes
   * @returns {*|null}
   */
  static createRoute({ history, routes }) {
    const router = Router.instance

    router._history = history ?? router._history
    router._routes.push(...routes)

    return router
  }

  render = async () => {
    const route = this._findRoute(this.getUri())

    if (!route) {
      this._page404()

      return
    }

    const page = await this._getComponent(route.component)

    if (page.layout) {
      await this._renderLayout(page.layout)
    } else {
      this._pageElement = null
    }

    await this._renderPage(page)
  }

  _renderLayout = async layout => {
    const { component, elements } = await this._getComponent(layout)

    this._pageElement = elements.page

    const root = document.querySelector(this.root)

    root.innerHTML = ''
    root.insertAdjacentElement('afterbegin', component)
  }

  _renderPage = async ({ component }) => {
    let root = document.querySelector(this._root)

    if (this._pageElement) {
      root = this._pageElement
    }

    root.innerHTML = ''
    root.insertAdjacentElement('afterbegin', component)

    this._pageElement = null
  }

  _page404() {
    document.querySelector(this._root).innerHTML = 'Страница 404 не найдена'
  }

  /**
   * Получение текущей ссылки
   *
   * @returns {*}
   */
  getUri() {
    if (this._history === HISTORY_TYPE_ENUM.STATE) {
      return this._strippedPath()
    }
    return this._strippedHashPath()
  }

  /**
   * Поиск текущего роута
   *
   * @param route
   * @returns {*}
   * @property
   */
  _findRoute(route) {
    return this._routes.find(item => {
      const regex = new RegExp(`^${item.path}$`)

      return route.match(regex)
    })
  }

  async _getComponent(component) {
    let Component = component

    if (Component instanceof Promise) {
      const module = await Component

      Component = module.default
    }

    return new Component()
  }
}
