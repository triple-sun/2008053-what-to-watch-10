import React, { useState, useEffect, useCallback } from 'react';
import { playerInitialState } from '../../const/initial-states';

const VIDEO_LOADED_DATA = 'loadeddata';

const useVideoPlayer = (isPreview = false, isPreviewPlaying = false) => {
  const [playerState, setPlayerState] = useState({...playerInitialState, isPlaying: isPreviewPlaying});
  const [isLoading, setIsLoading] = useState(true);

  const {isPlaying, isMuted, isFullscreen} = playerState;

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
        });
      }
    }, [playerState, videoRef]);

  const handleProgressChange = useCallback(
    (value: number) => {
      if (videoRef.current) {
        videoRef.current.currentTime = (100 / videoRef.current.duration) * value;
      }
      setPlayerState({
        ...playerState,
        progress: value,
      });
    }, [playerState, videoRef]);

  const handleFullScreenClick = useCallback(
    () => {
      setPlayerState({
        ...playerState,
        isFullscreen: !isFullscreen,
      });
    }, [isFullscreen, playerState]);

  const playVideo = useCallback(
    () => isPreview
      ? setTimeout(() => videoRef.current?.play(), 1000)
      : videoRef.current?.play(), [isPreview, videoRef]);

  const handleVideoLoadedData = useCallback(() => {
    if (videoRef.current) {
      setIsLoading(!isLoading);
      setPlayerState({
        ...playerState,
        progress: videoRef.current.duration
      });
    }
  }, [isLoading, playerState, videoRef]);

  useEffect(() => {
    if (!videoRef.current) {
      return;
    }

    videoRef.current.addEventListener(VIDEO_LOADED_DATA, handleVideoLoadedData);
    videoRef.current.muted = isPreview ? true : isMuted;

    if (isFullscreen) {
      videoRef.current.requestFullscreen();
    }

    isPlaying && !isLoading
      ? playVideo()
      : videoRef.current.pause();

  }, [handleVideoLoadedData, isFullscreen, isLoading, isMuted, isPlaying, isPreview, playVideo, videoRef]);

  return {
    videoRef,
    playerState,
    handlePlayButtonToggle,
    handleProgressUpdate,
    handleProgressChange,
    handleFullScreenClick,
  };
};

export default useVideoPlayer;
