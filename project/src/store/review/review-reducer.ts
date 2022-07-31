import {createReducer} from '@reduxjs/toolkit';
import TReview from '../../types/comment';
import { TReviewState } from '../../types/review-state';
import { changeReview, loadReviews } from './review-actions';

type ReviewInitialState = {
  reviews: TReview[];
  review: TReviewState | null;
};

const initialState: ReviewInitialState = {
  reviews: [],
  review: null,
};

const reviewReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(changeReview, (state, action) => {
      state.review = action.payload;
    });
});

export default reviewReducer;
