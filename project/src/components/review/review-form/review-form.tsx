import { ChangeEvent } from 'react';
import { RatingValues } from '../../../const/const';
import { ReviewProps } from '../../../types/props';
import RatingElement from '../rating-element/rating-element';

const ReviewForm = ({handleReviewChange}: ReviewProps) => {
  const onCommentChange = ({target}: ChangeEvent<HTMLTextAreaElement>) => handleReviewChange({target: target.name, value: target.value});

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {RatingValues.map((rating) => <RatingElement key={rating} rating={rating} handleReviewChange={handleReviewChange} />)}
          </div>
        </div>
        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onChangeCapture={onCommentChange}></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>
        </div>
      </form>
    </div>
  );};

export default ReviewForm;
