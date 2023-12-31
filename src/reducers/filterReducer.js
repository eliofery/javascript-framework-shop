import ProductService from '@/services/ProductService'

const { loadAllProducts } = ProductService

export const SUBMIT_FILTER = 'SUBMIT_FILTER'

export const RESET_FILTER = 'RESET_FILTER'

export const SORT_FILTER = 'SORT_FILTER'

export const submitFilter = product => ({
  type: SUBMIT_FILTER,
  product,
})

export const resetFilter = () => ({
  type: RESET_FILTER,
})

export const sortFilter = product => ({
  type: SORT_FILTER,
  product,
})

export const filterState = {
  products: await loadAllProducts(),
}

export const filterReducer = (previousState, action) => {
  switch (action.type) {
    case SUBMIT_FILTER:
    case SORT_FILTER:
      previousState.products = action.product

      return {
        ...previousState,
      }

    case RESET_FILTER:
      return {
        ...previousState,
        ...filterState,
      }

    default:
      return null
  }
}

export default filterReducer
