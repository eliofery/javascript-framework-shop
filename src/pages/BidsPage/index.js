import BasePage from '@/core/BasePage'
import { convertKeysToCamelCase } from '@/utils/string'
import BidService from '@/services/BidService'
import PaginationComponent from '@/components/PaginationComponent'
import store from '@/store'

import '@/pages/BidsPage/bids-page.scss'
import { REFRESH_BIDS } from '@/reducers/bidsReducer'

const { loadBids } = BidService

export default class BidsPage extends BasePage {
  _router = {}

  constructor({ router }) {
    super()

    document.title = `Страница заявок - ${this._title}`

    this._router = router

    this._init()
  }

  async _afterInit() {
    await this._loadData()
    await this._updateData()
  }

  async _loadData() {
    store.subscribe(REFRESH_BIDS, state => {
      this.update({
        content: this._list(state.bids),
      })
    })
  }

  async _updateData() {
    this._reloadComponents({
      pagination: new PaginationComponent({
        router: this._router,
        data: await loadBids(),
        countBids: store.getState('countBids'),
      }),
    })
  }

  get _template() {
    return `
      <div class="bids-page">
        <div class="container">
          <h1 class="bids-page__title" data-el="title">Заявки</h1>
          <p class="bids-page__desc"><span style="color: red;">Внимание!!!</span> Данные заявок берутся из открытого стороннего api. Возможно присутствие нецензурной лексики. <br> Для добавления новой заявки перейдите в любой товар и заполните форму, нажав на кнопку <b>"Забронировать"</b>.</p>

          <ul class="bids-page__list">
            <li class="bids-page__item bids-page__item--header">
              <p class="bids-page__name">Имя</p>
              <p class="bids-page__phone">Телефон</p>
            </li>
          </ul>
          <ul class="bids-page__list" data-el="content"></ul>

          <div class="bids-page__pagination">
            <div data-el="pagination"></div>
          </div>
        </div>
      </div>
    `
  }

  _list(data = {}) {
    return data
      .map(item => {
        const { name, phone } = convertKeysToCamelCase(item)

        return `
        <li class="bids-page__item">
          <p class="bids-page__name">${name}</p>
          <p class="bids-page__phone">${phone}</p>
        </li>
      `
      })
      .join('')
  }

  _initListeners() {}
}
