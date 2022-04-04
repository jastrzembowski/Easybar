import React, { useState} from "react";
import { Link } from "react-router-dom";
import logo from "../../pageimages/easylogo.png";
import fb from "../../easyimages/fb.jpg";

export default function Navbar() {
  const [nav, setnav] = useState(false);

  const changeBackgroud = () => {
    if (window.scrollY >= 50) {
      setnav(true);
    } else {
      setnav(false);
    }
  };

  window.addEventListener("scroll", changeBackgroud);

  return (
    <nav className={nav ? "nav active" : "nav"}>
      <Link to="/" className="logo">
        <img src={logo}  alt="logo easybar" />
      </Link>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" for="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li onClick="document.documentElement.scrollIntoView({ behavior: 'smooth' })">
          <Link to="/">Strona główna</Link>
        </li>
        <li onClick="document.documentElement.scrollIntoView({ behavior: 'smooth' })">
          <Link to="/event">Imprezy okolicznościowe</Link>
        </li>
        <li onClick="document.documentElement.scrollIntoView({ behavior: 'smooth' })">
          <Link to="/stypy">Stypy</Link>
        </li>
        <li onClick="document.documentElement.scrollIntoView({ behavior: 'smooth' })">
          <Link to="/komunie">Komunie</Link>
        </li>
        <li onClick="document.documentElement.scrollIntoView({ behavior: 'smooth' })">
          <Link to="/catering">Dla firm</Link>
        </li>
        <li onClick="document.documentElement.scrollIntoView({ behavior: 'smooth' })">
          <Link to="/contact">Kontakt</Link>
        </li>
        <li>
          <a href="https://www.facebook.com/easybarmorena">
            <img
              src={fb}
              alt="facebook"
              className="fb"
              style={{
                width: "40px",
                height: "40px",
              }}
            />
          </a>
        </li>
      </ul>
    </nav>
  );
}
