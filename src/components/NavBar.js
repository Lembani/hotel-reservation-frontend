import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import MenuContext from '../Context/MenuContext';
import './NavBar.css';

const activeStyle = {
  background: '#84cc1f',
  color: 'white',
};

const NavBar = () => {
  const { sideBar, setSideBar } = useContext(MenuContext);
  return (
    <nav className={sideBar ? 'mobile-menu' : 'navbar'}>
      <div>
        <h2 className="logo logo-name">HoVe</h2>
      </div>
      <div className="links" onClick={() => setSideBar(false)} role="presentation">
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
      <button type="button" onClick={() => setSideBar(false)} className="close-menu">Close Menu</button>
    </nav>
  );
};
export default NavBar;
