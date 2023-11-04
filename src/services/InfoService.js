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
   * Получение общей информации
   *
   * @returns {*}
   */
  loadInfo() {
    return apiClient.get('/itemsinfo')
  },
}
