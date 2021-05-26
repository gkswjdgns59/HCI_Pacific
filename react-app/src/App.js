import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Router, Switch, Link, Route } from 'react-router-dom'

import PageParties from './components/PageParties'
import PageOpen from './components/PageOpen'
import PageParty from './components/PageParty'

class App extends Component{
  render(){
    return (
    // <div className="App" style={{marginLeft:240, marginRight:240}}>
    <div className="App">
      <div className="container">
          <div className="row">
              <div className="col-xs-1 col-md-2"></div>
              <div className="col-xs-10 col-md-8"></div>
                <BrowserRouter>
                  <Route exact path="/" component={PageParties}/>
                  <Route exact path="/open" component={PageOpen}/>
                  <Route exact path="/parties/partyname" component={PageParty}/>
                </BrowserRouter>
              <div className="col-xs-1 col-md-2"></div>
          </div>
      </div>
    </div>
    );
  }
}

export default App;
