import React, { createRef, useRef, useState } from 'react';
import { MAX_COMMENT_LENGTH, MIN_COMMENT_LENGTH, RatingValues, RATING_ID_PREFIX } from '../../const/const';
import { ComponentText, ElementTestID } from '../../const/enums';
import { isDisabledInitialState } from '../../const/initial-states';
import useAppSelector from '../../hooks/use-app-selector/use-app-selector';
import { getAddReviewState } from '../../store/current-movie/current-movie-selectors';

const AddReviewForm = (handleReviewSubmit: {handleReviewSubmit: () => void}) => {
  const [rating, setRating] = useState(0);
  const [isDisabled, setIsDisabled] = useState(isDisabledInitialState);

  const commentRef = useRef<HTMLTextAreaElement | null>(null);
  const comment = commentRef.current?.value;

  const isAddingReview = useAppSelector(getAddReviewState);

  const isFormDisabled = isAddingReview;
  const isButtonDisabled = comment && comment.length >= MIN_COMMENT_LENGTH && comment.length <= MAX_COMMENT_LENGTH && rating > 0;

  const onRatingClick = ({target: {value}}: React.ChangeEvent<HTMLInputElement>) => setRating(Number(value))
  const onSubmitClick = () => handleReviewSubmit();

  return (
    <form action="" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {RatingValues.map((value) => (
            <>
              <input className="rating__input" id={`${RATING_ID_PREFIX}${value}`} type="radio" name="rating" value={value} onClick={onRatingClick}/>
              <label className="rating__label" htmlFor={`${RATING_ID_PREFIX}${value}`}>{ComponentText.Rating} {value}</label>
            </>
          ))}
        </div>
      </div>
      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="comment"
          id="comment"
          ref={commentRef}
          minLength={MIN_COMMENT_LENGTH}
          maxLength={MAX_COMMENT_LENGTH}
          placeholder={ComponentText.ReviewPlaceholder}
          data-testid={ElementTestID.ReviewTextArea}
        >
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" onClick={onSubmitClick} disabled={isButtonDisabled}>{ComponentText.Post}</button>
        </div>
      </div>
    </form>
  );
};
