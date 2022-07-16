import TMovie from '../../../../types/movie';

type PosterProps = Pick<TMovie, 'name' | 'posterImage'> & {
  isBig?: boolean;
  isSmall?: boolean;
}

const MoviePosterElement = ({name, posterImage, isBig = false, isSmall = false}: PosterProps) => (
  <div className={`film-card__poster ${isBig ? 'film-card__poster--big' : ''} ${isSmall ? 'film-card__poster--small' : ''}`}>
    <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
  </div>
);

export default MoviePosterElement;
