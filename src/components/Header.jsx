import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import slider1 from "../easyimages/slider1.jpg";
import slider2 from "../easyimages/slider2.jpg";
import slider3 from "../easyimages/slider3.jpg";

export default function Header() {
  const images = [slider1, slider2, slider3];

  return (
    <div
      id="header"
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100",
        marginTop: "65px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "90%",
          zIndex: 1000000,
        }}
      >
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          interval={4000}
        >
          <div>
            <img src={slider1} />
          </div>
          <div>
            <img src={slider2} />
          </div>
          <div>
            <img src={slider3} />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
