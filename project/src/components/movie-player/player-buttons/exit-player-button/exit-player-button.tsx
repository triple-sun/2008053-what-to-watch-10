import { useNavigate } from 'react-router-dom'
import { AppRoute } from '../../../../const/enums';

const ExitPlayerButton = () => {
  const navigate = useNavigate();

  return <button type="button" className="player__exit" onClick={() => navigate(AppRoute.Main)}>Exit</button>;
};

export default ExitPlayerButton;
