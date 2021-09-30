

import React, { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
// import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { animateScroll as scroll } from "react-scroll";
import { useHistory, useLocation } from "react-router-dom";

//import logo from "../Assets/Projects/Nitya.png";
//import InstagramIcon from "../Assets/Projects/Nitya.png";
// import LoginNavBar from "./LoginNavBar";
// import SignUp from "../Components/Home/SignUp";
// import LogIn from "../Components/Home/LogIn";
import "./Navbar.css";
import Home from "../Home/Home";

const useStyles = makeStyles((theme) => ({
  authModal: {
    position: "absolute",
    width: "500px",
  },

  buttonColor: {
    color: "#000000"
  }
}));

function useOutsideAlerter(ref) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        !ref.current.hidden
      ) {
        ref.current.hidden = true;
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

const Navbar = () => {
  const classes = useStyles();
  const location  = useLocation();

  const [open, setOpen] = useState(false);
  const [projects, setProjects] = useState(false)
  const [onClickAbout, setOnClickAbout] = useState(false)
  const [onClickproject, setOnClickProject] = useState(false)
  const [onClickteams, setOnClickTeams] = useState(false)



  const handleClick = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
    setProjects(false)

  };

  const closeMenuHome = () => {
    setOpen(false);
    setProjects(false)
    setOnClickAbout(!onClickAbout)
    console.log("about", onClickAbout)

  };

  const closeMenuProjects = () => {
    setOpen(false);
    setProjects(true)
    setOnClickProject(!onClickproject)
    console.log("clickPro", onClickproject)

  };

  const closeMenuTeams = () => {
    setOpen(false);
    setProjects(true)
    setOnClickTeams(!onClickteams)
    console.log("click", onClickteams)
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    // <nav className="navbar" style={{ background: location.pathname === "/projects" ? '#52330D' : 'white' }}>
      <nav className="navbar">
      <div className="emptyDiv">
      </div>
      <Link to="/" className="nav-logo"  onClick={closeMenu}>
         {/* <img src={location.pathname === "/projects" ? "/Navigation/Logo-White.png"  : "/Navigation/Logo.png"}/> */}
         <img src={"/Navigation/Logo.png"}/>
      </Link>
      <div onClick={handleClick} className="nav-icon">
        {open ? <FiX /> : <FiMenu />}
      </div>
      <ul className={open ? "nav-links active" : "nav-links"}>
        <li className="nav-item" >
          {/* <Link to={{pathname: '/projects', state_project : { project: onClickproject } }} className="nav-link" onClick={closeMenuProjects} style={{color: location.pathname === "/projects" ? 'white' : ''}} > */}
          <Link to={{pathname: '/projects', state_project : { project: onClickproject } }} className="nav-link" onClick={closeMenuProjects} >
           Projects
          </Link>
        </li>
        <li className="nav-item">
          {/* <Link to={{pathname: '/teams', state_teams : { teams: onClickteams } }} className="nav-link" onClick={closeMenuTeams}  style={{color: location.pathname === "/projects" ? 'white' : ''}}> */}
          <Link to={{pathname: '/teams', state_teams : { teams: onClickteams } }} className="nav-link" onClick={closeMenuTeams} >
            Teams
          </Link>
        </li>
    
        <li className="nav-item">
          {/* <Link to="/contact" className="nav-link" onClick={closeMenu}  style={{color: location.pathname === "/projects" ? 'white' : ''}}> */}
          <Link to="/contact" className="nav-link" onClick={closeMenu} > 
            Contact
          </Link>
        </li>

        <li className="nav-item">
          {/* <Link to={{pathname: '/', state : { click: onClickAbout } }}  className="nav-link" onClick={closeMenuHome}  style={{color: location.pathname === "/projects" ? 'white' : ''}}> */}
          <Link to={{pathname: '/', state : { click: onClickAbout } }}  className="nav-link" onClick={closeMenuHome} >
            About
          </Link>
        </li>
      </ul>

      <div className="emptyDiv1">
      </div>
    </nav>
  );
};

export default Navbar;
