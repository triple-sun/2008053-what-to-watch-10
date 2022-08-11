import { useEffect, useRef, useState } from 'react';
import TMovie from '../../types/movie';
import VideoElement from '../video-element/video-element';

const VIDEO_LOADED_DATA = 'loadeddata';

const MovieCardPlayer = ({movie, isPlaying = false, isPreview = true}: {movie: TMovie, isPlaying: boolean, isPreview: boolean}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    videoRef.current.addEventListener(VIDEO_LOADED_DATA, () => setIsLoading(!isLoading));
    videoRef.current.muted = true;

    if (isPlaying && !isLoading) {
      setTimeout(() => videoRef.current?.play(), 1000);
      return;
    }

    videoRef.current.pause();
  }, [isLoading, isPlaying]);

  return <VideoElement ref={videoRef} {...{movie, isPlaying, isPreview}}/>;
};

export default MovieCardPlayer;
