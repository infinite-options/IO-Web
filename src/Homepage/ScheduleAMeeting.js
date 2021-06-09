import { Link } from "react-router-dom";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <section style={{ backgroundColor: "#F6A833" }}>
        <div
          style={{
            margin: "auto",
            width: "50%",
            padding: "50px",
            fontFamily: "AvenirHeavy",
          }}
        >
          <h1 style={{ color: "White", fontSize: "200%" }}>
            Let’s chat about design and development solutions for your business
          </h1>
          <Link to="appointment">
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
            >
              Schedule a meeting
            </button>
          </Link>
        </div>
      </section>
    );
  }
}

export default App;
