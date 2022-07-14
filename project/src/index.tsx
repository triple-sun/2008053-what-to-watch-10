import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { MovieGenreList} from './const/const';
import mockMovies from './mocks/movies';
import mockMoviePromo from './mocks/promo';
import TMainPageProps from './types/main-page-props';
import { getRandomInteger } from './utils/utils';

const randomMovie = mockMovies[getRandomInteger(0, mockMovies.length - 1)];

const MainPageProps: TMainPageProps = {
  promo: mockMoviePromo,
  movies: mockMovies,
  genres: MovieGenreList,
  myMovies: mockMovies,
  randomMovie: randomMovie,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App {...MainPageProps}/>
  </React.StrictMode>,
);
