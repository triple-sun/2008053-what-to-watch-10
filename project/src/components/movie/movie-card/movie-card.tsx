import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute, ComponentTestID, ElementTestID } from '../../../const/enums';
import TMovie from '../../../types/movie';
import MovieCardPlayer from './movie-card-player/movie-card-player';

type MovieCardProps = {
  movie: TMovie;
  activeMovieId: number | null;
  handleMovieMouseOver: (id: number | null) => void;
}

const MovieCard = ({movie, activeMovieId, handleMovieMouseOver}: MovieCardProps) => {
  const isPlaying = movie.id === activeMovieId;

  const onMouseEnter = () => handleMovieMouseOver(movie.id);
  const onMouseLeave = () => handleMovieMouseOver(null);

  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} data-testid={ComponentTestID.MovieCard}>
      <Link to={`${AppRoute.Movies}${movie.id}`} className="small-film-card__link" data-testid={ElementTestID.MovieCardLink}>
        <div className="small-film-card__image">
          {!isPlaying
            ? <img src={movie.previewImage} alt={movie.name} width="280" height="175" />
            : <MovieCardPlayer movie={movie} isPlaying={isPlaying} isPreview />}
        </div>
        <h3 className="small-film-card__title">
          {movie.name}
        </h3>
      </Link>
    </article>
  );};

export default React.memo(MovieCard);
