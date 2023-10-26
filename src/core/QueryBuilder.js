export default class QueryBuilder {
  _baseUrl = process.env.API_URL

  _url = {}

  constructor(url = '') {
    this._url = new URL(url, this._baseUrl)
  }

  toString() {
    return this._url.toString()
  }

  addComplex(complex) {
    if (complex.value !== 'all') {
      this._url.searchParams.set(complex.name, complex.value)
    } else {
      this._url.searchParams.delete(complex.name)
    }

    return this
  }

  addRoom(room) {
    const rooms = room.querySelectorAll('[name="rooms[]"]')

    this._toggleQueries(rooms)

    return this
  }

  addSquare(sqMin, sqMax) {
    sqMin = sqMin.querySelector('[name="sqmin"]')
    sqMax = sqMax.querySelector('[name="sqmax"]')

    this._toggleQuery(sqMin)
    this._toggleQuery(sqMax)

    return this
  }

  addPrice(priceMin, priceMax) {
    priceMin = priceMin.querySelector('[name="pricemin"]')
    priceMax = priceMax.querySelector('[name="pricemax"]')

    this._toggleQuery(priceMin)
    this._toggleQuery(priceMax)

    return this
  }

  _toggleQueries(elements) {
    const nameElement = elements[0].name.replace('[]', '')
    const checkedElements = Array.from(elements).filter(
      element => element.checked,
    )

    this._url.searchParams.delete(nameElement)

    if (checkedElements.length) {
      const values = checkedElements.map(element => element.value)

      this._url.searchParams.set(nameElement, values.join(','))
    }
  }

  _toggleQuery(element) {
    this._url.searchParams.delete(element.name)

    if (element.value !== '') {
      this._url.searchParams.set(element.name, element.value)
    }
  }
}
