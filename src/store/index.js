import Store from '@/core/Store' // хранилище типа Redux
import { filterReducer, filterState } from '@/reducers/filterReducer' // reducer для фильтра товаров
import { sortReducer, sortState } from '@/reducers/sortReducer' // reducer для сортировки товаров
import { bidsReducer, bidsState } from '@/reducers/bidsReducer' // reducer для заявок
import { favouritesReducer, favouritesState } from '@/reducers/favouritesReducer' // reducer для избранного

// Объединяем все reducer
const reducers = [filterReducer, sortReducer, bidsReducer, favouritesReducer]

// Объединяем все состояния
const initState = {
  ...filterState,
  ...sortState,
  ...bidsState,
  ...favouritesState,
}

// Регистрация хранилища состояний
const store = new Store(reducers, initState)
const storeKey = Symbol.for('storeKey')

// Не обязательно использовать globalThis можно просто вернуть store
// globalThis в дальнейшем может пригодиться для отладки
globalThis[storeKey] = store

export default globalThis[storeKey]
