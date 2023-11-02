import BidService from '@/services/BidService'

const { loadBids } = BidService

export const REFRESH_BIDS = 'REFRESH_BIDS'

export const refreshBids = bids => ({
  type: REFRESH_BIDS,
  bids,
})

const bids = await loadBids()
export const bidsState = {
  bids,
  countBids: bids.length,
}

export const bidsReducer = (previousState, action) => {
  switch (action.type) {
    case REFRESH_BIDS:
      previousState.bids = action.bids

      return {
        ...previousState,
      }

    default:
      return null
  }
}

export default bidsReducer
