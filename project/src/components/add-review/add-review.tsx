import React from 'react';
import { Rating, RATING_ID_PREFIX } from '../../const/const';
import TListElement from '../../types/list-element';

type TRatingElement = {
  setRatingHandle: (rating: string) => void;
}

type TReviewTextarea = {
  typeTextHandle: (text: string) => void;
}

type TRatingElementProps = TListElement & TRatingElement

type TAddReviewProps = TRatingElement & TReviewTextarea;

const RatingElement = ({value: rating, setRatingHandle}: TRatingElementProps): JSX.Element => {
  const ratingSelectionHandler = ({target}: React.ChangeEvent<HTMLInputElement>) => setRatingHandle(target.value);

  return (
    <div>
      <input className="rating__input" id={`${RATING_ID_PREFIX}${rating}`} type="radio" name="rating" value={rating} onChange={ratingSelectionHandler}/>
      <label className="rating__label" htmlFor={`star-${rating}`}>Rating {rating}</label>
    </div>
  );};

const ReviewTextareaElement = ({typeTextHandle: setReviewText}: TReviewTextarea): JSX.Element => {
  const reviewTextTypeHandler = ({target}: React.ChangeEvent<HTMLTextAreaElement>) => setReviewText(target.value);

  return (
    <div className="add-review__text">
      <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onChange={reviewTextTypeHandler}></textarea>
      <div className="add-review__submit">
        <button className="add-review__btn" type="submit">Post</button>
      </div>

    </div>
  );
};


const AddReviewComponent = ({setRatingHandle, typeTextHandle}: TAddReviewProps): JSX.Element => {
  const createRatingElement = (rating: string) => <RatingElement key={`star-${rating}`} value={rating} setRatingHandle={setRatingHandle}/>;

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {Rating.map(createRatingElement)}
          </div>
        </div>

        <ReviewTextareaElement typeTextHandle={typeTextHandle} />
      </form>
    </div>
  );};

export default AddReviewComponent;
