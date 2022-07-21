import { ChangeEvent } from 'react';
import TMovie from './movie';

type AppProps = {
  promo: TMovie;
  movies: readonly TMovie[];
  genres: readonly string[];
  myMovies: TMovie[];
  randomMovie: TMovie
}

type ReviewProps = {
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export type {
  AppProps,
  ReviewProps
};

