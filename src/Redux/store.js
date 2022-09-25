/* eslint-disable implicit-arrow-linebreak */

import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { combineReducers } from 'redux';
import { categoriesApi } from './APIFunctions/categories';
import { hotelsReducer } from './Actions/hotels';

const rootReducer = combineReducers({
  [categoriesApi.reducerPath]: categoriesApi.reducer,
  hotels: hotelsReducer,
});
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(categoriesApi.middleware),
});

setupListeners(store.dispatch);

export default store;
