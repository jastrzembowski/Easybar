import React, { Component } from "react";
import komunie1 from "../../pageimages/komunie1.jpg";
import { Parallax } from "react-parallax";
import sala5 from "../../pageimages/sala5.jpg";
import EventContact from "../events/EventContact";
import sala2 from "../../pageimages/sala2.jpg";
import logo from "../../pageimages/easylogo.png";
import obiad1 from "../../pageimages/sala-pop-1.jpg";
import obiad3 from "../../pageimages/sala-pop-3.jpg";
import obiad4 from "../../pageimages/sala-pop-4.jpg";
import obiad5 from "../../pageimages/sala-pop-5.jpg";
import obiad6 from "../../pageimages/sala-pop-6.jpg";
import obiad7 from "../../pageimages/sala-pop-7.jpg";
import Slider from "react-slick";


export default class Komunie extends Component {
  render() {
    const settings = {
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      dots: false,
      arrows: true,
      autoplayspeed: 500,
      infiniite: true,
      fade: true,
    };
    return (
      <>
        <div className="stypy-container">
          <img src={komunie1} alt="komunie" className="stypy-main-image"></img>
          <div className="event-border">
            <h1 className="stypy-main-header">I KOMUNIA ŚWIĘTA</h1>
          </div>
        </div>
        <h1 className="stypy-about-header">
          Profesjonalna organizacja <br /> przyjęć komunijnych i chrzcin
        </h1>
        <div className="stypy-about">
          <div className="stypy-text-container">
            <p className="stypy-text">
              Rodzice dzieci, które niedługo mają pójść do Pierwszej Komunii,
              coraz częściej decydują się na urządzanie przyjęć komunijnych poza
              domem. Do skorzystania z takiej oferty zaprasza również Easybar –
              zapewniamy kompleksową i profesjonalną obsługę, dzięki której
              Komunia na pewno będzie w pełni udana! Pierwsza Komunia jest jedną
              z ważnych uroczystości o charakterze religijnym, która może być
              także uświetniona uroczystym przyjęciem dla gości. Kiedyś tradycją
              było urządzanie przyjęć tego rodzaju w domach rodzinnych – teraz
              coraz częściej są one organizowane w salach okolicznościowych, w
              których można liczyć na kompleksową i fachową obsługę. Jeśli także
              są Państwo zainteresowani urządzeniem wyjątkowego przyjęcia
              komunijnego, zapraszamy serdecznie do bliższego zapoznania się z
              naszą ofertą. Naszym gościom zapewniamy usługi na najwyższym
              poziomie – z nami każde przyjęcie będzie udane!
            </p>
          </div>
          <div className="event-photo-slider">
            <Slider {...settings}>
              <div>
                <img
                  src={obiad1}
                  alt="sala-cateringowa"
                  className="event-photo-slider-img"
                ></img>
              </div>
              <div>
                <img
                  src={obiad3}
                  alt="sala-cateringowa"
                  className="event-photo-slider-img"
                ></img>
              </div>
              <div>
                <img
                  src={obiad4}
                  alt="sala na komunie"
                  className="event-photo-slider-img"
                ></img>
              </div>
              <div>
                <img
                  src={obiad5}
                  alt="sala na stype"
                  className="event-photo-slider-img"
                ></img>
              </div>
              <div>
                <img
                  src={obiad6}
                  alt="sala na urodziny"
                  className="event-photo-slider-img"
                ></img>
              </div>
              <div>
                <img
                  src={obiad7}
                  alt="sala "
                  className="event-photo-slider-img"
                ></img>
              </div>
            </Slider>
          </div>
        </div>
        <div className="komunie-button">
          <button>
            {" "}
            <a
              href="tel:530-841-941"
              style={{
                padding: "15px",
              }}
            >
              Zadzwoń teraz
            </a>
          </button>
          <button>
            {" "}
            <a
              style={{ padding: "15px" }}
              href="https://www.google.pl/maps/dir/54.3639246,18.645536/easybar/@54.3677542,18.5823289,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x46fd745e13c33d15:0x2945b0813b7d61de!2m2!1d18.5850649!2d54.357196"
            >
              Sprawdź trasę
            </a>
          </button>
        </div>
        <Parallax
          bgImage={sala5}
          strength={400}
          style={{
            filter: "brightness(80%)",
          }}
        >
          <div
            style={{
              height: "300px",
            }}
          ></div>
        </Parallax>
        <EventContact />
        <Parallax
          bgImage={sala2}
          strength={400}
          style={{
            filter: "brightness(80%)",
          }}
        >
          <div
            style={{
              height: "300px",
            }}
          ></div>
        </Parallax>
        <div style={{ backgroundColor: "#F8F8F8" }}>
          <div
            id="contact"
            style={{
              width: "100%",
              height: "35%",
              minHeight: "160px",
              display: "flex",
              flexFlow: "column",
            }}
          >
            <div
              className="contact-container"
              style={{
                height: "160",
                display: "flex",
                flexFlow: "row",
                flexWrap: "wrap",
                margin: "5%, 12.5%, 1%, 12.5%",
                alignItems: "center",
                justifyContent: "center",
                color: "#15161c",
              }}
            >
              <div className="komunie-open">
                <h1
                  style={{
                    marginTop: "5%",
                  }}
                >
                  Godziny Otwarcia
                </h1>
                <p>poniedziałek - piątek</p>
                <p>11:00-18:00</p>
                <p>sobota</p>
                <p>11:00-17:00</p>
              </div>
              <div className="komunie-address">
                <h1>Adres</h1>
                <p>ul. Warneńska 8c/2</p>
                <p>Gdańsk, Morena 80-288</p>
              </div>
              <div className="komunie-contact">
                <h1>Telefon</h1>
                <p>575-535-645</p>
                <p>530-841-941</p>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#15161c",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src={logo}
                alt="easybar logo"
                style={{
                  width: "6%",
                  minWidth: "100px",
                }}
              ></img>
            </div>
          </div>
        </div>
       
      </>
    );
  }
}
