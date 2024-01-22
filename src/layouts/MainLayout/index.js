import BaseComponent from '@/core/BaseComponent' // базовый компонент
import MainNavComponent from '@/components/MainNavComponent' // компонент навигации

// Стили шаблона
import '@/layouts/MainLayout/main-layout.scss'
import '@/layouts/MainLayout/main-header.scss'
import '@/layouts/MainLayout/main-footer.scss'

// Вложенные компоненты
const components = {
  nav: new MainNavComponent(),
}

/**
 * Основной шаблон
 */
export default class MainLayout extends BaseComponent {
  /**
   * Создание шаблона
   */
  constructor() {
    super()

    // Регистрируем вложенные компоненты
    this._setComponents(components)

    // Инициализируем шаблон
    this._init()
  }

  /**
   * Разметка шаблона
   *
   * @returns {string}
   * @protected
   */
  get _template() {
    return `
      <div class="main-layout">
        <header class="main-header">
          <nav data-el="nav"><!-- MainNavComponent --></nav>
        </header>

        <main data-el="page"><!-- PageComponent --></main>

        <footer class="main-footer">
          <div class="container">
            <span>Copyright 2023</span>
            <a class="main-footer__author" href="https://github.com/eliofery/javascript-framework-shop" target="_blank" rel="nofollow">
            <span>Sergio</span> Eliofery
            </a>
          </div>
        </footer>
      </div>
    `
  }
}
