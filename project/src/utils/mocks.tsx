import { configureMockStore } from '@jedmao/redux-mock-store';
import { Middleware } from '@reduxjs/toolkit';
import {commerce, name, internet, lorem, random, datatype, image} from 'faker';
import { createMemoryHistory } from 'history';
import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import HistoryRouter from '../components/history-route/history-route';
import { AuthStatus, Genre, Reducer } from '../const/enums';
import { currentMovieInitialState, mainPageInitialState, userInitialState } from '../const/initial-states';
import { createAPI } from '../services/api/api';
import { TAuthData, TUserInfo } from '../types/data';
import TMovie from '../types/movie';
import { testUtilsProps } from '../types/props';
import TReview from '../types/review';
import { TPlayerState } from '../types/state';
import thunk from 'redux-thunk';

export const makeFakeToken = () => datatype.string(16);

export const makeFakeRating = () => datatype.number(10);

export const makeFakeName = () => internet.userName(name.firstName(), name.lastName());

export const makeFakeGenre = () => random.objectElement(Genre) as Genre;

export const makeFakeSentences = () => lorem.sentences(datatype.number({min: 1, max: 10}));

export const makeFakeElement = (text: string) => <p>{text}</p>;

export const makeFakeMovie = (): TMovie => ({
  name: lorem.sentence(2, 5),
  posterImage: image.imageUrl(),
  previewImage: image.imageUrl(),
  backgroundImage: image.imageUrl(),
  backgroundColor: commerce.color(),
  description: makeFakeSentences(),
  rating: makeFakeRating(),
  scoresCount: datatype.number(),
  director: makeFakeName(),
  starring: new Array(datatype.number(5)).fill(null).map(makeFakeName),
  runTime: datatype.number(240),
  genre: makeFakeGenre(),
  released: datatype.number({min: 1960, max: 2020}),
  id: datatype.number(),
  isFavorite: datatype.boolean(),
  videoLink: internet.url(),
  previewVideoLink: internet.url()
} as TMovie);

export const makeFakeMovies = (): TMovie[] => (new Array(datatype.number(30)).fill(null).map(makeFakeMovie) as TMovie[]);

export const makeFakeReview = (): TReview => ({
  id: datatype.number(100),
  user: {
    id: datatype.number(100),
    name: internet.userName()
  },
  rating: makeFakeRating(),
  comment: makeFakeSentences(),
  date: (datatype.datetime()).toString()
});

export const makeFakeReviews = (): TReview[] => (new Array(datatype.number(30)).fill(null).map(makeFakeReview) as TReview[]);

export const makeFakeUserInfo = (): TUserInfo => ({
  avatarUrl: image.imageUrl(),
  email: internet.email(),
  id: datatype.number(100),
  name: makeFakeName(),
  token: makeFakeToken()
} as TUserInfo);

export const makeFakeAuthData = (): TAuthData => ({
  login: internet.email(),
  password: internet.password()
} as TAuthData);

export const makeMockMiddleware = () =>{
  const api = createAPI();
  const middleware = [thunk.withExtraArgument(api)];

  return middleware;
};

export const mockStoreDefaultProps = {
  authStatus: AuthStatus.Auth,
  genre: Genre.AllGenres,
  middlewares: makeMockMiddleware(),
};

export const createMockStore = (props: {
  authStatus?: AuthStatus;
  genre?: Genre;
  middlewares?: Middleware[];
} = mockStoreDefaultProps) => {
  const {authStatus, genre, middlewares} = props;

  const movies = makeFakeMovies();
  const promo = random.arrayElement(movies);
  const currentMovie = random.arrayElement(movies);
  const similarMovies = movies.filter((movie) => movie.genre === currentMovie.genre);
  const favorites = movies.filter((movie) => movie.isFavorite);

  const mockStoreData = {
    [Reducer.User]: {...userInitialState, data: {userInfo: makeFakeUserInfo(), favorites: favorites}, authStatus, isLoading: false},
    [Reducer.MainPage]: {...mainPageInitialState, data: {movies: movies, promo: promo}, isLoading: false, selectedGenre: genre ?? Genre.AllGenres},
    [Reducer.CurrentMovie]: {...currentMovieInitialState, data: {movie: currentMovie, reviews: makeFakeReviews(), similar: similarMovies}, isLoading: false},
  };

  const mockStore = configureMockStore();

  const store = middlewares ? configureMockStore(middlewares)(mockStoreData) : mockStore(mockStoreData);

  return store;
};

export const makeFakePlayerState = (): TPlayerState => ({
  movie: makeFakeMovie(),
  isPlaying: datatype.boolean(),
  progress: datatype.number(10),
  isMuted: datatype.boolean(),
  isFullscreen: false
} as TPlayerState);


export const testUtils = ({storeProps}: testUtilsProps = {}) => {
  const store = createMockStore(storeProps);
  const history = createMemoryHistory();

  const userInfo = store.getState()[Reducer.User].data.userInfo as TUserInfo;
  const favorites = store.getState()[Reducer.User].data.favorites as TMovie[];

  const currentMovie = store.getState()[Reducer.CurrentMovie].data.movie as TMovie;
  const similarMovies = store.getState()[Reducer.CurrentMovie].data.similar as TMovie[];
  const reviews = store.getState()[Reducer.CurrentMovie].data.reviews as TReview[];

  const movies = store.getState()[Reducer.MainPage].data.movies as TMovie[];
  const promo = store.getState()[Reducer.MainPage].data.promo as TMovie;
  const selectedGenre = store.getState()[Reducer.MainPage].selectedGenre as Genre;

  const wrapper = ({children}: PropsWithChildren) => (
    <Provider store={store}>
      <HistoryRouter history={history}>
        {children}
      </HistoryRouter>
    </Provider>
  );

  return {
    store,
    history,
    userInfo,
    favorites,
    currentMovie,
    similarMovies,
    reviews,
    movies,
    promo,
    selectedGenre,
    wrapper
  };
};

export const mockVideoAPI = () => {
  window.HTMLVideoElement.prototype.play = () => Promise.resolve();
  window.HTMLVideoElement.prototype.pause = jest.fn();
};
