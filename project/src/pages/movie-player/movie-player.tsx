import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import MoviePlayerFull from '../../components/movie-player/movie-player-full/movie-player-full';
import { AppRoute } from '../../const/enums';
import useAppDispatch from '../../hooks/use-app-dispatch/use-app-dispatch';
import useAppSelector from '../../hooks/use-app-selector/use-app-selector';
import { fetchCurrentMovieAction } from '../../store/movie-page/movie-page-api-actions';
import { getCurrentMovie } from '../../utils/selectors/selectors';
import Loading from '../loading/loading';

const MoviePlayerPage = () => {
  const {id} = useParams();
  const currentMovie = useAppSelector(getCurrentMovie);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchCurrentMovieAction(id));
    }
  },[dispatch, id]
  );

  if (!currentMovie.data) {
    return <Loading />;
  }

  if (currentMovie.data) {
    return (
      <div className="player">
        <MoviePlayerFull {...currentMovie.data} />
      </div>
    );
  }
  return <Navigate to={AppRoute.NotFound} />;

};

export default MoviePlayerPage;

