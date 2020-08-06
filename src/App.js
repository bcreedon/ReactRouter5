import React from 'react';
import './App.css';
import Nav from './Components/Nav'
import Emails from './Components/Emails'
import DatabaseLookup from './Components/DatabaseLookup'
import ManagerLookup from './Components/ManagerLookup'
import Orders from './Components/Orders'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
      <Nav />
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/Emails" element = {<Emails />} />
          <Route path="/Orders" element = {<Orders />} />
          <Route path="/DatabaseLookup" element = {<DatabaseLookup />} />
          <Route path="/ManagerLookup" element = {<ManagerLookup />} />

        </Routes>
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
