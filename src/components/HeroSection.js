import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/vid.mp4' autoPlay loop muted />
      <h1><i>"Quotes"</i></h1>
      <p>Check out the Program!</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Court Reservation
        </Button>

      </div>
    </div>
  );
}

export default HeroSection;
