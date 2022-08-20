import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { AppRoute, ComponentTestID, PosterSize } from '../../../const/enums';
import useAppDispatch from '../../../hooks/use-app-dispatch/use-app-dispatch';
import useAppSelector from '../../../hooks/use-app-selector/use-app-selector';
import LoadingPage from '../../../pages/loading-page/loading-page';
import { fetchCurrentMovieAction } from '../../../store/current-movie/current-movie-api-actions';
import { getCurrentMovieState } from '../../../store/current-movie/current-movie-selectors';
import { getMovies } from '../../../store/main-page/main-page-selectors';
import { checkId } from '../../../utils/utils';
import HeaderElement from '../../common/header-element/header-element';
import LogoElement from '../../common/logo-element/logo-element';
import UserBlock from '../../common/user-block/user-block';
import WTWElement from '../../common/wtw-element/wtw-element';
import MovieBackground from '../../movie/movie-images/movie-background/movie-background';
import MoviePoster from '../../movie/movie-images/movie-poster/movie-poster';
import ReviewBreadcrumbs from '../review-breadcrumbs/review-breadcrumbs';

const AddReviewHeader = () => {
  const id = Number(useParams().id);

  const {data: {movie}, isLoading} = useAppSelector(getCurrentMovieState);

  const movies = useAppSelector(getMovies);
  const isIdCorrect = checkId(movies, id);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!movie || id !== movie.id) {
      dispatch(fetchCurrentMovieAction(id));
    }
  },
  [dispatch, id, movie]
  );

  if (!isIdCorrect) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  if (!movie || isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="film-card__header" data-testid={ComponentTestID.AddReviewHeader}>
      <MovieBackground movie={movie} />
      <WTWElement />
      <HeaderElement>
        <LogoElement />
        <ReviewBreadcrumbs {...movie} />
        <UserBlock />
      </HeaderElement>
      <MoviePoster {...movie} size={PosterSize.Small} />
    </div>
  );
};

export default AddReviewHeader;
