import GenreListComponent from '../../components/genre-list/genre-list';
import MoviePromoComponent from '../../components/movie/movie-promo/movie-promo';
import MovieCardsListComponent from '../../components/movie-list/movie-list';
import PageFooterElement from '../../components/universal/page-footer/page-footer';
import TMainPageProps from '../../types/main-page-props';


const MainPage = ({promo, movies, genres}: TMainPageProps): JSX.Element => (
  <div>
    <MoviePromoComponent {...promo} />

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
  </div>
);

export default MainPage;
