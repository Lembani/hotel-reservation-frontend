/* eslint-disable import/extensions */
/* eslint-disable react/jsx-one-expression-per-line,react/jsx-wrap-multilines */
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Categories from './Components/categories/Index';
import Category from './Components/categories/Show';
import store from './Redux/store';
import { FormProvider } from './Context/FormContext';
import { MenuProvider } from './Context/MenuContext';
import AddHotel from './Components/Hotels/AddHotel';
import Hotels from './Components/Hotels/Hotels';
import HotelDetails from './Components/Hotels/HotelDetails';
import DeleteHotel from './Components/Hotels/DeleteHotel';
import Reservations from './Components/Reservations';
import CreateReservation from './Components/CreateReservation';

function App() {
  return (
    <Provider store={store}>
      <MenuProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
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
            <Route exact path="/add_hotel" element={<AddHotel />} />
            <Route exact path="/delete_hotel" element={<DeleteHotel />} />
            <Route exact path="/reservations" element={<Reservations />} />
            <Route exact path="/add_reservation" element={<CreateReservation />} />
          </Routes>
        </BrowserRouter>
      </MenuProvider>
    </Provider>
  );
}

export default App;
