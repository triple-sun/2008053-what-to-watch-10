import { ChangeEvent, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import ReviewForm from '../../components/review/review-form/review-form';
import LogoElement from '../../components/common/logo-element/logo-element';
import UserBlock from '../../components/common/user-block-element/user-block-element';
import { AppRoute, PosterSize } from '../../const/enums';
import mockMovies from '../../mocks/movies';
import MovieBackgroundElement from '../../components/movie/movie-images/movie-background/movie-card-bg';
import MoviePosterElement from '../../components/movie/movie-images/movie-poster/movie-poster';
import ReviewBreadcrumbs from '../../components/review/review-breadcrumbs/review-breadcrumbs';
import WTWElement from '../../components/common/wtw-element/wtw-element';
import HeaderElement from '../../components/common/header-element/header-element';

type ReviewState = {
  rating: string;
  reviewText: string;
}

const AddReviewPage = () => {
  const [review, setReview] = useState<ReviewState>({rating: '', reviewText: ''});
  const {id} = useParams();

  const currentMovie = mockMovies.find((movie) => movie.id === id);

  const onReviewChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setReview({...review,[e.target.name]: e.target.value});

  if (!currentMovie) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <MovieBackgroundElement {...currentMovie} />
        <WTWElement />
        <HeaderElement>
          <LogoElement />
          <ReviewBreadcrumbs {...currentMovie} />
          <UserBlock />
        </HeaderElement>
        <MoviePosterElement {...currentMovie} size={PosterSize.Small} />
      </div>
      <ReviewForm onChange={onReviewChange} />
    </section>
  );
};

export default AddReviewPage;
