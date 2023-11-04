import Response from '@/core/Response' // подобие axios

// Подготовительные POST запросы
const apiClientPost = Response.create({
  baseUrl: process.env.API_URL, // смотреть файл development.env или production.env
  credentials: 'omit',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
})

// Подготовительные GET запросы
const apiClientGet = Response.create({
  baseUrl: process.env.API_URL, // смотреть файл development.env или production.env
  credentials: 'omit',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
})

export default {
  /**
   * Добавление заявки
   *
   * @param data
   * @returns {*}
   */
  addBid(data) {
    return apiClientPost.post('/bidnew', data)
  },

  /**
   * Получение заявок
   *
   * @returns {*}
   */
  loadBids() {
    return apiClientGet.get('/bids')
  },
}
