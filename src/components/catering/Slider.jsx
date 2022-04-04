import React, { Component } from "react";
import Slider from "react-slick";
import ebud from "../../easyimages/firmy/ebud.jpg"
import budimex from "../../easyimages/firmy/budimex.jpg"
import budokop from "../../easyimages/firmy/budokop.jpg"
import iculture from "../../easyimages/firmy/iculture.jpg"
import indeks from "../../easyimages/firmy/indeks.png"
import mostostal from "../../easyimages/firmy/mostostal.jpg"
import pern from "../../easyimages/firmy/pern.jpg"
import polnord from "../../easyimages/firmy/polnord.jpg"
import solidarnosc from "../../easyimages/firmy/solidarnosc.jpg"
import strabag from "../../easyimages/firmy/strabag.jpg"



export default class SimpleSlider extends Component {
    render() {
      const settings = {
        slidesToShow: 7,
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
                slidesToShow: 5,
                slidesToScroll: 3,
                infinite: true,
                dots: false
              }
            },
            {
                breakpoint: 1100,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: false
                }
              },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }]
      };
      return (
        <div className="slick">
          <Slider {...settings}>
            <div style={{
        marginTop: "auto",
        marginBottom: "auto"
            }}>
              <img src={ebud} alt="ebud" width="50%"  style={{
                  marginTop:"4%"
              }} ></img>
            </div>
            <div>
              <img src={budimex} alt="budimex" width="70%"  style={{
                  marginTop:"8%"
              }}></img>
            </div> <div>
              <img src={budokop} alt="budokop" width="70%"  style={{
                  marginTop:"10%"
              }}></img>
            </div> <div>
              <img src={iculture} alt="iculture" width="70%"  style={{
                  marginTop:"4%"
              }}></img>
            </div> <div>
              <img src={indeks} alt="mostostal" width="70%" style={{
                  marginTop:"14%"
              }}></img>
            </div> <div>
              <img src={mostostal} alt="montostal" width="70%" style={{
                  marginTop:"17%"
              }} ></img>
            </div> <div>
              <img src={pern} alt="pern" width="70%"></img>
            </div> <div>
              <img src={polnord} alt="polnord" width="70%" style={{
                  marginTop:"12%"
              }}></img>
            </div> <div>
              <img src={solidarnosc} alt="solidarnosc" width="70%"  style={{
                  marginTop:"10%"
              }}></img>
            </div>
            <div>
              <img src={strabag} alt="strabag" width="70%"  style={{
                  marginTop:"10%"
              }}></img>
            </div>
          </Slider>
        </div>
      );
    }
  }