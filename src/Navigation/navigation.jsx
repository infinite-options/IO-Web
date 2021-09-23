// import React, { useState } from "react"
// import Toolbar from "@material-ui/core/Toolbar";
// import Button from "@material-ui/core/Button";
// import AppBar from "@material-ui/core/AppBar";
// import makeStyles from "@material-ui/core/styles/makeStyles";
// import { useHistory } from "react-router-dom";
// import Typography from "@material-ui/core/Typography";

// /* Custom Hook to make styles */
// const useStyles = makeStyles({

//     /* navigationContainer */
//     navigationBar: {

       
//         width:'100%',


//     },

//     /* displaying the navigationBar as flex Containers */
//     displayNav:{

//         display:'flex',
//         justifyContent:'flex-start',

//     },

//     /* Title of the Navigation Bar */
//     titleElement: {

//         flex:1.8,
//         display:'flex',
//         justifyContent:'flex-end'

//     },

//     /* Button  container for the navigation Bar */
//     buttonContainer: {

//         flex:3,
//         display:'flex',
//         justifyContent:'center'

//     },

//     /* Color of the Button in Navigation Bar */
//     buttonColor: {


//        // color:'#000000',
//         fontWeight:"bold",
//         paddingLeft:"1rem",

//     },
// });

// /* Navigation Bar component function */
// export function Navigation(){

//     const history = useHistory();
//     const [projects, setProjects] = useState(false)

//     const classes = useStyles();

//     /* History of the HomePage URL which is shown url tab */
//     function homeNavigation(){

//         history.push('/');
//         setProjects(false)

//     }

//     /* History of the ContactPage URL which is shown url tab */
//     function contactNavigation(){

//         history.push('/contact')
//     }

//     function ProjectsNavigation(){

//         history.push('/projects');
//         setProjects(true)
//     }

//     /* History of the ContactPage URL which is shown url tab */
//     function teamsNavigation(){

//         history.push('/teams')
//         setProjects(false)

//     }
//     return(

//         <div className={classes.navigationBar} style={{ background: projects ? '#52330D' : 'white' }}>

//                 <div className={classes.displayNav}>

//                     <div className={classes.titleElement}>

//                         <img src="/Navigation/Logo.png"/>

//                     </div>

//                     <div className={classes.buttonContainer} >

//                         <Button className={classes.buttonColor}
//                                 variant={"text"}
//                                 onClick={homeNavigation}
//                                 style={{color: projects ? 'white' : 'black'}}>

//                             About
//                         </Button>

//                         <Button className={classes.buttonColor}
//                                 variant={"text"}
//                                 onClick={ProjectsNavigation}
//                                 style={{color: projects ? 'white' : 'black'}}>

//                             Project
//                         </Button>

                        
//                         <Button className={classes.buttonColor}
//                                 variant={"text"}
//                                 onClick={teamsNavigation}
//                                 style={{color: projects ? 'white' : 'black'}}>

//                             Teams
//                         </Button>

//                         <Button className={classes.buttonColor}
//                                 variant={"text"}
//                                 onClick={contactNavigation}
//                                 style={{color: projects ? 'white' : 'black'}}>

//                             Contact Us
//                         </Button>

//                     </div>

//                 </div>

//         </div>
//     )
// }


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
  const location = useLocation();

  const [open, setOpen] = useState(false);
  const [projects, setProjects] = useState(false)

  const handleClick = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
    setProjects(false)

  };

  const closeMenuProjects = () => {
    setOpen(false);
    setProjects(true)
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className="navbar" style={{ background: location.pathname === "/projects" ? '#52330D' : 'white' }}>
      <div className="emptyDiv">
      </div>
      <Link to="/" className="nav-logo"  onClick={closeMenu}>
         <img src={location.pathname === "/projects" ? "/Navigation/Logo-White.png"  : "/Navigation/Logo.png"}/>
      </Link>
      <div onClick={handleClick} className="nav-icon">
        {open ? <FiX /> : <FiMenu />}
      </div>
      <ul className={open ? "nav-links active" : "nav-links"}>
        <li className="nav-item">
          <Link to="/projects" className="nav-link" onClick={closeMenuProjects}  >
           Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/teams" className="nav-link" onClick={closeMenu} >
            Teams
          </Link>
        </li>
        {/* <li className="nav-item">
          <Link to="/services" className="nav-link" onClick={closeMenu}>
            Services
          </Link>
        </li> */}
    
        <li className="nav-item">
          <Link to="/contact" className="nav-link" onClick={closeMenu}>
            Contact
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/about" className="nav-link" onClick={closeMenu}>
            About
          </Link>
        </li>
      </ul>

      <ul className="right">
        {/* <InstagramIcon
          fontSize="large"
          className="instagram-icon"
          onClick={(event) =>
            (window.location.href = "https://www.instagram.com/nityaayurveda/")
          }
        /> */}
      </ul>

      {/* <ul className={"nav-log"}>
        <li className="nav-item" className="nav-link" className="log-in">
          <LoginNavBar
            isLoginShown={isLoginShown}
            setIsLoginShown={setIsLoginShown}
            isSignUpShown={isSignUpShown}
            setIsSignUpShown={setIsSignUpShown}
          /> */}
      {/* START: Login/SignUp Modal */}
      {/* <Box display="flex" justifyContent="flex-end"> */}
      {/* Login Modal */}
      {/* <Box
              position="absolute"
              width="50%"
              display="flex"
              justifyContent="center"
              zIndex={40}
            >
              <Box
                ref={loginWrapperRef}
                className={classes.authModal}
                hidden={!isLoginShown}
              >
                <LogIn />
              </Box>
            </Box> */}

      {/* Sign Up Modal */}
      {/* <Box display="flex" justifyContent="flex-end">
              <Box
                position="absolute"
                width="50%"
                display="flex"
                justifyContent="center"
                zIndex={40}
              >
                <Box
                  ref={signupWrapperRef}
                  className={classes.authModal}
                  hidden={!isSignUpShown}
                >
                  <SignUp />
                </Box>
              </Box>
            </Box>
          </Box>
        </li>
      </ul> */}
    </nav>
  );
};

export default Navbar;
