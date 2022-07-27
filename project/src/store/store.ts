import {configureStore} from '@reduxjs/toolkit';
import mainPageReducer from './main-page-reducer';

const store = configureStore({reducer: mainPageReducer});

export default store;
