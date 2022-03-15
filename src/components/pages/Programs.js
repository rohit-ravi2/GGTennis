import React from 'react';
import '../../App.css';
export default function Product() {
  return (
    <>
      <h1 id="programs-title">Our Programs</h1>
      <div className="containerPrograms">
      <div className="wrapperPrograms">
        <img src={process.env.PUBLIC_URL + "/images/maxbackhand.JPG"} alt='Max Loia - GG Tennis Academy' class="programsImage"></img>
        <div className="text-programs">
          <h2 class="programs-header">Junior Programs</h2>
          <p>We offer programs to all ages assuring each student gets top notch coaching and development, while also having the most fun doing it.
          Our high energy staff teaches step by step development, making sure the kids are building a strong foundation. During these clinics the 
          coaches will have each player go through drilling, point play, and high intensity exciting games. These players will be developed to become 
          the future competitors of GG.</p>
          <h3 class="programs-schedule">Schedule</h3>
          <p class="schedule-text"><b>Saturday</b></p>
          <p>1:00pm - 2:30pm</p>
				  <p>2:30pm - 4:00pm</p>

          <p><b>Sunday</b></p>
          <p>1:00pm - 2:30pm</p>
        </div>  
      </div>
      <div className="wrapperPrograms">
        <img src={process.env.PUBLIC_URL + "/images/sandeepserve.JPG"} alt='Sandeep Alapati - GG Tennis Academy' class="programsImage"></img>
        <div className="text-programs">
          <h2 class="programs-header">Advanced Development</h2>
          <p>These programs are for the tournament and top level varsity players who have big aspirations for their games. 
            The players are put through off-court fitness in our gym and very high intensity drilling to develop footwork, strategy, and explosiveness. 
            We strive to keep an extremely hard working and lively culture to our program.
            Our coaches bring years of experience and knowledge gained from competing in various levels of tournaments, 
            from local prize money opens to future pro level. Coaches often play against students in practice to help 
            reinforce advanced concepts. For players who have goals of playing college tennis, our coaches will provide you with all 
            the information and guidance to make a personalized blueprint through the recruiting process.</p>
          
          <h3 class="programs-schedule">Schedule</h3>
          <p class="schedule-text"><b>Monday - Thursday</b></p>
          <p>4:00pm - 6:00pm</p>
				  <p>6:00pm - 8:00pm</p>

          <p><b>Saturday</b></p>
          <p>11:00am - 1:00pm</p>

          <p><b>Sunday</b></p>
          <p>2:30pm - 4:30pm</p>
        </div>
      </div>
      <div className="wrapperPrograms">
        <img src={process.env.PUBLIC_URL + "/images/nickforehand.JPG"} alt='Nick Lawliss - GG Tennis Academy' class="programsImage"></img>
        <div className="text-programs">
          <h2 class="programs-header">Summer Programs 2021</h2>
          <p>We will be offering several different options for summer programs this year, 
            ranging from 2 hour sessions to a full day camp. If you are interested in registering, 
            please contact us for more details.</p>
          
        </div>
      </div>
      </div>
    </>

  );
}
