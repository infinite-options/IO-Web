import logo from "../image/logo.png";
import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";
import border from "../image/border.png";

const Navbar = () => {
  return (
    <nav>
      <div style={{ width: "33%" }}>
        <img
          src={logo}
          alt="logo"
          style={{ float: "left", marginTop: "35px" }}
        />
      </div>
      <div style={{ width: "66%", float: "right" }}>
        <ul className={classes.ul}>
          <li className={classes.li}>
            <NavLink
              style={{
                color: "black",
                textDecoration: "none",
                fontFamily: "AvenirMedium",
              }}
              exact
              activeStyle={{
                color: "white",
                backgroundColor: "#f6a833",
                borderRadius: "100px",
                padding: "10px 20px 10px 20px",
              }}
              to="/"
            >
              What We Do
            </NavLink>
          </li>
          <li className={classes.li}>
            <NavLink
              style={{
                fontFamily: "AvenirMedium",
                color: "black",
                textDecoration: "none",
              }}
              exact
              activeStyle={{
                color: "white",
                backgroundColor: "#f6a833",
                borderRadius: "100px",
                padding: "10px 20px 10px 20px",
              }}
              to="/how_we_can_help"
            >
              How We Can Help
            </NavLink>
          </li>
          <li className={classes.li}>
            <NavLink
              style={{
                fontFamily: "AvenirMedium",
                color: "black",
                textDecoration: "none",
              }}
              exact
              activeStyle={{
                color: "white",
                backgroundColor: "#f6a833",
                borderRadius: "100px",
                padding: "10px 20px 10px 20px",
              }}
              to="/portfolio1"
            >
              Our Portfolio
            </NavLink>
          </li>
          <li className={classes.li}>
            <NavLink
              style={{
                fontFamily: "AvenirMedium",
                color: "black",
                textDecoration: "none",
              }}
              exact
              activeStyle={{
                color: "white",
                backgroundColor: "#f6a833",
                borderRadius: "100px",
                padding: "10px 20px 10px 20px",
              }}
              to="/contact"
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
      <img style={{ width: "100%", marginTop: "25px" }} src={border}></img>
    </nav>
  );
};

export default Navbar;
