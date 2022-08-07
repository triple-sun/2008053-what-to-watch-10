import React, { useCallback, useEffect, useRef, useState } from 'react';
import TMovie from '../../../types/movie';
import { minutesToHoursAndMinutes } from '../../../utils/utils';
import VideoPlayer from '../../video-player/video-player';
import ExitPlayerButton from '../player-buttons/exit-player-button/exit-player-button';
import FullScreenButton from '../player-buttons/full-screen-button/full-screen-button';
import PlayMovieButton from '../player-buttons/play-movie-button/play-movie-button';
import PlayerControls from '../player-controls/player-controls';

const VIDEO_LOADED_DATA = 'loadeddata';

const MoviePlayerFull = (movie: TMovie) => {
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playerState, setPlayerState] = useState({
    isPlaying: false,
    progress: 0,
    isMuted: false,
  });

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    videoRef.current.addEventListener(VIDEO_LOADED_DATA, () => setIsLoading(!isLoading));
    videoRef.current.muted = playerState.isMuted;

    if (videoRef.current) {
      playerState.isPlaying
        ? videoRef.current.play()
        : videoRef.current.pause();
    }
  }, [isLoading, playerState.isMuted, playerState.isPlaying]);

  const handlePlayButtonToggle =
    () => {
      setPlayerState({
        ...playerState,
        isPlaying: !playerState.isPlaying,
      });
    };

  const handleProgressUpdate = useCallback(
    () => {
      if (videoRef.current) {
        const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
        setPlayerState({
          ...playerState,
          progress,
        });
      }
    }, [playerState]);

  const handleProgressChange = useCallback(
    (value: number) => {
      if (videoRef.current) {
        videoRef.current.currentTime = (videoRef.current.duration / 100) * value;
        setPlayerState({
          ...playerState,
          progress: value,
        });
      }
    }, [playerState]);

  const onProgressClick = ({currentTarget}: React.FormEvent<HTMLProgressElement>) => handleProgressChange(currentTarget.value);

  if (!movie) {
    return null;
  }

  return (
    <>
      <VideoPlayer movie={movie} videoRef={videoRef} isPlaying={playerState.isPlaying} handleProgressUpdate={handleProgressUpdate}/>
      <video src={movie.videoLink} ref={videoRef} className="player__video" poster={movie.previewImage} onTimeUpdate={handleProgressUpdate}/>
      <ExitPlayerButton id={movie.id}/>
      <PlayerControls>
        <PlayerControls isRow>
          <div className="player__time">
            <progress className="player__progress" value={playerState.progress} max="100" onClick={onProgressClick}/>
            <div className="player__toggler" style={{left: `${playerState.progress}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{playerState.isPlaying && playerState.progress ? playerState.progress : minutesToHoursAndMinutes(movie.runTime, true)}</div>
        </PlayerControls>

        <PlayerControls isRow>
          <PlayMovieButton handlePlayButtonToggle={handlePlayButtonToggle} isPlaying={playerState.isPlaying}/>
          <div className="player__name">{movie.name}</div>
          <FullScreenButton />
        </PlayerControls>
      </PlayerControls>
    </>
  );
};

export default MoviePlayerFull;
