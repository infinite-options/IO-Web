import Chat from "./Chat1.js";
import Flowimg from "./Flowimg";
import PDF from "./PDF";
import ScrollToTop from "../Appointment/ScrollToTop.js";
import More from "./More";

import React, { Component } from "react";
import "../../ScrollToTop.js";
import ScrollToTop from "../Appointment/ScrollToTop.js";

class App extends Component {
  render() {
    return (
      <div>
        <ScrollToTop />
        <Flowimg></Flowimg>
        <Chat></Chat>

        <More></More>
        <PDF />
      </div>
    );
  }
}
export default App;
