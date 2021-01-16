// Imports
import React from 'react';
import styled from 'styled-components';

// UI
import { Card } from 'antd';

// Props
interface Props {
  title: string;
  poster: string;
  imdbID: string;
}

// UI
const ItemUI = styled(Card)`
  margin: 10px;
`;

// Component
const MovieItem: React.FC<Props> = ({ title, poster, imdbID }) => {
  return (
    <ItemUI
      style={{ width: '250px' }}
      cover={<img src={poster} alt={title} height={250} />}
      title={title}
      hoverable
    ></ItemUI>
  );
};

export default MovieItem;
