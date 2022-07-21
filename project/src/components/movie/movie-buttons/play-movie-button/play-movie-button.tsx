import { useNavigate } from 'react-router-dom';
import TMovie from '../../../../types/movie';

const PlayMovieButton = ({id}: TMovie) => {
  const navigate = useNavigate();
  return (
    <button className="btn btn--play film-card__button" type="button" onClick={() => navigate(`/player/${id}`)}>
      <svg viewBox="0 0 19 19" width="19" height="19">
      </svg>
      <span>Play</span>
    </button>
  );
};

export default PlayMovieButton;
