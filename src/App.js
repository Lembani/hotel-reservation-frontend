import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// eslint-disable-next-line import/extensions
import Home from './Components/Home';
import Hotels from './Components/Hotels';
import Categories from './Components/categories/Index';
import Category from './Components/categories/Show';
import store from './Redux/store';
import { FormProvider } from './Context/FormContext';

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
            element={(
              <FormProvider>
                <Categories />
              </FormProvider>
          )}
          />
          <Route exact path="/categories/:id" element={<Category />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
