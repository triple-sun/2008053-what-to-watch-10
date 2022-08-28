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
  ({
    movie: {
      previewImage,
      previewVideoLink,
      videoLink
    },
    isPreview,
    handleProgressUpdate
  },
  ref) => (
    <video
      src={isPreview
        ? previewVideoLink
        : videoLink}
      ref={ref}
      className="player__video"
      poster={previewImage}
      onTimeUpdate={handleProgressUpdate}
      data-testid={ElementTestID.Video}
    />
  )
);

VideoElement.displayName = VIDEO_ELEMENT_DISPLAY_NAME;

export default React.memo(VideoElement);
