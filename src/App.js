import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// eslint-disable-next-line import/extensions
import Home from './components/Home.js';
import Hotels from './components/Hotels';
import store from './Redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/hotels" element={<Hotels />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
