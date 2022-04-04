import React,{Component} from "react";
import Slider from "react-slick";
import taca1 from "../../easyimages/event/taca1.png"
import sala1 from "../../easyimages/event/sala1.jpg"
import sala2 from "../../easyimages/event/sala2.jpg"


export default class EventsHeader extends Component {
    render() {
      const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: true,
        autoplayspeed: 500,
        infiniite: true,
      };
  return (
    <div className="event-header-container">
 
      <div className="event-header-text-container">
        <h1>Dla Państwa już od 10 lat!</h1>
        <p>
          Podczas dziesięciu lat funkcjonowania naszej firmy, mieliśmy okazję
          organizować cateringi dla wielu instytucji i wydarzeń kulturalnych w
          mieście, m.in dla Festiwalu Teatrów Ulicznych "FETA", NSZZ Solidarność
          czy dla Prezydenta Rzeczpospolitej Polski. Zajmujemy się również
          organizacją styp, komunii i innych imprez okolicznościowych a także
          gościmy w Państwa domach i na imprezach plenerowych.
        </p>
      
      </div>
      <div className="event-photo-slider">
      <Slider {...settings}>
            <div>
                <img src={sala1} alt="sala" className="event-photo-slider-img"></img>
            </div>
            <div>
                <img src={sala2} alt="catering" className="event-photo-slider-img"></img>
            </div>
            <div>
                <img src={taca1} alt="sałatki" className="event-photo-slider-img"></img>
            </div>

        </Slider>
      </div>
    </div>
  );
}
}