import RatingElement from '../../components/add-review/rating-element/rating-element';
import ReviewBreadcrumbs from '../../components/add-review/review-breadcrumbs/review-breadcrumbs';
import ReviewSubmitButton from '../../components/add-review/review-submit-button/review-submit-button';
import ReviewTextarea from '../../components/add-review/review-textarea/review-textarea';
import HeaderElement from '../../components/common/header-element/header-element';
import LogoElement from '../../components/common/logo-element/logo-element';
import UserBlock from '../../components/common/user-block/user-block';
import WTWElement from '../../components/common/wtw-element/wtw-element';
import MovieBackground from '../../components/movie/movie-images/movie-background/movie-background';
import MoviePoster from '../../components/movie/movie-images/movie-poster/movie-poster';
import { RatingValues } from '../../const/const';
import { ComponentTestID, PageTestID, PosterSize } from '../../const/enums';
import useAddReview from '../../hooks/use-add-review/use-add-review';
import useCurrentMovie from '../../hooks/use-current-movie/use-current-movie';
import LoadingPage from '../loading-page/loading-page';

const AddReviewPage = () => {
  const {movie} = useCurrentMovie();
  const {isDisabled, handleReviewChange, handleReviewSubmit} = useAddReview();

  return !movie
    ? <LoadingPage />
    : (
      <section className="film-card film-card--full" data-testid={PageTestID.AddReviewPage}>
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
        <div className="add-review" data-testid={ComponentTestID.AddReviewForm}>
          <form action="" className="add-review__form">
            <div className="rating">
              <div className="rating__stars">
                {RatingValues.map((value) => <RatingElement key={value} rating={value} handleReviewChange={handleReviewChange} isDisabled={isDisabled.form}/>)}
              </div>
            </div>
            <div className="add-review__text">
              <ReviewTextarea handleReviewChange={handleReviewChange} isDisabled={isDisabled.form}/>
              <div className="add-review__submit">
                <ReviewSubmitButton handleReviewSubmit={handleReviewSubmit} isDisabled={isDisabled.button}/>
              </div>
            </div>
          </form>
        </div>
      </section>

    );};

export default AddReviewPage;
