import { useCallback, useEffect } from 'react';
import { Genre } from '../../const/enums';
import { setGenre } from '../../store/main-page/main-page-actions';
import { getMovies } from '../../store/main-page/main-page-selectors';
import { getCurrentGenres } from '../../utils/utils';
import useAppDispatch from '../use-app-dispatch/use-app-dispatch';
import useAppSelector from '../use-app-selector/use-app-selector';

const useGenres = () => {
  const movies = useAppSelector(getMovies);

  const currentGenres = getCurrentGenres(movies);

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

