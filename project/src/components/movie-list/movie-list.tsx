import { useState } from 'react';
import TList from '../../types/list';
import TMovie from '../../types/movie';
import MovieCardComponent from '../movie/movie-card/movie-card';

type ActiveMovieState = {
  activeMovie: TMovie | null
};

const MovieCardsListComponent = ({movies}: TList<TMovie>) => {
  const [activeMovie, setActiveMovie] = useState<ActiveMovieState>({activeMovie: null});

  const handleMouseOver = (movie: TMovie) => setActiveMovie({...activeMovie, activeMovie: movie});

  const createMovieCard = (movie: TMovie) => <MovieCardComponent key={`${movie.id}`} value={movie} handleMouseOver={handleMouseOver}/>;

  return (
    <div className="catalog__films-list">
      {movies.map(createMovieCard)}
    </div>
  );
};

export default MovieCardsListComponent;
