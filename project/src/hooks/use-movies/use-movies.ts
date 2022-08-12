import { Genre, MovieList } from '../../const/enums';
import { getMainPageState } from '../../store/main-page/main-page-selectors';
import { getSimilarMovies } from '../../store/similar-movies/similar-movies-selectors';
import { getFavorites } from '../../store/user/user-selectors';
import { filterMoviesByGenre } from '../../utils/utils';
import useAppSelector from '../use-app-selector/use-app-selector';

const useMovies = (movieList: MovieList) => {
  const {data: {movies}, selectedGenre} = useAppSelector(getMainPageState);
  const filteredMovies = selectedGenre === Genre.AllGenres ? movies : filterMoviesByGenre(movies, selectedGenre);

  const movieListSelector = {
    [MovieList.MainPage]: filteredMovies,
    [MovieList.MoviePage]: useAppSelector(getSimilarMovies),
    [MovieList.MyListPage]: useAppSelector(getFavorites),
  };

  return movieListSelector[movieList] ?? [];
};

export default useMovies;

