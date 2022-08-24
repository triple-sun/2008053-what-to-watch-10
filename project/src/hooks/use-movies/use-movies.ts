import { useCallback, useEffect, useState } from 'react';
import { MOVIE_CARD_MAIN_COUNT } from '../../const/const';
import { MovieList } from '../../const/enums';
import { getMainPageState } from '../../store/main-page/main-page-selectors';
import { filterMoviesByGenre, getMovieListLength, getMovieListTestId } from '../../utils/utils';
import useAppSelector from '../use-app-selector/use-app-selector';
import { getSimilarMovies } from '../../store/current-movie/current-movie-selectors';
import { getFavorites } from '../../store/user/user-selectors';
import useAppDispatch from '../use-app-dispatch/use-app-dispatch';
import { fetchAllMoviesAction } from '../../store/main-page/main-page-api-actions';

const useMovies = (movieList: MovieList) => {
  const {data: {movies: allMovies, promo}, selectedGenre} = useAppSelector(getMainPageState);

  const {data: favorites} = useAppSelector(getFavorites);

  const [activeMovieId, setActiveMovieId] = useState<null | number>(null);
  const [renderedMovieCount, setRenderedMovieCount] = useState(getMovieListLength(movieList, favorites));

  const movieListSelector = {
    [MovieList.MainPage]: filterMoviesByGenre(allMovies, selectedGenre),
    [MovieList.MoviePage]: useAppSelector(getSimilarMovies).data,
    [MovieList.MyListPage]: favorites,
  };

  const movies = movieListSelector[movieList];
  const testId = getMovieListTestId(movieList);

  const moviesToRender = movies.slice(0, renderedMovieCount);
  const hasShowMoreButton = movieList === MovieList.MainPage && movies.length > renderedMovieCount;
  const moviesToLoadCount = Math.min((movies.length - renderedMovieCount), MOVIE_CARD_MAIN_COUNT);

  const dispatch = useAppDispatch();

  const handleShowMoreButtonClick = useCallback(
    (count: number) => {
      setRenderedMovieCount(() => Math.min(renderedMovieCount + count, allMovies.length));
    },
    [allMovies, renderedMovieCount],
  );

  const handleMovieMouseOver = useCallback(
    (movieId: number | null) => setActiveMovieId(movieId),
    [],
  );

  useEffect(
    () => {
      if (!allMovies) {
        dispatch(fetchAllMoviesAction());
      }
    }
  );

  return {
    promo,
    movies,
    testId,
    activeMovieId,
    moviesToRender,
    renderedMovieCount,
    moviesToLoadCount,
    hasShowMoreButton,
    handleMovieMouseOver,
    handleShowMoreButtonClick
  };
};

export default useMovies;

