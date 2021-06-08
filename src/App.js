import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//components
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar/Navbar.js";
//containers
//homepage
import WhatWeDo from "./Homepage/WhatWeDo.js";
import ScheduleAMeeting from "./Homepage/ScheduleAMeeting.js";
import Portfolio from "./Homepage/Portfolio.js";
import Chat1 from "./Homepage/Chat/Chat1";
//subpage
import Careers from "./containers/Careers/Careers";
import Appointment from "./containers/Appointment/scheduleMeeting.js";
import ServingFresh from "./containers/ServingFresh/ServingFresh";
import MealsForMe from "./containers/MealsForMe/MealsForMe";
import How_we_can_help from "./containers/HowWeCanHelp/How_we_can_help.js";

function App() {
  return (
    <div className="App" style={{ height: "auto" }}>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/WhatWeDo" component={WhatWeDo} />
            <Route path="/how_we_can_help" component={How_we_can_help} />
            <Route path="/contact" component={Chat1} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/careers" component={Careers} />
            <Route path="/servingfresh" component={ServingFresh} />
            <Route path="/mealsforMe" component={MealsForMe} />
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
      <WhatWeDo />
      <ScheduleAMeeting />
      <Portfolio />
      <Chat1 />
    </main>
  );
}
export default App;
