// Imports
import { MovieActionType, MovieStateType } from 'modules/Movies/types'

export const movieReducer = (state: MovieStateType, action: MovieActionType) => {
  switch (action.type) {
    case 'SEARCH':
      return {
        ...state,
        searchText: action.payload,
      }
    case 'SELECT_MOVIE':
      return {
        ...state,
        selectedMovie: action.payload,
        showMovieDetail: true,
      }
    case 'HIDE_MOVIE_DETAIL':
      return {
        ...state,
        showMovieDetail: false,
      }
    default: {
      return state
    }
  }
}
