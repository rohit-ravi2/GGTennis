import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './logowhitetext.png'; 

function Navbar() {
  return (
    <>
    <nav>
      
    <ul className = 'nav-left'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/contact-us'>Contact Us</Link></li>
      </ul>

      <Link to='/' className='navbar-logo'><img src={logo} alt="GG Tennis Logo" class="logo"/></Link>
     
      <ul className = 'nav-right'>
        <li><Link to='/programs'>Programs</Link></li>
        <li><Link to='/announcements'>Announcements</Link></li>
     </ul>
    </nav>
  
     
    </>
  );
}

export default Navbar;



