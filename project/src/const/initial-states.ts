import { CurrentMovieState, MainPageState, SimilarMoviesState, UserState } from '../types/state';
import { AuthStatus, Genre } from './enums';

export const mainPageInitialState: MainPageState = {
  data: {
    movies: [],
    promo: null,
  },
  selectedGenre: Genre.AllGenres,
  isLoading: false
};

export const currentMovieInitialState: CurrentMovieState = {
  data: {
    movie: null,
    reviews: [],
    similar: []
  },
  isLoading: true
};

export const similarMoviesInitialState: SimilarMoviesState = {
  data: [],
};


export const userInitialState: UserState = {
  data: {
    userInfo: null,
    favorites: [],
  },
  authStatus: AuthStatus.Unknown,
};

export const playerInitialState = {
  progress: 0,
  isPlaying: false,
  isMuted: false,
  isFullscreen: false
};
