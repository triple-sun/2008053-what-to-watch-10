import { Genre } from '../const/enums';
import TMovie from './movie';

export type MainPageInitialState = {
  promo: TMovie,
  movies: TMovie[],
  selectedGenre: Genre,
};
