import React from 'react';
import { PlayerState } from '../../../types/state';
import { minutesToHoursAndMinutes } from '../../../utils/utils';

type PlayerProgressProps = {
  state: PlayerState;
  handleProgressChange: (value: number) => void;
}

const PlayerProgress = ({state, handleProgressChange}: PlayerProgressProps) => {
  const {movie, isPlaying, progress} = state;

  const onProgressClick = ({currentTarget}: React.FormEvent<HTMLProgressElement>) => handleProgressChange(currentTarget.value);

  return (
    <>
      <div className="player__time">
        <progress className="player__progress" value={progress} max="100" onClick={onProgressClick}/>
        <div className="player__toggler" style={{left: `${progress}%`}}>Toggler</div>
      </div>
      <div className="player__time-value">{isPlaying && progress ? progress : minutesToHoursAndMinutes(movie.runTime, true)}</div>
    </>
  );};

export default PlayerProgress;
