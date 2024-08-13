import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; 
import logo from '../pictures/logo.png';

const NavBar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Site Logo" className="navbar-logo" /> 
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/discover">Discover</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
