import { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import AddReviewComponent from '../../components/add-review/add-review';
import LogoElement from '../../components/universal/logo/logo';
import UserBlockElement from '../../components/universal/user-block/user-block';
import { AppRoute } from '../../const/enums';
import mockMovies from '../../mocks/movies';
import TMovie from '../../types/movie-data';

type TAddReviewState = {
  reviewRating: string;
  reviewText: string;
}

const AddReviewPage = (): JSX.Element => {
  const [review, setReview] = useState<TAddReviewState>({reviewRating: '', reviewText: ''});
  const {reviewRating, reviewText} = review;
  const {id} = useParams();

  const movie = mockMovies.find((mov) => mov.id === id as string) as TMovie;


  const setRatingHandle = (rating: string) => setReview({reviewRating: rating, reviewText: reviewText});
  const typeTextHandle = (text: string) => setReview({reviewRating: reviewRating, reviewText: text});

  if (!id) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={movie.backgroundImage} alt={movie.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <LogoElement />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href={`/films/${movie.id}`} className="breadcrumbs__link">{movie.name}</a>
              </li>
              <li className="breadcrumbs__item">
                <a href="#review" className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <UserBlockElement />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={movie.posterImage} alt={`${movie.name} poster`} width="218" height="327" />
        </div>
      </div>
      <AddReviewComponent setRatingHandle={setRatingHandle} typeTextHandle={typeTextHandle} />

    </section>
  );
};

export default AddReviewPage;
