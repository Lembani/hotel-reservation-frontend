import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './NavBar.css';
import localStorageActions from '../utils/localStorage';

const activeStyle = {
  background: '#84cc1f',
  color: 'white',
};

const NavBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const URL = 'http://localhost:3000/users/sign_out';
    axios
      .delete(URL)
      .then((res) => {
        localStorageActions.removeUser();
        const { data } = res;
        console.log(data);
        navigate('/');
      })
      .catch((error) => {
        console.log('Error logging out! ', error);
      });
  };

  return (
    <nav className="navbar">
      <div>
        <h2 className="logo logo-name">HoVe</h2>
      </div>
      <div className="links">
        <NavLink
          to="/hotels"
          className="navlink"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Hotels
        </NavLink>
        <NavLink
          to="/categories"
          className="navlink"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Categories
        </NavLink>
        <NavLink
          to="/reserve_now"
          className="navlink"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Reserve Now
        </NavLink>
        <NavLink
          to="/my_reservations"
          className="navlink"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          My Reservations
        </NavLink>
        <NavLink
          to="/add_hotel"
          className="navlink"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Add Hotel
        </NavLink>
        <NavLink
          to="/delete_hotel"
          className="navlink"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Delete Hotel
        </NavLink>
        <NavLink
          onClick={handleLogout}
          className="navlink"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Log Out
        </NavLink>
      </div>
      <div className="social-links">
        <div>
          <i className="uil uil-twitter" />
        </div>
        <div>
          <i className="uil uil-facebook-f" />
        </div>
        <div>
          <i className="uil uil-google" />
        </div>
        <div>
          <i className="uil uil-whatsapp" />
        </div>
        <div>
          <i className="uil uil-instagram-alt" />
        </div>
      </div>
      <div className="footer">
        <p> &copy; HoVe &amp; Micro 2022 </p>
      </div>
    </nav>
  );
};

export default NavBar;
