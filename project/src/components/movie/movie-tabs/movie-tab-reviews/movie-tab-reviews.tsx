import { nanoid } from '@reduxjs/toolkit';
import React from 'react';
import { ComponentTestID, ComponentText } from '../../../../const/enums';
import TReview from '../../../../types/review';
import Review from './review/review';

const MovieTabReviews = ({reviews}: {reviews: TReview[]}) => (
  <div className="film-card__reviews film-card__row">
    <div className="film-card__reviews-col" data-testid={ComponentTestID.MovieTabReviews}>
      {reviews.length > 0
        ? reviews.map((review) => <Review key={nanoid()} {...review} />)
        : (
          <div className="review">
            <blockquote className="review__quote">
              <p className="review__text">{ComponentText.NoReviews}</p>
            </blockquote>
          </div>)}
    </div>
  </div>
);

export default React.memo(MovieTabReviews);
