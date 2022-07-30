import GenresList from '../../components/genres/genres-list/genres-list';
import MovieCardPromo from '../../components/movie/movie-card-promo/movie-card-promo';
import MovieCardsList from '../../components/movie/movie-cards-list/movie-cards-list';
import PageFooter from '../../components/common/page-footer/page-footer-element';
import useAppSelector from '../../hooks/use-app-selector/use-app-selector';
import { getMovies, getSelectedGenre } from '../../utils/selectors/selectors';
import { filterMoviesByGenre } from '../../utils/utils';

const MainPage = () => {
  const movies = useAppSelector(getMovies);
  const selectedGenre = useAppSelector(getSelectedGenre);
  const filteredMovies = filterMoviesByGenre(movies, selectedGenre);
  return (
    <>
      <MovieCardPromo />
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList />
          <MovieCardsList movies={filteredMovies ?? movies} isLong />
        </section>
        <PageFooter />
      </div>
    </>
  );};

export default MainPage;
