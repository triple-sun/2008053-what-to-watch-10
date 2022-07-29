import { Link } from 'react-router-dom';
import { AppRoute } from '../../../../const/enums';

const ExitPlayerButton = () => <Link to={AppRoute.Main} type="button" className="player__exit" >Exit</Link>;

export default ExitPlayerButton;
