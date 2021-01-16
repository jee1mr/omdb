// Imports
import React from 'react';
import styled from 'styled-components';

// UI
import { Layout } from 'antd';

// App Imports
import SearchBar from 'modules/Movies/Search/index';
import MovieList from 'modules/Movies/List';

const { Header, Content } = Layout;

// UI
const LayoutUI = styled(Layout)`
  min-height: 100vh;
`;

const HeaderUI = styled(Header)``;

const ContentUI = styled(Content)`
  padding: 50px;
`;

// Component
const HomePage = () => {
  return (
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
  );
};

export default HomePage;
