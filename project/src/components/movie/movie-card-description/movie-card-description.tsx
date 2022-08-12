import React from 'react';
import { PropsWithChildren } from 'react';
import TMovie from '../../../types/movie';

const MovieCardDescription = ({movie, children}: PropsWithChildren<{movie: TMovie}>) => (
  <div className="film-card__desc">
    <h2 className="film-card__title">{movie.name}</h2>
    <p className="film-card__meta">
      <span className="film-card__genre">{movie.genre}</span>
      <span className="film-card__year">{movie.released}</span>
    </p>
    {children}
  </div>
);

export default React.memo(MovieCardDescription);
