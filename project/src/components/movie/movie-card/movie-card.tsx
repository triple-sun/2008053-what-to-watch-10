import React from 'react';
import { Link } from 'react-router-dom';
import TListElement from '../../../types/list-element';
import TMovie from '../../../types/movie-data';

type TMovieCardProps = TListElement<TMovie> & {
  setActiveMovieHandle: (movie: TMovie) => void
}

const MovieCardComponent = ({value: movie, setActiveMovieHandle: onMouseOver}: TMovieCardProps): JSX.Element => {
  const movieCardMouseOverHandler = (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    onMouseOver(movie);
  };

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image" data-movie-id={movie.id} onMouseOver={movieCardMouseOverHandler}>
        <img src={movie.posterImage} alt={movie.name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`films/${movie.id}`}>{movie.name}</Link>
      </h3>
    </article>
  );};

export default MovieCardComponent;
