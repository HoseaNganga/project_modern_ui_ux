import React from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="navBar">
      <div className="navbarlinks">
        <div className="navbarLinksLogo">
          <img src={logo} alt="logo" />
        </div>
        <ul className="navbarLinksContainer">
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/t"}>
            <li>What is GPT-3</li>
          </Link>
          <Link to={"/"}>
            <li>Open Ai</li>
          </Link>
          <Link to={"/"}>
            <li>Case Studies</li>
          </Link>
          <Link to={"/"}>
            <li>Library</li>
          </Link>
        </ul>
      </div>
      <div className="navbarSign">
        <p>Sign-In</p>
        <button>Sign-Up</button>
      </div>
      <div className="navbarMenu">
        {toggleMenu ? (
          <RiCloseLine
            color="white"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="white"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbarMenuContainer scale-up-center">
            <ul className="navbarMenuContainerLinks">
              <Link to={"/"}>
                <li>Home</li>
              </Link>
              <Link to={"/about"}>
                <li>What is GPT-3</li>
              </Link>
              <Link to={"/possibility"}>
                <li>Open Ai</li>
              </Link>
              <Link to={"/features"}>
                <li>Case Studies</li>
              </Link>
              <Link to={"/blog"}>
                <li>Library</li>
              </Link>
            </ul>
            <div className="navbarMenuContainerLinksSign">
              <p>Sign-In</p>
              <button>Sign-Up</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
