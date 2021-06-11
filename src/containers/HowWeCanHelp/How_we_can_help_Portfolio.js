import React, { Component } from "react";
import "./how_we_can_help_css.css";

import Manifest from "../../assets/images/Manifest.png";
import ServingFresh from "../../assets/images/ServingFresh/Serving_Fresh.png";
import ServingFreshAnimation from "../../videos/ServingFreshAnimation.mp4";
import ServingFreshMobile from "../../assets/images/ServingFresh/ServingFreshMobile.png";
import JustDelivered1 from "../../assets/images/JustDelivered1.png";
import M4MeMockup1 from "../../assets/images/Meals4Me/M4MeMockup1.png";
import MealsForMe1 from "../../assets/images/Meals4Me/MealsForMe1.png";
import MealsForMeAnimation from "../../videos/MealsForMeAnimation.mp4";

import { Link } from "react-router-dom";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";

const defaultTheme = createMuiTheme();
const theme = createMuiTheme({
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: "24px",
        fontFamily: "AvenirMedium",
        color: "white",
        backgroundColor: "#F6A833",
        textAlign: "center",
      },
    },
  },
});

class App extends Component {
  render() {
    return (
      <section id="portfolio" className="contaier">
        <h1
          className="title0"
          style={{ textDecoration: "none", fontSize: "54px" }}
        >
          Things we can help with & some examples
        </h1>
        <div>
          <div
            style={{
              color: "#52330D",
              float: "left",
              width: "100%",
              fontWeight: "bold",
              fontSize: "200%",
              marginTop: "5%",
            }}
          >
            <h1 className="h1">Product Design</h1>
          </div>
          <div
            style={{
              width: "100%",
              color: "#52330D",
              display: "flex",
              flexDirection: "row",
              paddingLeft: "1%",
              paddingRight: "1%",
            }}
          >
            <div style={{ width: "33%", float: "left" }}>
              <MuiThemeProvider theme={theme}>
                <Tooltip title="Click here to see the design files">
                  <div>
                    <Link
                      to="MealsForMe"
                      style={{ textDecoration: "none" }}
                      aria-label="Click to see design files for Meals For Me"
                    >
                      <p className="title">Mealsfor.me</p>
                    </Link>
                  </div>
                </Tooltip>
              </MuiThemeProvider>
            </div>
            <div style={{ width: "33%", float: "left" }}>
              <MuiThemeProvider theme={theme}>
                <Tooltip title="Click here to see the design files">
                  <div>
                    <Link
                      to="ServingFresh"
                      style={{ textDecoration: "none" }}
                      aria-label="Click here to see design files for Serving Fresh"
                    >
                      <p className="title">Serving Fresh</p>
                    </Link>
                  </div>
                </Tooltip>
              </MuiThemeProvider>
            </div>
            <div style={{ width: "33%", float: "left" }}>
              <p className="title">Just Delivered</p>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              color: "#52330D",
              display: "flex",
              flexDirection: "row",
              paddingLeft: "1%",
              paddingRight: "1%",
            }}
          >
            <div style={{ width: "33%", float: "left" }}>
              <p className="description">
                A meal subscription platform for busy professionals to eat from
                their favorite local restaurants at affordable prices.
              </p>
            </div>
            <div style={{ width: "33%", float: "left" }}>
              <p className="description">
                A digital platform for local farmers to take online orders and
                make home deliveries.
              </p>
            </div>
            <div style={{ width: "33%", float: "left" }}>
              <p className="description">
                A digital platform for last mile food delivery.
              </p>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              color: "#52330D",
              display: "flex",
              flexDirection: "row",
              paddingLeft: "1%",
              paddingRight: "1%",
            }}
          >
            <div style={{ width: "33%", float: "left" }}>
              <Link
                to="MealsForMe"
                aria-label="Click to check out Meals For Me"
              >
                <img src={MealsForMe1} className="smallImg" alt="MealsForMe1" />
              </Link>
            </div>
            <div style={{ width: "33%", float: "left" }}>
              <Link
                to="ServingFresh"
                aria-label="Click to check out Serving Fresh"
              >
                <video
                  src={ServingFreshAnimation}
                  width="500"
                  height="500"
                  autoplay="autoplay"
                  muted
                  loop
                  alt="ServingFresh Picture"
                />
              </Link>
            </div>
            <div style={{ width: "33%", float: "left" }}>
              <img
                src={JustDelivered1}
                className="smallImg"
                alt="JustDelivered1"
              />
            </div>
          </div>
        </div>

        <div>
          <div
            style={{
              color: "#52330D",
              float: "left",
              width: "100%",
              fontWeight: "bold",
              fontSize: "200%",
              marginTop: "5%",
            }}
          >
            <h1 className="h1">Product Development</h1>
          </div>
          <div
            style={{
              width: "100%",
              color: "#52330D",
              display: "flex",
              flexDirection: "row",
              paddingLeft: "1%",
              paddingRight: "1%",
            }}
          >
            <div style={{ width: "33%", float: "left" }}>
              <MuiThemeProvider theme={theme}>
                <Tooltip title="Click here to see the design files">
                  <div>
                    <Link
                      to="MealsForMe"
                      style={{ textDecoration: "none" }}
                      aria-label="Click to see design files for Meals For Me"
                    >
                      <p className="title">Mealsfor.me</p>
                    </Link>
                  </div>
                </Tooltip>
              </MuiThemeProvider>
            </div>
            <div style={{ width: "33%", float: "left" }}>
              <MuiThemeProvider theme={theme}>
                <Tooltip title="Click here to see the design files">
                  <div>
                    <Link
                      to="ServingFresh"
                      style={{ textDecoration: "none" }}
                      aria-label="Click here to see design files for Serving Fresh"
                    >
                      <p className="title">Serving Fresh</p>
                    </Link>
                  </div>
                </Tooltip>
              </MuiThemeProvider>
            </div>
            <div style={{ width: "33%", float: "left" }}>
              <p className="title">Manifest</p>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              color: "#52330D",
              display: "flex",
              flexDirection: "row",
              paddingLeft: "1%",
              paddingRight: "1%",
            }}
          >
            <div style={{ width: "33%", float: "left" }}>
              <p className="description">
                A meal subscription platform for busy professionals to eat from
                their favorite local restaurants at affordable prices.
              </p>
            </div>
            <div style={{ width: "33%", float: "left" }}>
              <p className="description">
                A digital platform for local farmers to take online orders and
                make home deliveries.
              </p>
            </div>
            <div style={{ width: "33%", float: "left" }}>
              <p className="description">
                A productivity app for people with memory issues. In
                collaboration with Tulane University.
              </p>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              color: "#52330D",
              display: "flex",
              flexDirection: "row",
              paddingLeft: "1%",
              paddingRight: "1%",
            }}
          >
            <div style={{ width: "33%", float: "left" }}>
              <Link
                to="MealsForMe"
                aria-label="Click to check out Meals For Me"
              >
                <img src={M4MeMockup1} className="smallImg" alt="M4MeMockup1" />
              </Link>
            </div>
            <div style={{ width: "33%", float: "left" }}>
              <Link
                to="ServingFresh"
                aria-label="Click to check out serving fresh"
              >
                <img
                  src={ServingFreshMobile}
                  className="smallImg"
                  alt="ServingFreshMobile"
                />
              </Link>
            </div>
            <div style={{ width: "33%", float: "left" }}>
              <img src={Manifest} className="smallImg" alt="Manifest" />
            </div>
          </div>
        </div>
        <div>
          <div
            style={{
              color: "#52330D",
              float: "left",
              width: "100%",
              fontWeight: "bold",
              fontSize: "200%",
              marginTop: "5%",
            }}
          >
            <h1 className="h1">Branding and Marketing</h1>
          </div>
          <div
            style={{
              width: "100%",
              color: "#52330D",
              display: "flex",
              flexDirection: "row",
              paddingLeft: "1%",
              paddingRight: "1%",
            }}
          >
            <div style={{ width: "33%", float: "left" }}>
              <Link
                to="MealsForMe"
                aria-label="Click to check out Meals For Me"
              >
                <video
                  src={MealsForMeAnimation}
                  width="500"
                  height="500"
                  autoplay="autoplay"
                  muted
                  loop
                  alt="MealsForMe Picture"
                />
              </Link>
            </div>
            <div style={{ width: "33%", float: "left" }}>
              <Link
                to="ServingFresh"
                aria-label="Click to check out Serving Fresh"
              >
                <img
                  src={ServingFresh}
                  className="smallImg"
                  alt="ServingFresh"
                  style={{ opacity: 0.5 }}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
