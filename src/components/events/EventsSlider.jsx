/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import Slider from "react-slick";
import urodziny1 from "../../pageimages/urodziny1.jpg";
import urodziny2 from "../../pageimages/urodziny2.jpg";
import wesele1 from "../../pageimages/wesele1.jpg";
export default class EventsSlider extends Component {
  render() {
    const settings = {
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      dots: false,
      arrows: true,
      autoplayspeed: 500,
      infiniite: true,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="events-container">
        <Slider
          {...settings}
          style={{
            width: "100%",
          }}
        >
          <div className="event-box">
            <img className="event-img" alt="stypy" src={urodziny1}></img>
            <div className="event-border">
              <p className="event-text">Urodziny</p>
            </div>
          </div>
          <div className="event-box">
            <img className="event-img" alt="imprezy" src={urodziny2}></img>
            <div className="event-border">
              <p className="event-text">Catering</p>
            </div>
          </div>
          <div className="event-box">
            <img className="event-img" alt="komunie" src={wesele1}></img>
            <div className="event-border">
              <p className="event-text">Imprezy okolicznościowe</p>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
