import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
  logoSpaceBetween: {},
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
          <img src={MobileAppsLight} alt="MobileAppsLight" />
          <img src={MarketingNBrandingLight} alt="MarketingNBrandingLight" />
          <img src={BusinessStrategyLight} alt="BusinessStrategyLight" />
          <img src={HardwareEngineeringLight} alt="HardwareEngineeringLight" />
          <img src={WebSoftwareDevLight} alt="WebSoftwareDevLight" />
          <img src={UIUXDesignLight} alt="UIUXDesignLight" />
        </div>
        <h1 className={classes.h1}>
          to help you succeed on your <br />
          entrepreneurial journey
        </h1>
        <Router>
          <Link to="/how-we-can-help">
            <button className={classes.button}>See how we can help</button>
          </Link>
          <Switch>
            <Route path="/how-we-can-help">
              <How_we_can_help></How_we_can_help>
            </Route>
          </Switch>
        </Router>
      </div>
    </section>
  );
};

export default WhatWeDo;
