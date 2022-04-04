import React from "react";
import EventsSlider from "./events/EventsSlider";
import EventsHeader from "./events/EventsHeader";
import EventContact from "./events/EventContact";
import Contact from "./Contact";
import { Parallax } from "react-parallax";
import sala2 from "../pageimages/sala2.jpg"
import parallax8 from "../easyimages/parallax8.png";

export default function Event() {
  return (
    <div>
      <EventsSlider />
      <EventsHeader />
      <Parallax
        bgImage={sala2}
      >
        <div
          style={{
            height: "300px",
          }}
        ></div>
      </Parallax>
      <EventContact />

      <Parallax
        bgImage={parallax8}
        blur={{ min: -15, max: 15 }}
        strength={200}
        
      >
        <Contact />
      </Parallax>

    </div>
  );
}
