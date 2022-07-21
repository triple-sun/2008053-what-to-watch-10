import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { MovieGenreList} from './const/const';
import mockMovies from './mocks/movies';
import mockMoviePromo from './mocks/promo';
import { getRandomInteger } from './utils/utils';

const randomMovie = mockMovies[getRandomInteger(0, mockMovies.length - 1)];

const MainPageProps = {
  promo: mockMoviePromo,
  movies: mockMovies,
  genres: MovieGenreList,
  myMovies: mockMovies.filter((movie) => movie.isFavorite),
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
