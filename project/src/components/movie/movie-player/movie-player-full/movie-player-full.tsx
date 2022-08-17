import React, { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { AppRoute } from '../../../../const/enums';
import { checkId, minutesToHoursAndMinutes } from '../../../../utils/utils';
import VideoElement from '../../../video-element/video-element';
import useVideoPlayer from '../../../../hooks/use-video-player/use-video-player';
import ExitPlayerButton from '../player-buttons/exit-player-button/exit-player-button';
import FullScreenButton from '../player-buttons/full-screen-button/full-screen-button';
import PlaybackToggleButton from '../player-buttons/playback-toggle-button/playback-toggle-button';
import useAppSelector from '../../../../hooks/use-app-selector/use-app-selector';
import { getCurrentMovieState } from '../../../../store/current-movie/current-movie-selectors';
import { getMovies } from '../../../../store/main-page/main-page-selectors';
import useAppDispatch from '../../../../hooks/use-app-dispatch/use-app-dispatch';
import { fetchCurrentMovieAction } from '../../../../store/current-movie/current-movie-api-actions';
import LoadingPage from '../../../../pages/loading-page/loading-page';

const DURATION_DECIMALS = 0;

const MoviePlayerFull = () => {
  const id = Number(useParams().id);

  const {data: {movie}, isLoading} = useAppSelector(getCurrentMovieState);

  const movies = useAppSelector(getMovies);
  const isIdOk = checkId(movies, id);

  const dispatch = useAppDispatch();

  const videoRef = React.createRef<HTMLVideoElement>();

  const {
    playerState,
    handlePlayButtonToggle,
    handleProgressUpdate,
    handleProgressChange,
    handleFullScreenClick
  } = useVideoPlayer(videoRef);

  const {
    progress,
    isPlaying,
    isMuted,
    isFullscreen
  } = playerState;

  const onProgressClick = ({currentTarget}: React.FormEvent<HTMLProgressElement>) => handleProgressChange(currentTarget.value);

  useEffect(() => {
    if (id !== movie?.id) {
      dispatch(fetchCurrentMovieAction(id));
    }
  },[dispatch, id, movie?.id]
  );

  if (!isIdOk) {
    return <Navigate to={AppRoute.NotFound} />;

  }
  if (isLoading || !movie) {
    return <LoadingPage />;
  }

  return (
    <>
      <VideoElement ref={videoRef} {...{movie, isPlaying, isMuted, isFullscreen, handleProgressUpdate}} />
      <ExitPlayerButton id={movie.id}/>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max="100" onClick={onProgressClick}/>
            <div className="player__toggler" style={{left: `${progress.toFixed(DURATION_DECIMALS)}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{isPlaying && progress ? minutesToHoursAndMinutes(Number(progress.toFixed(DURATION_DECIMALS)), true) : minutesToHoursAndMinutes(movie.runTime, true)}</div>
        </div>

        <div className="player__controls-row">
          <PlaybackToggleButton handlePlayButtonToggle={handlePlayButtonToggle} isPlaying={playerState.isPlaying}/>
          <div className="player__name">{movie.name}</div>
          <FullScreenButton handleFullScreenClick={handleFullScreenClick}/>
        </div>
      </div>
    </>
  );
};

export default React.memo(MoviePlayerFull);
