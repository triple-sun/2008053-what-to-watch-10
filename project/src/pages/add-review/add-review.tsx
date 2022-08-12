import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import LogoElement from '../../components/common/logo-element/logo-element';
import UserBlock from '../../components/common/user-block/user-block';
import { AppRoute, PosterSize } from '../../const/enums';
import MovieBackground from '../../components/movie/movie-images/movie-background/movie-background';
import MoviePoster from '../../components/movie/movie-images/movie-poster/movie-poster';
import ReviewBreadcrumbs from '../../components/review/review-breadcrumbs/review-breadcrumbs';
import WTWElement from '../../components/common/wtw-element/wtw-element';
import HeaderElement from '../../components/common/header-element/header-element';
import useAppSelector from '../../hooks/use-app-selector/use-app-selector';
import useAppDispatch from '../../hooks/use-app-dispatch/use-app-dispatch';
import Loading from '../loading/loading';
import ReviewForm from '../../components/review/review-form/review-form';
import { fetchSimilarMoviesAction } from '../../store/similar-movies/similar-movies-api-actions';
import { getMovieState } from '../../store/movie/movie-selectors';
import { getMovies } from '../../store/main-page/main-page-selectors';
import { checkId } from '../../utils/utils';

const AddReviewPage = () => {
  const id = Number(useParams().id);

  const {data: {movie}, isLoading} = useAppSelector(getMovieState);

  const movies = useAppSelector(getMovies);
  const isIdOk = checkId(movies, id);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!movie || id !== movie.id) {
      dispatch(fetchSimilarMoviesAction(id));
    }
  },
  [dispatch, id, movie]
  );

  if (!isIdOk) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  if (!movie || isLoading) {
    return <Loading />;
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <MovieBackground movie={movie} />
        <WTWElement />
        <HeaderElement>
          <LogoElement />
          <ReviewBreadcrumbs {...movie} />
          <UserBlock />
        </HeaderElement>
        <MoviePoster {...movie} size={PosterSize.Small} />
      </div>
      <ReviewForm movie={movie} />
    </section>
  );
};

export default AddReviewPage;
