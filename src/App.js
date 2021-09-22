import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useHistory } from 'react-router';
import Home from '../src/Home/Home'
import Projects from './Projects/Projects.jsx';
import Teams from './Teams/Teams';
import Contact from './Contact/scheduleMeeting'
//import { Navigation } from './Navigation/navigation';
import Navigation from '../src/Navigation/navigation';
import Footer from './Footer/Footer';

function App() {

  const history = useHistory()

  return (

    <div>
      <Router>

        <div>

          <Navigation />

          <Switch>
            <Route path="/about">

            </Route>

            <Route path="/projects">

              <Projects />

            </Route>

            <Route path="/contact">

              <Contact />

            </Route>

            <Route path="/teams">

              <Teams />

            </Route>

            <Route path="/">

              <Home />

            </Route>

          </Switch>

          <Footer />

        </div>



      </Router>

    </div>

  );
}

export default App;
