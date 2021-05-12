import React from "react";

export default function catering() {
  return (
    <div
      id="catering"
      data-aos="fade-right"
      data-aos-delay="50"
      data-aos-duration="1000"
    >
      <h1 className="cssanimation sequence rotateXIn">
        Domowe obiady z dostawą do pracy!
      </h1>
      <p>
        Skontaktuj się z nami aby otrzymać spersonalizowaną ofertę cateringową
        dla Twojej firmy!
      </p>
      <button
      id={
          "button"
      }
        data-aos="flip-left"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        {" "}
        <a href="mailto:easybar2011@wp.pl">easybar2011@wp.pl</a>
      </button>
      <button
       className={
        "button"
    }
        data-aos="flip-right"
        data-aos-delay="200"
        data-aos-duration="1000"
        style={{
          marginBottom: "50px",
        }}
      >
        <a href="tel:530-841-941">530 841 941</a>
      </button>
    </div>
  );
}
