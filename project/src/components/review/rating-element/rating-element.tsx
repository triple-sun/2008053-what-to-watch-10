import { RATING_ID_PREFIX } from '../../../const/const';
import { ReviewProps } from '../../../types/props';

type RatingElementProps = Pick<ReviewProps, 'onChange'> & {rating: string}

const RatingElement = ({rating, onChange}: RatingElementProps) => (
  <>
    <input className="rating__input" id={`${RATING_ID_PREFIX}${rating}`} type="radio" name="rating" value={rating} onChange={onChange}/>
    <label className="rating__label" htmlFor={`star-${rating}`}>Rating {rating}</label>
  </>
);

export default RatingElement;
