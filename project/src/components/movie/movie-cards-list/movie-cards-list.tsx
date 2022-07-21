import withVideoPlayer from '../../../hocs/with-video-player/with-video-player';
import TMovie from '../../../types/movie';
import MovieCardComponent from '../movie-card/movie-card';

const MovieCardComponentWrapped = withVideoPlayer(MovieCardComponent);

const MovieCardsList = ({movies, count}: {movies: readonly TMovie[], count: number}) => (
  <div className="catalog__films-list">
    {movies.slice(0, count - 1).map(
      (movie: TMovie, id: number) => <MovieCardComponentWrapped key={`${movie.id}-${movie.name}`} movie={movie} playerId={id} isMuted isPreview/>
    )}
  </div>
);

export default MovieCardsList;
