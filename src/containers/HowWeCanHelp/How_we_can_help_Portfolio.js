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
        <h1 className="h1">Product Design</h1>
        <table className="ProjectTable">
          <tr>
            <td className="ProjectCell">
              <MuiThemeProvider theme={theme}>
                <Tooltip title="Click here to see the design files">
                  <div>
                    <Link
                      to="MealsForMe"
                      style={{ textDecoration: "none", fontSize: "42px" }}
                      aria-label="Click to see design files for Meals For Me"
                    >
                      <p className="title1">Mealsfor.me</p>
                    </Link>
                  </div>
                </Tooltip>
              </MuiThemeProvider>
            </td>

            <td className="ProjectCell">
              <MuiThemeProvider theme={theme}>
                <Tooltip title="Click here to see the design files">
                  <div>
                    <Link
                      to="ServingFresh"
                      style={{ textDecoration: "none", fontSize: "42px" }}
                      aria-label="Click to see design files for Serving Fresh"
                    >
                      <p className="title1">Serving Fresh</p>
                    </Link>
                  </div>
                </Tooltip>
              </MuiThemeProvider>
            </td>
            <td className="ProjectCell">
              <p
                className="title1"
                style={{ textDecoration: "none", fontSize: "42px" }}
              >
                Manifest
              </p>
            </td>
          </tr>
          <tr>
            <td className="ProjectCell">
              <p className="description">
                A meal subscription platform for busy professionals to eat from
                their favorite local restaurants at affordable prices.
              </p>
            </td>
            <td className="ProjectCell">
              <p className="description">
                A digital platform for local farmers to take online orders and
                make home deliveries.
              </p>
            </td>
            <td className="ProjectCell">
              <p className="description">
                A digital platform for last mile food delivery.
              </p>
            </td>
          </tr>
          <tr>
            <td className="ProjectCell">
              <Link
                to="MealsForMe"
                aria-label="Click to check out Meals For Me"
              >
                <img src={MealsForMe1} className="smallImg" alt="MealsForMe1" />
              </Link>
            </td>
            <td className="ProjectCell">
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
            </td>
            <td className="ProjectCell">
              <img
                src={JustDelivered1}
                className="smallImg"
                alt="JustDelivered1"
              />
            </td>
          </tr>
        </table>

        <h1 className="h1">Product Development</h1>
        <table className="ProjectTable">
          <tr>
            <td className="ProjectCell">
              <MuiThemeProvider theme={theme}>
                <Tooltip title="Click here to see the design files">
                  <div>
                    <Link
                      to="MealsForMe"
                      style={{ textDecoration: "none", fontSize: "42px" }}
                      aria-label="Click to see design files for Meals For Me"
                    >
                      <p className="title1">Mealsfor.me</p>
                    </Link>
                  </div>
                </Tooltip>
              </MuiThemeProvider>
            </td>

            <td className="ProjectCell">
              <MuiThemeProvider theme={theme}>
                <Tooltip title="Click here to see the design files">
                  <div>
                    <Link
                      to="ServingFresh"
                      style={{ textDecoration: "none", fontSize: "42px" }}
                      aria-label="Click to see design files for serving fresh"
                    >
                      <p className="title1">Serving Fresh</p>
                    </Link>
                  </div>
                </Tooltip>
              </MuiThemeProvider>
            </td>
            <td className="ProjectCell">
              <p
                className="title1"
                style={{ textDecoration: "none", fontSize: "42px" }}
              >
                Manifest
              </p>
            </td>
          </tr>
          <tr>
            <td className="ProjectCell">
              <p className="description">
                A meal subscription platform for busy professionals to eat from
                their favorite local restaurants at affordable prices.
              </p>
            </td>
            <td className="ProjectCell">
              <p className="description">
                A digital platform for local farmers to take online orders and
                make home deliveries.
              </p>
            </td>
            <td className="ProjectCell">
              <p className="description">
                A productivity app for people with memory issues. In
                collaboration with Tulane University.
              </p>
            </td>
          </tr>
          <tr>
            <td className="ProjectCell">
              <Link
                to="MealsForMe"
                aria-label="Click to check out Meals For Me"
              >
                <img src={M4MeMockup1} className="smallImg" alt="M4MeMockup1" />
              </Link>
            </td>
            <td className="ProjectCell">
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
            </td>
            <td className="ProjectCell">
              <img src={Manifest} className="smallImg" alt="Manifest" />
            </td>
          </tr>
        </table>
        <h1 className="h1">Branding and Marketing</h1>
        <table className="ProjectTable">
          <tr>
            <td className="ProjectCell">
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
            </td>
            <td className="ProjectCell">
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
            </td>
            <td className="ProjectCell"></td>
          </tr>
          <tr></tr>
        </table>
      </section>
    );
  }
}

export default App;
