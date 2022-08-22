import React from 'react';
import { ElementTestID } from '../../const/enums';
import TMovie from '../../types/movie';

const VIDEO_ELEMENT_DISPLAY_NAME = 'Video Element';

type VideoElementProps = {
    movie: TMovie;
    isPreview?: boolean;
    handleProgressUpdate?: () => void;
}

const VideoElement = React.forwardRef<HTMLVideoElement, VideoElementProps>(
  (props, ref) =>(
    <video
      src={props.isPreview
        ? props.movie.previewVideoLink
        : props.movie.videoLink}
      ref={ref}
      className="player__video"
      poster={props.movie.previewImage}
      onTimeUpdate={props.handleProgressUpdate}
      data-testid={ElementTestID.Video}
    />
  )
);

VideoElement.displayName = VIDEO_ELEMENT_DISPLAY_NAME;

export default VideoElement;
