import TMovie from '../../../../types/movie';

const MovieBackgroundElement = ({name, backgroundImage}: TMovie) => (
  <div className="film-card__bg">
    <img src={backgroundImage} alt={name} />
  </div>
);

export default MovieBackgroundElement;
