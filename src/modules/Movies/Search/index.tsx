// Imports
import React from 'react';
import styled from 'styled-components';

// App Imports
import { Input } from 'antd';

const { Search } = Input;

// UI
const SearchUI = styled(Search)`
  margin-top: 10px;
`;

// Component
const SearchBar = () => {
  // On Search
  const onSearch = (value: string) => console.log(value);

  return (
    <SearchUI
      placeholder='Search for your favourite movies...'
      allowClear
      enterButton='Search'
      size='large'
      onSearch={onSearch}
    />
  );
};

export default SearchBar;
