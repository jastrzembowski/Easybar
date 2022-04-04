import React from "react";
import kontakt from "../../pageimages/kontakt.jpg";

export default function ContactPage() {
  return (
    <>
      <div className="contact-page-container" style={{
        backgroundImage:`url(${kontakt})`, backgroundPosition: "left"
      }}>
   <div className="info-container">    
          <div className="info-box">
          <h1 className="info-box-header">Skontaktuj się z nami!</h1>
          <div className="info-contact">
      
            <button className="info-button">
              <a href="tel:575-535-645">tel: 575 535 645</a>
            </button>
            <button className="info-button">
              <a href="tel:530-841-941">tel: 530 841 941</a>
            </button>
            <button className="info-button">
              <a href="mailto:easybar2011@wp.pl">easybar2011@wp.pl</a>
            </button>
            <button className="info-button">
              <a href="https://www.facebook.com/easybarmorena">
                Facebook.com/easybarmorena
              </a>
            </button>
          </div>
          <div className="info-hours">
            <h1>Godziny Otwarcia</h1>
            <p>poniedziałek - piątek</p>
            <p>11:00-19:00</p>
            <p>sobota</p>
            <p>11:00-18:00</p>
          </div>
          <div className="info-address">
            <h1>Adres</h1>
            <p>ul. Warneńska 8c/2</p>
            <p>Gdańsk, Morena 80-288</p>
          </div>
        </div>
        <div className="map-container">
        <iframe scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=650&amp;height=500&amp;hl=en&amp;q=Warne%C5%84ska%208c/2%20Gda%C5%84sk+(EASYBAR%20-%20Pyszne,%20domowe%20obiady!)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="650" height="500" frameborder="0"></iframe><script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=af639b203f1b76ca1c1a5d3e817116768cfe24e0'></script>
        </div>
      </div>
      </div>
   
    </>
  );
}
