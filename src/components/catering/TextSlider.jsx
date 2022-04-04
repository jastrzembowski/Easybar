import React, {Component} from "react";
import Slider from "react-slick";
import dlafirm1 from "../../pageimages/dlafirm1.jpg"
export default class TextSlider extends Component {
  render() {
    const settings = {
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      dots: false,
      arrows: false,
      autoplayspeed: 500,
      vertical: true,
      verticalSwiping: true,
      infinite: true,
      fade: true,
    };
  return (
    <>  
   <div className="catering-text-slider-container" style={{backgroundImage: `url(${dlafirm1})`, backgroundPosition: "center"}}>
     <div className="catering-box" >
      <Slider {...settings}>
          <div className="catering-text">
            <h1 className="">Prawdziwe, domowe, ciepłe<br/> jedzenie dla firm</h1>
          </div>
          <div className="catering-text">
            <h1 className="">Wysokokaloryczne posiłki <br/>w dobrej cenie</h1>
          </div>
          <div className="catering-text">
            <h1 className="">Zadbaj o swoich pracowników!</h1>
          </div>
        </Slider>
        <div class="arrow bounce" >
           
</div>
        </div>
        </div>
    </>
  );
}}
