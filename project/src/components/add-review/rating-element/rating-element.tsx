import React from 'react';
import { RATING_ID_PREFIX } from '../../../const/const';
import { ComponentText } from '../../../const/enums';
import { ReviewProps } from '../../../types/props';

const RatingElement = ({rating, handleReviewChange}: Pick<ReviewProps, 'handleReviewChange'> & {rating: number}) => {
  const onRatingChange = ({target}: React.ChangeEvent<HTMLInputElement>) => handleReviewChange({target: target.name, value: rating});
  return (
    <>
      <input className="rating__input" id={`${RATING_ID_PREFIX}${rating}`} type="radio" name="rating" value={rating} onChangeCapture={onRatingChange}/>
      <label className="rating__label" htmlFor={`star-${rating}`}>{ComponentText.Rating} {rating}</label>
    </>
  );};

export default React.memo(RatingElement);
