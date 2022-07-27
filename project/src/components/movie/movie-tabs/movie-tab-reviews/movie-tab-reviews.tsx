import mockComments from '../../../../mocks/comments';
import Review from './review/review';

const MovieTabReviews = () => (
  <div className="film-card__reviews film-card__row">
    <div className="film-card__reviews-col">
      {mockComments.map((comment) => <Review key={comment.id} {...comment} />)}
    </div>
  </div>
);

export default MovieTabReviews;
