export default class App {
  #router = {}

  constructor(router) {
    this.#router = router
  }

  run(selector = '#app') {
    this.#router.root = selector

    this._render()
    window.addEventListener(this.#router.history, () => this._render())
  }

  _render() {
    this.#router.render()
  }
}
