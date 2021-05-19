import logo from "../image/logo.png";
import MealsForMe from "../image/Meals_for_me.png";
import Manifest from "../image/Manifest.png";
import ServingFresh from "../image/Serving_Fresh.png";
import JustDelivered from "../image/JustDelivered.png";
import NityaAyurveda from "../image/NityaAyurvedaLogo.png";

import ServingFreshMobile from "../image/ServingFreshMobile.png";
import ServingFreshWhite from "../image/ServingFreshWhite@2x.png";
import JustDelivered1 from "../image/JustDelivered1.png";
import M4MeMockup1 from "../image/M4MeMockup1.png";
import MealsForMe1 from "../image/MealsForMe1.png";

import { makeStyles, withTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  h1: {
    fontSize: "300%",
    fontFamily: "AvenirHeavy",
    color: "#F6A833",
    borderTop: "3px solid #F6A833",
    borderBottom: "3px solid #F6A833",
    textAlign: "left",
    padding: "20px",
  },
  title: {
    fontSize: "200%",
    textAlign: "left",
    fontFamily: "AvenirHeavy",
    color: "#52330D",
    marginBottom: "-10px",
  },
  description: {
    textAlign: "left",
    fontFamily: "AvenirMedium",
    fontSize: "150%",
  },
  contaier: {
    margin: "auto",
    width: "80%",
  },
  ProjectTable: {
    display: "block",
    width: "90%",
  },
  ProjectCell: {
    width: "500px",
    paddingLeft: "15px",
    paddingRight: "15px",
    margin: "0, auto",
  },
  inline: {
    display: "inline-block",
  },
  smallImg: {
    width: "500px",
    height: "500px",
    margin: "0, auto",
  },
}));

const Portfolio = () => {
  const classes = useStyles();
  return (
    <section id="portfolio" className={classes.contaier}>
      <h1 className={classes.h1}>Product Design</h1>
      <table className={classes.ProjectTable}>
        <tr>
          <td className={classes.ProjectCell}>
            <p className={classes.title}>Meals for me</p>
          </td>

          <td className={classes.ProjectCell}>
            <p className={classes.title}>Serving Fresh</p>
          </td>
          <td className={classes.ProjectCell}>
            <p className={classes.title}>Manifest</p>
          </td>
        </tr>
        <tr>
          <td className={classes.ProjectCell}>
            <p className={classes.description}>
              A meal subscription platform for busy professionals to eat from
              their favorite local restaurants at affordable prices.
            </p>
          </td>
          <td className={classes.ProjectCell}>
            <p className={classes.description}>
              A digital platform for local farmers to take online orders and
              make home deliveries.
            </p>
          </td>
          <td className={classes.ProjectCell}>
            <p className={classes.description}>
              A digital platform for last mile food delivery.
            </p>
          </td>
        </tr>
        <tr>
          <td className={classes.ProjectCell}>
            <img
              src={MealsForMe1}
              className={classes.smallImg}
              alt="MealsForMe1"
            />
          </td>
          <td className={classes.ProjectCell}>
            <img
              src={ServingFreshWhite}
              className={classes.smallImg}
              alt="ServingFreshWhite"
            />
          </td>
          <td className={classes.ProjectCell}>
            <img
              src={JustDelivered1}
              className={classes.smallImg}
              alt="JustDelivered1"
            />
          </td>
        </tr>
      </table>

      <h1 className={classes.h1}>Product Development</h1>
      <table className={classes.ProjectTable}>
        <tr>
          <td className={classes.ProjectCell}>
            <p className={classes.title}>Meals for me</p>
          </td>

          <td className={classes.ProjectCell}>
            <p className={classes.title}>Serving Fresh</p>
          </td>
          <td className={classes.ProjectCell}>
            <p className={classes.title}>Manifest</p>
          </td>
        </tr>
        <tr>
          <td className={classes.ProjectCell}>
            <p className={classes.description}>
              A meal subscription platform for busy professionals to eat from
              their favorite local restaurants at affordable prices.
            </p>
          </td>
          <td className={classes.ProjectCell}>
            <p className={classes.description}>
              A digital platform for local farmers to take online orders and
              make home deliveries.
            </p>
          </td>
          <td className={classes.ProjectCell}>
            <p className={classes.description}>
              A productivity app for people with memory issues. In collaboration
              with Tulane University.
            </p>
          </td>
        </tr>
        <tr>
          <td className={classes.ProjectCell}>
            <img
              src={M4MeMockup1}
              className={classes.smallImg}
              alt="M4MeMockup1"
            />
          </td>
          <td className={classes.ProjectCell}>
            <img
              src={ServingFreshMobile}
              className={classes.smallImg}
              alt="ServingFreshMobile"
            />
          </td>
          <td className={classes.ProjectCell}>
            <img src={Manifest} className={classes.smallImg} alt="Manifest" />
          </td>
        </tr>
      </table>
      <h1 className={classes.h1}>Branding and Marketing</h1>
      <table className={classes.ProjectTable}>
        <tr>
          <td className={classes.ProjectCell}>
            <img
              src={MealsForMe}
              className={classes.smallImg}
              alt="MealsForMe"
            />
          </td>
          <td className={classes.ProjectCell}>
            <img
              src={ServingFresh}
              className={classes.smallImg}
              alt="ServingFresh"
              style={{ opacity: 0.5 }}
            />
          </td>
          <td className={classes.ProjectCell}></td>
        </tr>
        <tr></tr>
      </table>
    </section>
  );
};

export default Portfolio;
