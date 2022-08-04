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
import { getCurrentMovie } from '../../utils/selectors/selectors';
import useAppDispatch from '../../hooks/use-app-dispatch/use-app-dispatch';
import Loading from '../loading/loading';
import { fetchCurrentMovieAction } from '../../store/movie-page/movie-page-api-actions';
import { checkMovie } from '../../utils/utils';
import ReviewForm from '../../components/review/review-form/review-form';

const AddReviewPage = () => {
  const {id} = useParams();
  const currentMovie = useAppSelector(getCurrentMovie);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id && checkMovie(currentMovie, id)) {
      dispatch(fetchCurrentMovieAction(id));
    }
  },
  [currentMovie, dispatch, id]
  );

  if (!currentMovie) {
    return <Loading />;
  }

  if (!id) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <MovieBackground movie={currentMovie} />
        <WTWElement />
        <HeaderElement>
          <LogoElement />
          <ReviewBreadcrumbs {...currentMovie} />
          <UserBlock />
        </HeaderElement>
        <MoviePoster {...currentMovie} size={PosterSize.Small} />
      </div>
      <ReviewForm movie={currentMovie} />
    </section>
  );


};

export default AddReviewPage;
