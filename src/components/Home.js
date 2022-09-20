import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faWindowClose } from '@fortawesome/fontawesome-free-solid';
import { useState } from 'react';

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
          onClick={() => alert('Please signup or signin!')}
        />
      </nav>
      <nav className={sideBar}>
        <div className="auth-links">
          <strong>Register</strong>
          <strong>Login</strong>
        </div>
        <FontAwesomeIcon icon={faWindowClose} onClick={handleClose} />
      </nav>
      <main>
        <strong>Welcome to...</strong>
        <h1 className="logo">HoVe</h1>
        <p>Acquire what you desire, reserve what you really deserve!!</p>
      </main>
    </div>
  );
};

export default Home;
