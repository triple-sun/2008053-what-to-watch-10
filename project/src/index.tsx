import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { MovieGenreList} from './const/const';
import { mockMoviePromoData, mockMoviesList } from './const/mock';
import TMainPageProps from './types/main-page-props';

const MainPageProps: TMainPageProps = {
  promo: mockMoviePromoData,
  movies: mockMoviesList,
  genres: MovieGenreList,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App {...MainPageProps}/>
  </React.StrictMode>,
);
