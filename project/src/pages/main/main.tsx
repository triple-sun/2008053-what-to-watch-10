import MovieCard from '../../components/movie-card/movie-card';
import { nanoid } from '@reduxjs/toolkit';
import MovieDataProps from '../../types/movie-card-props';
import MoviePromo from '../../components/movie-promo/movie-promo';
import PageHeadElement from '../../components/page-head/page-head';
import SketchElement from '../../components/sketch/sketch';

const MOVIE_CARD_COUNT = 19;

const movieCards = Array(MOVIE_CARD_COUNT)
  .fill(MovieCard())
  .map((movieCard) => <article className="small-film-card catalog__films-card" key={nanoid()}>{movieCard}</article>);

export default function MainPage(moviePromoData: MovieDataProps): JSX.Element {
  return (
    <html>
      {PageHeadElement()}
      <body>
        {SketchElement()}
        {MoviePromo(moviePromoData)}

        <div className="page-content">
          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>

            <ul className="catalog__genres-list">
              <li className="catalog__genres-item catalog__genres-item--active">
                <a href="#" className="catalog__genres-link">All genres</a>
              </li>
              <li className="catalog__genres-item">
                <a href="#" className="catalog__genres-link">Comedies</a>
              </li>
              <li className="catalog__genres-item">
                <a href="#" className="catalog__genres-link">Crime</a>
              </li>
              <li className="catalog__genres-item">
                <a href="#" className="catalog__genres-link">Documentary</a>
              </li>
              <li className="catalog__genres-item">
                <a href="#" className="catalog__genres-link">Dramas</a>
              </li>
              <li className="catalog__genres-item">
                <a href="#" className="catalog__genres-link">Horror</a>
              </li>
              <li className="catalog__genres-item">
                <a href="#" className="catalog__genres-link">Kids & Family</a>
              </li>
              <li className="catalog__genres-item">
                <a href="#" className="catalog__genres-link">Romance</a>
              </li>
              <li className="catalog__genres-item">
                <a href="#" className="catalog__genres-link">Sci-Fi</a>
              </li>
              <li className="catalog__genres-item">
                <a href="#" className="catalog__genres-link">Thrillers</a>
              </li>
            </ul>

            <div className="catalog__films-list">
              {movieCards}
            </div>

            <div className="catalog__more">
              <button className="catalog__button" type="button">Show more</button>
            </div>
          </section>

          <footer className="page-footer">
            <div className="logo">
              <a className="logo__link logo__link--light">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="copyright">
              <p>© 2019 What to watch Ltd.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
