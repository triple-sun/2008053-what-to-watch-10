import GenreListComponent from '../../components/genre-list/genre-list';
import MoviePromoComponent from '../../components/movie/movie-promo/movie-promo';
import MovieCardsListComponent from '../../components/movie-list/movie-list';
import PageFooterElement from '../../components/universal/page-footer/page-footer';
import MainProps from '../../types/main-props';
import { Fragment } from 'react';

const MainPage = ({promo, movies, genres, myMovies}: MainProps) => (
  <Fragment>
    <MoviePromoComponent promo={promo} myMovies={myMovies} />

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <GenreListComponent genres={genres} />

        <MovieCardsListComponent movies={movies} />

        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div>
      </section>

      <PageFooterElement />
    </div>
  </Fragment>
);

export default MainPage;
