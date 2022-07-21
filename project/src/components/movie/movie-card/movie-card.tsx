import { Link } from 'react-router-dom';
import { MovieCardProps } from '../../../types/props';


const MovieCardComponent = ({movie, playerId, renderPlayer, handleMouseEvent, isMuted, isPreview}: MovieCardProps) => {
  const onMouseEnter = () => handleMouseEvent(playerId);
  const onMouseLeave = () => handleMouseEvent(null);

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image" onMouseEnter={() => setTimeout(onMouseEnter, 1000)} onMouseLeave={onMouseLeave}>
        {renderPlayer(movie, playerId, isMuted, isPreview)}
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${movie.id}/`} className="small-film-card__link" >{movie.name}</Link>
      </h3>
    </article>
  );};

export default MovieCardComponent;
