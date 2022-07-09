import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import Movie from './types/movie-data';

const MOVIE_CARD_COUNT = 19;

const MovieMockData: Movie = {
  title: 'Fantastic Beasts: The Crimes of Grindelwald',
  genre: 'Fantasy',
  year: 2018,
};

const MoviePromoData: Movie = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 2014,
};

const MovieGenres = [
  'Comedies',
  'Crime',
  'Documentary',
  'Dramas',
  'Horror',
  'Kids & Family',
  'Romance',
  'Sci-Fi',
  'Thrillers',
] as const;

const mockMoviesList = Array(MOVIE_CARD_COUNT).fill(MovieMockData);

const MainPagePropsData = {
  PROMO: MoviePromoData,
  MOVIES: mockMoviesList,
  GENRES: MovieGenres,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      promo = {MainPagePropsData.PROMO}
      movies = {MainPagePropsData.MOVIES}
      genres = {MainPagePropsData.GENRES}
    />
  </React.StrictMode>,
);
