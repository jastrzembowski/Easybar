import React from "react";
import Slider from "react-slick";
import main4 from "../pageimages/main4.jpg";
import hero from "../pageimages/hero.jpg";
import main6 from "../pageimages/main6.jpg";


export default function Header() {

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    arrows: true,
    autoplayspeed: 500,
    infinite: true,
    fade: true,

    height: "655px",
  };

  return (
    <div
      id="header"
      style={{
        display: "flex",
        justifyContent: "center",
     
        marginTop: "65px",
        height: "655px",
      
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
     
          zIndex: 2,
          position: "absolute",
        }}
      >
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          zIndex: 2,
        }}
      >
        <Slider
          {...settings}
          style={{
            width: "100vw",
          }}
        >
            <div className="event-box">
            {/* <link rel="preload" as="image" href=`{{$main5}}`  alt="posiłki regeneracyjne"
              style={{ height: "655px", width: "100%" , objectFit:
            "cover"}} /> */}
            <img
              src={hero}
              alt="posiłki regeneracyjne"
              style={{ height: "655px", width: "100%" , objectFit:
            "cover"}}
            />
            <div className="main-border">
            <p className="main-text">Skontaktuj się z nami! <br/> 575-535-645</p>
             
            </div>
          </div>
          <div className="event-box">
            <img
              src={main4}
              alt="dla pracowników"
              style={{ height: "655px", width: "100%",objectFit:
              "cover" }}
            />
            <div className="main-border">
              <p className="main-text">Zadbaj o siebie <br/>i swoich pracowników</p>
            </div>
          </div>
          <div className="event-box">
            <img
              src={main6}
              alt="dla firm"
              style={{ height: "655px", width: "100%",objectFit:
              "cover" , objectPosition: "right"}}
            />
            <div className="main-border">
            <p className="main-text">Dobrze zbilansowane<br/> cateringi obiadowe</p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
