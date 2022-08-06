import React from 'react';
import TReview from '../../../../types/comment';
import Review from './review/review';

const MovieTabReviews = ({reviews}: {reviews: TReview[]}) => (
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
);

export default React.memo(MovieTabReviews);
