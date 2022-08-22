import { ComponentText } from '../../../../const/enums';

const MoviePlayerToggler = ({progress, isPlaying}: {progress: number, isPlaying: boolean}) => (
  <div className="player__toggler" style={{left: `${isPlaying ? progress.toFixed() : 0}%`}}>
    {ComponentText.Toggler}
  </div>
);

export default MoviePlayerToggler;
