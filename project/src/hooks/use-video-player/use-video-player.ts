import { useState, useEffect, RefObject, useCallback } from 'react';

const useVideoPlayer = (videoRef: RefObject<HTMLVideoElement>) => {
  const [playerState, setPlayerState] = useState({
    progress: 0,
    isPlaying: false,
    isMuted: false,
    isFullscreen: false
  });

  const {isPlaying, isMuted, isFullscreen} = playerState;

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
    }, [playerState, videoRef]);


  const handleProgressChange = useCallback(
    (value: number) => {
      if (videoRef.current) {
        videoRef.current.currentTime = (100 / videoRef.current.duration) * value;
        setPlayerState({
          ...playerState,
          progress: value,
        });
      }
    }, [playerState, videoRef]);

  const handleFullScreenClick = useCallback(
    () => {
      setPlayerState({
        ...playerState,
        isFullscreen: !isFullscreen ,
      });
    }, [isFullscreen, playerState]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
      if (isFullscreen) {
        videoRef.current.requestFullscreen();
      }
      isPlaying
        ? videoRef.current.play()
        : videoRef.current.pause();
    }
  }, [isFullscreen, isMuted, isPlaying, videoRef]);

  return {
    playerState,
    handlePlayButtonToggle,
    handleProgressUpdate,
    handleProgressChange,
    handleFullScreenClick,
  };
};

export default useVideoPlayer;
