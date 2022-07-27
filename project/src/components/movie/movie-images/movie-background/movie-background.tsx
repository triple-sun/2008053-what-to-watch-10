import TMovie from '../../../../types/movie';

const MovieBackground = ({movie}: {movie: TMovie}) => (
  <div className="film-card__bg">
    <img src={movie.backgroundImage} alt={movie.name} />
  </div>
);

export default MovieBackground;
