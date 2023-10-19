import BaseComponent from '@/core/BaseComponent'
import NavComponent from '@/components/NavComponent'

const components = {
  nav: new NavComponent(),
}

export default class MainLayout extends BaseComponent {
  constructor() {
    super()

    this._setComponents(components)
    this._init()
  }

  get _template() {
    return `
      <div class="main-layout">
        <header class="main-header">
          <nav data-el="nav"><!-- NavComponent --></nav>
        </header>

        <main data-el="page"><!-- PageComponent --></main>

        <footer>Copyright 2023</footer>
      </div>
    `
  }
}
