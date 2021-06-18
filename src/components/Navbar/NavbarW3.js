import "./portfolio.css";
import logo from "../image/logo.png";
import {NavLink} from 'react-router-dom';
import Profolio from "../Homepage/Profolio";

import classes from './NavBar.module.css'
import border from '../image/border.png'

import "./NavBar.css";


const style = {
  borderBottom: "6px solid #F6A833",
  marginBottom:'100px',
  
};



function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


const Navbar = () => {
  return (
    
    <nav style={{marginBottom:'100px', borderBottom:'1px ',borderBottomColor:'black'}}>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous"></link>
      <script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>

      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div style={{width:'33%'}}>
      <img src={logo} alt="logo" style={{float:'left',marginTop:'35px'}}/>
      </div>


      <div class="topnav" id="myTopnav" style={{width:'66%',float:'right'}}>
          <a href="#home" class="active">Home</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
          <a href="javascript:void(0);" class="icon" onclick="myFunction()">
          <i class="fa fa-bars"></i>
          </a>

      </div>

      <img style={{width:'100%'}}src={border}></img>
      
    </nav>

    
  );
};

export default Navbar;