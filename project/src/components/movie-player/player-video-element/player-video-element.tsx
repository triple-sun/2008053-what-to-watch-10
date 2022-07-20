import TMovie from '../../../types/movie';

const PlayerVideoElement = ({videoLink}: TMovie) => <video src={videoLink} className="player__video" poster="img/player-poster.jpg"/>;

export default PlayerVideoElement;
