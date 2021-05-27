import logo from "../image/logo.png";
import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";
import border from "../image/border.png";

const style = {
  marginBottom: "100px",
};

const Navbar = () => {
  return (
    <nav
      style={{
        marginBottom: "100px",
        borderBottom: "1px ",
        borderBottomColor: "black",
      }}
    >
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
                border: "15px solid #f6a833",
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
                border: "15px solid #f6a833",
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
                border: "15px solid #f6a833",
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
                border: "15px solid #f6a833",
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
