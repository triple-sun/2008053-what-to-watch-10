import { CurrentMovieState, MainPageState, UserState } from '../types/state';
import { AuthStatus, Genre } from './enums';

export const mainPageInitialState: MainPageState = {
  data: {
    movies: [],
    promo: null,
  },
  selectedGenre: Genre.AllGenres,
  isLoaded: false
};

export const currentMovieInitialState: CurrentMovieState = {
  movie: null,
  reviews: {
    data: [],
    isLoaded: false
  },
  similar: {
    data: [],
    isLoaded: false
  },
};

export const userInitialState: UserState = {
  userInfo: null,
  favorites: {
    data: [],
    isLoaded: false
  },
  isAddingReview: false,
  authStatus: AuthStatus.Unknown,
};

export const playerInitialState = {
  progress: 0,
  time: 0,
  isPlaying: false,
  isMuted: false,
};

export const reviewInitialState = {
  rating: 0,
  comment: null
};

export const selectedGenreInitialState = Genre.AllGenres;
