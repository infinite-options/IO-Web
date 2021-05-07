import logo from "./image/logo.png";
import "./App.css";

import Navbar from "./Navbar/Navbar.js";
import WhatWeDo from "./Homepage/WhatWeDo.js";
import ScheduleAMeeting from "./Homepage/ScheduleAMeeting.js";
import Profolio from "./Homepage/Profolio.js";
import Contact from "./Homepage/Contact.js";

function Media() {
  return <section id="media"></section>;
}

function Main() {
  return (
    <main>
      <WhatWeDo />
      <ScheduleAMeeting />
      <Profolio />
      <Contact />
    </main>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
