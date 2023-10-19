export default class BaseComponent {
  _component = null

  _elements = {}

  _components = {}

  _abortController = new AbortController()

  constructor() {
    if (this.constructor.name === 'BaseComponent') {
      throw new TypeError('Абстрактный класс!')
    }
  }

  // Разметка компонента
  get _template() {
    return ''
  }

  get component() {
    return this._component
  }

  get elements() {
    return this._elements
  }

  _setComponents(components) {
    this._components = components
  }

  _init() {
    this._initComponent()
    this._initElements()
    this._initComponents()
    this._initListeners()
  }

  // Создание ноды компонента
  _initComponent() {
    const wrapper = document.createElement('div')

    wrapper.innerHTML = this._template

    this._component = wrapper.firstElementChild || wrapper
  }

  // Получение вложенных элементов в компоненте
  _initElements(component = this._component) {
    const list = component.querySelectorAll('[data-el]')

    list.forEach(item => {
      const name = item.dataset.el

      this._elements[name] = item
    })
  }

  _initComponents() {
    for (const componentName of Object.keys(this._components)) {
      let root = this._elements[componentName]
      const { component } = this._components[componentName]

      if (root && component) {
        component.dataset.el = root.dataset.el

        this._elements[root.dataset.el] = component

        root.insertAdjacentElement('beforebegin', component)
        root.remove()
        root = null

        this._initElements(component)
      }
    }
  }

  // Прослушка событий на компоненте
  _initListeners() {
    // Абстрактный метод!
  }

  // Обновление содержимого компонента
  update(data = {}) {
    for (const [key, value] of Object.entries(data)) {
      if (this._elements[key]) {
        this._elements[key].innerHTML = value
      }
    }
  }

  // Полное удаление компонента
  destroy() {
    this._remove()
    this._removeListeners()

    this._component = null
    this._elements = {}
  }

  // Удаление компонента
  _remove() {
    this._component?.remove()
  }

  // Удаление прослушек событий
  _removeListeners() {
    this._abortController.abort()
  }
}
