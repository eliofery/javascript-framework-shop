export default class Store {
  _reducers = []

  _state = {}

  _listeners = {}

  constructor(reducers = [], initState = {}) {
    this._reducers = reducers
    this._state = initState
  }

  getState(name) {
    if (this._state[name]) {
      return this._state[name]
    }

    return this._state
  }

  _setState(newState) {
    this._state = newState
  }

  subscribe(name, callback) {
    if (!this._listeners[name]) {
      this._listeners[name] = []
    }

    this._listeners[name].push(callback)

    return () => {
      this._listeners = this._listeners[name].filter(
        listener => listener !== callback,
      )
    }
  }

  dispatch(action) {
    for (const reducer of this._reducers) {
      const previousState = this.getState()
      const newState = reducer(previousState, action)

      if (newState) {
        this._setState(newState)

        const listeners = this._listeners[action.type]

        if (listeners) {
          const currentState = this.getState()

          for (const listener of listeners) {
            listener(currentState)
          }
        }
      }
    }
  }
}
