import BasePage from '@/core/BasePage' // базовая страница
import FilterComponent from '@/components/FilterComponent' // фильтр товаров
import ListingComponent from '@/components/ListingComponent' // список товаров

// Подключаемые компоненты
const components = {
  filter: new FilterComponent(),
  listing: new ListingComponent(),
}

/**
 * Главная страница
 */
export default class HomePage extends BasePage {
  /**
   * Создание главной страницы
   */
  constructor() {
    super()

    document.title = `Главная страница - ${this._title}`

    // Подключение компонентов
    this._setComponents(components)

    // Инициализация главной страницы
    this._init()
  }

  /**
   * Разметка страницы
   *
   * @returns {string}
   * @protected
   */
  get _template() {
    return `
      <div class="home-page">
        <div data-el="filter"><!-- FilterComponent --></div>
        <div data-el="listing"><!-- ListingComponent --></div>
      </div>
    `
  }

  /**
   * Прослушка событий
   *
   * @protected
   */
  _initListeners() {}
}
