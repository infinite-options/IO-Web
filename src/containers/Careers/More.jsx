import flow from "../../assets/images/flow.png";
import React, { Component } from "react";
import logo from "../../assets/images/IOLogos/IOlogo.png";
import PDF from "./PDF";

class App extends Component {
  render() {
    return (
      <div
        id="pdf"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "2rem",
        }}
      >
        <p
          style={{
            fontSize: "200%",
            fontWeight: "bold",
            color: "#52330D",
            marginBottom: "100px",
            textDecoration: "underline",
          }}
        >
          More about us
        </p>
        <PDF />
      </div>
    );
  }
}

export default App;
