import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { MovieGenreList} from './const/const';
import { mockMoviePromoData, mockMoviesList } from './const/mock';

const MainPageProps = {
  PROMO: mockMoviePromoData,
  MOVIES: mockMoviesList,
  GENRES: MovieGenreList,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      promo = {MainPageProps.PROMO}
      movies = {MainPageProps.MOVIES}
      genres = {MainPageProps.GENRES}
    />
  </React.StrictMode>,
);
