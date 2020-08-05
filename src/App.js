import React from 'react';
import './App.css';
import Nav from './Components/Nav'
import Emails from './Components/Emails'
import IT from './Components/IT'
import OMNI from './Components/OMNI'
import Orders from './Components/Orders'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
      <Nav />
        <Switch>
          <Route path="/" exact component = {Home} />
          <Route path="/Emails" component = {Emails} />
          <Route path="/Orders" component = {Orders} />
          <Route path="/IT" component = {IT} />
          <Route path="/OMNI" component = {OMNI} />          
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
