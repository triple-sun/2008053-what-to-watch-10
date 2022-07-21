import { ChangeEvent } from 'react';
import { Genre } from '../const/enums';
import TMovie from './movie';

type AppProps = {
  promo: TMovie;
  movies: readonly TMovie[];
  myMovies: TMovie[];
  randomMovie: TMovie
}

type ReviewProps = {
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

type MovieCardProps = {
  movie: TMovie;
  playerId: number;
  activePlayerId: number;
  isMuted: boolean;
  isPreview: boolean;
  renderPlayer: (movie: TMovie, isPlaying: boolean, isPreview?: boolean, isMuted?: boolean) => JSX.Element;
  handleMouseEvent: (id: number | null) => void;
}

type GenreProps = {
  selectedGenre: Genre;
  handleGenreClick: (genre: Genre) => void;
}

export type {
  AppProps,
  ReviewProps,
  MovieCardProps,
  GenreProps,
};

