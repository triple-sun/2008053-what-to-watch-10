import React from 'react';
import { RATING_ID_PREFIX } from '../../../const/const';
import { ComponentText } from '../../../const/enums';
import { ReviewProps } from '../../../types/props';

const RatingElement = ({rating, isDisabled, handleReviewChange}: ReviewProps & {rating: number, isDisabled?: boolean}) => {
  const onRatingChange = ({target: {name, value}}: React.ChangeEvent<HTMLInputElement>) => handleReviewChange({name, value});
  return (
    <>
      <input
        className="rating__input"
        id={`${RATING_ID_PREFIX}${rating}`}
        type="radio" name="rating"
        value={rating}
        onChangeCapture={onRatingChange}
        disabled={isDisabled}
      />
      <label className="rating__label" htmlFor={`${RATING_ID_PREFIX}${rating}`}>{ComponentText.Rating} {rating}</label>
    </>
  );};

export default React.memo(RatingElement);
