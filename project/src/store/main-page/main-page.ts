import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const/enums';
import { mainPageInitialState } from '../../const/initial-states';
import { setGenre } from './main-page-actions';
import { fetchMainPageDataAction } from './main-page-api-actions';

export const mainPage = createSlice({
  name: NameSpace.MainPage,
  initialState: mainPageInitialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(setGenre, (state, action) => {
        state.selectedGenre = action.payload;
      })
      .addCase(fetchMainPageDataAction.pending, (state) => {
        state.isLoaded = false;
      })
      .addCase(fetchMainPageDataAction.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoaded = true;
      });
  }
});

