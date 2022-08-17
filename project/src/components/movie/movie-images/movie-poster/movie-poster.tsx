import React from 'react';
import { MOVIE_POSTER_CLASS, MOVIE_POSTER_SIZE_CLASS_PREFIX } from '../../../../const/const';
import { ElementTestID, PosterSize } from '../../../../const/enums';
import TMovie from '../../../../types/movie';

type PosterProps = Pick<TMovie, 'name' | 'posterImage'> & {
  size?: PosterSize;
}

const MoviePoster = ({name, posterImage, size}: PosterProps) => (
  <div className={size ? `${MOVIE_POSTER_SIZE_CLASS_PREFIX}${size}` : MOVIE_POSTER_CLASS} data-testid={ElementTestID.Poster}>
    <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
  </div>
);

export default React.memo(MoviePoster);
