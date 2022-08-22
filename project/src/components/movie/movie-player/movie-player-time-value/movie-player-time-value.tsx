import React from 'react';
import { minutesToHoursAndMinutes } from '../../../../utils/utils';

const MoviePlayerTimeValue = ({progress}: {progress: number}) => {
  const movieTime = minutesToHoursAndMinutes(Number(progress.toFixed()));

  return <div className="player__time-value">{movieTime}</div>;
};

export default React.memo(MoviePlayerTimeValue);
