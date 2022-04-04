import React from "react";

export default function intro() {
  return (
    <div
      className="intro"
      data-aos="fade-left"
      rel="preload"
      data-aos-duration="1000"
      style={{
        height: "50%",
        display: "flex",
        flexFlow: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {" "}
      <div
        style={{
          position: "relative",
        }}
      >
        <h1 className="introHeader">
          Pyszne domowe jedzenie... <br /> i nie tylko!
        </h1>
      </div>
      <p>
        Easybar oferuje coś dla każdego. Znajdziesz u nas smaczne domowe obiady,
        jedyne w swoim rodzaju schabburgery oraz pyszne pierogi ręcznie lepione
        przez naszych kucharzy. Wszystko w przystępnych cenach.
      </p>
      <p>
        Wszystkie dania przygotowywane są według naszych przepisów, z
        regionalnych produktów od zaufanych dostawców.{" "}
      </p>
      <p>
        Nasze posiłki są zawsze świeże, dlatego codziennie znajdziesz u nas coś
        nowego!
      </p>
    </div>
  );
}
