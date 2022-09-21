import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, combineReducers } from 'redux';
import { hotelsReducer } from './Actions/hotels';

const rootReducer = combineReducers({ hotels: hotelsReducer });
const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));

export default store;
