import {createReducer} from '@reduxjs/toolkit';
import { setDataLoadedStatus } from './app-actions';

type StatusInitialState = {
  error: null | string;
  isDataLoaded: boolean;
};

const initialState: StatusInitialState = {
  error: null,
  isDataLoaded: false,
};

const appStatusReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    });
});

export default appStatusReducer;
