import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import '../styles/Navbar.scss';

import logo from "../assets/logo.svg";

const NavBarItem = ({ title }) => (
  <li className="navBarItem">{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="navBar">
      <div className="logoContainer">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <ul className= "initialList">
        {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
        <li className="login glassBtn">
          Login
        </li>
      </ul>
      <div className="sideNav flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul className="sideNavList">
            {["Market", "Exchange", "Tutorials", "Wallets"].map(
              (item, index) => <NavBarItem key={item + index} title={item} />,
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
