import React from "react";
import TextSlider from "./catering/TextSlider";
import SimpleSlider from "./catering/Slider";
import kwiecien from "../pageimages/kwiec.pdf";
import marzec from "../pageimages/marzec.pdf";
import { Parallax } from "react-parallax";
import Opinions from "./catering/Opinions";
import Contact from "./Contact";
import jedzenie1 from "../pageimages/jedzenie1.jpg";
import jedzenie2 from "../pageimages/jedzenie2.jpg";
import parallax8 from "../easyimages/parallax8.png";

export default function CateringPage() {
  return (
    <div>
      <TextSlider />
      <SimpleSlider />
      <Parallax
        bgImage={jedzenie2}
        strength={300}
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

      <div className="about-catering">
        <div className="about-container">
          <div className="about-text">
            <h1>Organizujemy ciepłe posiłki dla Państwa firmy</h1>
            <p>
              Zapewnimy Państwa pracownikom codzienny dostęp do różnorodnych,
              świeżych i sytych posiłków. Proponujemy kompleksową i elastyczną
              ofertę dostosowaną do Państwa potrzeb.
            </p>
          </div>

          <div className="about-text">
            <h1>Pobierz aktualne menu!</h1>
            <a href={marzec} className="event-download" download style={{color: "white"}}>
          MARZEC
        </a>
        <a href={kwiecien} className="event-download" download style={{color: "white"}}>
          KWIECIEŃ
        </a>
        <button style={{marginBottom:"25px"}}><a
          href="tel:530-841-941"
          style={{
            padding: "15px",
            marginBottom: "15px",
            
          }}
        >
          Zadzwoń teraz!
        </a>
</button>
          </div>
        </div>

   
         <iframe scrolling="no" id="gmap_canvas" src="https://maps.google.com/maps?width=1000&amp;height=700&amp;hl=en&amp;q=Warne%C5%84ska%208c/2%20Gda%C5%84sk+(EASYBAR%20-%20Pyszne,%20domowe%20obiady!)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="1300" height="700" frameborder="0"></iframe><script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=cdf5f0547cc0be2cb489929435cee773e8d0c489'></script>
        </div>
  
   
      <Parallax
        bgImage={jedzenie1}
        strength={700}
        style={{
          filter: "brightness(80%)",
          marginTop: "100px"
        }}
      >
        <div
          style={{
            height: "200px",
            marginTop: "200px",
          }}
        ></div>
      </Parallax>
      <Opinions />
      <Parallax bgImage={parallax8} id="x" strength={500}>
        <Contact />
      </Parallax>
   
    </div>
  );
}
