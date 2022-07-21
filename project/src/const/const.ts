const RATING_ID_PREFIX = 'star-';

const MOVIE_CARD_MAIN_COUNT = 8;
const MOVIE_CARD_SIMILAR_COUNT = 4;

const MOVIE_NAVIGATION_ACTIVE_CLASS = 'film-nav__item--active';

const MovieGenreList = [
  'Comedies',
  'Crime',
  'Documentary',
  'Dramas',
  'Horror',
  'Kids & Family',
  'Romance',
  'Sci-Fi',
  'Thrillers',
] as const;

const RatingValues = ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1'] as const;

export {
  RATING_ID_PREFIX,
  MOVIE_CARD_MAIN_COUNT,
  MOVIE_CARD_SIMILAR_COUNT,
  MOVIE_NAVIGATION_ACTIVE_CLASS,
  MovieGenreList,
  RatingValues
};
