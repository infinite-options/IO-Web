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
import ourPortfolio from "./containers/Portfolio/portfolio.js";
import Chat1 from "./containers/Careers/Chat1";
//subpage
import Careers from "./containers/Careers/Careers";
import Appointment from "./containers/Appointment/scheduleMeeting.js";
import ServingFresh from "./containers/ServingFresh/ServingFresh";
import Nitya from "./containers/Nitya/Nitya";
import MealsForMe from "./containers/MealsForMe/MealsForMe";
import How_we_can_help from "./containers/HowWeCanHelp/How_we_can_help.js";
import MessengerCustomerChat from "react-messenger-customer-chat";

import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "auto" }}>
        <BrowserRouter>
          <div className="App">
            <MessengerCustomerChat
              pageId="110111434630375"
              appId="941694233292147"
            />
            <Navbar />
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/WhatWeDo" component={WhatWeDo} />
              <Route path="/how_we_can_help" component={How_we_can_help} />
              <Route path="/contact" component={Chat1} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/ourPortfolio" component={ourPortfolio} />
              <Route path="/careers" component={Careers} />
              <Route path="/servingfresh" component={ServingFresh} />
              <Route path="/mealsforMe" component={MealsForMe} />
              <Route path="/NityaAyurveda" component={Nitya} />
              <Route path="/appointment" component={Appointment} />
            </Switch>
            <Footer></Footer>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export function Main() {
  return (
    <main style={{ textAlign: "center" }}>
      <WhatWeDo />
      <Portfolio />
      <ScheduleAMeeting />
    </main>
  );
}

export default App;
