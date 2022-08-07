import { RefObject, useEffect, useState } from 'react';
import TMovie from '../../types/movie';

const VIDEO_LOADED_DATA = 'loadeddata';

type MoviePlayerProps = {
  movie: TMovie;
  videoRef: RefObject<HTMLVideoElement>;
  isPlaying: boolean;
  isMuted?: boolean
  isPreview?: boolean
  handleProgressUpdate?: () => void;
}

const VideoPlayer = ({movie, videoRef, isPlaying, handleProgressUpdate, isMuted = false, isPreview = false}: MoviePlayerProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const onTimeUpdate = () => handleProgressUpdate ? handleProgressUpdate() : null;

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
  }, [isLoading, isMuted, isPlaying, isPreview, movie, videoRef]);

  return <video src={isPreview ? movie.previewVideoLink : movie.videoLink} ref={videoRef} className="player__video" poster={movie.previewImage} onTimeUpdate={onTimeUpdate}/>;
};

export default VideoPlayer;
