import logo from "./image/logo.png";
import "./App.css";
import Navbar from "./Navbar/Navbar.js";
import WhatWeDo from "./Homepage/WhatWeDo.js";
import ScheduleAMeeting from "./Homepage/ScheduleAMeeting.js";
import Profolio from "./Homepage/Profolio.js";
import How_we_can_help from "./Homepage/How_we_can_help.js";
import Contact from "./Homepage/Contact.js";
import Footer from "./Homepage/Footer.jsx";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Media() {
  return <section id="media"></section>;
}
function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route path="/how-we-can-help" component={How_we_can_help} />
          <Route path="/" component={Main} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export function Main() {
  return (
    <main style={{ textAlign: "center" }}>
      <WhatWeDo />
      <ScheduleAMeeting />
      <Profolio />
      <Contact />
    </main>
  );
}
export default App;
