import { Link } from 'react-router-dom';
import { MovieCardProps } from '../../../types/props';
import VideoPlayer from '../../video-player/video-player';

type MovieCardComponentProps = MovieCardProps

const MovieCardComponent = ({movie, activeMovieId, handleMouseEvent}: MovieCardComponentProps) => {
  const isPlaying = movie.id === activeMovieId;

  const onMouseEnter = () => handleMouseEvent(movie.id);
  const onMouseLeave = () => handleMouseEvent(null);

  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <Link to={`/films/${movie.id}/`} className="small-film-card__link">
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
