import { Link } from 'react-router-dom';
import TMovie from '../../../../types/movie';
import THandlePageChange from '../../../../types/page-change';

const PlayMovieButton = ({id, handlePageChange}: TMovie & THandlePageChange) => (
  <Link to={`/player/${id}`} className="btn btn--play film-card__button" type="button">
    <svg viewBox="0 0 19 19" width="19" height="19">
    </svg>
    <span>Play</span>
  </Link>
);

export default PlayMovieButton;
