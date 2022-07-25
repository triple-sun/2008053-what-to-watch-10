import { useEffect, useRef, useState } from 'react';
import TMovie from '../../types/movie';

const VIDEO_LOADED_DATA = 'loadeddata';

type MoviePlayerProps = {
  movie: TMovie;
  isPlaying: boolean;
  isMuted?: boolean
  isPreview?: boolean
}

const VideoPlayer = ({movie, isPlaying, isMuted = false, isPreview = false}: MoviePlayerProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    videoRef.current.addEventListener(VIDEO_LOADED_DATA, () => setIsLoading(!isLoading));
    videoRef.current.muted = isMuted;

    if (isPlaying && !isLoading && isPreview) {
      setTimeout(() => videoRef.current?.play(), 1000);
      return;
    }

    if (isPlaying && !isLoading && !isPreview) {
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();
  }, [isLoading, isMuted, isPlaying, isPreview, movie]);

  return <video src={isPreview ? movie.previewVideoLink : movie.videoLink} ref={videoRef} className="player__video" poster={movie.previewImage}/>;
};

export default VideoPlayer;
