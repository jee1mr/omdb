// Imports
import React from 'react';
import styled from 'styled-components';

// UI
import { Skeleton, Row } from 'antd';

// Styling
const HomePageSkeletonUI = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  .ant-skeleton-input {
    width: 250px;
  }
  .ant-skeleton-image {
    width: 250px;
    height: 200px;
    margin-top: 10px;
  }
`;

const HomePageSkeleton: React.FC<{ items: number }> = ({ items }) => {
  return (
    <Row justify='center'>
      {Array.from(Array(items).keys()).map((_, index) => (
        <HomePageSkeletonUI key={index}>
          <Skeleton.Input active={true} size='large' />
          <Skeleton.Image />
        </HomePageSkeletonUI>
      ))}
    </Row>
  );
};

export default HomePageSkeleton;
