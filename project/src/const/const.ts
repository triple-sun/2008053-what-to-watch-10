import { Genre } from './enums';

export const MAX_GENRE_INDEX = 9;

export const MIN_COMMENT_LENGTH = 50;
export const MAX_COMMENT_LENGTH = 400;

export const ALL_GENRES = 'AllGenres' as Genre;

export const RATING_ID_PREFIX = 'star-';

export const MOVIE_CARD_MAIN_COUNT = 8;
export const MOVIE_CARD_SIMILAR_COUNT = 4;

export const UNKNOWN_ACTION = 'UNKNOWN_ACTION';

export const LOGO_LINK_CLASS = 'logo__link';
export const LOGO_LINK_LIGHT_CLASS = `${LOGO_LINK_CLASS} ${LOGO_LINK_CLASS}--light`;

export const GENRE_ELEMENT_CLASS = 'catalog__genres-item';
export const GENRE_ELEMENT_ACTIVE_CLASS = `${GENRE_ELEMENT_CLASS} ${GENRE_ELEMENT_CLASS}--active`;

export const MOVIE_POSTER_CLASS = 'film-card__poster';
export const MOVIE_POSTER_SIZE_CLASS_PREFIX = `${MOVIE_POSTER_CLASS} ${MOVIE_POSTER_CLASS}--`;

export const MOVIE_TAB_CLASS = 'film-nav__item';
export const MOVIE_TAB_ACTIVE_CLASS = `${MOVIE_TAB_CLASS} ${MOVIE_TAB_CLASS}--active`;

export const SIMILAR_MOVIES_URL_SUFFIX = '/similar';
export const REVIEW_URL_SUFFIX = '/review';

export const MOCK_PAGE_LINK = '/mock';

export const FAVORITE_SINGLE_STEP = 1;

export const RatingValues = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1] as const;
