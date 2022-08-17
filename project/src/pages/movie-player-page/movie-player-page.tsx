import MoviePlayerFull from '../../components/movie/movie-player/movie-player-full/movie-player-full';
import { PageTestID } from '../../const/enums';

const MoviePlayerPage = () => (
  <div className="player" data-testid={PageTestID.MoviePlayerPage}>
    <MoviePlayerFull />
  </div>
);

export default MoviePlayerPage;

