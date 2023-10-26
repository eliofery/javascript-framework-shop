import Router from '@/core/Router/Router'
import BaseComponent from '@/core/BaseComponent'

export default class Link extends BaseComponent {
  static _links = []

  constructor({
    url = '',
    html = '',
    attributes = {},
    activeClass = 'active',
  } = {}) {
    super()
    this._router = Router.instance

    this._url = this._correctUrl(url)
    this._html = html
    this._attributes = attributes
    this._activeClass = activeClass

    this._init()
  }

  get router() {
    return this._router
  }

  get activeClass() {
    return this._activeClass
  }

  _correctUrl(url) {
    if (this._router.history === Router.createWebHashHistory()) {
      url = url.replace(/^\//, '/#/')
    }

    return url
  }

  _initComponent() {
    const link = document.createElement('a')

    if (this._url === this._router.getUri()) {
      link.classList.add(this._activeClass)
    }

    link.setAttribute('href', this._url)
    link.innerHTML = this._html

    Object.entries(this._attributes).forEach(([prop, value]) => {
      link.setAttribute(prop, `${value}`)
    })

    this._component = link
    Link._links.push({
      link,
      activeClass: this._activeClass,
    })
  }

  _initListeners() {
    this._component.addEventListener('click', async evt => {
      evt.preventDefault()

      const path = evt.currentTarget.getAttribute('href')

      window.history.pushState(null, null, path)

      this._toggleClass()
      await this._router.render()
    })

    window.addEventListener(this._router.history, () => this._toggleClass(), {
      signal: this._abortController.signal,
    })
  }

  _toggleClass() {
    Link._links.forEach(({ link, activeClass }) => {
      const linkUri = new URL(link.href).pathname

      if (linkUri === this._router.getUri()) {
        link.classList.add(activeClass)
      } else {
        link.classList.remove(activeClass)
      }
    })
  }
}
