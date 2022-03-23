import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from'./pages';
import Contact from'./pages/contact.us';

function App(){
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/contact.us" component={Contact}/>
      </Switch>
    </Router>
  )
}

export default App;
