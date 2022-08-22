import GenresList from '../../components/genres/genres-list/genres-list';
import MovieCardPromo from '../../components/movie/movie-card-promo/movie-card-promo';
import MovieCardsList from '../../components/movie/movie-cards-list/movie-cards-list';
import PageFooter from '../../components/common/page-footer/page-footer';
import { ComponentText, MovieList, PageTestID } from '../../const/enums';
import useMovies from '../../hooks/use-movies/use-movies';

const MainPage = () => {
  const {promo} = useMovies(MovieList.MainPage);

  return (
    <>
      <MovieCardPromo promo={promo}/>
      <div className="page-content" data-testid={PageTestID.MainPage}>
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">{ComponentText.Catalog}</h2>
          <GenresList />
          <MovieCardsList movieList={MovieList.MainPage} />
        </section>
        <PageFooter />
      </div>
    </>
  );
};

export default MainPage;
