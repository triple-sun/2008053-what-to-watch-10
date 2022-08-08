import React from 'react';
import { Link } from 'react-router-dom';
import TMovie from '../../../../types/movie';
import MoviePlayIcon from '../../movie-images/movie-icons/movie-play-icon/movie-play-icon';

const PlayMovieButton = ({id}: TMovie) => (
  <Link to={`/player/${id}`} className="btn btn--play film-card__button" type="button">
    <svg viewBox="0 0 19 19" width="19" height="19">
      <MoviePlayIcon />
    </svg>
    <span>Play</span>
  </Link>
);

export default React.memo(PlayMovieButton);
