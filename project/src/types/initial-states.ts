import { Genre } from '../const/enums';
import TMovie from './movie';

export type MainPageInitialState = {
  promo: TMovie,
  movies: TMovie[],
  allMovies: TMovie[],
  filteredMovies: TMovie[],
  selectedGenre: Genre,
  myMovies: TMovie[],
  renderedMoviesCount: number,
};
