import { useCallback, useState } from 'react';
import { MOVIE_CARD_MAIN_COUNT, MOVIE_CARD_SIMILAR_COUNT } from '../../../const/const';
import TMovie from '../../../types/movie';
import ShowMoreButton from '../../show-more-button/show-more-button';
import MovieCardComponent from '../movie-card/movie-card';

const MovieCardsList = ({movies, isLong = false}: {movies: TMovie[], isLong?: boolean}) => {
  const [activeMovieId, setActiveMovieId] = useState<null | number>(null);
  const [renderedMovieCount, setRenderedMovieCount] = useState(isLong ? MOVIE_CARD_MAIN_COUNT : MOVIE_CARD_SIMILAR_COUNT);

  const handleShowMoreButtonClick = useCallback(
    (count: number) => setRenderedMovieCount(() => Math.min(renderedMovieCount + count, movies.length)),
    [movies.length, renderedMovieCount],
  );
  const handleMouseEvent = useCallback(
    (id: number | null) => id === activeMovieId ? null : setActiveMovieId(id),
    [activeMovieId],
  );

  return (
    <>
      <div className="catalog__films-list">
        {movies.slice(0, renderedMovieCount).map(
          (movie: TMovie) => <MovieCardComponent key={`${movie.id}-${movie.name}`} movie={movie} activeMovieId={activeMovieId} handleMouseEvent={handleMouseEvent} />
        )}
      </div>
      {!isLong || movies.length <= renderedMovieCount
        ? null
        : <ShowMoreButton movies={movies} renderedMoviesCount={renderedMovieCount} handleShowMoreButtonClick={handleShowMoreButtonClick} />}
    </>
  );
};

export default MovieCardsList;
