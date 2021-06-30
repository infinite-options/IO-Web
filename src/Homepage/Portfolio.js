import "./portfolio.css";
//images
import MealsForMe from "../videos/MealsForMeAnimation.mp4";
import Manifest from "../assets/images/Manifest.png";
import ServingFresh from "../videos/ServingFreshAnimation.mp4";
import JustDelivered from "../assets/images/JustDelivered.png";
import NityaAyurveda from "../assets/images/Nitya/NityaAyurvedaLogo.png";
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
      <section id="portfolio" className="container">
        <div>
          <div
            style={{
              color: "#52330D",
              float: "left",
              width: "100%",
              fontWeight: "bold",
              fontSize: "200%",
            }}
          >
            <h1 className="h1">Products we’ve built</h1>
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
            <div style={{ width: "30%", float: "left" }}>
              <p className="description">
                A meal subscription platform for busy professionals to eat from
                their favorite local restaurants at affordable prices.
              </p>
            </div>
            <div
              style={{
                width: "30%",
                float: "left",
                paddingLeft: "3%",
                paddingRight: "1%",
              }}
            >
              <p className="description">
                A digital platform for local farmers to take online orders and
                make home deliveries.
              </p>
            </div>
            <div style={{ width: "33%", float: "left", paddingLeft: "2%" }}>
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

              paddingRight: "1%",
            }}
          >
            <div style={{ width: "33%", float: "left" }}>
              <video
                src={MealsForMe}
                width="100%"
                autoplay="autoplay"
                muted
                loop
                alt="MealsForMe Picture"
              />
            </div>
            <div style={{ width: "33%", float: "left" }}>
              <video
                src={ServingFresh}
                width="100%"
                autoplay="autoplay"
                muted
                loop
                alt="ServingFresh Picture"
              />
            </div>
            <div style={{ width: "33%", float: "left" }}>
              <img width="100%" src={JustDelivered} alt="JustDelivered" />
            </div>
          </div>
          <div
            style={{
              width: "100%",
              color: "#52330D",
              display: "flex",
              flexDirection: "row",
              paddingLeft: "%",
              paddingRight: "1%",
            }}
          >
            <div style={{ width: "33%", float: "left" }}>
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
                Become a Provider
              </button>
            </div>
            <div style={{ width: "33%", float: "left" }}>
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
                Become a Supplier
              </button>
            </div>
            <div style={{ width: "33%", float: "left", paddingTop: "2%" }}>
              <button
                className="button"
                aria-label="use the manifest app for your delivery business"
              >
                Request a Demo
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            style={{
              color: "#52330d",
              float: "left",
              width: "100%",
              fontWeight: "bold",
              fontSize: "200%",
              marginTop: "5%",
            }}
          >
            <h1 className="h1">Products we helped build</h1>
          </div>
          <div
            style={{
              width: "100%",
              color: "#52330D",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                width: "33%",
                float: "left",
                paddingLeft: "1%",
                paddingRight: "1%",
              }}
            >
              <p className="title">Manifest</p>
            </div>
            <div style={{ width: "33%", float: "left" }}>
              <MuiThemeProvider theme={theme}>
                <Tooltip title="Click here to see the design files">
                  <div>
                    <Link
                      to="MealsForMe"
                      style={{ textDecoration: "none" }}
                      aria-label="Click to see design files for Nitya Ayurveda"
                    >
                      <p className="title">Nitya Ayurveda</p>
                    </Link>
                  </div>
                </Tooltip>
              </MuiThemeProvider>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              color: "#52330D",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                width: "33%",
                float: "left",
                paddingLeft: "1%",
                paddingRight: "1%",
              }}
            >
              <p className="description">
                A productivity app for people with memory issues - in
                collaboration with Tulane University.
              </p>
            </div>
            <div style={{ width: "33%", float: "left" }}>
              <p className="description">
                Nitya Ayurveda brings classical Ayurvedic healthcare to clients
                in the South Bay.
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
              <img src={Manifest} width="100%" alt="Manifest image" />
            </div>
            <div style={{ width: "33%", float: "left" }}>
              <img src={NityaAyurveda} width="100%" alt="Nitya Ayurveda logo" />
            </div>
          </div>
        </div>
        <Link
          to="how_we_can_help"
          aria-label="Let's build something together. Click to see how we can help"
          style={{ textDecoration: "none" }}
        >
          <button className="button2" aria-label="This button does nothing">
            I am a Entrepreneur looking for some help.
          </button>
        </Link>
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
            <h1 className="h1">People we’ve helped</h1>
          </div>
          <div
            style={{
              width: "100%",
              color: "#52330D",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                width: "33%",
                float: "left",
                paddingLeft: "1%",
                paddingRight: "1%",
              }}
            >
              <p className="title" style={{ textAlign: "center" }}>
                Manifest
              </p>
            </div>
            <div style={{ width: "33%", float: "left", margin: "0, auto" }}>
              <p className="title" style={{ textAlign: "center" }}>
                Nitya Ayurveda
              </p>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              color: "#52330D",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                width: "33%",
                float: "left",
                paddingLeft: "1%",
                paddingRight: "1%",
              }}
            >
              <p className="description" style={{ textAlign: "center" }}>
                "A productivity app for people
                <br /> with memory issues - in collaboration <br /> with Tulane
                University."
              </p>
            </div>
            <div style={{ width: "33%", float: "left" }}>
              <p className="description" style={{ textAlign: "center" }}>
                "Nitya Ayurveda brings classical <br />
                Ayurvedic healthcare to clients
                <br />
                in the South Bay."
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
          ></div>
        </div>
      </section>
    );
  }
}

export default App;
