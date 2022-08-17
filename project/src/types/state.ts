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
  isFullscreen?: boolean;
}

export type TReviewState = {
  rating: number;
  comment: string | null;
}

export type CurrentMovieState = TData<TCurrentMovieData>;

export type SimilarMoviesState = TData<TMovie[]>;

export type UserState = TData<TUserData> & {
  authStatus: AuthStatus;
};

export type AddReviewPageState = {
  review: TReviewState | null;
};

export type MainPageState = TData<TMainPageData> & {selectedGenre: Genre}

