import { useState } from 'react';
import TMovie from '../../../types/movie';
import MovieCardComponent from '../movie-card/movie-card';

const MovieCardsList = ({movies, count}: {movies: readonly TMovie[], count: number}) => {
  const [activeMovieId, setActiveMovieId] = useState<number | null>(null);

  const handleMouseEvent = (id: number | null) => id === activeMovieId ? null : setActiveMovieId(id);

  return (
    <div className="catalog__films-list">
      {movies.slice(0, count).map(
        (movie: TMovie) => <MovieCardComponent key={`${movie.id}-${movie.name}`} movie={movie} activeMovieId={activeMovieId} handleMouseEvent={handleMouseEvent}/>
      )}
    </div>
  );};

export default MovieCardsList;
