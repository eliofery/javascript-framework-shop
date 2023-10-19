export default class Store {
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

  _reducers = {}

  _store = {}

  _listeners = {}

  constructor() {
    if (!Store._initializing) {
      throw new TypeError('Нельзя напрямую создать экземпляр данного класса')
    }
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

    Store._initializing = true
    this._instance = new this()
    Store._initializing = false

    return this._instance
  }

  static createStore(reducers = {}, initStore = {}) {
    const store = Store.instance

    store._reducers = { ...reducers }
    store._store = { ...initStore }

    return store
  }
}
