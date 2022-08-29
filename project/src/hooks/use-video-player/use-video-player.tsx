import React, { useState, useCallback, useLayoutEffect } from 'react';
import { playerInitialState } from '../../const/initial-states';

const useVideoPlayer = (isPreview = false) => {
  const [playerState, setPlayerState] = useState(playerInitialState);
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
          time: videoRef.current.duration - videoRef.current.currentTime,
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
    setIsLoading(false);
    if (videoRef.current) {
      setPlayerState({
        ...playerState,
        isPlaying: isPlaying,
        time: videoRef.current.duration
      });
    }
  }, [isPlaying, playerState, videoRef]);

  useLayoutEffect(() => {
    let isMounted = true;

    if (isMounted) {
      if (!videoRef.current) {
        return;
      }

      videoRef.current.onloadeddata = handleVideoLoadedData;
      videoRef.current.muted = isPreview ? true : isMuted;

      isPlaying && !isLoading
        ? handlePlayback()
        : videoRef.current.pause();
    }

    return () => {
      isMounted = false;
    };
  }, [handlePlayback, handleVideoLoadedData, isLoading, isMuted, isPlaying, isPreview, videoRef]);

  return {
    videoRef,
    playerState,
    isLoading,
    handlePlayButtonToggle,
    handleProgressUpdate,
  };
};

export default useVideoPlayer;
