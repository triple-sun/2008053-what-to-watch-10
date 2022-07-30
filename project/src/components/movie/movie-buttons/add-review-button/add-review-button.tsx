import { Link } from 'react-router-dom';
import TMovie from '../../../../types/movie';

const AddReviewButton = ({id}: TMovie) => <Link to={`/films/${id}/review`} className="btn film-card__button">Add review</Link>;

export default AddReviewButton;
