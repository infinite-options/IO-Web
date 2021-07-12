import "./portfolio.css";
//images
// import MealsForMe from "../videos/MealsForMeAnimation.mp4";
import Manifest from "../assets/images/Manifest.png";
// import ServingFresh from "../videos/ServingFreshAnimation.mp4";
import JustDelivered from "../assets/images/JustDelivered.png";
import Nitya from "../assets/images/Nitya/NityaAyurvedaLogo.png";
import React, { Component, useRef } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Meals4Me from "../assets/images/Meals4Me/M4MeMockup1@2x.png";
import SF from "../assets/images/ServingFresh/SFNewImg.png";
import OurPortfolio from "../containers/Portfolio/portfolio.js";
import HowWeCanHelpPortfolio from "../containers/HowWeCanHelp/How_we_can_help.js";
import How_We_Can_Help from "../containers/HowWeCanHelp/How_we_can_help.js";
import HowWeCanHelp from "../containers/HowWeCanHelp/How_we_can_help.js";
import MealsForMe from "../containers/MealsForMe/MealsForMe.jsx";
import ServingFresh from "../containers/ServingFresh/ServingFresh.jsx";
import NityaAyurveda from "../containers/Nitya/Nitya.jsx";

import { Link } from "react-router-dom";
import {
  makeStyles,
  createMuiTheme,
  MuiThemeProvider,
} from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 3000, min: 1430 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 1430, min: 1150 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1150, min: 800 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 800, min: 0 },
    items: 1,
  },
};

const defaultTheme = createMuiTheme();
const theme = createMuiTheme({
  overrides: {
    MuiTooltip: {
      tooltip: {
        // fontSize: "24px",
        // fontFamily: "AvenirMedium",
        // color: "white",
        // backgroundColor: "#F6A833",
        // textAlign: "center",
      },
    },
  },
});
export default function Portfolio() {
  const carouselRef = useRef();

  // class App extends Component {
  // render() {
  return (
    <>
      <div>
        <section id="portfolio">
          <div>
            <div>
              <h1 className="header1">
                Products we’ve built
                <a id="viewAllProjects" href="OurPortfolio" >
                  View All Projects
                </a>
              </h1>
            </div>
            <div>
              <div className="info">
                <p>
                  We are entrepreneurs solving problems that we encounter in new
                  and creative ways. Here are some examples.
                </p>
              </div>
              <br />
              <br />
              <br />
              <div>
                <Row style={{ height: "500px" }}>
                  <div className="mainCol">
                    <div>
                      <img src={Meals4Me} className="imageScaling" />
                    </div>
                  </div>
                  <div className="mainCol">
                    <p className="hCol">Meals For Me</p>
                    <p className="infoCol">
                      An in-house product, Meals For Me was born out of the
                      need to help people eat healthy even when they don’t have
                      time to cook. We designed and developed the website and
                      app for this ourselves. Creating a strong brand identity
                      and a simple user flow for the meal subscription platform
                      was key to the project.
                    </p>
                    <br />
                    <div className="aBtn">
                      <a href="MealsForMe ">
                        <button className="viewProjectBtn">View Project</button>
                      </a>
                      
                      <a href="https://mealsfor.me/">
                        <button className="viewProjectBtn2">Visit Website</button>
                      </a>
                    </div>
                  </div>
                </Row>
                <div>
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
                <Row style={{ height: "500px" }}>
                  <div className="mainCol">
                    <p className="hCol">Serving Fresh</p>
                    <p className="infoCol">
                      We designed and developed the brand identity, logo, mobile
                      app as well as the website for Serving Fresh. It continues
                      to be one of our favorite in-house products where we are
                      now focusing on creating marketing and advertising.
                    </p>
                    <br />
                    <div className="aBtn">
                      <a href="ServingFresh">
                        <button className="viewProjectBtn">View Project</button>
                      </a>
                      <a href="https://servingfresh.me/">
                        <button className="viewProjectBtn2">Visit Website</button>
                      </a>
                    </div>
                  </div>
                  <div className="mainCol">
                    <img src={SF} className="imageScaling" />
                  </div>
                </Row>
              </div>
            </div>
          </div>

          <div>
            <div className="ProductsWeHelpedBuild">
              <h1 className="header1">
                Products we helped build
                <a
                  id="viewAllProjects2"
                  href="How_We_Can_Help"
                >
                  View All Projects
                </a>
              </h1>
            </div>
            <p className="info">
              We work with companies, non-profits, Universities and
              entrepreneurs to help them innovate and solve problems. Here are a
              few examples.
            </p>
            <br />
            <br />
            <br />
            <Carousel
              responsive={responsive}
              showDots={true}
              autoPlay={true}
              autoPlaySpeed={10000}
              infinite={true}
              arrows={false}
            >
              <div className="firstCarousel">
                <div className="carouselCol">
                  <img src={Nitya} className="imageScaling" />
                </div>
                <div className="carouselCol">
                  <p className="titleCol">Nitya Ayurveda</p>
                  <p className="infoCol">
                    We redesigned the website for an Ayurvedic practitioner to
                    make it pop and convey their messaging around Ayurveda. We
                    also simplified the user flow to make it easier for people
                    to understand the services and book appointments.
                  </p>
                  <br />
                  {/* <div className="aBtn"> */}
                  <a href="NityaAyurveda">
                    <button className="viewProjectBtn">View Project</button>
                  </a>
                  {/* </div> */}
                </div>
              </div>

              <div className="firstCarousel">
                <div className="carouselCol">
                  <img src={Manifest} className="imageScaling" />
                </div>
                <div className="carouselCol">
                  <p className="titleCol">Manifest</p>
                  <p className="infoCol">
                    We designed and developed a productivity to help people with
                    short-term memory loss gain control of their lives without
                    the app dominating it - in collaboration with Tulane
                    University.
                  </p>
                  <br />
                  <div className="aBtn">
                    <button className="viewProjectBtn">Coming Soon</button>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>

          <div>
            <div
              style={
                {
                  // color: "#52330D",
                  // float: "left",
                  // width: "100%",
                  // fontWeight: "bold",
                  // fontSize: "200%",
                  // marginTop: "5%",
                }
              }
            >
              <h1 className="header1">People we’ve helped </h1>
            </div>

            <Carousel
              responsive={responsive}
              showDots={true}
              autoPlay={true}
              autoPlaySpeed={10000}
              infinite={true}
              arrows={false}
            >
              <div className="secondCarousel">
                <p className="secondTitle">Stealth Startup</p>
                <p className="secondInfo">
                  "Choosing Infinite Options to create a wireframe for the early
                  phase of my startup was the best decision I have made! From
                  the introduction, to development, to completion, the IO team
                  was warm, consistent, and competent in their expertise. As
                  someone without a technical background, the IO team made the
                  process understandable and seamless. I am obsessed with the
                  final product and am looking forward to working with them
                  again in the future!" <br />- M.F. San Jose
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <p className="secondTitle">Serving Fresh</p>
                <p className="secondInfo">
                  "Our initial product lacked the polish of a professional app.
                  Infinite Options was able to re-brand the app, streamline the
                  user experience and improve the overall look and feel all at
                  the same time. Now, we’re more confident in our offering and
                  more competitive in the market place." <br />- P.M. San Jose
                </p>
              </div>
            </Carousel>

            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </section>
      </div>
    </>
  );
}
