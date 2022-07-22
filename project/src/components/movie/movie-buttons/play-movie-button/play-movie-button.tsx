import { useNavigate } from 'react-router-dom';
import TMovie from '../../../../types/movie';
import THandlePageChange from '../../../../types/page-change';

const PlayMovieButton = ({id, handlePageChange}: TMovie & THandlePageChange) => {
  const navigate = useNavigate();

  const onPlayButtonClick = () => {
    if (handlePageChange) {
      handlePageChange();
    }
    navigate(`/player/${id}`);
  };

  return (
    <button className="btn btn--play film-card__button" type="button" onClick={onPlayButtonClick}>
      <svg viewBox="0 0 19 19" width="19" height="19">
      </svg>
      <span>Play</span>
    </button>
  );
};

export default PlayMovieButton;
