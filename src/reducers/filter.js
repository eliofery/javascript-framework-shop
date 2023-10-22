import ProductService from '@/services/ProductService'

const { loadProducts } = ProductService

export const ADD_FILTER = 'ADD_FILTER'
export const REMOVE_FILTER = 'REMOVE_FILTER'

export const addFilter = product => ({
  type: ADD_FILTER,
  info: 'Добавление продукта в корзину',
  product,
})

export const removeProduct = () => ({
  type: REMOVE_FILTER,
  info: 'Удаление продукта из корзины',
})

export const filterState = {
  products: await loadProducts(),
}

export const filterReducer = (previousState, action) => {
  switch (action.type) {
    case ADD_FILTER:
      previousState.products.push(action.product)

      return {
        ...previousState,
      }

    case REMOVE_FILTER:
      return {
        ...previousState,
        products: previousState.products.filter(
          product => product.id !== action.product.id,
        ),
      }

    default:
      return previousState
  }
}

export default filterReducer
