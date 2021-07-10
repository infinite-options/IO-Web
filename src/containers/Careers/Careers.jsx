import Chat from "./Chat1.js";
import Flowimg from "./Flowimg";
import PDF from "./PDF";
import ScrollToTop from "../Appointment/ScrollToTop.js";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <ScrollToTop />
        <Flowimg></Flowimg>
        <Chat></Chat>
        <PDF />
      </div>
    );
  }
}
export default App;
