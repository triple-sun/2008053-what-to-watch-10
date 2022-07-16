import { useState } from 'react';
import TList from '../../../types/list';
import TMovie from '../../../types/movie';
import MovieCardComponent from '../movie-card/movie-card';

type ActiveMovieState = {
  activeMovie: TMovie | null
};

const MovieCardsListComponent = ({movies}: TList<TMovie>) => {
  const [activeMovie, setActiveMovie] = useState<ActiveMovieState>({activeMovie: null});

  const handleMouseOver = (movie: TMovie) => setActiveMovie({...activeMovie, activeMovie: movie});

  return (
    <div className="catalog__films-list">
      {movies.map(
        (movie: TMovie) => <MovieCardComponent key={`${movie.id}`} value={movie} handleMouseOver={handleMouseOver} />
      )}
    </div>
  );
};

export default MovieCardsListComponent;
