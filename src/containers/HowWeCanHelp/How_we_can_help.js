import React, { Component } from "react";
import how1 from "../../assets/images/HowWeCanHelp.svg";
import How_We_Can_Help_Portfolio from "./How_we_can_help_Portfolio.js";
import { Link } from "react-router-dom";
import { Grid, Row, Col } from 'react-bootstrap';

import "./HWCH.css";
import NityaAyurveda from "../../assets/images/Nitya/NityaAyurvedaLogo@2x.png";
import Manifest from "../../assets/images/Manifest.png";
import WalkWithPop from "../../assets/images/WalkWithPop/Welcome screen@2x.png";
import UI from "../../assets/images/HowWeCanHelpIcons/Group 532.svg";
import WEB from "../../assets/images/HowWeCanHelpIcons/Group 418.svg";
import Mobile from "../../assets/images/HowWeCanHelpIcons/Group 403.svg";


class App extends Component {
  render() {
    return (
      <div>
        <div style={{ marginLeft: "10%", marginRight: "10%" }}>
        <div className="topTitle">
          <p
             style={{
            //   fontSize: "84px",
            //   textAlign: "center",
            //   fontWeight: "bold",
               color: "#52330D",
            //   fontFamily: "AvenirHeavy",
             }}
          >
            
            You bring the idea,{" "}
            <span style={{ color: "#F6A833" }}>We fill the</span>{" "}
            <span style={{ color: "white", webkitTextStroke: "2px #F6A833" }}>
              gaps
            </span>
            <br />
            See how it all fits together
          </p>
          </div>



          <div>
            <img
              src={how1}
              style={{ width: "100%" }}
              alt="Infinite Options diagram"
            ></img>
          </div>
          <div>
            <p className="topInfo"
              // style={{
              //   fontSize: "42px",
              //   // fontSize: "180%",
              //   marginLeft: "25px",
              //   marginRight: "auto",
              //   marginTop: "100px",
              //   marginBottom: "100px",
              //   textAlign: "left",
              //   color: "#52330D",
              //   fontFamily: "AvenirHeavy",
              // }}
            >
              All journeys are different and unique. We understand that there might be things that you and 
              your team are already great at. We want to help you fill in the necessary gaps so you have everything 
              you need to be successful.
            </p>
          </div>
          <br /><br />
          <Link to="appointment" aria-label="Click here to schedule a meeting">
            <button
              style={{
                height: "100px",
                width: "500px",
                borderRadius: "50px",
                // marginBottom: "200px",
                backgroundColor: "#F6A833",
                border: "1px solid #F6A833",
                color: "white",
                fontSize: "30px",
              }}
            >
              Let's Engage
            </button>
          </Link>
        </div>
        {/* <How_We_Can_Help_Portfolio /> */}



        <div className="bottomTitle">
            <h1 className="h1">Products we helped build</h1>
        </div>
          
        <br />
        <div>
          <Row style={{height:"500px"}}>
            <div className="halfContainer">
              <div >
                <img src={NityaAyurveda} className="fitDiv" />
              </div>
            </div>
            <div className="halfContainer">
              <p className="projTitle">Nitya Ayurveda</p>
              <p className="information">We redesigned the website for an Ayurvedic practitioner to make it pop 
                and convey their messaging around Ayurveda. We also simplified the user flow to make it easier 
                for people to understand the services and book appointments.
              </p>
              <div className="alignBtn">
              <a href="https://www.nityaayurveda.com/"><button className="ProjectBtn" >View Project</button></a>
              
              &nbsp;&nbsp;&nbsp;
              <img className="UIicon" src={UI} />
              &nbsp;&nbsp;&nbsp;
              <img className="WebIcon" src={WEB} />
              </div>
            </div>
          </Row>

            <br /><br />
          
          <Row style={{height:"500px"}}>
            <div className="halfContainer">
              <p className="projTitle">Manifest</p>
              <p className="information">We designed and developed a productivity to help people with 
              short-term memory loss gain control of their lives without the app dominating it - in 
              collaboration with Tulane University.
              </p>
              <br />
              <div className="alignBtn">
              <a href="" ><button className="ProjectBtn" >Coming Soon</button></a>
              
              <br /><br />
              <img className="UIicon" src={UI} />
              &nbsp;&nbsp;&nbsp;
              <img className="WebIcon" src={WEB} />
              &nbsp;&nbsp;&nbsp;
              <img className="MobileIcon" src={Mobile} />
              </div>
            </div>
            <div className="halfContainer">
              <div >
                <img src={Manifest} className="fitDiv" />
              </div>
            </div>
          </Row>
          
          <br /><br />

          <Row style={{height:"500px"}}>
            <div className="halfContainer">
              <div style={{backgroundColor:"#F87F1C"}}>
                <img src={WalkWithPop} className="fitDiv" />
              </div>
            </div>
            <div className="halfContainer">
              <p className="projTitle">Walk with Pop</p>
              <p className="information">We designed an initial wireframe to bring the idea for this start-up in 
              a tangible form to be shared with potential users and stakeholders.
              </p>
              <br />
              <div className="alignBtn">
              <a href=""><button className="ProjectBtn" >Coming Soon</button></a>
              
              <br /><br />
              <img className="UIicon" src={UI} />
              </div>
            </div>
          </Row>

        </div>
              
          <br /><br /><br /><br /><br /><br />

      </div>
    );
  }
}

export default App;
