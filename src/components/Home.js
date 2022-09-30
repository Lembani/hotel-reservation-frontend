import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faWindowClose } from '@fortawesome/fontawesome-free-solid';
import { useState } from 'react';

import { NavLink } from 'react-router-dom';

const Home = () => {
  const [sideBar, setSideBar] = useState('none');
  const [navBar, setNavBar] = useState('current-nav');

  const handleOpen = () => {
    setSideBar('current-nav');
    setNavBar('none');
  };

  const handleClose = () => {
    setNavBar('current-nav');
    setSideBar('none');
  };

  return (
    <div className="home">
      <nav className={navBar}>
        <FontAwesomeIcon icon="fa-solid fa-bars" onClick={handleOpen} />
        <FontAwesomeIcon
          icon={faSearch}
          className="search"
          // eslint-disable-next-line no-alert
          onClick={() => alert('Please signup or signin!')}
        />
      </nav>
      <nav className={sideBar}>
        <div className="auth-links">
          <NavLink to="/register">
            <strong>Register</strong>
          </NavLink>
          <NavLink to="/login">
            <strong>Login</strong>
          </NavLink>
        </div>
        <FontAwesomeIcon icon={faWindowClose} onClick={handleClose} />
      </nav>
      <main>
        <strong>Welcome to...</strong>
        <h1 className="logo">HoVe</h1>
        <p>
          <span>Find a hotel</span>
          {' '}
          from anywhere in the world and
          {' '}
          <strong>reserve</strong>
          {' '}
          for as long as you need!
        </p>
        <div className="start">
          <NavLink to="/register">
            <strong>GET STARTED</strong>
          </NavLink>
          <NavLink to="/login">
            <span>Login</span>
          </NavLink>
        </div>
      </main>
    </div>
  );
};

export default Home;
