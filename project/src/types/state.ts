import { AuthStatus, Genre } from '../const/enums';
import {store} from '../store/store';
import { TCurrentMovieData, TData, TMainPageData, TUserData } from './data';
import TMovie from './movie';

export type State = ReturnType<typeof store.getState>;

export type TPlayerState = {
  movie: TMovie,
  isPlaying: boolean,
  progress?: number,
  isMuted: boolean;
}

export type TReviewState = {
  rating: number;
  comment: string | null;
}

export type CurrentMovieInitialState = TData<TCurrentMovieData>;

export type SimilarMoviesInitialState = TData<TMovie[]>;

export type UserDataInitialState = TData<TUserData> & {
  authStatus: AuthStatus;
};

export type AddReviewPageInitialState = {
  review: TReviewState | null;
};

export type MainPageInitialState = TData<TMainPageData> & {selectedGenre: Genre}
