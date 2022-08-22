import React from 'react';
import { MovieList } from '../../../const/enums';
import useMovies from '../../../hooks/use-movies/use-movies';
import TMovie from '../../../types/movie';
import ShowMoreButton from '../../show-more-button/show-more-button';
import MovieCard from '../movie-card/movie-card';

const MovieCardsList = ({movieList}: {movieList: MovieList}) => {
  const {
    testId,
    activeMovieId,
    moviesToRender,
    hasShowMoreButton,
    handleMovieMouseOver,
    handleShowMoreButtonClick
  } = useMovies(movieList);

  return (
    <>
      <div className="catalog__films-list" data-testid={testId}>
        {moviesToRender.map(
          (movie: TMovie) => <MovieCard key={`${movie.id}-${movie.name}`} movie={movie} activeMovieId={activeMovieId} handleMouseEvent={handleMovieMouseOver} />
        )}
      </div>
      {hasShowMoreButton
        ? <ShowMoreButton handleShowMoreButtonClick={handleShowMoreButtonClick} />
        : null}
    </>
  );
};

export default React.memo(MovieCardsList);
