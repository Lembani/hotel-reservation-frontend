import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, combineReducers } from 'redux';

const rootReducer = combineReducers({ });
const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));

export default store;
