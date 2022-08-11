import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const/enums';
import { MovieCardProps } from '../../../types/props';
import MovieCardPlayer from '../movie-card-player';

const MovieCardComponent = ({movie, activeMovieId, handleMouseEvent}: MovieCardProps) => {
  const isPlaying = movie.id === activeMovieId;

  const onMouseEnter = () => handleMouseEvent(movie.id);
  const onMouseLeave = () => handleMouseEvent(null);

  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <Link to={`${AppRoute.Movies}${movie.id}`} className="small-film-card__link">
        <div className="small-film-card__image">
          {!isPlaying
            ? <img src={movie.previewImage} alt={movie.name} width="280" height="175" />
            : <MovieCardPlayer movie={movie} isPlaying isPreview />}
        </div>
        <h3 className="small-film-card__title">
          {movie.name}
        </h3>
      </Link>
    </article>
  );};

export default React.memo(MovieCardComponent);
