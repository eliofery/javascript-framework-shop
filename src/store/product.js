import Store from '@/core/Store'
import { productReducer } from '@/reducers/product'

const useProductsStore = Store.createStore(productReducer)

export default useProductsStore
