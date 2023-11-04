import Response from '@/core/Response' // подобие axios

const apiClient = Response.create({
  baseUrl: process.env.API_URL, // смотреть файл development.env или production.env
  credentials: 'omit',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
})

export default {
  /**
   * Получение всех продуктов
   *
   * @returns {*}
   */
  loadAllProducts() {
    return apiClient.get('/items')
  },

  /**
   * Получение продукта по id
   *
   * @param id
   * @returns {*}
   */
  loadProduct(id) {
    return apiClient.get(`/items/${id}`)
  },

  /**
   * Получение продуктов по id
   *
   * @param ids
   * @returns {*|*[]}
   */
  loadProductById(ids) {
    if (ids.length < 1) {
      return []
    }

    return apiClient.get(`/items?ids=${ids.join(',')}`)
  },

  /**
   * Получение продуктов по фильтру
   *
   * @param query
   * @returns {*}
   */
  loadFilterProducts(query) {
    return apiClient.get(query)
  },
}
