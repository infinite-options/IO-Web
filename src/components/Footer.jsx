import logo from "../assets/images/IOLogos/IO_white.png";
import li from "../assets/images/socialMediaIcon/li.svg";
import fb from "../assets/images/socialMediaIcon/fb.svg";
import twitter from "../assets/images/socialMediaIcon/twitter.svg";
import { Router, Switch, Routes, Route, Link, NavLink } from "react-router-dom";

import { Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="outterLayer">
      <div className="layer">
        <Col id="eachCol" style={{ paddingRight: "0%" }}>
          <img
            src={logo}
            className="logoImg"
            aria-label="Infinite Options logo"
          ></img>
          <div className="firstColText">
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="/Careers/#pdf"
            >
              <p>
                <u>Corporate Overview</u>
              </p>
              <p>© 2021 by Infinite Options LLC</p>
            </a>
          </div>
        </Col>
        <Col id="eachCol">
          <p className="colText1">Tel: 925-400-7469  <span className="spacing1"></span>   <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="Careers"
            >
              <u>Careers</u>
            </NavLink></p>
          <p className="colText2">San Jose, CA 95120  <span className="spacing2"></span> info@infiniteoptions.com  &nbsp; &nbsp; &nbsp;</p>
        </Col>
        {/* <Col id="eachCol">
          <p className="colText1">
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="Careers"
            >
              <u>Careers</u>
            </NavLink>
          </p>
          <p className="colText2">info@infiniteoptions.com</p>
        </Col> */}
        <Col className="eachCol">
          <div className="iconContainer">
            {/* <div style={{ float: "left", width: "20%", }}> */}
            <img
              // style={{ height: "26px", width: "32px" }}
              className="twitter"
              src={twitter}
              aria-label="Twitter link placeholder"
            ></img>
            {/* </div>
        <div style={{ float: "left", width: "20%", }}> */}
            <img
              // style={{ height: "26px", width: "26px" }}
              className="linkedIn"
              src={li}
              aria-label="Linkedn link placeholder"
            ></img>
            {/* </div>
        <div style={{ float: "left", width: "15%", }}> */}
            <img
              // style={{ height: "26px", width: "14px" }}
              className="facebook"
              src={fb}
              aria-label="Facebook link placeholder"
            ></img>
            {/* </div> */}
          </div>
        </Col>
      </div>
    </div>
  );
};
export default Footer;
