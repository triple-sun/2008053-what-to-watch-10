import GenresListElement from '../../components/genres/genres-list-element/genres-list-element';
import MovieCardPromo from '../../components/movie/movie-card-promo/movie-card-promo';
import MovieCardListComponent from '../../components/movie/movie-card-list/movie-card-list';
import PageFooter from '../../components/common/page-footer/page-footer-element';
import { AppProps } from '../../types/props';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import { MOVIE_CARD_MAIN_COUNT } from '../../const/const';

const MainPage = (mainProps: AppProps) => (
  <>
    <MovieCardPromo {...mainProps} />
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <GenresListElement {...mainProps}/>
        <MovieCardListComponent movies={mainProps.movies} count={MOVIE_CARD_MAIN_COUNT}/>
        <ShowMoreButton />
      </section>

      <PageFooter />
    </div>
  </>
);

export default MainPage;
