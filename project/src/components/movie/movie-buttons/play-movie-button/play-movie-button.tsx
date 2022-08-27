import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute, ComponentText } from '../../../../const/enums';
import MoviePlayIcon from '../../movie-images/movie-icons/movie-play-icon/movie-play-icon';

const PlayButton = ({id}: {id: number}) => (
  <Link to={`${AppRoute.Player}${id}`} className="btn btn--play film-card__button" type="button">
    <svg viewBox="0 0 19 19" width="19" height="19">
      <MoviePlayIcon />
    </svg>
    <span>{ComponentText.Play}</span>
  </Link>
);

export default React.memo(PlayButton);
