// Imports
import React, { useContext, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';

// UI
import { Empty, Pagination, Row } from 'antd';

// App Imports
import MovieItem from 'modules/Movies/Item';
import { listMoviesHandler } from 'modules/Movies/api';
import { MovieContext } from 'pages/Home';
import { MovieListResponseType } from 'modules/Movies/types';
import HomePageSkeleton from 'modules/common/Skeleton/HomePage';
import MovieDetail from 'modules/Movies/Detail';

// Component
const MovieList = () => {
  // State
  const { state } = useContext(MovieContext);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const queryClient = useQueryClient();
  let total = 0;

  // Change Page
  const changePage = (page: number) => {
    queryClient.clear();
    setCurrentPage(page);
  };

  // API Call
  const { isLoading, error, data } = useQuery<MovieListResponseType>(
    'movieList',
    () => listMoviesHandler(state.searchText, currentPage),
    {
      retry: 1,
    }
  );

  // Loading
  if (isLoading) {
    return <HomePageSkeleton items={10} />;
  }

  // Error
  if (error || !data || data?.data?.Response === 'False')
    return <Empty></Empty>;

  // Set total
  if (data.data?.totalResults) {
    try {
      total = parseInt(data.data.totalResults);
    } catch (error) {}
  }

  // Result
  return (
    <>
      <Row justify='center'>
        {data.data?.Search?.map(({ Title: title, Poster: poster, imdbID }) => (
          <MovieItem
            key={imdbID}
            title={title}
            poster={poster}
            imdbID={imdbID}
          />
        ))}
      </Row>
      {/* Pagination */}
      <Row justify='center'>
        <Pagination
          defaultCurrent={1}
          current={currentPage}
          total={total}
          onChange={changePage}
          hideOnSinglePage
        />
      </Row>
      <MovieDetail />
    </>
  );
};

export default MovieList;
