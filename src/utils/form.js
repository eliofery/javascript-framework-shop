/**
 * Отложенный вызов функции
 *
 * @param callback
 * @param delay
 * @returns {(function(...[*]): void)|*}
 */
export const debounce = (callback, delay = 300) => {
  let timerId

  return (...args) => {
    if (timerId) {
      clearTimeout(timerId)
    }

    timerId = setTimeout(() => {
      callback.apply(this, args)
    }, delay)
  }
}

/**
 * Разница между двумя значениями
 *
 * Используется при сортировки.
 *
 * @param a
 * @param b
 * @returns {number}
 */
export const compare = (a, b) => a - b

/**
 * Разница между двумя строками
 *
 * Используется при сортировки.
 *
 * @param a
 * @param b
 * @returns {number}
 */
export const compareString = (a, b) => a.localeCompare(b)
