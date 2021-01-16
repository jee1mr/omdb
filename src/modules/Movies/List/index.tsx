// Imports
import React from 'react';

// UI
import { Empty, Pagination, Row } from 'antd';

// App Imports
import { MovieType } from 'modules/Movies/Item/types';
import MovieItem from '../Item';

// Movie List Interface
interface MovieList {
  Search: MovieType[];
  totalResults: string;
  Response: string;
}

// Component
const MovieList = () => {
  // State
  const movieList: MovieList = {
    Search: [
      {
        Title: 'Gangs of New York',
        Year: '2002',
        imdbID: 'tt0217505',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BNDg3MmI1ZDYtMDZjYi00ZWRlLTk4NzEtZjY4Y2U0NjE5YmRiXkEyXkFqcGdeQXVyNzAxMjE1NDg@._V1_SX300.jpg',
      },
      {
        Title: 'Gangs of Wasseypur',
        Year: '2012',
        imdbID: 'tt1954470',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BMTc5NjY4MjUwNF5BMl5BanBnXkFtZTgwODM3NzM5MzE@._V1_SX300.jpg',
      },
      {
        Title: 'Gangs of London',
        Year: '2020–',
        imdbID: 'tt7661390',
        Type: 'series',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BOGJlZTE0MTQtZDdmMS00YWViLThlMDktYzk1N2RhMjY0NGEyXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg',
      },
      {
        Title: 'Ross Kemp on Gangs',
        Year: '2006–',
        imdbID: 'tt0986110',
        Type: 'series',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BNDgzZWI4MWEtZWViZC00NWQ4LThiOTItMDU5NjMxMWVmMWFmXkEyXkFqcGdeQXVyNTkyMTcwODg@._V1_SX300.jpg',
      },
      {
        Title: 'Gangs',
        Year: '2009',
        imdbID: 'tt1294712',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BZTZhOGMxZTEtMWMxYi00ZTRlLTllYzQtN2FlYzNkODI4NjRjXkEyXkFqcGdeQXVyNDkzNTM2ODg@._V1_SX300.jpg',
      },
      {
        Title: 'Gangs of Tooting Broadway',
        Year: '2013',
        imdbID: 'tt2064984',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BMTM2NjA2NjEyNl5BMl5BanBnXkFtZTcwOTU3MjUzOA@@._V1_SX300.jpg',
      },
      {
        Title: 'Gangs from Rosario',
        Year: '2001',
        imdbID: 'tt0282129',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BMjEyMjkxNjM4Nl5BMl5BanBnXkFtZTcwMzE4ODQ3Mg@@._V1_SX300.jpg',
      },
      {
        Title: 'The Gangs, the Oscars, and the Walking Dead',
        Year: '2019',
        imdbID: 'tt11070468',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BMDc3ZTFiNGMtNGEzMy00NGEyLWJiODItOTgzODg2NjE4MzA3XkEyXkFqcGdeQXVyMjg0MTI5NzQ@._V1_SX300.jpg',
      },
      {
        Title: 'Gangs of New York',
        Year: '1938',
        imdbID: 'tt0030169',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BZTk5N2IyNWUtOTQ5ZS00ZDY2LTkzMzEtMTg3YTQwZWJlZjdkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNzAzOTA3ODM@._V1_SX300.jpg',
      },
      {
        Title: 'Gangs Of Madras',
        Year: '2019',
        imdbID: 'tt8983238',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BZjZlZDEwMzItMjE0OS00Y2JjLWI1ZGMtZTE0MTMwNWU2MDQ4XkEyXkFqcGdeQXVyMjUxMTY3ODM@._V1_SX300.jpg',
      },
    ],
    totalResults: '74',
    Response: 'True',
  };

  // Change Page
  const changePage = () => {};

  return (
    <>
      <Row justify='center'>
        {movieList?.Search.map(({ Title: title, Poster: poster, imdbID }) => (
          <MovieItem
            key={imdbID}
            title={title}
            poster={poster}
            imdbID={imdbID}
          />
        ))}
      </Row>
      <Row justify='center'>
        <Pagination defaultCurrent={6} total={500} onChange={changePage} />
      </Row>
      {/* <Empty></Empty> */}
    </>
  );
};

export default MovieList;
