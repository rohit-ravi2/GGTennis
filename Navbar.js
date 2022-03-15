import React, { Component } from 'react';
import css from './Navbar.css'
import { Link, useLocation } from 'react-router-dom';

class Navbar extends Component {
  state = {
    isOpen: false,
  }
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  componentDidMount() {
    window.addEventListener("scroll", this.resizeHeaderOnScroll);
  }
  resizeHeaderOnScroll() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 20,
      headerEl = document.getElementById("ggtext");

    if (distanceY > shrinkOn) {
      headerEl.classList.add("logoShrink");
    } else {
      headerEl.classList.remove("logoShrink");
    }
  }
 
  

  render() {
    return (
      <div>

        <a href="apparelpage.html"><img src="images/ball.png" id="ballheader" /></a>

        <img src="images/threelines.png" id="threelines" />

        <a href="index.html"><img src="images/logo.png" id="ggtext" /></a>
        <nav>
          <ul class="left">
            <li><Link to=''>Home</Link></li>
            <li><img src="images/whiteline.png" class="line" /></li>
            <li><Link to='/Programs'>Programs</Link></li>
            <li><img src="images/whiteline.png" class="line" /></li>
          </ul>
          <ul class="right">
            <li><img src="images/whiteline.png" class="line" /></li>
            <li><Link to='/Contact-Us'>Contact Us</Link></li>
            <li><img src="images/whiteline.png" class="line" /></li>
            <li><a href="reservation.html">Court Reservation</a></li>
          </ul>

          <ul class="balllink">
            <li><a href="apparelpage"><img src="./pageElements/other/ball.png" id="ballmobile" /></a></li>
          </ul>
          <ul class="programslink">
            <li><a href="programs">Programs</a></li>
          </ul>
        </nav>

      </div>



    )
  }
}

export default Navbar
