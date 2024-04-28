import React from "react";
import "../styles/Footer.scss";
import logo from "../assets/logo.svg";

const Footer = () => (
  <div className="footer">
    <div className="top">
      <div className="logoContainer">
        <img src={logo} alt="logo" />
      </div>
      <p className="">Come join us and hear for the unexpected miracle.</p>
    </div>
    <p>© Nooby Devs, {new Date().getFullYear()}</p>
  </div>
);

export default Footer;
