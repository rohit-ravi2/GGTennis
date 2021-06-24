import React from 'react';
import '../../App.css';

export default function ContactUs() {
  return (
    <>
      <h1 class = "contact-title">Contact Us</h1>
      <p id="contact-description">Please feel free to contact us with any questions or concerns you may have.</p>
      
      <div class="contact-container">
        <div class="contact-wrapper">
          <p class="contact-info-head">Email:</p>
          <p class="contact-info1"><a href = "mailto: info@theggtennisacademy.com">info@theggtennisacademy.com</a></p>
        </div>

        <div class="contact-wrapper">
          <p class="contact-info-head">Phone:</p>
          <p class="contact-info2"><a href="tel:2014295352">(201) 429-5352</a></p>
        </div>
      </div>

      <h1 class = "location-title">Our Location</h1>      
      
      <div class="location-container">
        <iframe class="googlemap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.01489704431!2d-74.16820368489233!3d41.024930026349416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAxJzI5LjciTiA3NMKwMDknNTcuNyJX!5e0!3m2!1sen!2sus!4v1599076570411!5m2!1sen!2sus" 
        width="100%" height="440" frameborder="0" allowfullscreen="" aria-hidden="false" 
        tabindex="0"></iframe>
      </div>
      <div class="location-text-wrapper">
          <p class="location-text">GG Tennis Academy is located at Jeff’s Quest Health Club in Mahwah, NJ.</p>
          <p class="location-text">10 Edison Rd, Mahwah, NJ 07430.</p>
      </div>
    </>


  );
}
