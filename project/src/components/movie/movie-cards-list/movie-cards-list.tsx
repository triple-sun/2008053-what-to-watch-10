import React, { PropsWithChildren } from 'react';
import useMovieCard from '../../../hooks/use-movie-card/use-movie-card';
import TMovie from '../../../types/movie';
import MovieCard from '../movie-card/movie-card';

type MovieCardsListProps = {
  movies: TMovie[];
  testId: string;
}

const MovieCardsList = ({movies, children, testId}: PropsWithChildren<MovieCardsListProps>) => {
  const {activeMovieId, handleMovieMouseOver} = useMovieCard();

  return (
    <>
      <div className="catalog__films-list" data-testid={testId}>
        {movies.map(
          (movie: TMovie) => <MovieCard key={`${movie.id}-${movie.name}`} movie={movie} activeMovieId={activeMovieId} handleMovieMouseOver={handleMovieMouseOver} />
        )}
      </div>
      {children}
    </>
  );
};

export default React.memo(MovieCardsList);
