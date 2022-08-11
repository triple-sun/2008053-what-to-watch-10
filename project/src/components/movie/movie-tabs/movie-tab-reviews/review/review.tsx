import React from 'react';
import TReview from '../../../../../types/review';
import { humanizeCommentDate } from '../../../../../utils/utils';

const Review = (review: TReview) => {
  const commentDate = humanizeCommentDate(review.date);

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{review.user.name}</cite>
          <time className="review__date" dateTime={review.date}>{commentDate}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.rating}</div>
    </div>
  );};

export default React.memo(Review);
