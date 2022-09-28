import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const activeStyle = {
  background: '#84cc1f',
  color: 'white',
};

const NavBar = () => (
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
        to="/createReservation"
        className="navlink"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Reserve Now
      </NavLink>
      <NavLink
        to="/reservations"
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
        to="/log_out"
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
      <p> &copy; HoVe & Micro 2022 </p>
    </div>
  </nav>
);
export default NavBar;
