import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import logo from './logowhitetext.png';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-left'>
        <img src={logo} alt="GG Tennis Academy" id="footerlogo"></img>
        <ul class="footerInfo">
          <li>(973) 223-4120</li>
          <li>info@theggtennisacademy.com</li>
          <li>10 Edison RD, Mahwah, NJ</li>
        </ul>
      </div>

      <div class='footer-right'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Meet The Team</Link>
            <Link to='/'>Our Mission</Link>
            <Link to='/'>Facilities</Link>
            <Link to='/'>Contact Us</Link>
            <Link to='/'>Location</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Additional Services</h2>
            <Link to='/'>Court Rentals</Link>
            <Link to='/'>Fitness</Link>
            <Link to='/'>Tournaments</Link>
            <Link to='/'>Stringing</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Programs</h2>
            <Link to='/'>Junior Programs</Link>
            <Link to='/'>Advanced Development</Link>
            <Link to='/'>Summer Programs 2021</Link>
          </div>
        </div>
      <small class='website-rights'>GG Tennis Academy © 2021</small>
    </div>
  );
}

export default Footer;
