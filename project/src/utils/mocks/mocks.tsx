import { configureMockStore } from '@jedmao/redux-mock-store';
import { Action } from '@reduxjs/toolkit';
import {commerce, name, internet, lorem, random, datatype, image} from 'faker';
import { AuthStatus, Genre, Reducer } from '../../const/enums';
import { currentMovieInitialState, mainPageInitialState, userInitialState } from '../../const/initial-states';
import { createAPI } from '../../services/api/api';
import { TAuthData, TUserInfo } from '../../types/data';
import TMovie from '../../types/movie';
import TReview from '../../types/review';
import { CurrentMovieState, MainPageState, State, TPlayerState, UserState } from '../../types/state';
import thunk, { ThunkDispatch } from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';

export const makeFakeToken = () => datatype.string(16);

export const makeFakeRating = () => datatype.number(10);

export const makeFakeName = () => internet.userName(name.firstName(), name.lastName());

export const makeFakeGenre = () => random.objectElement(Genre) as Genre;

export const makeFakeSentences = () => lorem.sentences(datatype.number({min: 1, max: 10}));

export const makeFakeElement = (text = makeFakeSentences()) => <p>{text}</p>;

export const makeFakeComment = () => ({comment: datatype.string(55), rating: makeFakeRating()});

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

export const makeFakeMovies = (): TMovie[] => (new Array(datatype.number({min: 20, max: 35})).fill(null).map(makeFakeMovie) as TMovie[]);

export const makeFakeMoviesShort = (): TMovie[] => (new Array(4).fill(null).map(makeFakeMovie) as TMovie[]);

export const makeFakeReview = (): TReview => ({
  id: datatype.number(100),
  user: {
    id: datatype.number(100),
    name: internet.userName()
  },
  rating: makeFakeRating(),
  comment: makeFakeSentences(),
  date: (datatype.datetime()).toString()
} as TReview);

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

export const mockMiddleware = () => {
  const api = createAPI();

  const mockAPI = new MockAdapter(api);

  const middlewares = [thunk.withExtraArgument(api)];

  return {
    api,
    mockAPI,
    middlewares
  };
};

export const mockStoreDefaultProps = {
  authStatus: AuthStatus.Auth,
  movies: makeFakeMovies(),
  genre: Genre.AllGenres,
};

export const createMockStore = (props: {
  authStatus?: AuthStatus;
  movies?: TMovie[];
  genre?: Genre;
} = mockStoreDefaultProps) => {
  const {movies: propMovies, authStatus, genre: selectedGenre} = props;

  const {api, middlewares} = mockMiddleware();

  const movies = propMovies ?? makeFakeMovies();
  const promo = makeFakeMovie();
  const currentMovie = random.arrayElement(movies);
  const similarMovies = movies.filter((movie) => movie.genre === currentMovie.genre);
  const userInfo = makeFakeUserInfo();
  const favorites = movies.filter((movie) => movie.isFavorite);
  const reviews = makeFakeReviews();

  const mockStoreData = {
    [Reducer.User]: {...userInitialState, userInfo, favorites: {data: favorites, isLoaded: true}, authStatus} as UserState,
    [Reducer.MainPage]: {...mainPageInitialState, data: {movies: propMovies, promo: promo}, isLoaded: true, selectedGenre} as MainPageState,
    [Reducer.CurrentMovie]: {...currentMovieInitialState, movie: currentMovie, reviews: {data: reviews, isLoaded: true}, similar: {data: similarMovies, isLoaded: true}} as CurrentMovieState,
  };

  const mockStore = configureMockStore<
      State,
      Action,
      ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  const store = mockStore(mockStoreData);

  return {
    store,
    mockStoreData
  };
};

export const makeFakePlayerState = (): TPlayerState => ({
  progress: datatype.number(),
  time: datatype.number(),
  isPlaying: datatype.boolean(),
  isMuted: datatype.boolean(),
} as TPlayerState);

export const getMockMovieId = (movies: TMovie[]) => {
  const randomMovie = movies[datatype.number(movies.length - 1)];

  return randomMovie.id;
};
