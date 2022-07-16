import { ChangeEvent } from 'react';
import TMovie from './movie';

type MainProps = {
  promo: TMovie;
  movies: readonly TMovie[];
  genres: readonly string[];
  myMovies: TMovie[];
  randomMovie: TMovie
}

type ReviewProps = {
  handleReviewChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export type {
  MainProps,
  ReviewProps
};

