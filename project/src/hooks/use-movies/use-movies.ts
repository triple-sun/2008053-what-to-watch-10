import { useCallback, useState } from 'react';
import { MOVIE_CARD_MAIN_COUNT } from '../../const/const';
import { Genre } from '../../const/enums';
import { getMainPageState } from '../../store/main-page/main-page-selectors';
import { filterMoviesByGenre, getCurrentGenres, getMoviesToLoadCount } from '../../utils/utils';
import useAppSelector from '../use-app-selector/use-app-selector';
import { setGenre } from '../../store/main-page/main-page-actions';
import useAppDispatch from '../use-app-dispatch/use-app-dispatch';

const useMovies = () => {
  const [renderedMovieCount, setRenderedMovieCount] = useState(MOVIE_CARD_MAIN_COUNT);

  const {data: {movies: allMovies, promo}, selectedGenre} = useAppSelector(getMainPageState);

  const filteredMovies = filterMoviesByGenre(allMovies, selectedGenre);
  const currentGenres = getCurrentGenres(allMovies);

  const movies = filteredMovies.slice(0, renderedMovieCount);
  const moviesToLoadCount = getMoviesToLoadCount(filteredMovies, renderedMovieCount);

  const dispatch = useAppDispatch();

  const handleShowMoreButtonClick = useCallback(
    (count: number) => {
      setRenderedMovieCount(() => Math.min(renderedMovieCount + count, allMovies.length));
    }, [allMovies, renderedMovieCount],
  );

  const handleGenreChange = useCallback(
    (genre: Genre) => {
      dispatch(setGenre(genre));
      setRenderedMovieCount(MOVIE_CARD_MAIN_COUNT);
    }, [dispatch]
  );

  return {
    movies,
    promo,
    moviesToLoadCount,
    currentGenres,
    renderedMovieCount,
    handleGenreChange,
    handleShowMoreButtonClick
  };
};

export default useMovies;

