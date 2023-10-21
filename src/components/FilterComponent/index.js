import BaseComponent from '@/core/BaseComponent'
import InfoService from '@/services/InfoService'

import '@/components/FilterComponent/main-filter.scss'

const { loadInfo } = InfoService

export default class FilterComponent extends BaseComponent {
  _data = []

  constructor() {
    super()

    this._init()
    this._asyncData().then()
  }

  async _asyncData() {
    this.data = await loadInfo()

    const {
      complexNames,
      roomValues,
      priceMin,
      priceMax,
      squareMin,
      squareMax,
    } = this.data

    this.update({
      place: this._place(complexNames),
      room: this._room(roomValues),
      sqMin: this._area({ squareMin, squareMax }),
      sqMax: this._area({ squareMin, squareMax }, 'до'),
      priceMin: this._price({ priceMin, priceMax }),
      priceMax: this._price({ priceMin, priceMax }, 'до'),
      submit: this._submit(19, count => `Показать ${count} объектов`),
    })
  }

  get _template() {
    return `
      <section class="main-filter">
        <div class="container">
          <h2 class="main-filter__title title">Выбор квартир:</h2>

          <form class="main-filter__form" method="get">
            <div class="main-filter__items">
              <div class="main-filter__item">
                <h3 class="main-filter__label">Выбор проекта:</h3>
                <select class="main-filter__select" name="complex" data-el="place">
                  <option value="all">Все проекты</option>
                  <option value="Генеральский">ЖК Генеральский</option>
                  <option value="Речной">ЖК Речной</option>
                  <option value="Лесной">ЖК Лесной</option>
                  <option value="Квантум">ЖК Квантум</option>
                </select>
              </div>

              <div class="main-filter__item">
                <h3 class="main-filter__label">Комнат:</h3>
                <ul class="main-filter__checkboxes" data-el="room">
                  <li class="main-filter__checkbox-item">
                    <input id="room_1" class="sr-only" type="checkbox" name="rooms[]" value="1">
                    <label for="room_1" class="main-filter__checkbox">1</label>
                  </li>
                  <li class="main-filter__checkbox-item">
                    <input id="room_2" class="sr-only" type="checkbox" name="rooms[]" value="2">
                    <label for="room_2" class="main-filter__checkbox">2</label>
                  </li>
                  <li class="main-filter__checkbox-item">
                    <input id="room_3" class="sr-only" type="checkbox" name="rooms[]" value="3">
                    <label for="room_3" class="main-filter__checkbox">3</label>
                  </li>
                  <li class="main-filter__checkbox-item">
                    <input id="room_4" class="sr-only" type="checkbox" name="rooms[]" value="4">
                    <label for="room_4" class="main-filter__checkbox">4</label>
                  </li>
                  <li class="main-filter__checkbox-item">
                    <input id="room_5" class="sr-only" type="checkbox" name="rooms[]" value="5">
                    <label for="room_5" class="main-filter__checkbox">5</label>
                  </li>
                </ul>
              </div>

              <div class="main-filter__item">
                <h3 class="main-filter__label">Площадь:</h3>
                <ul class="main-filter__inputs">
                  <li class="main-filter__input-item" data-el="sqMin">
                    <label class="main-filter__input-wrap">
                      <span class="main-filter__input-title">от</span>
                      <input class="main-filter__input" type="number" name="sqmin" min="38" max="120" placeholder="38">
                      <span class="main-filter__input-title main-filter__input-title--accent">м²</span>
                    </label>
                  </li>
                  <li class="main-filter__input-item" data-el="sqMax">
                    <label class="main-filter__input-wrap">
                      <span class="main-filter__input-title">до</span>
                      <input class="main-filter__input" type="number" name="sqmax" min="38" max="120" placeholder="120">
                      <span class="main-filter__input-title main-filter__input-title--accent">м²</span>
                    </label>
                  </li>
                </ul>
              </div>

              <div class="main-filter__item">
                <h3 class="main-filter__label">Стоимость:</h3>
                <ul class="main-filter__inputs">
                  <li class="main-filter__input-item" data-el="priceMin">
                    <label class="main-filter__input-wrap">
                      <span class="main-filter__input-title">от</span>
                      <input class="main-filter__input main-filter__input--large" type="number" name="pricemin" min="2325000" max="4525000" placeholder="2325000">
                      <span class="main-filter__input-title main-filter__input-title--accent">₸</span>
                    </label>
                  </li>
                  <li class="main-filter__input-item" data-el="priceMax">
                    <label class="main-filter__input-wrap">
                      <span class="main-filter__input-title">до</span>
                      <input class="main-filter__input main-filter__input--large" type="number" name="pricemax" min="2325000" max="4525000" placeholder="4525000">
                      <span class="main-filter__input-title main-filter__input-title--accent">₸</span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>

            <div class="main-filter__buttons">
              <button class="main-filter__submit" type="submit" data-el="submit">Показать 119 объектов</button>
              <button class="main-filter__reset" type="reset">Сбросить фильтр</button>
            </div>
          </form>
        </div>
      </section>
    `
  }

  _place(data = []) {
    if (!Array.isArray(data)) return ''

    let options = '<option value="all">Все проекты</option>'

    data.forEach(item => {
      options += `<option value="${item}">ЖК ${item}</option>`
    })

    return options
  }

  _room(data = []) {
    if (!Array.isArray(data)) return ''

    let options = ''

    data.forEach((item, key) => {
      options += `
        <li class="main-filter__checkbox-item">
          <input id="room_${key}" class="sr-only" type="checkbox" name="rooms[]" value="${item}">
          <label for="room_${key}" class="main-filter__checkbox">${item}</label>
        </li>
      `
    })

    return options
  }

  _area({ squareMin, squareMax }, title = 'от') {
    const placeholder = title === 'от' ? squareMin : squareMax

    return `
      <label class="main-filter__input-wrap">
        <span class="main-filter__input-title">${title}</span>
        <input class="main-filter__input" type="number" name="pricemin" min="${squareMin}" max="${squareMax}" placeholder="${placeholder}">
        <span class="main-filter__input-title main-filter__input-title--accent">м²</span>
      </label>
    `
  }

  _price({ priceMin, priceMax }, title = 'от') {
    const placeholder = title === 'от' ? priceMin : priceMax

    return `
      <label class="main-filter__input-wrap">
        <span class="main-filter__input-title">${title}</span>
        <input class="main-filter__input main-filter__input--large" type="number" name="pricemin" min="${priceMin}" max="${priceMax}" placeholder="${placeholder}">
        <span class="main-filter__input-title main-filter__input-title--accent">₸</span>
      </label>
    `
  }

  _submit(num, callback) {
    return callback(num)
  }

  _initListeners() {}
}
