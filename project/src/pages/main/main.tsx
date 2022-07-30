import GenresList from '../../components/genres/genres-list/genres-list';
import MovieCardPromo from '../../components/movie/movie-card-promo/movie-card-promo';
import MovieCardsList from '../../components/movie/movie-cards-list/movie-cards-list';
import PageFooter from '../../components/common/page-footer/page-footer-element';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import { MOVIE_CARD_MAIN_COUNT } from '../../const/const';
import useAppSelector from '../../hooks/use-app-selector/use-app-selector';
import { useCallback, useState } from 'react';
import { getMainState } from '../../utils/selectors/selectors';
import { Genre } from '../../const/enums';
import { useDispatch } from 'react-redux';
import { resetGenre } from '../../store/main-page/main-page-actions';
import { filterMoviesByGenre } from '../../utils/utils';

const MainPage = () => {
  const [renderedMovieCount, setRenderedMovieCount] = useState(MOVIE_CARD_MAIN_COUNT);
  const {movies, selectedGenre} = useAppSelector(getMainState);

  const dispatch = useDispatch();

  const filteredMovies = selectedGenre === Genre.AllGenres ? movies : filterMoviesByGenre(movies, selectedGenre);

  const handleShowMoreButtonClick = useCallback(
    (count: number) => setRenderedMovieCount(() => Math.min(renderedMovieCount + count, filteredMovies.length)),
    [filteredMovies.length, renderedMovieCount],
  );

  const handleGenreReset = useCallback(
    () => dispatch(resetGenre()),
    [dispatch]
  );

  return (
    <>
      <MovieCardPromo />
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList handleGenreReset={handleGenreReset}/>
          <MovieCardsList movies={filteredMovies} renderedMovieCount={renderedMovieCount} />
          {filteredMovies.length <= renderedMovieCount
            ? null
            : <ShowMoreButton movies={filteredMovies} renderedMoviesCount={renderedMovieCount} handleShowMoreButtonClick={handleShowMoreButtonClick} />}
        </section>

        <PageFooter />
      </div>
    </>
  );};

export default MainPage;
