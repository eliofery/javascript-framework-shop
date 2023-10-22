import Response from '@/core/Response'

const apiClient = Response.create({
  baseUrl: `${process.env.API_URL}`,
  credentials: 'omit',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
})

export default {
  loadInfo() {
    return apiClient.get('/itemsinfo')
  },
}
