import GenresList from '../../components/genres/genres-list/genres-list';
import MovieCardPromo from '../../components/movie/movie-card-promo/movie-card-promo';
import MovieCardsList from '../../components/movie/movie-cards-list/movie-cards-list';
import PageFooter from '../../components/common/page-footer/page-footer-element';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import { MOVIE_CARD_MAIN_COUNT } from '../../const/const';
import { changeGenre, filterMovies, resetMovies, setRenderedMovieCount } from '../../store/main-page-actions';
import { Genre } from '../../const/enums';
import useAppDispatch from '../../hooks/use-app-dispatch/use-app-dispatch';
import useAppSelector from '../../hooks/use-app-selector/use-app-selector';

const MainPage = () => {
  const {promo, filteredMovies, selectedGenre, myMovies, renderedMoviesCount} = useAppSelector((state) => state);

  const dispatch = useAppDispatch();

  const handleGenreClick = (genre: Genre) => {
    if (genre !== selectedGenre) {
      dispatch(changeGenre(genre));
      dispatch(filterMovies({genre}));}
  };

  const handleShowMoreButtonClick = (count: number) => {
    dispatch(setRenderedMovieCount(filteredMovies, count));
  };

  const handlePageChange = () => dispatch(resetMovies());

  return (
    <>
      <MovieCardPromo promo={promo} myMovies={myMovies} handlePageChange={handlePageChange}/>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList selectedGenre={selectedGenre} handleGenreClick={handleGenreClick}/>
          <MovieCardsList movies={filteredMovies} count={renderedMoviesCount} />
          {!(filteredMovies.length - renderedMoviesCount)
            ? null
            : <ShowMoreButton movies={filteredMovies} countPerStep={MOVIE_CARD_MAIN_COUNT} renderedMoviesCount={renderedMoviesCount} handleShowMoreButtonClick={handleShowMoreButtonClick}/>}
        </section>

        <PageFooter />
      </div>
    </>
  );};

export default MainPage;
