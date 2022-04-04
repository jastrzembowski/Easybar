import React, { Component } from "react";
import stypy1 from "../../pageimages/stypy1.jpg";
import { Parallax } from "react-parallax";
import sala6 from "../../pageimages/sala6.jpg";
import EventContact from "../events/EventContact";
import Contact from "../Contact";
import sala1 from "../../pageimages/sala1.jpg";
import obiad1 from "../../pageimages/sala-pop-1.jpg";
import obiad3 from "../../pageimages/sala-pop-3.jpg";
import obiad4 from "../../pageimages/sala-pop-4.jpg";
import obiad5 from "../../pageimages/sala-pop-5.jpg";
import obiad6 from "../../pageimages/sala-pop-6.jpg";
import obiad7 from "../../pageimages/sala-pop-7.jpg";
import Slider from "react-slick";


export default class Stypy extends Component {
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
          <img src={stypy1} alt="stypy" className="stypy-main-image"></img>
          <div className="event-border">
            <h1 className="stypy-main-header">STYPY I KONSOLACJE</h1>
          </div>
        </div>
        <h1 className="stypy-about-header" 
       >
            Profesjonalna organizacja styp <br />i obiadów po pogrzebach
          </h1>
        <div className="stypy-about">

          <div className="stypy-text-container">
         
          <p className="stypy-text">
            Organizacja tradycyjnego poczęstunku dla przybyłych na pogrzeb
            krewnych i przyjaciół zmarłego jest zwykle dużym wyzwaniem. Mało kto
            ma odpowiednie warunki do przyjęcia większej liczby osób, a smutne
            okoliczności wydarzenia dodatkowo utrudniają przygotowania. Warto
            więc skorzystać z wygodnego rozwiązania, jakim jest stypa w
            restauracji. Jeśli chcą Państwo jak najlepiej ugościć uczestników
            pogrzebu, zapraszamy do skorzystania z naszych usług. Wystarczy
            zarezerwować termin, podać orientacyjną liczbę gości i godzinę
            przybycia oraz wybrać menu. Wszystko to mogą Państwo zrobić
            telefonicznie lub mailowo, a całą organizację spotkania zostawić
            nam. Dzięki naszej pomocy będą mogli Państwo skupić się na głównych
            uroczystościach żałobnych, nie martwiąc się o godne ugoszczenie
            bliskich i znajomych.
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
 <div className="stypy-button">
     <button><a href="tel:530-841-941" style={{
          padding:"15px"
        }}>Zadzwoń teraz</a>
 </button> <button>
        <a style={{padding:"15px"}} href="https://www.google.pl/maps/dir/54.3639246,18.645536/easybar/@54.3677542,18.5823289,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x46fd745e13c33d15:0x2945b0813b7d61de!2m2!1d18.5850649!2d54.357196">Sprawdź trasę</a>
        </button>
</div>
        <Parallax
          bgImage={sala6}
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
          bgImage={sala1}
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
        <div style={{ backgroundColor: "#15161c" }}>
          <Contact />
        </div>

      </>
    );
  }
}
