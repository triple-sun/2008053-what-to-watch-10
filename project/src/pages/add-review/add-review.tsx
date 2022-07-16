import { ChangeEvent, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import ReviewFormComponent from '../../components/review/review-form/review-form';
import LogoElement from '../../components/common/logo/logo';
import UserBlockElement from '../../components/common/user-block/user-block';
import { AppRoute } from '../../const/enums';
import mockMovies from '../../mocks/movies';
import MovieBackgroundElement from '../../components/movies/images/movie-background/movie-card-bg';
import MoviePosterElement from '../../components/movies/images/movie-poster/movie-poster';
import ReviewBreadcrumbsElement from '../../components/review/review-breadcrumbs/review-breadcrumbs';
import WTWElement from '../../components/common/wtw/wtw';

type ReviewState = {
  rating: string;
  reviewText: string;
}

const AddReviewPage = () => {
  const [review, setReview] = useState<ReviewState>({rating: '', reviewText: ''});
  const {id} = useParams();

  const currentMovie = mockMovies.find((movie) => movie.id === id);

  const handleReviewChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setReview({...review,[e.target.name]: e.target.value});

  if (!currentMovie) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <MovieBackgroundElement {...currentMovie} />

        <WTWElement />

        <header className="page-header">
          <LogoElement />
          <ReviewBreadcrumbsElement {...currentMovie} />
          <UserBlockElement />
        </header>

        <MoviePosterElement {...currentMovie} isSmall />

      </div>

      <ReviewFormComponent handleReviewChange={handleReviewChange} />

    </section>
  );
};

export default AddReviewPage;
