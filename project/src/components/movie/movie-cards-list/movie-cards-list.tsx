import { useCallback, useState } from 'react';
import TMovie from '../../../types/movie';
import THandlePageChange from '../../../types/page-change';
import MovieCardComponent from '../movie-card/movie-card';

const MovieCardsList = ({movies, count, handlePageChange}: {movies: readonly TMovie[], count: number} & THandlePageChange) => {
  const [activeMovieId, setActiveMovieId] = useState<null | number>(null);

  const handleMouseEvent = useCallback(
    (id: number | null) => id === activeMovieId ? null : setActiveMovieId(id),
    [activeMovieId],
  );

  return (
    <div className="catalog__films-list">
      {movies.slice(0, count).map(
        (movie: TMovie) => <MovieCardComponent key={`${movie.id}-${movie.name}`} movie={movie} activeMovieId={activeMovieId} handleMouseEvent={handleMouseEvent} handlePageChange={handlePageChange}/>
      )}
    </div>
  );};

export default MovieCardsList;
