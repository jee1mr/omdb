// Imports
import React from 'react';
import styled from 'styled-components';

// UI
import { Skeleton, Row } from 'antd';

// Styling
const MovieDetailSkeletonUI = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  .ant-skeleton-input {
    width: 250px;
    margin-top: 10px;
  }
  .ant-skeleton-image {
    width: 250px;
    height: 200px;
    margin-top: 10px;
  }
`;

const MovieDetailSkeleton: React.FC = () => {
  return (
    <Row justify='center'>
      <MovieDetailSkeletonUI>
        <Skeleton.Image />
        <Skeleton.Input active={true} size='large' />
        <Skeleton.Input active={true} size='large' />
        <Skeleton.Input active={true} size='large' />
      </MovieDetailSkeletonUI>
    </Row>
  );
};

export default MovieDetailSkeleton;
