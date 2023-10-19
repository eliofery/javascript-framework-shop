import BaseComponent from '@/core/BaseComponent'
import '@/components/CardComponent/card.scss'

export default class CardComponent extends BaseComponent {
  constructor({ title = '', price = 0, description = '' } = {}) {
    super ()

    this.title = title
    this.price = price
    this.description = description

    this._init()
  }

  get _template() {
    return `
      <div>
        <h1 data-el="title">${this.title}</h1>
        <div data-el="description">${this.description}</div>
        <div data-el="price">Price: ${this.price}</div>

        <button type="button" data-el="btn1">Add</button>
        <button type="button" data-el="btn2">Remove</button>
      </div>
    `
  }

  _initListeners() {
    const { btn1 } = this._elements

    btn1.addEventListener('click', () => {
      console.log('btn1')
      this.destroy()
    })

    // document.addEventListener('click', () => {
    //   console.log('document')
    //   this.destroy()
    // }, {
    //   signal: this._abortController.signal,
    // })
  }
}
