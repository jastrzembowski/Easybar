import React, { Component } from "react";
import loadable from "@loadable/component";
import Catering from "./Catering";
import Intro from "./Intro";
import About from "./About";
import Contact from "./Contact";
import Opinions from "./catering/Opinions";
import "../App.css";
import stopka1 from "..//pageimages/stopka1.jpg";
import { Parallax } from "react-parallax";
import main1 from "../pageimages/main1.jpg";
import main2 from "../pageimages/main2.jpg";
import main3 from "../pageimages/main3.jpg";
const Header = loadable(() => import("./Header"));

export default class Main extends Component {
  render() {
    return (
      <>
     <div
          style={{
            justifyContent: "center",
          }}
        >
          <Header />
          <Intro />
          <Parallax bgImage={main1} strength={300}>
            <div
              style={{
                height: "300px",
              }}
            ></div>
          </Parallax>
          <Opinions />
          <Parallax bgImage={main2} strength={300}>
            <div
              style={{
                height: "300px",
              }}
            ></div>
          </Parallax>
          <Catering />
          <Parallax bgImage={main3} strength={300}>
            <div
              style={{
                height: "300px",
              }}
            ></div>
          </Parallax>
          <About />
          <Parallax bgImage={stopka1} strength={500}>
            <Contact />
          </Parallax>
        </div>
      </>
    );
  }
}
