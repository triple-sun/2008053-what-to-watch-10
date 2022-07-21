import { PLAYER_TIME_STYLE } from '../../../const/const';
import TMovie from '../../../types/movie';
import { minutesToHoursAndMinutes } from '../../../utils/utils';

const PlayerProgress = ({runTime}: TMovie) => (
  <>
    <div className="player__time">
      <progress className="player__progress" value="30" max="100"/>
      <div className="player__toggler" style={PLAYER_TIME_STYLE}>Toggler</div>
    </div>
    <div className="player__time-value">{minutesToHoursAndMinutes(runTime)}</div>
  </>
);

export default PlayerProgress;
