import { Middleware } from '@reduxjs/toolkit';
import { History } from 'history';
import { AuthStatus, Genre } from '../const/enums';
import TMovie from './movie';

export type ReviewProps = {
  handleReviewChange: ({name, value}: {name: string, value: string}) => void;
}

export type MovieCardProps = {
  movie: TMovie;
  activeMovieId: number | null;
  handleMouseEvent: (id: number | null) => void;
}

export type GenreProps = {
  genre: Genre;
  handleGenreChange: (genre: Genre) => void;
}

export type mockStoreProps = {
  authStatus?: AuthStatus;
  genre?: Genre;
  middlewares?: Middleware[];
};

export type testUtilsProps = {
  storeProps?: mockStoreProps;
  history?: History;
}

