import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {Switch, Route, BrowserRouter } from "react-router-dom";
import Main from "./components/Main"
import Stypy  from "./components/stypy/Stypy";
import Komunie from "./components/komunie/Komunie"
import CateringPage from "./components/CateringPage"
import Event from "./components/Event"
import Navbar from "./components/nav/Navbar";
import ContactPage from "./components/kontakt/ContactPage";
import MessengerCustomerChat from 'react-messenger-customer-chat';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route path="/" exact component={Main}/>
        <Route path="/catering" component={CateringPage}/>
        <Route path="/stypy" exact component={Stypy}/>
        <Route path="/komunie" exact component={Komunie}/>
        <Route path="/event" component={Event}/>
        <Route path="/contact" component={ContactPage}/>
      </Switch>
    </BrowserRouter>
    <MessengerCustomerChat
    pageId="384151384987413"
    appId="255060649938522"  />,
  </React.StrictMode>,
  document.getElementById("root")
);
