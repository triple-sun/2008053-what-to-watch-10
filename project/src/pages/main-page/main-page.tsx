import GenresList from '../../components/genres/genres-list/genres-list';
import MovieCardPromo from '../../components/movie/movie-card-promo/movie-card-promo';
import MovieCardsList from '../../components/movie/movie-cards-list/movie-cards-list';
import PageFooter from '../../components/common/page-footer/page-footer';
import { ComponentText, MovieList, PageTestID } from '../../const/enums';

const MainPage = () => (
  <>
    <MovieCardPromo />
    <div className="page-content" data-testid={PageTestID.MainPage}>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">{ComponentText.Catalog}</h2>
        <GenresList />
        <MovieCardsList movieList={MovieList.MainPage} isLong />
      </section>
      <PageFooter />
    </div>
  </>
);

export default MainPage;
