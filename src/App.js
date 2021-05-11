import logo from "./image/logo.png";
import "./App.css";

import Navbar from "./Navbar/Navbar.js";
import WhatWeDo from "./Homepage/WhatWeDo.js";
import ScheduleAMeeting from "./Homepage/ScheduleAMeeting.js";
import Profolio from "./Homepage/Profolio.js";
import How_we_can_help from "./Homepage/How_we_can_help.js";
import Contact from "./Homepage/Contact.js";
import Footer from "./Homepage/Footer.jsx";

function Media() {
  return <section id="media"></section>;
}

function Main() {
  return (
    <main style={{ textAlign: "center" }}>
      <WhatWeDo />
      <ScheduleAMeeting />
      <Profolio />
      <Contact />
    </main>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      {/* <How_we_can_help></How_we_can_help> */}
      <Footer />
    </div>
  );
}

export default App;
