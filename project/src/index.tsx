import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { GenreList} from './const/const';
import mockMovies from './mocks/movies';
import mockMoviePromo from './mocks/promo';
import { store } from './store';
import { getRandomInteger } from './utils/utils';

const randomMovie = mockMovies[getRandomInteger(0, mockMovies.length - 1)];

const MainPageProps = {
  promo: mockMoviePromo,
  movies: mockMovies,
  genres: GenreList,
  myMovies: mockMovies.filter((movie) => movie.isFavorite),
  randomMovie: randomMovie,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App {...MainPageProps}/>
    </Provider>
  </React.StrictMode>,
);
