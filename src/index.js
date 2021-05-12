import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {Switch, Route, BrowserRouter } from "react-router-dom";
import Main from "./components/Main"
import CateringPage from "./components/CateringPage"
import Event from "./components/Event"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Switch>
        <Route path="/" exact component={Main}/>
        <Route path="/catering" component={CateringPage}/>
        <Route path="/event" component={Event}/>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
