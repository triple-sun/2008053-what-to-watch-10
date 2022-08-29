import { CurrentMovieState, MainPageState, UserState } from '../types/state';
import { ALL_GENRES } from './const';
import { AuthStatus } from './enums';

export const mainPageInitialState: MainPageState = {
  data: {
    movies: [],
    promo: null,
  },
  selectedGenre: ALL_GENRES,
  isLoaded: false
};

export const currentMovieInitialState: CurrentMovieState = {
  data: {
    movie: null,
    reviews: [],
    similar: [],
  },
  isLoaded: false,
  isAddingReview: false,
};

export const userInitialState: UserState = {
  userInfo: null,
  favorites: {
    data: [],
    isLoaded: false
  },
  authStatus: AuthStatus.Unknown,
};

export const playerInitialState = {
  progress: 0,
  time: 0,
  isPlaying: true,
  isMuted: false,
};
