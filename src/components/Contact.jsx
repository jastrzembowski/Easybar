import React from "react";
import foot from "../easyimages/foot.jpg";
import logo from "../easyimages/logo.png";

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
        background: "linear-gradient(to right, #ffffff, #fdffcf, #ffd4d4)"
      }}
    >
   <div className="contact-container"
   style={{
       height: "160",
       display: "flex",
       flexFlow: "row",
       flexWrap: "wrap",
       margin: "5%, 12.5%, 1%, 12.5%",
       alignItems: "center",
       justifyContent: "center",
    
   }}>
       <div className="open">
            <h1 style={{
                marginTop: "5%"
            }
            }>
                Godziny Otwarcia
            </h1>
          
            <p>
                poniedziałek - piątek
            </p>
            <p>
                11:00-18:00
            </p>
            <p>
                sobota
            </p>
            <p>
                11:00-17:00
            </p>
       </div>
        <div className="address">
        <h1>
            Adres
        </h1>
        <p>
            Gdańsk, ul. Warneńska 8c/2 
        </p>
        </div>
        <div className="contact">
        <h1>
            Telefon
        </h1>
        <p>
           575-536-546
        </p>
        <p>
            530-841-941
        </p>
        </div>

   </div>
      <div
        style={{

          backgroundColor: "black",

        }}
      >
        <img
          src={logo}
          style={{
            width: "6%",
            minWidth: "100px",
          }}
        ></img>
      </div>
    </div>
  );
}
