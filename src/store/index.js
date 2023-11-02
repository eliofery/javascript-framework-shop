import Store from '@/core/Store'
import { filterReducer, filterState } from '@/reducers/filterReducer'
import { sortReducer, sortState } from '@/reducers/sortReducer'
import { bidsReducer, bidsState } from '@/reducers/bidsReducer'

const reducers = [filterReducer, sortReducer, bidsReducer]

const initState = { ...filterState, ...sortState, ...bidsState }

const store = new Store(reducers, initState)
const storeKey = Symbol.for('storeKey')

globalThis[storeKey] = store

export default globalThis[storeKey]
