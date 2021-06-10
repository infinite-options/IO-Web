import "./portfolio.css";
//images
import MealsForMe from "../videos/MealsForMeAnimation.mp4";
import Manifest from "../assets/images/Manifest.png";
import ServingFresh from "../videos/ServingFreshAnimation.mp4";
import JustDelivered from "../assets/images/JustDelivered.png";
import NityaAyurveda from "../assets/images/NityaAyurvedaLogo.png";
import React, { Component } from "react";

import { Link } from "react-router-dom";
import {
  makeStyles,
  createMuiTheme,
  MuiThemeProvider,
} from "@material-ui/core/styles";
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
        <h1 className="h1">Products we’ve built</h1>
        <div>
          <table className="ProjectTable">
            <tr>
              <td className="ProjectCell">
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
              </td>

              <td className="ProjectCell">
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
              </td>
              <td className="ProjectCell">
                <p className="title">Manifest</p>
              </td>
            </tr>
            <tr>
              <td className="ProjectCell">
                <p className="description">
                  A meal subscription platform for busy professionals to eat
                  from their favorite local restaurants at affordable prices.
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
                <video
                  src={MealsForMe}
                  width="500"
                  height="500"
                  autoplay="autoplay"
                  muted
                  loop
                  alt="MealsForMe Picture"
                />
              </td>
              <td className="ProjectCell">
                <video
                  src={ServingFresh}
                  width="500"
                  height="500"
                  autoplay="autoplay"
                  muted
                  loop
                  alt="ServingFresh Picture"
                />
              </td>
              <td className="ProjectCell">
                <img
                  src={JustDelivered}
                  className="smallImg"
                  alt="JustDelivered"
                />
              </td>
            </tr>
            <tr>
              <td className="ProjectCell">
                <button
                  className="button"
                  aria-label="Become a customer for Meals for me"
                >
                  Become a Customer
                </button>
                <br></br>
                <button
                  className="button"
                  aria-label="Become a partner restaurant for meals for me"
                >
                  Become a Partner Restaurant
                </button>
              </td>

              <td className="ProjectCell">
                <button
                  className="button"
                  aria-label="Become a customer for serving fresh"
                >
                  Become a Customer
                </button>
                <br></br>
                <button
                  className="button"
                  aria-label="Become a farm partner for serving fresh"
                >
                  Become a Farm Partner
                </button>
              </td>
              <td className="ProjectCell">
                <button
                  className="button"
                  aria-label="use the manifest app for your delivery business"
                >
                  Use this app for your delivery business
                </button>
              </td>
            </tr>
          </table>
        </div>
        <h1 className="h1">Products we helped build</h1>
        <table className="ProjectTable">
          <tr>
            <td className="ProjectCell">
              <p className="title">Manifest</p>
            </td>
            <td className="ProjectCell">
              <p className="title">Nitya Ayurveda</p>
            </td>
            <td></td>
          </tr>
          <tr>
            <td className="ProjectCell">
              <p className="description">
                A productivity app for people with memory issues - in
                collaboration with Tulane University.
              </p>
            </td>
            <td className="ProjectCell">
              <p className="description">
                Nitya Ayurveda brings classical Ayurvedic healthcare to clients
                in the South Bay.
              </p>
            </td>
            <td className="ProjectCell"></td>
          </tr>
          <tr>
            <td className="ProjectCell">
              <img src={Manifest} className="smallImg" alt="Manifest image" />
            </td>
            <td className="ProjectCell">
              <img
                src={NityaAyurveda}
                className="smallImg"
                alt="Nitya Ayurveda logo"
              />
            </td>
            <td className="ProjectCell"></td>
          </tr>
          <tr></tr>
        </table>
        <button className="button2" aria-label="This button does nothing">
          I am a Entrepreneur looking for some help.
        </button>
      </section>
    );
  }
}

export default App;
