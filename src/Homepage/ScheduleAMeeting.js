import { Link } from "react-router-dom";
import React, { Component } from "react";
import "./ScheduleAMeeting.css";

class App extends Component {
  render() {
    return (
      <section className="outsideDiv" 
      // style={{ backgroundColor: "#F6A833" }}
      >
        <div className="firstDiv">
          {/* <h1 className="firstH1">
            Let’s chat about design and development solutions for your business
          </h1> */}
          <Link to="appointment" aria-label="Click here to schedule a meeting">
            <button className="firstButton" aria-hidden="true" tabindex="-1">
              Schedule a meeting
            </button>
          </Link>
        </div>
      </section>
    );
  }
}

export default App;
