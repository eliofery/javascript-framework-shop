import BaseComponent from '@/core/BaseComponent'
import Link from '@/core/Link'
import items from '@/components/NavComponent/items.json'

const components = {}

export default class NavComponent extends BaseComponent {
  constructor() {
    super()

    this._setComponents(components)
    this._init()
  }

  get _template() {
    return `
      <nav class="main-nav" data-el="nav">
        <!-- NavComponent -->
      </nav>
    `
  }

  _initComponent() {
    this._component = this._menu(items)
  }

  _menu(elements) {
    const menu = document.createElement('ul')

    const urls = elements.map(item => {
      const { title, url, links } = item
      const li = document.createElement('li')
      const link = new Link({ url, html: title })

      if (url === link.router.getUri()) {
        link.component.classList.add(link.activeClass)
      }

      li.append(link.component)

      if (links) {
        const subMenu = this._menu(links)

        li.append(subMenu)
      }

      return li
    })

    menu.append(...urls)

    return menu
  }

  _initListeners() {}
}
