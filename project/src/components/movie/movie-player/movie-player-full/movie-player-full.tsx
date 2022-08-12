import React from 'react';
import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../../../const/enums';
import { minutesToHoursAndMinutes } from '../../../../utils/utils';
import TMovie from '../../../../types/movie';
import VideoElement from '../../../video-element/video-element';
import useVideoPlayer from '../../../../hooks/use-video-player/use-video-player';
import ExitPlayerButton from '../player-buttons/exit-player-button/exit-player-button';
import FullScreenButton from '../player-buttons/full-screen-button/full-screen-button';
import PlayMovieButton from '../player-buttons/play-movie-button/play-movie-button';
import PlayerControls from '../player-controls/player-controls';

const DURATION_DECIMALS = 0;

const MoviePlayerFull = (movie: TMovie) => {
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

  if (!movie) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  return (
    <>
      <VideoElement ref={videoRef} {...{movie, isPlaying, isMuted, isFullscreen, handleProgressUpdate}} />
      <ExitPlayerButton id={movie.id}/>
      <PlayerControls>
        <PlayerControls isRow>
          <div className="player__time">
            <progress className="player__progress" value={progress} max="100" onClick={onProgressClick}/>
            <div className="player__toggler" style={{left: `${progress.toFixed(DURATION_DECIMALS)}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{isPlaying && progress ? minutesToHoursAndMinutes(Number(progress.toFixed(DURATION_DECIMALS)), true) : minutesToHoursAndMinutes(movie.runTime, true)}</div>
        </PlayerControls>

        <PlayerControls isRow>
          <PlayMovieButton handlePlayButtonToggle={handlePlayButtonToggle} isPlaying={playerState.isPlaying}/>
          <div className="player__name">{movie.name}</div>
          <FullScreenButton handleFullScreenClick={handleFullScreenClick}/>
        </PlayerControls>
      </PlayerControls>
    </>
  );
};

export default React.memo(MoviePlayerFull);
