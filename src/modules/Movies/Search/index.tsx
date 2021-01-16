// Imports
import React, { useContext } from 'react'
import styled from 'styled-components'
import { useQueryClient } from 'react-query'

// UI
import { Input } from 'antd'

// App Imports
import { MovieContext } from 'pages/Home'

const { Search } = Input

// UI
const SearchUI = styled(Search)`
  margin-top: 10px;
`

// Component
const SearchBar = () => {
  // State
  const { dispatch } = useContext(MovieContext)
  const queryClient = useQueryClient()

  // On Search
  const onSearch = (value: string) => {
    queryClient.clear() // clear cache
    dispatch({
      type: 'SEARCH',
      payload: value,
    })
  }

  return (
    <SearchUI placeholder="Search for your favourite movies..." enterButton="Search" size="large" onSearch={onSearch} />
  )
}

export default SearchBar
