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
import { checkMovie } from '../../utils/utils';
import ReviewForm from '../../components/review/review-form/review-form';
import { fetchMoviePageDataAction } from '../../store/movie-page/movie-page-api-actions';
import { getCurrentMovieState } from '../../utils/selectors/selectors';

const AddReviewPage = () => {
  const {id} = useParams();
  const {data, isLoading} = useAppSelector(getCurrentMovieState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id && checkMovie(data, id)) {
      dispatch(fetchMoviePageDataAction(id));
    }
  },
  [data, dispatch, id]
  );

  if (isLoading) {
    return <Loading />;
  }

  if (data) {
    return (
      <section className="film-card film-card--full">
        <div className="film-card__header">
          <MovieBackground movie={data} />
          <WTWElement />
          <HeaderElement>
            <LogoElement />
            <ReviewBreadcrumbs {...data} />
            <UserBlock />
          </HeaderElement>
          <MoviePoster {...data} size={PosterSize.Small} />
        </div>
        <ReviewForm movie={data} />
      </section>
    );
  }

  return <Navigate to={AppRoute.NotFound} />;

};

export default AddReviewPage;
