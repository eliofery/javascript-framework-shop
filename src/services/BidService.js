import Response from '@/core/Response'

const apiClientPost = Response.create({
  baseUrl: process.env.API_URL,
  credentials: 'omit',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
})

const apiClientGet = Response.create({
  baseUrl: process.env.API_URL,
  credentials: 'omit',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
})

export default {
  addBid(data) {
    return apiClientPost.post('/bidnew', data)
  },

  loadBids() {
    return apiClientGet.get('/bids')
  },
}
