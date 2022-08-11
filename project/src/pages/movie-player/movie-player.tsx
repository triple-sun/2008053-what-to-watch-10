import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import MoviePlayerFull from '../../components/movie-player/movie-player-full/movie-player-full';
import { AppRoute } from '../../const/enums';
import useAppDispatch from '../../hooks/use-app-dispatch/use-app-dispatch';
import useAppSelector from '../../hooks/use-app-selector/use-app-selector';
import { fetchCurrentMovieAction } from '../../store/current-movie/current-movie-api-actions';
import { getCurrentMovieState } from '../../utils/selectors/selectors';
import Loading from '../loading/loading';

const MoviePlayerPage = () => {
  const {id} = useParams();
  const {data, isLoading} = useAppSelector(getCurrentMovieState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchCurrentMovieAction(id));
    }
  },[dispatch, id]
  );

  if (isLoading) {
    return <Loading />;
  }

  if (data) {
    return (
      <div className="player">
        <MoviePlayerFull {...data} />
      </div>
    );
  }
  return <Navigate to={AppRoute.NotFound} />;

};

export default MoviePlayerPage;

