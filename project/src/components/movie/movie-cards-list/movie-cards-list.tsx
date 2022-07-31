import { useCallback, useState } from 'react';
import { Genre } from '../../../const/enums';
import useAppSelector from '../../../hooks/use-app-selector/use-app-selector';
import TMovie from '../../../types/movie';
import { getSelectedGenre } from '../../../utils/selectors/selectors';
import ShowMoreButton from '../../show-more-button/show-more-button';
import MovieCardComponent from '../movie-card/movie-card';

const MovieCardsList = ({movies, countPerStep, isMain = false}: {movies: TMovie[], countPerStep: number, isMain?: boolean}) => {
  const selectedGenre = useAppSelector(getSelectedGenre);
  const filteredMovies = selectedGenre === Genre.AllGenres ? movies : movies.filter((movie: TMovie) => movie.genre === selectedGenre);

  const [activeMovieId, setActiveMovieId] = useState<null | number>(null);
  const [renderedMovieCount, setRenderedMovieCount] = useState(countPerStep);


  const handleMouseEvent = useCallback(
    (id: number | null) => id === activeMovieId ? null : setActiveMovieId(id),
    [activeMovieId],
  );


  const handleShowMoreButtonClick = useCallback(
    (movieCount: number) => setRenderedMovieCount(() => Math.min(renderedMovieCount + movieCount, filteredMovies.length)),
    [filteredMovies.length, renderedMovieCount],
  );

  return (
    <>
      <div className="catalog__films-list">
        {filteredMovies.slice(0, renderedMovieCount).map(
          (movie: TMovie) => <MovieCardComponent key={`${movie.id}-${movie.name}`} movie={movie} activeMovieId={activeMovieId} handleMouseEvent={handleMouseEvent} />
        )}
      </div>
      {(filteredMovies.length <= renderedMovieCount) || !isMain
        ? null
        : <ShowMoreButton totalMovieCount={filteredMovies.length} renderedMoviesCount={renderedMovieCount} handleShowMoreButtonClick={handleShowMoreButtonClick} />}
    </>
  );};

export default MovieCardsList;
