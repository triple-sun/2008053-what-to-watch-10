import React from 'react';
import useVideoPlayer from '../../../../hooks/use-video-player/use-video-player';
import TMovie from '../../../../types/movie';
import VideoElement from '../../../video-element/video-element';

const MovieCardPlayer = ({movie, isPlaying = false, isPreview = true}: {movie: TMovie, isPlaying: boolean, isPreview: boolean}) => {
  const {videoRef} = useVideoPlayer(isPreview);

  return <VideoElement ref={videoRef} {...{movie, isPlaying, isPreview}}/>;
};

export default React.memo(MovieCardPlayer);
