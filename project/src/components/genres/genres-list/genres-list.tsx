import { useCallback, useEffect } from 'react';
import { Genre } from '../../../const/enums';
import useAppDispatch from '../../../hooks/use-app-dispatch/use-app-dispatch';
import useAppSelector from '../../../hooks/use-app-selector/use-app-selector';
import { changeGenre, resetGenre } from '../../../store/main-page-actions';
import { getMovies, getSelectedGenre } from '../../../utils/selectors/selectors';
import GenreElement from '../genre/genre';

const GenresList = () => {
  const movies = useAppSelector(getMovies);
  const selectedGenre = useAppSelector(getSelectedGenre);
  const dispatch = useAppDispatch();

  const currentGenres = [Genre.AllGenres, ...new Set(movies.map((movie) => movie.genre as Genre))];

  const handleGenreClick = useCallback(
    (genre: Genre) => {
      dispatch(changeGenre(genre));},
    [dispatch]
  );

  useEffect(() => {
    dispatch(resetGenre());
  },
  [dispatch]);

  return (
    <ul className="catalog__genres-list">
      {currentGenres.map((genre) => <GenreElement key={genre} genre={genre} selectedGenre={selectedGenre} handleGenreClick={handleGenreClick}/>)}
    </ul>
  );
};

export default GenresList;

