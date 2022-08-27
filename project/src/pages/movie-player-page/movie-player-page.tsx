import MoviePlayerProgress from '../../components/movie/movie-player/movie-player-progress/movie-player-progress';
import MoviePlayerTimeValue from '../../components/movie/movie-player/movie-player-time-value/movie-player-time-value';
import MoviePlayerToggler from '../../components/movie/movie-player/movie-player-toggler/movie-player-toggler';
import ExitPlayerButton from '../../components/movie/movie-player/player-buttons/exit-player-button/exit-player-button';
import PlaybackToggleButton from '../../components/movie/movie-player/player-buttons/playback-toggle-button/playback-toggle-button';
import VideoElement from '../../components/video-element/video-element';
import { ComponentText, PageTestID } from '../../const/enums';
import useCurrentMovie from '../../hooks/use-current-movie/use-current-movie';
import useVideoPlayer from '../../hooks/use-video-player/use-video-player';
import LoadingPage from '../loading-page/loading-page';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';

const MoviePlayerPage = () => {
  const {movie, isLoading} = useCurrentMovie();

  const handleFullScreenAction = useFullScreenHandle();

  const {
    videoRef,
    playerState,
    handlePlayButtonToggle,
    handleProgressUpdate,
  } = useVideoPlayer();

  return !movie || isLoading
    ? <LoadingPage />
    : (
      <FullScreen handle={handleFullScreenAction}>
        <div className="player" data-testid={PageTestID.MoviePlayerPage}>

          <VideoElement ref={videoRef} {...{movie, handleProgressUpdate}} />


          <ExitPlayerButton id={movie.id}/>

          <div className="player__controls">
            <div className="player__controls-row">
              <div className="player__time">
                <MoviePlayerProgress {...playerState} />
                <MoviePlayerToggler {...playerState} />
              </div>
              <MoviePlayerTimeValue {...playerState} />
            </div>

            <div className="player__controls-row">
              <PlaybackToggleButton {...playerState} handlePlayButtonToggle={handlePlayButtonToggle} />
              <div className="player__name">{movie.name}</div>

              <button type="button" className="player__full-screen" onClick={handleFullScreenAction.enter}>
                <svg viewBox="0 0 27 27" width="27" height="27">
                  <use xlinkHref="#full-screen"/>
                </svg>
                <span>{ComponentText.FullScreen}</span>
              </button>
            </div>
          </div>
        </div>
      </FullScreen>
    );
};

export default MoviePlayerPage;

