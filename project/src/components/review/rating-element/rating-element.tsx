import { Fragment } from 'react';
import { RATING_ID_PREFIX } from '../../../const/const';
import TListElement from '../../../types/list-element';
import { ReviewProps } from '../../../types/props';

const RatingElement = ({value: rating, handleReviewChange}: TListElement & ReviewProps) => (
  <Fragment>
    <input className="rating__input" id={`${RATING_ID_PREFIX}${rating}`} type="radio" name="rating" value={rating} onChange={handleReviewChange}/>
    <label className="rating__label" htmlFor={`star-${rating}`}>Rating {rating}</label>
  </Fragment>
);

export default RatingElement;
