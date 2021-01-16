// Imports
import { MovieActionType, MovieStateType } from 'modules/Movies/types'

export const movieReducer = (state: MovieStateType, action: MovieActionType) => {
  switch (action.type) {
    case 'SEARCH':
      return {
        ...state,
        searchText: action.payload,
        currentPage: 1,
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
    case 'SET_PAGE':
      return {
        ...state,
        currentPage: action.payload,
      }
    default: {
      return state
    }
  }
}
