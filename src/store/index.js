import Store from '@/core/Store'
import { filterReducer, filterState } from '@/reducers/filter'

const reducers = [filterReducer]

const initState = {
  ...filterState,
}

const store = new Store(reducers, initState)
const storeKey = Symbol.for('storeKey')

globalThis[storeKey] = store

export default globalThis[storeKey]
