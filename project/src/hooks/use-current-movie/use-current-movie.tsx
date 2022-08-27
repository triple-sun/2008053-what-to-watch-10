import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MOVIE_CARD_SIMILAR_COUNT } from '../../const/const';
import { AppRoute } from '../../const/enums';
import { fetchCurrentMovieDataAction } from '../../store/current-movie/current-movie-api-actions';
import { getCurrentMovie, getIsMovieLoaded, getReviews, getSimilarMovies } from '../../store/current-movie/current-movie-selectors';
import { getMovies } from '../../store/main-page/main-page-selectors';
import { checkId } from '../../utils/utils';
import useAppDispatch from '../use-app-dispatch/use-app-dispatch';
import useAppSelector from '../use-app-selector/use-app-selector';

const useCurrentMovie = () => {
  const [isLoading, setIsLoading] = useState(false);
  const id = Number(useParams().id);

  const movie = useAppSelector(getCurrentMovie);
  const movies = useAppSelector(getMovies);

  const reviews = useAppSelector(getReviews);
  const similar = useAppSelector(getSimilarMovies)
    .filter((similarMovie) => similarMovie.id !== id)
    .slice(0, MOVIE_CARD_SIMILAR_COUNT);

  const isLoaded = useAppSelector(getIsMovieLoaded);

  const isIdCorrect = checkId(movies, id);
  const isMovieCorrect = movie && movie.id === id;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isIdCorrect) {
      navigate(AppRoute.NotFound);
    }
    if (!isMovieCorrect && !isLoading) {
      setIsLoading(true);
      dispatch(fetchCurrentMovieDataAction(id));
    }
    if (isMovieCorrect){
      setIsLoading(false);
    }
  }, [dispatch, id, isIdCorrect, isLoaded, isLoading, isMovieCorrect, movie, navigate]);

  return {
    movie,
    reviews,
    similar,
    isLoading
  };
};

export default useCurrentMovie;
