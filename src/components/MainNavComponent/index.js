import BaseComponent from '@/core/BaseComponent'
import Link from '@/core/Link'
import UlComponent from '@/components/UlComponent'

import '@/components/MainNavComponent/main-nav.scss'

const components = {
  homeLink: new Link({
    url: `${process.env.PREFIX_URL}`,
    html: 'Интернет магазин',
    attributes: { class: 'main-nav__logo' },
  }),

  menu: new UlComponent({
    classUl: 'main-nav__list',
    classLi: 'main-nav__item',
    classA: 'main-nav__link',
  }),
}

export default class MainNavComponent extends BaseComponent {
  constructor() {
    super()

    this._setComponents(components)
    this._init()
  }

  get _template() {
    return `
      <nav class="main-nav" data-el="mainNav">
        <div class="container">
          <div data-el="homeLink"><!-- homeLink --></div>
          <div data-el="menu"><!-- _menu --></div>
        </div>
      </nav>
    `
  }

  _initListeners() {
    // const { homeLink, menu } = this._elements
  }
}
