import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// eslint-disable-next-line import/extensions
import Home from './components/Home.js';
import Hotels from './components/Hotels';
import Reservations from './components/Reservations';
import store from './Redux/store';
import CreateReservation from './components/CreateReservation';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/hotels" element={<Hotels />} />
          <Route exact path="/reservations" element={<Reservations />} />
          <Route exact path="/createReservation" element={<CreateReservation />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
