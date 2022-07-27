import { PosterSize } from '../../../../const/enums';
import TMovie from '../../../../types/movie';

type PosterProps = Pick<TMovie, 'name' | 'posterImage'> & {
  size?: PosterSize.Big | PosterSize.Small;
}

const MoviePoster = ({name, posterImage, size}: PosterProps) => (
  <div className={`film-card__poster ${size ? `film-card__poster--${size}` : ''}`}>
    <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
  </div>
);

export default MoviePoster;
