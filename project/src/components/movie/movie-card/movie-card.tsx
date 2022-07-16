import React from 'react';
import { Link } from 'react-router-dom';
import TListElement from '../../../types/list-element';
import TMovie from '../../../types/movie';

type MovieCardProps = TListElement<TMovie> & {
  handleMouseOver: (movie: TMovie) => void
}

const MovieCardComponent = ({value: movie, handleMouseOver}: MovieCardProps) => {
  const mouseOverHandler = (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    handleMouseOver(movie);
  };

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image" onMouseOver={mouseOverHandler}>
        <img src={movie.posterImage} alt={movie.name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`films/${movie.id}`}>{movie.name}</Link>
      </h3>
    </article>
  );};

export default MovieCardComponent;
