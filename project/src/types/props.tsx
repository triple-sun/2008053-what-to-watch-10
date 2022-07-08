import Movie from './movie-data';

type MainPageProps = {
  promo: Movie;
  movies: Movie[];
  genres: readonly string[];
}

type ListItemProps<T = string> = {
  key: string;
  value: T
}

export type {
  MainPageProps,
  ListItemProps
};

