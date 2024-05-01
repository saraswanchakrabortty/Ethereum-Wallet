import { useEffect, useState } from "react";
import "../styles/Navbar.scss";

import logo from "../assets/logo.svg";
import Ham from "./ham";

const NavBarItem = ({ title }) => <li className="navBarItem">{title}</li>;

const Navbar = () => {
  const [isThere, setisThere] = useState(false);

  const toggle = () =>{
    setisThere(!isThere);
  }

  return (
    <nav className="navBar">
      <div className="logoContainer">
        <img src={logo} alt="logo"/>
      </div>
      <ul className="initialList">
        {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
        <li className="login glassBtn">Login</li>
      </ul>
      <div className="sideNav flex relative">
        <Ham 
          task={toggle}
          isThere={isThere}
        />
        <ul className={`sideNavList glassmorphism ${isThere ? "active" : ""}`}>
          {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
            <NavBarItem key={item + index} title={item} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
