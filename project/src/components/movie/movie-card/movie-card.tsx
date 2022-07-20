import { Link } from 'react-router-dom';
import TMovie from '../../../types/movie';
import { MovieCardProps } from '../../../types/props';

const MovieCardComponent = ({movie, id, renderPlayer, handleMouseEvent}: MovieCardProps & {movie: TMovie, id: number}) => {
  const onMouseEnter = () => handleMouseEvent(id);
  const onMouseLeave = () => handleMouseEvent(null);

  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className="small-film-card__image">
        {renderPlayer(movie, id)}
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${movie.id}/`} className="small-film-card__link" >{movie.name}</Link>
      </h3>
    </article>
  );};

export default MovieCardComponent;
