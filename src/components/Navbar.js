import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css"

function Navbar() {
  return (
    <nav>
      <div className='title'>Brayden</div>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;