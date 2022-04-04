import React from "react";
import logo from "../pageimages/easylogo.png"

export default function Contact() {
  return (
    <div
      id="contact"
      style={{
        width: "100%",
        height: "35%",
        minHeight: "160px",
        display: "flex",
        flexFlow: "column",
   
      }}
    >
      <div
        className="contact-container"
        style={{
          height: "160",
          display: "flex",
          flexFlow: "row",
          flexWrap: "wrap",
          margin: "5%, 12.5%, 1%, 12.5%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="open">
          <h1
            style={{
              marginTop: "5%",
            }}
          >
            Godziny Otwarcia
          </h1>
          <p>poniedziałek - piątek</p>
          <p>11:00-19:00</p>
          <p>sobota</p>
          <p>11:00-18:00</p>
        </div>
        <div className="address">
          <h1>Adres</h1>
          <p>ul. Warneńska 8c/2</p>
          <p>Gdańsk, Morena 80-288</p>
        </div>
        <div className="contact">
          <h1>Telefon</h1>
          <p>575-535-645</p>
          <p>530-841-941</p>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#15161c",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={logo}
          alt="easybar logo"
          style={{
            width: "6%",
            minWidth: "100px",
          }}
        ></img>
      </div>
    </div>
  );
}
