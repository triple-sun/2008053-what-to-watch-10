import { Genre } from '../../const/enums';
import { getMovies } from '../../store/main-page/main-page-selectors';
import useAppSelector from '../use-app-selector/use-app-selector';

const useGenres = () => {
  const movies = useAppSelector(getMovies);

  const currentGenres = [Genre.AllGenres, ...new Set(movies.map((movie) => movie.genre))];

  return {
    currentGenres
  };
};

export default useGenres;

