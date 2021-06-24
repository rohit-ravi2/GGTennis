import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/arren.JPG'
              text='Programs'
              path='/programs'
            />
            <CardItem
              src='images/justinfeed.JPG'
              text='Our Team'
              path='/team'
            />            
            </ul>
            <ul className='cards__items'>
            <CardItem
              src='images/faculty.JPG'
              text='Facilities'
              path='/facilities'
            />
            <CardItem
              src='images/keesh.JPG'
              text='Our Mission'
              path='/our-mission'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
