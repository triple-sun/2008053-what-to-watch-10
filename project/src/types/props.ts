import React from 'react';
import { Genre } from '../const/enums';
import TMovie from './movie';

type ReviewProps = {
  handleReviewChange: ({target, value}: {target: string, value: string | number}) => void;
  onSubmitClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
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

