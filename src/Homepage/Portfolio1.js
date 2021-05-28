import logo from "../image/logo.png";
import MealsForMe from "../image/Meals_for_me.png";
import Manifest from "../image/Manifest.png";
import ServingFresh from "../image/Serving_Fresh.png";
import JustDelivered from "../image/JustDelivered.png";
import NityaAyurveda from "../image/NityaAyurvedaLogo.png";

import { makeStyles, withTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  h1: {
    fontSize: "300%",
    fontFamily: "AvenirHeavy",
    color: "#52330D",
    borderTop: "3px solid #52330D",
    borderBottom: "3px solid #52330D",
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
  button: {
    backgroundColor: "white",
    border: "3px solid #F6A833",
    color: "#F6A833",
    width: "90%",
    padding: "15px 30px",
    textAlign: "center",
    display: "block",
    fontSize: "28px",
    borderRadius: "50px",
    fontFamily: "AvenirHeavy",
    marginTop: "10px",
    marginBottom: "10px",
    margin: "auto",
  },
  button2: {
    backgroundColor: "#F6A833",
    border: "1px solid #F6A833",
    color: "white",
    width: "50%",
    padding: "15px 30px",
    textAlign: "center",
    display: "block",
    fontSize: "28px",
    borderRadius: "50px",
    fontFamily: "AvenirHeavy",
    margin: "50px auto",
  },
  unstyleLink: {
    textDecoration: "none",
  },
}));

const Portfolio = () => {
  const classes = useStyles();
  return (
    <section id="portfolio" className={classes.contaier}>
      <h1 className={classes.h1}>Products we’ve built</h1>
      <div>
        <table className={classes.ProjectTable}>
          <tr>
            <td className={classes.ProjectCell}>
              <Link to="MealsForMe" className={classes.unstyleLink}>
                <p className={classes.title}>Mealsfor.me</p>
              </Link>
            </td>

            <td className={classes.ProjectCell}>
              <Link to="ServingFresh" className={classes.unstyleLink}>
                <p className={classes.title}>Serving Fresh</p>
              </Link>
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
                src={MealsForMe}
                className={classes.smallImg}
                alt="MealsForMe"
              />
            </td>
            <td className={classes.ProjectCell}>
              <img
                src={ServingFresh}
                className={classes.smallImg}
                alt="Manifest"
              />
            </td>
            <td className={classes.ProjectCell}>
              <img
                src={JustDelivered}
                className={classes.smallImg}
                alt="JustDelivered"
              />
            </td>
          </tr>
          <tr>
            <td className={classes.ProjectCell}>
              <button className={classes.button}>Become a Customer</button>
              <button className={classes.button}>
                Become a Partner Restaurant
              </button>
            </td>
            <td className={classes.ProjectCell}>
              <button className={classes.button}>Become a Customer</button>
              <button className={classes.button}>Become a Farm Partner</button>
            </td>
            <td className={classes.ProjectCell}>
              <button className={classes.button}>
                Use this app for your delivery business
              </button>
            </td>
          </tr>
        </table>
      </div>
      <h1 className={classes.h1}>Products we helped build</h1>
      <table className={classes.ProjectTable}>
        <tr>
          <td className={classes.ProjectCell}>
            <p className={classes.title}>Manifest</p>
          </td>
          <td className={classes.ProjectCell}>
            <p className={classes.title}>Nitya Ayurveda</p>
          </td>
          <td></td>
        </tr>
        <tr>
          <td className={classes.ProjectCell}>
            <p className={classes.description}>
              A productivity app for people with memory issues - in
              collaboration with Tulane University.
            </p>
          </td>
          <td className={classes.ProjectCell}>
            <p className={classes.description}>
              Nitya Ayurveda brings classical Ayurvedic healthcare to clients in
              the South Bay.
            </p>
          </td>
          <td className={classes.ProjectCell}></td>
        </tr>
        <tr>
          <td className={classes.ProjectCell}>
            <img src={Manifest} className={classes.smallImg} alt="Manifest" />
          </td>
          <td className={classes.ProjectCell}>
            <img
              src={NityaAyurveda}
              className={classes.smallImg}
              alt="NityaAyurveda"
            />
          </td>
          <td className={classes.ProjectCell}></td>
        </tr>
        <tr></tr>
      </table>
      <button className={classes.button2}>
        I am a Entrepreneur looking for some help.
      </button>
    </section>
  );
};

export default Portfolio;
