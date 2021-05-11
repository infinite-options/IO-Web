import logo from "./image/logo.png";
import flow from "./image/flow.png";
import "./App.css";

import Navbar from "./Navbar/Navbar.js";
import WhatWeDo from "./Homepage/WhatWeDo.js";
import ScheduleAMeeting from "./Homepage/ScheduleAMeeting.js";
import Profolio from "./Homepage/Profolio.js";
import How_we_can_help from "./Homepage/How_we_can_help.js";
import Footer from "./Homepage/Footer";
import Chat from "./Homepage/Chat";
import {BrowserRouter,Route,Switch} from 'react-router-dom';

function Media() {
  return <section id="media"></section>;
}

// function Main() {
//   return (
//     <main>
//       <WhatWeDo />
//       <ScheduleAMeeting />
//       <Profolio />
//       <Contact />
//     </main>
//   );
// }

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/whatwedo" component={WhatWeDo}/>
          <Route path="/media" component={How_we_can_help}/>
          <Route path="/getinvolved" component={Chat}/>
          <Route path="/portfolio" component={Profolio}/>
        </Switch>
      </div>
      </BrowserRouter>
      {/* <How_we_can_help></How_we_can_help>
      
      <Chat></Chat> */}
      
      
    <Footer/>
    </div>
  );
}

export default App;
