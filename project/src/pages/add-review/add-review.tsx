import React, { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import ReviewForm from '../../components/review/review-form/review-form';
import LogoElement from '../../components/common/logo-element/logo-element';
import UserBlock from '../../components/common/user-block-element/user-block-element';
import { AppRoute, PosterSize } from '../../const/enums';
import MovieBackground from '../../components/movie/movie-images/movie-background/movie-background';
import MoviePoster from '../../components/movie/movie-images/movie-poster/movie-poster';
import ReviewBreadcrumbs from '../../components/review/review-breadcrumbs/review-breadcrumbs';
import WTWElement from '../../components/common/wtw-element/wtw-element';
import HeaderElement from '../../components/common/header-element/header-element';
import { findMovieById } from '../../utils/utils';
import useAppSelector from '../../hooks/use-app-selector/use-app-selector';
import { getMovies } from '../../utils/selectors/selectors';

type ReviewState = {
  rating: string;
  reviewText: string;
}

const AddReviewPage = () => {
  const [review, setReview] = useState<ReviewState>({rating: '', reviewText: ''});
  const {id} = useParams();
  const allMovies = useAppSelector(getMovies);

  const currentMovie = findMovieById(allMovies, id);


  const handleReviewChange = ({target, value}: {target: string, value: string | number}) => setReview({...review, [target]: value});

  if (!currentMovie) {
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
      <ReviewForm handleReviewChange={handleReviewChange} />
    </section>
  );
};

export default AddReviewPage;
