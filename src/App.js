import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router";
import Home from "../src/Home/Home";
import Projects from "./Projects/Projects.jsx";
import Teams from "./Teams/Teams";
import Contact from "./Contact/scheduleMeeting";
//import { Navigation } from './Navigation/navigation';
import Navigation from "../src/Navigation/navigation";
import MealsForMe from "../src/MealsForMe/mealsforme";
import Nitya from "../src/Nitya/nitya";
import ServingFresh from "../src/ServingFresh/servingFresh";
import DocuSignLogin from "./DocuSign/DocuSignLogin";
import ReturnPage from "./DocuSign/ReturnPage";
import Footer from "./Footer/Footer";
import PrivacyPolicy from "./Privacy/PrivacyPolicy";

function App() {
  const history = useHistory();

  return (
    <div>
      <Router>
        <div>
          <Navigation />

          <Switch>
            {" "}
            <Route path="/send-offer">
              <DocuSignLogin />
            </Route>{" "}
            <Route path="/return-page">
              <ReturnPage />
            </Route>
            <Route path="/servingFresh">
              <ServingFresh />
            </Route>
            <Route path="/nitya">
              <Nitya />
            </Route>
            <Route path="/mealsForMe">
              <MealsForMe />
            </Route>
            <Route path="/about"></Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/privacy">
              <PrivacyPolicy />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/teams">
              <Teams />
            </Route>
            <Route path="/">
              <Home />
            </Route>{" "}
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
