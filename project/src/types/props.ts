import { ChangeEvent } from 'react';
import { Genre } from '../const/enums';
import TMovie from './movie';

type ReviewProps = {
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

type MovieCardProps = {
  movie: TMovie;
  activeMovieId: number | null;
  handleMouseEvent: (id: number | null) => void;
}

type GenreProps = {
  genre: Genre;
  selectedGenre: Genre;
  handleGenreClick: (genre: Genre) => void;
}

export type {
  ReviewProps,
  MovieCardProps,
  GenreProps,
};

