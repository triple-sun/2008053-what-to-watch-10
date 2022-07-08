import MovieCard from '../../components/movie-card/movie-card';
import MovieDataProps from '../../types/movie-data-props';
import MoviePromo from '../../components/movie-promo/movie-promo';
import PageHeadElement from '../../components/page-head/page-head';
import SketchElement from '../../components/sketch/sketch';

const MOVIE_CARD_COUNT = 19;

const MOVIE_CARD_MOCK_TITLE = 'Fantastic Beasts: The Crimes of Grindelwald';

const MovieGenres = [
  'Comedies',
  'Crime',
  'Documentary',
  'Dramas',
  'Horror',
  'Kids & Family',
  'Romance',
  'Sci-Fi',
  'Thrillers',
];

const mockMoviesList = Array(MOVIE_CARD_COUNT).fill(MOVIE_CARD_MOCK_TITLE);

function createMovieCardElement(movieTitle: string) {
  return (MovieCard(movieTitle));
}

function createGenreElement(genre: string) {
  const genreLink = `#${genre}`;
  return (
    <li className="catalog__genres-item catalog__genres-item--active" key={genre}>
      <a href={genreLink} className="catalog__genres-link">{genre}</a>
    </li>
  );
}

export default function MainPage(moviePromoData: MovieDataProps): JSX.Element {
  const movieCardElements = mockMoviesList.map(createMovieCardElement);
  const genreElements = MovieGenres.map(createGenreElement);
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
              {genreElements}
            </ul>

            <div className="catalog__films-list">
              {movieCardElements}
            </div>

            <div className="catalog__more">
              <button className="catalog__button" type="button">Show more</button>
            </div>
          </section>
        </div>
      </body>
    </html>
  );
}
