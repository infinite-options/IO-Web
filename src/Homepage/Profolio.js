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
  p: {
    textAlign: "left",
  },
  contaier: {
    margin: "auto",
    // width: "80%",
    padding: "50px",
  },
  bigBox: {
    width: "60%",
  },
  box: {
    width: "30%",
  },
  inline: {
    display: "inline-block",
  },
  img: {
    width: "500px",
  },
  BigImg: {
    width: "1000px",
  },
  SmallImage: { width: "50px" },
}));

const Profolio = () => {
  const classes = useStyles();
  return (
    <section id="profolio" className={classes.contaier}>
      <h1 className={classes.h1}>Profolio</h1>
      <div>
        <div style={{ display: "inline-block" }} className={classes.box}>
          <h3 className={classes.h3}>Meals for me</h3>
          <p className={classes.p}>
            A meal subscription platform for busy professionals to eat from
            their favorite local restaurants at affordable prices.
          </p>
          <img src={MealsForMe} className={classes.img} alt="MealsForMe" />
          <div>
            <div className={classes.inline}>
              <img
                className={classes.SmallImage}
                src={MobileAppsLight}
                alt="MobileAppsLight"
              />
              <img
                className={classes.SmallImage}
                src={MarketingNBrandingLight}
                alt="MarketingNBrandingLight"
              />
              <img
                className={classes.SmallImage}
                src={BusinessStrategyLight}
                alt="BusinessStrategyLight"
              />
              <img
                className={classes.SmallImage}
                src={HardwareEngineeringLight}
                alt="HardwareEngineeringLight"
              />
              <img
                className={classes.SmallImage}
                src={WebSoftwareDevLight}
                alt="WebSoftwareDevLight"
              />
              <img
                className={classes.SmallImage}
                src={UIUXDesignLight}
                alt="UIUXDesignLight"
              />
            </div>
            <p className={classes.inline}>7 months Engagement</p>
          </div>
        </div>
        <div style={{ display: "inline-block" }} className={classes.box}>
          <h3 className={classes.h3}>Manifest</h3>
          <p className={classes.p}>
            A productivity app for people with memory issues 0 in collaboration
            with Tulane University
          </p>
          <img src={Manifest} className={classes.img} alt="Manifest" />
          <div>
            <div className={classes.inline}>
              <img
                className={classes.SmallImage}
                src={MobileAppsLight}
                alt="MobileAppsLight"
              />
              <img
                className={classes.SmallImage}
                src={MarketingNBrandingLight}
                alt="MarketingNBrandingLight"
              />
              <img
                className={classes.SmallImage}
                src={BusinessStrategyLight}
                alt="BusinessStrategyLight"
              />
              <img
                className={classes.SmallImage}
                src={HardwareEngineeringLight}
                alt="HardwareEngineeringLight"
              />
              <img
                className={classes.SmallImage}
                src={WebSoftwareDevLight}
                alt="WebSoftwareDevLight"
              />
              <img
                className={classes.SmallImage}
                src={UIUXDesignLight}
                alt="UIUXDesignLight"
              />
            </div>
            <p className={classes.inline}>2 Years Engagement</p>
          </div>
        </div>
      </div>
      <div style={{ display: "inline-block" }} className={classes.bigBox}>
        <h3 className={classes.h3}>Serving Fresh</h3>
        <p className={classes.p}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores
        </p>
        <img src={ServingFresh} className={classes.BigImg} alt="ServingFresh" />
        <div>
          <div className={classes.inline}>
            <img
              className={classes.SmallImage}
              src={MobileAppsLight}
              alt="MobileAppsLight"
            />
            <img
              className={classes.SmallImage}
              src={MarketingNBrandingLight}
              alt="MarketingNBrandingLight"
            />
            <img
              className={classes.SmallImage}
              src={BusinessStrategyLight}
              alt="BusinessStrategyLight"
            />
            <img
              className={classes.SmallImage}
              src={HardwareEngineeringLight}
              alt="HardwareEngineeringLight"
            />
            <img
              className={classes.SmallImage}
              src={WebSoftwareDevLight}
              alt="WebSoftwareDevLight"
            />
            <img
              className={classes.SmallImage}
              src={UIUXDesignLight}
              alt="UIUXDesignLight"
            />
          </div>
          <p className={classes.inline} style={{ textAlign: "right" }}>
            1 Year Engagement
          </p>
        </div>
      </div>
      <div>
        <div style={{ display: "inline-block" }} className={classes.box}>
          <h3 className={classes.h3}>Just Delivered</h3>
          <p className={classes.p}>
            A digital platform for last mile food delivery
          </p>
          <img
            src={JustDelivered}
            className={classes.img}
            alt="JustDelivered"
          />
          <div>
            <div className={classes.inline}>
              <img
                className={classes.SmallImage}
                src={MobileAppsLight}
                alt="MobileAppsLight"
              />
              <img
                className={classes.SmallImage}
                src={MarketingNBrandingLight}
                alt="MarketingNBrandingLight"
              />
              <img
                className={classes.SmallImage}
                src={BusinessStrategyLight}
                alt="BusinessStrategyLight"
              />
              <img
                className={classes.SmallImage}
                src={HardwareEngineeringLight}
                alt="HardwareEngineeringLight"
              />
              <img
                className={classes.SmallImage}
                src={WebSoftwareDevLight}
                alt="WebSoftwareDevLight"
              />
              <img
                className={classes.SmallImage}
                src={UIUXDesignLight}
                alt="UIUXDesignLight"
              />
            </div>
            <p className={classes.inline}>4 months Engagement</p>
          </div>
        </div>
        <div style={{ display: "inline-block" }}>
          <h3 className={classes.h3}>Nitya Ayurveda</h3>
          <p className={classes.p}>
            A digital platform for last mile food delivery
          </p>
          <img
            src={NityaAyurveda}
            className={classes.img}
            alt="NityaAyurveda"
          />
          <div>
            <div className={classes.inline}>
              <img
                className={classes.SmallImage}
                src={MobileAppsLight}
                alt="MobileAppsLight"
              />
              <img
                className={classes.SmallImage}
                src={MarketingNBrandingLight}
                alt="MarketingNBrandingLight"
              />
              <img
                className={classes.SmallImage}
                src={BusinessStrategyLight}
                alt="BusinessStrategyLight"
              />
              <img
                className={classes.SmallImage}
                src={HardwareEngineeringLight}
                alt="HardwareEngineeringLight"
              />
              <img
                className={classes.SmallImage}
                src={WebSoftwareDevLight}
                alt="WebSoftwareDevLight"
              />
              <img
                className={classes.SmallImage}
                src={UIUXDesignLight}
                alt="UIUXDesignLight"
              />
            </div>
            <p className={classes.inline}>2 months Engagement</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profolio;
