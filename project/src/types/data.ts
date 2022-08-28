import TMovie from './movie';
import TReview from './review';

export type TUserInfo = {
  avatarUrl: string
  email: string
  id: number
  name: string
  token: string
  };

export type TData<T = null> = {
  data: T;
  isLoaded?: boolean;
}

export type TAddReviewData = {
  rating: number;
  comment: string | null;
};

export type TAuthData = {
  login: string;
  password: string;
};

export type TMainPageData = {
  movies: TMovie[];
  promo: TMovie | null;
}

export type TCurrentMovieData = {
  movie: TMovie | null;
  reviews: TReview[];
  similar: TMovie[];
}
