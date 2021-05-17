import logo from "../image/logo.png";
import MealsForMe from "../image/MealsForMe.png";
import Manifest from "../image/Manifest.png";
import ServingFresh from "../image/ServingFresh.png";
import JustDelivered from "../image/JustDelivered.png";
import NityaAyurveda from "../image/NityaAyurvedaLogo.png";

import MobileAppsLight from "../assets/MobileAppsLight.svg";
import MarketingNBrandingLight from "../assets/MarketingNBrandingLight.svg";
import BusinessStrategyLight from "../assets/BusinessStrategyLight.svg";
import HardwareEngineeringLight from "../assets/HardwareEngineeringLight.svg";
import UIUXDesignLight from "../assets/UIUXDesignLight.svg";
import WebSoftwareDevLight from "../assets/WebSoftwareDevLight.svg";

import { makeStyles, withTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  h1: {
    fontSize: "400%",
    // color: "#52330D",
  },
  h3: {
    fontSize: "200%",
    textAlign: "left",
    // color: "#52330D",
  },
  description: {
    textAlign: "left",
  },
  contaier: {
    margin: "auto",
    // width: "80%",
    padding: "50px",
  },
  largeProjectBox: {
    display: "inline-block",
    width: "60%",
  },
  smallProjectBox: {
    display: "inline-block",
    width: "30%",
    padding: "20px",
  },
  inline: {
    display: "inline-block",
  },
  inline1: {
    display: "inline-block",
    alignContent: "Left",
  },
  inline2: {
    display: "inline-block",
    textAlign: "Right",
  },
  smallImg: {
    width: "100%",
    // width: "500px",
  },
  bigImg: {
    width: "100%",
    // width: "1000px",
  },
  smallIcon: { width: "50px", padding: "2px" },
  logoContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const Profolio = () => {
  const classes = useStyles();
  return (
    <section id="profolio" className={classes.contaier}>
      <h1 className={classes.h1}>Profolio</h1>
      <div>
        <div className={classes.smallProjectBox}>
          <h3 className={classes.h3}>Meals for me</h3>
          <p className={classes.description}>
            A meal subscription platform for busy professionals to eat from
            their favorite local restaurants at affordable prices.
          </p>
          <Link to="MealsForMe">
            <img
              src={MealsForMe}
              className={classes.smallImg}
              alt="MealsForMe"
            />
          </Link>
          <div className={classes.logoContainer}>
            <div className={classes.inline1}>
              <img
                className={classes.smallIcon}
                src={MobileAppsLight}
                alt="MobileAppsLight"
              />
              <img
                className={classes.smallIcon}
                src={MarketingNBrandingLight}
                alt="MarketingNBrandingLight"
              />
              <img
                className={classes.smallIcon}
                src={BusinessStrategyLight}
                alt="BusinessStrategyLight"
              />
              <img
                className={classes.smallIcon}
                src={HardwareEngineeringLight}
                alt="HardwareEngineeringLight"
              />
              <img
                className={classes.smallIcon}
                src={WebSoftwareDevLight}
                alt="WebSoftwareDevLight"
              />
              <img
                className={classes.smallIcon}
                src={UIUXDesignLight}
                alt="UIUXDesignLight"
              />
            </div>
            <p className={classes.inline2}>7 months Engagement</p>
          </div>
        </div>
        <div className={classes.smallProjectBox}>
          <h3 className={classes.h3}>Manifest</h3>
          <p className={classes.description}>
            A productivity app for people with memory issues - in collaboration
            with Tulane University.
          </p>
          <img src={Manifest} className={classes.smallImg} alt="Manifest" />
          <div className={classes.logoContainer}>
            <div className={classes.inline1}>
              <img
                className={classes.smallIcon}
                src={MobileAppsLight}
                alt="MobileAppsLight"
              />
              <img
                className={classes.smallIcon}
                src={MarketingNBrandingLight}
                alt="MarketingNBrandingLight"
              />
              <img
                className={classes.smallIcon}
                src={BusinessStrategyLight}
                alt="BusinessStrategyLight"
              />
              <img
                className={classes.smallIcon}
                src={HardwareEngineeringLight}
                alt="HardwareEngineeringLight"
              />
              <img
                className={classes.smallIcon}
                src={WebSoftwareDevLight}
                alt="WebSoftwareDevLight"
              />
              <img
                className={classes.smallIcon}
                src={UIUXDesignLight}
                alt="UIUXDesignLight"
              />
            </div>
            <p className={classes.inline2}>2 Years Engagement</p>
          </div>
        </div>
      </div>
      <div
        style={{ display: "inline-block" }}
        className={classes.largeProjectBox}
      >
        <h3 className={classes.h3}>Serving Fresh</h3>
        <p className={classes.description}>
          A meal subscription platform for busy professionals to eat from their
          favorite local restaurants at affordable prices.
        </p>
        <Link to="ServingFresh">
          <img
            src={ServingFresh}
            className={classes.bigImg}
            alt="ServingFresh"
          />
        </Link>
        <div className={classes.logoContainer}>
          <div className={classes.inline1}>
            <img
              className={classes.smallIcon}
              src={MobileAppsLight}
              alt="MobileAppsLight"
            />
            <img
              className={classes.smallIcon}
              src={MarketingNBrandingLight}
              alt="MarketingNBrandingLight"
            />
            <img
              className={classes.smallIcon}
              src={BusinessStrategyLight}
              alt="BusinessStrategyLight"
            />
            <img
              className={classes.smallIcon}
              src={HardwareEngineeringLight}
              alt="HardwareEngineeringLight"
            />
            <img
              className={classes.smallIcon}
              src={WebSoftwareDevLight}
              alt="WebSoftwareDevLight"
            />
            <img
              className={classes.smallIcon}
              src={UIUXDesignLight}
              alt="UIUXDesignLight"
            />
          </div>
          <p className={classes.inline2} style={{ textAlign: "right" }}>
            1 Year Engagement
          </p>
        </div>
      </div>
      <div>
        <div className={classes.smallProjectBox}>
          <h3 className={classes.h3}>Just Delivered</h3>
          <p className={classes.description}>
            A digital platform for last mile food delivery
          </p>
          <img
            src={JustDelivered}
            className={classes.smallImg}
            alt="JustDelivered"
          />
          <div className={classes.logoContainer}>
            <div className={classes.inline1}>
              <img
                className={classes.smallIcon}
                src={MobileAppsLight}
                alt="MobileAppsLight"
              />
              <img
                className={classes.smallIcon}
                src={MarketingNBrandingLight}
                alt="MarketingNBrandingLight"
              />
              <img
                className={classes.smallIcon}
                src={BusinessStrategyLight}
                alt="BusinessStrategyLight"
              />
              <img
                className={classes.smallIcon}
                src={HardwareEngineeringLight}
                alt="HardwareEngineeringLight"
              />
              <img
                className={classes.smallIcon}
                src={WebSoftwareDevLight}
                alt="WebSoftwareDevLight"
              />
              <img
                className={classes.smallIcon}
                src={UIUXDesignLight}
                alt="UIUXDesignLight"
              />
            </div>
            <p className={classes.inline2}>4 months Engagement</p>
          </div>
        </div>
        <div className={classes.smallProjectBox}>
          <h3 className={classes.h3}>Nitya Ayurveda</h3>
          <p className={classes.description}>
            A digital platform for last mile food delivery
          </p>
          <img
            src={NityaAyurveda}
            className={classes.smallImg}
            alt="NityaAyurveda"
          />
          <div className={classes.logoContainer}>
            <div className={classes.inline1}>
              <img
                className={classes.smallIcon}
                src={MobileAppsLight}
                alt="MobileAppsLight"
              />
              <img
                className={classes.smallIcon}
                src={MarketingNBrandingLight}
                alt="MarketingNBrandingLight"
              />
              <img
                className={classes.smallIcon}
                src={BusinessStrategyLight}
                alt="BusinessStrategyLight"
              />
              <img
                className={classes.smallIcon}
                src={HardwareEngineeringLight}
                alt="HardwareEngineeringLight"
              />
              <img
                className={classes.smallIcon}
                src={WebSoftwareDevLight}
                alt="WebSoftwareDevLight"
              />
              <img
                className={classes.smallIcon}
                src={UIUXDesignLight}
                alt="UIUXDesignLight"
              />
            </div>
            <p className={classes.inline2}>2 months Engagement</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profolio;
