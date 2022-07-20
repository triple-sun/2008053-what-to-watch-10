import { Navigate, useParams } from 'react-router-dom';
import ExitPlayerButton from '../../components/movie-player/player-buttons/exit-player-button/exit-player-button';
import FullScreenButton from '../../components/movie-player/player-buttons/full-screen-button/full-screen-button';
import PlayMovieButton from '../../components/movie-player/player-buttons/play-movie-button/play-movie-button';
import PlayerControls from '../../components/movie-player/player-controls/player-controls';
import PlayerProgress from '../../components/movie-player/player-progress-element/player-progress-element';
import VideoPlayer from '../../components/video-player/video-player';
import { AppRoute } from '../../const/enums';
import mockMovies from '../../mocks/movies';

const MoviePlayerPage = () => {
  const {id} = useParams();

  const currentMovie = mockMovies.find((mov) => mov.id === id);

  if (!currentMovie) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  return (
    <div className="player">
      <VideoPlayer isPlaying movie={currentMovie} isMuted={false}/>
      <ExitPlayerButton />
      <PlayerControls>
        <PlayerControls isRow>
          <PlayerProgress {...currentMovie}/>
        </PlayerControls>

        <PlayerControls isRow>
          <PlayMovieButton />
          <div className="player__name">{currentMovie.name}</div>

          <FullScreenButton />
        </PlayerControls>
      </PlayerControls>
    </div>
  );};

export default MoviePlayerPage;

