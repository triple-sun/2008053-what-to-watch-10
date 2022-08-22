import TMovie from './movie';

export type TData<T = null> = {
  data: T;
  isLoaded?: boolean;
}

export type TAuthData = {
  login: string;
  password: string;
};

export type TMainPageData = {
  movies: TMovie[];
  promo: TMovie | null;
}

export type TUserInfo = {
  avatarUrl: string
  email: string
  id: number
  name: string
  token: string
  };
