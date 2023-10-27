import BaseComponent from '@/core/BaseComponent'
import CardComponent from '@/components/CardComponent'
import store from '@/store'

import '@/components/CardListComponent/card-list.scss'

export default class CardListComponent extends BaseComponent {
  constructor() {
    super()

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

    const products = store.getState('products')

    const listComponent = this._list(products)

    wrapper.append(listComponent)

    this._component = wrapper.firstElementChild
  }

  _list(data = []) {
    const list = document.createElement('ul')
    list.classList.add('card-list')

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
