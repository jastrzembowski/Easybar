import React from "react";
import schab from "../easyimages/schab.jpg";
import schabburger from "../easyimages/schabburger.jpg";
import pierogi from "../easyimages/pierogi.jpg";
import sernik from "../easyimages/sernik.jpg";

export default function About() {
  return (
    <div id="about" data-aos="fade-right" data-aos-duration="1000">
      <h1>Nasze najlepsze:</h1>
      <div className="container">
        <div className="box" data-aos="fade-right" data-aos-duration="1000">
          <img
            src={schab}
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
