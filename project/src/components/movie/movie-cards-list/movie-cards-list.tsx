import { useCallback, useState } from 'react';
import TMovie from '../../../types/movie';
import MovieCardComponent from '../movie-card/movie-card';

const MovieCardsList = ({movies, renderedMovieCount}: {movies: readonly TMovie[], renderedMovieCount: number}) => {
  const [activeMovieId, setActiveMovieId] = useState<null | number>(null);

  const handleMouseEvent = useCallback(
    (id: number | null) => id === activeMovieId ? null : setActiveMovieId(id),
    [activeMovieId],
  );

  return (
    <div className="catalog__films-list">
      {movies.slice(0, renderedMovieCount).map(
        (movie: TMovie) => <MovieCardComponent key={`${movie.id}-${movie.name}`} movie={movie} activeMovieId={activeMovieId} handleMouseEvent={handleMouseEvent} />
      )}
    </div>
  );};

export default MovieCardsList;
