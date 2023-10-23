import ProductService from '@/services/ProductService'

const { loadAllProducts } = ProductService

export const UPDATE_FILTER = 'UPDATE_FILTER'

export const updateFilter = product => ({
  type: UPDATE_FILTER,
  product,
})

export const filterState = {
  products: await loadAllProducts(),
}

export const filterReducer = (previousState, action) => {
  switch (action.type) {
    case UPDATE_FILTER:
      previousState.products = action.product

      return {
        ...previousState,
      }

    default:
      return previousState
  }
}

export default filterReducer
