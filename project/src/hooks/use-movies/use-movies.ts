import { MovieList } from '../../const/enums';
import { getSimilarMovies } from '../../store/current-movie/current-movie-selectors';
import { getMainPageState } from '../../store/main-page/main-page-selectors';
import { getFavorites } from '../../store/user/user-selectors';
import { filterMoviesByGenre } from '../../utils/utils';
import useAppSelector from '../use-app-selector/use-app-selector';

const useMovies = (movieList: MovieList) => {
  const {data: {movies}, selectedGenre} = useAppSelector(getMainPageState);
  const filteredMovies = filterMoviesByGenre(movies, selectedGenre);

  const movieListSelector = {
    [MovieList.MainPage]: filteredMovies,
    [MovieList.MoviePage]: useAppSelector(getSimilarMovies),
    [MovieList.MyListPage]: useAppSelector(getFavorites),
  };

  return movieListSelector[movieList] ?? [];
};

export default useMovies;

