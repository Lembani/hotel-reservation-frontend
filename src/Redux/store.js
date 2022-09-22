import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { combineReducers } from 'redux';
import { categoriesApi } from './APIFunctions/categories';

const rootReducer = combineReducers({ [categoriesApi.reducerPath]: categoriesApi.reducer });
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(categoriesApi.middleware),
});
import { hotelsReducer } from './Actions/hotels';

setupListeners(store.dispatch);

export default store;
