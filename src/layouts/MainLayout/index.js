import BaseComponent from '@/core/BaseComponent'
import MainNavComponent from '@/components/MainNavComponent'

import '@/layouts/MainLayout/main-layout.scss'
import '@/layouts/MainLayout/main-header.scss'
import '@/layouts/MainLayout/main-footer.scss'

const components = {
  nav: new MainNavComponent(),
}

export default class Index extends BaseComponent {
  constructor() {
    super()

    this._setComponents(components)
    this._init()
  }

  get _template() {
    return `
      <div class="main-layout">
        <header class="main-header">
          <nav data-el="nav"><!-- MainNavComponent --></nav>
        </header>

        <main data-el="page"><!-- PageComponent --></main>

        <footer class="main-footer">
          <div class="container">Copyright 2023</div>
        </footer>
      </div>
    `
  }
}
