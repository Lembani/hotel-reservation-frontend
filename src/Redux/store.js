import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, combineReducers } from 'redux';
// import logger from 'redux-logger';
import { hotelsReducer } from './Actions/hotels';
import ReservationsReducer from './Actions/reservations';

const rootReducer = combineReducers({ hotels: hotelsReducer, reservations: ReservationsReducer });
const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));

export default store;
