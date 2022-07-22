import withVideoPlayer from '../../../hocs/with-video-player/with-video-player';
import TMovie from '../../../types/movie';
import THandlePageChange from '../../../types/page-change';
import MovieCardComponent from '../movie-card/movie-card';

const MovieCardComponentWrapped = withVideoPlayer(MovieCardComponent);


const MovieCardsList = ({movies, count, handlePageChange}: {movies: readonly TMovie[], count: number} & THandlePageChange) => (
  <div className="catalog__films-list">
    {movies.slice(0, count).map(
      (movie: TMovie, id: number) => <MovieCardComponentWrapped key={`${movie.id}-${movie.name}`} movie={movie} playerId={id} handlePageChange={handlePageChange} isMuted isPreview/>
    )}
  </div>
);

export default MovieCardsList;
