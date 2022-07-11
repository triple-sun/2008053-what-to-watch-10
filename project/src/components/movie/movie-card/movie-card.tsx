import { Link } from 'react-router-dom';
import TListElement from '../../../types/list-element';
import TMovie from '../../../types/movie-data';

const MovieCardComponent = ({value: movie}: TListElement<TMovie>): JSX.Element => (
  <article className="small-film-card catalog__films-card">
    <div className="small-film-card__image">
      <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt={movie.title} width="280" height="175" />
    </div>
    <h3 className="small-film-card__title">
      <Link className="small-film-card__link" to={`films/${movie.id}`}>{movie.title}</Link>
    </h3>
  </article>
);

export default MovieCardComponent;
