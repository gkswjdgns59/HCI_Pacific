import './App.css';
import React, { Component } from 'react';
import Header from "./components/header"
import Parties from './components/Parties'
import PartiesTab from "./components/PartiesTab"
import {Parties_page_tab} from "./components/Parties_page_tab"
import PartiesMain from "./components/PartiesMain"
import {Guests} from './components/Guests'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'

class App extends Component{
  render(){
    return (

      <div class="container">
    <div class="row">
        <div class="col-xs-1"></div>
        <div class="col-xs-10"><div className="App">
      <Header></Header>
      {/* <Parties_page_tab></Parties_page_tab> */}
      <Parties></Parties>
      {/* <Guests></Guests> */}
    </div></div>
        <div class="col-xs-1"></div>
    </div>
</div>

    
    );
  }
}

export default App;
