import React from "react";
import { Link} from "react-router-dom";
export default function catering() {
  return (
    <div
      id="catering"
      data-aos="fade-right"
      data-aos-delay="50"
      data-aos-duration="1000"
    >
      <h1
        className="cssanimation sequence rotateXIn"
        style={{
          textAlign: "center",
        }}
      >
        Domowe obiady z dostawą do pracy!
      </h1>
      <Link to="/catering"> <p className="catering-text-link">
        Skontaktuj się z nami aby otrzymać spersonalizowaną ofertę cateringową
        dla Twojej firmy!
     </p> </Link>
      <button id={"button"}>
        <a href="mailto:easybar2011@wp.pl">easybar2011@wp.pl</a>
      </button>
      <button
        id={"button"}
       
      >
        <a href="tel:530-841-941" style={{
          paddingBottom:"10px"
        }}>530 841 941</a>
        </button>
           <button
        id={"button"}
       
      >
        <a href="https://www.google.pl/maps/dir/54.3639246,18.645536/easybar/@54.3677542,18.5823289,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x46fd745e13c33d15:0x2945b0813b7d61de!2m2!1d18.5850649!2d54.357196"
        style={{
          paddingBottom:"10px"
        }}>Sprawdź trasę!</a>
      </button>
    </div>
  );
}
