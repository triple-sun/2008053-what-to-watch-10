import LogoElement from '../../components/logo/logo';
import PageHeadElement from '../../components/page-head/page-head';
import SketchElement from '../../components/sketch/sketch';
import UserBlockElement from '../../components/user-block/user-block';

const ratings = ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1'] as const;

function createRatingElement(rating: string) {
  const genreID = `star-${rating}`;

  return (
    <div key={rating}>
      <input className="rating__input" id={genreID} type="radio" name="rating" value={rating} />
      <label className="rating__label" htmlFor={genreID}>Rating {rating}</label>
    </div>
  );
}

export default function AddReviewPage(): JSX.Element {
  const ratingElements = ratings.map(createRatingElement);
  return (
    <html lang="en">
      {PageHeadElement()}

      <body>
        {SketchElement()}
        <section className="film-card film-card--full">
          <div className="film-card__header">
            <div className="film-card__bg">
              <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header">
              {LogoElement()}

              <nav className="breadcrumbs">
                <ul className="breadcrumbs__list">
                  <li className="breadcrumbs__item">
                    <a href="film-page.html" className="breadcrumbs__link">The Grand Budapest Hotel</a>
                  </li>
                  <li className="breadcrumbs__item">
                    <a href="#review" className="breadcrumbs__link">Add review</a>
                  </li>
                </ul>
              </nav>

              {UserBlockElement()}
            </header>

            <div className="film-card__poster film-card__poster--small">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>
          </div>

          <div className="add-review">
            <form action="#" className="add-review__form">
              <div className="rating">
                <div className="rating__stars">
                  {ratingElements}
                </div>
              </div>

              <div className="add-review__text">
                <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
                <div className="add-review__submit">
                  <button className="add-review__btn" type="submit">Post</button>
                </div>

              </div>
            </form>
          </div>

        </section>
      </body>
    </html>
  );
}
