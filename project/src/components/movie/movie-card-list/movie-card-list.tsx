import { useCallback, useState } from 'react';
import TList from '../../../types/list';
import TMovie from '../../../types/movie';
import MovieCardComponent from '../../movie/movie-card/movie-card';

const MovieCardListComponent = ({movies}: TList<TMovie>) => {
  const [activeMovieID, setActiveMovieID] = useState<string | null>(null);

  const handleMouseEvent = useCallback(
    (id: string | null) => id !== activeMovieID ? setActiveMovieID(id) : null,
    [activeMovieID],
  );

  return (
    <div className="catalog__films-list">
      {movies.map(
        (movie: TMovie) => <MovieCardComponent key={`${movie.id}`} movie={movie} handleMouseEvent={handleMouseEvent} />
      )}
    </div>
  );
};

export default MovieCardListComponent;
