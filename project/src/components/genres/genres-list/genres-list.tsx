import { useCallback, useEffect } from 'react';
import { Genre } from '../../../const/enums';
import useAppDispatch from '../../../hooks/use-app-dispatch/use-app-dispatch';
import useAppSelector from '../../../hooks/use-app-selector/use-app-selector';
import { resetGenre, setGenre } from '../../../store/main-page/main-page-actions';
import { getMovies, getSelectedGenre } from '../../../utils/selectors/selectors';
import GenreElement from '../genre/genre';

const GenresList = () => {
  const movies = useAppSelector(getMovies);
  const selectedGenre = useAppSelector(getSelectedGenre);
  const dispatch = useAppDispatch();

  const currentGenres = [Genre.AllGenres, ...new Set(movies.map((movie) => movie.genre))];

  const handleGenreClick = useCallback(
    (genre: Genre) => {
      dispatch(setGenre(genre));},
    [dispatch]
  );

  useEffect(() => {
    dispatch(resetGenre());
  },
  [dispatch]);

  return (
    <ul className="catalog__genres-list">
      {currentGenres.map((genre) => <GenreElement key={genre} genre={genre} selectedGenre={selectedGenre} handleGenreClick={handleGenreClick} />)}
    </ul>
  );
};

export default GenresList;

