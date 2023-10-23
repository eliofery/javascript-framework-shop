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
