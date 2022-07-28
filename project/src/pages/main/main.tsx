import GenresList from '../../components/genres/genres-list/genres-list';
import MovieCardPromo from '../../components/movie/movie-card-promo/movie-card-promo';
import MovieCardsList from '../../components/movie/movie-cards-list/movie-cards-list';
import PageFooter from '../../components/common/page-footer/page-footer-element';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import { MOVIE_CARD_MAIN_COUNT } from '../../const/const';
import useAppSelector from '../../hooks/use-app-selector/use-app-selector';
import { useCallback, useState } from 'react';
import { getMovies, getSelectedGenre } from '../../utils/selectors/selectors';
import { Genre } from '../../const/enums';

const MainPage = () => {
  const [renderedMovieCount, setRenderedMovieCount] = useState(MOVIE_CARD_MAIN_COUNT);

  const movies = useAppSelector(getMovies);
  const selectedGenre = useAppSelector(getSelectedGenre);

  const filteredMovies = selectedGenre === Genre.AllGenres ? movies : movies.filter((movie) => movie.genre === selectedGenre);

  const handleShowMoreButtonClick = useCallback(
    (count: number) => setRenderedMovieCount(() => Math.min(renderedMovieCount + count, movies.length)),
    [movies.length, renderedMovieCount],
  );

  return (
    <>
      <MovieCardPromo />
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList />
          <MovieCardsList movies={filteredMovies} renderedMovieCount={renderedMovieCount} />
          {!(movies.length > renderedMovieCount)
            ? null
            : <ShowMoreButton movies={filteredMovies} countPerStep={MOVIE_CARD_MAIN_COUNT} renderedMoviesCount={renderedMovieCount} handleShowMoreButtonClick={handleShowMoreButtonClick}/>}
        </section>

        <PageFooter />
      </div>
    </>
  );};

export default MainPage;
