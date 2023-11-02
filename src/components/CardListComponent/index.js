import BaseComponent from '@/core/BaseComponent'
import CardComponent from '@/components/CardComponent'

import '@/components/CardListComponent/card-list.scss'

export default class CardListComponent extends BaseComponent {
  _products = []

  constructor(products = []) {
    super()

    this._products = products

    this._init()
  }

  async _afterInit() {
    await this._loadData()
    await this._updateData()
  }

  async _loadData() {
    //
  }

  async _updateData() {
    //
  }

  _initComponent() {
    const wrapper = document.createElement('div')

    const listComponent = this._list(this._products)

    wrapper.append(listComponent)

    this._component = wrapper.firstElementChild
  }

  _list(data = []) {
    const list = document.createElement('ul')
    list.classList.add('card-list')

    if (data.length < 1) {
      const li = document.createElement('li')
      li.classList.add('card-list__item')
      li.innerHTML = 'Товаров нет.'
      list.append(li)

      return list
    }

    const items = data.map(item => {
      const li = document.createElement('li')
      const card = new CardComponent(item)

      li.classList.add('card-list__item')

      li.append(card.component)

      return li
    })

    list.append(...items)

    return list
  }

  _initListeners() {}
}
