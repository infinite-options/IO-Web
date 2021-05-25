import logo from "../image/logo.png";
import { NavLink } from "react-router-dom";
import Portfolio from "../Homepage/Portfolio";

import classes from "./NavBar.module.css";
import border from "../image/border.png";

const style = {
  // borderBottom: "6px solid #F6A833",
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
      <div style={{width:'66%',float:'right'}}>
      <ul className={classes.ul}>
        <li className={classes.li}>
        <NavLink style={{color:'black',textDecoration:'none'}}  exact activeStyle={{color:'white',backgroundColor:'#f6a833',borderRadius:'20px',border:'15px solid #f6a833'}} to="/">
          What We Do
          </NavLink>
          </li>
        <li className={classes.li}>
        <NavLink style={{color:'black',textDecoration:'none'}}  exact activeStyle={{color:'white',backgroundColor:'#f6a833',borderRadius:'20px',border:'15px solid #f6a833'}} to="/how_we_can_help">
          How We Can Help
          </NavLink>
        </li>
        <li className={classes.li}>
        <NavLink style={{color:'black',textDecoration:'none'}}  exact activeStyle={{color:'white',backgroundColor:'#f6a833',borderRadius:'20px',border:'15px solid #f6a833'}} to="/portfolio1">
          Our Portfolio
          </NavLink>
        </li>
        <li className={classes.li}>
        <NavLink style={{color:'black',textDecoration:'none'}}  exact activeStyle={{color:'white',backgroundColor:'#f6a833',borderRadius:'20px',border:'15px solid #f6a833'}} to="/contact">
          Contact Us
          </NavLink>
        </li>
        
      </ul>
      </div>
      <img style={{width:'100%',marginTop:'25px'}}src={border}></img>
      
    </nav>
  );
};

export default Navbar;
{
  /* <ul style={{fontSize:'25px',listStyleType:'none',float:'left'}}>
        <li style={{float:'right',margin:'20px',}}>
        <NavLink to="/whatwedo">
          <p style={{fontSize:'32px'}}>What We Do</p>
          </NavLink>
        </li>
        <li style={{float:'right',margin:'20px'}}>
        <NavLink to="/media">
          <p style={{fontSize:'32px'}}>How_we_can_help</p>
          </NavLink>
        </li>

        <li style={{float:'right',margin:'20px'}}>
        
          <p style={{fontSize:'32px'}}>Contact</p>
          
        </li >
        <li style={{float:'right',margin:'20px'}}>
        <NavLink to="/portfolio">
          <p style={{fontSize:'32px'}}>Our Portfolio</p>
          </NavLink>
        </li>
        <li style={{float:'right',margin:'20px'}}>
        <NavLink to="/getinvolved">
          <p style={{fontSize:'32px'}}>Get Involved</p>
          </NavLink>
        </li>
      </ul> */
}
