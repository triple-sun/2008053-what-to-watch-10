import { Link, useNavigate } from 'react-router-dom';

type MovieButtonsProps = {
  hasAddReview?: boolean;
  id: string;
  myMoviesCount: number
}

const MovieButtonsElement = ({id, myMoviesCount, hasAddReview = false}: MovieButtonsProps) => {
  const navigate = useNavigate();

  const addReviewButton = hasAddReview
    ? <Link to={`/films/${id}/review`} className="btn film-card__button">Add review</Link>
    : null;

  return (
    <div className="film-card__buttons">
      <button className="btn btn--play film-card__button" type="button" onClick={() => navigate(`/player/${id}`)}>
        <svg viewBox="0 0 19 19" width="19" height="19">
        </svg>
        <span>Play</span>
      </button>
      <button className="btn btn--list film-card__button" type="button">
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#addToMyMovies"></use>
        </svg>
        <span>My list</span>
        <span className="film-card__count">{myMoviesCount}</span>
      </button>
      {addReviewButton}
    </div>
  );
};

export default MovieButtonsElement;
