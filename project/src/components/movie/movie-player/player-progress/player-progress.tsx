import React from 'react';
import { ComponentText } from '../../../../const/enums';
import { TPlayerState } from '../../../../types/state';
import { minutesToHoursAndMinutes } from '../../../../utils/utils';

const PlayerProgress = ({state, handleProgressChange}: {state: TPlayerState, handleProgressChange: (value: number) => void}) => {
  const {movie, isPlaying, progress} = state;

  const onProgressClick = ({currentTarget}: React.FormEvent<HTMLProgressElement>) => handleProgressChange(currentTarget.value);

  return (
    <>
      <div className="player__time">
        <progress className="player__progress" value={progress} max="100" onClick={onProgressClick}/>
        <div className="player__toggler" style={{left: `${progress}%`}}>{ComponentText.Toggler}</div>
      </div>
      <div className="player__time-value">{isPlaying && progress ? progress : minutesToHoursAndMinutes(movie.runTime, true)}</div>
    </>
  );};

export default React.memo(PlayerProgress);
