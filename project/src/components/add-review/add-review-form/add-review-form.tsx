import React from 'react';
import { ChangeEvent, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RatingValues } from '../../../const/const';
import { ComponentTestID, ComponentText } from '../../../const/enums';
import useAppDispatch from '../../../hooks/use-app-dispatch/use-app-dispatch';
import { addReviewAction } from '../../../store/review/review-api-actions';
import { TReviewState } from '../../../types/state';
import RatingElement from '../rating-element/rating-element';

const ReviewForm = () => {
  const id = Number(useParams().id);

  const [review, setReview] = useState<TReviewState>({rating: 0, comment: null});
  const {rating, comment} = review;

  const dispatch = useAppDispatch();

  const handleReviewChange = ({target, value}: {target: string, value: string | number}) => setReview({...review, [target]: value});

  const onSubmitClick = (e: React.FormEvent) => {
    e.preventDefault();
    if (id) {
      dispatch(addReviewAction(({
        rating: rating,
        comment: comment,
        id: id,
      })));
    }
  };

  const onCommentChange = ({target}: ChangeEvent<HTMLTextAreaElement>) => handleReviewChange({target: target.name, value: target.value});

  return (
    <div className="add-review" data-testid={ComponentTestID.AddReviewForm}>
      <form action="" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {RatingValues.map((value) => <RatingElement key={value} rating={value} handleReviewChange={handleReviewChange} />)}
          </div>
        </div>
        <div className="add-review__text">
          <textarea className="add-review__textarea" name="comment" id="comment" placeholder="Review text" onChangeCapture={onCommentChange}></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit" onClick={onSubmitClick}>{ComponentText.Post}</button>
          </div>x
        </div>
      </form>
    </div>
  );
};

export default React.memo(ReviewForm);
