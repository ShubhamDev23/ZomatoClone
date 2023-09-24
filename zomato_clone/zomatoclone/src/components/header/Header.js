import React from "react";
import "./Header.css";
import {Link} from 'react-router-dom'
function Header() {
  return (
    <div className="my_width header">
      <img
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="zomatologo"
        className="logo"
      ></img>
      <div className="header-left">
        <div className="search-box">
          <div className="location_wraper">
            <span className="material-symbols-outlined location-logo">
              person_pin_circle
            </span>
            <input placeholder="Bangalore" className="input_city" />
            <span className="material-symbols-outlined arrow-down">
              stat_minus_1
            </span>
            <div className="seperator"></div>
            <span className="material-symbols-outlined search-icon">search</span>
            <input  placeholder="Search for restarant,cuisins or a dish" className="search-dish"></input>
          </div>
        </div>
        <Link to="/Cart">Cart <sup>0</sup></Link>
        <div className="profile-wrap">
          <Link className="login" to="/Login">Log in</Link>
          <Link className="signup profile" to="/Signup">Sign-up</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
