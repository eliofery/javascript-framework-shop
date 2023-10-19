import HISTORY_TYPE_ENUM from '@/core/Router/HistoryTypeEnum'

export default class Dispatcher {
  /**
   * Разрешение на создание экземпляра класса
   *
   * @type {boolean}
   * @private
   */
  static _initializing = false

  /**
   * Экземпляр класса
   *
   * @type {null}
   * @private
   */
  static _instance = null

  /**
   * Режим истории по умолчанию с использованием хэша
   *
   * @type {string}
   * @property
   */
  _history = HISTORY_TYPE_ENUM.HASH

  /**
   * Роуты
   *
   * @type {[]}
   * @property
   */
  _routes = []

  _root = '#app'

  constructor() {
    if (!Dispatcher._initializing) {
      throw new TypeError('Нельзя напрямую создать экземпляр данного класса')
    }
  }

  get root() {
    return this._root
  }

  set root(selector) {
    this._root = selector
  }

  /**
   * Создание экземпляра класса
   *
   * @returns {*|null}
   */
  static get instance() {
    if (this._instance instanceof this) {
      return this._instance
    }

    Dispatcher._initializing = true
    this._instance = new this()
    Dispatcher._initializing = false

    return this._instance
  }

  /**
   * Получить активный режим истории
   *
   * @returns {string}
   */
  get history() {
    return this._history
  }

  /**
   * Получить список всех роутов
   *
   * @returns {[]}
   */
  get routes() {
    return this._routes
  }

  static createWebHashHistory() {
    return HISTORY_TYPE_ENUM.HASH
  }

  static createWebHistory() {
    return HISTORY_TYPE_ENUM.STATE
  }

  /**
   * Форматирование текущего адреса страницы для режима хэш
   *
   * @returns {*}
   * @property
   */
  _strippedHashPath() {
    return `/${window.location.hash.replace(/^#\//, '')}` // '#/foo/bar' -> '/foo/bar'
  }

  /**
   * Форматирование текущего адреса страницы
   *
   * @returns {*}
   * @property
   */
  _strippedPath() {
    return `/${window.location.pathname
      .replace(/^\/+|\/+$/g, '') // '////foo/bar////' -> 'foo/bar'
      .replace(/\/+/g, '/')}` // 'foo/////bar' -> 'foo/bar'
  }
}
