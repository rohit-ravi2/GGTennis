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
              src={process.env.PUBLIC_URL + "/images/arren.JPG"}
              text='Programs'
              path='/programs'
            />
            <CardItem
              src={process.env.PUBLIC_URL + "/images/justinFeed.JPG"}
              text='Our Team'
              path='/team'
            />            
            </ul>
            <ul className='cards__items'>
            <CardItem
              src={process.env.PUBLIC_URL + "/images/faculty.JPG"}
              text='Facilities'
              path='/facilities'
            />
            <CardItem
              src={process.env.PUBLIC_URL + "/images/keesh.JPG"}
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
