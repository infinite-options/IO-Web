import logo from "../assets/images/IOLogos/IO_white.png";
import li from "../assets/images/socialMediaIcon/li.svg";
import fb from "../assets/images/socialMediaIcon/fb.svg";
import twitter from "../assets/images/socialMediaIcon/twitter.svg";
import { Router, Switch, Routes, Route, Link, NavLink } from "react-router-dom";

import  {Row, Col} from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="outterLayer">
      <div className="layer">
      <Col className="eachCol">
        
        <img
          src={logo}
          className="logoImg"
          aria-label="Infinite Options logo"
        ></img>
        
        <p className="firstCol"><u>Corporate Overview</u></p>
        <p style={{color:"white", font:"normal normal normal 15px/20px Avenir"}}>© 2021 by Infinite Options LLC</p>
      </Col>
      <Col className="eachCol"  style={{font: "normal normal normal 17px/23px Avenir", textAlign:"left" }}>
        <p style={{ color: "white", marginTop: "88px" }}>Tel: 925-400-7469</p>
        <p style={{ color: "white", marginTop: "21px" }}>San Jose, CA 95120</p>
      </Col>
      <Col className="eachCol" style={{font: "normal normal normal 17px/23px Avenir" , textAlign:"left" }}>
        <p style={{ color: "white", marginTop: "88px", }}>
          <NavLink
            style={{ textDecoration: "none", color: "white" }}
            to="Careers"
          >
            <u>Careers</u>
          </NavLink>
        </p>
        <p style={{ color: "white", marginTop: "22px" }}>
          info@infiniteoptions.com
        </p>
      </Col>
      <Col className="eachCol">
        <div className="iconContainer">
        <div style={{ float: "left", width: "20%", }}>
          <img
            style={{ height: "26px", width: "32px" }}
            src={twitter}
            aria-label="Twitter link placeholder"
          ></img>
        </div>
        <div style={{ float: "left", width: "20%", }}>
          <img
            style={{ height: "26px", width: "26px" }}
            src={li}
            aria-label="Linkedn link placeholder"
          ></img>
        </div>
        <div style={{ float: "left", width: "15%", }}>
          <img
            style={{ height: "26px", width: "14px" }}
            src={fb}
            aria-label="Facebook link placeholder"
          ></img>
        </div>
        </div>
        </Col>
      </div>
    </div>
  );
};
export default Footer;
