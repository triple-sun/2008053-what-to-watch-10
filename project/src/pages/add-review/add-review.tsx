import { ChangeEvent, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import AddReviewComponent from '../../components/add-review/add-review';
import LogoElement from '../../components/universal/logo/logo';
import UserBlockElement from '../../components/universal/user-block/user-block';
import { AppRoute } from '../../const/enums';
import mockMovies from '../../mocks/movies';

type ReviewState = {
  reviewRating: string;
  reviewText: string;
}

const AddReviewPage = () => {
  const [review, setReview] = useState<ReviewState>({reviewRating: '', reviewText: ''});
  const {id} = useParams();

  const currentMovie = mockMovies.find((movie) => movie.id === id);

  const handleReviewRating = (e: ChangeEvent<HTMLInputElement>) => setReview({...review, reviewRating: e.target.value});
  const handleReviewType = (e: ChangeEvent<HTMLTextAreaElement>) => setReview({...review, reviewText: e.target.value});

  if (!currentMovie) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={currentMovie.backgroundImage} alt={currentMovie.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <LogoElement />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${currentMovie.id}`} className="breadcrumbs__link">{currentMovie.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a href="#review" className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <UserBlockElement />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={currentMovie.posterImage} alt={`${currentMovie.name} poster`} width="218" height="327" />
        </div>
      </div>
      <AddReviewComponent handleReviewRating={handleReviewRating} handleReviewText={handleReviewType} />

    </section>
  );
};

export default AddReviewPage;
