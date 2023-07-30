// Navbar.js

import React, { useState } from 'react';
import './compo.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/">CWC 2023</Link>
        </div>

        <div className='togle'>
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* The navbar menu */}
        <ul className="navbar-menu" >
          <li className="navbar-item">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/schedule">Schedule</Link>
          </li>
         
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
