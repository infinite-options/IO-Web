import logo from "../assets/images/IOLogos/IO_white.png";
import li from "../assets/images/socialMediaIcon/li.svg";
import fb from "../assets/images/socialMediaIcon/fb.svg";
import twitter from "../assets/images/socialMediaIcon/twitter.svg";
import { Router, Switch, Routes, Route, Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div
      style={{
        height: "200px",
        backgroundColor: "#52330D",
        width: "100%",
        bottom: "0",
        fontFamily: "AvenirBook",
      }}
    >
      <div
        style={{ height: "200px", float: "left", width: "25%", bottom: "0" }}
      >
        <img
          src={logo}
          style={{ marginBottom: "0px" }}
          aria-label="Infinite Options logo"
        ></img>

        <p style={{ color: "white", marginTop: "30px" }}>Corporate Overview</p>
        <p style={{ color: "white", marginTop: "30px" }}>
          © 2019 by Infinite Options LLC
        </p>
      </div>
      <div
        style={{ height: "200px", float: "left", width: "25%", bottom: "0" }}
      >
        <p style={{ color: "white", marginTop: "75px" }}>Tel: 925-400-7469</p>
        <p style={{ color: "white", marginTop: "0px" }}>San Jose, CA 95120</p>
      </div>
      <div style={{ height: "200px", float: "left", width: "25%" }}>
        <p style={{ color: "white", marginTop: "75px" }}>
          <NavLink
            style={{ textDecoration: "none", color: "white" }}
            to="Careers"
          >
            <u>Careers</u>
          </NavLink>
        </p>
        <p style={{ color: "white", marginTop: "0px" }}>
          info@infiniteoptions.com
        </p>
      </div>
      <div
        style={{
          height: "200px",
          float: "left",
          width: "25%",
        }}
      >
        <div style={{ float: "left", width: "33%", marginTop: "15%" }}>
          <img
            style={{ height: "51px", width: "51px" }}
            src={twitter}
            aria-label="Twitter link placeholder"
          ></img>
        </div>
        <div style={{ float: "left", width: "33%", marginTop: "15%" }}>
          <img
            style={{ height: "51px", width: "51px" }}
            src={fb}
            aria-label="Facebook link placeholder"
          ></img>
        </div>
        <div style={{ float: "left", width: "33%", marginTop: "15%" }}>
          <img
            style={{ height: "51px", width: "51px" }}
            src={li}
            aria-label="Linkedn link placeholder"
          ></img>
        </div>
      </div>
    </div>
  );
};
export default Footer;
