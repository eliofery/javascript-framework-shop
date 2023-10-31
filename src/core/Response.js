export default class Response {
  static _initialization = false

  _options = {}

  _baseUrl = ''

  constructor() {
    if (!Response._initialization) {
      throw new TypeError('Нельзя напрямую создать экземпляр данного класса')
    }
  }

  static create(options = {}) {
    Response._initialization = true
    const response = new Response()
    Response._initialization = false

    response._baseUrl = options.baseUrl ?? ''
    delete options.baseUrl
    response._options = options

    return response
  }

  _response = async (url, options = {}) => {
    try {
      const response = await fetch(url, options)

      return await response.json()
    } catch (e) {
      // eslint-disable-next-line
      if (process.env.NODE_ENV === 'development') console.log(e.message)
      throw e
    }
  }

  get(url = '') {
    url = new URL(url, this._baseUrl)

    return this._response(url.href, this._options)
  }

  post(url = '', data = {}) {
    url = new URL(url, this._baseUrl)

    this._options = {
      ...this._options,
      method: 'post',
      body: data,
    }

    return this._response(url.href, this._options)
  }
}
