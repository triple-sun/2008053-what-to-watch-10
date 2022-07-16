import { ChangeEvent, Fragment } from 'react';
import { Rating, RATING_ID_PREFIX } from '../../const/const';

type ReviewProps = {
  handleReviewRating: (e: ChangeEvent<HTMLInputElement>) => void;
  handleReviewText: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

const AddReviewComponent = ({handleReviewRating, handleReviewText}: ReviewProps) => {

  const createRatingElement = (rating: string) => (
    <Fragment key={rating}>
      <input className="rating__input" id={`${RATING_ID_PREFIX}${rating}`} type="radio" name="rating" value={rating} onChange={handleReviewRating}/>
      <label className="rating__label" htmlFor={`star-${rating}`}>Rating {rating}</label>
    </Fragment>
  );

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {Rating.map(createRatingElement)}
          </div>
        </div>
        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onChange={handleReviewText}></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddReviewComponent;
