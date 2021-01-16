// Imports
import React, { createContext, Dispatch, useReducer } from 'react'
import styled from 'styled-components'

// UI
import { Layout } from 'antd'

// App Imports
import SearchBar from 'modules/Movies/Search/index'
import MovieList from 'modules/Movies/List'
import { MovieStateType, MovieActionType } from 'modules/Movies/types'
import { movieReducer } from 'modules/Movies/reducers'

const { Header, Content } = Layout

// Initial State
const initialState: MovieStateType = {
  searchText: '',
  selectedMovie: '',
  showMovieDetail: false,
}

// Context
export const MovieContext = createContext<{
  state: MovieStateType
  dispatch: Dispatch<MovieActionType>
}>({ state: initialState, dispatch: () => null })

// UI
const LayoutUI = styled(Layout)`
  min-height: 100vh;
`

const HeaderUI = styled(Header)``

const ContentUI = styled(Content)`
  padding: 50px;
`

// Component
const HomePage = () => {
  const [state, dispatch] = useReducer(movieReducer, initialState)

  return (
    <MovieContext.Provider value={{ state: state, dispatch: dispatch }}>
      <LayoutUI>
        {/* Search */}
        <HeaderUI>
          <SearchBar />
        </HeaderUI>
        {/* Movie Listing */}
        <ContentUI>
          <MovieList />
        </ContentUI>
      </LayoutUI>
    </MovieContext.Provider>
  )
}

export default HomePage
