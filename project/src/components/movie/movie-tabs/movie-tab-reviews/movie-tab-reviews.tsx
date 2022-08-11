import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useAppDispatch from '../../../../hooks/use-app-dispatch/use-app-dispatch';
import useAppSelector from '../../../../hooks/use-app-selector/use-app-selector';
import { fetchReviewsAction } from '../../../../store/movie/movie-api-actions';
import { getReviews } from '../../../../store/movie/movie-selectors';
import Review from './review/review';

const MovieTabReviews = () => {
  const id = Number(useParams().id);

  const reviews = useAppSelector(getReviews);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!reviews) {
      dispatch(fetchReviewsAction(id));
    }
  }, [dispatch, id, reviews]);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.length > 0
          ? Object.values(reviews).map((review) => <Review key={review.id} {...review} />)
          : (
            <div className="review">
              <blockquote className="review__quote">
                <p className="review__text">There are no reviews yet.</p>
              </blockquote>
            </div>)}
      </div>
    </div>
  );};

export default React.memo(MovieTabReviews);
