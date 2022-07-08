import MovieCardComponent from '../../components/movie-card/movie-card';
import MoviePromoComponent from '../../components/movie-promo/movie-promo';
import PageFooterElement from '../../components/page-footer/page-footer';
import { nanoid } from '@reduxjs/toolkit';
import { ListItemProps, MainPageProps } from '../../types/props';

const GenreElement = ({value: genre}: ListItemProps): JSX.Element => (
  <li className="catalog__genres-item catalog__genres-item--active">
    <a href={`#${genre}`} className="catalog__genres-link">{genre}</a>
  </li>
);

const MainPage = ({promo, movies, genres}: MainPageProps): JSX.Element => {
  const movieCardElements = movies.map((movie) => <MovieCardComponent key={nanoid()} value={movie} />);
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
