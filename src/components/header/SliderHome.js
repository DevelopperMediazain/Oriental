import React, { Component } from "react";
import Slider from "react-slick";


export default class SliderHome extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="sliderHome">
        <Slider {...settings}>
          <div>
             <img src={process.env.PUBLIC_URL + '/images/bg/12.jpg'} />
          </div>
          <div>
          <img src={process.env.PUBLIC_URL + '/images/bg/70.jpg'} />
          </div>
          <div>
          <img src={process.env.PUBLIC_URL + '/images/bg/68.jpg'} />
          </div>
        
        
         
        </Slider>
      </div>
    );
  }
}