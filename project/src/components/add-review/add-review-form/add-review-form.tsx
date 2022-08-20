import React from 'react';
import { useParams } from 'react-router-dom';
import { RatingValues } from '../../../const/const';
import { ComponentTestID } from '../../../const/enums';
import useAddReview from '../../../hooks/use-add-review/use-add-review';
import RatingElement from '../rating-element/rating-element';
import ReviewSubmitButton from '../review-submit-button/review-submit-button';
import ReviewTextarea from '../review-textarea/review-textarea';

const AddReviewForm = () => {
  const id = Number(useParams().id);

  const {handleReviewChange, handleReviewSubmit} = useAddReview(id);

  return (
    <div className="add-review" data-testid={ComponentTestID.AddReviewForm}>
      <form action="" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {RatingValues.map((value) => <RatingElement key={value} rating={value} handleReviewChange={handleReviewChange} />)}
          </div>
        </div>
        <div className="add-review__text">
          <ReviewTextarea handleReviewChange={handleReviewChange}/>
          <div className="add-review__submit">
            <ReviewSubmitButton handleReviewSubmit={handleReviewSubmit} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default React.memo(AddReviewForm);
