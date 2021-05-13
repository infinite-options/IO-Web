import React from "react";
import { Link } from "react-router-dom";
import How_we_can_help from "./How_we_can_help.js";
import logo from "../image/logo.png";
import MobileAppsLight from "../assets/MobileAppsLight.svg";
import MarketingNBrandingLight from "../assets/MarketingNBrandingLight.svg";
import BusinessStrategyLight from "../assets/BusinessStrategyLight.svg";
import HardwareEngineeringLight from "../assets/HardwareEngineeringLight.svg";
import UIUXDesignLight from "../assets/UIUXDesignLight.svg";
import WebSoftwareDevLight from "../assets/WebSoftwareDevLight.svg";

import { makeStyles, withTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  h1: {
    fontSize: "400%",
    color: "#52330D",
  },
  contaier: {
    margin: "auto",
    width: "80%",
    padding: "50px",
  },
  button: {
    backgroundColor: "#52330D",
    border: "none",
    color: "white",
    padding: "15px 30px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "20px",
    borderRadius: "50px",
  },
  logoContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const WhatWeDo = () => {
  const classes = useStyles();
  return (
    <section id="whatWeDo">
      <div className={classes.contaier}>
        <h1 className={classes.h1}>
          We fill the{" "}
          <span style={{ color: "white", webkitTextStroke: "2px #52330D" }}>
            gaps
          </span>{" "}
          around your skill set
        </h1>
        <div className={classes.logoContainer}>
          <img
            src={MobileAppsLight}
            alt="MobileAppsLight"
            style={{ marginBottom: 100 }}
          />
          <img
            src={MarketingNBrandingLight}
            alt="MarketingNBrandingLight"
            style={{ marginTop: 100 }}
          />
          <img
            src={BusinessStrategyLight}
            alt="BusinessStrategyLight"
            style={{ marginBottom: 100 }}
          />
          <img
            src={HardwareEngineeringLight}
            alt="HardwareEngineeringLight"
            style={{ marginTop: 100 }}
          />
          <img
            src={WebSoftwareDevLight}
            alt="WebSoftwareDevLight"
            style={{ marginBottom: 100 }}
          />
          <img
            src={UIUXDesignLight}
            alt="UIUXDesignLight"
            style={{ marginTop: 100 }}
          />
        </div>
        <h1 className={classes.h1}>
          to help you succeed on your <br />
          entrepreneurial journey
        </h1>

        <Link to="how_we_can_help">
          <button className={classes.button}>See how we can help</button>
        </Link>
      </div>
    </section>
  );
};

export default WhatWeDo;
