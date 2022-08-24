import { AuthStatus, Genre } from '../const/enums';
import {store} from '../store/store';
import { TData, TMainPageData, TUserInfo } from './data';
import TMovie from './movie';
import TReview from './review';

export type State = ReturnType<typeof store.getState>;

export type TPlayerState = {
  progress: number,
  time: number,
  isPlaying: boolean,
  isMuted: boolean;
}

export type TReviewState = {
  rating: number;
  comment: string | null;
}

export type CurrentMovieState = {
  movie: TMovie | null;
  reviews: TData<TReview[]>;
  similar: TData<TMovie[]>;
  isAddingReview: boolean;
};

export type UserState = {
  userInfo: TUserInfo | null;
  favorites: TData<TMovie[]>;
  authStatus: AuthStatus;
};

export type AddReviewPageState = {
  review: TReviewState | null;
};

export type MainPageState = TData<TMainPageData> & {selectedGenre: Genre}

