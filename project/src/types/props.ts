import { AuthStatus, Genre } from '../const/enums';
import TMovie from './movie';

export type ReviewProps = {
  handleReviewChange: ({name, value}: {name: string, value: string}) => void;
}

export type GenreProps = {
  genre: Genre;
  handleGenreChange: (genre: Genre) => void;
}

export type mockStoreProps = {
  authStatus?: AuthStatus;
  movies?: TMovie[];
  genre?: Genre;
};

export type testUtilsProps = {
  storeProps?: mockStoreProps;
}

