import Response from '@/core/Response'

const apiClient = Response.create({
  baseUrl: process.env.API_URL,
  credentials: 'omit',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
})

export default {
  addBid(data) {
    return apiClient.post('/bidnew', data)
  },
}
