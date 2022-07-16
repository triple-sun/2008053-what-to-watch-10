import { Link } from 'react-router-dom';
import TListElement from '../../types/list-element';

const GenreElement = ({value: genre}: TListElement) => (
  <li className="catalog__genres-item catalog__genres-item--active">
    <Link to={`#${genre}`} className="catalog__genres-link">{genre}</Link>
  </li>
);

export default GenreElement;
