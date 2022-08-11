import { AuthorizationStatus, Genre } from '../const/enums';
import {store} from '../store/store';
import { TData, TMainPageData, TMoviePageData, TUserData } from './data';
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

export type CurrentMovieInitialState = TData<TMovie | null>;

export type UserDataInitialState = TData<TUserData> & {
  authorizationStatus: AuthorizationStatus;
};

export type AddReviewPageInitialState = {
  review: TReviewState | null;
};

export type MainPageInitialState = TData<TMainPageData> & {selectedGenre: Genre}

export type MoviePageInitialState = TData<TMoviePageData>;
