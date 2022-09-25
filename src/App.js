/* eslint-disable import/extensions */
/* eslint-disable react/jsx-one-expression-per-line,react/jsx-wrap-multilines */
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Categories from './components/categories/Index';
import Category from './components/categories/Show';
import store from './Redux/store';
import { FormProvider } from './Context/FormContext';
import AddHotel from './components/AddHotel';
import Hotels from './components/Hotels';
import HotelDetails from './components/HotelDetails';

function App() {
  return (
    <Provider store={store}>
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
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
