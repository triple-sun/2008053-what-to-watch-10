import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import MoviePlayerFull from '../../components/movie/movie-player/movie-player-full/movie-player-full';
import { AppRoute } from '../../const/enums';
import useAppDispatch from '../../hooks/use-app-dispatch/use-app-dispatch';
import useAppSelector from '../../hooks/use-app-selector/use-app-selector';
import { fetchMovieAction } from '../../store/movie/movie-api-actions';
import { getMovieState } from '../../store/movie/movie-selectors';
import { getMovies } from '../../store/main-page/main-page-selectors';
import { checkId } from '../../utils/utils';
import Loading from '../loading/loading';

const MoviePlayerPage = () => {
  const id = Number(useParams().id);

  const {data: {movie}, isLoading} = useAppSelector(getMovieState);

  const movies = useAppSelector(getMovies);
  const isIdOk = checkId(movies, id);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id !== movie?.id) {
      dispatch(fetchMovieAction(id));
    }
  },[dispatch, id, movie?.id]
  );

  if (!isIdOk) {
    return <Navigate to={AppRoute.NotFound} />;

  }
  if (isLoading || !movie) {
    return <Loading />;
  }

  return (
    <div className="player">
      <MoviePlayerFull {...movie} />
    </div>
  );


};

export default MoviePlayerPage;

