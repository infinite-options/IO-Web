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
    fontSize: "300%",
    fontFamily: "AvenirHeavy",
    textDecoration: "underline",
    color: "#52330D",
  },
  title: {
    fontSize: "200%",
    textAlign: "left",
    fontFamily: "AvenirHeavy",
    color: "#52330D",
  },
  description: {
    textAlign: "left",
    fontFamily: "AvenirMedium",
    fontSize: "150%",
  },
  contaier: {
    margin: "auto",
    // width: "80%",
    padding: "20px",
  },
  largeProjectTable: {
    display: "inline-block",
    width: "90%",
  },
  smallProjectTable: {
    display: "inline-block",
    width: "90%",
  },
  smallProjectCell: {
    paddingLeft: "2%",
    paddingRight: "2%",
  },
  largeProjectCell: {
    paddingLeft: "2%",
    paddingRight: "2%",
  },
  inline: {
    display: "inline-block",
  },
  inline1: {
    display: "inline-block",
  },
  inline2: {
    display: "inline-block",
    textAlign: "Right",
    fontFamily: "AvenirMedium",
  },
  smallImg: {
    width: "auto",
    height: "auto",
  },
  bigImg: {
    width: "100%",
    // width: "1000px",
  },
  smallIcon: {
    width: "10%",
    padding: "2px",
  },

  logoContainer: {
    display: "flex",
    justifyContent: "space-between",
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
}));

const Profolio = () => {
  const classes = useStyles();
  return (
    <section id="profolio" className={classes.contaier}>
      <h1 className={classes.h1}>Profolio</h1>
      <div>
        <table className={classes.smallProjectTable}>
          <tr>
            <td className={classes.smallProjectCell}>
              <p className={classes.title}>Meals for me</p>
            </td>
            <td className={classes.smallProjectCell}>
              <p className={classes.title}>Manifest</p>
            </td>
          </tr>
          <tr>
            <td className={classes.smallProjectCell}>
              <p className={classes.description}>
                A meal subscription platform for busy professionals to eat from
                their favorite local restaurants at affordable prices.
              </p>
            </td>
            <td className={classes.smallProjectCell}>
              <p className={classes.description}>
                A productivity app for people with memory issues - in
                collaboration with Tulane University.
              </p>
            </td>
          </tr>
          <tr>
            <td className={classes.smallProjectCell}>
              <img
                src={MealsForMe}
                className={classes.smallImg}
                alt="MealsForMe"
              />
            </td>
            <td className={classes.smallProjectCell}>
              <img src={Manifest} className={classes.smallImg} alt="Manifest" />
            </td>
          </tr>
          <tr>
            <td className={classes.smallProjectCell}>
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
            </td>
            <td className={classes.smallProjectCell}>
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
            </td>
          </tr>
          <tr>
            <td className={classes.largeProjectCell}>
              <p className={classes.title}>Serving Fresh</p>
            </td>
          </tr>
          <tr>
            <td className={classes.smallProjectCell}>
              <p className={classes.description}>
                A meal subscription platform for busy professionals to eat from
                their favorite local restaurants at affordable prices.
              </p>
            </td>
          </tr>
          <tr>
            <td className={classes.smallProjectCell}>
              <Link to="ServingFresh">
                <img
                  src={ServingFresh}
                  className={classes.bigImg}
                  alt="ServingFresh"
                />
              </Link>
            </td>
          </tr>
          <tr>
            <td className={classes.smallProjectCell}>
              <div className={classes.largeProjectBox}>
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
            </td>
          </tr>
        </table>
      </div>

      <div>
        <table className={classes.smallProjectTable}>
          <tr>
            <td className={classes.smallProjectCell}>
              <p className={classes.title}>Just Delivered</p>
            </td>
            <td className={classes.smallProjectCell}>
              <p className={classes.title}>Nitya Ayurveda</p>
            </td>
          </tr>
          <tr>
            <td className={classes.smallProjectCell}>
              <p className={classes.description}>
                A digital platform for last mile food delivery
              </p>
            </td>
            <td className={classes.smallProjectCell}>
              <p className={classes.description}>
                A digital platform for last mile food delivery
              </p>
            </td>
          </tr>
          <tr>
            <td className={classes.smallProjectCell}>
              <img
                src={JustDelivered}
                className={classes.smallImg}
                alt="JustDelivered"
              />
            </td>
            <td className={classes.smallProjectCell}>
              <img
                src={NityaAyurveda}
                className={classes.smallImg}
                alt="NityaAyurveda"
              />
            </td>
          </tr>
          <tr>
            <td className={classes.smallProjectCell}>
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
            </td>
            <td className={classes.smallProjectCell}>
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
            </td>
          </tr>
        </table>
      </div>
      <button className={classes.button}>Hire Our Talent</button>
    </section>
  );
};

export default Profolio;
