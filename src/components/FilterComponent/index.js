import BaseComponent from '@/core/BaseComponent'
import InfoService from '@/services/InfoService'
import ProductService from '@/services/ProductService'
import store from '@/store'
import { submitFilter, resetFilter } from '@/reducers/filterReducer'
import QueryBuilder from '@/core/QueryBuilder'
import { declOfNum } from '@/utils/string'
import { debounce } from '@/utils/form'

import '@/components/FilterComponent/main-filter.scss'

const { loadInfo } = InfoService
const { loadFilterProducts } = ProductService

export default class FilterComponent extends BaseComponent {
  _data = {}

  _query = {}

  constructor() {
    super()

    this._init()
  }

  async _afterInit() {
    await this._loadData()
    await this._updateData()
  }

  async _loadData() {
    this._query = new QueryBuilder('items')
    this._data.info = await loadInfo()
    this._data.products = store.getState('products')
  }

  async _updateData() {
    const { info, products } = this._data

    const {
      complexNames,
      roomValues,
      priceMin,
      priceMax,
      squareMin,
      squareMax,
    } = info

    this.update({
      place: this._place(complexNames),
      room: this._room(roomValues),
      sqMin: this._area({ squareMin, squareMax }, 'sqmin'),
      sqMax: this._area({ squareMin, squareMax }, 'sqmax', 'до'),
      priceMin: this._price({ priceMin, priceMax }, 'pricemin'),
      priceMax: this._price({ priceMin, priceMax }, 'pricemax', 'до'),
      submit: this._submit(products.length),
    })
  }

  get _template() {
    return `
      <section class="main-filter">
        <div class="container">
          <h2 class="main-filter__title title">Выбор квартир:</h2>

          <form class="main-filter__form" method="get" data-el="form">
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
              <button class="main-filter__submit" type="submit" data-el="submit">Показать все объекты</button>
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

    data.forEach(item => {
      options += `
        <li class="main-filter__checkbox-item">
          <input id="room_${item}" class="sr-only" type="checkbox" name="rooms[]" value="${item}">
          <label for="room_${item}" class="main-filter__checkbox">${item}</label>
        </li>
      `
    })

    return options
  }

  _area({ squareMin, squareMax }, name, title = 'от') {
    const placeholder = title === 'от' ? squareMin : squareMax

    return `
      <label class="main-filter__input-wrap">
        <span class="main-filter__input-title">${title}</span>
        <input class="main-filter__input" type="number" name="${name}" min="${squareMin}" max="${squareMax}" placeholder="${placeholder}">
        <span class="main-filter__input-title main-filter__input-title--accent">м²</span>
      </label>
    `
  }

  _price({ priceMin, priceMax }, name, title = 'от') {
    const placeholder = title === 'от' ? priceMin : priceMax

    return `
      <label class="main-filter__input-wrap">
        <span class="main-filter__input-title">${title}</span>
        <input class="main-filter__input main-filter__input--large" type="number" name="${name}" min="${priceMin}" max="${priceMax}" placeholder="${placeholder}">
        <span class="main-filter__input-title main-filter__input-title--accent">₸</span>
      </label>
    `
  }

  _submit(num, callback) {
    this.elements.submit.disabled = false

    if (num < 1) {
      this.elements.submit.disabled = true

      return 'Нет таких объектов'
    }

    if (callback) {
      return callback(num)
    }

    return `Показать ${num} ${declOfNum(num, [
      'объект',
      'объекта',
      'объектов',
    ])}`
  }

  _initListeners() {
    const { form, place, room, sqMin, sqMax, priceMin, priceMax } =
      this.elements

    form.addEventListener(
      'change',
      debounce(async evt => {
        evt.preventDefault()

        this._query.addComplex(place)
        this._query.addRoom(room)
        this._query.addSquare(sqMin, sqMax)
        this._query.addPrice(priceMin, priceMax)

        this._data.products = await loadFilterProducts(this._query)

        this.update({
          submit: this._submit(this._data.products.length),
        })
      }),
      { signal: this._abortController.signal },
    )

    form.addEventListener(
      'submit',
      async evt => {
        evt.preventDefault()

        store.dispatch(submitFilter(this._data.products))
      },
      { signal: this._abortController.signal },
    )

    form.addEventListener(
      'reset',
      async () => {
        store.dispatch(resetFilter())

        await this._afterInit()
      },
      {
        signal: this._abortController.signal,
      },
    )
  }
}
