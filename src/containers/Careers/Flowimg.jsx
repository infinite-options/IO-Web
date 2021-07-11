import flow from "../../assets/images/flow.png";
import React, { Component } from "react";
import logo from "../../assets/images/IOLogos/IOlogo.png";

class App extends Component {
  render() {
    return (
      <div >
        <img
                src={logo}
                alt="logo"
                style={{marginTop: "35px" }}
                aria-label="Infinite Options logo"
          />
        <p
          style={{
            fontSize: "200%",
            fontWeight: "bold",
            color: "#52330D",
            marginBottom: "100px",
          }}
        >
          We work with people who would benefit from real world <br></br>
          experience. We offer a safe, supportive environment where<br></br>
          you’ll get a chance to learn and hone your skills.
        </p>
        <u style={{ fontSize: "200%", fontWeight: "bold", color: "#52330D" }}>
          Our Process
        </u>
        <p
          style={{
            fontSize: "200%",
            fontWeight: "bold",
            color: "#52330D",
            marginBottom: "100px",
          }}
        >
          We learn by doing. The best way to get good at something is to do it -
          preferably in a safe, supportive environment.
        </p>
        <img
          style={{ height: "100%", width: "100%" }}
          src={flow}
          aria-label="Infinite Options workflow diagram"
        ></img>
        <p
          style={{
            fontSize: "180%",
            fontWeight: "bold",
            color: "#52330D",
            marginBottom: "100px",
          }}
        >
          It’s an iterative process. Both success and failure teach us <br /> something
          and are key to Project Based learning.
        </p>
      </div>
    );
  }
}

export default App;
