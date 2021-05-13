import logo from "./image/logo.png";
import flow from "./image/flow.png";
import "./App.css";
import Navbar from "./Navbar/Navbar.js";
import WhatWeDo from "./Homepage/WhatWeDo.js";
import ScheduleAMeeting from "./Homepage/ScheduleAMeeting.js";
import Profolio from "./Homepage/Profolio.js";
import How_we_can_help from "./Homepage/How_we_can_help.js";
import Chat from "./Homepage/Chat";
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Contact from "./Homepage/Contact.js";
import Footer from "./Homepage/Footer.jsx";
import ServingFresh from "./ServingFresh/ServingFresh";
import Careers from "./Homepage/Careers";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
        <Route exact path="/" component={Main}/>
          <Route exact path="/whatwedo" component={WhatWeDo}/>
          <Route path="/how_we_can_help" component={How_we_can_help}/>
          <Route path="/contact" component={Chat}/>
          <Route path="/portfolio" component={Profolio}/>
          <Route path="/Careers" component={Careers}/>
          <Route path="/ServingFresh" component={ServingFresh}/>
        </Switch>
        <Footer></Footer>
      </div>
      </BrowserRouter>
      <BrowserRouter>
      
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
      <Profolio />
      <Chat />
      
    </main>
  );
}
export default App;
