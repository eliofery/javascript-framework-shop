import Link from '@/core/Link'
import items from '@/components/MainNavComponent/items.json'
import BaseComponent from '@/core/BaseComponent'

export default class UlComponent extends BaseComponent {
  constructor({ classUl = '', classLi = '', classA = '' } = {}) {
    super()

    this.classUl = classUl
    this.classLi = classLi
    this.classA = classA

    this._init()
  }

  _initComponent() {
    const wrapper = document.createElement('div')

    wrapper.append(this._menu(items))

    this._component = wrapper.firstElementChild
  }

  _menu(data = []) {
    const menu = document.createElement('ul')
    menu.classList.add(`${this.classUl}`)

    const urls = data.map(item => {
      const { title, url, links } = item
      const li = document.createElement('li')
      const link = new Link({
        url,
        html: title,
        attributes: { class: `${this.classA}` },
        activeClass: `${this.classA}--active`,
      })

      li.classList.add(`${this.classLi}`)

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
