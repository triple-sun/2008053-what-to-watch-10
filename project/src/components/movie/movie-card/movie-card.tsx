import { Link } from 'react-router-dom';
import TMovie from '../../../types/movie';

type MovieCardProps = {
  movie: TMovie
  handleMouseEvent: (id: string | null) => void;
}

const MovieCardComponent = ({movie, handleMouseEvent}: MovieCardProps) => {
  const handleMouseEnter = () => handleMouseEvent(movie.id);
  const handleMouseLeave = () => handleMouseEvent(null);

  return (
    <article className="small-film-card catalog__films-card">
      <Link to={`/films/${movie.id}/`} className="small-film-card__link" >
        <div className="small-film-card__image" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <img src={movie.previewImage} alt={movie.name} width="280" height="175" />
        </div>
        <h3 className="small-film-card__title">{movie.name}</h3>
      </Link>
    </article>
  );};

export default MovieCardComponent;
