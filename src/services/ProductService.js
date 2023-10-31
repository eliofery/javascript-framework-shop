import Response from '@/core/Response'

const apiClient = Response.create({
  baseUrl: process.env.API_URL,
  credentials: 'omit',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
})

export default {
  loadAllProducts() {
    return apiClient.get('/items')
  },

  loadProduct(id) {
    return apiClient.get(`/items/${id}`)
  },

  loadFilterProducts(query) {
    return apiClient.get(query)
  },
}
