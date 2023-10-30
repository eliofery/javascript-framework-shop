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

export const compare = (a, b) => a - b

export const compareString = (a, b) => a.localeCompare(b)
