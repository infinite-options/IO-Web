import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import M4M from "../../assets/images/Meals4Me/M4MeMockup1.png";
import SF from "../../assets/images/ServingFresh/Serving_Fresh.png";
import Nitya from "../../assets/images/Nitya/NityaAyurvedaLogo.png";
import Delivered from "../../assets/images/JustDelivered/Screen Shot.png";
import { Link } from "react-router-dom";
import {
  makeStyles,
  createMuiTheme,
  MuiThemeProvider,
} from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";

import "./ourPortfolio.css";

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

const useStyles = makeStyles((theme) => ({
  // h1: {
  //   fontSize: "54px",
  //   fontFamily: "AvenirHeavy",
  //   color: "#52330D",
  //   textAlign: "center",
  // },
  // title: {
  //   fontSize: "42px",
  //   fontFamily: "AvenirHeavy",
  //   color: "#52330D",
  //   textAlign: "left",
  // },
  // container: {
  //   margin: "auto",
  //   width: "90%",
  //   padding: "50px",
  // },
  // descirption: {
  //   fontSize: "32px",
  //   fontFamily: "AvenirHeavy",
  //   textAlign: "left",
  // },
  // button: {
  //   backgroundColor: "#52330D",
  //   border: "none",
  //   color: "white",
  //   padding: "15px 30px",
  //   textAlign: "left",
  //   textDecoration: "none",
  //   fontSize: "32px",
  //   borderRadius: "50px",
  //   float: "left",
  // },
  // img: { width: "100%" },
}));

const App = () => {
  const classes = useStyles();
  return (
    <section id="portfolio" className={classes.container}>
      <div>
        <h1 className="portfolioTitle">Our Portfolio</h1>
      </div>
      <Row>
        <div className="portfolioRow">
        <div className="imgDiv">
          <img src={M4M} alt="Meals For Me" className="smallerImg" />
        </div>
        <div className="textDiv">
          <h1 className="projectTitle">Meals for Me</h1>
          <p id="projDescription">
            An in-house product, Meals For Me was born out of the need to help
            people eat healthy even when they don’t have time to cook. We
            designed and developed the website and app for this ourselves.
            Creating a strong brand identity and a simple user flow for the meal
            subscription platform was key to the project.
          </p>
          <Link
            to="MealsForMe"
            style={{ textDecoration: "none" }}
            aria-label="Click to see design files for Meals For Me"
          >
            <button className="linkBtn" aria-hidden="true" tabindex="-1">
              View Project
            </button>
          </Link>
        </div>
        </div>
      </Row>
      {/* Forcing the gaps between each row */}
      <Row>
        &nbsp; 
      </Row>
      <Row>
        &nbsp; 
      </Row>
      <Row>
        &nbsp; 
      </Row>
      <Row>
        &nbsp; 
      </Row>

      <Row>
        <div className="textDiv">
          <h1 className="projectTitle">Serving Fresh</h1>
          <p id="projDescription">
          We designed and developed the brand identity, logo, mobile app as well as the website for Serving 
          Fresh. It continues to be one of our favorite in-house products where we are now focusing on creating 
          marketing and advertising.
          </p>
          <Link
            to="ServingFresh"
            style={{ textDecoration: "none" }}
            aria-label="Click here to see design files for Serving Fresh"
          >
            <button className="linkBtn" aria-hidden="true" tabindex="-1">
              View Project
            </button>
          </Link>
        </div>
        <div className="imgDiv">
          <img src={SF} alt="Serving Fresh" className="smallerImg" />
        </div>
      </Row>

      {/* Forcing the gaps between each row */}
      <Row>
        &nbsp; 
      </Row>
      <Row>
        &nbsp; 
      </Row>
      <Row>
        &nbsp; 
      </Row>
      <Row>
        &nbsp; 
      </Row>

      <Row>
        <div className="imgDiv">
          <img src={Delivered} alt="Just Delivered" className="smallerImg" />
        </div>
        <div className="textDiv">
          <h1 className="projectTitle">Just Delivered</h1>
          <p id="projDescription">
          To solve the Last Mile Delivered problem we can up with a route optimized, user friendly delivery 
          app to ensure the right person gets the right package.
          </p>
          <Link
            // to="MealsForMe"
            style={{ textDecoration: "none" }}
            aria-label="Click to see design files for Meals For Me"
          >
            <button className="linkBtn" aria-hidden="true" tabindex="-1">
              View Project
            </button>
          </Link>
        </div>
      </Row>

      {/* Forcing the gaps between each row */}
      <Row>
        &nbsp; 
      </Row>
      <Row>
        &nbsp; 
      </Row>
      <Row>
        &nbsp; 
      </Row>
      <Row>
        &nbsp; 
      </Row>









      {/* <Row style={{ display: "flex", marginBottom: "3%" }}>
        <Col style={{ width: "33%" }}>
          <img src={Nitya} style={{ width: "90%" }} alt="Nitya Ayurveda" />
        </Col>
        <Col style={{ width: "66%", padding: "20px" }}>
          <h1 className={classes.title}>Nitya Ayurveda</h1>
          <p className={classes.descirption}>
            We redesigned the website for an Ayurvedic practitioner to make it
            pop and convey their messaging around Ayurveda. We also simplified
            the user flow to make it easier for people to understand the
            services and book appointments.
          </p>
          <Link
            to="NityaAyurveda"
            style={{ textDecoration: "none" }}
            aria-label="Click here to see design files for Nitya Ayurveda"
          >
            <button className={classes.button} aria-hidden="true" tabindex="-1">
              View Project
            </button>
          </Link>
        </Col>
      </Row> */}
    </section>
  );
};

export default App;
