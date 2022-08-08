import {createReducer} from '@reduxjs/toolkit';
import { AppInitialState } from '../../types/state';
import { setDataLoadedStatus } from './app-actions';

const initialState: AppInitialState = {
  isDataLoaded: true,
};

const appReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    });
});

export default appReducer;
