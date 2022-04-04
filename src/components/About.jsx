import React from "react";
import schab from "../easyimages/schab.png";
import schabburger from "../easyimages/schabburger.png";
import pierogi from "../easyimages/pierogi.png";
import sernik from "../easyimages/sernik.png";
export default function About() {
  return (
    <div id="about" data-aos="fade-right" data-aos-duration="1000">
      <h1>Nasze najlepsze:</h1>
      <div className="container">
        <div className="box" data-aos="fade-right" data-aos-duration="1000">
          <img
            src={schab}
            alt="schabowy"
            style={{
              width: "100%",
              minWidth: "400px",
            }}
          ></img>
          <b>
            <p>Schabowy XXL z karkówką</p>
          </b>
        </div>
        <div class="box" data-aos="fade-left" data-aos-duration="1000">
          {" "}
          <img
            src={schabburger}
            alt="schabburger"
            style={{
              width: "100%",
              minWidth: "400px",
            }}
          ></img>
          <b>
            {" "}
            <p>Schabburger klasyczny</p>
          </b>
        </div>
        <div class="box" data-aos="fade-right" data-aos-duration="1000">
          {" "}
          <img
            src={pierogi}
            alt="pierogi"
            style={{
              width: "100%",
              minWidth: "400px",
            }}
          ></img>
          <b>
            {" "}
            <p>Pierogi z mięsem</p>
          </b>
        </div>
        <div class="box" data-aos="fade-left" data-aos-duration="1000">
          {" "}
          <img
            src={sernik}
            alt="sernik"
            style={{
              width: "100%",
              minWidth: "400px",
            }}
          ></img>
          <b>
            {" "}
            <p>Sernik Wiedeński</p>
          </b>
        </div>
      </div>
    </div>
  );
}
