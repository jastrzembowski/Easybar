import React from "react";
import dinn1 from "../easyimages/dinn1.jpg";
import dinn2 from "../easyimages/dinn2.jpg";
import dinn3 from "../easyimages/dinn3.jpg";

export default function Products() {
  return (
    <div  data-aos="fade-left"     data-aos-duration="1000"
      id="products"
      style={{
        display: "flex",
        flexFlow: "row",
        flexWrap: "wrap"
      }}
    >
      
      <div
        className="dinner"
        style={{
          backgroundImage: `url(${dinn1})`,
          width: "40vh",
          height: "40vh",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p>
          PYSZNE <br /> DOMOWE <br />
          OBIADY
        </p>
      </div>
      <div
        className="dumplings"
        style={{
          backgroundImage: `url(${dinn2})`,
          width: "40vh",
          height: "40vh",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p>
          Ręcznie
          <br /> lepione <br /> PIEROGI
        </p>
      </div>{" "}
      <div
        className="burger"
        style={{
          backgroundImage: `url(${dinn3})`,
          width: "40vh",
          height: "40vh",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p>
          {" "}
          ORYGINALNE <br /> SCHAB <br/> BURGERY
        </p>
      </div>
    </div>
  );
}
