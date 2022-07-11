import { nanoid } from '@reduxjs/toolkit';
import TMovie from '../types/movie-data';
import { MOVIE_CARD_COUNT } from './const';

const mockMovieData: TMovie = {
  id: nanoid(),
  title: 'Fantastic Beasts: The Crimes of Grindelwald',
  genre: 'Fantasy',
  year: 2018,
};

const mockMoviePromoData: TMovie = {
  id: nanoid(),
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 2014,
};

const mockMoviesList = Array(MOVIE_CARD_COUNT).fill(mockMovieData);

export {
  mockMoviePromoData,
  mockMoviesList
};
