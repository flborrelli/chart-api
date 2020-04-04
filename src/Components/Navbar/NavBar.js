import React from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';
import page1Img from '../../assets/circle-dot.png';
import page2Img from '../../assets/leaf.png';

function NavBar() {
  return (

    <nav className="navbar-container">
      <img src={page1Img} alt="circle-dot-icon"/>
      <p>Page1</p>
      <img src={page2Img} alt="leaf"/>
      <p>Page2</p>
    </nav>
    
  );
}

export default NavBar;
