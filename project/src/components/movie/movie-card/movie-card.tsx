import { Link } from 'react-router-dom';
import { MovieCardProps } from '../../../types/props';


const MovieCardComponent = ({movie, playerId, activePlayerId, renderPlayer, handleMouseEvent, isMuted, isPreview}: MovieCardProps & {activePlayerId: number}) => {
  const isPlaying = playerId === activePlayerId;
  const onMouseEnter = () => handleMouseEvent(playerId);
  const onMouseLeave = () => handleMouseEvent(null);

  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <Link to={`/films/${movie.id}/`} className="small-film-card__link" >
        <div className="small-film-card__image">
          {!isPlaying
            ? <img src={movie.previewImage} alt={movie.name} width="280" height="175" />
            : renderPlayer(movie, isPlaying, isMuted, isPreview)}
        </div>
        <h3 className="small-film-card__title">
          {movie.name}
        </h3>
      </Link>
    </article>
  );};

export default MovieCardComponent;
