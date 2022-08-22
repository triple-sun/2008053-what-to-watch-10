import React from 'react';
import { ElementTestID } from '../../../../const/enums';

type moviePlayerProgressProps = {
  progress: number;
  isPlaying: boolean;
  handleProgressChange: (value: number) => void;
}

const MoviePlayerProgress = ({progress, isPlaying, handleProgressChange}: moviePlayerProgressProps) => {
  const onProgressClick = ({currentTarget}: React.FormEvent<HTMLProgressElement>) => handleProgressChange(currentTarget.value);

  return <progress className="player__progress" value={isPlaying ? progress : 0} max="100" onClick={onProgressClick} data-testid={ElementTestID.Progress}/>;
};

export default React.memo(MoviePlayerProgress);
