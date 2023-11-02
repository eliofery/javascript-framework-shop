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

  loadProductById(ids) {
    if (ids.length < 1) {
      return []
    }

    return apiClient.get(`/items?ids=${ids.join(',')}`)
  },

  loadFilterProducts(query) {
    return apiClient.get(query)
  },
}
