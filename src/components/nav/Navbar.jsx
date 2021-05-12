import React, { useState } from "react";
import { Link} from "react-router-dom";
import logo from "../../easyimages/logo.png";
import fb from "../../easyimages/fb.png";


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
   <nav classname={nav ? "nav active" : "nav"}>
     <Link to ="/" className='logo'>
       <img src={logo} alt="ogo"/>
            </Link>
            <input className="menu-btn" type="checkbox" id="menu-btn"/>
            <label className="menu-icon" for="menu-btn">
              <span className="nav-icon"></span>
            </label>
    <ul className='menu'>
    <li><Link to="/">Main</Link></li>
      <li><Link to="/event">Event</Link></li>
      <li><Link to="/catering">Dla firm</Link></li>
      <li><a href="#"><img src={fb} className="fb"/></a></li>
      </ul>



   </nav>
  );
}
