import React from "react";
import logo from "./../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="intro">
        <img src={logo} alt="" />
        <h2>Masud Fitness Empire</h2>
      </div>
      <h3>Select today's exercise</h3>
    </div>
  );
};

export default Header;
