import { createAction } from '@reduxjs/toolkit';
import { ChangeAction } from '../../const/enums';
import { TReviewState } from '../../types/review-state';

export const changeReview = createAction<TReviewState>(ChangeAction.ChangeReview);
