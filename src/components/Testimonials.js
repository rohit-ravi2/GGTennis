import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import css from "./Testimonials.css"
export default class Testimonials extends Component {
    render() {
        return (
            <div>
                <h1>Testimonials</h1>
                <Carousel
                    showArrows={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    showStatus={false}
                    autoPlay={true}
                    interval={6100}
                >



                    <div >
                        <div className="myCarousel">
                            <h3>Player Name 1</h3>
                            <h4>College Name '2X</h4>
                            <p>
                                Insert Quote 1 Here
            </p>

                        </div>
                    </div>

                    <div >

                        <div className="myCarousel">
                            <h3>Player Name 2</h3>
                            <h4>College Name '2X</h4>
                            <p>
                                Insert Quote 2 Here
            </p>

                        </div>
                    </div>
                    <div >
                        <div className="myCarousel">
                            <h3>Player Name 3</h3>
                            <h4>College Name '2X</h4>
                            <p>
                                Insert Quote 3 Here
            </p>

                        </div>
                    </div>


                </Carousel>
            </div>

        );
    }
}