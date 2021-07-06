//import "./portfolio.css";

import logo from "../../assets/images/IOLogos/IOlogo.png";
import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";
import border from "../../assets/images/border.png";

import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "../../assets/x.svg";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
//import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./header.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <nav>
      <div className="header">
        <div className="logo-nav">
          <div style={{ wiidht:"60%"}}>
            <NavLink to="/">
              <img
                src={logo}
                alt="logo"
                style={{ float: "left", marginTop: "35px" }}
                aria-label="Infinite Options logo"
              />
            </NavLink>
          </div>
          <div style={{ float: "right" }}>
            <ul className={click ? "nav-options active" : "nav-options"}>
              <li className="option" onClick={closeMobileMenu}>
                <NavLink
                  style={{
                    color: "black",
                    textDecoration: "none",
                    fontFamily: "AvenirMedium",
                  }}
                  exact
                  activeStyle={{
                    color: "white",
                    backgroundColor: "#f6a833",
                    borderRadius: "100px",
                    padding: "10px 20px 10px 20px",
                  }}
                  to="/"
                  aria-label="Click to see What we do"
                >
                  What We Do
                </NavLink>
              </li>
              <li className="option" onClick={closeMobileMenu}>
                <NavLink
                  style={{
                    fontFamily: "AvenirMedium",
                    color: "black",
                    textDecoration: "none",
                  }}
                  exact
                  activeStyle={{
                    color: "white",
                    backgroundColor: "#f6a833",
                    borderRadius: "100px",
                    padding: "10px 20px 10px 20px",
                  }}
                  to="/how_we_can_help"
                  aria-label="Click to see How we can help"
                >
                  How We Can Help
                </NavLink>
              </li>
              <li className="option" onClick={closeMobileMenu}>
                <NavLink
                  style={{
                    fontFamily: "AvenirMedium",
                    color: "black",
                    textDecoration: "none",
                  }}
                  exact
                  activeStyle={{
                    color: "white",
                    backgroundColor: "#f6a833",
                    borderRadius: "100px",
                    padding: "10px 20px 10px 20px",
                  }}
                  to="/ourPortfolio"
                  aria-label="Click to see Our portfolio"
                >
                  Our Portfolio
                </NavLink>
              </li>
              <li className="option " onClick={closeMobileMenu}>
                <NavLink
                  style={{
                    fontFamily: "AvenirMedium",
                    color: "black",
                    textDecoration: "none",
                  }}
                  exact
                  activeStyle={{
                    color: "white",
                    backgroundColor: "#f6a833",
                    borderRadius: "100px",
                    padding: "10px 20px 10px 20px",
                  }}
                  to="/appointment"
                  aria-label="Click to Contact us"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="mobile-menu" onClick={handleClick}>
          {click ? (
            <CloseMenu className="menu-icon" />
          ) : (
            <MenuIcon className="menu-icon" />
          )}
        </div>
      </div>
      <img style={{ width: "100%", marginTop: "25px" }} src={border}></img>
    </nav>
  );
};

export default Navbar;
