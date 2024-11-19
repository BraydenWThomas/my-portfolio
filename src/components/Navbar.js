import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  console.log(menuOpen);

  return (
    <nav>
      <div className='title'>Brayden</div>
      <div className="menu" onClick={(event) => { event.stopPropagation(); setMenuOpen(!menuOpen); }}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;