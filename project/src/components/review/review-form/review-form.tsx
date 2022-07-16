import { Rating } from '../../../const/const';
import { ReviewProps } from '../../../types/props';
import RatingElement from '../rating-element/rating-element';

const ReviewFormComponent = ({handleReviewChange}: ReviewProps) => (
  <div className="add-review">
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {Rating.map((rating) => <RatingElement key={rating} value={rating} handleReviewChange={handleReviewChange} />)}
        </div>
      </div>
      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onChange={handleReviewChange}></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  </div>
);

export default ReviewFormComponent;
