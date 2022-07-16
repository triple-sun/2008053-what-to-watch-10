import GenreListComponent from '../../components/genres/genre-list/genre-list';
import MoviePromoComponent from '../../components/movies/movie-promo/movie-promo';
import MovieCardsListComponent from '../../components/movies/movie-list/movie-list';
import PageFooterElement from '../../components/common/page-footer/page-footer';
import { MainProps } from '../../types/props';
import { Fragment } from 'react';
import ShowMoreButton from '../../components/show-more/show-more';

const MainPage = ({promo, movies, genres, myMovies}: MainProps) => (
  <Fragment>
    <MoviePromoComponent promo={promo} myMovies={myMovies} />
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <GenreListComponent genres={genres} />
        <MovieCardsListComponent movies={movies} />
        <ShowMoreButton />
      </section>
      <PageFooterElement />
    </div>
  </Fragment>
);

export default MainPage;
