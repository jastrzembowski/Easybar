import React from "react";
import cennik from "../../pageimages/cennik.pdf";

export default function EventContact() {
  return (
    <>
    <div className="event-container">
  <div className="event-menu">
    <h1 className="event-menu-header">
      Proponowane półmiski na kolację
    </h1>
    <p>
   <b> Półmisek mix nr.1</b><br/>
jajko z majonezem i szynką<br/>
sałatka jarzynowa<br/>
galaretka drobiowa<br/>
razem ok. 15 porcji – 150 zł<br/>
<b>Półmisek mix nr. 2</b><br/>
tortilla z warzywami i szynką<br/>
sałatka ryżowa z szynką i warzywami<br/>
roladka drobiowa faszerowana szpinakiem i serem<br/>
razem ok. 15 porcji – 150 zł<br/>
<b>Półmisek mix nr. 3</b><br/>
pstrąg w galarecie<br/>
sałatka z tuńczykiem<br/>
jajko z majonezem i łososiem<br/>
razem ok. 15 porcji – 160 zł<br/>
    </p>

  </div>

    <div className="event-contact-container">
            <div className="event-contact-text">
             
        <p>
          Skontaktuj się z nami aby otrzymać ofertę dostosowaną do Twoich
          potrzeb
        </p>
        <button  style={{marginBottom: "25px"}}> 
          <a href="mailto:easybar2011@wp.pl">easybar2011@wp.pl</a>
        </button>
        <button>
          <a href="tel:503-335-473">503-335-473</a>
        </button>
     
      </div>
      <div className="event-contact-prizes">
        <h1>Sprawdź aktualny cennik</h1>
        <a href={cennik} className="event-download" download>
          {" "}
          POBIERZ
        </a>
      </div>
      </div>
    </div>
    </>
  );
}
