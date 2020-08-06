import React from 'react';
import './App.css';
import Emails from './Components/Emails'
import IT from './Components/IT'
import OMNI from './Components/OMNI'
import Orders from './Components/Orders'
import {Router} from '@reach/router'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
          <Home path="/" />
          <Emails path="/Emails" />
          <Orders path="/Orders" />
          <IT path="/IT" />
          <OMNI path="/OMNI" />          
    </Router>
  );
}

const Home = () => (
  <div>
    <nav />
    <h1>Home Page</h1>
  </div>
);

export default App;
