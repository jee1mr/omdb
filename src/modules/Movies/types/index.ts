// Movie Type
export interface MovieType {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

// Movie List
export interface MovieListType {
  Search?: MovieType[]
  totalResults?: string
  Response: string
  Error?: string
}

// Movie List Response Type
export interface MovieListResponseType {
  data: MovieListType
}

// Movie Detail
export interface MovieDetailType {
  Title: string
  Year: string
  Rated: string
  Director: string
  imdbRating: string
  Poster: string
  Language: string
  Response: string
}

// Movie List Response Type
export interface MovieDetailResponseType {
  data: MovieDetailType
}

// Movie State
export interface MovieStateType {
  searchText: string
  selectedMovie: string
  showMovieDetail: boolean
  currentPage: number
}

// Movie Action
export type MovieActionType =
  | { type: 'SEARCH'; payload: string }
  | { type: 'SELECT_MOVIE'; payload: string }
  | { type: 'HIDE_MOVIE_DETAIL' }
  | { type: 'SET_PAGE'; payload: number }
