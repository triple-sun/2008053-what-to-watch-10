import { useEffect, useRef, useState } from 'react';
import TMovie from '../../types/movie';

const VIDEO_LOADED_DATA = 'loadeddata';

type MoviePreviewProps = {
  movie: TMovie;
  isPlaying: boolean;
  isMuted: boolean
}

const VideoPlayer = ({movie, isPlaying, isMuted = true}: MoviePreviewProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    videoRef.current.addEventListener(VIDEO_LOADED_DATA, () => setIsLoading(!isLoading));
    videoRef.current.muted = isMuted;

    if (isPlaying) {
      videoRef.current.play();
      return;
    }

    videoRef.current.load();
  }, [isLoading, isMuted, isPlaying, movie]);


  return <video src={movie.previewVideoLink} ref={videoRef} className="player__video" poster={movie.previewImage}/>;
};

export default VideoPlayer;
