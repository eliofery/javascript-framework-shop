export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'

export const addProduct = () => ({
  type: ADD_PRODUCT,
  info: 'Добавление продукта в корзину',
})

export const removeProduct = () => ({
  type: REMOVE_PRODUCT,
  info: 'Удаление продукта из корзины',
})

export const initialProductState = {
  numOfProducts: 0,
}

export const productReducer = (previousState = initialProductState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...previousState,
        numOfCakes: previousState.numOfProducts + 1,
      }

    case REMOVE_PRODUCT:
      return {
        ...previousState,
        numOfCakes: previousState.numOfProducts - 1,
      }

    default:
      return previousState
  }
}

export default productReducer
