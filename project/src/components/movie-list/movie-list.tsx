import { ReactElement, useState } from 'react';
import TListProps from '../../types/list-props';
import TMovie from '../../types/movie-data';
import MovieCardComponent from '../movie/movie-card/movie-card';

type TActiveMovieState = TMovie | null;


const MovieCardsListComponent = ({movies}: TListProps<TMovie>): JSX.Element => {
  const [activeMovie, setActiveMovie] = useState<TActiveMovieState>(null);

  const movieCardMouseOverHandler = (movie: TMovie): void => setActiveMovie({...activeMovie, ...movie});

  const createMovieCard = (movie: TMovie): ReactElement => <MovieCardComponent key={`${movie.id}`} value={movie} setActiveMovieHandle={movieCardMouseOverHandler}/>;

  return (
    <div className="catalog__films-list">
      {movies.map(createMovieCard)}
    </div>
  );
};

export default MovieCardsListComponent;
