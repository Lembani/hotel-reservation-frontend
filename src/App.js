/* eslint-disable import/extensions */
/* eslint-disable react/jsx-one-expression-per-line,react/jsx-wrap-multilines */
import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import Private from './Components/Auth/Private';
import Home from './Components/Home';
import Categories from './Components/categories/Index';
import Category from './Components/categories/Show';
import store from './Redux/store';
import { FormProvider } from './Context/FormContext';
import AddHotel from './Components/Hotels/AddHotel';
import Hotels from './Components/Hotels/Hotels';
import HotelDetails from './Components/Hotels/HotelDetails';
import DeleteHotel from './Components/Hotels/DeleteHotel';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route element={<Private />}>
            <Route exact path="/hotels" element={<Hotels />} />
            <Route
              exact
              path="/categories"
              element={
                <FormProvider>
                  <Categories />
                </FormProvider>
                    }
            />
            <Route
              exact
              path="/categories/:id"
              element={
                <FormProvider>
                  <Category />
                </FormProvider>
                      }
            />
            <Route exact path="/hotels" element={<HotelDetails />}>
              <Route path=":id" element={<HotelDetails />} />
            </Route>
            <Route exact path="/add_hotel" element={<AddHotel />} /><Route exact path="/delete_hotel" element={<DeleteHotel />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
