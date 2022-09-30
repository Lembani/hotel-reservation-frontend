/* eslint-disable import/extensions */
/* eslint-disable react/jsx-one-expression-per-line,react/jsx-wrap-multilines */
import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import Private from './components/auth/Private';
import Home from './components/Home';
import Categories from './components/categories/Index';
import Category from './components/categories/Show';
import store from './redux/store';
import { FormProvider } from './context/FormContext';
import { MenuProvider } from './context/MenuContext';
import AddHotel from './components/hotels/AddHotel';
import HotelsComponent from './components/hotels/Hotels';
import HotelDetails from './components/hotels/HotelDetails';
import DeleteHotel from './components/hotels/DeleteHotel';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Reservations from './components/Reservations';
import CreateReservation from './components/CreateReservation';

function App() {
  return (
    <Provider store={store}>
      <MenuProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route element={<Private />}>
              <Route exact path="/hotels" element={<HotelsComponent />} />
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
              <Route exact path="/add_hotel" element={<AddHotel />} />
              <Route exact path="/delete_hotel" element={<DeleteHotel />} />
              <Route exact path="/reservations" element={<Reservations />} />
              <Route exact path="/add_reservation" element={<CreateReservation />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MenuProvider>
    </Provider>
  );
}

export default App;
