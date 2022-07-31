import GenresList from '../../components/genres/genres-list/genres-list';
import MovieCardPromo from '../../components/movie/movie-card-promo/movie-card-promo';
import MovieCardsList from '../../components/movie/movie-cards-list/movie-cards-list';
import PageFooter from '../../components/common/page-footer/page-footer-element';
import { MOVIE_CARD_MAIN_COUNT } from '../../const/const';
import { getMovies } from '../../utils/selectors/selectors';
import useAppSelector from '../../hooks/use-app-selector/use-app-selector';

const MainPage = () => (
  <>
    <MovieCardPromo />
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <GenresList />
        <MovieCardsList movies={useAppSelector(getMovies)} countPerStep={MOVIE_CARD_MAIN_COUNT} isMain/>
      </section>
      <PageFooter />
    </div>
  </>
);

export default MainPage;
