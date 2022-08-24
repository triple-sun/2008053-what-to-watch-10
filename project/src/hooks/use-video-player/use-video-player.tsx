import React, { useState, useEffect, useCallback } from 'react';
import { playerInitialState } from '../../const/initial-states';

const VIDEO_LOADED_DATA = 'loadeddata';

const useVideoPlayer = (isPreview = false, isPreviewPlaying = false) => {
  const [playerState, setPlayerState] = useState({...playerInitialState, isPlaying: isPreviewPlaying});
  const [isLoading, setIsLoading] = useState(true);

  const {isPlaying, isMuted} = playerState;

  const videoRef = React.createRef<HTMLVideoElement>();

  const handlePlayButtonToggle = useCallback(
    () => {
      setPlayerState({
        ...playerState,
        isPlaying: !isPlaying,
      });
    }, [isPlaying, playerState]
  );

  const handleProgressUpdate = useCallback(
    () => {
      if (videoRef.current) {
        const update = (videoRef.current.currentTime / videoRef.current.duration) * 100;
        setPlayerState({
          ...playerState,
          progress: update,
          time: videoRef.current.currentTime,
        });
      }
    }, [playerState, videoRef]);

  const handlePlayback = useCallback(
    () => {isPreview
      ? setTimeout(() => videoRef.current?.play(), 1000)
      : videoRef.current?.play();
    },
    [isPreview, videoRef]
  );

  const handleVideoLoadedData = useCallback(() => {
    if (videoRef.current) {
      setIsLoading(!isLoading);
      setPlayerState({
        ...playerState,
        time: videoRef.current.duration
      });
    }
  }, [isLoading, playerState, videoRef]);

  useEffect(() => {
    if (!videoRef.current) {
      return;
    }

    videoRef.current.addEventListener(VIDEO_LOADED_DATA, handleVideoLoadedData);
    videoRef.current.muted = isPreview ? true : isMuted;

    isPlaying && !isLoading
      ? handlePlayback()
      : videoRef.current.pause();

  }, [handlePlayback, handleVideoLoadedData, isLoading, isMuted, isPlaying, isPreview, videoRef]);

  return {
    videoRef,
    playerState,
    handlePlayButtonToggle,
    handleProgressUpdate,
  };
};

export default useVideoPlayer;
