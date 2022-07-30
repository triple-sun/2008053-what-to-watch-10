import React, { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import ReviewForm from '../../components/review/review-form/review-form';
import LogoElement from '../../components/common/logo-element/logo-element';
import UserBlock from '../../components/common/user-block/user-block';
import { AppRoute, PosterSize } from '../../const/enums';
import MovieBackground from '../../components/movie/movie-images/movie-background/movie-background';
import MoviePoster from '../../components/movie/movie-images/movie-poster/movie-poster';
import ReviewBreadcrumbs from '../../components/review/review-breadcrumbs/review-breadcrumbs';
import WTWElement from '../../components/common/wtw-element/wtw-element';
import HeaderElement from '../../components/common/header-element/header-element';
import { findMovieById } from '../../utils/utils';
import useAppSelector from '../../hooks/use-app-selector/use-app-selector';
import { getMovies } from '../../utils/selectors/selectors';
import { addReviewAction } from '../../store/review/review-api-actions';
import useAppDispatch from '../../hooks/use-app-dispatch/use-app-dispatch';
import { TReviewState } from '../../types/review-state';
import Loading from '../loading/loading';

const AddReviewPage = () => {
  const {id} = useParams();
  const movies = useAppSelector(getMovies);
  const currentMovie = findMovieById(movies, id);

  const [review, setReview] = useState<TReviewState>({rating: 0, comment: null});
  const {rating, comment} = review;

  const dispatch = useAppDispatch();


  const onSubmitClick = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentMovie) {
      handleReviewSubmit({
        rating: rating,
        comment: comment,
        id: currentMovie.id,
      });
    }
  };

  const handleReviewChange = ({target, value}: {target: string, value: string | number}) => setReview({...review, [target]: value});

  const handleReviewSubmit = (reviewData: TReviewState & {id: number}) => dispatch(addReviewAction(reviewData));

  if (!currentMovie) {
    return <Loading />;
  }

  if (currentMovie) {
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
        <ReviewForm handleReviewChange={handleReviewChange} onSubmitClick={onSubmitClick}/>
      </section>
    );
  }

  return <Navigate to={AppRoute.NotFound} />;
};

export default AddReviewPage;
