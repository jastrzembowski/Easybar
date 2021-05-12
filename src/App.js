import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/nav/Navbar";
import Main from "./components/Main";
import { css } from "@emotion/core";
import PropagateLoader from "react-spinners/PropagateLoader";
import AOS from "aos";
import "aos/dist/aos.css";




function App() {
  AOS.init();
  const [loading, setLoading] = useState(false);
  const override = css`
    display: block;
    border-color: red;
    margin-top: 20%;
  `;

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <PropagateLoader
          color={"#3d2514"}
          loading={loading}
          css={override}
          size={40}
        />
      ) : (
        <>
          <Navbar/>
        </>
      )}
    </div>
  );
}

export default App;
