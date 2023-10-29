export const SORT_PRODUCT = 'SORT_PRODUCT'

export const sortProduct = product => ({
  type: SORT_PRODUCT,
  product,
})

export const sortState = {
  directions: {
    complex: 'asc',
    rooms: 'asc',
    square: 'asc',
    priceSqM: 'asc',
    priceTotal: 'asc',
  },
}

export const sortReducer = (previousState, action) => {
  switch (action.type) {
    case SORT_PRODUCT:
      previousState.products = action.product

      return {
        ...previousState,
      }

    default:
      return null
  }
}

export default sortReducer
