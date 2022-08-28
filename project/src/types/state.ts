import { AuthStatus, Genre } from '../const/enums';
import {store} from '../store/store';
import { TCurrentMovieData, TData, TMainPageData, TUserInfo } from './data';
import TMovie from './movie';

export type State = ReturnType<typeof store.getState>;

export type TPlayerState = {
  progress: number,
  time: number,
  isPlaying: boolean,
  isMuted: boolean;
};

export type CurrentMovieState = TData<TCurrentMovieData> & {
  isAddingReview: boolean;
};

export type UserState = {
  userInfo: TUserInfo | null;
  favorites: TData<TMovie[]>;
  authStatus: AuthStatus;
};

export type MainPageState = TData<TMainPageData> & {
  selectedGenre: Genre
};

