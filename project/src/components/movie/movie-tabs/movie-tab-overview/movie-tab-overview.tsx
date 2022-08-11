import React from 'react';
import TMovie from '../../../../types/movie';
import { getRatingName } from '../../../../utils/utils';

const MovieTabOverview = (movie: TMovie) => {
  const shortStarring = movie.starring.slice(0, 3).join(', ');

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{movie.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getRatingName(movie.rating)}</span>
          <span className="film-rating__count">{movie.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{movie.description}</p>

        <p className="film-card__director"><strong>Director: {movie.director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {shortStarring} and others</strong></p>
      </div>
    </>
  );};

export default React.memo(MovieTabOverview);
