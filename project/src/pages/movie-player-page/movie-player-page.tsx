import MoviePlayerProgress from '../../components/movie/movie-player/movie-player-progress/movie-player-progress';
import MoviePlayerTimeValue from '../../components/movie/movie-player/movie-player-time-value/movie-player-time-value';
import MoviePlayerToggler from '../../components/movie/movie-player/movie-player-toggler';
import ExitPlayerButton from '../../components/movie/movie-player/player-buttons/exit-player-button/exit-player-button';
import FullScreenButton from '../../components/movie/movie-player/player-buttons/full-screen-button/full-screen-button';
import PlaybackToggleButton from '../../components/movie/movie-player/player-buttons/playback-toggle-button/playback-toggle-button';
import VideoElement from '../../components/video-element/video-element';
import { PageTestID } from '../../const/enums';
import useCurrentMovie from '../../hooks/use-current-movie/use-current-movie';
import useVideoPlayer from '../../hooks/use-video-player/use-video-player';
import LoadingPage from '../loading-page/loading-page';

const MoviePlayerPage = () => {
  const {movie} = useCurrentMovie();

  const {
    videoRef,
    playerState,
    handlePlayButtonToggle,
    handleProgressUpdate,
    handleProgressChange,
    handleFullScreenClick
  } = useVideoPlayer();

  return !movie
    ? <LoadingPage />
    : (
      <div className="player" data-testid={PageTestID.MoviePlayerPage}>
        <VideoElement ref={videoRef} {...{movie, handleProgressUpdate}} />
        <ExitPlayerButton id={movie.id}/>
        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <MoviePlayerProgress {...playerState} handleProgressChange={handleProgressChange}/>
              <MoviePlayerToggler {...playerState} />
            </div>
            <MoviePlayerTimeValue {...playerState} />
          </div>
          <div className="player__controls-row">
            <PlaybackToggleButton {...playerState} handlePlayButtonToggle={handlePlayButtonToggle} />
            <div className="player__name">{movie.name}</div>
            <FullScreenButton handleFullScreenClick={handleFullScreenClick}/>
          </div>
        </div>
      </div>
    );
};

export default MoviePlayerPage;

