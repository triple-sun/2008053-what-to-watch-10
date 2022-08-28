import ReviewBreadcrumbs from '../../components/review-breadcrumbs/review-breadcrumbs';
import HeaderElement from '../../components/common/header-element/header-element';
import LogoElement from '../../components/common/logo-element/logo-element';
import UserBlock from '../../components/common/user-block/user-block';
import WTWElement from '../../components/common/wtw-element/wtw-element';
import MovieBackground from '../../components/movie/movie-images/movie-background/movie-background';
import MoviePoster from '../../components/movie/movie-images/movie-poster/movie-poster';
import { ComponentTestID, ComponentText, ElementTestID, FormParam, PageTestID, PosterSize } from '../../const/enums';
import useCurrentMovie from '../../hooks/use-current-movie/use-current-movie';
import LoadingPage from '../loading-page/loading-page';
import { useForm } from 'react-hook-form';
import { TAddReviewData } from '../../types/data';
import { addReviewAction } from '../../store/current-movie/current-movie-api-actions';
import useAppDispatch from '../../hooks/use-app-dispatch/use-app-dispatch';
import { useParams } from 'react-router-dom';
import { MAX_COMMENT_LENGTH, MIN_COMMENT_LENGTH, RatingValues, RATING_ID_PREFIX } from '../../const/const';
import { Fragment } from 'react';

const AddReviewPage = () => {
  const {movie, isLoading} = useCurrentMovie();
  const {
    register,
    handleSubmit,
    formState: {
      isValid,
      isSubmitting
    }
  } = useForm<TAddReviewData>({mode: FormParam.ValidateMode, reValidateMode: FormParam.ValidateMode});

  const id = Number(useParams().id);

  const dispatch = useAppDispatch();

  const onAddReviewSubmit = handleSubmit(async (data: TAddReviewData) => dispatch(addReviewAction({...data, id})));

  return !movie || isLoading
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
          <form action="" className="add-review__form" onSubmit={onAddReviewSubmit}>
            <div className="rating">
              <div className="rating__stars">
                {RatingValues.map((rating) => (
                  <Fragment key={rating}>
                    <input
                      {...register('rating', {required: true})}
                      className="rating__input"
                      id={`${RATING_ID_PREFIX}${rating}`}
                      type="radio"
                      name='rating'
                      value={rating}
                      disabled={isSubmitting}
                    />
                    <label className="rating__label" htmlFor={`${RATING_ID_PREFIX}${rating}`}>{ComponentText.Rating} {rating}</label>
                  </Fragment>
                ))}
              </div>
            </div>
            <div className="add-review__text">
              <textarea
                {...register('comment', {required: true, minLength: MIN_COMMENT_LENGTH, maxLength: MAX_COMMENT_LENGTH})}
                className="add-review__textarea"
                name='comment'
                id="comment"
                placeholder={ComponentText.ReviewPlaceholder}
                data-testid={ElementTestID.ReviewTextArea}
                disabled={isSubmitting}
              >
              </textarea>
              <div className="add-review__submit">
                <button className="add-review__btn" type="submit" disabled={!isValid || isSubmitting}>{ComponentText.Post}</button>
              </div>
            </div>
          </form>
        </div>
      </section>

    );};

export default AddReviewPage;
