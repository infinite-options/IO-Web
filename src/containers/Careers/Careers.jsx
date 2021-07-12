import Chat from "./Chat1.js";
import Flowimg from "./Flowimg";
import More from "./More";

import React, { Component } from "react";

import ScrollToTop from "../Appointment/ScrollToTop.js";

class App extends Component {
  render() {
    return (
      <div>
        <ScrollToTop />
        <Flowimg></Flowimg>
        <Chat></Chat>
        <More></More>
      </div>
    );
  }
}
export default App;
