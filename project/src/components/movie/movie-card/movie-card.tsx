import { Link, useNavigate } from 'react-router-dom';
import THandlePageChange from '../../../types/page-change';
import { MovieCardProps } from '../../../types/props';
import VideoPlayer from '../../video-player/video-player';

type MovieCardComponentProps = MovieCardProps & THandlePageChange

const MovieCardComponent = ({movie, activeMovieId, handleMouseEvent, handlePageChange}: MovieCardComponentProps) => {
  const navigate = useNavigate();
  const isPlaying = movie.id === activeMovieId;

  const onMouseEnter = () => handleMouseEvent(movie.id);
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
            : <VideoPlayer movie={movie} isPlaying isMuted isPreview />}
        </div>
        <h3 className="small-film-card__title">
          {movie.name}
        </h3>
      </Link>
    </article>
  );};

export default MovieCardComponent;
