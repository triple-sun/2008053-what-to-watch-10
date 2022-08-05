import { createAction } from '@reduxjs/toolkit';
import { LoadAction } from '../../const/enums';
import TReview from '../../types/comment';
import TMovie from '../../types/movie';

export const loadCurrentMovie = createAction<TMovie>(LoadAction.LoadCurrentMovie);

export const loadSimilarMovies = createAction<TMovie[]>(LoadAction.LoadSimilarMovies);

export const loadReviews = createAction<TReview[]>(LoadAction.LoadReviews);
