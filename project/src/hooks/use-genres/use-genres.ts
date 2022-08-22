import { useCallback, useEffect } from 'react';
import { Genre } from '../../const/enums';
import { setGenre } from '../../store/main-page/main-page-actions';
import { getMovies } from '../../store/main-page/main-page-selectors';
import useAppDispatch from '../use-app-dispatch/use-app-dispatch';
import useAppSelector from '../use-app-selector/use-app-selector';

const useGenres = () => {
  const movies = useAppSelector(getMovies);

  const currentGenres = [Genre.AllGenres, ...new Set(movies.map((movie) => movie.genre))];

  const dispatch = useAppDispatch();

  const handleGenreChange = useCallback(
    (genre: Genre) => {
      dispatch(setGenre(genre));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(setGenre(Genre.AllGenres));
  },[dispatch]
  );

  return {
    currentGenres,
    handleGenreChange
  };
};

export default useGenres;

