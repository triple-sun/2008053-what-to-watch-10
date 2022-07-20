import withVideoPlayer from '../../../hocs/with-video-player/with-video-player';
import TMovie from '../../../types/movie';
import MovieCardComponent from '../../movie/movie-card/movie-card';

const MovieCardComponentWrapped = withVideoPlayer(MovieCardComponent);

const MovieCardListComponent = ({movies}: {movies: readonly TMovie[]}) => (
  <div className="catalog__films-list">
    {movies.map(
      (movie: TMovie, id: number) => <MovieCardComponentWrapped key={`${movie.id}-${movie.name}`} movie={movie} id={id} />
    )}
  </div>
);

export default MovieCardListComponent;
