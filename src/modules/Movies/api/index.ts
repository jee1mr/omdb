// Imports
import axios from 'axios'

// Movie List API
export const listMoviesHandler = async (searchText: string, page: number) => {
  return await axios.get('', {
    params: {
      s: searchText || '',
      page: page || 0,
    },
  })
}

// Get Movie API
export const getMovieHandler = async (imdbID: string) => {
  return await axios.get('', {
    params: {
      i: imdbID,
    },
  })
}
