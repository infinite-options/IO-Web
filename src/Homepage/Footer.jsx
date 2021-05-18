import logo from "../image/IO_white.png";
import li from "../image/li.svg";
import fb from "../image/fb.svg";
import twitter from "../image/twitter.svg";
import { Router, Switch, Routes, Route, Link, NavLink } from "react-router-dom";
// import Careers from './Careers';
// import Profolio from "./Profolio";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#52330D",
        minHeight: "250px",
        paddingTop: "3em",
        position: "relative",
        bottom: 0,
        minWidth: "100%",
        flex: 1,
      }}
    >
      <div
        style={{
          display: "flexbox",
          alignItems: "center",
          minWidth: "100%",
        }}
      >
        <div style={{ height: "250px", float: "left", width: "25%" }}>
          <div style={{ height: "30%" }}>
            <img src={logo} style={{ marginBottom: "100px" }}></img>
          </div>
          <div style={{ height: "30%", textAlign: "center" }}>
            <p style={{ color: "white", marginTop: "30px" }}>
              Corporate Overview
            </p>
          </div>
          <div style={{ height: "30%" }}>
            <p style={{ color: "white", marginTop: "30px" }}>
              © 2019 by Infinite Options LLC
            </p>
          </div>
        </div>
        <div style={{ height: "250px", float: "left", width: "25%" }}>
          <div style={{ height: "30%", textAlign: "center" }}>
            <p style={{ color: "white", marginTop: "75px" }}>
              Tel: 925-400-7469
            </p>
          </div>
          <div style={{ height: "30%" }}>
            <p style={{ color: "white", marginTop: "0px" }}>
              San Jose, CA 95120
            </p>
          </div>
        </div>
        <div style={{ height: "250px", float: "left", width: "25%" }}>
          <div style={{ height: "30%", textAlign: "center" }}>
            <p style={{ color: "white", marginTop: "75px" }}>
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to="Careers"
              >
                <u>Careers</u>
              </NavLink>
            </p>
          </div>
          <div style={{ height: "30%" }}>
            <p style={{ color: "white", marginTop: "0px" }}>
              info@infiniteoptions.com
            </p>
          </div>
        </div>
        <div
          style={{
            height: "250px",
            float: "left",
            width: "25%",
            marginTop: "50px",
          }}
        >
          <div style={{ float: "left", width: "33%", marginTop: "15%" }}>
            <img style={{ height: "51px", width: "51px" }} src={twitter}></img>
          </div>
          <div style={{ float: "left", width: "33%", marginTop: "15%" }}>
            <img style={{ height: "51px", width: "51px" }} src={fb}></img>
          </div>
          <div style={{ float: "left", width: "33%", marginTop: "15%" }}>
            <img style={{ height: "51px", width: "51px" }} src={li}></img>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
