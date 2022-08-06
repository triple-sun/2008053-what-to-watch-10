import { Genre } from '../const/enums';
import {store} from '../store/store';
import TReview from './comment';
import { TData } from './data';
import TMovie from './movie';

export type AppInitialState = Omit <TData, 'data'>

export type MainPageInitialState = {
  movies: TData<TMovie[]>;
  promo: TData<TMovie | null>;
  favorites: TData<TMovie[]>
  selectedGenre: Genre;
};

export type MovieInitialState = {
  currentMovie: Omit <TData<TMovie | null>, 'isDataLoaded'> & {reviews: TReview[]};
  similarMovies: Omit <TData<TMovie[]>, 'isDataLoaded'>;
};

export type PromoInitialState = TData<TMovie | null>;

export type State = ReturnType<typeof store.getState>;
