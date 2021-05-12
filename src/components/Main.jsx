import React, { Component } from "react";
import Header from "./Header";
import Background from "./Background";
import Products from "./Products";
import Catering from "./Catering";
import Intro from "./Intro";
import About from "./About";
import Contact from "./Contact";
import "../App.css";

export default class Main extends Component {
    render(){
  return (
    <div style={{
      justifyContent: "center"
    }}>
      <Background />
      <Header />
      <hr
        className="ornament"
        style={{
          marginTop: "60px",
        }}
      />
      <Intro />
      <hr className="ornament" />
      <Catering />
      <hr className="ornament" />

      <About />
      <hr className="ornament" />
      <Products />
      <hr className="ornament" />
      <Contact />
    </div>
  );
}}
