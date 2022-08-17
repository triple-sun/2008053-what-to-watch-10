import { configureMockStore } from '@jedmao/redux-mock-store';
import { Middleware } from '@reduxjs/toolkit';
import {commerce, name, internet, lorem, random, datatype, image} from 'faker';
import { AuthStatus, Genre, Reducer } from '../const/enums';
import { currentMovieInitialState, mainPageInitialState, userInitialState } from '../const/initial-states';
import { TAuthData, TUserInfo } from '../types/data';
import TMovie from '../types/movie';
import TReview from '../types/review';
import { TPlayerState } from '../types/state';

export const makeFakeToken = () => datatype.string(16);

export const makeFakeRating = () => datatype.number(10);

export const makeFakeName = () => internet.userName(name.firstName(), name.lastName());

export const makeFakeGenre = () => random.objectElement(Genre) as Genre;

export const makeFakeMovie = (): TMovie => ({
  name: lorem.sentence(2, 5),
  posterImage: image.imageUrl(),
  previewImage: image.imageUrl(),
  backgroundImage: image.imageUrl(),
  backgroundColor: commerce.color(),
  description: lorem.sentence(1, 30),
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
  comment: lorem.sentence(3, 20),
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

export const mockStoreProps = {
  authStatus: AuthStatus.Auth,
  genre: Genre.AllGenres
};

export const createMockStore = (props: {
  authStatus?: AuthStatus;
  genre?: Genre
} = mockStoreProps, middlewares?: Middleware[]) => {
  const movies = makeFakeMovies();
  const promo = random.arrayElement(movies);
  const currentMovie = random.arrayElement(movies);
  const similarMovies = movies.filter((movie) => movie.genre === currentMovie.genre);
  const favorites = movies.filter((movie) => movie.isFavorite);

  const mockStoreData = {
    [Reducer.User]: {...userInitialState, data: {userInfo: makeFakeUserInfo(), favorites: favorites}, authStatus: props.authStatus, isLoading: false},
    [Reducer.MainPage]: {...mainPageInitialState, data: {movies: movies, promo: promo}, isLoading: false, selectedGenre: props.genre ?? Genre.AllGenres},
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

