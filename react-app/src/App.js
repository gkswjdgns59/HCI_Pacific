import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import PageParties from './components/PageParties'
import PageOpen from './components/PageOpen'
import PageEdit from './components/PageEdit'
import PageParty from './components/PageParty'
import PageGuestInfo from './components/PageGuestInfo'
import PageGuestbook from './components/PageGuestbook';
import {Mypage} from './components/Mypage'

class App extends Component{
  render(){
    return (
    // <div className="App" style={{marginLeft:240, marginRight:240}}>
    <div className="App">
      <div className="container">
          <div className="row">
              <div className="col-xs-1 col-md-2"></div>
              <div className="col-xs-10 col-md-8"></div>
              {/*<Mypage></Mypage>*/}                  
                <BrowserRouter>
                  <Route exact path="/" component={PageParties}/>
                  <Route exact path="/open" component={PageOpen}/>
                  <Route exact path="/parties/:partyname/edit" component={PageEdit}/>
                  <Route exact path="/parties/:partyname" component={PageParty}/>
                  <Route exact path="/guests/:guestname" component={PageGuestInfo}/>
                  <Route exact path="/guestbook" component={PageGuestbook}/>
    </BrowserRouter> 
              <div className="col-xs-1 col-md-2"></div>
          </div>
      </div>
    </div>
    );
  }
}

export default App;
