/* eslint-disable implicit-arrow-linebreak */

import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { combineReducers } from 'redux';
import { categoriesApi } from './api-functions/categories';
import { hotelsReducer, hotelDataReducer } from './actions/hotels';
import ReservationsReducer from './actions/reservations';

const rootReducer = combineReducers({
  [categoriesApi.reducerPath]: categoriesApi.reducer,
  hotels: hotelsReducer,
  hotelData: hotelDataReducer,
  reservations: ReservationsReducer,
});
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(categoriesApi.middleware),
});

setupListeners(store.dispatch);

export default store;
