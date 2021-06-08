import Manifest from "../../assets/images/Manifest.png";
import ServingFresh from "../../assets/images/ServingFresh/Serving_Fresh.png";
import ServingFreshMobile from "../../assets/images/ServingFresh/ServingFreshMobile.png";
import ServingFreshWhite from "../../assets/images/ServingFresh/ServingFreshWhite@2x.png";
import JustDelivered1 from "../../assets/images/JustDelivered1.png";
import MealsForMe from "../../assets/images/Meals4Me/Meals_for_me.png";
import M4MeMockup1 from "../../assets/images/Meals4Me/M4MeMockup1.png";
import MealsForMe1 from "../../assets/images/Meals4Me/MealsForMe1.png";

import { Link } from "react-router-dom";
import {
  makeStyles,
  createMuiTheme,
  MuiThemeProvider,
} from "@material-ui/core/styles";

import Tooltip from "@material-ui/core/Tooltip";
const useStyles = makeStyles((theme) => ({
  h1: {
    fontSize: "54px",
    fontFamily: "AvenirHeavy",
    color: "#F6A833",
    borderTop: "3px solid #F6A833",
    borderBottom: "3px solid #F6A833",
    textAlign: "left",
    padding: "20px",
  },
  title0: {
    fontSize: "54px",
    fontFamily: "AvenirHeavy",
    color: "#52330D",
    margin: "0 auto",
  },
  title: {
    fontSize: "42px",
    textAlign: "left",
    fontFamily: "AvenirHeavy",
    color: "#52330D",
    marginBottom: "-10px",
  },
  description: {
    textAlign: "left",
    fontFamily: "AvenirMedium",
    fontSize: "24px",
  },
  contaier: {
    margin: "0 auto",
    width: "80%",
    marginBottom: "10%",
  },
  ProjectTable: {
    display: "block",
    width: "90%",
  },
  ProjectCell: {
    width: "500px",
    paddingLeft: "10px",
    paddingRight: "10px",
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
  unstyleLink: {
    textDecoration: "none",
  },
}));

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

const Portfolio = () => {
  const classes = useStyles();
  return (
    <section id="portfolio" className={classes.contaier}>
      <h1 className={classes.title0}>
        Things we can help with & some examples
      </h1>
      <h1 className={classes.h1}>Product Design</h1>
      <table className={classes.ProjectTable}>
        <tr>
          <td className={classes.ProjectCell}>
            <MuiThemeProvider theme={theme}>
              <Tooltip title="Click here to see the design files">
                <div>
                  <Link to="MealsForMe" className={classes.unstyleLink}>
                    <p className={classes.title}>Mealsfor.me</p>
                  </Link>
                </div>
              </Tooltip>
            </MuiThemeProvider>
          </td>

          <td className={classes.ProjectCell}>
            <MuiThemeProvider theme={theme}>
              <Tooltip title="Click here to see the design files">
                <div>
                  <Link to="ServingFresh" className={classes.unstyleLink}>
                    <p className={classes.title}>Serving Fresh</p>
                  </Link>
                </div>
              </Tooltip>
            </MuiThemeProvider>
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
<<<<<<< HEAD:src/Homepage/How_we_can_help_Portfolio.js
            <img
              src={ServingFreshWhite}
              className={classes.smallImg}
              alt="ServingFreshWhite"
            />
=======
            <Link to="MealsForMe">
              <img
                src={MealsForMe1}
                className={classes.smallImg}
                alt="MealsForMe1"
              />
            </Link>
>>>>>>> c9045312324b9bbe1181350e703b07a9219f68c1:src/containers/HowWeCanHelp/How_we_can_help_Portfolio.js
          </td>
          <td className={classes.ProjectCell}>
            <Link to="ServingFresh">
              <img
                src={ServingFreshWhite}
                className={classes.smallImg}
                alt="ServingFreshWhite"
              />
            </Link>
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
            <MuiThemeProvider theme={theme}>
              <Tooltip title="Click here to see the design files">
                <div>
                  <Link to="MealsForMe" className={classes.unstyleLink}>
                    <p className={classes.title}>Mealsfor.me</p>
                  </Link>
                </div>
              </Tooltip>
            </MuiThemeProvider>
          </td>

          <td className={classes.ProjectCell}>
            <MuiThemeProvider theme={theme}>
              <Tooltip title="Click here to see the design files">
                <div>
                  <Link to="ServingFresh" className={classes.unstyleLink}>
                    <p className={classes.title}>Serving Fresh</p>
                  </Link>
                </div>
              </Tooltip>
            </MuiThemeProvider>
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
            <Link to="MealsForMe">
              <img
                src={M4MeMockup1}
                className={classes.smallImg}
                alt="M4MeMockup1"
              />
            </Link>
          </td>
          <td className={classes.ProjectCell}>
            <Link to="ServingFresh">
              <img
                src={ServingFreshMobile}
                className={classes.smallImg}
                alt="ServingFreshMobile"
              />
            </Link>
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
            <Link to="MealsForMe">
              <img
                src={MealsForMe}
                className={classes.smallImg}
                alt="MealsForMe"
              />
            </Link>
          </td>
          <td className={classes.ProjectCell}>
            <Link to="ServingFresh">
              <img
                src={ServingFresh}
                className={classes.smallImg}
                alt="ServingFresh"
                style={{ opacity: 0.5 }}
              />
            </Link>
          </td>
          <td className={classes.ProjectCell}></td>
        </tr>
        <tr></tr>
      </table>
    </section>
  );
};

export default Portfolio;
