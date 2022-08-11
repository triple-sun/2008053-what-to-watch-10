import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../../const/enums';
import TMovie from '../../../types/movie';
import { minutesToHoursAndMinutes } from '../../../utils/utils';
import ExitPlayerButton from '../player-buttons/exit-player-button/exit-player-button';
import FullScreenButton from '../player-buttons/full-screen-button/full-screen-button';
import PlayMovieButton from '../player-buttons/play-movie-button/play-movie-button';
import PlayerControls from '../player-controls/player-controls';

const VIDEO_LOADED_DATA = 'loadeddata';
const DURATION_DECIMALS = 0;

const MoviePlayerFull = (movie: TMovie) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [playerState, setPlayerState] = useState({
    isPlaying: false,
    progress: 0,
    isMuted: false,
    isFullscreen: false
  });

  const {isPlaying, progress, isMuted, isFullscreen} = playerState;

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    videoRef.current.addEventListener(VIDEO_LOADED_DATA, () => setIsLoading(!isLoading));
    videoRef.current.muted = isMuted;

    if (videoRef.current) {
      if (isFullscreen) {
        videoRef.current.requestFullscreen();
      }
      isPlaying
        ? videoRef.current.play()
        : videoRef.current.pause();
    }
  }, [isLoading, isPlaying, isMuted, isFullscreen]);

  const handlePlayButtonToggle =
    () => {
      setPlayerState({
        ...playerState,
        isPlaying: !isPlaying,
      });
    };

  const handleProgressUpdate = useCallback(
    () => {
      if (videoRef.current) {
        const update = (videoRef.current.currentTime / videoRef.current.duration) * 100;
        setPlayerState({
          ...playerState,
          progress: update,
        });
      }
    }, [playerState]);

  const handleProgressChange = useCallback(
    (value: number) => {
      if (videoRef.current) {
        videoRef.current.currentTime = (100 / videoRef.current.duration) * value;
        setPlayerState({
          ...playerState,
          progress: value,
        });
      }
    }, [playerState]);

  const handleFullScreenClick = useCallback(
    () => {
      setPlayerState({
        ...playerState,
        isFullscreen: !isFullscreen ,
      });
    }, [isFullscreen, playerState]);

  const onProgressClick = ({currentTarget}: React.FormEvent<HTMLProgressElement>) => handleProgressChange(currentTarget.value);

  if (!movie) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  return (
    <>
      <video src={movie.videoLink} ref={videoRef} className="player__video" poster={movie.previewImage} onTimeUpdate={handleProgressUpdate}/>
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
