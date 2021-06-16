import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
import  "./WhatWeDo.css";

class App extends Component {
  render() {
    return (
      <section id="whatWeDo">
        <div
          style={{
            margin: "auto",
            width: "80%",
            padding: "50px",
            marginBottom: "100px",
            fontFamily: "AvenirHeavy",
          }}
        >
          <h1 style={{ fontSize: "400%", color: "#52330D" }}>
            We are entrepreneurs on a mission to build cool products{" "}
            <span style={{ color: "#F6A833" }}>
              & help fellow entrepreneurs on their journey
            </span>
          </h1>
          <Link
            to="how_we_can_help"
            aria-label="Let's build something together. Click to see how we can help"
          >
            <button
              style={{
                backgroundColor: "#52330D",
                border: "none",
                color: "white",
                padding: "15px 30px",
                textAlign: "center",
                textDecoration: "none",
                display: "inline-block",
                fontSize: "20px",
                borderRadius: "50px",
              }}
              aria-hidden="true"
              tabindex="-1"
            >
              Let’s build something together
            </button>
          </Link>
        </div>
      </section>
    );
  }
}

export default App;
