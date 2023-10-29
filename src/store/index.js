import Store from '@/core/Store'
import { filterReducer, filterState } from '@/reducers/filterReducer'
import { sortReducer, sortState } from '@/reducers/sortReducer'

const reducers = [filterReducer, sortReducer]

const initState = { ...filterState, ...sortState }

const store = new Store(reducers, initState)
const storeKey = Symbol.for('storeKey')

globalThis[storeKey] = store

export default globalThis[storeKey]
