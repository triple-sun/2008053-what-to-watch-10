import { createAction } from '@reduxjs/toolkit';
import { ChangeAction, LoadAction } from '../../const/enums';
import TReview from '../../types/comment';
import { TReviewState } from '../../types/review-state';

export const loadReviews = createAction<TReview[]>(LoadAction.LoadReviews);

export const changeReview = createAction<TReviewState>(ChangeAction.ChangeReview);
