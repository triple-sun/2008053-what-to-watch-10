import { ChangeEvent, useState } from 'react';
import { RatingValues } from '../../../const/const';
import useAppDispatch from '../../../hooks/use-app-dispatch/use-app-dispatch';
import { addReviewAction } from '../../../store/review/review-api-actions';
import TMovie from '../../../types/movie';
import { TReviewState } from '../../../types/review-state';
import RatingElement from '../rating-element/rating-element';

const ReviewForm = ({movie}: {movie: TMovie}) => {
  const [review, setReview] = useState<TReviewState>({rating: 0, comment: null});
  const {rating, comment} = review;
  const dispatch = useAppDispatch();

  const handleReviewChange = ({target, value}: {target: string, value: string | number}) => setReview({...review, [target]: value});

  const onSubmitClick = (e: React.FormEvent) => {
    e.preventDefault();
    if (movie) {
      dispatch(addReviewAction(({
        rating: rating,
        comment: comment,
        id: movie.id,
      })));
    }
  };

  const onCommentChange = ({target}: ChangeEvent<HTMLTextAreaElement>) => handleReviewChange({target: target.name, value: target.value});

  return (
    <div className="add-review">
      <form action="" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {RatingValues.map((value) => <RatingElement key={value} rating={value} handleReviewChange={handleReviewChange} />)}
          </div>
        </div>
        <div className="add-review__text">
          <textarea className="add-review__textarea" name="comment" id="comment" placeholder="Review text" onChangeCapture={onCommentChange}></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit" onClick={onSubmitClick}>Post</button>
          </div>x
        </div>
      </form>
    </div>
  );};

export default ReviewForm;
