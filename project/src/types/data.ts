import TMovie from './movie';
import TReview from './review';

export type TData<T = null> = {
  data: T;
  isLoading?: boolean;
}

export type TAuthData = {
  login: string;
  password: string;
};

export type TCurrentMovieData = {
  movie: TMovie | null;
  reviews: TReview[];
  similar: TMovie[];
}

export type TMainPageData = {
  movies: TMovie[];
  promo: TMovie | null;
}

export type TMoviePageData = {
  similarMovies: TMovie[];
}

export type TUserInfo = {
  avatarUrl: string
  email: string
  id: number
  name: string
  token: string
  };

export type TUserData = {
    userInfo: TUserInfo | null;
    favorites: TMovie[];
  }

