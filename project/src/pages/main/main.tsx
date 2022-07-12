import { nanoid } from '@reduxjs/toolkit';
import { Link } from 'react-router-dom';
import MovieCardComponent from '../../components/movie/movie-card/movie-card';
import MoviePromoComponent from '../../components/movie/movie-promo/movie-promo';
import PageFooterElement from '../../components/universal/page-footer/page-footer';
import TListElement from '../../types/list-element';
import TMainPageProps from '../../types/main-page-props';

const GenreElement = ({value: genre}: TListElement): JSX.Element => (
  <li className="catalog__genres-item catalog__genres-item--active">
    <Link to={`#${genre}`} className="catalog__genres-link">{genre}</Link>
  </li>
);

const MainPage = ({promo, movies, genres}: TMainPageProps): JSX.Element => {
  const movieCardElements = movies.map((movie) => <MovieCardComponent key={`${movie.id}-${nanoid()}`} value={movie} />);
  const genreElements = genres.map((genre) => <GenreElement key={genre} value={genre} />);

  return (
    <div>
      <MoviePromoComponent {...promo} />

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            {genreElements}
          </ul>

          <div className="catalog__films-list">
            {movieCardElements}
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <PageFooterElement />
      </div>
    </div>
  );
};

export default MainPage;
