import logo from "./image/logo.png";
import flow from "./image/flow.png";
import "./App.css";
import Navbar from "./Navbar/Navbar.js";
import WhatWeDo from "./Homepage/WhatWeDo.js";
import WhatWeDo1 from "./Homepage/WhatWeDo1.js";
import ScheduleAMeeting from "./Homepage/ScheduleAMeeting.js";
import Portfolio from "./Homepage/Portfolio.js";
import Portfolio1 from "./Homepage/Portfolio1.js";
import How_we_can_help from "./Homepage/How_we_can_help.js";
import How_we_can_help_Portfolio from "./Homepage/How_we_can_help_Portfolio.js";
import Chat from "./Homepage/Chat";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./Homepage/Footer.jsx";
import ServingFresh from "./ServingFresh/ServingFresh";
import Careers from "./Homepage/Careers";
import Appointment from "./Appointment/scheduleMeeting.js";
import MealsForMe from "./MealsForMe/MealsForMe";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/WhatWeDo" component={WhatWeDo} />
            <Route path="/WhatWeDo1" component={WhatWeDo1} />
            <Route path="/how_we_can_help" component={How_we_can_help} />
            <Route
              path="/How_we_can_help_portfolio"
              component={How_we_can_help_Portfolio}
            />
            <Route path="/contact" component={Chat} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/portfolio1" component={Portfolio1} />
            <Route path="/Careers" component={Careers} />
            <Route path="/ServingFresh" component={ServingFresh} />
            <Route path="/MealsForMe" component={MealsForMe} />
            <Route path="/appointment" component={Appointment} />
          </Switch>
          <Footer></Footer>
        </div>
      </BrowserRouter>
      {/* <ServingFresh></ServingFresh> */}
    </div>
  );
}

export function Main() {
  return (
    <main style={{ textAlign: "center" }}>
      <WhatWeDo1 />
      <ScheduleAMeeting />
      <Portfolio1 />
      <Chat />
    </main>
  );
}
export default App;
