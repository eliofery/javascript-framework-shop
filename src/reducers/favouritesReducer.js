export const TOGGLE_FAVOURITE = 'TOGGLE_FAVOURITE'

export const addFavourite = favourite => ({
  type: TOGGLE_FAVOURITE,
  favourite,
})

export const favouritesState = {
  favourites: JSON.parse(localStorage.getItem('favourites')) ?? [],
}

export const favouritesReducer = (previousState, action) => {
  switch (action.type) {
    case TOGGLE_FAVOURITE:
      if (previousState.favourites.includes(action.favourite)) {
        const favourites = previousState.favourites.filter(favourite => favourite !== action.favourite)

        localStorage.setItem('favourites', JSON.stringify(favourites))

        return {
          ...previousState,
          favourites,
        }
      }

      previousState.favourites.push(action.favourite)

      localStorage.setItem('favourites', JSON.stringify(previousState.favourites))

      return {
        ...previousState,
      }

    default:
      return null
  }
}

export default favouritesReducer
