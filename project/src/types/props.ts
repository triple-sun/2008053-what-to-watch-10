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

type MovieCardProps = {
  movie: TMovie;
  playerId: number;
  isMuted: boolean;
  isPreview: boolean;
    renderPlayer: (movie: TMovie, playerIndex: number, isPreview?: boolean, isMuted?: boolean) => JSX.Element;
    handleMouseEvent: (id: number | null) => void;
}

export type {
  AppProps,
  ReviewProps,
  MovieCardProps
};

