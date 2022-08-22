import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppRoute } from '../../const/enums';
import { fetchCurrentMovieAction, fetchReviewsAction, fetchSimilarMoviesAction } from '../../store/current-movie/current-movie-api-actions';
import { getCurrentMovie, getReviews, getSimilarMovies } from '../../store/current-movie/current-movie-selectors';
import { getMovies } from '../../store/main-page/main-page-selectors';
import { checkId } from '../../utils/utils';
import useAppDispatch from '../use-app-dispatch/use-app-dispatch';
import useAppSelector from '../use-app-selector/use-app-selector';

const useCurrentMovie = () => {
  const id = Number(useParams().id);

  const movie = useAppSelector(getCurrentMovie);
  const movies = useAppSelector(getMovies);

  const {data: similarMovies, isLoaded: areSimilarMoviesLoaded} = useAppSelector(getSimilarMovies);
  const {data: reviews, isLoaded: areReviewsLoaded} = useAppSelector(getReviews);

  const isIdCorrect = checkId(movies, id);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isIdCorrect) {
      navigate(AppRoute.NotFound);
    }
    if (!movie || id !== movie.id) {
      dispatch(fetchCurrentMovieAction(id));
      dispatch(fetchSimilarMoviesAction(id));
      dispatch(fetchReviewsAction(id));
    }
  }, [dispatch, id, isIdCorrect, movie, navigate]);

  useEffect(() => {
    if (!areSimilarMoviesLoaded) {
      dispatch(fetchSimilarMoviesAction(id));
    }
    if (!reviews || !areReviewsLoaded) {
      dispatch(fetchReviewsAction(id));
    }
  }, [areReviewsLoaded, areSimilarMoviesLoaded, dispatch, id, reviews]);

  return {
    movie,
    reviews,
    similarMovies
  };
};

export default useCurrentMovie;
