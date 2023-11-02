import BaseComponent from '@/core/BaseComponent'
import Link from '@/core/Link'
import store from '@/store'
import { refreshBids } from '@/reducers/bidsReducer'

import '@/components/PaginationComponent/main-pagination.scss'

export default class PaginationComponent extends BaseComponent {
  _router = {}

  _page = 1

  _count = 5

  _data = []

  constructor({ router = {}, data = [], countBids = 0 } = {}) {
    super()

    this._router = router
    this._data = data
    this._countBids = countBids

    this._init()
  }

  get page() {
    return this._page
  }

  async _afterInit() {
    await this._loadData()
    await this._updateData()
  }

  async _loadData() {
    this._page = this._getPage()
  }

  async _updateData() {
    store.dispatch(
      refreshBids(
        this._data.slice(
          this._page * this._count - this._count,
          this._page * this._count,
        ),
      ),
    )
  }

  _initComponent() {
    this._component = document.createElement('ul')
    this._component.classList.add('main-pagination')
    this._component.append(...this._list())
  }

  _getPage() {
    const match = window.location.search.match(/\?page=(\d+)/)
    return match ? match[1] : 1
  }

  _list() {
    const uri = this._router.getUri()
    const perPage = 10 // todo Math.floor(this._countBids / this._count)

    const items = []
    for (let i = 1; i <= perPage; i++) {
      const li = document.createElement('li')
      li.classList.add('main-pagination__item')

      let classActive = ''
      if (this._getPage() === String(i)) {
        classActive = 'main-pagination__link--active'
      }

      const link = new Link({
        url: `${uri}?page=${i}`,
        html: `${i}`,
        attributes: { class: `main-pagination__link ${classActive}` },
      }).component

      li.append(link)
      items.push(li)
    }

    return items
  }

  _initListeners() {}
}
