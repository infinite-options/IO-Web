import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
import  "./WhatWeDo.css";

class App extends Component {
  render() {
    return (
      <section id="whatWeDo">
        <div>
          <h1 className="mainH" style={{color: "#52330D"}}>
            We are entrepreneurs on a mission to build cool products{" "}
            <span style={{ color: "#F6A833" }}>
              & help fellow entrepreneurs on their journey
            </span>
          </h1>
          <Link
            to="how_we_can_help"
            aria-label="Let's build something together. Click to see how we can help"
          >
            <button className="mainBtn"
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
