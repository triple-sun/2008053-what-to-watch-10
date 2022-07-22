import { Link, useNavigate } from 'react-router-dom';
import THandlePageChange from '../../../types/page-change';
import { MovieCardProps } from '../../../types/props';

type MovieCardComponentProps = MovieCardProps & THandlePageChange & {
  activePlayerId: number
}

const MovieCardComponent = ({movie, playerId, activePlayerId, renderPlayer, handleMouseEvent, handlePageChange, isMuted, isPreview}: MovieCardComponentProps) => {
  const navigate = useNavigate();
  const isPlaying = playerId === activePlayerId;

  const onMouseEnter = () => handleMouseEvent(playerId);
  const onMouseLeave = () => handleMouseEvent(null);

  const onMovieLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (handlePageChange) {
      handlePageChange();
    }
    navigate(`/films/${movie.id}/`);
  };

  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <Link to={`/films/${movie.id}/`} className="small-film-card__link" onClick={onMovieLinkClick}>
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
